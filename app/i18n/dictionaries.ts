export const dictionaries = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      expertise: 'Capabilities & Tech Stack',
      products: 'Products',
      team: 'Team',
      cases: 'Case Studies',
      process: 'Process',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      title: 'Elastic Labs | AI-native Integration Agency',
      subtitle:
        'Elastic Labs is an AI-native integration agency specialized in Marketing, Developer Activation, and Venture Building. We help blockchain ecosystems, startups, and enterprises scale their Web3 presence through strategic AI growth and innovative development.',
      cta: 'Book a 30-min Consultation',
      secondaryCta: 'View Services',
      usps: [
        'Deploy in weeks',
        'Focus on executable solutions with measurable impact',
        'Secure, optimized performance, and operational costs',
      ],
    },
    vision: {
      title: 'Strategic AI Vision',
      description:
        "In the digital era, sustainable growth doesn't necessarily mean excessive scaling of personnel, but rather optimizing technology leverage. Elastic Labs acts as a Strategic AI Integration Partner, helping businesses unlock their own new limits.",
    },
    services: {
      title: 'Service Portfolio',
      description:
        'Our technical solutions are designed to scale flexibly with your business growth.',
      items: [
        {
          title: 'AI Strategy & Performance Assessment',
          description:
            'Diagnosis in 2–4 weeks to identify AI opportunities with best ROI. Handover a Technical Roadmap for fast deployment.',
          details: [
            'AI Opportunity Map prioritized by ROI',
            'Sprint-based Technical Roadmap',
            'Fast implementation plan to measure impact',
          ],
        },
        {
          title: 'AI Engineering & Transformation',
          description:
            'Apply AI to workflows, creating smooth connections between Marketing, Sales, and CS to reduce manual work.',
          details: [
            'Workflow redesign based on operational goals',
            'Data & tool integration for Marketing, Sales, CS',
            'Lightweight governance, easy to operate and scale',
          ],
        },
        {
          title: 'AI Agent Development',
          description:
            'Build custom AI agents that understand your business, supporting drafting, data analysis, and customer interaction.',
          details: [
            'Agent design + business-specific guardrails',
            'Knowledge Base / RAG integration',
            'Monitoring + feedback loops',
          ],
        },
        {
          title: 'Applied Intelligence Ops',
          description:
            'Build AI-integrated web/mobile apps (RAG, On-device AI) with optimized performance and user experience.',
        },
        {
          title: 'Capability Transfer & Training',
          description:
            'Hands-on workshops and operational playbooks to help your team become self-sufficient.',
        },
      ],
    },
    products: {
      title: 'Our Products',
      subtitle: 'Open-source tools and platforms built by Elastic Labs to accelerate AI adoption.',
      items: [
        {
          slug: 'polkadot-agent-kit',
          title: 'Polkadot Agent Kit',
          description:
            'A powerful toolkit for building AI agents that can interact seamlessly with the Polkadot ecosystem. It enables developers to create intelligent agents capable of performing on-chain operations, monitoring network events, and providing user-friendly interfaces for complex blockchain interactions.',
          link: 'https://github.com/elasticlabs-org/polkadot-agent-kit',
          banner: '/logo/products/polkadot-agent-kit-banner.png',
          howWeBuild: {
            title: 'How we build Polkadot Agent Kit',
            description:
              'The Polkadot Agent Kit is engineered with a focus on modularity, security, and developer experience. We leverage the latest in AI and blockchain technologies to create a seamless bridge between intelligent agents and decentralized networks, ensuring high reliability and ease of integration.',
            points: [
              {
                title: 'Agentic Architecture',
                description:
                  'Utilizing LangChain and custom toolsets to allow LLMs to interact directly with Substrate-based chains, enabling autonomous decision-making and execution.',
              },
              {
                title: 'Security First',
                description:
                  'Implementing robust guardrails, secure key management, and transaction signing protocols for safe and reliable on-chain operations.',
              },
              {
                title: 'Developer Focused',
                description:
                  'Providing clean TypeScript APIs, comprehensive documentation, and starter templates to get developers up and running in minutes.',
              },
              {
                title: 'Real-time Monitoring',
                description:
                  'Integrated event listeners and indexer connections to provide agents with up-to-the-second blockchain state and data.',
              },
              {
                title: 'Cross-Chain Support',
                description:
                  'Designed to support Polkadot, Kusama, and various parachains, facilitating seamless multi-chain agent interactions.',
              },
              {
                title: 'Extensible Design',
                description:
                  'A plugin-based architecture that allows developers to easily add new tools and capabilities to their AI agents.',
              },
            ],
          },
        },
        {
          slug: 'speedgrowth-ai',
          title: 'Speedgrowth.ai',
          description:
            'An AI-powered growth platform designed to automate marketing workflows and scale startups effectively. By centralizing customer data and leveraging advanced AI agents, Speedgrowth.ai transforms operational bottlenecks into automated growth engines.',
          link: 'https://speedgrowth.ai',
          banner: '/logo/products/speedgrowth-banner.png',
          howWeBuild: {
            title: 'How we build Speedgrowth.ai',
            description:
              'Speedgrowth.ai is built to scale. We combine high-performance web frameworks with cutting-edge LLMs to automate complex marketing and sales workflows, focusing on high conversion rates and operational efficiency.',
            points: [
              {
                title: 'Next.js & Edge Runtime',
                description:
                  'Built on Next.js for lightning-fast performance, SEO optimization, and global scalability using edge computing.',
              },
              {
                title: 'Multi-Model Integration',
                description:
                  'Orchestrating multiple LLMs (GPT-4, Claude 3, Gemini) to handle specialized tasks like content generation, lead scoring, and sentiment analysis.',
              },
              {
                title: 'Workflow Automation',
                description:
                  'Sophisticated backend logic that connects marketing tools, CRM, and AI agents seamlessly to automate the entire customer journey.',
              },
              {
                title: 'Data-Driven Insights',
                description:
                  'Advanced analytics dashboards that provide real-time feedback on campaign performance and agent effectiveness.',
              },
              {
                title: 'Customizable Agent Roles',
                description:
                  'Define specific roles for AI agents, from social media managers to sales representatives, tailored to your brand voice.',
              },
              {
                title: 'Secure Data Handling',
                description:
                  'Enterprise-grade security measures to ensure that customer data is protected and used ethically within AI workflows.',
              },
            ],
          },
        },
      ],
    },
    team: {
      title: 'The Core Team',
      subtitle: 'Meet the architects of automation behind Elastic Labs.',
      readMore: 'Read More',
      readLess: 'Show Less',
      members: [
        {
          name: 'Cris Nguyen',
          role: 'CEO & Founder',
          bio: "Cris is a tech leader focused on leveling up the human experience through AI and blockchain. He is currently the Founder of Elastic Labs, an AI-native integration agency, and SpeedGrowth, an AI command center that automates customer support into a revenue channel for e-commerce brands.\n\nBeyond building, Cris is an active angel investor with Guidance Ventures, where he supports projects such as RiseChain, Infinit, Xyber, and GRVT.\n\nHis expertise lies at the intersection of large-scale multi-department operations and emerging technology partnerships. For the past three years, Cris led full-stack growth for Polkadot SEA and the APAC team. He served as the primary filter for the ecosystem's grants program, mentoring developer teams and managing a team of seven to bridge the gap between technical developer relations and regional expansion.",
          avatar: '/founders/cris-nguyen-avatar.png',
          linkedin: 'https://www.linkedin.com/in/truongnguyen99/',
          github: 'https://github.com/ngquangtruong',
        },
        {
          name: 'Tin Chung',
          role: 'CTO & Co-Founder',
          bio: 'Tin is a systems architect specializing in distributed networks and high-performance data infrastructure. He has a proven track record of building core systems from the ground up, ranging from real-time blockchain ingestion frameworks in Rust to custom DSL compilers for complex OLAP operations. Previously a founding engineer at Rover and R0GUE, Tin optimized Layer 1 runtime modules and managed massive 60TB+ state migrations that significantly reduced infrastructure overhead.\n\nA graduate of the Polkadot Blockchain Academy and a hackathon champion from Safe, Base, and Chainlink, his expertise spans the Polkadot SDK, Solana, and Ethereum. He is a frequent contributor to open-source software and serves as a technical mentor for the global developer community.',
          avatar: '/founders/tin-chung-avatar.png',
          linkedin: 'https://www.linkedin.com/in/chungquantin/',
          github: 'https://github.com/chungquantin',
        },
      ],
    },
    whyUs: {
      title: 'Why Partner with Elastic Labs?',
      description:
        'Instead of theoretical reports, we deliver executable solutions. Our goal is for you to see impact within weeks.',
      points: [
        {
          title: 'Speed to Impact',
          description:
            'We focus on rapid deployment, typically seeing measurable results within weeks, not months.',
        },
        {
          title: 'Executable Solutions',
          description:
            'No more thick reports. We handover fully functional systems integrated into your existing workflows.',
        },
      ],
    },
    cases: {
      title: 'Typical Projects',
      items: [
        {
          category: 'Insurance',
          title: 'CRM + Multi-channel Support Automation',
          description:
            'Automating customer interactions and data management across all touchpoints.',
        },
        {
          category: 'B2B SaaS',
          title: 'Sales Ops AI Agent',
          description: 'End-to-end automation: Lead → Quotation → Follow-up.',
        },
        {
          category: 'Marketing Agency',
          title: 'Content Workflow + Reporting',
          description: 'Automating content creation and multi-client reporting workflows.',
        },
      ],
    },
    techStack: {
      title: 'Technical Capabilities',
      categories: [
        {
          title: 'GenAI / LLM',
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
          title: 'Blockchain',
          techs: [
            { name: 'Polkadot Substrate', logo: '' },
            { name: 'Ethereum', logo: '' },
            { name: 'Rust', logo: '/logo/technologies/rust-logo.png' },
          ],
        },
        {
          title: 'Software Development',
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
            'Design multi-agent systems that coordinate smoothly to automate complex business logic across departments.',
        },
        {
          title: 'Internal Infrastructure',
          description:
            'Set up on-premise hardware clusters and deploy/train internal AI models so businesses fully own data and absolute security.',
        },
        {
          title: 'Custom Automation',
          description:
            'Develop virtual executive assistants and comprehensive governance platforms, helping to remove operational barriers so your team can focus on strategic goals.',
        },
      ],
    },
    process: {
      title: 'Trusted Collaboration Process',
      subtitle: 'We work as part of your team, ensuring the most timely understanding and support.',
    },
    blog: {
      title: 'Our Blog',
      description: 'Insights and thoughts from the Elastic Labs team.',
      readMore: 'Read More',
    },
    cta: {
      title: 'Your next challenge is ours',
      description:
        'Tell us what you want to automate. We will propose the fastest roadmap and implementation steps.',
      primary: 'Schedule a Talk',
      secondary: 'Send Project Request',
    },
    footer: {
      copyright: '© 2026 Elastic Labs. All rights reserved.',
    },
  },
  vn: {
    nav: {
      home: 'Trang chủ',
      services: 'Dịch vụ',
      expertise: 'Năng lực & Tech stack',
      products: 'Sản phẩm',
      team: 'Đội ngũ',
      cases: 'Dự án tiêu biểu',
      process: 'Quy trình hợp tác',
      blog: 'Blog',
      contact: 'Liên hệ',
    },
    hero: {
      title: 'Elastic Labs | Đại lý tích hợp AI-native',
      subtitle:
        'Elastic Labs là một đại lý tích hợp AI-native chuyên về Marketing, Kích hoạt Nhà phát triển và Xây dựng Dự án. Chúng tôi giúp các hệ sinh thái blockchain, startup và doanh nghiệp mở rộng quy mô Web3 thông qua tích hợp AI chiến lược và phát triển đổi mới.',
      cta: 'Đặt lịch tư vấn 30 phút',
      secondaryCta: 'Xem dịch vụ',
      usps: [
        'Triển khai trong vài tuần',
        'Tập trung giải pháp thực thi, đo được hiệu quả',
        'Bảo mật, tối ưu hiệu suất và chi phí vận hành',
      ],
    },
    vision: {
      title: 'Tầm nhìn AI Chiến lược',
      description:
        'Trong kỷ nguyên số, tăng trưởng bền vững không nhất thiết phải đi đôi với việc gia tăng quy mô nhân sự quá mức, mà nằm ở việc tối ưu hóa đòn bẩy công nghệ. Elastic Labs đóng vai trò là Đối tác Tích hợp AI Chiến lược, giúp doanh nghiệp khai phá những giới hạn mới của chính mình.',
    },
    services: {
      title: 'Danh mục dịch vụ',
      description:
        'Các giải pháp kỹ thuật của chúng tôi được thiết kế để linh hoạt mở rộng cùng sự phát triển của doanh nghiệp bạn.',
      items: [
        {
          title: 'Chiến lược AI & Đánh giá Hiệu suất',
          description:
            'Chẩn đoán trong 2–4 tuần để xác định điểm AI có thể mang lại ROI tốt nhất. Bàn giao Lộ trình Kỹ thuật (Technical Roadmap) để triển khai nhanh.',
          details: [
            'AI Opportunity Map và ưu tiên theo ROI',
            'Technical Roadmap theo sprint',
            'Kế hoạch triển khai nhanh để đo tác động',
          ],
        },
        {
          title: 'Kỹ nghệ & Chuyển đổi AI',
          description:
            'Ứng dụng AI vào quy trình làm việc, tạo kết nối nhịp nhàng giữa Marketing, Sales, CS để giảm thủ công và tăng độ chính xác.',
          details: [
            'Thiết kế lại workflow theo mục tiêu vận hành',
            'Kết nối dữ liệu và công cụ cho Marketing, Sales, CS',
            'Governance nhẹ, dễ vận hành và nhân rộng',
          ],
        },
        {
          title: 'Phát triển AI Agent (Nhân sự số chuyên biệt)',
          description:
            'Xây dựng các đặc vụ AI hiểu rõ nghiệp vụ, hỗ trợ soạn thảo, phân tích dữ liệu và tương tác khách hàng.',
          details: [
            'Thiết kế agent + guardrails theo nghiệp vụ',
            'Knowledge / RAG (khi cần)',
            'Monitoring + feedback loop',
          ],
        },
        {
          title: 'Applied Intelligence Ops',
          description:
            'Xây dựng web/mobile tích hợp AI (RAG, On-device AI). Tối ưu hiệu suất và trải nghiệm.',
        },
        {
          title: 'Chuyển giao Năng lực & Đào tạo',
          description: 'Workshop thực chiến, Playbook vận hành và Handover để đội ngũ tự chủ.',
        },
      ],
    },
    products: {
      title: 'Sản phẩm',
      subtitle:
        'Các công cụ và nền tảng nguồn mở được xây dựng bởi Elastic Labs để thúc đẩy ứng dụng AI.',
      items: [
        {
          slug: 'polkadot-agent-kit',
          title: 'Polkadot Agent Kit',
          description:
            'Bộ công cụ mạnh mẽ để xây dựng các AI agent có thể tương tác mượt mà với hệ sinh thái Polkadot. Nó cho phép các nhà phát triển tạo ra các tác vụ thông minh có khả năng thực hiện các hoạt động on-chain, giám sát các sự kiện mạng và cung cấp các giao diện thân thiện với người dùng cho các tương tác blockchain phức tạp.',
          link: 'https://github.com/elasticlabs-org/polkadot-agent-kit',
          banner: '/logo/products/polkadot-agent-kit-banner.png',
          howWeBuild: {
            title: 'Cách chúng tôi xây dựng Polkadot Agent Kit',
            description:
              'Polkadot Agent Kit được thiết kế tập trung vào tính module, bảo mật và trải nghiệm nhà phát triển. Chúng tôi tận dụng những công nghệ AI và blockchain mới nhất để tạo ra cầu nối liền mạch giữa các agent thông minh và mạng lưới phi tập trung, đảm bảo độ tin cậy cao và dễ dàng tích hợp.',
            points: [
              {
                title: 'Kiến trúc Agentic',
                description:
                  'Sử dụng LangChain và các bộ công cụ tùy chỉnh để cho phép LLM tương tác trực tiếp với các chuỗi dựa trên Substrate, cho phép đưa ra quyết định và thực thi tự trị.',
              },
              {
                title: 'Bảo mật là trên hết',
                description:
                  'Triển khai các rào cản bảo vệ (guardrails) mạnh mẽ, quản lý khóa an toàn và các giao thức ký giao dịch để đảm bảo các hoạt động on-chain an toàn và đáng tin cậy.',
              },
              {
                title: 'Hướng tới nhà phát triển',
                description:
                  'Cung cấp API TypeScript sạch sẽ, tài liệu hướng dẫn toàn diện và các mẫu khởi đầu để nhà phát triển bắt đầu chỉ trong vài phút.',
              },
              {
                title: 'Giám sát thời gian thực',
                description:
                  'Tích hợp các bộ lắng nghe sự kiện và kết nối indexer để cung cấp cho các agent trạng thái và dữ liệu blockchain cập nhật từng giây.',
              },
              {
                title: 'Hỗ trợ đa chuỗi',
                description:
                  'Được thiết kế để hỗ trợ Polkadot, Kusama và nhiều parachain khác, tạo điều kiện thuận lợi cho các tương tác agent đa chuỗi liền mạch.',
              },
              {
                title: 'Thiết kế có thể mở rộng',
                description:
                  'Kiến trúc dựa trên plugin cho phép các nhà phát triển dễ dàng thêm các công cụ và khả năng mới cho các AI agent của họ.',
              },
            ],
          },
        },
        {
          slug: 'speedgrowth-ai',
          title: 'Speedgrowth.ai',
          description:
            'Nền tảng tăng trưởng dựa trên AI được thiết kế để tự động hóa quy trình marketing và mở rộng quy mô startup hiệu quả. Bằng cách tập trung dữ liệu khách hàng và tận dụng các AI agent tiên tiến, Speedgrowth.ai chuyển đổi các nút thắt vận hành thành các động cơ tăng trưởng tự động.',
          link: 'https://speedgrowth.ai',
          banner: '/logo/products/speedgrowth-banner.png',
          howWeBuild: {
            title: 'Cách chúng tôi xây dựng Speedgrowth.ai',
            description:
              'Speedgrowth.ai được xây dựng để mở rộng quy mô. Chúng tôi kết hợp các framework web hiệu suất cao với các LLM hàng đầu để tự động hóa các quy trình marketing và bán hàng phức tạp, tập trung vào tỷ lệ chuyển đổi cao và hiệu quả vận hành.',
            points: [
              {
                title: 'Next.js & Edge Runtime',
                description:
                  'Xây dựng trên Next.js để đạt hiệu suất cực nhanh, tối ưu hóa SEO và khả năng mở rộng toàn cầu bằng edge computing.',
              },
              {
                title: 'Tích hợp đa mô hình',
                description:
                  'Điều phối nhiều LLM (GPT-4, Claude 3, Gemini) để xử lý các nhiệm vụ chuyên biệt như tạo nội dung, chấm điểm lead và phân tích sắc thái.',
              },
              {
                title: 'Tự động hóa quy trình',
                description:
                  'Logic backend tinh vi kết nối các công cụ marketing, CRM và các AI agent một cách liền mạch để tự động hóa toàn bộ hành trình khách hàng.',
              },
              {
                title: 'Thông tin chi tiết dựa trên dữ liệu',
                description:
                  'Bảng điều khiển phân tích nâng cao cung cấp phản hồi thời gian thực về hiệu suất chiến dịch và hiệu quả của agent.',
              },
              {
                title: 'Vai trò Agent có thể tùy chỉnh',
                description:
                  'Xác định các vai trò cụ thể cho AI agent, từ người quản lý mạng xã hội đến đại diện bán hàng, phù hợp với tiếng nói thương hiệu của bạn.',
              },
              {
                title: 'Xử lý dữ liệu an toàn',
                description:
                  'Các biện pháp bảo mật cấp doanh nghiệp để đảm bảo rằng dữ liệu khách hàng được bảo vệ và sử dụng một cách đạo đức trong các quy trình AI.',
              },
            ],
          },
        },
      ],
    },
    team: {
      title: 'Đội ngũ nòng cốt',
      subtitle: 'Những kiến trúc sư tự động hóa tại Elastic Labs.',
      readMore: 'Đọc thêm',
      readLess: 'Thu gọn',
      members: [
        {
          name: 'Cris Nguyen',
          role: 'CEO & Founder',
          bio: 'Cris là một nhà lãnh đạo công nghệ tập trung vào việc nâng tầm trải nghiệm con người thông qua AI và blockchain. Hiện tại, ông là Nhà sáng lập của Elastic Labs, một đại lý tích hợp AI-native, và SpeedGrowth, một trung tâm điều khiển AI giúp tự động hóa quy trình hỗ trợ khách hàng thành kênh doanh thu cho các thương hiệu thương mại điện tử.\n\nNgoài việc xây dựng sản phẩm, Cris còn là một nhà đầu tư thiên thần tích cực tại Guidance Ventures, nơi ông hỗ trợ các dự án như RiseChain, Infinit, Xyber và GRVT.\n\nChuyên môn của ông nằm ở điểm giao thoa giữa vận hành quy mô lớn đa bộ phận và quan hệ đối tác công nghệ mới nổi. Trong ba năm qua, Cris đã dẫn dắt tăng trưởng full-stack cho Polkadot khu vực Đông Nam Á và đội ngũ APAC. Ông đóng vai trò là bộ lọc chính cho chương trình tài trợ của hệ sinh thái, cố vấn cho các đội ngũ phát triển và quản lý một nhóm gồm bảy thành viên để thu hẹp khoảng cách giữa quan hệ nhà phát triển kỹ thuật và mở rộng khu vực.',
          avatar: '/founders/cris-nguyen-avatar.png',
          linkedin: 'https://www.linkedin.com/in/truongnguyen99/',
          github: 'https://github.com/ngquangtruong',
        },
        {
          name: 'Tin Chung',
          role: 'CTO & Co-Founder',
          bio: 'Tin là một kiến trúc sư hệ thống chuyên về mạng lưới phân tán và hạ tầng dữ liệu hiệu suất cao. Ông có bề dày thành tích trong việc xây dựng các hệ thống lõi từ sơ khai, từ các khung nạp dữ liệu blockchain thời gian thực bằng Rust đến các trình biên dịch DSL tùy chỉnh cho các hoạt động OLAP phức tạp. Trước đây là kỹ sư sáng lập tại Rover và R0GUE, Tin đã tối ưu hóa các mô hình runtime Layer 1 và quản lý các cuộc di chuyển trạng thái quy mô lớn lên tới 60TB+, giúp giảm đáng kể chi phí vận hành hạ tầng. Là tốt nghiệp viên của Polkadot Blockchain Academy và nhà vô địch hackathon từ Safe và Chainlink, chuyên môn của ông trải dài trên Polkadot SDK, Solana và Ethereum. Ông là người đóng góp tích cực cho phần mềm nguồn mở và đóng vai trò là cố vấn kỹ thuật cho cộng đồng nhà phát triển toàn cầu.',
          avatar: '/founders/tin-chung-avatar.png',
          linkedin: 'https://www.linkedin.com/in/chungquantin/',
          github: 'https://github.com/chungquantin',
        },
      ],
    },
    whyUs: {
      title: 'Tại sao nên đồng hành cùng Elastic Labs?',
      description:
        'Thay vì báo cáo lý thuyết, chúng tôi bàn giao giải pháp thực thi. Mục tiêu là giúp bạn thấy tác động trong vài tuần.',
      points: [
        {
          title: 'Thực thi nhanh chóng',
          description:
            'Chúng tôi tập trung vào việc triển khai nhanh, giúp doanh nghiệp thấy hiệu quả trong vài tuần thay vì vài tháng.',
        },
        {
          title: 'Giải pháp thực thi',
          description:
            'Không chỉ là những bản báo cáo, chúng tôi bàn giao hệ thống hoàn chỉnh tích hợp sâu vào quy trình sẵn có.',
        },
      ],
    },
    cases: {
      title: 'Dự án tiêu biểu',
      items: [
        {
          category: 'Bảo hiểm',
          title: 'Tự động hóa CRM + Customer Support đa kênh',
          description: 'Tự động hóa tương tác và quản lý dữ liệu khách hàng trên mọi điểm chạm.',
        },
        {
          category: 'B2B SaaS',
          title: 'Agent cho Sales Ops',
          description: 'Quy trình khép kín: lead → báo giá → follow-up.',
        },
        {
          category: 'Marketing agency',
          title: 'Tự động hóa content workflow + reporting',
          description: 'Tự động hóa quy trình sản xuất nội dung và báo cáo cho đa khách hàng.',
        },
      ],
    },
    techStack: {
      title: 'Năng lực Kỹ thuật',
      categories: [
        {
          title: 'GenAI / LLM',
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
          title: 'Blockchain',
          techs: [
            { name: 'Polkadot Substrate', logo: '' },
            { name: 'Ethereum', logo: '' },
            { name: 'Rust', logo: '/logo/technologies/rust-logo.png' },
          ],
        },
        {
          title: 'Software Development',
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
          title: 'Agentic Engineering',
          description:
            'Thiết kế hệ thống đa đặc vụ (Multi-agent) phối hợp nhịp nhàng để tự động hóa các logic kinh doanh phức tạp xuyên suốt các phòng ban.',
        },
        {
          title: 'Hạ tầng Nội bộ',
          description:
            'Thiết lập cụm phần cứng tại chỗ (On-premise) and triển khai vận hành/đào tạo mô hình AI nội bộ để doanh nghiệp làm chủ hoàn toàn dữ liệu và bảo mật tuyệt đối.',
        },
        {
          title: 'Tự động hóa Tùy chỉnh',
          description:
            'Phát triển các trợ lý điều hành ảo và nền tảng quản trị toàn diện, giúp loại bỏ các rào cản vận hành để đội ngũ của bạn tập trung vào mục tiêu chiến lược.',
        },
      ],
    },
    process: {
      title: 'Quy trình Hợp tác Tin cậy',
      subtitle:
        'Chúng tôi làm việc như một phần trong đội ngũ của bạn, đảm bảo sự thấu hiểu và hỗ trợ kịp thời nhất.',
    },
    blog: {
      title: 'Blog của chúng tôi',
      description: 'Những chia sẻ và góc nhìn từ đội ngũ Elastic Labs.',
      readMore: 'Đọc thêm',
    },
    cta: {
      title: 'Thử thách tiếp theo là của bạn',
      description:
        'Hãy cho chúng tôi biết bạn muốn tự động hóa gì. Chúng tôi sẽ đề xuất lộ trình và bước triển khai nhanh nhất.',
      primary: 'Đặt lịch trao đổi',
      secondary: 'Gửi yêu cầu dự án',
    },
    footer: {
      copyright: '© 2026 Elastic Labs. All rights reserved.',
    },
  },
}

export type Dictionary = typeof dictionaries.en
