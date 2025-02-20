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
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Generate exam material detail for each chapter, Make sure to includes all topic point in the content, make sure to give content in HTML format (Do not Add HTMLKL,Head,Body,title tag),\nThe chapters: {\n      "chapterTitle": "Introduction to JavaScript",\n      "chapterSummary": "This chapter introduces JavaScript, its uses, and setting up your environment for development.",\n      "topics": [\n        "What is JavaScript?",\n        "Where JavaScript is used (web browsers, servers, etc.)",\n        "Setting up a development environment (text editors, browsers)",\n        "Basic syntax (variables, comments)",\n        "Running JavaScript code (using a browser\'s console, embedding in HTML)"\n      ]  \n',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "\n<h3>Introduction to JavaScript</h3>\n<p>This chapter introduces JavaScript, its uses, and setting up your environment for development.</p>\n\n<h4>What is JavaScript?</h4>\n<p>Describe JavaScript: its purpose, nature as a scripting language, and its role in web development and beyond.</p>\n\n<h4>Where JavaScript is Used</h4>\n<ul>\n  <li>Web Browsers: Explain how JavaScript enhances interactivity and dynamic behavior in web pages.</li>\n  <li>Servers (Node.js): Briefly introduce server-side JavaScript and its applications.</li>\n  <li>Mobile Apps (React Native, Ionic): Mention the use of JavaScript in building mobile applications.</li>\n  <li>Other Applications: Briefly touch upon other areas where JavaScript finds use (e.g., game development, desktop applications).</li>\n</ul>\n\n<h4>Setting up a Development Environment</h4>\n<ul>\n  <li>Text Editors: Discuss the benefits of using a code editor (mention popular choices like VS Code, Sublime Text, Atom).</li>\n  <li>Browsers: Explain the role of web browsers in executing JavaScript code.</li>\n  <li>Browser Developer Tools: Introduce the browser's developer tools (console, debugger) and their importance in development.</li>\n  <li>Optional: Setting up a local web server (e.g., using Python's SimpleHTTPServer or similar).</li>\n</ul>\n\n<h4>Basic Syntax</h4>\n<ul>\n  <li>Variables: Explain variable declaration (<code>var</code>, <code>let</code>, <code>const</code>), data types (numbers, strings, booleans), and variable naming conventions.</li>\n  <li>Comments: Describe the purpose of comments (single-line and multi-line) and their importance in code readability.</li>\n</ul>\n\n<h4>Running JavaScript Code</h4>\n<ul>\n  <li>Browser's Console:  Show how to open the browser's console and execute simple JavaScript commands.</li>\n  <li>Embedding in HTML: Explain how to include JavaScript code within an HTML file using <code>&lt;script&gt;</code> tags, both in the <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code> sections.  Discuss internal vs. external scripts.</li>\n</ul>\n\n",
        },
      ],
    },
  ],
});
