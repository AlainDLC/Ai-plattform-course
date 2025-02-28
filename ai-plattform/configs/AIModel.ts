const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const generationConfig2 = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};
export const courseOutLineAIModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a study material for Python for Job Interview and level of difficulty will be Biginner whit summery of course, List of Chapters along with summery for each chapter, Topic list in each chapter all result in JSON format ",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "courseitle": "Python for Job Interviews (Beginner)",\n  "courseSummary": "This course provides a foundational understanding of Python programming essential for acing beginner-level job interviews.  It covers fundamental concepts, data structures, and common interview questions, equipping you with the knowledge and confidence to succeed.",\n  "chapters": [\n    {\n      "chapterTitle": "Introduction to Python",\n      "chapterSummary": "This chapter introduces the basics of Python, including setting up your environment, basic syntax, and data types.",\n      "topic": [\n        "Setting up Python environment (installation, IDEs)",\n        "Basic syntax (variables, comments, indentation)",\n        "Data types (integers, floats, strings, booleans)",\n        "Operators (arithmetic, comparison, logical)",\n        "Type conversion"\n      ]\n    },\n    {\n      "chapterTitle": "Control Flow and Loops",\n      "chapterSummary": "Learn how to control the execution flow of your programs using conditional statements and loops.",\n      "topic": [\n        "Conditional statements (if, elif, else)",\n        "Looping constructs (for, while)",\n        "Break and continue statements",\n        "Nested loops"\n      ]\n    },\n    {\n      "chapterTitle": "Data Structures",\n      "chapterSummary": "Explore fundamental Python data structures crucial for efficient programming.",\n      "topic": [\n        "Lists: creation, manipulation, methods",\n        "Tuples: creation, immutability, methods",\n        "Dictionaries: key-value pairs, accessing elements, methods",\n        "Sets: unique elements, set operations"\n      ]\n    },\n    {\n      "chapterTitle": "Functions",\n      "chapterSummary": "Understand how to create and use functions to modularize your code and improve readability.",\n      "topic": [\n        "Defining functions",\n        "Function arguments and parameters",\n        "Return values",\n        "Scope and lifetime of variables",\n        "Lambda functions"\n      ]\n    },\n    {\n      "chapterTitle": "Working with Files",\n      "chapterSummary": "Learn how to interact with files—reading and writing data.",\n      "topic": [\n        "Opening and closing files",\n        "Reading from files",\n        "Writing to files",\n        "File modes"\n      ]\n    },\n    {\n      "chapterTitle": "Object-Oriented Programming (OOP) Basics",\n      "chapterSummary": "Gain a fundamental understanding of OOP principles.",\n      "topic": [\n        "Classes and objects",\n        "Attributes and methods",\n        "Constructors (__init__)",\n        "Inheritance",\n        "Polymorphism (brief introduction)"\n      ]\n    },\n    {\n      "chapterTitle": "Common Interview Questions and Practice Problems",\n      "chapterSummary": "This chapter provides practice problems and examples of common Python interview questions for beginners.",\n      "topic": [\n        "String manipulation problems",\n        "List and array manipulation problems",\n        "Basic algorithm implementation (searching, sorting)",\n        "Debugging and troubleshooting",\n        "Problem-solving strategies"\n      ]\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

export const generateNotesAIModel = model.startChat({
  generationConfig2,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Generate exam material detail for each chapter, Make sure to includes all topic point in the content, make sure to give content in HTML format (Do not Add HTML,Head,Body,title tag),\\nThe chapters: {\\n      "chapterTitle": "Introduction to JavaScript",\\n      "chapterSummary": "This chapter introduces JavaScript, its uses, and setting up your environment for development.",\\n      "topics": [\\n        "What is JavaScript?",\\n        "Where JavaScript is used (web browsers, servers, etc.)",\\n        "Setting up a development environment (text editors, browsers)",\\n        "Basic syntax (variables, comments)",\\n        "Running JavaScript code (using a browser\\\'s console, embedding in HTML)"\\n      ]  \\n\',\n',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "```html\n<h3>Chapter 1: Introduction to JavaScript</h3>\n<p><strong>Chapter Summary:</strong> This chapter introduces JavaScript, its uses, and setting up your environment for development.</p>\n\n<h4>Exam Material Details:</h4>\n<ol>\n  <li><strong>What is JavaScript?</strong>\n    <ul>\n      <li>Definition of JavaScript as a programming language.</li>\n      <li>Its role in making websites interactive.</li>\n      <li>Distinction between JavaScript, Java, and other programming languages.</li>\n    </ul>\n  </li>\n  <li><strong>Where JavaScript is used:</strong>\n    <ul>\n      <li>Web browsers (client-side scripting).</li>\n      <li>Servers (Node.js).</li>\n      <li>Mobile applications (React Native, Ionic).</li>\n      <li>Desktop applications (Electron).</li>\n      <li>Games (using frameworks like Phaser).</li>\n    </ul>\n  </li>\n  <li><strong>Setting up a development environment:</strong>\n    <ul>\n      <li>Choosing a suitable text editor or IDE (e.g., VS Code, Sublime Text, Atom).</li>\n      <li>Understanding browser developer tools (console, debugger).</li>\n      <li>Setting up a local web server (optional, but recommended for more advanced projects).</li>\n    </ul>\n  </li>\n  <li><strong>Basic syntax:</strong>\n    <ul>\n      <li>Declaring variables using <code>var</code>, <code>let</code>, and <code>const</code>.</li>\n      <li>Variable naming conventions.</li>\n      <li>Data types (numbers, strings, booleans, null, undefined).</li>\n      <li>Using comments (single-line and multi-line).</li>\n      <li>Basic operators (+, -, *, /, %, etc.).</li>\n    </ul>\n  </li>\n  <li><strong>Running JavaScript code:</strong>\n    <ul>\n      <li>Using the browser's developer console.</li>\n      <li>Embedding JavaScript code within HTML files using <code>&lt;script&gt;</code> tags.</li>\n      <li>External JavaScript files (linking to .js files).</li>\n      <li>Understanding the difference between inline, internal, and external scripts.</li>\n\n    </ul>\n  </li>\n</ol>\n\n```\n",
        },
      ],
    },
  ],
});

export const generateStudyTypeContentAIModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate the flashcard on topic: React Native Fundamentals, User interface (UI) Development Basic App Navigation in JSON format with front back content, Maximum 15",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "front": "What is React Native?",\n    "back": "A JavaScript framework for building native mobile apps for iOS and Android using React."\n  },\n  {\n    "front": "What are JSX and its role in React Native?",\n    "back": "JSX is a syntax extension to JavaScript that allows you to write HTML-like code within your JavaScript. It makes React Native components more readable and intuitive."\n  },\n  {\n    "front": "Explain Components in React Native.",\n    "back": "Building blocks of a React Native app. They encapsulate UI elements and logic, promoting reusability and organization."\n  },\n  {\n    "front": "What is the purpose of `useState` hook?",\n    "back": "To manage state within a functional component. It allows you to track changes and re-render the component when state updates."\n  },\n  {\n    "front": "What is `useEffect` hook used for?",\n    "back": "To perform side effects, like data fetching, subscriptions, and manual DOM manipulation, in functional components."\n  },\n  {\n    "front": "Name three core UI components in React Native.",\n    "back": "View, Text, Image (or similar variations like TouchableOpacity)"\n  },\n  {\n    "front": "How to style components in React Native?",\n    "back": "Using the `style` prop with an object containing CSS-like styles."\n  },\n  {\n    "front": "What is Flexbox and its role in React Native layout?",\n    "back": "A layout system that allows arranging components along a single axis (row or column) or both axes.  It\'s the primary layout system in React Native."\n  },\n  {\n    "front": "What is `navigation` in React Native apps?",\n    "back": "The mechanism for transitioning between different screens or views within the app."\n  },\n  {\n    "front": "Name a popular navigation library for React Native.",\n    "back": "React Navigation (or similar libraries like React Native Navigation)"\n  },\n  {\n    "front": "What is a `StackNavigator` (in React Navigation)?",\n    "back": "A navigator that manages screens in a stack-like manner, allowing users to navigate back and forth between screens."\n  },\n  {\n    "front": "What is a `TabNavigator` (in React Navigation)?",\n    "back": "A navigator that displays multiple screens as tabs at the bottom (or top) of the screen, allowing for easy switching between screens."\n  },\n  {\n    "front": "How to handle user input in React Native?",\n    "back": "Using components like `TextInput`, `Switch`, or similar input components and handling their `onChange` or `onChangeText` events."\n  },\n  {\n    "front": "What is prop drilling?",\n    "back": "Passing props through multiple layers of components, often leading to code complexity and maintainability issues.  Context API is a solution."\n  },\n  {\n    "front": "What is the role of the `key` prop when rendering lists?",\n    "back": "Helps React identify which items have changed, added, or removed efficiently, improving performance and preventing issues with list rendering."\n  }\n]\n```\n',
        },
      ],
    },
  ],
});
