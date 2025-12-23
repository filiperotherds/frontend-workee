'use client';

import { Highlighter } from '../ui/highlighter';
import { TestimonialCards } from './testimonial-cards';

export default function Testimonials() {
	return (
		<div className='relative w-full h-full flex flex-col items-center justify-center pb-px'>
			<div className='w-full flex flex-row items-stretch justify-center gap-px'>
				<div className='hidden lg:flex min-w-16 flex-1 bg-white rounded-r-lg' />

				<div className='z-10 h-auto items-center justify-center p-8 space-y-8 w-full max-w-[1232px] flex flex-col bg-white rounded-lg'>
					<div className='w-full flex flex-col items-center justify-start space-y-8'>
						<div className='flex flex-row items-center justify-center space-x-3 py-1 px-3 border border-border rounded-full'>
							<span className='text-xs font-medium text-muted-foreground'>
								Depoimentos
							</span>
						</div>

						<h1 className='text-primary text-6xl font-extrabold text-center max-w-[800px]'>
							Histórias reais de quem usa a{' '}
							<Highlighter action='highlight' color='#5fed83'>
								Jobble
							</Highlighter>{' '}
							no dia a dia.
						</h1>

						<p className='text-muted-foreground text-lg leading-8 text-center max-w-[600px]'>
							Veja relatos de pessoas que cresceram suas operações com
							facilidade usando a Jobble.
						</p>
					</div>

					<div className='w-full flex flex-col items-center justify-center'>
						<TestimonialCards />
					</div>
				</div>

				<div className='hidden lg:flex min-w-16 flex-1 bg-white rounded-l-lg' />
			</div>
		</div>
	);
}
