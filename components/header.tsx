'use client'

import { ProfileButton } from './profile-button';
import Notification from './notification';
import { LucideIcon } from 'lucide-react';

type HeaderProps = {
	pageTitle: string;
	icon: LucideIcon;
};

export default function Header() {
	return (
		<div className='md:sticky top-0 z-20 w-full h-16 px-8 flex items-center justify-between rounded-t-lg bg-secondary'>
			<div className='flex flex-row items-center justify-center gap-2'>
				<Icon size={16} strokeWidth={4} className='text-[#8A8AA3]'/>
				<span className='font-medium'>{pageTitle}</span>
			</div>

			<div className='flex items-center'>
				<Notification />
				<div className='hidden md:flex md:ml-8'>
					<ProfileButton />
				</div>
			</div>
		</div>
	);
}
