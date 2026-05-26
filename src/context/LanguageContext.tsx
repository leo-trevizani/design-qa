import React, { createContext, useContext, useState, useEffect } from "react";

export type LanguageType = "pt" | "es";

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: typeof translations.pt;
}

const translations = {
  pt: {
    slides: [
      { id: 0, label: "Hero Capa", title: "Capa" },
      { id: 1, label: "Realidade WYSIATI", title: "WYSIATI" },
      { id: 2, label: "Design Debt", title: "Dívida de Design" },
      { id: 3, label: "Estudo Hilton", title: "Caso Hilton" },
      { id: 4, label: "Metodologia Shift-Left", title: "Design QA" },
      { id: 5, label: "VRT Automação", title: "Automação" },
      { id: 6, label: "Desafio QE", title: "QE Estratégico" },
      { id: 7, label: "Contato CTA", title: "Contato" }
    ],
    ctaSection: {
      tag: "VAMOS CONSTRUIR ESSA ALIANÇA?",
      titleLine1: "Unificar Design & Qualidade é o único",
      titleLine2: "caminho para um produto flawless",
      desc: "Como designer de produto, meu objetivo é apoiar vocês com tokens bem-definidos, componentes no Storybook e total suporte técnico. Vamos marcar um papo para debater como automatizar nosso fluxo de validação e zerar retrabalhos visuais na nossa esteira?",
      button: "Send me a Star"
    },
    hero: {
      agenda: "PAUTA DA GUILDA • COOPERAÇÃO DESIGN & QUALIDADE",
      title: "Design & Quality Engineering",
      desc: "Como o time de Product Design pode atuar de forma síncrona com os engenheiros de qualidade para automatizar asserções de layout, eliminar re-work pós-release e blindar o produto.",
      leftTag: "LENTIDÃO & RE-TRABALHO: 12 Erros de layout apontados na Release",
      leftBugTitle: "ALINHAMENTO QUEBRADO",
      leftTextOver: "BUG: Text Over",
      leftStatus: "STATUS: REVISÃO COMPLEXA PÓS-PROD",
      leftLostHours: "REWRITING CODE // 40h perdidas",
      rightTag: "ZERO ERROS: Design Tokens validados antes de compilar",
      rightPixelPerfect: "PIXEL PERFECT",
      rightMatch: "100% Match com Mockup",
      rightHandoff: "Handoff limpo de tokens. Otimizações de CSS aplicadas diretamente por QA.",
      rightApproved: "Aprovado pelo Design",
      rightPipeline: "PIPELINE VERIFIED IN CI",
      rightAutoMatch: "100% AUTOMATION MATCH",
      footerLeft: "PIXEL-PERFECT DESIGN FOR LARGE SCALE SYSTEM RELEASES",
      footerRight1: "ISO 27001 VISUAL QUALITY",
      footerRight2: "GARANTIA DE ZERO RE-ABERTURAS CODE-SYNC"
    },
    wysiati: {
      tag: "CONCEITO WYSIATI • CIÊNCIA COGNITIVA",
      title: "A Realidade Total da Interface",
      p1: "Inspirado pelo prêmio Nobel Daniel Kahneman, o conceito de WYSIATI (What You See Is All There Is) descreve como o cérebro humano julga a integridade de um sistema complexo.",
      quote: "\"O Sistema 1 estima a confiabilidade de uma tecnologia inteira com base na estética imediata que está exposta aos olhos.\"",
      p2: "Se a interface de um aplicativo de hotelaria ou checkout está desalinhada, com fontes quebradas ou layouts que se sobrepõem, a mente do usuário assume subconscientemente:",
      dangerText: "\"Se eles não cuidam nem do que eu vejo na tela, a API de pagamentos por trás também não deve ser segura.\"",
      summary: "Podemos concordar: pequenos erros visuais nas nossas entregas diárias criam uma barreira de desconfiança técnica que drena a conversão e o engajamento do cliente final.",
      btn: "Debater com o Designer",
      sandboxTitle: "Cognitive Trust Sandbox",
      sandboxSub: "SIMULE A PERCEPÇÃO DE SEGURANÇA EM REAL-TIME",
      btnBugs: "UI com Ruído",
      btnHealthy: "UI Saudável",
      checkoutTitle: "LUXURY HOTELS CHECKOUT",
      brokenBadge: "ALINHAMENTO QUEBRADO",
      imgLoading: "Imagem Carregando... (500ms delay)",
      overlapBadge: "OVERLAP VISUAL",
      presidentialSuite: "Suíte Presidencial - Copacabana",
      insecureText: "Inseguro: Elementos sobrepondo área de consentimento",
      correctBadge: "FOTOS CONDIZENTES",
      copacabanaPalace: "Copacabana Palace Elite",
      luxurySuite: "Suíte Presidencial de Luxo",
      presidentialSuiteClean: "Suíte Presidencial",
      taxesLabel: "Preço com impostos inclusos",
      perNight: "/ Noite",
      safeBadge: "Checkout certificado com criptografia ponta-a-ponta",
      fearGauge: "GATILHO DE MEDO SUBCONSCIENTE DO SEU CLIENTE:",
      criticalFear: "⚠️ ALERTA: 92% Desconfiança Crítica",
      excellentSafe: "Excelente",
      safeGaugeText: "🛡️ SEGURO: 8% Percepção de Risco",
      highGaugeText: "Elevada",
      analysisTitle: "Análise Científica:",
      analysisBugs: "Pequenos enquadramentos errados disparam o Sistema de Alertas da Amígdala Cerebral do cliente. Ele desiste antes mesmo de preencher os dados do cartão.",
      analysisHealthy: "Simetria perfeita e harmonia na herança de temas transmitem estabilidade organizacional. O cérebro do usuário se sente liberado para engajar."
    },
    designDebt: {
      tag: "DESIGN DEBT • TECHNICAL LIABILITY",
      title: "O Peso Oculto do \"Design Debt\"",
      desc1: "Ignorar pequenas discordâncias visuais e discrepâncias em padding, fontes ou cores herdadas em prol de releases mais rápidas contrai uma das dívidas mais perigosas no desenvolvimento: o Design Debt.",
      desc2: "Individualmente, aplicar um espaçamento fixo provisório (hardcoded fallback) ou errar sutilmente um token de fonte parece irrelevante. \"Depois arrumamos\", diz-se.",
      desc3: "Porém, após poucas sprints, o efeito cumulativo dessas pequenas negligências visuais fragmenta a experiência do usuário de forma letal:",
      quote: "\"Para as pessoas, uma interface cheia de pequenas inconsistências parece amadora e inacabada. O cliente sente no estômago que a empresa não é confiável.\"",
      summary: "O Design Debt não mata por parada sistêmica súbita do servidor; ele mata por asfixia gradual da retenção do cliente.",
      resetBtn: "Resetar Dívida",
      sandboxSub: "SIMULADOR DE RECURSOS ACUMULADOS EM SPRINT RELEASES",
      sprintLabel: "NÚMERO DE Sprints SEM DEsigner QA:",
      releasesConsecutive: "releases consecutivas",
      startupClean: "STARTUP CLEAN (RELEASE ZERO)",
      fullDisintegration: "DESINTEGRAÇÃO TOTAL (SPRINT 5)",
      cardTitle: "Aplicações Financeiras CRM",
      urgentBadge: "URGENTE: INCONSISTENTE",
      approvedBadge: "APPROVED",
      transferValue: "Valor a Transferir (TED):",
      typingPlaceholder: "Digitando R$ 500,00...",
      pixActive: "PIX ATIVO",
      confirmTransfer: "CONFIRMAR TRANSFERÊNCIA",
      confirm: "CONFIRMA",
      mismatchesLabel: "Divergências",
      devEffortLabel: "Refugo Técnico",
      uxDropLabel: "Queda de UX",
      tokensMissing: "Tokens ausentes",
      futureRework: "Retrabalho futuro",
      userFrustration: "Frustração do usuário"
    },
    hilton: {
      tag: "ESTUDO DE CASO REAL • GLARE WASHOUT",
      title: "O Bug Que O Código Não Vê",
      p1: "Considere o icônico caso real do botão \"Confirmar Reserva\" de uma grande plataforma hoteleira (e.g. Hilton ou similar) que simplesmente sumiu para milhares de usuários.",
      p2: "Os testes unitários focados na lógica do DOM (Jest / JSDOM / Testing Library) passavam impecáveis:",
      passed: "PASSED",
      testLabel: "A automação lógica validava perfeitamente o comportamento físico do botão, mas ignorou por completo a sua legibilidade real.",
      qaAbsolution: "Absolvição do QA: A culpa não é e nunca foi do seu Engenheiro de Testes! Ferramentas tradicionais não possuem canais sensoriais visuais. Elas não detectam se no CSS herdeiro o botão perdeu o contraste mínimo de 4.5:1 exigido pela WCAG.",
      summary: "Sob a luz do sol de dispositivos mobile (Glare Washout), o botão com fonte branca em fundo cinza simplesmente desaparecia. Resultado? Quedas brutais em conversão de faturamento móvel.",
      sandboxTitle: "Simulador de Visão de Dispositivo",
      sandboxSub: "VEJA COMO O CLIENTE VISUALIZA E COMO O TESTE DO JEST COMPREENDE",
      btnCi: "1. Dentro do Servidor CI",
      btnSunlight: "2. Sob Luz do Sol (Mobile)",
      ciExecuting: "Executando hotel-checkout-test.tsx no Linux NodeContainer...",
      ciPassed: "PASS src/tests/checkout-button.test.ts",
      ciLine1: "✓ button exists in body [2ms]",
      ciLine2: "✓ textContent contains \"Confirmar Reserva\" [1ms]",
      ciLine3: "✓ onclick handler is associated [4ms]",
      ciMarkup: "> DOM state markup asserts perfect button active state.",
      checkoutLabel: "Hilton Copacabana Checkout",
      confirmReservation: "Confirmar Reserva",
      luminosity: "🌞 AMBIENT LUMINOSITY: 85,000 LUX (EXTERIOR)",
      contrastRatio: "WCAG CONTRAS_RATIO: 1.2:1 (FAIL)",
      totalPrice: "Preço Total",
      priceValue: "R$ 2.450 / Noite",
      whereIsButton: "❌ CADÊ O BOTÃO? CLIENTE TENTA TOCAR E DESISTE",
      diagnostic: "Diagnóstico: Jesting e DOM não compreendem Luz, Cores ou Contraste Humano."
    },
    shiftleft: {
      tag: "SHIFT-LEFT METHODOLOGY • NO REWORK",
      title: "Metodologia Design QA",
      desc1: "Reabrir chamados de bugs visuais no JIRA pós-release é caro e exaustivo. Causa desânimo nos engenheiros e atrasa em semanas o cronograma de entrega do core do negócio.",
      desc2: "A solução é o Shift-Left de Qualidade Visual.",
      desc3: "Em vez de revisar as telas somente no ambiente final de staging, introduzimos o status de Design QA como uma etapa nativa, síncrona e isolada do pipeline. Estipulamos um contrato inabalável entre Design e Engenharia usando o Storybook como ferramenta de validação.",
      desc4: "Nenhum componente sobe sem ser testado exaustivamente de maneira isolada. Se um desenvolvedor errar um espaçamento, o componente é rejeitado sutilmente logo no início.",
      sandboxTitle: "Pipeline Visual Checkpoint",
      sandboxSub: "CLIQUE NOS PASSOS DO PIPELINE PARA ENTENDER OS PROCESSOS DE DESIGN QA",
      activeStepTag: "ETAPA ATIVA",
      impactTag: "IMPACTO COM DESIGN QA: ZERO REWORK",
      crucialTag: "⚠️ CRUCIAL DENTRO DO FIGMA CONTRACT",
      steps: [
        {
          id: 0,
          title: "1. Figma Design Handoff",
          subtitle: "Tokens Originais",
          desc: "Designers definem cores, tipografias e grids diretamente nas APIs de Figma, encapsulados em Design Tokens JSON consumíveis de forma estática."
        },
        {
          id: 1,
          title: "2. Storybook Sandbox",
          subtitle: "Componentes Isolados",
          desc: "Engenheiros constroem componentes de forma isolada do código-fonte legado. Isso evita bugs de herança parasitária de CSS global."
        },
        {
          id: 2,
          title: "3. Checkpoint Design QA",
          subtitle: "Validação Síncrona",
          desc: "O checkpoint visual ocorre ANTES do código ingressar nos testes funcionais. Se o componente divergir 1px do token inicial, ele não avança no pipeline."
        },
        {
          id: 3,
          title: "4. Teste Funcional Legado",
          subtitle: "Funções Unitárias",
          desc: "Uma vez que o componente físico está 100% calibrado na aparência, automatizadores criam asserções de clique, comportamento e transição lógicas."
        },
        {
          id: 4,
          title: "5. CI/CD Release",
          subtitle: "Segurança de Relações",
          desc: "O deploy é realizado com risco de refugo visual tendendo a zero. Sem necessidade de abrir tickets complexos ou renegociar layouts em pós-produção."
        }
      ]
    },
    automation: {
      tag: "PERCEPTUAL AI • VRT AUTOMATION",
      title: "Automação Como Libertação",
      desc1: "Nenhum Engenheiro de Qualidade de Software (QE) deveria perder horas de vida contando pixels manualmente ou usando réguas digitais sobre telas estáticas. Isso é engenharia obsoleta e exaustiva.",
      desc2: "\"A verdadeira automação visual em escala utiliza Perceptual AI para dar superpoderes à guilda de engenharia.\"",
      desc3: "Acoplamos testes de Regressão Visual Automatizada (VRT) diretamente no Git CI/CD. Ferramentas eficientes como Chromatic ou Percy renderizam as telas na nuvem a cada push de Pull Request.",
      desc4: "O sistema compara de forma autônoma a versão anterior à nova, destacando qualquer desvio milimétrico de pixel em contraste magenta choque. O QE não precisa procurar o erro; a máquina cospe o relatório em segundos.",
      sandboxTitle: "Perceptual Engine Checker",
      sandboxSub: "PULL REQUEST GITHUB VERIFICATION #1059",
      btnScan: "Rodar VRT Scan",
      btnAccept: "Aceitar Variação",
      mergedGreen: "MERGED GREEN",
      refFigma: "Ref: FIGMA (Baseline)",
      candPr: "Candidato: PULL REQUEST",
      compareProgress: "COMPLEX PIXEL COMPARE ENGINE...",
      widthOutBadge: "WIDTH OUT 4px",
      btnLabelConnect: "Conectar",
      howToTest: "Como testar:",
      howToTestText: "Toque no botão superior para rodar o teste automatizado no Pull Request. Ele vai comparar a versão codificada com o mock original.",
      scanStatusText: "Análise de Visão Computacional: Nosso bot de Perceptual Regression está escaneando a matriz RGB do DOM contra a especificação do Figma...",
      diffStatusText: "Diferenças encontradas! O botão do PR foi codificado com largura esticada de 112px em vez de 96px padrão. Aceite a variação se foi proposital, ou o código será bloqueado no CI.",
      approvedStatusText: "Integração aprovada! O repositório aceitou a variação e o git pipeline está verde. Sem digitações erradas, sem retrabalho pós-produção."
    },
    strategic: {
      tag: "THE QUALITY EVOLUTION • STRATEGIC QA",
      title: "O Engenheiro de Qualidade Estratégico",
      desc1: "Se as ferramentas de IA passam a codificar componentes diretamente a partir de mockups do Figma, e os testes de regressão automatizados cuidam da integridade física dos pixels, o papel do QE se eleva drasticamente.",
      desc2: "O desafio para a guilda de qualidade de ponta deixa de ser meramente operacional. Não é mais sobre caçar botões desalinhados na mão.",
      quote: "\"Sua missão é calibrar o olfato técnico para auditar o que as máquinas ignoram por completo: a ética, a acessibilidade e a verdadeira empatia da jornada.\"",
      bullet1Title: "Garantir Acessibilidade Empírica:",
      bullet1Desc: "Validar se leitores de tela funcionam com fluidez semântica sob as diretrizes reais de acessibilidade.",
      bullet2Title: "Combater Dark Patterns:",
      bullet2Desc: "Impedir que truques visuais manipulem as taxas acumuladas de checkout ou forcem decisões enganosas dos usuários.",
      sandboxTitle: "Guild Paradigm Switcher",
      sandboxSub: "SELECIONE O MODELO DE ENGENHARIA DE QUALIDADE",
      btnLegacy: "1. O QE Operacional (Legado)",
      btnStrategic: "2. O QE Estratégico (Futuro)",
      legacyTag: "Foco Operacional Repetitivo (Sobrevivência)",
      legacyLine1Title: "❌ PIXEL-COUNTING:",
      legacyLine1Desc: "Comparar Figma de forma ocular gasta horas de trabalho improdutivo de testes manuais.",
      legacyLine2Title: "❌ REATIVIDADE:",
      legacyLine2Desc: "Erros achados apenas em Staging no fim da sprint, gerando longas horas extras e reabertura de chamados às pressas.",
      legacyLine3Title: "❌ ESQUECIMENTO:",
      legacyLine3Desc: "Sem olhar clínico para ética, acessibilidade fica restrita a validadores automáticos do DOM que ignoram a audição real do leitor de tela.",
      strategicTag: "Foco Clínico-Experiencial (Advogado de Experiência)",
      strategicLine1Title: "✓ VRT AUTOMOTIVO:",
      strategicLine1Desc: "Perceptual AI cuida dos pixels. O QE analisa métricas e refina cenários lógicos complexos.",
      strategicLine2Title: "✓ SHIFT-LEFT:",
      strategicLine2Desc: "Storybook protege e atesta integridade das criações logo nos primeiros commits (rework fuso zero).",
      strategicLine3Title: "✓ ÉTICA DA JORNADA:",
      strategicLine3Desc: "Lidera auditorias de acessibilidade WCAG 2.2 reais e combate Dark Patterns indesejados. O teste vira defesa do usuário corporativo.",
      wcagLabel: "ACERVO DE ACESSIBILIDADE WCAG VERIFIED",
      humanLabel: "100% Humano"
    },
    contact: {
      tag: "Alinhamento entre Guildas",
      title: "Iniciar Discussão com o Designer",
      desc: "Envie suas considerações para planejarmos uma sessão prática ou workshop focado em sanar os atritos entre Design, Engenharia e Qualidade.",
      fieldName: "Seu Nome *",
      fieldEmail: "E-mail corporativo *",
      fieldCompany: "Sua Squad, Time ou Empresa",
      fieldIndustry: "Contexto / Produto",
      placeholderIndustry: "Selecione o contexto / produto",
      fieldDefect: "Maior Atrito de Design",
      placeholderDefect: "Selecione o principal atrito",
      fieldNotes: "Temas ou Dúvidas para o Bate-papo",
      placeholderName: "Ex: Leonard Silva",
      placeholderEmail: "Ex: nome@squad.com",
      placeholderCompany: "Ex: Squad de Relacionamento / Globant S/A",
      placeholderNotes: "Ex: Como lidar com Storybook e tokens no Git? Qual a melhor ferramenta de VRT para o nosso stack?",
      btnSubmit: "Levar Discussão para a Guilda",
      footerLock: "🔒 Espaço colaborativo de troca de conhecimento técnico e de processos de produto.",
      successLabel: "Bate-papo sugerido com sucesso!",
      successTitle: "Excelente, {name}!",
      successDesc: "Adicionei nossa discussão à pauta. Vamos organizar uma abordagem focada em produtos de {industry} e debater como sanar e automatizar o Design QA com foco em erradicar conflitos de {defectType}.",
      pautaTitle: "Pauta Recomendada:",
      pautaSub: "Unificar Processos",
      pautaLine1: "Workshop de Storybook e Handshake de Tokens.",
      pautaLine2: "Configurações práticas de Perceptual Regression AI (Percy/Chromatic).",
      btnBack: "Voltar à Apresentação",
      industries: {
        airlines: "Airlines & Travel",
        games: "Entertainment & Games",
        automotive: "Automotive & IoT",
        energy: "Energy & Enterprise",
        fintech: "Fintech & Banking"
      },
      defects: {
        misalignment: "Divergência Visual de Layout",
        "slow-handoff": "Handoff de Design Lento",
        "broken-tokens": "CSS / Design Tokens desalinhados",
        "manual-qa": "Excesso de Testes Visuais Manuais"
      }
    }
  },
  es: {
    slides: [
      { id: 0, label: "Portada Hero", title: "Capa" },
      { id: 1, label: "Realidad WYSIATI", title: "WYSIATI" },
      { id: 2, label: "Design Debt", title: "Deuda de Diseño" },
      { id: 3, label: "Estudio Hilton", title: "Caso Hilton" },
      { id: 4, label: "Metodología Shift-Left", title: "Design QA" },
      { id: 5, label: "VRT Automatización", title: "Automatización" },
      { id: 6, label: "Desafío QE", title: "QE Estratégico" },
      { id: 7, label: "Contacto CTA", title: "Contacto" }
    ],
    ctaSection: {
      tag: "¿CONSTRUIMOS ESTA ALIANZA?",
      titleLine1: "Unificar Diseño y Calidad es el único",
      titleLine2: "camino hacia un producto impecable",
      desc: "Como diseñador de productos, mi objetivo es apoyarlos con tokens bien definidos, componentes en Storybook y soporte técnico completo. ¿Agendamos una charla para debatir cómo automatizar nuestro flujo de validación y eliminar los retrabajos visuales en nuestro flujo de desarrollo?",
      button: "Send me a Star"
    },
    hero: {
      agenda: "TEMARIO DEL GREMIO • COOPERACIÓN DISEÑO Y CALIDAD",
      title: "Design & Quality Engineering",
      desc: "Cómo el equipo de Diseño de Producto puede actuar de forma síncrona con los ingenieros de calidad para automatizar las aserciones de diseño, eliminar el retrabajo post-lanzamiento y blindar el producto.",
      leftTag: "LENTITUD Y RETRABAJO: 12 Erros de maquetación reportados en el Lanzamiento",
      leftBugTitle: "ALINEACIÓN ROTA",
      leftTextOver: "ERROR: Texto superpuesto",
      leftStatus: "ESTADO: REVISIÓN COMPLEJA POST-PROD",
      leftLostHours: "REESCRIBIENDO CÓDIGO // 40h perdidas",
      rightTag: "CERO ERRORES: Design Tokens validados antes de compilar",
      rightPixelPerfect: "PIXEL PERFECT",
      rightMatch: "100% Coincidencia con Mockup",
      rightHandoff: "Handoff limpio de tokens. Optimizaciones de CSS aplicadas directamente por QA.",
      rightApproved: "Aprobado por Diseño",
      rightPipeline: "PIPELINE VERIFICADO EN CI",
      rightAutoMatch: "100% AUTOMATION MATCH",
      footerLeft: "DISEÑO PERFECTO PARA LANZAMIENTOS DE SISTEMAS A GRAN ESCALA",
      footerRight1: "ISO 27001 CALIDAD VISUAL",
      footerRight2: "GARANTÍA DE CERO REAPERTURAS EN CODE-SYNC"
    },
    wysiati: {
      tag: "CONCEPTO WYSIATI • CIENCIA COGNITIVA",
      title: "La Realidad Total de la Interfaz",
      p1: "Inspirado por el premio Nobel Daniel Kahneman, el concepto de WYSIATI (What You See Is All There Is) describe cómo el cerebro humano juzga la integridad de un sistema complejo.",
      quote: "\"El Sistema 1 evalúa la confiabilidad de toda una tecnología basándose en la estética inmediata expuesta ante sus ojos.\"",
      p2: "Si la interfaz de una aplicación de hotelería o compra está desalineada, con fuentes rotas o diseños superpuestos, la mente del usuario asume inconscientemente:",
      dangerText: "\"Si no cuidan ni lo que veo en pantalla, la API de pagos que hay detrás tampoco debe ser segura.\"",
      summary: "Todos coincidimos: los pequeños errores visuales en nuestras entregas diarias crean una barrera de desconfianza técnica que drena la conversión y el compromiso del cliente final.",
      btn: "Debatir con el Diseñador",
      sandboxTitle: "Cognitive Trust Sandbox",
      sandboxSub: "SIMULA LA PERCEPCIÓN DE SEGURIDAD EN TIEMPO REAL",
      btnBugs: "Interfaz con Ruido",
      btnHealthy: "Interfaz Saludable",
      checkoutTitle: "PAGO DE HOTELES DE LUJO",
      brokenBadge: "ALINEACIÓN ROTA",
      imgLoading: "Cargando imagen... (500ms de retraso)",
      overlapBadge: "SUPERPOSICIÓN VISUAL",
      presidentialSuite: "Suite Presidencial - Copacabana",
      insecureText: "Inseguro: Elementos superpuestos en el área de consentimiento",
      correctBadge: "IMÁGENES COINCIDENTES",
      copacabanaPalace: "Copacabana Palace Elite",
      luxurySuite: "Suite Presidencial de Lujo",
      presidentialSuiteClean: "Suite Presidencial",
      taxesLabel: "Precio con impuestos incluidos",
      perNight: "/ Noche",
      safeBadge: "Pago certificado con cifrado de extremo a extremo",
      fearGauge: "DISPARADOR DE MIEDO INCONSCIENTE DE TU CLIENTE:",
      criticalFear: "⚠️ ALERTA: 92% Desconfianza Crítica",
      excellentSafe: "Excelente",
      safeGaugeText: "🛡️ SEGURO: 8% Percepción de Riesgo",
      highGaugeText: "Elevada",
      analysisTitle: "Análisis Científico:",
      analysisBugs: "Los pequeños errores de encuadre activan el Sistema de Alerta de la Amígdala Cerebral del cliente. Abandona incluso antes de rellenar los datos de la tarjeta.",
      analysisHealthy: "La simetría perfecta y la armonía en la herencia de los temas transmiten estabilidad organizacional. El cerebro del usuario se siente libre para interactuar."
    },
    designDebt: {
      tag: "DEUDA DE DISEÑO • RESPONSABILIDAD TÉCNICA",
      title: "El Peso Oculto del \"Design Debt\"",
      desc1: "Ignorar las pequeñas discrepancias visuales y desajustes en paddings, fuentes o colores heredados para acelerar los lanzamientos genera una de las deudas más peligrosas en el desarrollo: la Deuda de Diseño.",
      desc2: "Individualmente, aplicar un espaciado fijo temporal (hardcoded fallback) o fallar sutilmente en un token de fuente parece irrelevante. \"Ya lo arreglaremos\", se suele decir.",
      desc3: "Sin embargo, tras unos pocos sprints, el efecto acumulativo de estas pequeñas negligencias visuales fragmenta la experiencia del usuario de forma letal:",
      quote: "\"Para los usuarios, una interfaz llena de pequeñas inconsistencias parece amateur e inacabada. El cliente siente en el fondo que la empresa no es confiable.\"",
      summary: "La Deuda de Diseño no destruye las cosas con una caída repentina de los servidores; mata mediante la asfixia gradual de la retención de usuarios.",
      resetBtn: "Restablecer Deuda",
      sandboxSub: "SIMULADOR DE RECURSOS ACUMULADOS EN SPRINT RELEASES",
      sprintLabel: "NÚMERO DE SPRINTS SIN DISEÑADOR QA:",
      releasesConsecutive: "entregas consecutivas",
      startupClean: "INICIO LIMPIO (ENTREGA CERO)",
      fullDisintegration: "DESINTEGRAÇÃO TOTAL (SPRINT 5)",
      cardTitle: "Aplicaciones Financieras CRM",
      urgentBadge: "URGENTE: INCONGRUENTE",
      approvedBadge: "APROBADO",
      transferValue: "Monto a Transferir (TED):",
      typingPlaceholder: "Escribiendo $ 500,00...",
      pixActive: "PAGO ACTIVO",
      confirmTransfer: "CONFIRMAR TRANSFERENCIA",
      confirm: "CONFIRMA",
      mismatchesLabel: "Desviaciones",
      devEffortLabel: "Esfuerzo de Retrabajo",
      uxDropLabel: "Pérdida de UX",
      tokensMissing: "Tokens ausentes",
      futureRework: "Retrabajo futuro",
      userFrustration: "Frustración del usuario"
    },
    hilton: {
      tag: "ESTUDIO DE CASO REAL • GLARE WASHOUT",
      title: "El Error Que El Código No Ve",
      p1: "Considere el icónico caso real del botón \"Confirmar Reserva\" de una gran plataforma hotelera (como Hilton o similar) que simplemente desapareció para miles de usuarios.",
      p2: "Las pruebas unitarias enfocadas en la lógica del DOM (Jest / JSDOM / Testing Library) pasaban impecablemente:",
      passed: "APROBADO",
      testLabel: "La automatización lógica validaba perfectamente el comportamiento físico del botón, pero ignoró por completo su legibilidad real.",
      qaAbsolution: "Absolución de QA: ¡La culpa no es ni ha sido nunca de su Ingeniero de Pruebas! Las herramientas tradicionales carecen de canales sensoriales visuales. No detectan si, en el CSS heredado, el botón perdió el contraste mínimo de 4.5:1 exigido por las WCAG.",
      summary: "Bajo la luz del sol en dispositivos móviles (Washout por reflejos), el botón con letra blanca sobre fondo gris simplemente desaparecía. ¿El resultado? Caídas brutales en la conversión de ingresos móviles.",
      sandboxTitle: "Simulador de Visión de Dispositivo",
      sandboxSub: "VEA CÓMO VISUALIZA EL CLIENTE Y CÓMO ENTIENDE LA PRUEBA DE JEST",
      btnCi: "1. En el Servidor CI",
      btnSunlight: "2. Bajo la Luz del Sol (Móvil)",
      ciExecuting: "Ejecutando hotel-checkout-test.tsx en Linux NodeContainer...",
      ciPassed: "PASS src/tests/checkout-button.test.ts",
      ciLine1: "✓ el botón existe en el cuerpo [2ms]",
      ciLine2: "✓ textContent contiene \"Confirmar Reserva\" [1ms]",
      ciLine3: "✓ el controlador onclick está asociado [4ms]",
      ciMarkup: "> El estado del DOM afirma un perfecto estado de actividad del botón.",
      checkoutLabel: "Pago Hilton Copacabana",
      confirmReservation: "Confirmar Reserva",
      luminosity: "🌞 LUMINOSIDAD AMBIENTAL: 85.000 LUX (EXTERIOR)",
      contrastRatio: "WCAG CONTRAS_RATIO: 1.2:1 (FALLO)",
      totalPrice: "Precio Total",
      priceValue: "$ 2.450 / Noche",
      whereIsButton: "❌ ¿DÓNDE ESTÁ EL BOTÓN? EL CLIENTE INTENTA TOCAR Y DESISTE",
      diagnostic: "Diagnóstico: Jesting y DOM no cuantifican la Luz, Colores o Contraste Humano."
    },
    shiftleft: {
      tag: "METODOLOGÍA SHIFT-LEFT • CERO RETRABAJO",
      title: "Metodología Design QA",
      desc1: "Reabrir reportes de errores visuales en JIRA tras una publicación es costoso y agotador. Desmotiva a los ingenieros y retrasa semanas el cronograma de entrega de las funciones principales.",
      desc2: "La solución es el Shift-Left de Calidad Visual.",
      desc3: "En lugar de revisar las vistas únicamente en el entorno de pruebas final, introducimos el estado de Design QA como una etapa nativa, síncrona y aislada del pipeline. Establecemos un acuerdo firme entre Diseño e Ingeniería usando Storybook como herramienta de validación.",
      desc4: "Ningún componente se sube sin ser probado exhaustivamente de manera aislada. Si un desarrollador se equivoca en un espacio, el componente es rechazado sutilmente al inicio.",
      sandboxTitle: "Pipeline Visual Checkpoint",
      sandboxSub: "HAGA CLIC EN LOS PASOS DEL PIPELINE PARA ENTENDER EL PROCESO DE DESIGN QA",
      activeStepTag: "ETAPA ACTIVA",
      impactTag: "IMPACTO CON DESIGN QA: CERO RETRABAJO",
      crucialTag: "⚠️ CRUCIAL DENTRO DEL FIGMA CONTRACT",
      steps: [
        {
          id: 0,
          title: "1. Figma Design Handoff",
          subtitle: "Tokens Originales",
          desc: "Los diseñadores definen colores, tipografías y cuadrículas directamente en las APIs de Figma, encapsulados en Design Tokens JSON listos para consumo estático."
        },
        {
          id: 1,
          title: "2. Storybook Sandbox",
          subtitle: "Componentes Aislados",
          desc: "Los ingenieros construyen componentes aislados del código heredado. Esto previene errores de herraduras parásitas en el CSS global."
        },
        {
          id: 2,
          title: "3. Checkpoint Design QA",
          subtitle: "Validación Síncrona",
          desc: "El checkpoint visual ocurre ANTES de que el código ingrese a las pruebas funcionales. Si el componente difiere 1px del token inicial, no avanza en el flujo."
        },
        {
          id: 3,
          title: "4. Pruebas Funcionales",
          subtitle: "Funciones Unitarias",
          desc: "Una vez que el componente físico está 100% calibrado en apariencia, los automatizadores crean las aserciones lógicas de clic, comportamiento y transición."
        },
        {
          id: 4,
          title: "5. Lanzamiento en CI/CD",
          subtitle: "Liberación Segura",
          desc: "El despliegue se realiza con una probabilidad de errores visuales del cero por ciento. Sin necesidad de crear reportes complejos o renegociar las vistas en post-producción."
        }
      ]
    },
    automation: {
      tag: "IA PERCEPTUAL • AUTOMATIZACIÓN VRT",
      title: "Automatización Como Liberación",
      desc1: "Ningún Ingeniero de Calidad de Software (QE) debería pasar horas de su vida contando píxeles manualmente o usando reglas digitales sobre pantallas estáticas. Eso es ingeniería obsoleta y agotadora.",
      desc2: "\"La verdadera automatización visual a escala utiliza Perceptual AI para dar superpoderes a los equipos de ingeniería.\"",
      desc3: "Integramos pruebas de Regresión Visual Automatizada (VRT) directamente en Git CI/CD. Herramientas eficientes como Chromatic o Percy renderizan las pantallas en la nube con cada push de un Pull Request.",
      desc4: "El sistema compara autónomamente la versión anterior con la nueva, señalando cualquier desviación de píxeles de un milímetro con un contraste en color magenta chillón. El QE no tiene que buscar el error; la máquina genera el reporte en segundos.",
      sandboxTitle: "Perceptual Engine Checker",
      sandboxSub: "PULL REQUEST GITHUB VERIFICATION #1059",
      btnScan: "Ejecutar VRT Scan",
      btnAccept: "Aceptar Variación",
      mergedGreen: "MERGED GREEN",
      refFigma: "Ref: FIGMA (Línea base)",
      candPr: "Candidato: PULL REQUEST",
      compareProgress: "PROCESANDO COMPARADOR DE PIXELES...",
      widthOutBadge: "ANCHO EXCEDIDO 4px",
      btnLabelConnect: "Conectar",
      howToTest: "Cómo probar:",
      howToTestText: "Presione el botón superior para ejecutar el análisis automatizado en el Pull Request. Comparará la versión propuesta con el diseño original.",
      scanStatusText: "Análisis con Visión Computacional: Nuestro bot de Regresión Perceptual está analizando la matriz RGB del DOM frente a la especificación del Figma...",
      diffStatusText: "¡Diferencias encontradas! El botón del PR se programó con un ancho estirado de 112px en lugar de los 96px estándar. Acepte la variación si fue intencional o el pipeline detendrá el código.",
      approvedStatusText: "¡Integración aprobada! El repositorio aceptó la variación y el flujo de Git está verde. Sin escrituras incorrectas ni retrabajo posterior."
    },
    strategic: {
      tag: "LA EVOLUCIÓN DE LA CALIDAD • QA ESTRATÉGICO",
      title: "El Ingeniero de Calidad Estratégico",
      desc1: "A medida que las herramientas de IA comienzan a programar componentes directamente a partir de maquetas de Figma y las pruebas de regresión automatizadas protegen la fidelidad de píxeles, el rol de QE se revaloriza enormemente.",
      desc2: "El desafío para el gremio de calidad de excelencia deja de ser básico y operativo. Ya no se trata de buscar botones desalineados a mano.",
      quote: "\"Su misión es calibrar el sentido analítico para auditar lo que las máquinas ignoran: la ética, la accesibilidad y la empatía real en la navegación.\"",
      bullet1Title: "Garantizar Accesibilidad Real:",
      bullet1Desc: "Validar que los lectores de pantalla fluyan semánticamente bajo las pautas reales de usabilidad y accesibilidad.",
      bullet2Title: "Combatir Patrones Oscuros:",
      bullet2Desc: "Evitar que los trucos visuales manipulen el flujo o fuercen decisiones engañosas de compras para los usuarios.",
      sandboxTitle: "Selector de Paradigmas de Gremio",
      sandboxSub: "ELIJA EL ESQUEMA DE INGENIERÍA DE CALIDAD",
      btnLegacy: "1. El QE Operativo (Heredado)",
      btnStrategic: "2. El QE Estratégico (Futuro)",
      legacyTag: "Foco Operativo Repetitivo (Supervivencia)",
      legacyLine1Title: "❌ PIXEL-COUNTING:",
      legacyLine1Desc: "Comparar Figma visualmente toma horas de trabajo poco productivo de pruebas manuales.",
      legacyLine2Title: "❌ REACTIVIDAD:",
      legacyLine2Desc: "Errores detectados sólo al final del sprint en Staging, provocando horas extras largas de corrección rápida.",
      legacyLine3Title: "❌ OMISIÓN:",
      legacyLine3Desc: "Sin ojo clínico para la ética; la accesibilidad queda relegada a herramientas que ignoran la experiencia real del lector de pantalla.",
      strategicTag: "Foco Clínico-Experiencial (Defensor de la Experiencia)",
      strategicLine1Title: "✓ VRT AUTOMÁTICA:",
      strategicLine1Desc: "La IA visual se encarga de los píxeles. El QE diseña y analiza métricas de escenarios lógicos complejos.",
      strategicLine2Title: "✓ SHIFT-LEFT:",
      strategicLine2Desc: "Storybook blinda y avala la integridad con cada commit desde el primer momento (retrabajo nulo).",
      strategicLine3Title: "✓ ÉTICA DE LA JORNADA:",
      strategicLine3Desc: "Lidera auditorías genuinas WCAG 2.2 y previene Patrones Oscuros. Las pruebas defienden al usuario real.",
      wcagLabel: "ACERCA DE ACCESIBILIDAD WCAG VERIFIED",
      humanLabel: "100% Humano"
    },
    contact: {
      tag: "Alineación entre Gremios",
      title: "Iniciar Debate con el Diseñador",
      desc: "Envíe sus comentarios para organizar una sesión interactiva o bloque de trabajo dirigido a solucionar las fricciones entre Diseño, Ingeniería y Calidad.",
      fieldName: "Su Nombre *",
      fieldEmail: "Correo corporativo *",
      fieldCompany: "Su Squad, Equipo o Empresa",
      fieldIndustry: "Contexto / Producto",
      placeholderIndustry: "Selecciona el contexto / producto",
      fieldDefect: "Mayor Fricción de Diseño",
      placeholderDefect: "Selecciona la fricción principal",
      fieldNotes: "Temas o Preguntas para la Reunión",
      placeholderName: "Ej: Leonard Silva",
      placeholderEmail: "Ej: nombre@squad.com",
      placeholderCompany: "Ej: Squad de Relación / Globant S/A",
      placeholderNotes: "Ej: ¿Cómo integrar tokens en Git con Storybook? ¿Cuál es el mejor VRT para nuestro stack?",
      btnSubmit: "Llevar Debate al Gremio",
      footerLock: "🔒 Espacio colaborativo para compartir conocimientos de producto, procesos y tecnologías.",
      successLabel: "¡Sesión sugerida con éxito!",
      successTitle: "¡Excelente, {name}!",
      successDesc: "He añadido nuestra discusión a la agenda. Organizaremos un enfoque centrado en productos de {industry} y hablaremos sobre cómo sanar y automatizar el Design QA para prevenir conflictos de {defectType}.",
      pautaTitle: "Agenda Recomendada:",
      pautaSub: "Sincronizar Procesos",
      pautaLine1: "Taller teórico-práctico de Storybook y distribución de Tokens.",
      pautaLine2: "Ajustes del motor de Regresión Perceptual por IA (Percy/Chromatic).",
      btnBack: "Volver a la Presentación",
      industries: {
        airlines: "Aerolíneas y Turismo",
        games: "Entretenimiento y Juegos",
        automotive: "Automotriz y IoT",
        energy: "Energía e Industria",
        fintech: "Fintech y Banca"
      },
      defects: {
        misalignment: "Desviación Visual en Maquetación",
        "slow-handoff": "Handoff de Diseño Lento",
        "broken-tokens": "CSS / Design Tokens desalineados",
        "manual-qa": "Pruebas Visuales Manuales Excesivas"
      }
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageType>(() => {
    const saved = localStorage.getItem("app_lang");
    return saved === "es" || saved === "pt" ? saved : "pt";
  });

  const setLanguage = (lang: LanguageType) => {
    setLanguageState(lang);
    localStorage.setItem("app_lang", lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
