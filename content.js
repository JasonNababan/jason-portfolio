// Edit this file to add projects. Relative assets work on GitHub Pages and locally.
window.PORTFOLIO = {
  email: 'jasonnababan.chen@gmail.com',
  video: {
    src: 'assets/lake-lab.mp4', poster: 'assets/lake-lab-poster.jpg',
    title: 'A lab, a lake, and a lot of figuring it out.',
    description: 'A behind-the-scenes clip from Cultivator’s university-lake setup. A glimpse of the people and the process behind the project.'
  },
  projects: [
    {
      id: 'cultivator', category: 'venture', wide: true, color: 'mint', visual: 'farm',
      number: '01', label: 'CO-FOUNDER · PRODUCT & PARTNERSHIPS · 2026',
      title: 'Cultivator', subtitle: 'A little signal. A big difference for farmers.',
      description: 'Turning electrical-current and vibration signatures into clearer equipment-health alerts for aquaculture aerators.',
      tags: ['Aquaculture', 'Embedded IoT', 'Product strategy'],
      intro: 'What if an aerator could tell a farmer it needed attention before a small problem became a much bigger one?',
      sections: [
        ['The problem', 'Aquaculture depends on reliable equipment. Cultivator explores how current and vibration monitoring can make abnormal aerator behavior easier to spot, with simple alerts farmers can act on.'],
        ['My part', 'As co-founder, I worked across product requirements, embedded-system coordination, farmer validation, pilot planning, and partnership outreach. I translated technical features into practical conversations about reliability, energy use, and deployment cost.'],
        ['From prototype to people', 'My July 2026 business CV records customer discovery with approximately 50 farmers across four countries and nine pilot opportunities, including three paid pilots. These are pilot-stage milestones, rather than claims of completed commercial rollout.'],
        ['The next questions', 'Field reliability, MQTT telemetry, fault-data collection, and future machine-learning classification are central development priorities. Cultivator was named National Champion at Hult Prize Taiwan.']
      ],
      image: 'assets/hult-champions.jpg', imageAlt: 'Cultivator on stage with the Hult Prize Taiwan national champion award',
      links: [['Explore Cultivator', 'https://cultivatortech.com'], ['Public project report', 'https://github.com/JasonNababan/Cultivator-Techathon-Report']]
    },
    {
      id: 'buck', category: 'engineering', color: 'lavender', visual: 'wave', number: '02',
      label: 'POWER ELECTRONICS · 2025–2026', title: 'Better together.', subtitle: 'Two-phase interleaved buck converter',
      description: 'From PLECS simulation to hardware validation: exploring ripple cancellation, protection, and power conversion.',
      tags: ['DSP / FPGA', 'PLECS', 'Hardware testing'],
      intro: 'A hands-on investigation into what happens when two switching phases share the work.',
      sections: [['Built & tested', 'Designed and experimentally validated a DSP/FPGA-controlled two-phase interleaved buck converter. Implemented 20 kHz PWM, LC filtering, and over-voltage and over-current protection.'], ['What I investigated', 'Used PLECS simulation and hardware tests to verify continuous-conduction operation, proportional voltage conversion, and ripple cancellation at duty cycles of 0.25, 0.50, and 0.75.'], ['The observation', 'Measured approximately 140 mA total current ripple near 50% duty cycle. Closed-loop control and active current sharing were identified as next development steps.'], ['Try the intuition', 'The signal playground below lets you explore an idealized version of the phase-cancellation idea. It illustrates the principle; it does not simulate the full converter.']],
      image: 'assets/research-poster.jpg', imageAlt: 'Original power electronics research poster',
      links: [['View the research poster', 'assets/research-poster.jpg'], ['Try the signal playground', '#play']]
    },
    {
      id: 'vehicle', category: 'engineering', color: 'peach', visual: 'vehicle', number: '03',
      label: 'EMBEDDED SYSTEMS · 2026', title: 'Small vehicle.<br>Many moving parts.', subtitle: 'Autonomous embedded systems vehicle',
      description: 'Vision, navigation, sensing, telemetry, and a touchscreen interface — learning to make a whole system work together.',
      tags: ['STM32', 'C / C++', 'Mbed OS', 'LVGL'],
      intro: 'An embedded project where getting each part to work was only the beginning.',
      sections: [['The system', 'Integrated STM32 boards, Pixy2 vision, LaserPING distance sensing, continuous-rotation servo feedback, MQTT, and an LVGL touchscreen.'], ['The behavior', 'Implemented line following, barcode-based navigation, obstacle detection, remote commands, telemetry, and real-time path visualization using C/C++ on Mbed OS.'], ['What I learned', 'Debugged networking, sensor communication, memory faults, control tuning, and multi-board integration under time-constrained demonstration requirements. System integration rewards patience and clear instrumentation.']],
      links: [['Explore my NTHU repository', 'https://github.com/JasonNababan/NTHU']]
    },
    {
      id: 'solar', category: 'engineering', color: 'butter', visual: 'solar', number: '04',
      label: 'ENERGY & IOT · 2024', title: 'Follow the sunshine.', subtitle: 'IoT solar-energy analytics',
      description: 'Connecting sensing, NB-IoT, MQTT, and visualization to make solar-energy performance easier to understand.',
      tags: ['NB-IoT', 'MQTT', 'Energy analytics'],
      intro: 'Energy data becomes more useful when people can see what it means.',
      sections: [['The idea', 'Developed an NB-IoT and MQTT-based platform for real-time solar-energy monitoring and analytics.'], ['The connection', 'Brought together sensing, communications, and data visualization to support energy-efficiency analysis and practical deployment.'], ['Recognition', 'First Prize in Smart Energy Saving and IoT Application, as recorded in my CV.']],
      links: [['Read my engineering CV', 'assets/cv.pdf']]
    },
    {
      id: 'ml', category: 'engineering', color: 'pink', visual: 'ml', number: '05',
      label: 'APPLIED MACHINE LEARNING', title: 'Patterns into possibilities.', subtitle: 'Learning from structured and sensor data',
      description: 'Comparing models, questioning the metrics, and making sense of what the data is actually saying.',
      tags: ['Python', 'PyTorch', 'scikit-learn'],
      intro: 'A collection of applied learning experiments, from familiar baselines to neural networks.',
      sections: [['The models', 'Built and evaluated regression, decision-tree, random-forest, SVM, and neural-network models for structured and sensor-derived datasets.'], ['The process', 'Performed preprocessing, model selection, hyperparameter comparisons, and evaluation using accuracy, F1 score, and validation results.'], ['The habit', 'Look beyond a single score. Comparing approaches and checking validation behavior helps connect model choices to the problem at hand.']],
      links: [['Explore my code', 'https://github.com/JasonNababan/NTHU']]
    },
    {
      id: 'obs', category: 'creative', color: 'sky', visual: 'obs', number: '06',
      label: 'CREATIVE TOOLS · OPEN SOURCE', title: 'Right cue. Right moment.', subtitle: 'Praise Cue · OBS dock',
      description: 'A media-playback and song-section cue tool for worship lyric videos in OBS Studio.',
      tags: ['OBS Studio', 'Media', 'Creative tooling'],
      intro: 'A tool at the intersection of a technical workflow and a live creative moment.',
      sections: [['The purpose', 'The public repository describes precise media playback and song-section cue markers for OBS Studio worship lyric videos.'], ['Why it belongs here', 'It connects two sides of my work: building useful software and caring about the way a story or a live moment reaches an audience. The repository contains the implementation and usage details.']],
      links: [['View the repository', 'https://github.com/JasonNababan/praise-cue-obs-dock']]
    },
    {
      id: 'badminton', category: 'creative', color: 'mint', visual: 'badminton', number: '07',
      label: 'EVERYDAY SOFTWARE · OPEN SOURCE', title: 'More time on the court.', subtitle: 'NTHU badminton booking assistant',
      description: 'A Windows Edge assistant for NTHU Alumni Hall badminton bookings, with adjustable scheduling and manual login.',
      tags: ['Automation', 'Windows', 'Practical tools'],
      intro: 'Sometimes a project begins with a very everyday inconvenience.',
      sections: [['The tool', 'A Windows Edge booking assistant for the NTHU Alumni Hall badminton system. The public repository describes adjustable scheduling and a manual-login workflow.'], ['The details', 'Setup, supported behavior, and current limitations live with the source code so they can evolve alongside the implementation.']],
      links: [['View the repository', 'https://github.com/JasonNababan/nthu-badminton-bot']]
    },
    {
      id: 'media', category: 'creative', wide: true, color: 'orange', visual: 'media', number: '08',
      label: 'COMMUNITY · MEDIA · STORYTELLING', title: 'People make the story.', subtitle: 'Media leadership & community work',
      description: 'Planning, documenting, and communicating the moments that bring a community together.',
      tags: ['OCHISA', 'Storytelling', 'Media leadership'],
      intro: 'The camera, the pitch, and the conversation are all ways of helping people see an idea.',
      sections: [['OCHISA', 'Served as Media Team Leader from August 2024 to August 2025. Led event planning and documentation for two major initiatives, using membership and social-media data to improve outreach and participation.'], ['Beyond the camera', 'At Cultivator, prepared pitches, partnership proposals, due-diligence materials, and commercialization roadmaps. Storytelling is part of how technical work finds its audience.'], ['The human side', 'As Head Coach at Spartans Taiwan from October 2023 to December 2024, worked on program delivery, parent communication, and student engagement.']],
      links: [['Find me on Instagram', 'https://www.instagram.com/jasonnabbb/'], ['Connect on LinkedIn', 'https://www.linkedin.com/in/jasonnababan']]
    }
  ]
};
