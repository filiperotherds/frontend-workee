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
  "apresentacao-tcc-jobble": {
    category: "Documentação de Projeto",
    title: "Apresentação do Pré Projeto",
    description:
      "Estrutura documentada da apresentação do Trabalho de Conclusão de Curso sobre o sistema Jobble, organizada por seções temáticas.",
    mainBody: `Esta documentação apresenta, de forma estruturada, o roteiro da apresentação do TCC do sistema Jobble, um sistema para gerenciamento e contratação de serviços na área da construção civil. 
Cada seção descreve o foco da fala de cada integrante do grupo, consolidando o conteúdo em um formato de referência para estudo, alinhamento interno e registro do projeto.`,
    subSections: [
      {
        id: "abertura",
        title: "Abertura",
        content: `A abertura da apresentação tem como objetivo introduzir o projeto, o grupo e o propósito geral do trabalho.
Nessa seção, o apresentador faz a saudação ao público, apresenta o nome do projeto (Jobble) e explica, de forma breve, que se trata de um sistema voltado para o gerenciamento e a contratação de serviços na construção civil.
Também é apresentada a estrutura geral da apresentação, indicando que serão abordados: contexto, justificativa, objetivos, fundamentação teórica, metodologia, arquitetura do sistema, resultados esperados, cronograma, referências e considerações finais.`,
      },
      {
        id: "contextualizacao",
        title: "Contextualização",
        content: `A contextualização situa o público no cenário em que o projeto se insere.
São apresentados os principais desafios enfrentados na construção civil quanto à contratação de serviços: dificuldade de encontrar profissionais confiáveis, falta de transparência em prazos e preços, informalidade nos acordos e pouco controle sobre o andamento dos serviços.
Também é destacado o crescimento do uso de plataformas digitais e aplicativos de serviços, que conectam clientes e prestadores, e como esse movimento abre espaço para soluções especializadas.
Nesse contexto, o Jobble é introduzido como uma proposta de plataforma específica para o segmento da construção civil, que busca organizar e qualificar essas relações de contratação.`,
      },
      {
        id: "justificativa",
        title: "Justificativa",
        content: `A justificativa demonstra a relevância prática e acadêmica do projeto.
Do ponto de vista prático, evidencia-se que clientes e empresas têm dificuldade para comparar propostas, confiar na qualidade dos prestadores, acompanhar o andamento dos serviços e formalizar adequadamente os acordos.
Prestadores sérios e qualificados, por sua vez, sofrem com falta de visibilidade, competição baseada apenas em preço e pouca valorização da qualidade.
Dessa forma, um sistema que traga mais transparência, organização e registro às relações entre clientes e prestadores pode gerar impacto real no dia a dia do setor.
Do ponto de vista acadêmico, o projeto dialoga com temas atuais como transformação digital, economia de plataformas, sistemas de informação e sistemas de reputação, o que reforça sua importância dentro da área de tecnologia.`,
      },
      {
        id: "objetivos",
        title: "Objetivos (Gerais e Específicos)",
        content: `Nesta seção são apresentados o objetivo geral e os objetivos específicos do trabalho.
O objetivo geral é desenvolver e documentar um sistema para gerenciamento e contratação de serviços na área da construção civil, visando reduzir problemas de comunicação, falta de transparência e dificuldades na escolha de prestadores.
Entre os objetivos específicos, destacam-se:
- Identificar as principais dificuldades de clientes e prestadores na contratação de serviços de construção civil;
- Analisar aplicativos e plataformas semelhantes existentes no mercado, observando pontos fortes e limitações;
- Definir os requisitos funcionais e não funcionais do sistema Jobble;
- Modelar o sistema com base em conceitos de orientação a objetos e em diagramas de apoio (casos de uso, classes, atividades, sequência e estados);
- Desenvolver um protótipo funcional com as principais funcionalidades;
- Avaliar se a solução proposta atende aos problemas mapeados no contexto e na justificativa.
Essa seção consolida o alinhamento entre problema, pergunta de pesquisa e metas do projeto.`,
      },
      {
        id: "conceitos-trabalhos-relacionados",
        title: "Conceitos e Trabalhos Relacionados",
        content: `Esta seção reúne os principais conceitos teóricos e trabalhos relacionados que embasam o projeto.
No campo conceitual, são apresentados temas como:
- Plataformas digitais de serviços, que atuam como intermediárias entre quem contrata e quem presta o serviço;
- Assimetria de informação, quando o cliente não consegue avaliar plenamente a qualidade, o preço justo ou o escopo do serviço oferecido;
- Sistemas de reputação, baseados em avaliações, notas e feedbacks, que ajudam a construir confiança e reduzir a assimetria entre as partes.
Além dos conceitos, são analisados aplicativos e plataformas existentes no mercado que trabalham com intermediação de serviços. 
A análise mostra que muitas soluções são genéricas, atendendo a diversos tipos de serviço, mas nem sempre consideram as especificidades da construção civil, como prazos mais longos, necessidade de acompanhamento detalhado e gestão de projetos.
A partir desses trabalhos relacionados, o Jobble é posicionado como uma proposta mais especializada, voltada diretamente ao contexto da construção civil, buscando aproveitar boas práticas já consolidadas e ao mesmo tempo suprir lacunas identificadas.`,
      },
      {
        id: "metodologia-arquitetura",
        title: "Metodologia e Arquitetura do Projeto",
        content: `A seção de metodologia descreve tanto a abordagem de pesquisa quanto a abordagem de desenvolvimento do sistema.
Em termos de pesquisa, o trabalho é classificado como de natureza aplicada, com foco na construção e validação de uma solução tecnológica para um problema prático.
No desenvolvimento do sistema, o processo inclui:
- Levantamento de requisitos funcionais e não funcionais;
- Modelagem orientada a objetos utilizando diagramas de caso de uso, classes, atividades, sequência e estados;
- Definição da arquitetura de software.
A arquitetura proposta é baseada em uma separação em camadas: apresentação, negócio e dados.
Como tecnologias, o backend é estruturado em um framework moderno (por exemplo, NestJS) integrado a um banco de dados relacional (como PostgreSQL), enquanto o frontend web é desenvolvido em um framework de interface (como Next.js) e o aplicativo mobile em um framework multiplataforma (como Flutter).
Essa combinação visa alinhar boas práticas de engenharia de software com tecnologias amplamente utilizadas no mercado, permitindo escalabilidade e manutenção do sistema.`,
      },
      {
        id: "resultados-esperados",
        title: "Resultados Esperados (Protótipo do Produto)",
        content: `Nesta parte, são apresentados os resultados esperados com a realização do projeto.
O principal resultado é um protótipo funcional do sistema Jobble, que permita:
- Cadastro de usuários (clientes e prestadores);
- Criação de pedidos de serviço por parte dos clientes;
- Envio de estimativas de orçamento por parte dos prestadores;
- Acompanhamento do status dos serviços contratados;
- Registro de avaliações dos prestadores após a conclusão dos serviços.
Para os prestadores, espera-se que o sistema ofereça recursos para responder pedidos, gerenciar suas propostas, acompanhar projetos em andamento e consultar o histórico de serviços realizados.
Do ponto de vista prático, o protótipo deve tornar o processo de contratação mais claro, organizado e confiável.
Do ponto de vista acadêmico, o resultado esperado é a validação da arquitetura proposta e dos requisitos do sistema, demonstrando que a solução é coerente com o problema mapeado e com a fundamentação teórica.`,
      },
      {
        id: "cronograma",
        title: "Cronograma",
        content: `O cronograma apresenta a distribuição temporal das atividades do projeto ao longo do período previsto pela instituição.
Entre as principais fases, incluem-se:
- Levantamento de requisitos e revisão bibliográfica, em um primeiro momento;
- Modelagem do sistema e definição da arquitetura em seguida;
- Desenvolvimento do protótipo, incluindo implementação das principais funcionalidades;
- Etapas de testes, ajustes e validação do sistema;
- Redação, revisão e finalização do texto do TCC.
O objetivo do cronograma é garantir que teoria, desenvolvimento técnico e documentação evoluam de forma equilibrada, evitando a concentração de atividades apenas no final do período e facilitando o acompanhamento do progresso.`,
      },
      {
        id: "referencias",
        title: "Referências",
        content: `A seção de referências reúne todas as fontes utilizadas na construção teórica e metodológica do projeto.
São incluídos livros, artigos científicos, relatórios, documentos oficiais e trabalhos acadêmicos que tratam de:
- Construção civil e suas características;
- Transformação digital e economia de plataformas;
- Sistemas de informação e desenvolvimento de software;
- Sistemas de reputação, marketplaces de serviços e aplicativos de contratação.
As referências são organizadas conforme as normas da ABNT, garantindo padronização e credibilidade ao embasamento do trabalho.
Essa documentação de referências também serve de base para futuras leituras e aprofundamento teórico da equipe.`,
      },
      {
        id: "fechamento",
        title: "Fechamento",
        content: `O fechamento da apresentação retoma os principais pontos do trabalho e aponta próximos passos.
Nessa parte, reforça-se que o projeto identificou um problema real na contratação de serviços para a construção civil e propôs o Jobble como uma solução digital para aproximar clientes e prestadores com mais organização e transparência.
São recapitulados, de forma sintética: o contexto, a justificativa, os objetivos, a fundamentação teórica, a metodologia, a arquitetura do sistema e os resultados esperados.
Também são mencionadas as intenções futuras, como evolução do protótipo, realização de testes com usuários reais e possível aplicação da solução no mercado.
Por fim, registra-se o agradecimento ao público e a abertura para perguntas e comentários, encerrando formalmente a apresentação.`,
      },
    ],
  },
};
