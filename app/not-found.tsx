import image404 from '@/assets/404.svg';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-white">
            <Image src={image404} alt='404' className='max-h-[160px] mb-8' />

            <Badge className='border-blue-500 bg-blue-500/10 text-blue-500 mb-4'>
                404 Error
            </Badge>

            <h1 className='text-2xl font-bold mb-2'>
                Perdemos essa página!
            </h1>

            <p className='text-sm text-muted-foreground'>
                <span>A página requisitada não foi encontrada. Verifique a URL ou</span>
                {" "}
                <Link href="/" className='text-blue-500 font-semibold underline'>
                    retorne para o início
                </Link>
                <span>.</span>
            </p>
        </div>
    );
}