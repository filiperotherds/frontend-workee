'use client'

import image500 from '@/assets/500.svg';
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import './globals.css';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html lang="pt-BR">
            <body>
                <div className="h-screen w-screen flex flex-col items-center justify-center bg-white">
                    <Image
                        src={image500}
                        alt='Erro 500'
                        className='max-h-[160px] mb-8'
                    />

                    <Badge className='border-blue-500 bg-blue-500/10 text-blue-500 mb-4'>
                        500 Error
                    </Badge>

                    <h1 className='text-2xl font-bold mb-2 text-black'>
                        Internal Server Error
                    </h1>

                    <p className='text-sm text-muted-foreground mb-6 text-center max-w-[400px]'>
                        <span>Ocorreu um erro crítico no servidor. Tente novamente mais tarde ou </span>
                        {" "}
                        <Link href="/" className='text-blue-500 font-semibold underline'>
                            nos contate
                        </Link>
                        {" "}
                        <span>
                            para assistência.
                        </span>
                    </p>

                    <button
                        onClick={() => reset()}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                        Tentar Novamente
                    </button>
                </div>
            </body>
        </html>
    )
}