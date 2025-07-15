import type { Course } from "@/types/course";

export const courses: Course[] = [
  {
    id: "1",
    name: "Frontend Development",
    description:
      "Learn the basics of web development including HTML, CSS, and JavaScript.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80", // HD web dev image
    chapters: [
      {
        id: "1",
        name: "HTML",
        description: "Structure web pages using HTML.",
        videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg", // HTML Crash Course
        levels: [
          {
            id: "1",
            name: "Introduction to HTML",
            description: "Learn what HTML is and how it works.",
          },
          {
            id: "2",
            name: "HTML Tags",
            description: "Explore common HTML tags and their uses.",
          },
          {
            id: "3",
            name: "HTML Forms",
            description: "Create interactive forms with HTML.",
          },
        ],
      },
      {
        id: "2",
        name: "CSS",
        description: "Style web pages using CSS.",
        videoUrl: "https://www.youtube.com/watch?v=yfoY53QXEnI", // CSS Crash Course
        levels: [
          {
            id: "1",
            name: "Introduction to CSS",
            description: "Learn what CSS is and how to use it.",
          },
          {
            id: "2",
            name: "CSS Selectors",
            description: "Understand how to select elements to style.",
          },
          {
            id: "3",
            name: "CSS Layout",
            description: "Learn about layout techniques like Flexbox and Grid.",
          },
        ],
      },
      {
        id: "3",
        name: "JavaScript",
        description: "Add interactivity to web pages with JavaScript.",
        videoUrl: "https://www.youtube.com/watch?v=PkZNo7MFNFg", // JavaScript Tutorial
        levels: [
          {
            id: "1",
            name: "Introduction to JavaScript",
            description: "Learn the basics of JavaScript programming.",
          },
          {
            id: "2",
            name: "DOM Manipulation",
            description: "Interact with the web page using JavaScript.",
          },
          {
            id: "3",
            name: "Events",
            description: "Handle user interactions with events.",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Operating System",
    description: "Understand the core concepts of operating systems.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", // HD OS image
    chapters: [
      {
        id: "1",
        name: "Process Scheduling",
        description: "Learn how operating systems schedule processes.",
        videoUrl: "https://www.youtube.com/watch?v=Q1Zb8n0ozlE", // Process Scheduling
        levels: [
          {
            id: "1",
            name: "Introduction to Scheduling",
            description: "Overview of process scheduling.",
          },
          {
            id: "2",
            name: "Scheduling Algorithms",
            description: "Explore different scheduling algorithms.",
          },
        ],
      },
      {
        id: "2",
        name: "Process Synchronization",
        description: "Understand synchronization between processes.",
        videoUrl: "https://www.youtube.com/watch?v=0AqfNAwXq5I", // Process Synchronization
        levels: [
          {
            id: "1",
            name: "Introduction to Synchronization",
            description: "Why synchronization is needed.",
          },
          {
            id: "2",
            name: "Synchronization Techniques",
            description: "Mutexes, semaphores, and monitors.",
          },
        ],
      },
      {
        id: "3",
        name: "Deadlock",
        description: "Learn about deadlocks in operating systems.",
        videoUrl: "https://www.youtube.com/watch?v=0AqfNAwXq5I", // Deadlock
        levels: [
          {
            id: "1",
            name: "Introduction to Deadlock",
            description: "What is a deadlock?",
          },
          {
            id: "2",
            name: "Deadlock Prevention",
            description: "How to prevent and avoid deadlocks.",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Data Structures",
    description:
      "Explore fundamental data structures used in computer science.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80", // HD data structures image
    chapters: [
      {
        id: "1",
        name: "Arrays",
        description: "Learn about arrays and their operations.",
        videoUrl: "https://www.youtube.com/watch?v=RBSGKlAvoiM", // Arrays
        levels: [
          {
            id: "1",
            name: "Introduction to Arrays",
            description: "What are arrays and how are they used?",
          },
          {
            id: "2",
            name: "Array Operations",
            description: "Common operations on arrays.",
          },
        ],
      },
      {
        id: "2",
        name: "Linked Lists",
        description: "Understand linked lists and their types.",
        videoUrl: "https://www.youtube.com/watch?v=njTh_OwMljA", // Linked Lists
        levels: [
          {
            id: "1",
            name: "Singly Linked List",
            description: "Basics of singly linked lists.",
          },
          {
            id: "2",
            name: "Doubly Linked List",
            description: "Basics of doubly linked lists.",
          },
        ],
      },
      {
        id: "3",
        name: "Trees",
        description: "Introduction to tree data structures.",
        videoUrl: "https://www.youtube.com/watch?v=oSWTXtMglKE", // Trees
        levels: [
          {
            id: "1",
            name: "Binary Trees",
            description: "Learn about binary trees.",
          },
          {
            id: "2",
            name: "Tree Traversal",
            description: "Different ways to traverse trees.",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Database Systems",
    description: "Learn about databases, SQL, and data modeling.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80", // HD database image
    chapters: [
      {
        id: "1",
        name: "Relational Databases",
        description: "Understand the basics of relational databases.",
        videoUrl: "https://www.youtube.com/watch?v=HXV3zeQKqGY", // Relational DB
        levels: [
          {
            id: "1",
            name: "Introduction to RDBMS",
            description: "What is a relational database?",
          },
          {
            id: "2",
            name: "SQL Basics",
            description: "Learn basic SQL queries.",
          },
        ],
      },
      {
        id: "2",
        name: "NoSQL Databases",
        description: "Explore non-relational databases.",
        videoUrl: "https://www.youtube.com/watch?v=qI_g07C_Q5I", // NoSQL
        levels: [
          {
            id: "1",
            name: "Introduction to NoSQL",
            description: "What is NoSQL?",
          },
          {
            id: "2",
            name: "Types of NoSQL",
            description: "Document, key-value, column, and graph databases.",
          },
        ],
      },
      {
        id: "3",
        name: "Data Modeling",
        description: "Learn how to model data for databases.",
        videoUrl: "https://www.youtube.com/watch?v=QpdhBUYk7Kk", // Data Modeling
        levels: [
          {
            id: "1",
            name: "ER Diagrams",
            description: "Entity-Relationship diagrams.",
          },
          {
            id: "2",
            name: "Normalization",
            description: "Database normalization techniques.",
          },
        ],
      },
    ],
  },
  {
    id: "5",
    name: "Networks",
    description: "Understand computer networking concepts and protocols.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // HD network image
    chapters: [
      {
        id: "1",
        name: "Network Basics",
        description: "Introduction to networking.",
        videoUrl: "https://www.youtube.com/watch?v=3QhU9jd03a0", // Network Basics
        levels: [
          {
            id: "1",
            name: "What is a Network?",
            description: "Definition and types of networks.",
          },
          {
            id: "2",
            name: "Network Topologies",
            description: "Different network topologies.",
          },
        ],
      },
      {
        id: "2",
        name: "Protocols",
        description: "Learn about networking protocols.",
        videoUrl: "https://www.youtube.com/watch?v=IPvYjXCsTg8", // Protocols
        levels: [
          {
            id: "1",
            name: "TCP/IP",
            description: "Basics of TCP/IP protocol suite.",
          },
          {
            id: "2",
            name: "HTTP/HTTPS",
            description: "Web protocols and their importance.",
          },
        ],
      },
      {
        id: "3",
        name: "Network Security",
        description: "Introduction to network security concepts.",
        videoUrl: "https://www.youtube.com/watch?v=VVxY1DYoC6k", // Network Security
        levels: [
          {
            id: "1",
            name: "Firewalls",
            description: "What are firewalls and how do they work?",
          },
          {
            id: "2",
            name: "Encryption",
            description: "Basics of encryption in networking.",
          },
        ],
      },
    ],
  },
];
