import { Poppins, Montserrat, Platypi } from "next/font/google";
import project1 from "../public/projects/project-1.jpeg";

export const PoppinsFont = Poppins({
  weight: "400",
  subsets: ["latin"]
})

export const MontserratFont = Montserrat({
  weight: "300",
  subsets: ["latin"]
})

export const HERO_CONTENT = `I am a passionate engineer with a knack for crafting robust and scalable data solutions. With more than 4 years of hands-on experience, I have honed my skills in modern data stack technologies like dbt, Airflow, Airbyte, as well as backend technologies like PostgreSQL and BigQuery, and frontend technologies like React, Next.js, and TypeScript. My goal is to leverage my expertise to create innovative data solutions that drive business growth and deliver deep insights.`;

export const ABOUT_TEXT = `In a world driven by data, I strive to write the code that turns numbers into narratives. I specialize in problem-solving, leveraging automation and AI to enhance data accuracy and efficiency. My expertise lies in crafting efficient data pipelines to extract data, model it, transform it and ensure it is always right where it needs to be. I transform complex data challenges into straightforward, effective solutions. Having had the opportunity to be a speaker in the data community, I value the power of sharing knowledge and insights to drive growth and innovation.`;

export const EXPERIENCES = [
  {
    year: "2025",
    role: "Full Stack Engineer",
    company: "Ecomflow",
    company_website: "https://www.ecomflow.com",
    description: [
      "Engineered key components of an e-commerce operations platform for a global 3PL company with real-time inventory tracking enabling over 150+ DTC brands to streamline inventory management and ship products to 65+ countries.",
      "Architected admin systems for fulfillment operations across 65+ countries with multi-carrier tracking integration.",
      "Implemented financial systems with accounting integration for automated invoicing and supply chain reporting.",
      "Developed secure role-based access systems with data tools for warehouse and inventory management.",
    ],
    technologies: ["Next.js", "TypeScript", "PlanetScale", "Inngest", "Vercel", "Shopify"],
  },
  {
    year: "2024 - 2025",
    role: "Data Engineer",
    company: "Argon AI",
    company_website: "https://www.argon-ai.com",
    description: [
      "Developed ETL pipelines to integrate clinical trial, approved drugs and biopharma daily news data.",
      "Enabled AI systems to respond efficiently to user queries regarding biopharmaceuticals topics.",
      "Ensured seamless flow of information for data analysis and interpretation.",
      "Built a Next.js web application to deliver AI-powered insights, enabling efficient user queries on biopharmaceutical topics."
    ],
    technologies: ["Python", "ETL", "PostgreSQL", "Prefect", "AWS", "Next.js", "TypeScript"],
  },
  {
    year: "2024 - 2025",
    role: "Data Engineer",
    company: "Harmonic AI",
    company_website: "https://www.harmonic.fun",
    description: [
      "Led the development of AI systems to build an advanced mathematical reasoning engine.",
      "Developed ETL pipelines to extract mathematical problems from various sources and textbooks."
    ],
    technologies: ["AI", "ETL", "SQLite", "AWS"],
  },
  {
    year: "2023 - 2025",
    role: "Data Engineer",
    company: "Astrafy",
    company_website: "https://astrafy.io",
    description: [
      "Led successful Data Vault 2.0 implementation, optimizing supply chain data handling for Jaeger-LeCoultre, a renowned luxury watch manufacturer.",
      "Led the seamless implementation of a Data Warehouse for supply chain data at Watchfinder, a leading platform for pre-owned luxury watches, ensuring data availability and reliability for analytical purposes.",
      "Speaker in the data community (dbt meetup), sharing knowledge and insights to foster growth and innovation",
    ],
    technologies: ["dbt", "Gitlab CI", "Airflow", "Terraform", "GCP"],
  },
  {
    year: "2023 - 2024",
    role: "Backend Engineer",
    company: "Zuro AI",
    company_website: "https://getzuro.com",
    description: [
      "Played a vital role in the advancement of an advanced AI chatbot, which demonstrated dynamic learning capabilities from a wide array of user-inputted sources such as websites, videos, and various document formats (pdf, csv, docx, xml, txt, and more).",
      "Developed APIs and complex systems built on top of LLM models to respond to customers queries",
      "Implemented the efficient transition between AI and real live agents to help users get consistent support from various sources.",
      "Led the enhancement of user workflows, resulting in a remarkable 40% reduction in time spent by users conducting research and data queries, thereby substantially enhancing productivity.",
    ],
    technologies: ["Python", "Rest API", "OpenSearch", "AWS"],
  },
  {
    year: "2021 - 2021",
    role: "Software Engineer",
    company: "Tongullman",
    company_website: "https://tongullman.co.jp",
    description: [
      "Successfully engineered an ETL pipeline for seamless data migration, facilitating the transition from an older company website to a new version. Employed advanced data extraction techniques with Python (BeautifulSoup, Selenium).",
      "Demonstrated automation prowess by creating a Smart Calendar for a private school, leveraging Google Calendar events with IFTTT and Google Apps Script integration.",
      "Led development of a game using Unity/C#, culminating in the remake of Lunar Lander. Additionally, contributed to the creation of several mobile apps using Flutter, Dart, Firebase, and MongoDB. Proficiently managed databases with Google Firebase for robust data handling.",
    ],
    technologies: ["ETL", "Python", "C#", "MongoDB", "Unity", "Flutter", "Dart", "Firebase"],
  },
];

export const PROJECTS = [
  {
    year: "2022-2023",
    title: "Real-time Trucking Notification System",
    image: project1,
    description: [
      "Led the development and implementation of a robust data aggregation system, effectively consolidating data from multiple truck load websites. This system promptly delivered real-time job notifications to users through a dynamic messaging platform.",
      "Played a pivotal role in increasing truckers' monthly job acquisition rates, resulting in a notable 30% rise in their monthly assignments through quicker and more effective job matching.",
    ],
    technologies: ["Python", "Repl.it", "Rest API", "Real-time"],
  },
];

export const CONTACT = {
  email: "nawfel.bacha@proton.me",
};

export const CERTIFICATIONS = [
  {
    name: "dbt Analytics Engineer",
    image: "/certifications/certification-1.png",
    url: "https://credentials.getdbt.com/daf54adc-9e28-4f33-ba3e-3f476718252a"
  },
  {
    name: "Data Vault 2.0 Practitioner",
    image: "/certifications/certification-2.png",
    url: "https://www.credential.net/6afacc19-3da2-4d02-a7af-a6a9e9284a35"
  },
  {
    name: "Professional Cloud Security Engineer",
    image: "/certifications/certification-3.png",
    url: "https://www.credly.com/badges/77fe2ab5-d1d7-4418-ad34-75cd79999161"
  },
  {
    name: "Professional Data Engineer",
    image: "/certifications/certification-4.png",
    url: "https://www.credly.com/badges/e6b27c57-1b61-4ae4-aa16-f69eef7c57ad"
  },
  {
    name: "Professional Machine Learning Engineer",
    image: "/certifications/certification-5.png",
    url: "https://www.credly.com/badges/798fafc1-8c57-4ba6-a1cb-46a1040c0a15"
  },
]