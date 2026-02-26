export const dictionaries = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      expertise: 'Capabilities',
      products: 'Products',
      team: 'Team',
      cases: 'Projects',
      process: 'Process',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      title: 'Elastic Labs — AI Integration & Building Partner',
      subtitle:
        'We help teams build and scale with AI. From automating repetitive workflows to deploying custom AI agents, we focus on practical implementation that actually works.',
      cta: 'Book a 30-min Intro Call',
      secondaryCta: 'See What We Build',
      usps: [
        'Ship in weeks, not months',
        'Built for performance and security',
        'Handover with documentation and training',
      ],
    },
    vision: {
      title: 'How we think about AI',
      description:
        'We believe AI is a tool to amplify what humans can do. Instead of complex theories, we focus on building systems that solve real bottlenecks and help your team do more with less friction.',
    },
    services: {
      title: 'Services',
      header: 'Executable Intelligence.',
      description: 'Flexible solutions designed to fit your current stage and grow with you.',
      items: [
        {
          title: '1) AI Strategy & Assessment',
          description:
            'A 2–4 week diagnostic to find where AI can actually help. We provide a clear Technical Roadmap so you know exactly what to build first.',
          details: [
            'Identifying high-impact AI opportunities',
            'Technical architecture design',
            'Practical implementation planning',
          ],
        },
        {
          title: '2) AI Implementation & Automation',
          description:
            'We integrate AI into your existing workflows. Whether it is Marketing, Sales, or CS, we help sync your tools and automate manual tasks.',
          details: [
            'Workflow redesign for automation',
            'Tool and data integration',
            'Setting up lightweight governance',
          ],
        },
        {
          title: '3) Custom AI Agents',
          description:
            'We build specialized AI agents that understand your business rules. They can help with drafting, data research, and handling routine customer queries.',
          details: [
            'Bespoke agent design + guardrails',
            'Internal knowledge base integration',
            'Reliable feedback loops',
          ],
        },
        {
          title: '4) AI-Powered Apps',
          description:
            'Building web and mobile apps with AI features built-in (RAG, localized AI) to ensure they are fast and useful.',
        },
        {
          title: '5) Team Training & Handover',
          description:
            'We do not just build and leave. We run workshops and provide playbooks so your team can manage and evolve the systems on their own.',
        },
      ],
    },
    products: {
      title: 'Products',
      header: 'Recent Projects.',
      subtitle: 'Projects and platforms we have built to make AI adoption easier.',
      items: [
        {
          slug: 'polkadot-agent-kit',
          title: 'Polkadot Agent Kit',
          description:
            'A toolkit for building AI agents that can interact with the Polkadot ecosystem, making on-chain operations and data monitoring simpler.',
          link: 'https://github.com/elasticlabs-org/polkadot-agent-kit',
          banner: '/logo/products/polkadot-agent-kit-banner.png',
          howWeBuild: {
            title: 'Building Polkadot Agent Kit',
            description:
              'We focused on making it modular and secure, so developers can bridge LLMs with decentralized protocols without the usual headache.',
            points: [
              {
                title: 'Agentic Infrastructure',
                description: 'Uses LangChain and custom Substrate tools for decision-making.',
              },
              {
                title: 'Security-First',
                description: 'Safe key management and guardrails for on-chain actions.',
              },
              {
                title: 'Developer Friendly',
                description: 'Clean TypeScript APIs and clear documentation.',
              },
              {
                title: 'Real-time Data',
                description: 'Fast monitoring of blockchain state changes.',
              },
              {
                title: 'Multi-Chain Support',
                description: 'Works with Polkadot, Kusama, and Parachains.',
              },
              {
                title: 'Extensible',
                description: 'Add new capabilities via a simple plugin system.',
              },
            ],
          },
        },
        {
          slug: 'speedgrowth-ai',
          title: 'Speedgrowth.ai',
          description:
            'An AI command center to help startups automate marketing and scale operations by turning bottlenecks into growth engines.',
          link: 'https://speedgrowth.ai',
          banner: '/logo/products/speedgrowth-banner.png',
          howWeBuild: {
            title: 'Building Speedgrowth.ai',
            description:
              'We combined high-performance web frameworks with optimized LLM orchestration to handle complex marketing and sales tasks.',
            points: [
              {
                title: 'Next.js Edge Architecture',
                description: 'Fast performance and global scalability.',
              },
              {
                title: 'Multi-Model Routing',
                description: 'Uses the best LLM (GPT-4, Claude, Gemini) for each task.',
              },
              {
                title: 'Deep Automation',
                description: 'Connects your CRM and marketing stack with AI agents.',
              },
              {
                title: 'Real-time Analytics',
                description: 'Track how agents and campaigns are performing.',
              },
              {
                title: 'Custom Agent Roles',
                description: 'Define AI roles that match your brand voice.',
              },
              {
                title: 'Reliable Data Security',
                description: 'Keeps your customer data safe and protected.',
              },
            ],
          },
        },
      ],
    },
    team: {
      title: 'Team',
      header: 'The Builders.',
      subtitle: 'We are builders and systems architects who love automating complex things.',
      readMore: 'Read More',
      readLess: 'Show Less',
      members: [
        {
          name: 'Cris Nguyen',
          role: 'CEO & Founder',
          bio: 'Cris focuses on using AI and blockchain to make human work more efficient. As the founder of Elastic Labs and SpeedGrowth, he builds systems that turn operational tasks into growth channels.\n\nHe is also an angel investor with Guidance Ventures, supporting projects like RiseChain and GRVT.\n\nWith a background in growth for Polkadot SEA and APAC, he bridges the gap between technical innovation and practical market expansion.',
          avatar: '/founders/cris-nguyen-avatar.png',
          linkedin: 'https://www.linkedin.com/in/truongnguyen99/',
          github: 'https://github.com/ngquangtruong',
        },
        {
          name: 'Tin Chung',
          role: 'CTO & Co-Founder',
          bio: 'Tin is a systems architect specializing in high-performance data infrastructure. He has built core systems like real-time blockchain ingestion frameworks and custom compilers from scratch.\n\nA hackathon champion and Polkadot Blockchain Academy graduate, his expertise covers the Polkadot SDK, Solana, and Ethereum. He is a frequent contributor to open-source software and a technical mentor.',
          avatar: '/founders/tin-chung-avatar.png',
          linkedin: 'https://www.linkedin.com/in/chungquantin/',
          github: 'https://github.com/chungquantin',
        },
      ],
    },
    whyUs: {
      title: 'Working with us',
      description:
        'We skip the long theoretical reports and focus on delivering functional systems that your team can actually use.',
      points: [
        {
          title: 'Speed to Impact',
          description:
            'We focus on getting a working version deployed quickly so you can see the results in weeks.',
        },
        {
          title: 'Built to Last',
          description:
            'We handover systems that are well-documented, secure, and integrated into your existing stack.',
        },
      ],
    },
    cases: {
      title: 'Projects',
      header: 'Battle Tested.',
      items: [
        {
          category: 'Insurance',
          title: 'CRM & Support Automation',
          description:
            'Helping sync customer data and using AI to manage queries across different channels.',
        },
        {
          category: 'B2B SaaS',
          title: 'Sales Operations Agent',
          description: 'Automating the path from lead qualification to follow-ups.',
        },
        {
          category: 'Marketing Agency',
          title: 'Content & Reporting Workflow',
          description: 'Using AI to speed up content creation and client reporting.',
        },
      ],
    },
    techStack: {
      title: 'Technical Capabilities',
      categories: [
        {
          title: 'Generative AI & LLM',
          description:
            'We go beyond basic prompts. We build custom multi-agent systems, implement RAG (Retrieval-Augmented Generation) for specialized knowledge, and optimize model performance using frameworks like vLLM and SGLang.',
          techs: [
            { name: 'Gemini', logo: '' },
            { name: 'Claude', logo: '' },
            { name: 'LangGraph', logo: '/logo/technologies/langgraph-logo.png' },
            { name: 'CrewAI', logo: '/logo/technologies/crewai-logo.png' },
            { name: 'vLLM', logo: '/logo/technologies/vllm-logo.png' },
            { name: 'SGLang', logo: '/logo/technologies/sglang-logo.png' },
          ],
        },
        {
          title: 'Blockchain & Web3',
          description:
            'Expertise in building decentralized infrastructure and agentic kit for ecosystems like Polkadot and Ethereum. We specialize in Rust-based runtime development and secure on-chain automation.',
          techs: [
            { name: 'Polkadot Substrate', logo: '' },
            { name: 'Ethereum', logo: '' },
            { name: 'Rust', logo: '/logo/technologies/rust-logo.png' },
          ],
        },
        {
          title: 'Full-Stack Engineering',
          description:
            'We build production-ready applications that scale. From high-performance Node.js backends to interactive React frontends, we ensure your AI solutions are reliable and user-friendly.',
          techs: [
            { name: 'TypeScript', logo: '/logo/technologies/typescript.png' },
            { name: 'Node.js', logo: '/logo/technologies/nodejs-logo.svg' },
            { name: 'React', logo: '/logo/technologies/react-logo.png' },
            { name: 'Python', logo: '' },
          ],
        },
      ],
    },
    expertise: {
      title: 'Deep Expertise',
      items: [
        {
          title: 'Agentic Engineering',
          description:
            'We design AI systems that can coordinate and execute complex tasks across your business departments.',
        },
        {
          title: 'Internal Infrastructure',
          description:
            'Setting up specialized hardware and AI models locally so you have full control over your data.',
        },
        {
          title: 'Custom Automation',
          description:
            'Building digital assistants and governance tools that remove manual friction from your daily operations.',
        },
      ],
    },
    process: {
      title: 'How we collaborate',
      subtitle: 'We work as an extension of your team, making sure we are aligned on every step.',
    },
    blog: {
      title: 'The Blog',
      description: 'Our thoughts on building with AI and automation.',
      readMore: 'Read the Blog',
    },
    cta: {
      title: 'Ready to build?',
      description:
        'Tell us what you want to automate or build. We will help you figure out the best roadmap and implementation steps.',
      primary: 'Book a Talk',
      secondary: 'Send a Message',
    },
    footer: {
      copyright: '© 2026 Elastic Labs. All rights reserved.',
    },
  },
  vn: {
    nav: {
      home: 'Trang chủ',
      services: 'Dịch vụ',
      expertise: 'Năng lực',
      products: 'Sản phẩm',
      team: 'Đội ngũ',
      cases: 'Dự án',
      process: 'Quy trình',
      blog: 'Blog',
      contact: 'Liên hệ',
    },
    hero: {
      title: 'Elastic Labs — Đối tác xây dựng và tích hợp AI',
      subtitle:
        'Chúng tôi giúp các đội ngũ xây dựng và mở rộng quy mô bằng AI. Từ việc tự động hóa quy trình lặp đi lặp lại đến triển khai AI Agent chuyên biệt, chúng tôi tập trung vào những giải pháp thực tế và hiệu quả.',
      cta: 'Đặt lịch trao đổi 30 phút',
      secondaryCta: 'Xem các dự án',
      usps: [
        'Triển khai trong vài tuần, không phải vài tháng',
        'Đảm bảo hiệu suất và bảo mật',
        'Bàn giao đầy đủ tài liệu và hướng dẫn',
      ],
    },
    vision: {
      title: 'Cách chúng tôi nghĩ về AI',
      description:
        'Chúng tôi tin rằng AI là công cụ để mở rộng năng lực con người. Thay vì những lý thuyết phức tạp, chúng tôi tập trung xây dựng các hệ thống giải quyết điểm nghẽn thực tế và giúp đội ngũ của bạn làm việc mượt mà hơn.',
    },
    services: {
      title: 'Dịch vụ',
      header: 'Giải pháp thực thi.',
      description:
        'Các giải pháp linh hoạt được thiết kế để phù hợp với từng giai đoạn và phát triển cùng doanh nghiệp bạn.',
      items: [
        {
          title: '1) Chiến lược & Đánh giá AI',
          description:
            'Chẩn đoán trong 2–4 tuần để tìm ra nơi AI có thể giúp ích thực sự. Chúng tôi cung cấp Lộ trình Kỹ thuật rõ ràng để bạn biết chính xác nên xây dựng gì trước.',
          details: [
            'Xác định cơ hội ứng dụng AI hiệu quả',
            'Thiết kế kiến trúc kỹ thuật',
            'Lập kế hoạch triển khai thực tế',
          ],
        },
        {
          title: '2) Triển khai & Tự động hóa AI',
          description:
            'Chúng tôi tích hợp AI vào quy trình hiện có của bạn. Dù là Marketing, Sales hay CS, chúng tôi giúp đồng bộ công cụ và tự động hóa các tác vụ thủ công.',
          details: [
            'Thiết kế lại quy trình để tự động hóa',
            'Đồng bộ hóa dữ liệu và công cụ',
            'Thiết lập khung quản trị nhẹ nhàng',
          ],
        },
        {
          title: '3) Phát triển AI Agent chuyên biệt',
          description:
            'Xây dựng các đặc vụ AI hiểu rõ quy tắc kinh doanh của bạn. Chúng có thể hỗ trợ soạn thảo, nghiên cứu dữ liệu và xử lý các yêu cầu khách hàng thường gặp.',
          details: [
            'Thiết kế Agent kèm rào cản bảo mật',
            'Tích hợp cơ sở tri thức nội bộ',
            'Thiết lập vòng lặp phản hồi tin cậy',
          ],
        },
        {
          title: '4) Ứng dụng tích hợp AI',
          description:
            'Xây dựng các ứng dụng web và mobile có sẵn tính năng AI (RAG, localized AI) để đảm bảo tốc độ và tính hữu dụng.',
        },
        {
          title: '5) Đào tạo & Chuyển giao',
          description:
            'Chúng tôi không chỉ xây dựng rồi rời đi. Chúng tôi tổ chức workshop và cung cấp playbook để đội ngũ của bạn có thể tự quản lý và phát triển hệ thống.',
        },
      ],
    },
    products: {
      title: 'Sản phẩm',
      header: 'Dự án tiêu biểu.',
      subtitle:
        'Các dự án và nền tảng chúng tôi đã xây dựng để việc ứng dụng AI trở nên dễ dàng hơn.',
      items: [
        {
          slug: 'polkadot-agent-kit',
          title: 'Polkadot Agent Kit',
          description:
            'Bộ công cụ xây dựng các AI agent có thể tương tác với hệ sinh thái Polkadot, giúp việc vận hành on-chain và theo dõi dữ liệu trở nên đơn giản hơn.',
          link: 'https://github.com/elasticlabs-org/polkadot-agent-kit',
          banner: '/logo/products/polkadot-agent-kit-banner.png',
          howWeBuild: {
            title: 'Xây dựng Polkadot Agent Kit',
            description:
              'Chúng tôi tập trung vào tính module và bảo mật, giúp nhà phát triển kết nối LLM với các giao thức phi tập trung mà không gặp khó khăn.',
            points: [
              {
                title: 'Hạ tầng Agentic',
                description: 'Sử dụng LangChain và các công cụ Substrate để ra quyết định.',
              },
              {
                title: 'Bảo mật là trên hết',
                description: 'Quản lý khóa an toàn và rào cản cho các hành động on-chain.',
              },
              {
                title: 'Thân thiện với nhà phát triển',
                description: 'API TypeScript sạch sẽ và tài liệu rõ ràng.',
              },
              {
                title: 'Dữ liệu thời gian thực',
                description: 'Theo dõi nhanh các thay đổi trạng thái blockchain.',
              },
              {
                title: 'Hỗ trợ đa chuỗi',
                description: 'Hoạt động với Polkadot, Kusama và các Parachain.',
              },
              {
                title: 'Có thể mở rộng',
                description: 'Thêm năng lực mới thông qua hệ thống plugin đơn giản.',
              },
            ],
          },
        },
        {
          slug: 'speedgrowth-ai',
          title: 'Speedgrowth.ai',
          description:
            'Trung tâm điều hành AI giúp startup tự động hóa marketing và mở rộng vận hành bằng cách biến các điểm nghẽn thành động cơ tăng trưởng.',
          link: 'https://speedgrowth.ai',
          banner: '/logo/products/speedgrowth-banner.png',
          howWeBuild: {
            title: 'Xây dựng Speedgrowth.ai',
            description:
              'Chúng tôi kết hợp các web framework hiệu suất cao với việc điều phối LLM tối ưu để xử lý các tác vụ marketing và bán hàng phức tạp.',
            points: [
              {
                title: 'Kiến trúc Next.js Edge',
                description: 'Hiệu suất nhanh và khả năng mở rộng toàn cầu.',
              },
              {
                title: 'Điều phối đa mô hình',
                description: 'Sử dụng LLM tốt nhất (GPT-4, Claude, Gemini) cho từng tác vụ.',
              },
              {
                title: 'Tự động hóa sâu',
                description: 'Kết nối CRM và marketing stack của bạn với các AI agent.',
              },
              {
                title: 'Phân tích thời gian thực',
                description: 'Theo dõi hiệu quả của các agent và chiến dịch.',
              },
              {
                title: 'Vai trò Agent tùy chỉnh',
                description: 'Định nghĩa vai trò AI phù hợp với tiếng nói thương hiệu.',
              },
              {
                title: 'Bảo mật dữ liệu tin cậy',
                description: 'Giữ dữ liệu khách hàng của bạn luôn an toàn.',
              },
            ],
          },
        },
      ],
    },
    team: {
      title: 'Đội ngũ',
      header: 'Những người xây dựng.',
      subtitle:
        'Chúng tôi là những người xây dựng và kiến trúc sư hệ thống, yêu thích việc tự động hóa những thứ phức tạp.',
      readMore: 'Đọc thêm',
      readLess: 'Thu gọn',
      members: [
        {
          name: 'Cris Nguyen',
          role: 'CEO & Founder',
          bio: 'Cris tập trung vào việc sử dụng AI và blockchain để giúp công việc của con người trở nên hiệu quả hơn. Với tư cách là người sáng lập Elastic Labs và SpeedGrowth, ông xây dựng các hệ thống biến các tác vụ vận hành thành kênh tăng trưởng.\n\nÔng cũng là nhà đầu tư thiên thần tại Guidance Ventures, hỗ trợ các dự án như RiseChain và GRVT.\n\nVới kinh nghiệm tăng trưởng cho Polkadot SEA và APAC, ông thu hẹp khoảng cách giữa đổi mới kỹ thuật và mở rộng thị trường thực tế.',
          avatar: '/founders/cris-nguyen-avatar.png',
          linkedin: 'https://www.linkedin.com/in/truongnguyen99/',
          github: 'https://github.com/ngquangtruong',
        },
        {
          name: 'Tin Chung',
          role: 'CTO & Co-Founder',
          bio: 'Tin là kiến trúc sư hệ thống chuyên về hạ tầng dữ liệu hiệu suất cao. Ông đã xây dựng các hệ thống lõi như framework nạp dữ liệu blockchain và các trình biên dịch tùy chỉnh từ đầu.\n\nLà nhà vô địch hackathon và tốt nghiệp Polkadot Blockchain Academy, chuyên môn của ông bao gồm Polkadot SDK, Solana và Ethereum. Ông là người đóng góp tích cực cho phần mềm nguồn mở và là cố vấn kỹ thuật.',
          avatar: '/founders/tin-chung-avatar.png',
          linkedin: 'https://www.linkedin.com/in/chungquantin/',
          github: 'https://github.com/chungquantin',
        },
      ],
    },
    whyUs: {
      title: 'Đồng hành cùng chúng tôi',
      description:
        'Chúng tôi bỏ qua các báo cáo lý thuyết dài dòng và tập trung vào việc bàn giao các hệ thống thực tế mà đội ngũ của bạn có thể sử dụng ngay.',
      points: [
        {
          title: 'Tác động nhanh chóng',
          description:
            'Chúng tôi tập trung vào việc triển khai nhanh các phiên bản thực thi để bạn thấy kết quả sau vài tuần.',
        },
        {
          title: 'Xây dựng để bền vững',
          description:
            'Chúng tôi bàn giao các hệ thống đầy đủ tài liệu, bảo mật và được tích hợp sâu vào hạ tầng sẵn có của bạn.',
        },
      ],
    },
    cases: {
      title: 'Dự án',
      header: 'Đã được kiểm chứng.',
      items: [
        {
          category: 'Bảo hiểm',
          title: 'Tự động hóa CRM & Hỗ trợ',
          description:
            'Giúp đồng bộ dữ liệu khách hàng và sử dụng AI để quản lý yêu cầu qua nhiều kênh.',
        },
        {
          category: 'B2B SaaS',
          title: 'Agent vận hành bán hàng',
          description: 'Tự động hóa lộ trình từ phân loại lead đến các bước follow-up.',
        },
        {
          category: 'Marketing Agency',
          title: 'Quy trình nội dung & Báo cáo',
          description: 'Sử dụng AI để tăng tốc việc tạo nội dung và báo cáo cho khách hàng.',
        },
      ],
    },
    techStack: {
      title: 'Năng lực Kỹ thuật',
      categories: [
        {
          title: 'Generative AI & LLM',
          description:
            'Chúng tôi không chỉ dừng lại ở các prompt cơ bản. Chúng tôi xây dựng hệ thống đa đặc vụ (multi-agent), triển khai RAG cho các tri thức chuyên biệt và tối ưu hiệu suất mô hình bằng các framework như vLLM và SGLang.',
          techs: [
            { name: 'Gemini', logo: '' },
            { name: 'Claude', logo: '' },
            { name: 'LangGraph', logo: '/logo/technologies/langgraph-logo.png' },
            { name: 'CrewAI', logo: '/logo/technologies/crewai-logo.png' },
            { name: 'vLLM', logo: '/logo/technologies/vllm-logo.png' },
            { name: 'SGLang', logo: '/logo/technologies/sglang-logo.png' },
          ],
        },
        {
          title: 'Blockchain & Web3',
          description:
            'Kinh nghiệm xây dựng hạ tầng phi tập trung và các bộ công cụ agent cho các hệ sinh thái như Polkadot và Ethereum. Chúng tôi chuyên về phát triển runtime bằng Rust và tự động hóa on-chain an toàn.',
          techs: [
            { name: 'Polkadot Substrate', logo: '' },
            { name: 'Ethereum', logo: '' },
            { name: 'Rust', logo: '/logo/technologies/rust-logo.png' },
          ],
        },
        {
          title: 'Kỹ nghệ Full-Stack',
          description:
            'Chúng tôi xây dựng các ứng dụng sẵn sàng cho vận hành thực tế. Từ backend Node.js hiệu suất cao đến frontend React tương tác tốt, chúng tôi đảm bảo giải pháp AI của bạn tin cậy và dễ dùng.',
          techs: [
            { name: 'TypeScript', logo: '/logo/technologies/typescript.png' },
            { name: 'Node.js', logo: '/logo/technologies/nodejs-logo.svg' },
            { name: 'React', logo: '/logo/technologies/react-logo.png' },
            { name: 'Python', logo: '' },
          ],
        },
      ],
    },
    expertise: {
      title: 'Năng lực Chuyên sâu',
      items: [
        {
          title: 'Kỹ nghệ Agentic',
          description:
            'Thiết kế các hệ thống AI có khả năng điều phối và thực hiện các tác vụ phức tạp qua nhiều bộ phận.',
        },
        {
          title: 'Hạ tầng Nội bộ',
          description:
            'Thiết lập phần cứng chuyên dụng và các mô hình AI tại chỗ để bạn toàn quyền kiểm soát dữ liệu.',
        },
        {
          title: 'Tự động hóa Tùy chỉnh',
          description:
            'Xây dựng các trợ lý ảo và công cụ quản trị giúp loại bỏ các thao tác thủ công trong vận hành hàng ngày.',
        },
      ],
    },
    process: {
      title: 'Cách chúng tôi hợp tác',
      subtitle:
        'Chúng tôi làm việc như một phần trong đội ngũ của bạn, đảm bảo sự thấu hiểu trong từng bước đi.',
    },
    blog: {
      title: 'Blog',
      description: 'Những chia sẻ của chúng tôi về việc xây dựng với AI và tự động hóa.',
      readMore: 'Đọc Blog',
    },
    cta: {
      title: 'Sẵn sàng xây dựng?',
      description:
        'Hãy cho chúng tôi biết bạn muốn tự động hóa hay xây dựng điều gì. Chúng tôi sẽ giúp bạn xác định lộ trình và các bước thực hiện tốt nhất.',
      primary: 'Đặt lịch trao đổi',
      secondary: 'Gửi lời nhắn',
    },
    footer: {
      copyright: '© 2026 Elastic Labs. All rights reserved.',
    },
  },
}

export type Dictionary = typeof dictionaries.en
