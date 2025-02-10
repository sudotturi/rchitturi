import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rahul Chitturi",
  initials: "DV",
  url: "https://Rahul.io",
  location: "Bangaluru, India",
  description:
    "Innovative Full Stack Developer skilled in Java, Python, Node.js, Cloud Computing, and Kubernetes. Passionate about designing scalable, high-performance applications that drive business success.",
  summary:
    "I’m **Rahul Chitturi**, a results-driven **Full Stack Developer** with a passion for building robust, scalable, and high-performance applications. With expertise in **Java, Python, Node.js, UI & Backend Development, Cloud Computing, and Kubernetes**, I specialize in creating efficient digital solutions that drive impact.\n\nMy experience spans across **frontend and backend technologies**, allowing me to craft seamless user experiences and optimize system architecture. Whether it’s developing **cloud-native applications**, optimizing APIs, or handling **large-scale deployments**, I take a problem-solving approach to technology.\n\nBeyond coding, I have a **strong self-learning mindset** and a keen interest in emerging tech trends. I thrive in dynamic environments and love collaborating to transform ideas into reality.",
  avatarUrl: "/me.png",
  skills: [
    "Java",
    "Javascript",
    "Typescript",
    "Node.js",
    "Python",
    "Spring Boot",
    "React",
    "Next.js",
    "Vaadin",
    "Postgres",
    "MySQL",
    "MongoDB",
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Git",
    "Jenkins"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://blog.sudofolks.com/", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sudotturi",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rchitturi",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/chitturi_rahul_",
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/rahul_chitturi/",
        icon: Icons.insta,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Nutanix	Technologies",
      href: "https://www.nutanix.com/",
      badges: [],
      location: "Bangaluru, India",
      title: "Member of Technical Staff - 3",
      logoUrl: "/nutanix.svg",
      start: "Jun 2022",
      end: "Preset",
      description:
        "Developed microservices using Java, Spring Boot, Drools, Node.js, MySQL, and PostgreSQL for the Nutanix Sizer and CPQ teams. Designed and developed an In-App Notification System, enabling real-time notifications and improving user engagement. Architected and implemented gRPC-based services for common data handling, streamlining communication and enhancing data processing efficiency. Built scalable microservices with Java, Spring Boot, and gRPC, ensuring high performance and reliability. Contributed to critical feature development and delivery, significantly enhancing the user experience.",
    },
    {
      company: "ThoughtSphere	Inc",
      badges: [],
      href: "https://thoughtsphere.com",
      location: "Bangaluru, India",
      title: "Software Engineer",
      logoUrl: "/thoughtsphere.svg",
      start: "Jan 2021",
      end: "Jun 2021",
      description:
        "Led the design and development of new features for clinical study mapping products, streamlining the integration of modules into existing systems. Collaborated with cross-functional teams to define and refine use cases, ensuring clear alignment with product goals. Assisted in the analysis and development of modifications to existing software programs, improving overall functionality and user experience. Spearheaded the development of Docker images for the final product, ensuring smooth deployment on Ubuntu servers and maintaining consistent environments. Onboarded clinical studies to the product, mapping incoming data to ensure accurate and efficient data processing. Maintained and monitored the Risk-Based Monitoring System (RBM), ensuring optimal server performance and scheduling jobs for seamless operations.",
    },
    {
      company: "ThoughtSphere	Inc",
      badges: [],
      href: "https://thoughtsphere.com",
      location: "Bangaluru, India",
      title: "Trainee Software Engineer",
      logoUrl: "/thoughtsphere.svg",
      start: "Feb 2020",
      end: "Jan 2021",
      description:
        "Contributed to the development and enhancement of healthcare application solutions, adhering to software development best practices. Delivered high-quality work on time, meeting project milestones and deadlines with minimal supervision. Created clear design documents, wireframes, and other forms of documentation to represent the solutions being developed. Collaborated with team members on design and code reviews, ensuring best practices were followed throughout the development process. Provided accurate work estimates and contributed to testing strategies, writing unit tests to ensure thorough product testing.",
    },
  ],
  education: [
    {
      school: "Proudhadevaraya	Institute	of	Technology",
      href: "https://pdit.ac.in",
      degree: "Bachelor	of	Engineering",
      logoUrl: "/pdit.png",
      start: "2015",
      end: "2019",
    }
  ],
  projects: [
    {
      title: "Todo App",
      href: "https://todo.sudofolks.com",
      active: true,
      description:
        "Sudo Folks To-Do is a simple task management app designed for organizing and tracking daily tasks efficiently.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Netlify",
        "SEO",
      ],
      links: [
        {
          type: "Website",
          href: "https://todo.sudofolks.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Blogs",
      href: "https://blog.sudofolks.com/",
      active: true,
      description:
        "Sudo Folks Blog covers topics like programming, design, tech, and personal growth, featuring insights on Java, CSS, MongoDB, and more from various contributors.",
      technologies: [
        "Next.js",
        "Typescript",
        "Sanity",
        "TailwindCSS",
        "SEO",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://blog.sudofolks.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Sudofolks - Fashion shopping site",
      href: "https://www.sudofolks.com/",
      description:
        "Sudo Folks is an online retailer offering unique, creative, and high-quality clothing for men and women. Their product range includes various styles of T-shirts, sweatshirts, hoodies, and combo sets. Customers can explore the latest collections and shop conveniently through their website.",
      technologies: [
        "Remix.js",
        "Typescript",
        "Prisma",
        "TailwindCSS",
        "MongoDB Atlas",
        "Netlify"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.sudofolks.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "AI Chatbot",
      href: "https://chat.sudofolks.com",
      active: true,
      description:
        "Built an AI-driven chatbot using Next.js, Vercel AI SDK, and OpenAI's GPT-4, offering real-time conversational experiences",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Open AI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
