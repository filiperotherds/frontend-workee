import LogoLoop from '../LogoLoop';
import logo01 from '@/assets/logos/logoipsum-358.svg';
import logo02 from '@/assets/logos/logoipsum-372.svg';
import logo03 from '@/assets/logos/logoipsum-393.svg';
import logo04 from '@/assets/logos/logoipsum-404.svg';
import logo05 from '@/assets/logos/logoipsum-410.svg';

const techLogos = [
	{
		src: logo01.src,
		alt: 'Jobble',
		title: 'Jobble',
		href: 'https://jobble.com.br',
	},
	{
		src: logo02.src,
		alt: 'Jobble',
		title: 'Jobble',
		href: 'https://jobble.com.br',
	},
	{
		src: logo03.src,
		alt: 'Jobble',
		title: 'Jobble',
		href: 'https://jobble.com.br',
	},
	{
		src: logo04.src,
		alt: 'Jobble',
		title: 'Jobble',
		href: 'https://jobble.com.br',
	},
	{
		src: logo05.src,
		alt: 'Jobble',
		title: 'Jobble',
		href: 'https://jobble.com.br',
	},
];

export default function Sponsors() {
	return (
		<div className='relative w-full h-full flex flex-col items-center justify-center pb-px'>
			<div className='w-full flex flex-row items-stretch justify-center gap-px'>
				<div className='hidden lg:flex min-w-16 flex-1 bg-white rounded-r-lg' />

				<div className='z-10 h-auto items-center justify-center p-8 space-y-8 w-full max-w-[1232px] flex flex-col bg-white rounded-lg'>
					<div className='w-full flex flex-row items-center justify-between'>
						<span className='text-sm font-mono text-muted-foreground'>
							Projeto Apoiado por
						</span>

						<span className='text-sm font-mono text-muted-foreground'>
							Copyright © 2026 Jobble
						</span>
					</div>
					<LogoLoop
						logos={techLogos}
						speed={60}
						direction='right'
						logoHeight={48}
						gap={80}
						hoverSpeed={0}
						scaleOnHover
						fadeOut
						fadeOutColor='#fff'
						ariaLabel='Technology partners'
					/>
				</div>

				<div className='hidden lg:flex min-w-16 flex-1 bg-white rounded-l-lg' />
			</div>
		</div>
	);
}
