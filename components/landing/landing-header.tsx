import jobbleLogo from '@/assets/jobble-logo-white.png';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';

export default function LandingHeader() {
	return (
		<div className="w-full max-w-7xl flex flex-row items-center justify-between mb-16">
			<Image src={jobbleLogo} alt="Jobble" className="w-24" />

			<div className="flex flex-row items-center justify-center space-x-5">
				<Link href="/sign-in">
					<Button
						size="lg"
						className="bg-transparent hover:bg-transparent shadow-none border-2 border-white rounded-full font-medium text-white hover:scale-105"
					>
						Fazer Login
					</Button>
				</Link>

				<Link href="/sign-up">
					<Button
						size="lg"
						className="bg-white hover:bg-white/80 text-blue-500 font-medium rounded-full hover:scale-105"
					>
						Começar Agora
						<ChevronRight strokeWidth={2.5} />
					</Button>
				</Link>
			</div>
		</div>
	);
}
