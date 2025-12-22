import { cn } from '@/lib/utils';
import { DotPattern } from '../ui/dot-pattern';
import { Highlighter } from '../ui/highlighter';

export default function ResultInfo() {
	return (
		<div className='relative w-full h-full flex flex-col items-center justify-center pb-px'>
			<div className='w-full flex flex-row items-stretch justify-center gap-px'>
				<div className='hidden lg:flex min-w-16 flex-1 bg-white rounded-r-lg' />

				<div className='relative overflow-hidden z-10 h-auto items-center justify-center p-16 space-y-8 w-full max-w-[1232px] flex flex-col bg-white rounded-lg'>
					<DotPattern
						width={20}
						height={20}
						cx={1}
						cy={1}
						cr={1}
						className={cn(
							'mask-[linear-gradient(to_bottom_left,white,transparent,transparent)] -z-10'
						)}
					/>

					<div className='w-full flex flex-row items-center justify-between'>
						<span className='text-4xl font-semibold text-primary leading-10'>
							Intermediando{' '}
							<Highlighter action='underline' multiline color='#facc15'>
								milhões
							</Highlighter>{' '}
							<br />
							de serviços por ano.
						</span>

						<div className='flex flex-col md:flex-row items-center justify-center gap-8'>
							<div className='flex flex-col items-end justify-start space-y-2'>
								<h1 className='text-6xl font-medium text-primary'>
									<span className='text-theme-primary'>+</span>
									100K
								</h1>

								<span>De orçamentos diários</span>
							</div>

							<div className='flex flex-col items-end justify-start space-y-2'>
								<h1 className='text-6xl font-medium text-primary'>
									<span className='text-theme-primary'>+</span>
									10K
								</h1>

								<span>De serviços ao dia</span>
							</div>
						</div>
					</div>
				</div>

				<div className='hidden lg:flex min-w-16 flex-1 bg-white rounded-l-lg' />
			</div>
		</div>
	);
}
