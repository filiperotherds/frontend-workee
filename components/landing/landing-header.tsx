import jobbleLogo from '@/assets/jobble-professionals.png';
import Image from 'next/image';
import { NavMenu } from '../nav-menu';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

export default function LandingHeader() {
	return (
		<div className='w-full z-20 flex flex-row items-center justify-center gap-px'>
			<div className='hidden lg:flex min-w-16 flex-1 h-16 bg-white rounded-br-lg' />

			<div className='w-full max-w-[1232px] h-16 flex flex-row items-center justify-between px-8 bg-white rounded-b-lg'>
				<div className='flex flex-row items-center'>
					<Link href='/'>
						<Image src={jobbleLogo} alt='Jobble' className='w-24' />
					</Link>
				</div>

				<div className='h-full flex flex-row items-center justify-center space-x-4'>
					<NavMenu />

					<div className='h-full py-4'>
						<Separator orientation='vertical' />
					</div>

					<Link href='/sign-in'>
						<Button
							variant={'link'}
							className='text-primary hover:text-primary/80 hover:no-underline'>
							Entrar
						</Button>
					</Link>

					<Link href='/sign-up'>
						<Button
							variant={'default'}
							size={'sm'}
							className='bg-theme-primary text-primary hover:bg-theme-primary/80'>
							Cadastre-se
						</Button>
					</Link>
				</div>
			</div>

			<div className='hidden lg:flex min-w-16 flex-1 h-16 bg-white rounded-bl-lg' />
		</div>
	);
}
