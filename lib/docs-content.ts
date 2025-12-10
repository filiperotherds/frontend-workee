export interface DocSubSection {
  id: string;
  title: string;
  content: string;
}

export interface DocPageData {
  category: string;
  title: string;
  description: string;
  mainBody: string;
  subSections: DocSubSection[];
}

export const docsContent: Record<string, DocPageData> = {
  "area-do-prestador": {
    category: "Área do Prestador",
    title: "Visão Geral e Segurança",
    description:
      "Entenda como protegemos seu trabalho e quais são as regras do jogo.",
    mainBody:
      "A Área do Prestador é o seu cockpit na Jobble. Aqui você gerencia seus serviços, visualiza ganhos e constrói sua reputação. Abaixo detalhamos os programas de proteção.",
    subSections: [
      {
        id: "prestador-seguro",
        title: "Prestador Seguro",
        content: `O programa Prestador Seguro constitui o pilar de integridade da
            plataforma Jobble, desenvolvido para mitigar os riscos operacionais
            da prestação de serviços autônomos através de um conjunto robusto de
            políticas que abrangem desde a garantia de recebimento por
            pagamentos retidos e proteção financeira contra cancelamentos de
            última hora, até o suporte dedicado em mediações de conflitos e
            cobertura contra danos materiais acidentais, assegurando que o foco
            do profissional permaneça exclusivamente na excelência de sua
            entrega e na expansão do seu negócio.`,
      },
      {
        id: "metricas",
        title: "Métricas de Qualidade",
        content:
          "Sua nota é composta por 3 pilares: Pontualidade, Avaliação do Cliente e Taxa de Finalização. Manter uma média acima de 4.8 garante o selo 'Super Jobber'.",
      },
    ],
  },

  pagamentos: {
    category: "Financeiro",
    title: "Central de Pagamentos",
    description: "Como e quando você recebe pelo seu trabalho.",
    mainBody:
      "A Jobble utiliza um sistema de split de pagamentos automático. Assim que o serviço é concluído, o valor é liberado.",
    subSections: [
      {
        id: "prazos",
        title: "Prazos de Recebimento",
        content:
          "Para pagamentos via PIX, o repasse é instantâneo (D+0). Para cartão de crédito, o repasse ocorre em 30 dias (D+30) ou pode ser antecipado com taxa de 2%.",
      },
      {
        id: "taxas",
        title: "Taxas da Plataforma",
        content:
          "A taxa de serviço da Jobble é fixa em 12% sobre o valor do serviço transacionado.",
      },
    ],
  },

  "prestador-seguro": {
    category: "Diretrizes e Segurança",
    title: "Prestador Seguro",
    description: "Entenda como protegemos seu tempo e trabalho.",
    mainBody: `O Prestador Seguro é a iniciativa fundamental da Jobble para garantir que profissionais autônomos possam exercer suas atividades com estabilidade financeira e proteção operacional. Abaixo, detalhamos os pilares que compõem este programa e como eles protegem o seu trabalho.`,
    subSections: [
      {
        id: "geral",
        title: "Visão Geral e Propósito",
        content: `A prestação de serviços carrega riscos inerentes, desde a inadimplência até imprevistos de agenda. O Programa Prestador Seguro foi desenhado para mitigar esses riscos, criando uma camada de segurança entre o contratante e o prestador. Ao operar dentro das diretrizes da Jobble, você não está apenas fechando um negócio; você está ativando uma apólice de proteção que assegura que o seu tempo e sua expertise serão remunerados conforme o acordado.`,
      },
      {
        id: "recebimento",
        title: "Garantia de Recebimento (Sistema de Custódia)",
        content: `A principal angústia do prestador é a incerteza do pagamento. Na Jobble, eliminamos essa variável através do nosso sistema de Custódia Garantida. Quando um serviço é aceito na plataforma, o valor total acordado é debitado do cliente e retido em uma conta segura da Jobble (Escrow) antes mesmo do início do trabalho. Isso significa que a solvência do cliente é verificada previamente. Uma vez concluído o serviço e confirmada a entrega, o valor é liberado automaticamente para a carteira do prestador, eliminando a necessidade de cobranças constrangedoras ou riscos de calote.`,
      },
      {
        id: "cancelamentos",
        title: `Proteção Contra Cancelamentos e "No-Show"`,
        content: `Seu tempo é seu ativo mais valioso. O programa protege sua agenda contra cancelamentos de última hora que prejudicam seu planejamento financeiro.

Cancelamentos Prévios: Se o cliente cancelar o serviço com mais de 24 horas de antecedência, o prestador não recebe penalidade, mas a agenda é liberada imediatamente para novos trabalhos.

Cancelamentos Tardios: Para cancelamentos realizados pelo cliente com menos de 24 horas do horário agendado, o Programa Prestador Seguro garante uma Taxa de Compensação (variável conforme a categoria do serviço) repassada ao prestador para cobrir o custo de oportunidade da agenda bloqueada.

No-Show do Cliente: Caso o prestador se desloque até o local e o cliente não esteja presente, garantimos o reembolso integral da taxa de deslocamento e uma porcentagem do valor do serviço.`,
      },
      {
        id: "disputas",
        title: "Mediação Especializada de Disputas",
        content: `Divergências sobre a qualidade ou o escopo do serviço podem ocorrer. Nesses casos, a Jobble atua não apenas como plataforma, mas como árbitro imparcial. Ao acionar a mediação, nossa equipe especializada analisa o Briefing Inicial, os registros de chat dentro da plataforma e as evidências fotográficas anexadas ao término do serviço. Se comprovado que o serviço foi entregue conforme o combinado, a Jobble libera o pagamento ao prestador independentemente da aprovação manual do cliente, protegendo-o contra avaliações injustas ou recusas de pagamento má intencionadas.`,
      },
      {
        id: "elegibilidade",
        title: "Critérios de Elegibilidade",
        content: `Para estar coberto pelo Programa Prestador Seguro, é imprescindível que toda a jornada do serviço ocorra dentro do ecossistema Jobble. A cobertura é automaticamente anulada se:

O pagamento for realizado "por fora" da plataforma (dinheiro, PIX direto ou outras vias não rastreáveis).

A negociação de escopo ou mudança de datas ocorrer em aplicativos de mensagens externos (como WhatsApp) sem o devido registro no chat oficial da Jobble.

O prestador violar os Termos de Uso ou os Padrões da Comunidade.`,
      },
    ],
  },
};
