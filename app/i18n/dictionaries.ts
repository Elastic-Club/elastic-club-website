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
      title: 'Elastic Labs — Strategic AI Integration Partner',
      subtitle:
        'Helping businesses achieve breakthrough growth without bloating personnel by optimizing technology leverage, automating processes, and deploying modern AI.',
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
          title: 'Polkadot Agent Kit',
          description:
            'A powerful toolkit for building AI agents that can interact seamlessly with the Polkadot ecosystem.',
          link: 'https://github.com/elasticlabs-org/polkadot-agent-kit',
          banner: '/logo/products/polkadot-agent-kit-banner.png',
        },
        {
          title: 'Speedgrowth.ai',
          description:
            'An AI-powered growth platform designed to automate marketing workflows and scale startups effectively.',
          link: 'https://speedgrowth.ai',
          banner: '/logo/products/speedgrowth-banner.png',
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
      title: 'Elastic Labs — Đối tác Tích hợp AI Chiến lược',
      subtitle:
        'Giúp doanh nghiệp tăng trưởng bứt phá mà không cần phình to nhân sự bằng cách tối ưu đòn bẩy công nghệ, tự động hóa quy trình và triển khai AI hiện đại.',
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
          title: 'Polkadot Agent Kit',
          description:
            'Bộ công cụ mạnh mẽ để xây dựng các AI agent có thể tương tác mượt mà với hệ sinh thái Polkadot.',
          link: 'https://github.com/elasticlabs-org/polkadot-agent-kit',
          banner: '/logo/products/polkadot-agent-kit-banner.png',
        },
        {
          title: 'Speedgrowth.ai',
          description:
            'Nền tảng tăng trưởng dựa trên AI được thiết kế để tự động hóa quy trình marketing và mở rộng quy mô startup hiệu quả.',
          link: 'https://speedgrowth.ai',
          banner: '/logo/products/speedgrowth-banner.png',
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
