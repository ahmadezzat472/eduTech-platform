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
        quizLevels: [
          {
            id: "1",
            name: "Introduction to HTML",
            type: "beginner",
            description: "Learn what HTML is and how it works.",
          },
          {
            id: "2",
            name: "HTML Tags",
            type: "intermediate",
            description: "Explore common HTML tags and their uses.",
          },
          {
            id: "3",
            name: "HTML Forms",
            type: "advanced",
            description: "Create interactive forms with HTML.",
          },
        ],
        whatYouWillLearn: [
          "Understand the structure of HTML documents",
          "Use common HTML tags to build web pages",
          "Create forms and gather user input",
        ],
      },
      {
        id: "2",
        name: "CSS",
        description: "Style web pages using CSS.",
        videoUrl: "https://www.youtube.com/watch?v=yfoY53QXEnI", // CSS Crash Course
        quizLevels: [
          {
            id: "1",
            name: "Introduction to CSS",
            type: "beginner",
            description: "Learn what CSS is and how to use it.",
          },
          {
            id: "2",
            name: "CSS Selectors",
            type: "intermediate",
            description: "Understand how to select elements to style.",
          },
          {
            id: "3",
            name: "CSS Layout",
            type: "advanced",
            description: "Learn about layout techniques like Flexbox and Grid.",
          },
        ],
        whatYouWillLearn: [
          "Apply CSS to style web pages",
          "Use selectors to target elements",
          "Implement layouts with Flexbox and Grid",
        ],
      },
      {
        id: "3",
        name: "JavaScript",
        description: "Add interactivity to web pages with JavaScript.",
        videoUrl: "https://www.youtube.com/watch?v=PkZNo7MFNFg", // JavaScript Tutorial
        quizLevels: [
          {
            id: "1",
            name: "Introduction to JavaScript",
            type: "beginner",
            description: "Learn the basics of JavaScript programming.",
          },
          {
            id: "2",
            name: "DOM Manipulation",
            type: "intermediate",
            description: "Interact with the web page using JavaScript.",
          },
          {
            id: "3",
            name: "Events",
            type: "advanced",
            description: "Handle user interactions with events.",
          },
        ],
        whatYouWillLearn: [
          "Write basic JavaScript code",
          "Manipulate the DOM",
          "Handle user events for interactivity",
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
        quizLevels: [
          {
            id: "1",
            name: "Introduction to Scheduling",
            type: "beginner",
            description: "Overview of process scheduling.",
          },
          {
            id: "2",
            name: "Scheduling Algorithms",
            type: "intermediate",
            description: "Explore different scheduling algorithms.",
          },
          {
            id: "3",
            name: "Advanced Scheduling Techniques",
            type: "advanced",
            description: "Deep dive into advanced scheduling techniques.",
          },
        ],
        whatYouWillLearn: [
          "Explain process scheduling in operating systems",
          "Compare different scheduling algorithms",
        ],
      },
      {
        id: "2",
        name: "Process Synchronization",
        description: "Understand synchronization between processes.",
        videoUrl: "https://www.youtube.com/watch?v=0AqfNAwXq5I", // Process Synchronization
        quizLevels: [
          {
            id: "1",
            name: "Introduction to Synchronization",
            type: "beginner",
            description: "Why synchronization is needed.",
          },
          {
            id: "2",
            name: "Synchronization Techniques",
            type: "intermediate",
            description: "Mutexes, semaphores, and monitors.",
          },
          {
            id: "3",
            name: "Advanced Synchronization",
            type: "advanced",
            description: "Advanced synchronization problems and solutions.",
          },
        ],
        whatYouWillLearn: [
          "Understand the need for process synchronization",
          "Describe mutexes, semaphores, and monitors",
        ],
      },
      {
        id: "3",
        name: "Deadlock",
        description: "Learn about deadlocks in operating systems.",
        videoUrl: "https://www.youtube.com/watch?v=0AqfNAwXq5I", // Deadlock
        quizLevels: [
          {
            id: "1",
            name: "Introduction to Deadlock",
            type: "beginner",
            description: "What is a deadlock?",
          },
          {
            id: "2",
            name: "Deadlock Prevention",
            type: "intermediate",
            description: "How to prevent and avoid deadlocks.",
          },
          {
            id: "3",
            name: "Advanced Deadlock Handling",
            type: "advanced",
            description: "Advanced techniques for handling deadlocks.",
          },
        ],
        whatYouWillLearn: [
          "Define deadlock and its causes",
          "Identify prevention and avoidance techniques",
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
        quizLevels: [
          {
            id: "1",
            name: "Introduction to Arrays",
            type: "beginner",
            description: "What are arrays and how are they used?",
          },
          {
            id: "2",
            name: "Array Operations",
            type: "intermediate",
            description: "Common operations on arrays.",
          },
          {
            id: "3",
            name: "Advanced Array Techniques",
            type: "advanced",
            description: "Advanced array manipulation and algorithms.",
          },
        ],
        whatYouWillLearn: [
          "Describe arrays and their uses",
          "Perform common array operations",
        ],
      },
      {
        id: "2",
        name: "Linked Lists",
        description: "Understand linked lists and their types.",
        videoUrl: "https://www.youtube.com/watch?v=njTh_OwMljA", // Linked Lists
        quizLevels: [
          {
            id: "1",
            name: "Singly Linked List",
            type: "beginner",
            description: "Basics of singly linked lists.",
          },
          {
            id: "2",
            name: "Doubly Linked List",
            type: "intermediate",
            description: "Basics of doubly linked lists.",
          },
          {
            id: "3",
            name: "Advanced Linked Lists",
            type: "advanced",
            description: "Advanced linked list operations and applications.",
          },
        ],
        whatYouWillLearn: [
          "Explain singly and doubly linked lists",
          "Understand use cases for linked lists",
        ],
      },
      {
        id: "3",
        name: "Trees",
        description: "Introduction to tree data structures.",
        videoUrl: "https://www.youtube.com/watch?v=oSWTXtMglKE", // Trees
        quizLevels: [
          {
            id: "1",
            name: "Binary Trees",
            type: "beginner",
            description: "Learn about binary trees.",
          },
          {
            id: "2",
            name: "Tree Traversal",
            type: "intermediate",
            description: "Different ways to traverse trees.",
          },
          {
            id: "3",
            name: "Advanced Trees",
            type: "advanced",
            description: "Advanced tree structures and algorithms.",
          },
        ],
        whatYouWillLearn: [
          "Understand binary trees",
          "Perform tree traversals",
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
        quizLevels: [
          {
            id: "1",
            name: "Introduction to RDBMS",
            type: "beginner",
            description: "What is a relational database?",
          },
          {
            id: "2",
            name: "SQL Basics",
            type: "intermediate",
            description: "Learn basic SQL queries.",
          },
          {
            id: "3",
            name: "Advanced SQL",
            type: "advanced",
            description: "Advanced SQL queries and optimization.",
          },
        ],
        whatYouWillLearn: [
          "Describe relational databases and RDBMS",
          "Write basic SQL queries",
        ],
      },
      {
        id: "2",
        name: "NoSQL Databases",
        description: "Explore non-relational databases.",
        videoUrl: "https://www.youtube.com/watch?v=qI_g07C_Q5I", // NoSQL
        quizLevels: [
          {
            id: "1",
            name: "Introduction to NoSQL",
            type: "beginner",
            description: "What is NoSQL?",
          },
          {
            id: "2",
            name: "Types of NoSQL",
            type: "intermediate",
            description: "Document, key-value, column, and graph databases.",
          },
          {
            id: "3",
            name: "Advanced NoSQL",
            type: "advanced",
            description: "Advanced NoSQL concepts and use cases.",
          },
        ],
        whatYouWillLearn: [
          "Explain NoSQL concepts",
          "Identify types of NoSQL databases",
        ],
      },
      {
        id: "3",
        name: "Data Modeling",
        description: "Learn how to model data for databases.",
        videoUrl: "https://www.youtube.com/watch?v=QpdhBUYk7Kk", // Data Modeling
        quizLevels: [
          {
            id: "1",
            name: "ER Diagrams",
            type: "beginner",
            description: "Entity-Relationship diagrams.",
          },
          {
            id: "2",
            name: "Normalization",
            type: "intermediate",
            description: "Database normalization techniques.",
          },
          {
            id: "3",
            name: "Advanced Data Modeling",
            type: "advanced",
            description: "Advanced data modeling techniques.",
          },
        ],
        whatYouWillLearn: [
          "Create ER diagrams",
          "Apply normalization techniques",
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
        quizLevels: [
          {
            id: "1",
            name: "What is a Network?",
            type: "beginner",
            description: "Definition and types of networks.",
          },
          {
            id: "2",
            name: "Network Topologies",
            type: "intermediate",
            description: "Different network topologies.",
          },
          {
            id: "3",
            name: "Advanced Networking",
            type: "advanced",
            description: "Advanced networking concepts and protocols.",
          },
        ],
        whatYouWillLearn: [
          "Define computer networks",
          "Describe network topologies",
        ],
      },
      {
        id: "2",
        name: "Protocols",
        description: "Learn about networking protocols.",
        videoUrl: "https://www.youtube.com/watch?v=IPvYjXCsTg8", // Protocols
        quizLevels: [
          {
            id: "1",
            name: "TCP/IP",
            type: "beginner",
            description: "Basics of TCP/IP protocol suite.",
          },
          {
            id: "2",
            name: "HTTP/HTTPS",
            type: "intermediate",
            description: "Web protocols and their importance.",
          },
          {
            id: "3",
            name: "Advanced Protocols",
            type: "advanced",
            description: "Advanced networking protocols and analysis.",
          },
        ],
        whatYouWillLearn: [
          "Understand TCP/IP protocol suite",
          "Explain HTTP and HTTPS protocols",
        ],
      },
      {
        id: "3",
        name: "Network Security",
        description: "Introduction to network security concepts.",
        videoUrl: "https://www.youtube.com/watch?v=VVxY1DYoC6k", // Network Security
        quizLevels: [
          {
            id: "1",
            name: "Firewalls",
            type: "beginner",
            description: "What are firewalls and how do they work?",
          },
          {
            id: "2",
            name: "Encryption",
            type: "intermediate",
            description: "Basics of encryption in networking.",
          },
          {
            id: "3",
            name: "Advanced Network Security",
            type: "advanced",
            description: "Advanced network security threats and defenses.",
          },
        ],
        whatYouWillLearn: [
          "Describe firewalls and their function",
          "Understand basics of encryption in networking",
        ],
      },
    ],
  },
];
