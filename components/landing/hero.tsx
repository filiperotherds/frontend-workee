'use client';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Highlighter } from '../ui/highlighter';
import CtaButton from './cta-button';
import { Iphone } from '../ui/iphone';
import Image from 'next/image';

import LpImage from '@/assets/lp-image.png';

export default function Hero() {
	return (
		<div className='relative w-full h-full flex flex-col items-center justify-center py-px'>
			<div className='w-full flex flex-row items-stretch justify-center gap-px'>
				<div className='hidden lg:flex min-w-16 flex-1 bg-white rounded-r-lg' />

				<div className='z-10 h-auto items-center justify-center p-8 w-full max-w-[1232px] flex flex-row bg-white rounded-lg'>
					<div className='w-full flex flex-col items-start justify-start space-y-10'>
						<div className='flex flex-row items-center justify-center space-x-3 p-1 pr-3 border border-border rounded-full'>
							<div className='*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2'>
								<Avatar className='size-7'>
									<AvatarImage
										src='https://github.com/shadcn.png'
										alt='@shadcn'
									/>
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<Avatar className='size-7'>
									<AvatarImage
										src='https://github.com/maxleiter.png'
										alt='@maxleiter'
									/>
									<AvatarFallback>LR</AvatarFallback>
								</Avatar>
								<Avatar className='size-7'>
									<AvatarImage
										src='https://github.com/evilrabbit.png'
										alt='@evilrabbit'
									/>
									<AvatarFallback>ER</AvatarFallback>
								</Avatar>
							</div>

							<span className='text-xs font-medium text-muted-foreground'>
								Escolhido por +600 profissionais
							</span>
						</div>

						<h1 className='text-primary text-6xl font-extrabold text-start max-w-[600px]'>
							Ferramentas e{' '}
							<Highlighter action='highlight' multiline color='#5fed83'>
								clientes
							</Highlighter>{' '}
							para{' '}
							<Highlighter action='underline' multiline color='#facc15'>
								profissionais
							</Highlighter>
						</h1>

						<p className='text-muted-foreground text-lg leading-8 text-start max-w-[600px]'>
							Alcance a visibilidade que seu trabalho merece e profissionalize
							toda a sua operação para crescer com segurança. Uma ferramenta
							completa, pensada para aqueles que constroem o futuro com as
							próprias mãos.
						</p>

						<CtaButton title='VAMOS COMEÇAR' />
					</div>

					<div className='w-full flex flex-col items-end justify-center space-y-10'>
						<div className='w-full md:max-w-3/4'>
							<Image src={LpImage} alt='Jobble' className='size-full' />
						</div>
					</div>
				</div>

				<div className='hidden lg:flex min-w-16 flex-1 bg-white rounded-l-lg' />
			</div>
		</div>
	);
}
