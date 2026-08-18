const slidesData = [
    {
        id: 1,
        eyebrow: "MARKETING JURÍDICO ORIENTADO A PERFORMANCE",
        title: "Da presença digital ao <br><span class='highlight'>lead qualificado.</span>",
        desc: "Uma operação integrada de comunicação, conteúdo, mídia paga e qualificação comercial — desenhada para fazer o escritório crescer com mais método, menos ruído e melhor aproveitamento de cada oportunidade.",
        type: "intro",
        footerInfo: [
            { label: "PROPOSTA PARA", value: "Rodrigo" },
            { label: "SEGMENTO", value: "Escritório de Advocacia" },
            { label: "CONDUÇÃO", value: "DC Gestão & Performance" }
        ],
        rightContent: `
            <div class="orbit-diagram">
                <div class="center-node">DC</div>
                <div class="orbit-item item-1">
                    <h4>COMUNICAÇÃO</h4>
                    <p>Autoridade + confiança</p>
                </div>
                <div class="orbit-item item-2">
                    <h4>TRÁFEGO PAGO</h4>
                    <p>Demanda + aquisição</p>
                </div>
                <div class="orbit-item item-3">
                    <h4>QUALIFICAÇÃO</h4>
                    <p>Filtro antes do humano</p>
                </div>
                <div class="orbit-item item-4">
                    <h4>CRM / FUNIL</h4>
                    <p>Triagem + classificação + pipeline</p>
                </div>
            </div>
        `,
        footerText: "DC Gestão & Performance • Confidencial"
    },
    {
        id: 2,
        headerBadge: "ESTRATÉGIA INTEGRADA",
        eyebrow: "MAIS DO QUE CONTEÚDO",
        title: "Vamos construir uma <span class='highlight'>operação comercial digital.</span>",
        desc: "O objetivo não é simplesmente publicar, impulsionar ou gerar volume de mensagens. O projeto conecta comunicação, aquisição e processo comercial para aumentar a qualidade dos contatos que chegam ao escritório.",
        type: "cards-grid",
        cards: [
            { icon: "◎", title: "Autoridade", desc: "Conteúdo que posiciona o escritório, transmite confiança e cria familiaridade antes do primeiro contato." },
            { icon: "↗", title: "Aquisição", desc: "Google + Meta usados com estratégia de performance para transformar atenção em oportunidades." },
            { icon: "≋", title: "Automação + Qualificação", desc: "O lead é atendido, questionado, classificado e organizado automaticamente antes de consumir o tempo da equipe." },
            { icon: "✓", title: "Conversão", desc: "A equipe humana recebe contatos mais contextualizados, organizados e com maior potencial." }
        ],
        bottomBox: {
            title: "PRINCÍPIO CENTRAL",
            content: "Não queremos mais mensagens. Queremos um processo capaz de gerar, filtrar e encaminhar <span class='highlight'>melhores oportunidades.</span>"
        },
        footerText: "DC Gestão & Performance • Proposta para Rodrigo"
    },
    {
        id: 3,
        headerBadge: "O CORAÇÃO DA ESTRATÉGIA",
        eyebrow: "01 • FUNIL DE ATENDIMENTO E QUALIFICAÇÃO",
        title: "O lead entra. A automação qualifica. <span class='highlight'>O time recebe o que merece atenção.</span>",
        type: "timeline",
        timeline: [
            { num: "01", title: "Anúncio / Conteúdo", desc: "Descoberta, autoridade e geração de demanda." },
            { num: "02", title: "CTA \"Fale Conosco\"", desc: "Converte interesse em intenção de contato." },
            { num: "03", title: "WhatsApp automático", desc: "Resposta imediata e início da triagem sem depender da equipe." },
            { num: "04", title: "3 perguntas estratégicas", desc: "A automação identifica perfil, momento e prioridade." },
            { num: "05", title: "CRM / Funil", desc: "Registra respostas, classifica e atualiza o pipeline." },
            { num: "06", title: "Comercial / Diretoria", desc: "Recebe o lead com respostas, contexto e prioridade já definidos." }
        ],
        footerText: "DC Gestão & Performance • Funil de Atendimento"
    },
    {
        id: 4,
        headerBadge: "4 FRENTES CONECTADAS",
        eyebrow: "ECOSSISTEMA DE ENTREGA",
        title: "Quatro frentes. <span class='highlight'>Um único objetivo: conversão.</span>",
        type: "frentes-grid",
        frentes: [
            { num: "01", title: "Redes sociais", subtitle: "Presença digital pensada para autoridade, confiança e captação.", entrega: "planejamento, conteúdo, textos, vídeos, stories e gestão da presença." },
            { num: "02", title: "Biblioteca de vídeos", subtitle: "Criativos curtos e testáveis, construídos como ativos de mídia.", entrega: "2–3 vídeos/mês até consolidar aproximadamente 10 bons criativos." },
            { num: "03", title: "Gestão de tráfego", subtitle: "Aquisição em Google Ads e Meta Ads com gestão orientada a performance.", entrega: "estrutura, campanhas, testes, otimizações e leitura dos resultados." },
            { num: "04", title: "CRM / Funil Automatizado", subtitle: "Triagem, classificação e organização dos leads antes do atendimento humano.", entrega: "perguntas, regras, registro de respostas, status, pipeline automatizado." }
        ],
        bottomBox: {
            content: "Conteúdo e autoridade → Tráfego pago → Captação → Qualificação + CRM automáticos → Lead quente → Comercial / Diretoria → Conversão"
        },
        footerText: "DC Gestão & Performance • Escopo Integrado"
    },
    {
        id: 5,
        headerBadge: "GESTÃO DE REDES SOCIAIS",
        eyebrow: "02 • AUTORIDADE QUE PREPARA A CONVERSÃO",
        title: "Não é \"postar por postar\". É construir <span class='highlight'>presença que vende confiança.</span>",
        desc: "Para serviços jurídicos, percepção de autoridade e credibilidade influencia diretamente a decisão de contato. A gestão de conteúdo será conectada aos temas comerciais e às campanhas.",
        type: "cards-grid-6",
        cards: [
            { icon: "▦", title: "12 posts / mês", desc: "Artes para feed com design estratégico e linguagem coerente." },
            { icon: "✎", title: "Textos e legendas", desc: "Conteúdo escrito para contextualizar, educar, gerar confiança e conduzir para o próximo passo." },
            { icon: "▶", title: "2 a 3 vídeos / mês", desc: "Roteiro, captação e edição de vídeos objetivos, curtos, pensados para mídia." },
            { icon: "◇", title: "Stories interativos", desc: "Conteúdos de relacionamento e interação para manter presença e lembrança." },
            { icon: "↻", title: "Reposts estratégicos", desc: "Seleção e adaptação de conteúdos relevantes para o posicionamento." },
            { icon: "▣", title: "Planejamento mensal", desc: "Organização de pauta, visual e calendário para transformar comunicação em rotina." }
        ],
        footerText: "DC Gestão & Performance • Gestão de Redes Sociais"
    },
    {
        id: 6,
        headerBadge: "BIBLIOTECA DE VÍDEOS",
        eyebrow: "03 • UM ATIVO QUE MELHORA COM O TEMPO",
        title: "Produzir menos por obrigação. <span class='highlight'>Testar melhor por estratégia.</span>",
        type: "split-content",
        leftTitle: "PRODUÇÃO COMPLETA DE CRIATIVOS",
        leftList: [
            { big: "2–3", title: "vídeos por mês", desc: "Roteiro, captação e edição dentro do calendário do projeto." },
            { big: "≈15s", title: "formato prioritário", desc: "Rápido, direto e adequado à mídia." },
            { big: "≈10", title: "bons criativos na biblioteca", desc: "Base inicial para testes e escala." },
            { big: "↻", title: "renovação por performance", desc: "Novos vídeos entram quando os dados justificarem." }
        ],
        rightCards: [
            { icon: "⚡", title: "Gancho forte", desc: "Os primeiros segundos precisam interromper o padrão e mostrar relevância imediata." },
            { icon: "◎", title: "Dor / contexto", desc: "O criativo aproxima a mensagem do problema real que motiva a busca por ajuda." },
            { icon: "◆", title: "Autoridade", desc: "Clareza, conhecimento e segurança — sem depender de vídeos longos." },
            { icon: "→", title: "CTA simples", desc: "Próximo passo claro: falar com o escritório e iniciar a triagem." }
        ],
        bottomBox: {
            content: "<span class='highlight font-bold'>Por que uma biblioteca?</span> Porque o tráfego pago precisa de variações para aprender. Planejamos, captamos e editamos criativos com hipóteses diferentes."
        },
        footerText: "DC Gestão & Performance • Biblioteca de Criativos"
    },
    {
        id: 7,
        headerBadge: "GESTÃO DE TRÁFEGO",
        eyebrow: "04 • ESPECIALISTA RESPONSÁVEL",
        title: "Performance conduzida por quem já conhece <span class='highlight'>aquisição para advocacia.</span>",
        type: "specialist",
        specialistName: "Leonardo",
        specialistRole: "Especialista em Marketing de Performance",
        specialistDesc: "Responsável pela estruturação, gestão e otimização das campanhas em Google Ads e Meta Ads, com foco em geração de oportunidades e crescimento.",
        stats: [
            { title: "+8 anos", subtitle: "DE EXPERIÊNCIA", desc: "Atuação contínua em mídia paga, aquisição e estratégias de performance." },
            { title: "+200", subtitle: "ESCRITÓRIOS ATENDIDOS", desc: "Experiência acumulada através da agência em campanhas para o segmento jurídico." },
            { title: "4 anos", subtitle: "FEDERAL INVEST", desc: "Experiência prática em marketing, aquisição, processo e leitura de resultado." },
            { title: "Google + Meta", subtitle: "ESPECIALIZAÇÃO", desc: "Estruturação de campanhas, testes, otimização e acompanhamento de performance." }
        ],
        footerText: "DC Gestão & Performance • Gestão de Tráfego"
    },
    {
        id: 8,
        headerBadge: "VISÃO DE PERFORMANCE",
        eyebrow: "DA ATENÇÃO AO LEAD QUALIFICADO",
        title: "O que importa é enxergar <span class='highlight'>onde o funil ganha ou perde eficiência.</span>",
        type: "funnel-metrics",
        metrics: [
            { title: "Conteúdo", sub: "autoridade / alcance" },
            { title: "Mídia", sub: "clique / intenção" },
            { title: "Lead", sub: "entrada / custo" },
            { title: "Qualificação", sub: "aderência / qualidade" },
            { title: "Atendimento", sub: "resposta / avanço" },
            { title: "Conversão", sub: "oportunidade / cliente" }
        ],
        kpis: [
            { title: "CTR / CPC", desc: "Mostram a eficiência da mensagem e o custo para gerar intenção." },
            { title: "Custo por lead", desc: "Indica quanto estamos pagando para gerar um contato." },
            { title: "Taxa de qualificação", desc: "Percentual dos leads que realmente atendem aos critérios do escritório." },
            { title: "Custo por lead qualificado", desc: "Métrica mais próxima da realidade comercial do que apenas “lead barato”." },
            { title: "Tempo de atendimento", desc: "Ajuda a identificar perda de oportunidade depois que o marketing fez a parte dele." },
            { title: "Conversão comercial", desc: "Fecha o ciclo e devolve informação para a mídia melhorar a aquisição." }
        ],
        bottomBox: {
            content: "<span class='highlight font-bold'>O CRM / Funil de Vendas Automatizado é a chave</span> porque conecta marketing e comercial. Ele registra a origem, organiza respostas, classifica cada contato e mostra quais leads realmente avançam — tudo com o mínimo de operação manual."
        },
        footerText: "DC Gestão & Performance • Indicadores de Performance"
    },
    {
        id: 9,
        headerBadge: "OPERAÇÃO INTEGRADA",
        eyebrow: "INVESTIMENTO MENSAL",
        title: "Uma estrutura completa por <span class='highlight'>R$ 3.500 / mês.</span>",
        desc: "Em vez de administrar quatro fornecedores, o escritório concentra estratégia, execução e dados em uma única operação. Verba de mídia é definida à parte.",
        type: "pricing",
        leftTitle: "REFERÊNCIA DE CONTRATAÇÃO FRAGMENTADA",
        leftDesc: "Uma composição conservadora do mesmo escopo, contratado parte por parte, pode chegar a aproximadamente:",
        prices: [
            { item: "Gestor de tráfego especializado", value: "R$ 1.500" },
            { item: "Gestão de redes + planejamento + conteúdo", value: "R$ 1.200" },
            { item: "Criação, captação e edição de vídeos", value: "R$ 1.500" },
            { item: "CRM / Funil de Vendas Automatizado", value: "R$ 1.300" }
        ],
        totalFragmented: "≈ R$ 5.500 / mês",
        rightTitle: "CONDIÇÃO DC GESTÃO & PERFORMANCE",
        mainPrice: "R$ 3.500 <span class='text-sm'>/ mês</span>",
        mainPriceDesc: "Tudo conectado em uma única estratégia, com integração entre mídia, conteúdo, automação e comercial.",
        savingBlocks: [
            { big: "R$ 2.000", desc: "de diferença mensal frente à referência fragmentada." },
            { big: "≈ 36%", desc: "de redução comparativa, sem abrir mão das quatro frentes." }
        ],
        footerText: "DC Gestão & Performance • Investimento"
    },
    {
        id: 10,
        headerBadge: "PRÓXIMOS PASSOS",
        eyebrow: "COMO COMEÇAMOS",
        title: "Primeiro estruturamos. Depois <span class='highlight'>medimos, aprendemos e aceleramos.</span>",
        type: "phases",
        phases: [
            {
                title: "FASE 01 • ESTRUTURA",
                subtitle: "Base do projeto",
                items: ["Alinhamento do perfil de cliente desejado.", "Definição das perguntas e critérios de qualificação.", "Estrutura do WhatsApp + CRM / Funil de Vendas Automatizado.", "Regras automáticas de classificação e encaminhamento.", "Organização da comunicação e calendário.", "Preparação de contas e campanhas."]
            },
            {
                title: "FASE 02 • VALIDAÇÃO",
                subtitle: "Primeiros ciclos",
                items: ["Entrada dos primeiros criativos e campanhas.", "Leitura de volume, custo e qualidade.", "Ajustes de público, mensagem e oferta.", "Feedback do comercial para o marketing.", "Construção progressiva da biblioteca de vídeos."]
            },
            {
                title: "FASE 03 • OTIMIZAÇÃO",
                subtitle: "Ganho de eficiência",
                items: ["Priorizar canais e criativos mais eficientes.", "Refinar critérios de qualificação.", "Reduzir gargalos do atendimento.", "Acompanhar custo por lead qualificado.", "Escalar o que demonstra aderência e resultado."]
            }
        ],
        bottomLeft: {
            title: "PROPOSTA DC GESTÃO & PERFORMANCE",
            content: "Atrair é só o começo.<br><span class='highlight'>Qualificar automaticamente.</span> Entregar oportunidade<br>para quem decide."
        },
        bottomRight: {
            title: "PRÓXIMO PASSO",
            content: "Validar o perfil de lead ideal e iniciar a implantação do CRM / Funil Automatizado, conteúdo e mídia em uma única operação."
        },
        footerText: "DC Gestão & Performance • Rodrigo • Escritório de Advocacia"
    }
];
