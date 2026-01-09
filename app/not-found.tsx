import CtaButton from '@/components/landing/cta-button';
import { CircleSlashIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import notFound from '@/assets/404.png';
import { Button } from '@/components/ui/button';

export default function NotFound() {
	return (
		<div className='font-sans flex flex-col items-center justify-center h-screen w-full gap-8 p-4'>
			<Image src={notFound} alt='404' width={350} />

			<h2 className='text-2xl font-extrabold text-primary text-center'>
				Página não Encontrada!
			</h2>

			<div className='relative'>
				<div className='absolute inset-0 bg-theme-secondary rounded-lg -translate-x-1 translate-y-1' />

				<Link href={'/sign-in'}>
					<Button className='relative bg-theme-primary' size={'lg'}>
                        Voltar
                    </Button>
				</Link>
			</div>
		</div>
	);
}
