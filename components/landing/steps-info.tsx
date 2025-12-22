'use client';

import { BanknoteArrowUp, Coins, Receipt } from 'lucide-react';
import { RiWhatsappFill } from 'react-icons/ri';

export default function StepsInfo() {
	return (
		<div className='relative w-full h-full flex flex-col items-center justify-center pb-px'>
			<div className='w-full flex flex-row items-stretch justify-center gap-px'>
				<div className='hidden lg:flex min-w-16 flex-1 bg-white rounded-r-lg' />

				<div className='z-10 h-auto flex items-center justify-center px-8 space-y-8 w-full max-w-[1232px] bg-white rounded-lg'>
					<div className='w-full flex flex-row gap-4 items-center justify-center'>
						<div className='flex-1 flex flex-col items-start justify-center space-y-4 py-20 border-l border-dashed border-border'>
							<div className='flex flex-row space-x-4 items-center justify-center'>
								<div className='w-2 h-10 bg-theme-primary' />

								<Receipt size={32} strokeWidth={2.5} className='text-primary' />
							</div>

							<div className='pl-6 flex flex-col space-y-4 items-start justify-start'>
								<h1 className='text-lg text-primary font-semibold'>
									Gerador de Orçamentos
								</h1>

								<span className='text-start text-sm text-muted-foreground'>
									Orçamentos profissionais e personalizados em poucos segundos.
									Tudo automático, garantindo padrão, precisão e consistência.
								</span>
							</div>
						</div>

						<div className='flex-1 flex flex-col items-start justify-center space-y-4 py-20 border-l border-dashed border-border'>
							<div className='flex flex-row space-x-4 items-center justify-center'>
								<div className='w-2 h-10 bg-theme-primary' />

								<Coins size={32} strokeWidth={2.5} className='text-primary' />
							</div>

							<div className='pl-6 flex flex-col space-y-4 items-start justify-start'>
								<h1 className='text-lg text-primary font-semibold'>
									Sem Custos
								</h1>

								<span className='text-start text-sm text-muted-foreground'>
									Prestar e solicitar serviços sem nenhum custo inicial. Explore
									todas as funcionalidades da plataforma completamente grátis.
								</span>
							</div>
						</div>

						<div className='flex-1 flex flex-col items-start justify-center space-y-4 py-20 border-l border-dashed border-border'>
							<div className='flex flex-row space-x-4 items-center justify-center'>
								<div className='w-2 h-10 bg-theme-primary' />

								<RiWhatsappFill
									size={32}
									className='text-primary'
								/>
							</div>

							<div className='pl-6 flex flex-col space-y-4 items-start justify-start'>
								<h1 className='text-lg text-primary font-semibold'>
									Solicitações via WhatsApp
								</h1>

								<span className='text-start text-sm text-muted-foreground'>
									Solicitações feitas diretamente no WhatsApp da Jobble. Os
									serviços que você precisa são encontrados em minutos, sem
									complicações.
								</span>
							</div>
						</div>

						<div className='flex-1 flex flex-col items-start justify-center space-y-4 py-20 border-l border-dashed border-border'>
							<div className='flex flex-row space-x-4 items-center justify-center'>
								<div className='w-2 h-10 bg-theme-primary' />

								<BanknoteArrowUp
									size={32}
									strokeWidth={2.5}
									className='text-primary'
								/>
							</div>

							<div className='pl-6 flex flex-col space-y-4 items-start justify-start'>
								<h1 className='text-lg text-primary font-semibold'>
									Transações Seguras
								</h1>

								<span className='text-start text-sm text-muted-foreground'>
									Todos os pagamentos são processados através de nossa
									plataforma, oferecendo segurança, transparência e proteção
									para ambas as partes.
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className='hidden lg:flex min-w-16 flex-1 bg-white rounded-l-lg' />
			</div>
		</div>
	);
}
