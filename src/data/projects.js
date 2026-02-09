export const projectsData = [
    {
        id: 1,
        title: "Sistema de Agendamento",
        description: "Plataforma completa para pousadas com sistema de reservas online e gestão de quartos.",
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
        category: "Sistema Web",
        categoryColor: "bg-blue-500",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
        features: [
            "Sistema de reservas online em tempo real",
            "Gestão completa de quartos e disponibilidade",
            "Integração com pagamentos via Stripe",
            "Dashboard administrativo completo",
            "Notificações em tempo real",
            "Relatórios de ocupação e receita"
        ],
        challenges: "Desenvolvimento de um sistema robusto de reservas que evita conflitos de agendamento e oferece uma experiência fluida tanto para clientes quanto para administradores.",
        results: "Aumento de 40% nas reservas online e redução de 60% no tempo de gestão administrativa.",
        duration: "3 meses",
        role: "Desenvolvedor Full Stack"
    },
    {
        id: 2,
        title: "Dashboard de Monitoramento",
        description: "Interface interativa para monitoramento em tempo real de infraestrutura de rede.",
        image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
        category: "Dashboard",
        categoryColor: "bg-purple-500",
        technologies: ["React", "D3.js", "WebSocket", "Python", "Redis"],
        features: [
            "Monitoramento em tempo real de servidores",
            "Gráficos interativos com D3.js",
            "Sistema de alertas personalizáveis",
            "Histórico de performance detalhado",
            "Interface responsiva e intuitiva",
            "Integração com múltiplos protocolos de monitoramento"
        ],
        challenges: "Criar uma interface que apresente dados complexos de forma clara e permita ação rápida em caso de problemas na infraestrutura.",
        results: "Redução de 75% no tempo de detecção de problemas e melhoria significativa na disponibilidade dos serviços.",
        duration: "2 meses",
        role: "Desenvolvedor Frontend + Data Visualization"
    },
    {
        id: 3,
        title: "Gateway de Pagamentos",
        description: "Solução de pagamento simplificada para prestadores locais com painel de controle.",
        image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
        category: "FinTech",
        categoryColor: "bg-green-500",
        technologies: ["React", "Express", "PostgreSQL", "PIX", "Mercado Pago"],
        features: [
            "Integração completa com PIX",
            "Links de pagamento personalizáveis",
            "Dashboard financeiro completo",
            "Relatórios de transações detalhados",
            "Sistema de notificações",
            "API REST para integrações"
        ],
        challenges: "Desenvolver uma solução de pagamentos segura e confiável que atenda às necessidades de pequenos prestadores de serviço locais.",
        results: "Processamento de mais de R$ 50.000 em transações no primeiro mês e feedback 100% positivo dos usuários.",
        duration: "4 meses",
        role: "Desenvolvedor Full Stack + Integração Financeira"
    }
];
