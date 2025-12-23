import Image from 'next/image';
import worldMap from '@/assets/world-map.svg';
import FeatureCard from './feature-card';
import { DollarSign, FileText, User } from 'lucide-react';
import CtaButton from './cta-button';

export default function FeaturesSection() {
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
					<div className='w-full flex flex-col items-start justify-start space-y-8'>
						<div className='flex flex-row items-center justify-center space-x-0.5'>
							<div className='relative flex h-8 w-8 items-center justify-center'>
								<span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75'></span>

								<span className='relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-sm shadow-green-500/50'></span>
							</div>

							<span className='text-sm font-semibold text-muted-foreground'>
								Alta Disponibilidade
							</span>
						</div>

						<h1 className='text-primary text-5xl font-semibold text-start'>
							Todas as ferramentas <br /> para você escalar seu <br /> negócio{' '}
							<span className='text-green-500'>sem custos!</span>
						</h1>

						<CtaButton title='GARANTA SEU ACESSO'/>
					</div>

					<div className='w-full flex flex-col items-start justify-start space-y-4'>
						<div className='w-full flex flex-row items-center justify-end'>
							<FeatureCard
								color='green'
								featureType='Financeiro'
								featureDescription='Envie links de pagamento e aceite cartão ou Pix sem precisar de maquininha.'
								featureTitle='Recebimentos Online'
								icon={DollarSign}
							/>
						</div>

						<div className='w-full flex flex-row items-center justify-start'>
							<FeatureCard
								color='yellow'
								featureType='Vendas'
								featureDescription='Crie propostas profissionais em PDF e envie direto para o WhatsApp do cliente.'
								featureTitle='Orçamentos Rápidos'
								icon={FileText}
							/>
						</div>

						<div className='w-full flex flex-row items-center justify-end'>
							<FeatureCard
								color='blue'
								featureType='Gestão'
								featureDescription='Organize contatos, histórico de serviços e saiba exatamente quem atender.'
								featureTitle='Controle de Clientes'
								icon={User}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
