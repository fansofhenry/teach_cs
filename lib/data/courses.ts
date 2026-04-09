import type { Course, CourseCategory, CourseStatus } from "./types";

export type { Course, CourseCategory, CourseStatus };

export const categories: { value: CourseCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'ai-ml', label: 'AI / ML' },
  { value: 'systems', label: 'Systems' },
  { value: 'math', label: 'Math' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'general', label: 'General' },
];

export const courses: Course[] = [
  // ============================================================
  // COURSE 01: CS 180 — Introduction to Artificial Intelligence
  // ============================================================
  {
    slug: "cs180-intro-ai",
    courseNumber: "CS 180",
    title: "Introduction to Artificial Intelligence",
    shortDescription:
      "AI is not magic — it is math, history, and human choice. We build from first principles: probability, search, neural networks, language models. Then we ask who built these systems, for whom, and what they're encoding about the world.",
    status: "taught",
    category: "ai-ml",
    accentColor: "#c1121f",
    units: 3,
    weeks: 18,
    prerequisites: ["None (Track I)", "Python (Track II+)"],
    tracks: [
      {
        level: "I",
        name: "The Curious Explorer",
        tagline: "No CS background required. Just bring your questions.",
        description: "You'll use visual tools, Google Colab notebooks, and real community data to understand AI from the outside in. We learn to read AI systems before we write them.",
        projects: ["Wk 1-2: AI Audit — analyze a real AI system that affects your community", "Wk 3-5: Spam Detector using Naive Bayes in pure Python dicts", "Wk 6-9: Image Classifier using Teachable Machine", "Wk 10-13: Chatbot: rule-based first, then ML-powered", "Wk 14-16: Fake News Detector + bias audit of your own model"],
        finalProject: "AI That Serves My Community — a working prototype + public presentation + written community impact analysis",
      },
      {
        level: "II",
        name: "The Builder",
        tagline: "You know Python. Now let's make it think.",
        description: "You implement core algorithms from scratch in NumPy before ever touching scikit-learn. The rule: never use a library function until you've built it yourself first.",
        projects: ["Wk 1-2: Naive Bayes from scratch with Python + NumPy only", "Wk 3-5: Linear Regression with gradient descent — no sklearn", "Wk 6-9: 3-layer neural network with backpropagation in NumPy", "Wk 10-12: A* search + minimax for a game you design", "Wk 13-15: NLP pipeline: tokenize, TF-IDF, classify, evaluate for bias"],
        finalProject: "Full ML pipeline applied to a social justice dataset. Technical rigor + critical analysis.",
      },
      {
        level: "III",
        name: "The Architect",
        tagline: "You want the derivations. All of them.",
        description: "Calculus, linear algebra, probability theory — all in play. You'll derive backpropagation from the chain rule, understand attention mechanisms mathematically, and engage critically with published AI research papers.",
        projects: ["Wk 1-2: Derive MLE estimator for Gaussian distributions from scratch", "Wk 3-5: Prove gradient descent convergence under convexity conditions", "Wk 6-9: Derive backprop via chain rule; implement a mini autograd engine", "Wk 10-12: Implement a mini-transformer with self-attention from scratch", "Wk 13-15: Adversarial ML — FGSM attack, certified defenses, robustness analysis"],
        finalProject: "A novel research question + replication study of a published paper. Submit as a research preprint.",
      },
    ],
    weeklyModules: [
      { week: 1, title: "What Is Intelligence?", topics: ["Turing Test", "Chinese Room", "Symbolic AI vs. Connectionism", "Dartmouth 1956 to ChatGPT"], project: "Design Your Turing Test", unit: "Unit 1: Epistemology, History, Probability" },
      { week: 2, title: "The Grammar of AI: Probability", topics: ["Bayes' theorem", "Random variables", "Monty Hall", "Base rate fallacy"], project: "Spam Classifier by Hand", unit: "Unit 1" },
      { week: 3, title: "AI as Search", topics: ["BFS", "DFS", "A*", "State space", "Heuristics"], project: "Maze Solver", unit: "Unit 2: Search & Adversarial Play" },
      { week: 4, title: "Games & Adversarial AI", topics: ["Minimax", "Alpha-beta pruning", "Game theory", "Zero-sum vs. cooperative"], project: "Unbeatable Tic-Tac-Toe", unit: "Unit 2" },
      { week: 5, title: "What Does It Mean to Learn?", topics: ["Loss functions", "Gradient descent", "Linear regression", "MSE loss"], project: "Rent Predictor", unit: "Unit 3: Machine Learning" },
      { week: 6, title: "Classification + Decision Boundaries", topics: ["Logistic regression", "Sigmoid", "Precision/recall", "Confusion matrix"], project: "Admissions Classifier + bias audit", unit: "Unit 3" },
      { week: 7, title: "The Neuron: Biology to Math", topics: ["Perceptron", "Weights and bias", "Activation functions", "XOR problem"], project: "XOR Neural Net in NumPy", unit: "Unit 4: Neural Networks" },
      { week: 8, title: "Backpropagation: The Chain Rule", topics: ["Computational graphs", "Forward/backward pass", "Gradient accumulation", "Automatic differentiation"], project: "Handwritten Digit Recognizer (MNIST)", unit: "Unit 4" },
      { week: 9, title: "Midterm Portfolio Exhibition", topics: ["Community showcase", "Peer feedback", "Critical AI panel discussion", "Final project design sprint"], unit: "Midpoint" },
      { week: 10, title: "Learning Without Labels", topics: ["K-means clustering", "PCA", "Embeddings", "Curse of dimensionality"], project: "Cluster Your Playlist", unit: "Unit 5: Unsupervised + NLP" },
      { week: 11, title: "Natural Language Processing", topics: ["Tokenization", "TF-IDF", "word2vec", "Language as power"], project: "Sentiment Analyzer", unit: "Unit 5" },
      { week: 12, title: "Computer Vision", topics: ["CNNs", "Filters and pooling", "Feature maps", "Facial recognition bias"], project: "Community Image Classifier", unit: "Unit 6: Vision + Generative AI" },
      { week: 13, title: "Generative AI", topics: ["GANs", "VAEs", "Diffusion models", "Authorship and consent"], project: "Generate With Purpose", unit: "Unit 6" },
      { week: 14, title: "Reinforcement Learning", topics: ["Agents and environments", "Q-learning", "Reward hacking", "Alignment problem"], project: "Q-Learning Gridworld", unit: "Unit 7: RL + LLMs" },
      { week: 15, title: "Large Language Models", topics: ["Transformers", "Self-attention", "Hallucination", "Stochastic Parrots"], project: "Red-Team an LLM", unit: "Unit 7" },
      { week: 16, title: "AI Ethics & Governance", topics: ["Algorithmic fairness definitions", "Explainability", "EU AI Act", "Navigate vs. Transform"], project: "Final Project Studio Time", unit: "Unit 8" },
      { week: 17, title: "Final Exhibition — Day 1", topics: ["Community showcase", "Learning conferences", "Portfolio due"], unit: "Final" },
      { week: 18, title: "Final Exhibition — Day 2", topics: ["Remaining presentations", "Course co-evaluation", "Transfer pathways"], unit: "Finale" },
    ],
    learningObjectives: ["Understand AI from first principles: probability, logic, linear algebra", "Build each major AI concept from scratch before using libraries", "Critically analyze who built AI systems, who benefits, and who is harmed", "Implement search algorithms, neural networks, and NLP pipelines", "Conduct a structured bias audit of a real deployed AI system", "Communicate technical AI concepts to non-technical audiences", "Develop a portfolio demonstrating deep understanding"],
    keyResources: ["No required textbook — all materials free", "Google Colab notebooks", "NumPy, scikit-learn, PyTorch", "Gender Shades (Buolamwini & Gebru)", "Stochastic Parrots (Bender et al.)", "Algorithms of Oppression (Noble)"],
    teachingPhilosophy: ["First Principles First — understand every layer before stacking them", "Choose Your Adventure — three tracks, diverge on projects", "Liberation Through Understanding — critical consciousness is the most advanced technical skill"],
    thinkers: ["Turing", "Buolamwini", "Noble", "Shannon", "Freire", "hooks", "Benjamin", "Ko"],
    isNgAdaptation: false,
  },

  // ============================================================
  // COURSE 02: CS 185 — Introduction to Machine Learning
  // ============================================================
  {
    slug: "cs185-intro-ml",
    courseNumber: "CS 185",
    title: "Introduction to Machine Learning",
    shortDescription: "ML algorithms are not neutral mathematical facts — they are choices about what to optimize, whose data counts, who bears the error. We derive every algorithm before using it, implement from scratch before touching any library.",
    status: "in-development",
    category: "ai-ml",
    accentColor: "#4dd9f0",
    units: 3,
    weeks: 18,
    prerequisites: ["Basic Python", "Some Math"],
    tracks: [
      { level: "I", name: "The Data Explorer", tagline: "You have questions about the world. Data has answers.", description: "Use real-world datasets connected to issues you care about. Visualize what the model learns before writing sklearn.", prerequisites: "Basic Python", projects: ["Housing Price Predictor", "Heart Disease Classifier", "Spotify Genre Clusterer", "Movie Sentiment Analyzer", "Midterm: Bias Audit"], finalProject: "A data story — full ML analysis with plain-language report." },
      { level: "II", name: "The Implementer", tagline: "Build the algorithms from the ground up.", description: "Implement every algorithm from scratch before using the library. Cannot call sklearn until NumPy version passes tests.", prerequisites: "Python + Calculus + Linear Algebra", projects: ["Linear Regression from scratch", "Logistic Regression + SGD", "Decision Tree from scratch", "3-layer MLP in NumPy", "Kaggle competition — custom pipeline"], finalProject: "Full ML pipeline with bias evaluation and practitioner brief." },
      { level: "III", name: "The Theorist", tagline: "The proofs, edge cases, and open research questions.", description: "Proofs, derivations, published research. Implement autograd, PAC learning theory, fairness research.", prerequisites: "Calc, Lin Alg, Stats, LaTeX", projects: ["Derive MLE for Gaussian/Bernoulli/multinomial", "Prove GD convergence", "Implement mini-autograd", "Kernel methods: SVM dual", "Paper replication from NeurIPS/ICML"], finalProject: "Research-grade project with preprint-style write-up." },
    ],
    weeklyModules: [
      { week: 1, title: "What Is Learning From Data?", topics: ["ML frame", "MLE intro", "Gaussian MLE"], project: "Fit a Gaussian by Hand", unit: "Unit 1: Statistical Foundations" },
      { week: 2, title: "Supervised Learning Setup", topics: ["Train/test", "Generalization", "Loss as probabilistic choice"], project: "Loss Landscape Explorer", unit: "Unit 1" },
      { week: 3, title: "Linear Regression", topics: ["MSE", "Gradient descent", "Normal equations", "SGD"], project: "Rent Predictor", unit: "Unit 2: Linear Methods" },
      { week: 4, title: "Regularization + Logistic Regression", topics: ["Ridge/Lasso", "Bias-variance", "Sigmoid", "Cross-entropy"], project: "Hiring classifier audit", unit: "Unit 2" },
      { week: 5, title: "Naive Bayes + Feature Engineering", topics: ["Generative vs. discriminative", "Text classification"], project: "Spam/Sentiment Classifier", unit: "Unit 2" },
      { week: 6, title: "Decision Trees + Ensembles", topics: ["Information gain", "CART", "Random forests", "Boosting"], project: "Recidivism Audit (COMPAS)", unit: "Unit 2" },
      { week: 7, title: "K-Means & Clustering", topics: ["Lloyd's algorithm", "GMM", "EM algorithm"], project: "Market Segmentation", unit: "Unit 3: Unsupervised" },
      { week: 8, title: "PCA + Word Embeddings", topics: ["Dimensionality reduction", "SVD", "word2vec bias"], project: "Embed Your Community", unit: "Unit 3" },
      { week: 9, title: "Midpoint Exhibition", topics: ["Portfolio showcase", "Guest panel", "Final project pitch"], unit: "Midpoint" },
      { week: 10, title: "Neural Networks", topics: ["MLP", "Activations", "Backpropagation"], project: "MLP on Tabular Data", unit: "Unit 4: Deep Learning" },
      { week: 11, title: "CNNs", topics: ["Filters/pooling", "Batch norm", "Grad-CAM"], project: "Interpret What the Model Sees", unit: "Unit 4" },
      { week: 12, title: "Transformers", topics: ["RNNs", "LSTMs", "Self-attention", "Transfer learning"], project: "Fine-Tune for Your Use Case", unit: "Unit 4" },
      { week: 13, title: "Bayesian ML", topics: ["Priors/posteriors", "Calibration"], project: "Is Your Model Calibrated?", unit: "Unit 5: Advanced" },
      { week: 14, title: "Algorithmic Fairness", topics: ["Impossibility theorem", "Adversarial ML"], project: "Attack Your Own Model", unit: "Unit 5" },
      { week: 15, title: "Reinforcement Learning", topics: ["MDPs", "Q-learning", "RLHF"], project: "Design a Reward Function", unit: "Unit 5" },
      { week: 16, title: "ML in the Wild", topics: ["Production ML", "Distribution shift"], project: "Final Project Studio", unit: "Final" },
      { week: 17, title: "Final Exhibition — Day 1", topics: ["Showcase", "Conferences"], unit: "Final" },
      { week: 18, title: "Final Exhibition — Day 2", topics: ["Presentations", "Co-evaluation"], unit: "Finale" },
    ],
    learningObjectives: ["Derive every major ML algorithm from first principles", "Implement from scratch before libraries", "Understand loss, gradient descent, bias-variance, MLE as unifying themes", "Evaluate with precision, recall, AUC, calibration, fairness metrics", "Conduct structured bias audits", "Communicate uncertainty", "Build a portfolio of deep engagement"],
    keyResources: ["No required textbook", "NumPy, Pandas, scikit-learn, PyTorch", "Critically Conscious Computing (Ko)", "Race After Technology (Benjamin)", "COMPAS dataset"],
    teachingPhilosophy: ["Root Before Branch", "Choose Your Depth", "Uncertainty Is the Lesson", "No Portfolio, No Grade"],
    thinkers: ["Ko", "Benjamin", "Obermeyer", "Freire", "Anderson"],
    isNgAdaptation: false,
  },

  // ============================================================
  // COURSE 03: CS 210 — Data Structures & Algorithms
  // ============================================================
  {
    slug: "cs210-dsa",
    courseNumber: "CS 210",
    title: "Data Structures & Algorithms",
    shortDescription: "Every data structure is an argument about the world. Every algorithm is a strategy, a tradeoff, a value judgment. We implement every structure before using the library version. No LeetCode grind — deep projects that transfer.",
    status: "taught",
    category: "systems",
    accentColor: "#e36414",
    units: 4,
    weeks: 18,
    prerequisites: ["Python or Java", "OOP"],
    tracks: [
      { level: "I", name: "Novice Explorer", tagline: "Build and understand every structure.", description: "Python implementations. Build all features. Reflect on whose problems each structure solves.", projects: ["CSV Spreadsheet Engine", "Music Playlist System", "Text Editor Undo/Redo", "Word Frequency Analyzer", "File System Navigator"] },
      { level: "II", name: "The Builder", tagline: "Rigor, analysis, and edge cases.", description: "Implement from scratch with full complexity analysis.", projects: ["DynamicArray class", "LRU Cache", "AVL tree with rotations", "Dijkstra campus navigator", "All six sorts + Timsort"] },
      { level: "III", name: "The Architect", tagline: "Proofs, research, impossibility bounds.", description: "Formal proofs and advanced implementations.", projects: ["Prove amortized O(1)", "XOR linked list", "Fibonacci heaps", "Prove sorting lower bound", "Approximation algorithms"] },
    ],
    weeklyModules: [
      { week: "1-2", title: "Arrays & Dynamic Arrays", topics: ["Contiguous memory", "O(1) access", "Amortized push"], project: "CSV Spreadsheet Engine", unit: "DS-01" },
      { week: "2-3", title: "Linked Lists", topics: ["Singly/doubly/circular", "Floyd cycle detection"], project: "Music Playlist System", unit: "DS-02" },
      { week: "3-4", title: "Stacks & Queues", topics: ["LIFO/FIFO", "Command pattern", "Priority queues"], project: "Text Editor + Hospital Triage", unit: "DS-03" },
      { week: "4-5", title: "Hash Tables", topics: ["Hash functions", "Chaining vs. open addressing", "Load factors"], project: "Word Frequency Analyzer", unit: "DS-04" },
      { week: "6-7", title: "Binary Trees & BSTs", topics: ["BST invariant", "Traversals", "AVL rotations"], project: "File System Navigator", unit: "DS-05" },
      { week: "7-8", title: "Heaps", topics: ["Binary heap in array", "Heapsort", "Decrease-key"], project: "ER Triage Simulator", unit: "DS-06" },
      { week: "9-10", title: "Graphs", topics: ["BFS", "DFS", "Dijkstra", "Bellman-Ford", "Topological sort"], project: "Campus Navigator", unit: "DS-07/08" },
      { week: "11-12", title: "Sorting", topics: ["Bubble", "Selection", "Insertion", "Merge", "Quick", "Counting", "Lower bound"], project: "Sorting Visualizer", unit: "ALGO-01" },
      { week: "13-14", title: "Dynamic Programming", topics: ["Optimal substructure", "Memoization", "Edit distance"], project: "Spell Checker + DNA Aligner", unit: "ALGO-02" },
      { week: "15-16", title: "Capstone Studio", topics: ["System design", "Integration", "Profiling"], project: "Capstone" },
      { week: "17-18", title: "Final Exhibition", topics: ["Portfolio", "Self-evaluation", "Co-evaluation"] },
    ],
    learningObjectives: ["Implement every structure from scratch", "Derive time complexity", "Build 12 mini projects", "Understand critical history of computation", "Profile algorithms on real data", "Portfolio-based assessment"],
    keyResources: ["OpenDSA", "Princeton Algorithms", "Visualgo.net", "PythonTutor.com", "CLRS"],
    teachingPhilosophy: ["Build First, Abstract Second", "Each Structure Is a Story", "No LeetCode Grind Culture"],
    thinkers: ["Knuth", "Dijkstra", "Noble", "Tarjan", "Ko", "Anderson", "Sedgewick"],
    isNgAdaptation: false,
  },

  // ============================================================
  // COURSE 04: CS 175 — How Things Work
  // ============================================================
  {
    slug: "how-things-work",
    courseNumber: "CS 175",
    title: "How Things Work",
    shortDescription: "PageRank. GPS. The phone in your pocket. Three technologies derived from first principles. Includes signature project: Build a Computer from Scratch.",
    status: "in-development",
    category: "systems",
    accentColor: "#00d4ff",
    units: 3,
    weeks: 18,
    prerequisites: ["Basic Math", "No Calculus Required"],
    tracks: [
      { level: "I", name: "Novice", tagline: "Understand at the modeling level.", description: "Visual tools, guided exercises, plain-language explanations.", projects: ["5-node PageRank by hand", "GPS with 3 satellites on paper", "Trace logic gates"] },
      { level: "II", name: "Builder", tagline: "Implement from scratch.", description: "Full Python implementations, scale to real datasets.", projects: ["PageRank on Wikipedia", "GPS position finder", "Logic gate simulator"] },
      { level: "III", name: "Architect", tagline: "Derive the math, prove guarantees.", description: "Perron-Frobenius, least squares, Boolean algebra proofs.", projects: ["Prove PageRank convergence", "Derive relativistic corrections", "Prove NAND universality"] },
    ],
    weeklyModules: [
      { week: 1, title: "First Principles Thinking", topics: ["Three levels of understanding", "Math foundations"], unit: "Unit 00" },
      { week: 2, title: "Link Structure of the Web", topics: ["Directed graphs", "Random Surfer", "Markov chains"], unit: "Unit 01: PageRank" },
      { week: 3, title: "Stochastic Matrices & Steady State", topics: ["Eigenvalue equation", "Power iteration"], unit: "Unit 01" },
      { week: 4, title: "Damping Factor & Build PageRank", topics: ["Google Matrix", "Alpha=0.85"], project: "Build Your Own PageRank", unit: "Unit 01" },
      { week: 5, title: "The GPS Constellation", topics: ["31 satellites", "Pseudoranges", "Speed of light"], unit: "Unit 02: GPS" },
      { week: 6, title: "Trilateration & Least Squares", topics: ["Sphere intersection", "Overdetermined systems"], unit: "Unit 02" },
      { week: 7, title: "Relativistic Corrections", topics: ["Special/general relativity", "38 us/day"], project: "GPS Simulator", unit: "Unit 02" },
      { week: 8, title: "Silicon & Transistors", topics: ["Doping", "P-N junctions", "Transistor as switch"], unit: "Unit 03: Smartphone" },
      { week: 9, title: "Logic Gates & ALU", topics: ["NAND universality", "Binary arithmetic", "Adders"], unit: "Unit 03" },
      { week: 10, title: "Memory, Radio & Full System", topics: ["SRAM/DRAM", "Cache", "Radio", "Camera", "Touchscreen"], unit: "Unit 03" },
    ],
    learningObjectives: ["Derive PageRank from eigenvalue equations", "Understand GPS from pseudoranges to relativity", "Trace smartphone from transistors to full system", "First principles thinking", "Critical questions about technology control"],
    keyResources: ["SNAP Stanford Networks", "Wikipedia Link Graph", "u-blox GPS data", "OpenCellID"],
    teachingPhilosophy: ["Always Ask Why", "Derive Before Using", "Build Something Small"],
    thinkers: ["Brin", "Page", "Einstein", "Shannon", "Noble"],
    isNgAdaptation: false,
  },

  // ============================================================
  // COURSE 05: Math 2B — Applied Linear Algebra
  // ============================================================
  {
    slug: "math2b-linear-algebra",
    courseNumber: "Math 2B",
    title: "Introduction to Applied Linear Algebra",
    shortDescription: "Six fundamental problems. Twenty-nine lessons. Build circuits, collect data, verify models. Derive before compute — the ALAF approach.",
    status: "taught",
    category: "math",
    accentColor: "#8b7cf8",
    units: 3,
    weeks: 18,
    prerequisites: ["Pre-calculus or Calculus"],
    tracks: [
      { level: "I", name: "Novice", tagline: "Build intuition through computation.", description: "MATLAB exploration, visualization, understanding before formalism.", projects: [] },
      { level: "II", name: "Builder", tagline: "Implement algorithms on real data.", description: "Gaussian elimination, LU factorization, power iteration in MATLAB.", projects: [] },
      { level: "III", name: "Architect", tagline: "Prove theorems, extend theory.", description: "Full proofs: IMT, Rank-Nullity, spectral properties, abstract vector spaces.", projects: [] },
    ],
    weeklyModules: [
      { week: "0", title: "Major Problems in Applied Linear Algebra", topics: ["NLSP, GLSP, FRLSP, SEP, SVD, GEP"], unit: "Unit 01: Language" },
      { week: "1-2", title: "Sets, Functions, Vectors", topics: ["Set theory", "Vectors, norms, inner products", "Orthogonality"], unit: "Unit 01" },
      { week: "3", title: "Span & Independence", topics: ["Linear combinations", "Basis", "Dimension"], unit: "Unit 01" },
      { week: "4-5", title: "Matrices", topics: ["Four interpretations of Ax", "Transformations", "Non-commutativity"], unit: "Unit 01" },
      { week: "6-7", title: "NLSP", topics: ["Row reduction", "Invertible Matrix Theorem", "LU", "Determinants"], unit: "Unit 02" },
      { week: "8", title: "GLSP", topics: ["RREF", "Free variables", "Parametric solutions"], unit: "Unit 02" },
      { week: "9-10", title: "ELSP Project", topics: ["Build circuit", "Measure", "Model as Ax=b", "Solve in MATLAB"], project: "ELSP", unit: "Unit 02" },
      { week: "11-12", title: "Vector Spaces & Rank", topics: ["Axioms", "Four subspaces", "Rank-Nullity"], unit: "Unit 03" },
      { week: "13-14", title: "Least Squares & QR", topics: ["Normal equations", "Gram-Schmidt", "QR"], unit: "Unit 03: FRLSP" },
      { week: "15-16", title: "Eigenvalues", topics: ["SEP", "Characteristic polynomial", "Diagonalization", "PageRank"], unit: "Unit 03: SEP" },
      { week: "17-18", title: "Final Portfolio", topics: ["Exhibition", "Self-evaluation"] },
    ],
    learningObjectives: ["Master six fundamental problems", "Derive from real problems", "Build and verify circuit model", "Connect eigenvalues to PageRank, vibration, PCA"],
    keyResources: ["ALAF textbook", "MATLAB", "ELSP materials", "YouTube playlists"],
    teachingPhilosophy: ["Six problems organize the course", "Derive before you look", "Draw every object", "Connect to the 6 problems"],
    thinkers: ["Anderson", "Ko", "Strang"],
    isNgAdaptation: false,
  },

  // ============================================================
  // COURSE 06: ENGR 11 — MATLAB
  // ============================================================
  {
    slug: "engr11-matlab",
    courseNumber: "ENGR 11",
    title: "Programming & Problem Solving in MATLAB",
    shortDescription: "Model real circuits. Understand why 0.1 + 0.2 != 0.3. MATLAB the way engineers use it — from binary to IEEE 754. No prior programming required.",
    status: "taught",
    category: "engineering",
    accentColor: "#a8ff3e",
    units: 3,
    weeks: 18,
    prerequisites: ["No Programming Required"],
    tracks: [
      { level: "I", name: "Starter", tagline: "Learn MATLAB from zero.", description: "Master environment, arrays, control flow, functions.", projects: [] },
      { level: "II", name: "Builder", tagline: "Engineer reliable numerical programs.", description: "Numerical accuracy, vectorization, circuit modeling.", projects: [] },
      { level: "III", name: "Architect", tagline: "Understand math inside the machine.", description: "IEEE 754, numerical stability, error propagation.", projects: [] },
    ],
    weeklyModules: [
      { week: 1, title: "The MATLAB Desktop", topics: ["Command Window", "Workspace", "Editor"], unit: "Unit 1" },
      { week: 2, title: "Create Arrays", topics: ["Vectors", "Matrices", "Colon operator", "linspace"], unit: "Unit 1" },
      { week: 3, title: "Logical Data", topics: ["Logical arrays", "Indexing", "Filtering"], unit: "Unit 1" },
      { week: 4, title: "Control Flow", topics: ["if/elseif/else", "for", "while", "Vectorization"], unit: "Unit 1" },
      { week: 5, title: "Function Files", topics: ["Syntax", "Scope", "Multiple outputs"], unit: "Unit 1" },
      { week: 6, title: "Program Design", topics: ["Decomposition", "Pseudocode", "Testing"], unit: "Unit 1" },
      { week: "7-12", title: "ELSP Project", topics: ["Ohm's Law", "Kirchhoff's laws", "Ax=b", "MATLAB backslash"], project: "ELSP", unit: "Unit 2" },
      { week: "13-14", title: "How Numbers Work Inside", topics: ["Binary", "IEEE 754", "Machine epsilon"], unit: "Unit 3" },
      { week: "15-16", title: "Numerical Analysis", topics: ["Rounding error", "Condition numbers", "Stability"], unit: "Unit 3" },
      { week: "17-18", title: "Final Portfolio", topics: ["Exhibition", "Self-evaluation"] },
    ],
    learningObjectives: ["Master MATLAB for engineering", "Build and model a real circuit", "Understand IEEE 754", "Top-down program design"],
    keyResources: ["MATLAB R2024b", "ELSP materials", "Multimeters", "IEEE 754 reference"],
    teachingPhilosophy: ["Every lesson starts with a problem", "The circuit tells you if you're right", "Modeling is iterative"],
    thinkers: ["Anderson", "Ko"],
    isNgAdaptation: false,
  },

  // ============================================================
  // NG ADAPTATIONS
  // ============================================================
  {
    slug: "ai-for-everyone", courseNumber: "AI For Everyone", title: "AI For Everyone — Civic AI Literacy for All",
    shortDescription: "Andrew Ng's landmark course redesigned for community college. Three tracks from no-prereq literacy to building with APIs. Community audit projects.",
    status: "in-development", category: "ai-ml", accentColor: "#00b4a6", units: 3, weeks: 18,
    prerequisites: ["None (Track I)"],
    tracks: [
      { level: "I", name: "AI Civic Literacy", tagline: "Understand AI as a citizen.", description: "Conceptual understanding. Map AI in your community. No coding.", projects: ["Community AI Audit", "Algorithmic Impact Report", "Policy Brief", "Public Exhibition"] },
      { level: "II", name: "AI Practitioner", tagline: "Use AI tools critically.", description: "Prompt engineering, workflow automation, generative AI.", projects: ["Prompt Portfolio", "AI-Augmented Work", "Workflow Design", "Critical Evaluation"] },
      { level: "III", name: "AI Builder", tagline: "Build AI applications.", description: "APIs, classifiers, deployment.", prerequisites: "Basic Python", projects: ["API Explorer", "Community Classifier", "Bias Measurement", "Capstone App"] },
    ],
    weeklyModules: [
      { week: "1-4", title: "What Is AI, Actually?", topics: ["Supervised learning", "Decision boundaries", "Training data"], project: "Community AI Audit" },
      { week: "5-9", title: "Who Wins, Who Loses?", topics: ["Objective functions", "Error types", "Fairness"], project: "Algorithmic Impact Report" },
      { week: "10-14", title: "What Should We Do?", topics: ["Governance", "Regulation", "Consent"], project: "Policy Brief or Prototype" },
      { week: "15-18", title: "Make It Public", topics: ["Communication", "Advocacy"], project: "Public Exhibition" },
    ],
    learningObjectives: ["Understand AI systems", "Map AI in community", "Evaluate critically", "Draft policy", "Use tools with judgment"],
    keyResources: ["Ng's AI For Everyone (Coursera)", "Community datasets"],
    teachingPhilosophy: ["AI is already deciding — learn to decide back", "Community problems first", "Equity is curriculum"],
    thinkers: ["Ng", "Ko", "Buolamwini", "Noble", "Freire"], isNgAdaptation: true,
  },
  {
    slug: "ml-specialization", courseNumber: "ML Specialization", title: "Machine Learning Specialization — Every Algorithm is a Choice",
    shortDescription: "Ng's ML specialization rebuilt for community college. Derive before compute. Implement before import. Audit before deploy.",
    status: "in-development", category: "ai-ml", accentColor: "#8b5cf6", units: 3, weeks: 18,
    prerequisites: ["None (Track I)", "Python (Track II)", "Calculus (Track III)"],
    tracks: [
      { level: "I", name: "ML Consumer", tagline: "Understand and interpret ML.", description: "Interpret outputs, spot bias, read papers.", prerequisites: "Basic stats", projects: ["Interpret predictions", "Audit classifier", "Plain-language report"] },
      { level: "II", name: "ML Practitioner", tagline: "Build ML pipelines.", description: "scikit-learn, pandas, deploy models.", prerequisites: "Python + stats", projects: ["Rent predictor", "Classifier comparison", "Cluster demographics", "Deploy model"] },
      { level: "III", name: "ML Engineer", tagline: "Implement from first principles.", description: "NumPy only. Derive everything.", prerequisites: "Python + Calc + LinAlg", projects: ["Linear regression from scratch", "SVM + kernel trick", "K-means + GMM", "Neural net in NumPy", "Full bias audit"] },
    ],
    weeklyModules: [
      { week: "1-3", title: "Regression", topics: ["Linear regression", "Gradient descent"], project: "Rent predictor" },
      { week: "4-6", title: "Classification", topics: ["Logistic regression", "Disparate impact"], project: "Hiring classifier audit" },
      { week: "7-9", title: "Neural Networks", topics: ["MLP", "Backprop from scratch"], project: "Image classifier" },
      { week: "10-12", title: "Unsupervised", topics: ["K-means", "PCA"], project: "Community clustering" },
      { week: "13-15", title: "Bias Audit", topics: ["Disparate impact", "Statistical tests"], project: "Bias audit report" },
      { week: "16-18", title: "Capstone", topics: ["Community problem", "Harm analysis"], project: "Community ML app" },
    ],
    learningObjectives: ["Derive ML algorithms", "Implement from scratch", "Audit for bias", "Build for community"],
    keyResources: ["Ng's ML Specialization (Coursera)", "NumPy, sklearn, pandas"],
    teachingPhilosophy: ["Derive Before Compute", "Audit Before Deploy", "Community Data", "Portfolio Over Exams"],
    thinkers: ["Ng", "Ko", "Benjamin", "Freire"], isNgAdaptation: true,
  },
  {
    slug: "deep-learning-spec", courseNumber: "Deep Learning Spec", title: "Deep Learning Specialization — Build What You Can Explain",
    shortDescription: "Ng's five-course DL specialization for community college. Six modules, neurons to transformers. Implement backprop from scratch. Mandatory bias audit.",
    status: "in-development", category: "ai-ml", accentColor: "#f59e0b", units: 3, weeks: 18,
    prerequisites: ["Algebra (Track I)", "Python (Track II)", "Calculus (Track III)"],
    tracks: [
      { level: "I", name: "Conceptual DL", tagline: "Understand DL architecturally.", description: "Interpret outputs, pre-trained models.", prerequisites: "High school algebra", projects: ["Probe CLIP/DALL-E", "Audit image classifier", "Technical report"] },
      { level: "II", name: "Applied DL", tagline: "Build DL applications.", description: "PyTorch: CNNs, sequence models, transformers.", prerequisites: "Python + calculus", projects: ["Fine-tune ResNet", "Sequence model", "Fine-tune transformer", "Deploy with harm analysis"] },
      { level: "III", name: "DL Engineer", tagline: "Implement from scratch.", description: "Forward pass, backprop, Adam, batch norm in NumPy.", prerequisites: "Python + Calc + LinAlg", projects: ["MLP in NumPy", "Conv layer from scratch", "Attention mechanism", "Small GPT", "Reproducibility audit"] },
    ],
    weeklyModules: [
      { week: "1-3", title: "Neural Foundations", topics: ["Perceptron", "Activations", "Backprop"], project: "Single-layer classifier" },
      { week: "4-6", title: "Deep Networks", topics: ["Vanishing gradients", "Batch norm", "Dropout", "Adam"], project: "5-layer MLP" },
      { week: "7-9", title: "CNNs", topics: ["Convolution", "ResNet", "Biased data"], project: "CNN with demographic analysis" },
      { week: "10-12", title: "Transformers", topics: ["RNNs", "Attention", "BERT/GPT"], project: "Sequence model" },
      { week: "13-15", title: "Bias Audit", topics: ["Harm taxonomy", "Audit methodology"], project: "DL bias audit" },
      { week: "16-18", title: "Capstone", topics: ["Community application", "Harm report"], project: "Community DL app" },
    ],
    learningObjectives: ["Understand DL from neurons to transformers", "Implement backprop/CNNs/attention from scratch", "Mandatory bias audits", "Community capstone"],
    keyResources: ["Ng's Deep Learning Specialization (Coursera)", "NumPy, PyTorch"],
    teachingPhilosophy: ["No neural net until you've built one by hand", "Scratch before PyTorch", "Bias audit is required"],
    thinkers: ["Ng", "Ko", "Buolamwini", "Freire", "Anderson"], isNgAdaptation: true,
  },
  {
    slug: "gen-ai-for-everyone", courseNumber: "Gen AI For Everyone", title: "Generative AI For Everyone — Prompts are Arguments",
    shortDescription: "Every image is a choice. Every output reflects training data. Use gen AI critically, build skillfully, audit rigorously.",
    status: "in-development", category: "ai-ml", accentColor: "#c2185b", units: 3, weeks: 18,
    prerequisites: ["None (Track I)", "Python (Track II)", "ML Background (Track III)"],
    tracks: [
      { level: "I", name: "AI Collaborator", tagline: "Use gen AI effectively and critically.", description: "Prompt engineering, fact-checking, hallucination.", prerequisites: "None", projects: ["30-prompt portfolio", "Fact-check challenge", "AI-augmented work", "Critical review"] },
      { level: "II", name: "AI Creator", tagline: "Build with gen AI APIs.", description: "RAG, prompt chains, deploy applications.", prerequisites: "Basic Python", projects: ["Prompt chain system", "RAG document Q&A", "Bias measurement", "Community app"] },
      { level: "III", name: "AI Critic", tagline: "Technically audit generative AI.", description: "Probe bias, test alignment, training data provenance.", prerequisites: "Python + Stats + ML", projects: ["Red team report", "Image audit with CLIP", "Training data analysis", "Publishable audit"] },
    ],
    weeklyModules: [
      { week: "1-4", title: "What is a prompt?", topics: ["Tokens", "Next-token prediction", "Prompt engineering"], project: "Prompt Portfolio" },
      { week: "5-9", title: "What does it get wrong?", topics: ["Hallucination", "Bias", "Failure analysis"], project: "Bias Audit Report" },
      { week: "10-14", title: "What can we build?", topics: ["RAG", "APIs", "Community design"], project: "Application or Policy Brief" },
      { week: "15-18", title: "What should we decide?", topics: ["Governance", "Consent", "Safeguards"], project: "Public Exhibition" },
    ],
    learningObjectives: ["Understand gen AI mechanics", "Use with critical judgment", "Quantify output bias", "Build responsibly", "Make civic arguments"],
    keyResources: ["Ng's Gen AI for Everyone (Coursera)", "Free tools only", "CLIP embeddings"],
    teachingPhilosophy: ["Prompts are arguments", "Failure analysis is rigorous", "Bias must be quantified"],
    thinkers: ["Ng", "Ko", "Buolamwini", "Benjamin", "Freire"], isNgAdaptation: true,
  },

  // ============================================================
  // Build a Computer (Signature Project)
  // ============================================================
  {
    slug: "build-a-computer", courseNumber: "CS 175 Project", title: "Build a Computer from Scratch",
    shortDescription: "A 20-week project: teams build a working 8-bit computer on breadboards from logic gates. Cross-STEM transfer across 5 disciplines. Inspired by Ben Eater.",
    status: "in-development", category: "systems", accentColor: "#b87333", units: 3, weeks: 20,
    prerequisites: ["No Prior Electronics"],
    tracks: [
      { level: "I", name: "Novice", tagline: "Build and understand.", description: "Guided build, build journal, STEM connections with support.", projects: [] },
      { level: "II", name: "Builder", tagline: "Build + solve STEM problems.", description: "Build plus related problem from connected discipline each week.", projects: [] },
      { level: "III", name: "Architect", tagline: "Formalize mathematically.", description: "Full formalization of STEM bridges. Derive equations. Prove theorems.", projects: [] },
    ],
    weeklyModules: [
      { week: 1, title: "Wires, LEDs & Ohm's Law", topics: ["V=IR", "Current limiting"], unit: "Module 1: Power" },
      { week: 2, title: "Transistors & Logic Gates", topics: ["Semiconductors", "NAND universality"], unit: "Module 2: Logic" },
      { week: 3, title: "Binary & Hex", topics: ["Base conversion", "Binary encoding"], unit: "Module 2" },
      { week: 4, title: "Clock Module", topics: ["555 timer", "RC circuits"], unit: "Module 3: Clock" },
      { week: 5, title: "Registers", topics: ["D flip-flops", "State vectors"], unit: "Module 4" },
      { week: "6-7", title: "ALU", topics: ["Adders", "Two's complement"], unit: "Module 5" },
      { week: "8-9", title: "RAM", topics: ["Address decoding", "Read/write"], unit: "Module 6" },
      { week: "10-12", title: "Program Counter & Output", topics: ["Counters", "7-segment display"], unit: "Module 6" },
      { week: "13-14", title: "Control Logic", topics: ["Instruction set", "Control matrix", "Microcode"], unit: "Module 7" },
      { week: "15-16", title: "Programming", topics: ["Assembly", "Fibonacci", "Recurrence relations"], unit: "Module 7" },
      { week: "17-18", title: "Integration", topics: ["Full system test", "Debugging"], unit: "Integration" },
      { week: "19-20", title: "Exhibition", topics: ["Public demo", "Portfolio"], unit: "Exhibition" },
    ],
    learningObjectives: ["Build working 8-bit computer", "Encounter 5 STEM disciplines", "STEM Bridge Moments", "Collaborative debugging", "Public exhibition"],
    keyResources: ["Ben Eater (YouTube)", "Kit ~$65/student", "Breadboards, ICs, resistors, 555 timers"],
    teachingPhilosophy: ["Computer is a STEM artifact", "Transfer requires explicit bridging", "The computer is the assessment", "Debugging IS the learning"],
    thinkers: ["Anderson", "Papert", "Harel", "Kapur", "Kolb", "Perkins", "Salomon"], isNgAdaptation: false,
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getCoreCourses(): Course[] {
  return courses.filter((c) => !c.isNgAdaptation && c.slug !== "build-a-computer");
}

export function getNgAdaptations(): Course[] {
  return courses.filter((c) => c.isNgAdaptation);
}

export function getCoursesByStatus(status: Course["status"]): Course[] {
  return courses.filter((c) => c.status === status);
}

export function getCoursesByCategory(category: Course["category"]): Course[] {
  return courses.filter((c) => c.category === category);
}
