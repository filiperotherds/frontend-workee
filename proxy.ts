import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const url = request.nextUrl;

    // Pega o host (ex: cliente.seusite.com ou localhost:3000)
    const hostname = request.headers.get('host');

    // Defina seu domínio raiz (local e prod)
    // DICA: Coloque "localhost:3000" no .env local e "seusite.com" na Vercel
    const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'localhost:3000';

    // Verifica se é o domínio principal ou www
    const isMainDomain = hostname === rootDomain || hostname === `www.${rootDomain}`;

    // Se for o domínio principal, retornamos next()
    // Isso faz o Next.js procurar as pastas normais: (landing-page), (auth), (app), etc.
    if (isMainDomain) {
        if (url.pathname.startsWith('/sites')) {
            // Reescreve para uma rota que não existe para forçar o 404
            return NextResponse.rewrite(new URL('/404', request.url));
        }

        return NextResponse.next();
    }

    // --- A PARTIR DAQUI, É LOGICA DE SUBDOMÍNIO ---

    // Extrai o subdomínio (ex: "cliente" de "cliente.seusite.com")
    const subdomain = hostname!.split('.')[0];

    // Opcional: Lista de subdomínios reservados que não devem ser tratados como clientes
    // Por exemplo, se "app.seusite.com" for seu dashboard principal e não um site de cliente
    const reservedSubdomains = ['app', 'admin', 'api'];
    if (reservedSubdomains.includes(subdomain)) {
        return NextResponse.next();
    }

    // Reescreve a URL para apontar para a pasta _sites
    // Mantém o path original (ex: /contato) e os searchParams (ex: ?id=1)
    url.pathname = `/sites/${subdomain}${url.pathname}`;

    return NextResponse.rewrite(url);
}

export const config = {
    // O matcher ignora arquivos estáticos, imagens e a pasta api nativa para economizar recursos
    matcher: [
        '/((?!api/|_next/|_static/|[\\w-]+\\.\\w+).*)',
    ],
};