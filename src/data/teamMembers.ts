export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  skills: string[];
  contact: string;
  linkedin: string;
  github: string;
  twitter: string;
  projects: {
    name: string;
    description: string;
  }[];
}

export const teamMembers: TeamMember[] = [
  { 
    id: "ruslan-akhtariev",
    name: "Ruslan Akhtariev", 
    role: "Co-President",
    imageUrl: "/team/ruslan.jpeg",
    bio: "Ruslan is a sophomore studying Computer Science with a focus on blockchain technology, cryptography, and finance. His interests include DeFi, Zero-Knowledge cryptography, and permissionless systems.",
    skills: ["Blockchains", "Venture Capital", "Smart Contracts", "Solidity", "Rust", "Go", "Distributed Systems"],
    contact: "akhtariev@ucsb.edu",
    linkedin: "https://www.linkedin.com/in/pysel/",
    github: "https://github.com/pysel",
    twitter: "https://twitter.com/pysellll",
    projects: [
      { name: "Uniliquids", description: "Eigen Games 2025 Hackathon project that builds synthetic LP assets on Uniswap V4" },
      { name: "Notional Labs", description: "Software engineering in the Cosmos Ecosystem. Work includes Tendermint, Osmosis Labs, Cosmos SDK, and more." }
    ]
  },
  { 
    id: "ysabel-chen",
    name: "Ysabel Chen", 
    role: "Co-President",
    imageUrl: "/team/other.png",
    bio: "Ysabel is a senior studying Computer Science with a focus on distributed systems. She has been interested in blockchain technology since 2018 and has worked on several DeFi projects.",
    skills: ["Blockchains", "Venture Capital", "Smart Contracts", "Solidity", "Rust", "Go", "Distributed Systems"],
    contact: "ysabel@ucsb.edu",
    linkedin: "https://linkedin.com/in/example",
    github: "https://github.com/example",
    twitter: "",
    projects: [
      { name: "DeFi Analytics Dashboard", description: "Tool for analyzing decentralized finance protocols" },
      { name: "Smart Contract Auditing Workshop", description: "Training on security best practices" }
    ]
  },
  { 
    id: "diana-malashenkova",
    name: "Diana Malashenkova", 
    role: "Marketing Lead",
    imageUrl: "/team/other.png",
    bio: "Diana is a senior studying Computer Science with a focus on distributed systems. She has been interested in blockchain technology since 2018 and has worked on several DeFi projects.",
    skills: ["Blockchains", "Venture Capital", "Smart Contracts", "Solidity", "Rust", "Go", "Distributed Systems"],
    contact: "diana@ucsb.edu",
    linkedin: "https://linkedin.com/in/example",
    github: "https://github.com/example",
    twitter: "",
    projects: [
      { name: "Club Treasury System", description: "Blockchain-based treasury management system" },
      { name: "Cryptography Fundamentals Workshop", description: "Introduction to cryptographic principles" }
    ]
  },
  {
    id: "saloni",
    name: "Saloni Singhal",
    role: "Treasurer",
    imageUrl: "/team/saloni.jpeg", 
    bio: "Saloni is a UCSB student double majoring in Economics & Accounting and Statistics & Data Science, currently serving as Treasurer for Blockchain@UCSB. She is passionate about blockchain systems, financial stewardship, and data-driven insights. Her recent work includes financial research on Solana-based memecoins and building predictive financial models using machine learning.",
    skills: [
      "Blockchain",
      "Cryptocurrency",
      "Treasury Management",
      "Budgeting",
      "Fundraising",
      "Financial Reporting",
      "Solana",
      "Python",
      "SQL",
      "Data Analysis",
      "Public Speaking"
    ],
    contact: "ssalonisinghal@gmail.com",
    linkedin: "https://linkedin.com/in/ssaloni-singhal",
    github: "",
    twitter: "",
    projects: [
      {
        name: "Solana Memecoin Research",
        description: "Conducted market analysis and on-chain data research on Solana-based memecoins, exploring trends, liquidity behaviors, and the role of tokenomics in community-driven asset volatility."
      },
      {
        name: "Stock Price Predictor",
        description: "Built a Python-based machine learning model using linear regression to forecast stock prices. Used Jupyter Notebook for development, visualization, and performance analysis."
      }
    ]
  }
]; 