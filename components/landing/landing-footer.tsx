'use client';

import Image from 'next/image';
import Link from 'next/link';
import jobbleLogo from '@/assets/jobble-professionals.png';
import { Separator } from '../ui/separator';
import { Instagram, Linkedin } from 'lucide-react';

export default function LandingFooter() {
	return (
		<div className='relative w-full h-full flex flex-col items-center justify-center'>
			<div className='w-full flex flex-row items-stretch justify-center gap-px'>
				<div className='hidden lg:flex min-w-16 flex-1 bg-white rounded-r-lg' />

				<div className='z-10 h-auto flex flex-col items-start justify-start p-8 gap-8 w-full max-w-[1232px] bg-white rounded-lg'>
					<div className='w-full flex flex-row items-start justify-start gap-8 md:gap-16 text-muted-foreground font-medium'>
						<Link href='/'>
							<Image src={jobbleLogo} alt='Jobble' className='w-20' />
						</Link>

						<div className='flex flex-col items-start justify-start space-y-4'>
							<h1 className='text-sm font-medium text-primary'>
								Contato
							</h1>

							<Link href='mailto:ajuda@jobble.com.br'>
								<span className='hover:text-primary transition-colors'>
									ajuda@jobble.com.br
								</span>
							</Link>
						</div>

						<div className='flex flex-col items-start justify-start space-y-4'>
							<h1 className='text-sm font-medium text-primary'>
								Conta
							</h1>

							<Link href='/organization/sign-up'>
								<span className='hover:text-primary transition-colors'>
									Cadastre-se
								</span>
							</Link>

							<Link href='/sign-in'>
								<span className='hover:text-primary transition-colors'>
									Entrar
								</span>
							</Link>
						</div>

                        <div className='flex flex-col items-start justify-start space-y-4'>
							<h1 className='text-sm font-medium text-primary'>
								Institucional
							</h1>

							<Link href='/privacy'>
								<span className='hover:text-primary transition-colors'>
									Privacidade
								</span>
							</Link>

							<Link href='/terms-and-conditions'>
								<span className='hover:text-primary transition-colors'>
									Termos e Condições
								</span>
							</Link>
						</div>
					</div>

					<Separator />

					<div className='w-full flex flex-row items-center justify-between'>
						<span className='text-sm font-medium text-muted-foreground'>
							Copyright © 2025 Jobble LTDA
						</span>

						<div className='flex flex-row items-center justify-end space-x-6 text-muted-foreground'>
							<Link
								href='https://www.instagram.com/jobble.brasil/'
								className='translate-y-0 hover:-translate-y-1 hover:text-primary transition-all duration-300'>
								<Instagram />
							</Link>

							<Link
								href='https://www.instagram.com/jobble.brasil/'
								className='translate-y-0 hover:-translate-y-1 hover:text-primary transition-all duration-300'>
								<Linkedin />
							</Link>
						</div>
					</div>
				</div>

				<div className='hidden lg:flex min-w-16 flex-1 bg-white rounded-l-lg' />
			</div>
		</div>
	);
}
