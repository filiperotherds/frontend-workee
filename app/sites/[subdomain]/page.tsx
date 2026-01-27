import profileBg from '@/assets/profile-bg.png';
import Image from 'next/image';
import verifiedIcon from '@/assets/verified.svg';
import Link from 'next/link';
import { getSite } from '@/http/get-site';
import { notFound } from 'next/navigation';

export default async function SubdomainPage({ params }: { params: Promise<{ subdomain: string }> }) {
    const { subdomain } = await params;

    const siteData = await getSite({ slug: subdomain });

    if (!siteData) {
        notFound();
    }

    return (
        <div className="relative w-screen h-screen flex flex-col items-center justify-start">
            <div className='absolute w-full z-20 top-0 flex flex-row items-center justify-between p-4'>
                <span className='text-xs text-semibold text-muted-foreground'>Jobble LTDA © copyright 2026</span>

                <Link href="https://jobble.com.br" target='_blank'>
                    <span className='text-xs text-semibold text-muted-foreground hover:underline decoration-dashed'>Criado por jobble.com.br</span>
                </Link>
            </div>
            <div
                style={{ backgroundImage: `url(${profileBg.src})` }}
                className="w-full md:aspect-[16/3] bg-cover bg-center flex items-center justify-center"
            >
                <div className='flex flex-col items-center justify-center space-y-2'>
                    <div className='size-24 rounded-full border-2 border-blue-500 overflow-hidden p-1 pointer-events-none'>
                        <img src={siteData.avatarUrl} alt={subdomain} className='size-full rounded-full' />
                    </div>

                    <div className='flex flex-row items-center justify-center gap-1'>
                        <h1 className='text-lg font-semibold text-primary'>
                            {siteData.name}
                        </h1>

                        <Image src={verifiedIcon} alt='verified' />
                    </div>

                    <div className='flex flex-row items-center justify-center space-x-4'>

                    </div>
                </div>
            </div>
        </div>
    );
}