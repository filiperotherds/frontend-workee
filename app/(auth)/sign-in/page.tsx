import { BackgroundGradient } from '@/components/background-gradient';
import { LoginForm } from '@/components/login-form';
import PostCard from '@/components/post-card';
import Link from 'next/link';

import jobbleLogo from '@/assets/jobble-professionals.png';

export default function SignIn() {
	return (
		<div className='bg-background grid min-h-svh lg:grid-cols-2'>
			<div className='flex flex-col gap-4 p-6 md:p-10'>
				<div className='flex justify-center gap-2 md:justify-start'>
					<Link href='/' className='flex items-center gap-2'>
						<img
							src={jobbleLogo.src}
							alt='Jobble Professionals'
							className='w-24'
						/>
					</Link>
				</div>
				<div className='flex flex-1 items-center justify-center'>
					<div className='w-full max-w-xs'>
						<LoginForm />
					</div>
				</div>
			</div>
			<div className='bg-muted relative hidden lg:block'>
				<div className='absolute inset-0 z-0 w-full h-full'>
					<BackgroundGradient />
				</div>

				<div className='relative z-10 flex items-center justify-center h-full'>
					<PostCard
						text='A Jobble conecta você a profissionais qualificados para qualquer
          serviço que você precise. Com avaliações reais e preços transparentes,
          encontrar o profissional ideal nunca foi tão fácil!'
					/>
				</div>
			</div>
		</div>
	);
}
