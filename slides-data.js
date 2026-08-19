const slidesData = [
    {
        id: 1, // Capa
        eyebrow: "MARKETING JURÍDICO ORIENTADO A PERFORMANCE",
        title: "Da presença digital ao <br><span class='highlight'>lead qualificado.</span>",
        desc: "Uma operação integrada de comunicação, conteúdo, mídia paga e qualificação comercial — desenhada para fazer o escritório crescer com mais método, menos ruído e melhor aproveitamento de cada oportunidade.",
        type: "intro",
        footerInfo: [
            { label: "PROPOSTA PARA", value: "Rodrigo" },
            { label: "SEGMENTO", value: "Freitas e Souza Advogados" },
            { label: "CONDUÇÃO", value: "DC Gestão & Performance" }
        ],
        rightContent: `
            <div class="orbit-diagram">
                <div class="center-node"><img src="logo-dark.png" style="width: 80%; height: 80%; object-fit: contain;"></div>
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
            <!-- Swipe Hint -->
            <div class="swipe-hint animate-fade-in mt-8">
                <span class="hint-text">Use as setas ou arraste para navegar</span>
                <div class="hint-arrow">→</div>
            </div>
        `,
        footerText: "DC Gestão & Performance • Confidencial"
    },
    {
        id: 2, // Apresentação
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
        footerText: "DC Gestão & Performance • Visão Geral"
    },
    {
        id: 3, // Funil/CRM
        headerBadge: "O CORAÇÃO DA ESTRATÉGIA",
        eyebrow: "01 • FUNIL DE ATENDIMENTO E QUALIFICAÇÃO",
        title: "O lead entra. A automação qualifica. <span class='highlight'>O time recebe o que merece atenção.</span>",
        type: "timeline",
        timeline: [
            { num: "01", title: "Anúncio / Conteúdo", desc: "" },
            { num: "02", title: "CTA \"Fale Conosco\"", desc: "" },
            { num: "03", title: "WhatsApp Automático", desc: "" },
            { num: "04", title: "Três Perguntas Lógicas", desc: "" },
            { num: "05", title: "Funil de Vendas", desc: "" },
            { num: "06", title: "Conversar com a Diretoria", desc: "" }
        ],
        footerText: "DC Gestão & Performance • Funil de Atendimento"
    },
    {
        id: 4, // Social Media (using type specialist)
        headerBadge: "GESTÃO DE REDES SOCIAIS E CONTEÚDO",
        eyebrow: "02 • AUTORIDADE E COMUNICAÇÃO",
        title: "Não é postar por postar. É construir <span class='highlight'>presença que vende confiança.</span>",
        type: "specialist",
        specialistImage: "spartans.jpg",
        specialistName: "Spartan's Design",
        specialistRole: "Design, Conteúdo & Direção Editorial",
        specialistDesc: "Responsáveis por posicionamento, planejamento editorial, criação de artes, redação e captação da biblioteca de vídeos. A gestão de conteúdo será conectada aos temas comerciais e campanhas do escritório.",
        stats: [
            { title: "12", subtitle: "POSTS NO FEED / MÊS", desc: "Textos e legendas focadas em contextualizar, educar e gerar confiança." },
            { title: "2–3", subtitle: "VÍDEOS CURTOS / MÊS", desc: "Roteiro, captação e edição para criar uma biblioteca testável para anúncios." },
            { title: "Diário", subtitle: "STORIES E INTERAÇÃO", desc: "Conteúdos de relacionamento para manter presença e lembrança ativa." },
            { title: "Mensal", subtitle: "PLANEJAMENTO", desc: "Organização de pauta, visual e calendário para transformar comunicação em rotina." }
        ],
        bottomBars: [
            "<span class='text-blue font-bold'>Foco:</span> O conteúdo precisa apoiar a captação — e não competir com ela."
        ],
        footerText: "DC Gestão & Performance • Social Media"
    },
    {
        id: 5, // Gestão de Tráfego
        headerBadge: "GESTÃO DE TRÁFEGO",
        eyebrow: "03 • ESPECIALISTA RESPONSÁVEL",
        title: "Performance conduzida por quem já conhece <span class='highlight'>aquisição para advocacia.</span>",
        type: "specialist",
        specialistImage: "leonardo.png",
        specialistName: "Leonardo",
        specialistRole: "Especialista em Tráfego Pago",
        specialistDesc: "Responsável pela estruturação, gestão e otimização das campanhas em Google Ads e Meta Ads, com foco em geração de oportunidades, utilizando a biblioteca de vídeos e anúncios focados em conversão.",
        stats: [
            { title: "+8 anos", subtitle: "DE EXPERIÊNCIA", desc: "Atuação contínua em mídia paga, aquisição e estratégias de performance." },
            { title: "+200", subtitle: "ESCRITÓRIOS ATENDIDOS", desc: "Experiência acumulada através da agência em campanhas para o segmento jurídico." },
            { title: "4 anos", subtitle: "FEDERAL INVEST", desc: "Experiência prática em marketing, aquisição, processo e leitura de resultado." },
            { title: "Google+Meta", subtitle: "ESPECIALIZAÇÃO", desc: "Estruturação de campanhas, testes de criativos (Gancho, Dor, CTA) e otimização." }
        ],
        bottomBars: [
            "<span class='text-blue font-bold'>Agência reconhecida como Google Partner.</span> A gestão combina experiência de mídia com visão de processo: gerar o lead é só o começo.",
            "<span class='text-green font-bold'>Método:</span> campanha → leitura de dados → teste de criativo/público/intenção → otimização → feedback do CRM / funil → melhoria da aquisição."
        ],
        footerText: "DC Gestão & Performance • Gestão de Tráfego"
    },
    {
        id: 6, // PREÇO
        headerBadge: "PROPOSTA DE VALOR",
        eyebrow: "INVESTIMENTO MENSAL",
        title: "Uma estrutura completa por <span class='highlight'>R$ 3.500 / mês.</span>",
        desc: "Em vez de administrar múltiplos fornecedores desconexos, o escritório concentra estratégia, execução (Social e Tráfego) e CRM em uma única operação. Verba de mídia é definida à parte.",
        type: "pricing",
        leftTitle: "REFERÊNCIA DE CONTRATAÇÃO FRAGMENTADA",
        leftDesc: "Uma composição conservadora do mesmo escopo, contratado parte por parte, chegaria a aproximadamente:",
        prices: [
            { item: "Gestor de tráfego especializado", value: "R$ <span class='counter' data-target='1500'>0</span>" },
            { item: "Gestão de redes + planejamento + conteúdo", value: "R$ <span class='counter' data-target='1200'>0</span>" },
            { item: "Uso do artista para gravar", value: "R$ <span class='counter' data-target='350'>0</span>" },
            { item: "Criação, captação e edição de vídeos", value: "R$ <span class='counter' data-target='1500'>0</span>" },
            { item: "CRM / Funil de Vendas Automatizado", value: "R$ <span class='counter' data-target='1300'>0</span>" }
        ],
        totalFragmented: "≈ R$ <span class='counter text-yellow' data-target='5850'>0</span> / mês",
        rightTitle: "CONDIÇÃO DC GESTÃO & PERFORMANCE",
        mainPrice: "R$ <span class='counter' data-target='3500'>0</span> <span class='text-sm'>/ mês</span>",
        mainPriceDesc: "Tudo conectado em uma única estratégia, com integração entre mídia, conteúdo, automação e comercial.",
        savingBlocks: [
            { big: "R$ <span class='counter text-neon' data-target='2350'>0</span>", desc: "de diferença mensal frente à referência fragmentada." },
            { big: "≈ <span class='counter text-neon' data-target='40'>0</span>%", desc: "de redução comparativa, mantendo a qualidade nas 4 frentes." }
        ],
        includedItems: ["Redes sociais", "Vídeos", "Tráfego pago", "Automação comercial"],
        efficiencyNote: "Mais eficiência: menos ruído entre fornecedores e mais velocidade na execução.",
        footerThankYou: "Muito obrigado pela confiança e pelo tempo! Estamos prontos para iniciar.",
        footerText: "DC Gestão & Performance • Proposta de Valor"
    }
];
