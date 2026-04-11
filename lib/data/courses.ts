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
    status: "in-development",
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
      { week: 1, title: "What Is Intelligence?", topics: ["Turing Test", "Chinese Room", "Symbolic AI vs. Connectionism", "Dartmouth 1956 to ChatGPT"], project: "Design Your Turing Test", unit: "Unit 1: Epistemology, History, Probability", coreQuestion: "Who decides what counts as intelligent?", quickRecall: ["What would it mean for a machine to 'truly' think?", "Name one thing the Turing Test cannot measure.", "What does 'intelligence' assume about the judge?"], careerConnections: ["AI Product Manager", "ML Ethics Researcher", "Policy Analyst"], trackVariations: { novice: "AI Audit — analyze a real AI system that affects your community", builder: "Naive Bayes from scratch with Python + NumPy only", architect: "Derive the MLE estimator for Gaussian distributions from scratch" }, criticalLens: "Freire's banking model of education mirrors rule-based AI." },
      { week: 2, title: "The Grammar of AI: Probability", topics: ["Bayes' theorem", "Random variables", "Monty Hall", "Base rate fallacy"], project: "Spam Classifier by Hand", unit: "Unit 1", coreQuestion: "Why does probability let us reason under uncertainty?", quickRecall: ["Write Bayes' theorem from memory. What does each term mean?", "Why do we use log probabilities in Naive Bayes?", "What does the 'naive' assumption mean — and when does it fail?"], careerConnections: ["Data Scientist", "Security Engineer", "NLP Engineer"] },
      { week: 3, title: "AI as Search", topics: ["BFS", "DFS", "A*", "State space", "Heuristics"], project: "Maze Solver", unit: "Unit 2: Search & Adversarial Play", coreQuestion: "How is intelligence framed as finding a path through a space of possibilities?", quickRecall: ["What does A* guarantee that BFS doesn't? When?", "What makes a heuristic 'admissible'?", "Name a real problem where BFS is the right choice over A*."], careerConnections: ["Robotics Engineer", "Game Developer", "Logistics/Routing Specialist"], trackVariations: { novice: "Interactive visual grid pathfinding", builder: "Implement all three: BFS, DFS, A*", architect: "Prove admissibility guarantee from scratch" } },
      { week: 4, title: "Games & Adversarial AI", topics: ["Minimax", "Alpha-beta pruning", "Game theory", "Zero-sum vs. cooperative"], project: "Unbeatable Tic-Tac-Toe", unit: "Unit 2", coreQuestion: "What assumptions does 'optimal play' make about your opponent — and about the world?", quickRecall: ["What does alpha-beta pruning guarantee about the result vs. minimax?", "What assumption does minimax make about your opponent?", "Name a real domain where minimax would fail — and why."], careerConnections: ["Game AI Developer", "Decision Systems Engineer", "Computational Economist"], trackVariations: { novice: "Scaffolded step-by-step minimax", builder: "Add alpha-beta pruning", architect: "Prove the time-complexity improvement mathematically" }, criticalLens: "When AI agents compete, who gets hurt? Autonomous weapons, recommendation algorithms." },
      { week: 5, title: "What Does It Mean to Learn?", topics: ["Loss functions", "Gradient descent", "Linear regression", "MSE loss"], project: "Rent Predictor", unit: "Unit 3: Machine Learning", coreQuestion: "What does it mean for a machine to learn?", quickRecall: ["Write the MSE loss function. What does each term mean?", "Why does the learning rate matter? What happens if it's too high?", "What is the difference between the loss and the gradient?"], careerConnections: ["ML Engineer", "Quantitative Analyst", "Data Scientist"], trackVariations: { novice: "Interactive gradient visualization", builder: "NumPy implementation from scratch", architect: "Prove convergence under strong convexity" }, criticalLens: "Whose neighborhoods get valued more? What does the model encode about society?" },
      { week: 6, title: "Classification + Decision Boundaries", topics: ["Logistic regression", "Sigmoid", "Precision/recall", "Confusion matrix"], project: "Admissions Classifier + bias audit", unit: "Unit 3", coreQuestion: "What does 'accurate' actually mean?", quickRecall: ["What is the difference between precision and recall?", "When would you choose high recall over high precision?", "How can a model be 95% accurate and still deeply harmful?"], careerConnections: ["AI Fairness Researcher", "Classification Engineer", "Responsible AI Lead"], criticalLens: "Accuracy is a lie when classes are imbalanced. Medical diagnosis, recidivism, hiring — what should we optimize for?" },
      { week: 7, title: "The Neuron: Biology to Math", topics: ["Perceptron", "Weights and bias", "Activation functions", "XOR problem"], project: "XOR Neural Net in NumPy", unit: "Unit 4: Neural Networks", coreQuestion: "Why can't one layer learn everything?", quickRecall: ["Why can't a single-layer network solve XOR?", "What does a ReLU activation do? Draw it.", "What does the universal approximation theorem say — and what does it NOT say?"], careerConnections: ["Deep Learning Engineer", "Research Scientist", "AI Software Engineer"], trackVariations: { novice: "Trace the network on paper", builder: "NumPy implementation", architect: "Prove the universal approximation theorem sketch" } },
      { week: 8, title: "Backpropagation: The Chain Rule", topics: ["Computational graphs", "Forward/backward pass", "Gradient accumulation", "Automatic differentiation"], project: "Handwritten Digit Recognizer (MNIST)", unit: "Unit 4", coreQuestion: "How does credit get assigned across layers?", quickRecall: ["Explain the chain rule applied to a 3-layer network without formulas.", "What is a 'vanishing gradient' — and which activation functions cause it?", "What does PyTorch's autograd actually do for you?"], careerConnections: ["Computer Vision Engineer", "ML Platform Engineer", "Research Scientist"], trackVariations: { novice: "Visual diagram tracing", builder: "NumPy full implementation", architect: "Build mini-autograd from scratch (like Karpathy's micrograd)" } },
      { week: 9, title: "Midterm Portfolio Exhibition", topics: ["Community showcase", "Peer feedback", "Critical AI panel discussion", "Final project design sprint"], unit: "Midpoint", coreQuestion: "What should AI never be allowed to decide?", criticalLens: "Critical AI Panel Discussion with guest practitioner from healthcare, education, or criminal justice tech." },
      { week: 10, title: "Learning Without Labels", topics: ["K-means clustering", "PCA", "Embeddings", "Curse of dimensionality"], project: "Cluster Your Playlist", unit: "Unit 5: Unsupervised + NLP", coreQuestion: "What patterns exist in data that no human named?", criticalLens: "The power and danger of unsupervised discovery." },
      { week: 11, title: "Natural Language Processing", topics: ["Tokenization", "TF-IDF", "word2vec", "Language as power"], project: "Sentiment Analyzer", unit: "Unit 5", coreQuestion: "How machines read — and what they miss.", criticalLens: "Whose language is 'standard'? AAVE, dialects, slang in NLP systems. Noble on bias in training data." },
      { week: 12, title: "Computer Vision", topics: ["CNNs", "Filters and pooling", "Feature maps", "Facial recognition bias"], project: "Community Image Classifier", unit: "Unit 6: Vision + Generative AI", coreQuestion: "What is the model actually looking at?", criticalLens: "Facial recognition + racial bias. Gender classification failures. Buolamwini's Gender Shades as required reading." },
      { week: 13, title: "Generative AI", topics: ["GANs", "VAEs", "Diffusion models", "Authorship and consent"], project: "Generate With Purpose", unit: "Unit 6", coreQuestion: "Where does generative AI actually come from?", criticalLens: "Who owns AI-generated art? Training data and consent. Displacement of creative workers." },
      { week: 14, title: "Reinforcement Learning", topics: ["Agents and environments", "Q-learning", "Reward hacking", "Alignment problem"], project: "Q-Learning Gridworld", unit: "Unit 7: RL + LLMs", coreQuestion: "Who defines the reward?", criticalLens: "Reward hacking. Goodhart's Law. The alignment problem as a political problem. Every reward function is a value judgment." },
      { week: 15, title: "Large Language Models", topics: ["Transformers", "Self-attention", "Hallucination", "Stochastic Parrots"], project: "Red-Team an LLM", unit: "Unit 7", coreQuestion: "How ChatGPT actually works — at the architecture level, not the PR level.", criticalLens: "Why LLMs confabulate. Epistemic authority without accountability. Required: Bender et al., 'Stochastic Parrots.'" },
      { week: 16, title: "AI Ethics & Governance", topics: ["Algorithmic fairness definitions", "Explainability", "EU AI Act", "Navigate vs. Transform"], project: "Final Project Studio Time", unit: "Unit 8", coreQuestion: "What will you uphold — and what will you transform?", criticalLens: "Fairness definitions conflict mathematically. Anderson's framework: navigate harmful systems without internalizing oppression." },
      { week: 17, title: "Final Exhibition — Day 1", topics: ["Community showcase", "Learning conferences", "Portfolio due"], unit: "Final" },
      { week: 18, title: "Final Exhibition — Day 2", topics: ["Remaining presentations", "Course co-evaluation", "Transfer pathways"], unit: "Finale", criticalLens: "Freire's dialogic education made real. The student teaches the teacher." },
    ],
    learningObjectives: ["Understand AI from first principles: probability, logic, linear algebra", "Build each major AI concept from scratch before using libraries", "Critically analyze who built AI systems, who benefits, and who is harmed", "Implement search algorithms, neural networks, and NLP pipelines", "Conduct a structured bias audit of a real deployed AI system", "Communicate technical AI concepts to non-technical audiences", "Develop a portfolio demonstrating deep understanding"],
    keyResources: ["No required textbook — all materials free", "Google Colab notebooks", "NumPy, scikit-learn, PyTorch", "Gender Shades (Buolamwini & Gebru)", "Stochastic Parrots (Bender et al.)", "Algorithms of Oppression (Noble)"],
    teachingPhilosophy: ["First Principles First — understand every layer before stacking them", "Choose Your Adventure — three tracks, diverge on projects", "Liberation Through Understanding — critical consciousness is the most advanced technical skill"],
    thinkers: ["Turing", "Buolamwini", "Noble", "Shannon", "Freire", "hooks", "Benjamin", "Ko"],
    isNgAdaptation: false,
    learningStrategies: [
      { name: "Trace Before You Run", description: "Before running any code, trace through it by hand on paper with 3 small inputs. Predict the output. Amy Ko's research: this is the single highest-leverage learning habit in CS." },
      { name: "Teach One Thing Weekly", description: "Explain one concept to a classmate, family member, or rubber duck every week. If you can't explain it plainly, you don't understand it yet. Teaching reveals the gaps that practice hides." },
      { name: "Reduce to 3 Elements", description: "When stuck on an algorithm, shrink the problem. n=3 instead of n=100. Draw it. The bug is almost always visible at small scale. Don't reach for debugging tools before reaching for paper." },
      { name: "Write Before You Search", description: "Before using ChatGPT or Stack Overflow, write your precise confusion: what you understand, what step breaks, what you've tried. That writing is the learning. The answer is secondary." },
      { name: "Read the Error, Don't Flee It", description: "Error messages are AI's way of pointing exactly at the problem. Read the full error. Find the line number. Read the surrounding code. 80% of bugs announce themselves clearly — if you look." },
      { name: "Discomfort Is Data", description: "Confusion doesn't mean you're behind — it means you're at the edge of your current model. Write down exactly what's confusing. That specificity is expertise in formation. Then bring it to class." },
    ],
    datasets: [
      { name: "ProPublica COMPAS", source: "ProPublica", url: "https://github.com/propublica/compas-analysis", useCase: "Recidivism prediction scores used in US courts. Foundational for bias auditing." },
      { name: "Census Income (UCI)", source: "UCI ML Repository", url: "https://archive.ics.uci.edu/dataset/2/adult", useCase: "Predict whether income >50K. Exposes class, race, and gender disparities in feature importance." },
      { name: "Bay Area Transit Data", source: "511.org", url: "https://511.org/open-data/transit", useCase: "BART and AC Transit ridership by station. Build graph-based recommendation or route optimizer." },
      { name: "Hate Speech (Davidson et al.)", source: "GitHub", url: "https://github.com/t-davidson/hate-speech-and-offensive-language", useCase: "Tweets labeled hate speech, offensive, or neither. Study labeling bias in training data." },
      { name: "Gender Shades Benchmark", source: "gendershades.org", url: "http://gendershades.org", useCase: "Joy Buolamwini's benchmark exposing intersectional bias in commercial facial analysis systems." },
      { name: "NLTK Brown Corpus", source: "NLTK", url: "https://www.nltk.org/book/ch02.html", useCase: "One million+ words from 500 English texts across 15 genres. Excellent for NLP and language analysis." },
    ],
    conceptMap: [
      { layer: "Foundation Layer", concepts: ["Probability + Statistics", "Bayes Theorem", "Maximum Likelihood", "Everything Else"] },
      { layer: "Search + Optimization", concepts: ["State Space Search", "BFS / DFS / A*", "Minimax", "Gradient Descent"] },
      { layer: "Learning", concepts: ["Loss Function", "Linear → Logistic", "Perceptron → MLP", "Backpropagation"] },
      { layer: "Representation", concepts: ["Unsupervised Learning", "K-Means / PCA", "Word Embeddings", "CNNs / Transformers"] },
      { layer: "Modern AI", concepts: ["Language Models", "Self-Attention", "Reinforcement Learning", "Alignment + Governance"] },
      { layer: "Critical Thread", concepts: ["Who builds it?", "Who benefits?", "Who is harmed?", "What should change?"] },
    ],
    badges: [
      { name: "AI Explorer", threshold: "Complete 3+ units", icon: "🌱" },
      { name: "AI Builder", threshold: "Complete 6+ units", icon: "🔨" },
      { name: "AI Architect", threshold: "Complete all 9 units", icon: "🔬" },
    ],
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
      { week: 1, title: "What Is Learning From Data?", topics: ["ML frame", "MLE intro", "Gaussian MLE"], project: "Fit a Gaussian by Hand", unit: "Unit 1: Statistical Foundations", coreQuestion: "You have 10,000 cat photos and 10,000 dog photos. How do you write a program that identifies a new photo — without writing any rules?" },
      { week: 2, title: "Supervised Learning Setup", topics: ["Train/test", "Generalization", "Loss as probabilistic choice"], project: "Loss Landscape Explorer", unit: "Unit 1", criticalLens: "Whose data was used to train a real model you interact with daily?" },
      { week: 3, title: "Linear Regression", topics: ["MSE", "Gradient descent", "Normal equations", "SGD"], project: "Rent Predictor", unit: "Unit 2: Linear Methods", criticalLens: "What variables does the model rely on? What does it encode about whose neighborhoods matter?", trackVariations: { novice: "Interactive gradient visualizer", builder: "Full NumPy SGD implementation", architect: "Prove convergence for L-smooth functions" } },
      { week: 4, title: "Regularization + Logistic Regression", topics: ["Ridge/Lasso", "Bias-variance", "Sigmoid", "Cross-entropy"], project: "Hiring classifier audit", unit: "Unit 2", criticalLens: "Where false positives vs. false negatives hit harder — and who bears the cost." },
      { week: 5, title: "Naive Bayes + Feature Engineering", topics: ["Generative vs. discriminative", "Text classification"], project: "Spam/Sentiment Classifier", unit: "Unit 2", criticalLens: "What gets measured, and why, encodes power. Test on text from your own cultural context." },
      { week: 6, title: "Decision Trees + Ensembles", topics: ["Information gain", "CART", "Random forests", "Boosting"], project: "Recidivism Audit (COMPAS)", unit: "Unit 2", criticalLens: "Why do different fairness definitions conflict mathematically? What should policy do?" },
      { week: 7, title: "K-Means & Clustering", topics: ["Lloyd's algorithm", "GMM", "EM algorithm"], project: "Market Segmentation", unit: "Unit 3: Unsupervised", criticalLens: "When does 'segment' become 'discriminate'?", trackVariations: { novice: "Visual clustering", builder: "Implement EM algorithm", architect: "Derive ELBO" } },
      { week: 8, title: "PCA + Word Embeddings", topics: ["Dimensionality reduction", "SVD", "word2vec bias"], project: "Embed Your Community", unit: "Unit 3", criticalLens: "Who decided what relationship was 'analogous'? The bias embedded in word vectors." },
      { week: 9, title: "Midpoint Exhibition", topics: ["Portfolio showcase", "Guest panel", "Final project pitch"], unit: "Midpoint", coreQuestion: "What should ML never be allowed to decide?", criticalLens: "Practitioner from healthcare, criminal justice, or hiring technology. Structured Socratic discussion." },
      { week: 10, title: "Neural Networks", topics: ["MLP", "Activations", "Backpropagation"], project: "MLP on Tabular Data", unit: "Unit 4: Deep Learning", trackVariations: { novice: "Trace visually", builder: "NumPy implementation", architect: "Implement autograd from scratch" } },
      { week: 11, title: "CNNs", topics: ["Filters/pooling", "Batch norm", "Grad-CAM"], project: "Interpret What the Model Sees", unit: "Unit 4", criticalLens: "Buolamwini: Gender Shades paper. What is the model paying attention to?" },
      { week: 12, title: "Transformers", topics: ["RNNs", "LSTMs", "Self-attention", "Transfer learning"], project: "Fine-Tune for Your Use Case", unit: "Unit 4", criticalLens: "Who built that pre-trained model, on whose data, for whose benefit?" },
      { week: 13, title: "Bayesian ML", topics: ["Priors/posteriors", "Calibration"], project: "Is Your Model Calibrated?", unit: "Unit 5: Advanced", criticalLens: "What happens when an overconfident model informs a doctor's decision?" },
      { week: 14, title: "Algorithmic Fairness", topics: ["Impossibility theorem", "Adversarial ML"], project: "Attack Your Own Model", unit: "Unit 5", criticalLens: "Demographic parity, equalized odds, predictive parity — the impossibility theorem proves they can't all hold. This is a political choice." },
      { week: 15, title: "Reinforcement Learning", topics: ["MDPs", "Q-learning", "RLHF"], project: "Design a Reward Function", unit: "Unit 5", criticalLens: "Who are the annotators? What are they paid? Whose judgments define 'correct' in supervised learning?" },
      { week: 16, title: "ML in the Wild", topics: ["Production ML", "Distribution shift"], project: "Final Project Studio", unit: "Final", criticalLens: "As a future ML practitioner, you will be asked to build things that harm people. How will you respond?" },
      { week: 17, title: "Final Exhibition — Day 1", topics: ["Showcase", "Conferences"], unit: "Final" },
      { week: 18, title: "Final Exhibition — Day 2", topics: ["Presentations", "Co-evaluation"], unit: "Finale", criticalLens: "You evaluate the course. Your feedback co-creates the next version. Freire's dialogic education." },
    ],
    learningObjectives: ["Derive every major ML algorithm from first principles", "Implement from scratch before libraries", "Understand loss, gradient descent, bias-variance, MLE as unifying themes", "Evaluate with precision, recall, AUC, calibration, fairness metrics", "Conduct structured bias audits", "Communicate uncertainty", "Build a portfolio of deep engagement"],
    keyResources: ["No required textbook", "NumPy, Pandas, scikit-learn, PyTorch", "Critically Conscious Computing (Ko)", "Race After Technology (Benjamin)", "COMPAS dataset"],
    teachingPhilosophy: ["Root Before Branch", "Choose Your Depth", "Uncertainty Is the Lesson", "No Portfolio, No Grade"],
    thinkers: ["Ko", "Benjamin", "Obermeyer", "Freire", "Anderson"],
    isNgAdaptation: false,
    learningStrategies: [
      { name: "Derive Before You Cite", description: "Before writing θ := θ - α∇J, derive it. What is J? Why do we subtract? What does the gradient point toward? Derivation is the deepest form of understanding." },
      { name: "Implement Before Import", description: "You cannot call sklearn.LinearRegression() until your NumPy version passes unit tests. This rule is the core of the course. Every abstraction is earned, not given." },
      { name: "Plot Everything", description: "Loss curves. Decision boundaries. Confusion matrices. Calibration plots. In ML, seeing IS understanding. If you haven't plotted it, you haven't understood it yet." },
      { name: "Sanity Check with n=5", description: "Before running on 10,000 rows, run on 5. Hand-verify every output. Does the loss go down? Are the shapes right? Bugs in ML fail silently — you have to check." },
      { name: "Speak the Math Aloud", description: "Explain gradient descent out loud without writing a formula. If you can't, you don't understand it yet. Verbalization catches gaps that code hides." },
      { name: "Ask Who Bears the Cost", description: "Every time a model 'works,' ask: who was in the training set, and who wasn't? What does high accuracy hide? This question is not optional — it is part of the assignment." },
    ],
    datasets: [
      { name: "ProPublica COMPAS", source: "ProPublica", url: "https://github.com/propublica/compas-analysis", useCase: "Recidivism prediction scores. Foundational for bias auditing, precision/recall analysis, and fairness impossibility theorem work." },
      { name: "Census Income (Adult)", source: "UCI ML Repository", url: "https://archive.ics.uci.edu/dataset/2/adult", useCase: "Binary classification benchmark. Rich in demographic features for fairness analysis across class, gender, race." },
      { name: "ACS PUMS (FolkTables)", source: "Census Bureau", url: "https://github.com/socialfoundations/folktables", useCase: "American Community Survey 50-state microdata. Much richer than Adult for intersectional analysis." },
      { name: "Spotify Tracks Dataset", source: "HuggingFace", url: "https://huggingface.co/datasets/maharshipandya/spotify-tracks-dataset", useCase: "~600K tracks with audio features. Excellent for clustering, regression, and recommendation systems." },
      { name: "Hate Speech + Offensive Language", source: "Davidson et al.", url: "https://github.com/t-davidson/hate-speech-and-offensive-language", useCase: "25K tweets labeled across three categories. Study how annotator demographics affect labeling." },
      { name: "MIMIC-III (Clinical)", source: "PhysioNet", url: "https://physionet.org/content/mimiciii/1.4/", useCase: "De-identified ICU health records from 46K patients. Discussing clinical AI bias and Obermeyer et al. (2019)." },
    ],
    conceptMap: [
      { layer: "The Root", concepts: ["Loss Function J(θ)", "MLE Derivation", "Gradient Descent", "Every Supervised Model"] },
      { layer: "Linear Methods", concepts: ["Linear Regression", "Logistic Regression", "Regularization", "SVMs / Decision Trees"] },
      { layer: "Deep Learning", concepts: ["Perceptron → MLP", "Backpropagation", "CNNs / Transformers", "Transfer Learning"] },
      { layer: "Unsupervised", concepts: ["K-Means / GMM", "EM Algorithm", "PCA / Embeddings", "Representation Bias"] },
      { layer: "Evaluation", concepts: ["Bias-Variance Tradeoff", "Cross-Validation", "Calibration", "Fairness Metrics"] },
      { layer: "Critical Thread", concepts: ["What data was used?", "Who is in the sample?", "What does it encode?", "Who bears the error?"] },
    ],
    badges: [
      { name: "Data Explorer", threshold: "Complete 3+ units", icon: "🌱" },
      { name: "ML Implementer", threshold: "Complete 6+ units", icon: "🔨" },
      { name: "ML Theorist", threshold: "Complete all 9 units", icon: "🔬" },
    ],
  },

  // ============================================================
  // COURSE 03: CS 210 — Data Structures & Algorithms
  // ============================================================
  {
    slug: "cs210-dsa",
    courseNumber: "CS 210",
    title: "Data Structures & Algorithms",
    shortDescription: "Every data structure is an argument about the world. Every algorithm is a strategy, a tradeoff, a value judgment. We implement every structure before using the library version. No LeetCode grind — deep projects that transfer.",
    status: "in-development",
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
      { week: "1-2", title: "Arrays & Dynamic Arrays", topics: ["Contiguous memory", "O(1) access", "Amortized push"], project: "CSV Spreadsheet Engine", unit: "DS-01", coreQuestion: "You need to find one item in a list of a million. How long does that take — and does the answer change if the list is sorted?", quickRecall: ["Why is array access O(1)? What mathematical property enables this?", "What is amortized O(1)? Give the intuition without a formula.", "When would a linked list beat a dynamic array?"], careerConnections: ["Database Engines", "NumPy / Pandas", "Image Processing"], trackVariations: { novice: "Python lists. Build all features. Reflect on what happens at scale.", builder: "DynamicArray class from scratch. Match Python list amortized behavior.", architect: "Prove amortized O(1) via potential method. When does tripling beat doubling?" }, criticalLens: "Whose time counts? Big-O hides constants. On whose hardware is 'fast' calibrated?" },
      { week: "2-3", title: "Linked Lists", topics: ["Singly/doubly/circular", "Floyd cycle detection"], project: "Music Playlist System", unit: "DS-02", quickRecall: ["Why is head insertion O(1) but middle insertion O(n)?", "Explain Floyd's cycle detection without looking it up.", "When would you choose doubly vs. singly linked?"], careerConnections: ["Browser History", "OS Schedulers", "LRU Cache"], trackVariations: { novice: "Python Node class. All ops. Document why each pointer direction was chosen.", builder: "Singly + doubly. LRU cache (linked list + hashmap). Floyd cycle detection.", architect: "Prove Floyd's algorithm. Implement XOR linked list. Analyze cache locality." }, criticalLens: "What Spotify actually uses — production vs. classroom gap. What does the abstraction hide?" },
      { week: "3-4", title: "Stacks & Queues", topics: ["LIFO/FIFO", "Command pattern", "Priority queues"], project: "Text Editor + Hospital Triage", unit: "DS-03", quickRecall: ["What makes LIFO right for undo/redo? Explain the invariant.", "Describe the shunting-yard algorithm in plain English.", "How do two stacks simulate a queue in amortized O(1)?"], careerConnections: ["Compilers", "OS Task Scheduler", "Message Brokers"], trackVariations: { novice: "Python lists. Both projects. What real systems near you use queues?", builder: "Stack via linked list, queue via circular buffer. Monotonic stack problems.", architect: "Prove queue via two stacks in amortized O(1). Van Emde Boas priority queue." }, criticalLens: "Queues encode fairness assumptions. Who designed this queue — and for whose workflow?" },
      { week: "4-5", title: "Hash Tables", topics: ["Hash functions", "Chaining vs. open addressing", "Load factors"], project: "Word Frequency Analyzer", unit: "DS-04", quickRecall: ["Why is a good hash function critical? What breaks with a bad one?", "When does O(1) average become O(n) worst case?", "What load factor threshold should trigger a resize? Why?"], careerConnections: ["Database Indexes", "Python Dict", "Blockchain"], trackVariations: { novice: "HashMap with chaining. Analyze your favorite artist's lyrics.", builder: "Both collision strategies. Consistent hash ring for distributed caching.", architect: "Prove expected O(1) under uniform hashing. Study SHA-256. Perfect hashing." }, criticalLens: "Search engines are hash tables at scale. Safiya Noble on what content stays invisible." },
      { week: "6-7", title: "Binary Trees & BSTs", topics: ["BST invariant", "Traversals", "AVL rotations"], project: "File System Navigator", unit: "DS-05", trackVariations: { novice: "BST + all traversals. Build file explorer. Draw every tree on paper first.", builder: "BST worst case → AVL with rotations. Compare heights empirically.", architect: "Prove AVL maintains balance. Study red-black trees. Implement B-tree." }, criticalLens: "File systems as power — what determines the hierarchy? Who designed the folder structure you navigate daily?" },
      { week: "7-8", title: "Heaps", topics: ["Binary heap in array", "Heapsort", "Decrease-key"], project: "ER Triage Simulator", unit: "DS-06", trackVariations: { novice: "Python heapq. Build simulator. Reflect on algorithmically prioritizing human life.", builder: "Binary heap from scratch. Decrease-key. Compare heapsort vs. quicksort.", architect: "Prove heap construction O(n). Fibonacci heaps. Why Dijkstra needs decrease-key." }, criticalLens: "Clinical AI bias — Obermeyer et al. (2019): clinical AI encoded racial bias in severity scores. What would you audit?" },
      { week: "9-10", title: "Graphs", topics: ["BFS", "DFS", "Dijkstra", "Bellman-Ford", "Topological sort"], project: "Campus Navigator", unit: "DS-07/08", trackVariations: { novice: "Adjacency list, BFS, DFS. Map your campus. Which buildings are most 'central'?", builder: "Dijkstra + Bellman-Ford + topological sort. Dense vs. sparse runtime comparison.", architect: "Prove Dijkstra correctness. Network flow. Social network surveillance analysis." }, criticalLens: "Power grids, roads — all graphs. Whose neighborhoods have fewer edges in every infrastructure graph?" },
      { week: "11-12", title: "Sorting", topics: ["Bubble", "Selection", "Insertion", "Merge", "Quick", "Counting", "Lower bound"], project: "Sorting Visualizer", unit: "ALGO-01", trackVariations: { novice: "Bubble, selection, merge. Build visualizer. Write recommendation guide in plain language.", builder: "All six sorts. Implement Timsort. Document every performance anomaly on edge cases.", architect: "Prove Ω(n log n) lower bound. Derive quicksort average-case. Study introsort." }, criticalLens: "Credit scores sort humans by risk. What data goes in? What should never be sorted algorithmically?" },
      { week: "13-14", title: "Dynamic Programming", topics: ["Optimal substructure", "Memoization", "Edit distance"], project: "Spell Checker + DNA Aligner", unit: "ALGO-02", trackVariations: { novice: "Fibonacci memo + 3 classic problems. Spell checker. Document dictionary assumptions.", builder: "5+ DP problems. Memo vs. tabulation. DNA aligner. Optimize space to O(n).", architect: "Prove optimal substructure. Approximation algorithms where DP is too slow. DP on trees." }, criticalLens: "Edit distance defines 'closeness.' The dictionary defines 'correct.' Both are design choices. Whose names get 'corrected'?" },
      { week: "15-16", title: "Capstone Studio", topics: ["System design", "Integration", "Profiling"], project: "Capstone", criticalLens: "Every O(1) insert is an O(n) access somewhere. What did you optimize for — and for whom?" },
      { week: "17-18", title: "Final Exhibition", topics: ["Portfolio", "Self-evaluation", "Co-evaluation"], criticalLens: "Every structure was invented to solve a human problem. What problem would you invent a structure to solve?" },
    ],
    learningObjectives: ["Implement every structure from scratch", "Derive time complexity", "Build 12 mini projects", "Understand critical history of computation", "Profile algorithms on real data", "Portfolio-based assessment"],
    keyResources: ["OpenDSA", "Princeton Algorithms", "Visualgo.net", "PythonTutor.com", "CLRS"],
    teachingPhilosophy: ["Build First, Abstract Second", "Each Structure Is a Story", "No LeetCode Grind Culture"],
    thinkers: ["Knuth", "Dijkstra", "Noble", "Tarjan", "Ko", "Anderson", "Sedgewick"],
    isNgAdaptation: false,
    learningStrategies: [
      { name: "Draw Before You Code", description: "For every new structure, draw it on paper with 4–5 elements before touching a keyboard. Insert, delete, and search by hand. The diagram reveals what the code hides." },
      { name: "Trace Every Operation", description: "Amy Ko's 'read before write': trace through an existing implementation line by line before writing your own. Predict what each line does. Confusion here is data — write it down." },
      { name: "Derive Complexity, Don't Memorize", description: "Don't memorize 'BST is O(log n).' Derive it: at each level, you eliminate half the tree. If you can't derive it, you can't apply it. Derivation transfers. Memorization doesn't." },
      { name: "Build the Library Version Last", description: "You cannot use java.util.LinkedList until you've built one. You cannot call Collections.sort() until you can explain why it's O(n log n). Every abstraction is earned." },
      { name: "Find the Real-World Analog", description: "Every structure is a metaphor. A queue is a checkout line. A heap is a hospital triage system. A graph is a road network. If you can't name the real-world analog, you don't understand the structure." },
      { name: "Ask Who Designed This", description: "Every structure was invented to solve a specific problem, by specific people, for specific use cases. Knowing the history makes the structure real — not an arbitrary fact, but a decision someone made." },
    ],
    datasets: [
      { name: "OpenStreetMap (Bay Area)", source: "OpenStreetMap", url: "https://www.openstreetmap.org", useCase: "Real road network graph for campus navigation, Dijkstra, and MST projects." },
      { name: "Project Gutenberg", source: "Gutenberg.org", url: "https://www.gutenberg.org/cache/epub/feeds/", useCase: "50,000+ free books. Excellent for trie autocomplete, hash table word frequency, and spell-checking projects." },
      { name: "UCSC Genome Browser", source: "UCSC", url: "https://genome.ucsc.edu", useCase: "DNA sequences for the dynamic programming alignment project. Real genomic data." },
      { name: "Wikipedia Graph Dump", source: "Wikimedia", url: "https://dumps.wikimedia.org", useCase: "Hyperlink network as a directed graph. BFS finds shortest path between any two topics." },
      { name: "IPEDS (College Data)", source: "NCES", url: "https://nces.ed.gov/ipeds/use-the-data", useCase: "Enrollment, completion, and cost data for every US college. Sort, search, and analyze." },
      { name: "Spotify Million Playlist", source: "AICrowd", url: "https://www.aicrowd.com/challenges/spotify-million-playlist-dataset-challenge", useCase: "Graph-structure playlist data. Model songs as nodes, co-occurrence as edges." },
    ],
    conceptMap: [
      { layer: "Memory Foundation", concepts: ["RAM Model", "Big-O", "Arrays + Dynamic Arrays", "Amortized Analysis"] },
      { layer: "Linear Structures", concepts: ["Arrays", "Linked Lists", "Stacks + Queues", "Hash Tables → O(1)"] },
      { layer: "Tree Hierarchy", concepts: ["Binary Trees → BST", "AVL / Red-Black", "Heaps + Tries", "O(log n) Guaranteed"] },
      { layer: "Graph Theory", concepts: ["Graphs → BFS / DFS", "Dijkstra + MST", "Topological Sort", "Everything Is a Graph"] },
      { layer: "Algorithm Design", concepts: ["Brute Force", "Greedy", "Divide + Conquer", "Dynamic Programming → Impossibility Bounds"] },
      { layer: "Critical Thread", concepts: ["Who designed this?", "What is optimized?", "For whose use case?", "What does it encode?"] },
    ],
    badges: [
      { name: "Applied Engineer", threshold: "Complete 4+ units", icon: "🌱" },
      { name: "Systems Builder", threshold: "Complete 8+ units", icon: "🔨" },
      { name: "Algorithm Architect", threshold: "Complete all 12 units", icon: "🔬" },
    ],
    complexityTable: [
      { structure: "Dynamic Array", access: "O(1)", search: "O(n)", insert: "O(n) / O(1) amortized push", delete: "O(n)", space: "O(n)" },
      { structure: "Linked List", access: "O(n)", search: "O(n)", insert: "O(1) head / O(n) mid", delete: "O(1) head / O(n) mid", space: "O(n)" },
      { structure: "Stack", access: "O(n)", search: "O(n)", insert: "O(1) push", delete: "O(1) pop", space: "O(n)" },
      { structure: "Queue", access: "O(n)", search: "O(n)", insert: "O(1) enqueue", delete: "O(1) dequeue", space: "O(n)" },
      { structure: "Hash Table", access: "O(1) avg / O(n) worst", search: "O(1) avg / O(n) worst", insert: "O(1) avg", delete: "O(1) avg", space: "O(n)" },
      { structure: "BST", access: "O(log n) avg / O(n) worst", search: "O(log n) avg", insert: "O(log n) avg", delete: "O(log n) avg", space: "O(n)" },
      { structure: "AVL Tree", access: "O(log n)", search: "O(log n)", insert: "O(log n)", delete: "O(log n)", space: "O(n)" },
      { structure: "Binary Heap", access: "O(n)", search: "O(n)", insert: "O(log n)", delete: "O(log n) extract-min", space: "O(n)" },
      { structure: "Trie", access: "O(m)", search: "O(m)", insert: "O(m)", delete: "O(m)", space: "O(alphabet × m × n)" },
    ],
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
    status: "in-development",
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
    status: "in-development",
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
