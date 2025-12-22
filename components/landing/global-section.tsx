import Image from 'next/image';
import worldMap from '@/assets/world-map.svg';
import { User, UserRound } from 'lucide-react';

const onlineUsers =
	(await Math.floor(Math.random() * (10000 - 2000 + 1))) + 2000;

export default function GlobalSection() {
	return (
		<div className='relative w-full flex items-center justify-center'>
			<Image
				src={worldMap}
				alt='World Map'
				fill
				priority
				className='absolute object-cover z-0'
			/>
			<div className='bg-border/85 z-10 w-full flex items-center justify-center py-24'>
				<div className='w-full max-w-[1232px] px-8 flex flex-row items-center justify-center gap-8'>
					<div className='w-full flex flex-col items-start justify-start'>
						<div className='flex flex-row items-center justify-start space-x-1'>
							<UserRound
								size={16}
								strokeWidth={2.5}
								className='text-muted-foreground'
							/>

							<div className='flex flex-row items-center justify-center space-x-0.5'>
								<div className='relative flex h-8 w-8 items-center justify-center'>
									<span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75'></span>

									<span className='relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-sm shadow-green-500/50'></span>
								</div>

								<span className='text-sm font-semibold text-primary'>
									{onlineUsers}
								</span>
							</div>
						</div>
					</div>

					<div className='w-full flex flex-col items-start justify-start'></div>
				</div>
			</div>
		</div>
	);
}
