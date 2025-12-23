import { LucideIcon } from 'lucide-react';

const colorVariants: Record<string, string> = {
	red: 'bg-red-500',
	blue: 'bg-blue-500',
	green: 'bg-green-500',
	yellow: 'bg-yellow-500',
	purple: 'bg-purple-500',
	default: 'bg-zinc-500',
};

type FeatureCardProps = {
	color?: keyof typeof colorVariants;
	featureType: string;
	featureTitle: string;
	featureDescription: string;
	icon: LucideIcon;
};

export default function FeatureCard({
	color = 'default',
	featureDescription,
	featureTitle,
	featureType,
	icon: Icon,
}: FeatureCardProps) {
	return (
		<div className='p-1.5 flex items-center justify-center backdrop-blur-xs bg-zinc-800/5 border border-white/25 rounded-xl'>
			<div className='p-2 space-y-3 flex flex-col items-start justify-start bg-zinc-800/5 backdrop-blur-md border border-white/25 rounded-lg'>
				<div className='flex flex-row items-center justify-center space-x-1'>
					<div
						className={`${colorVariants[color]} size-5 rounded-full flex items-center justify-center`}>
						<Icon size={14} className='text-white' />
					</div>
					<span className='text-xs font-medium text-muted-foreground'>
						{featureType}
					</span>
				</div>

				<div>
					<h1 className='text-primary font-medium'>{featureTitle}</h1>
					<span className='text-sm text-muted-foreground'>
						{featureDescription}
					</span>
				</div>
			</div>
		</div>
	);
}
