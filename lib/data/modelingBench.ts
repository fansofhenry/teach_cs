// Modeling Bench — 3-paper research program with Prof. Jeff Anderson
// (Foothill College). Henry Fan principal author; Jeff mentor / second author.
// Anchored to Jeff's actual published work and "under development" projects in
// the Math 2BL Spring 2026 deliverables doc.

export interface MentorAnchor {
  anchor: string;
  source: string;
  extension: string;
}

export interface PaperKanban {
  backlog: string[];
  inProgress: string[];
  inReview: string[];
  done: string[];
}

export interface ExecutionStep {
  week: string;
  body: string;
}

export interface BenchPaper {
  id: "P1" | "P2" | "P3";
  number: string;          // "01" / "02" / "03"
  status: string;          // e.g. "Drafting"
  workingTitle: string;
  shortTitle: string;
  tags: string[];
  targetVenue: string;
  abstract: string;
  researchQuestions: { id: string; q: string }[];
  methodology: string;
  mathAndCS: string;
  executionPlan: ExecutionStep[];
  risks: { name: string; body: string }[];
  publishableLine: { mediocre: string; publishable: string };
  moneyFigure: string;
  kanban: PaperKanban;
}

export interface WorkflowDay {
  day: string;
  block: string;
  hours: string;
  bullets: string[];
}

export interface VideoPlan {
  paperId: "P1" | "P2" | "P3";
  paperShort: string;
  coreInsight: string;
  tools: string[];
  animations: string[];
}

export interface BenchTemplate {
  filename: string;
  title: string;
  description: string;
  href: string;
}

// ============================================================
// MENTOR ANCHORS
// ============================================================

export const mentorAnchors: MentorAnchor[] = [
  {
    anchor: "Make Eigenvalues Resonate (MER)",
    source:
      'Anderson (2018), PRIMUS, doi.org/10.1080/10511970.2018.1484400. Math 2BL S26 deliverables doc explicitly states: "Project To-Do List: Under development (maybe you can help me develop this in spring 2026)?"',
    extension:
      "Paper 01 — open-hardware kit + computer-vision tracking + 3-DOF extension.",
  },
  {
    anchor: "Neural Networks Towards Machine Learning",
    source:
      'Math 2BL S26 deliverables doc, p.14: "Underdevelopment. Come back later." Project does not yet exist as either curriculum or paper.',
    extension:
      "Paper 02 — build the missing project from scratch with an SVD-first lens, validated against USPS digits.",
  },
  {
    anchor: "LANA + Anti-Racist Learner-Centered Objectives",
    source:
      "Anderson (2024), PRIMUS, doi.org/10.1080/10511970.2024.2369984; Anderson (2024) blog post on five anti-racist learner-centered objectives.",
    extension:
      "Paper 03 — design and evaluate an AI modeling co-tutor scoped to Jeff's 8-step modeling process and audited against his anti-racist objectives.",
  },
];

// ============================================================
// JEFF'S VALUES (the lens for every draft)
// ============================================================

export const jeffsValues = [
  {
    name: "Hands-on verification",
    body:
      "Every claim must be checkable by a student at a kitchen table. If a student cannot verify it without a teacher, it doesn't ship.",
  },
  {
    name: "Open access",
    body:
      "Curriculum, code, hardware specs, and data should be free to remix. No paywalled supplements.",
  },
  {
    name: "Transferable skills over content coverage",
    body:
      '"I teach students how to learn, and I do it using linear algebra." Frame contributions in those terms.',
  },
  {
    name: "Anti-racist, learner-centered framing",
    body:
      "Jeff has five published learner-centered objectives. Every paper should make explicit which objective it serves.",
  },
  {
    name: 'The "$25B eigenvector" tone',
    body:
      "Jeff loves papers that make abstract LA concretely consequential — the way Bryan & Leise framed PageRank. Match that storytelling register.",
  },
  {
    name: "The 8-step modeling process",
    body:
      "Find → mathematize → state ideal model → solve → analyze → verify → transfer → iterate. Use these section labels in drafts so Jeff can review fluently.",
  },
];

// ============================================================
// THE THREE PAPERS
// ============================================================

export const benchPapers: BenchPaper[] = [
  {
    id: "P1",
    number: "01",
    status: "Drafting",
    workingTitle:
      "MER 2.0 — An Open-Hardware, Computer-Vision Lab Kit for Coupled-Oscillator Modeling in Lower-Division Linear Algebra",
    shortTitle: "MER 2.0",
    tags: ["Hardware", "Curriculum", "PRIMUS"],
    targetVenue: "PRIMUS",
    abstract:
      "[DRAFT — pilot data section marked as forthcoming.] Anderson (2018) introduced the Make Eigenvalues Resonate (MER) project as a hands-on bridge from introductory linear algebra to vibrations analysis using a spring-coupled pair of pendula. Six years later, the project still depends on ad-hoc hardware and bespoke video analysis, which limits adoption outside Anderson's own classroom. We present MER 2.0: a fully reproducible, sub-$80 hardware bill of materials, an open-source OpenCV tracking pipeline that runs from any phone-recorded video, and a three-mass extension that lets students see — and verify by measurement — the eigenstructure of a system with multiple natural frequencies. A single-section pilot in Math 2BL at Foothill College is planned for spring 2026; pilot results (kit assembly, eigenvalue-vs-measurement agreement, and self-reported gains against Anderson's five anti-racist learner-centered objectives) will be reported in the full draft. We argue that low-cost reproducible hardware is the binding constraint on the spread of modeling-rich linear algebra labs, and offer MER 2.0 as a template for hardening other projects in the Math 2BL family.",
    researchQuestions: [
      {
        id: "RQ1",
        q:
          "Can a sub-$80 BOM reproduce — within tolerable error — the same eigenvalue-vs-measurement comparisons that the original MER apparatus achieved?",
      },
      {
        id: "RQ2",
        q:
          "Does adding a third mass (and therefore a third visible eigenmode) qualitatively improve students' intuition that eigenvalues are physical things, not just symbols?",
      },
      {
        id: "RQ3",
        q:
          "What is the smallest hardware + software footprint that lets a community-college student verify their own model without a teacher present?",
      },
    ],
    methodology:
      "Hybrid (engineering + classroom). (i) Design and bench-test a v2 hardware kit. (ii) Build the OpenCV pipeline as a single Python script + a Colab notebook with zero local install. (iii) Derive the 2-mass and 3-mass equations of motion, diagonalize, and validate predictions against tracked motion. (iv) Run a single-section pilot in Math 2BL Spring 2026 with pre/post survey on Anderson's learner-centered objectives. (v) Publish kit, code, and curriculum under CC-BY + MIT.",
    mathAndCS:
      "Eigenvalue/eigenvector decomposition; small-angle linearization; coupled ODEs; OpenCV (BGS, optical flow, or color-blob tracking); basic statistics (RMSE, paired t-test); LaTeX.",
    executionPlan: [
      {
        week: "Wk 1–2",
        body:
          "Reread Anderson (2018) end-to-end. Recreate the original 2-mass derivation by hand. Annotate every figure.",
      },
      {
        week: "Wk 3–4",
        body:
          "Bench prototype: dowel + fishing line + neoprene springs + 3D-printed mass holders. Phone-camera recording on a tripod against a known scale. Cost ledger updated.",
      },
      {
        week: "Wk 5–6",
        body:
          "OpenCV pipeline. Single Python script that ingests an .mp4 and outputs CSV of (t, x1, x2, x3) plus a fitted-frequency JSON. Colab port.",
      },
      {
        week: "Wk 7",
        body:
          "Derive 3-mass case symbolically (SymPy). Diagonalize. Compare to measured frequencies. Iterate hardware until RMSE < 5%.",
      },
      {
        week: "Wk 8",
        body:
          "Lock the BOM. Photograph the kit. Write the curriculum sheet (student-facing 8-step modeling worksheet).",
      },
      {
        week: "Wk 9",
        body:
          "Pilot in one Math 2BL section. Pre/post survey. Collect at least one student-built kit photo per group.",
      },
      {
        week: "Wk 10",
        body:
          "Draft v1 of paper following PRIMUS structure (Motivation → Theory → Activity → Student Work → Reflection).",
      },
      { week: "Wk 11", body: "Mentor-review pass with Jeff. Revisions." },
      { week: "Wk 12", body: "Submit to PRIMUS." },
    ],
    risks: [
      {
        name: "Hardware drift",
        body:
          "Cheap springs have nonlinear and temperature-sensitive constants — RMSE may explode. Mitigation: characterize each spring before assembly; report uncertainty bounds.",
      },
      {
        name: "Tracking failures",
        body:
          "Phone video at 30 fps may alias the higher modes. Mitigation: 60 fps minimum; verify Nyquist at design time.",
      },
      {
        name: "IRB / consent",
        body:
          "Pre/post survey of students requires Foothill IRB exemption. Start the paperwork in Wk 1, not Wk 8.",
      },
      {
        name: "Scope creep",
        body:
          "Resist the urge to also rewrite the LANA paper. Three-mass case is the ceiling.",
      },
    ],
    publishableLine: {
      mediocre:
        "Here is a cheaper version of MER, and students liked it.",
      publishable:
        "Here is the smallest verifiable footprint at which a student can check eigenvalue theory against the physical world without a teacher; here is the data; here is the BOM you can buy from Amazon today.",
    },
    moneyFigure:
      "Three-mass system phase-space animation overlaid with predicted vs. measured trajectories — same plot, different colors, RMSE annotated.",
    kanban: {
      backlog: [
        "Hardware BOM v0",
        "OpenCV pipeline v0",
        "Wk 1 reread",
        "IRB exemption form",
      ],
      inProgress: [],
      inReview: [],
      done: [],
    },
  },
  {
    id: "P2",
    number: "02",
    status: "Drafting",
    workingTitle:
      "From Matrices to Networks — A Linear-Algebra-First, Hands-On Introduction to Neural Networks for Community College Students",
    shortTitle: "Matrices → Networks",
    tags: ["Curriculum", "Empirical", "PRIMUS"],
    targetVenue: "PRIMUS",
    abstract:
      "[DRAFT — artifact and pilot sections marked as forthcoming.] The Math 2BL curriculum at Foothill College lists a 'Neural Networks Towards Machine Learning' project that has been marked under development for several years. We propose the first complete version of this project. Rather than treating neural networks as a separate paradigm bolted onto a linear algebra course, we frame a single-hidden-layer network as a sequence of matrix operations whose learned weight matrices have geometrically interpretable singular values. Students train a network on the USPS handwritten digit dataset, then perform an SVD on each weight matrix and visualize the top singular vectors as eigen-strokes that the network has learned to detect. We argue this inversion — train first, decompose second — gives community college students an honest, mechanistic account of what a neural network is doing without requiring multivariable calculus. The laboratory worksheet, Colab notebook, and eight-step modeling rubric are under development; a small pilot study of student conceptual gains is planned for a Math 2BL section and will be reported in the full draft once the activity is stable.",
    researchQuestions: [
      {
        id: "RQ1",
        q:
          "Can a single-hidden-layer NN trained on USPS digits be unpacked using only Math 2B-level linear algebra (SVD, eigen-decomposition, basis change)?",
      },
      {
        id: "RQ2",
        q:
          "Do students who follow the train-then-decompose path develop more correct mental models of 'what the network learned' than students who follow a calculus-first backprop path?",
      },
      {
        id: "RQ3",
        q:
          "What is the minimum-viable hands-on activity that gives a community college student a mechanistically honest first encounter with a neural network?",
      },
    ],
    methodology:
      "Hybrid. (i) Build the activity end-to-end as a Colab notebook (NumPy only — no PyTorch/TensorFlow for v1, to keep the linear algebra unobstructed). (ii) Train on USPS, achieve a baseline accuracy >90%. (iii) Compute and visualize the SVD of W₁ as 16×16 grayscale eigen-strokes. (iv) Build a paired worksheet that walks a student through the modeling process using Anderson's 8 steps. (v) Pilot with 6–10 Math 2BL students; compare against a control reading group that does the standard backprop tutorial. (vi) Score conceptual gains with a custom 10-item instrument we develop and pilot.",
    mathAndCS:
      "SVD, eigenvalue/eigenvector, basis change, matrix-vector products as linear maps, gradient descent at the level of 'minimize loss by walking downhill,' NumPy, Colab, basic data viz (matplotlib). Critically, no chain rule prerequisite.",
    executionPlan: [
      {
        week: "Wk 1–2",
        body:
          "Read Strang Linear Algebra and Learning from Data §I.8 + Nielsen Ch. 1–3. Side-by-side notes on which steps require calculus.",
      },
      {
        week: "Wk 3",
        body:
          "Build the NumPy-only training loop. Achieve >90% USPS test accuracy.",
      },
      {
        week: "Wk 4",
        body:
          "Compute SVD of trained W₁. Visualize top-16 left singular vectors as 16×16 images. Confirm they look like strokes/curves, not noise.",
      },
      {
        week: "Wk 5",
        body:
          "Draft the 8-step modeling worksheet. Each step maps to a Math 2B concept.",
      },
      {
        week: "Wk 6",
        body:
          "Build the conceptual instrument (10 items, mix of multiple-choice and short-answer). Pilot it on yourself + 2 friends.",
      },
      { week: "Wk 7–8", body: "Run the pilot in Jeff's class. Collect pre/post." },
      { week: "Wk 9", body: "Score, analyze, write results section." },
      { week: "Wk 10–11", body: "Draft full paper. Mentor pass." },
      { week: "Wk 12", body: "Submit to PRIMUS." },
    ],
    risks: [
      {
        name: "The eigen-strokes don't look like strokes",
        body:
          "If the SVD of W₁ produces noise, the central pedagogical claim collapses. Mitigation: prototype this in Wk 1 before committing. Fallback: use a deeper net and SVD the activations of the first layer instead of the weights.",
      },
      {
        name: "n is too small for statistics",
        body:
          "A community-college pilot will give n < 30. Treat this as design-based research, not RCT. Frame as a case study per PRIMUS norms.",
      },
      {
        name: "Reviewers ask 'why no PyTorch'",
        body:
          "Have a one-sentence answer: NumPy keeps the linear algebra visible; PyTorch's autograd hides exactly the matrix structure we are trying to teach.",
      },
    ],
    publishableLine: {
      mediocre: "Here is a Colab that trains an MLP on MNIST.",
      publishable:
        "Here is the first activity that lets a precalculus-only student look inside a trained network and see linear algebra primitives staring back.",
    },
    moneyFigure:
      "Top-16 left singular vectors of trained W₁, displayed as a 4×4 grid of 16×16 grayscale images that visibly look like strokes and curves.",
    kanban: {
      backlog: [
        "NumPy training loop",
        "SVD viz prototype",
        "10-item instrument",
      ],
      inProgress: [],
      inReview: [],
      done: [],
    },
  },
  {
    id: "P3",
    number: "03",
    status: "Drafting",
    workingTitle:
      "Anti-Racist AI Tutoring in the Applied Modeling Classroom — A Design and Evaluation Framework",
    shortTitle: "AI Modeling Tutor",
    tags: ["HCI", "CS Ed × AI", "Design-Based Research"],
    targetVenue: "J. Computing in Higher Ed / PRIMUS",
    abstract:
      "[DRAFT — pilot and findings sections marked as forthcoming.] Large language models have entered college mathematics classrooms faster than instructors have been able to evaluate them. Most off-the-shelf LLM tutors optimize for final-answer correctness, which directly undermines the goals of an authentic mathematical-modeling course where the verification, transfer, and iteration steps are the entire point. We describe a design-based research study in which we constrain a frontier LLM to act as a modeling co-tutor scoped to Anderson's eight-step applied modeling process and audited against his five published anti-racist learner-centered objectives. We present (i) the system architecture — a thin web app with prompt scaffolding and refusal heuristics — and (ii) the audit framework: a rubric mapping each learner-centered objective to LLM behaviors that satisfy or violate it. A two-arm pilot with Math 2BL students on the LANA and MER projects is planned; student artifacts will be coded against the audit rubric and compared to an unconstrained baseline in the full draft. The design question we are pursuing is not 'will it cheat for students,' but 'which student-led practices does the tutor make easier?'",
    researchQuestions: [
      {
        id: "RQ1",
        q:
          "Can a frontier LLM be prompted to refuse final-answer requests and instead elicit student work in each of Anderson's eight modeling steps?",
      },
      {
        id: "RQ2",
        q:
          "Do students using the constrained tutor produce artifacts that better satisfy Anderson's five anti-racist learner-centered objectives than students using an unconstrained baseline?",
      },
      {
        id: "RQ3",
        q:
          "What categories of LLM failure are most dangerous in an authentic modeling classroom, and how should they be flagged in real time?",
      },
    ],
    methodology:
      "Design-based research. (i) Build a scoped LLM tutor as a single-page web app calling the Anthropic / OpenAI API with a system prompt that encodes the 8 steps and refusal heuristics. (ii) Develop an audit rubric: a 5×3 matrix where rows are Anderson's learner-centered objectives and columns are supports / neutral / violates. (iii) Two-arm pilot with Math 2BL volunteers — constrained tutor vs. baseline LLM — on a shared LANA or MER task. (iv) Code the resulting student artifacts against the audit rubric. (v) Semi-structured interviews with 4–6 students about what the tutor made easier and what it foreclosed.",
    mathAndCS:
      "LLM API integration (Anthropic SDK or OpenAI SDK); prompt engineering; design-based research methodology; qualitative coding (deductive, rubric-driven); enough linear algebra to evaluate the LANA/MER artifacts students produce. Web stack: vanilla JS or React + a serverless function for the API key, deployed on GitHub Pages + a tiny Cloudflare Worker.",
    executionPlan: [
      {
        week: "Wk 1–2",
        body:
          "Operationalize Anderson's five learner-centered objectives into a 5×3 audit rubric. Get Jeff's sign-off in one async pass.",
      },
      {
        week: "Wk 3",
        body:
          "Build the system prompt v0. Test against 20 hand-written student questions drawn from MER + LANA.",
      },
      {
        week: "Wk 4–5",
        body:
          "Build the SPA. Logging baked in: every turn captured + tagged with which step of the 8-step process the student was in.",
      },
      {
        week: "Wk 6",
        body:
          "Pilot dry run with one friendly Math 2BL student. Iterate the prompt.",
      },
      {
        week: "Wk 7–8",
        body:
          "Recruit pilot. Run two-arm study. IRB exemption needed early.",
      },
      {
        week: "Wk 9",
        body:
          "Code the artifacts against the rubric. Inter-rater reliability with Jeff on a 20% sample.",
      },
      {
        week: "Wk 10–11",
        body:
          "Draft. Consider J. Computing in Higher Ed, PRIMUS, or Mathematical Thinking and Learning as targets.",
      },
      { week: "Wk 12", body: "Submit." },
    ],
    risks: [
      {
        name: "The tutor refuses too much and is unusable",
        body:
          "Mitigation: pilot the prompt against student questions in Wk 3, not Wk 7. Set a refusal-rate ceiling.",
      },
      {
        name: "n is small & selection-biased",
        body:
          "Frame as design-based research, not causal. Lean on the artifact analysis, not on hypothesis tests.",
      },
      {
        name: "API key leakage",
        body:
          "Never put the API key in client-side code. Use a Cloudflare Worker proxy with a per-IP rate limit.",
      },
      {
        name: "Model deprecation mid-study",
        body:
          "Pin the model snapshot. Document the exact ID in the methods section.",
      },
    ],
    publishableLine: {
      mediocre:
        "We prompted ChatGPT to be a math tutor and students liked it.",
      publishable:
        "We took a published, named, anti-racist learner-centered framework, operationalized it into a behavioral audit rubric, scoped a frontier LLM against an 8-step modeling process, and produced evidence that constraint quality matters more than model quality.",
    },
    moneyFigure:
      "Side-by-side conversation transcripts — same student question to baseline LLM vs. constrained tutor — with the 5×3 rubric color-filling cell-by-cell as the conversation progresses.",
    kanban: {
      backlog: [
        "Audit rubric v0",
        "System prompt v0",
        "SPA scaffold",
        "IRB exemption",
      ],
      inProgress: [],
      inReview: [],
      done: [],
    },
  },
];

// ============================================================
// WEEKLY WORKFLOW
// ============================================================

export const weeklyWorkflow: WorkflowDay[] = [
  {
    day: "Monday",
    block: "Deep Work A",
    hours: "06:00–07:30 · 1.5h",
    bullets: [
      "Active drafting on the paper at the front of the queue this week",
      "One LaTeX commit minimum",
      "End with a one-sentence 'what's next'",
    ],
  },
  {
    day: "Tuesday",
    block: "Experiment / Code",
    hours: "06:00–07:30 · 1.5h",
    bullets: [
      "Write or run the next experiment",
      "Commit raw output to experiments/<date>/",
      "Update the experiment ledger",
    ],
  },
  {
    day: "Wednesday",
    block: "Read & Annotate",
    hours: "06:00–07:00 · 1h",
    bullets: [
      "One paper, one pass, one page of notes",
      "Save into reading/<first-author-year>.md",
    ],
  },
  {
    day: "Thursday",
    block: "Deep Work B",
    hours: "06:00–07:30 · 1.5h",
    bullets: ["Active drafting on the second paper in queue", "Same rules as Monday"],
  },
  {
    day: "Friday",
    block: "Mentor Touchpoint Prep",
    hours: "06:00–06:45 · 0.75h",
    bullets: [
      "Write the weekly mentor email (do not send yet)",
      "Sit with it overnight; trim by 30%",
    ],
  },
  {
    day: "Saturday",
    block: "Long Block",
    hours: "08:00–10:00 · 2h",
    bullets: [
      "Biggest single thing of the week (hardware build, multi-step experiment, full draft pass)",
      "Send the trimmed mentor email at end of session",
    ],
  },
  {
    day: "Sunday",
    block: "Review & Plan",
    hours: "19:00–19:45 · 0.75h",
    bullets: [
      "Weekly review (template)",
      "Update kanbans on each paper",
      "Set the queue order for next week",
    ],
  },
  {
    day: "Always-on",
    block: "Slack Time",
    hours: "~1h floating",
    bullets: ["Reading on commute", "Voice memos for video scripts", "Capture into Second Brain"],
  },
];

// ============================================================
// VIDEO PLANS
// ============================================================

export const videoPlans: VideoPlan[] = [
  {
    paperId: "P1",
    paperShort: "MER 2.0",
    coreInsight:
      "An eigenvector is a shape the system likes to vibrate in. The shape is physical, not symbolic.",
    tools: [
      "Manim (math)",
      "Blender (hardware shots)",
      "DaVinci Resolve (edit)",
      "Audacity (VO)",
      "Affinity Designer (thumbnails)",
    ],
    animations: [
      "Phase-space animation of a 2-mass system: random initial condition, then projected onto each eigenmode, side by side.",
      "Slow zoom from real pendulum footage → tracked dots → derived (x1,x2) trajectory → diagonalized (q1,q2) trajectory.",
      "The diagonalization step animated as a literal rotation of the coordinate axes.",
      "Transition: 2-mass → 3-mass, showing a third mode 'appearing' as a new direction in state space.",
      "Final: BOM laid out flat with prices, pan to a student running the Colab.",
    ],
  },
  {
    paperId: "P2",
    paperShort: "Matrices → Networks",
    coreInsight:
      "The trained network is just a stack of matrices, and the SVD shows you what each layer 'looked for.'",
    tools: [
      "Manim",
      "3Blue1Brown-style typography",
      "NumPy + matplotlib captures",
      "OBS for screen captures",
      "DaVinci Resolve",
    ],
    animations: [
      "A USPS digit getting flattened into a vector, then matrix-multiplied — show the matrix lighting up cell by cell.",
      "Training animated as the loss surface dimming, with W₁ updating each frame.",
      "The reveal: SVD of W₁, top-16 left singular vectors arranged as 16×16 images, sorted by σ — strokes emerge.",
      "Two networks side by side: one trained on USPS, one on Fashion-MNIST. Eigen-strokes look totally different. Visceral.",
      "Closing: a precalculus student walks through one full SVD slide.",
    ],
  },
  {
    paperId: "P3",
    paperShort: "AI Modeling Tutor",
    coreInsight:
      "An AI tutor's value is what it refuses, not what it answers.",
    tools: [
      "OBS (screen capture)",
      "After Effects or Manim for the rubric viz",
      "DaVinci Resolve",
      "Affinity Designer for lower-thirds",
    ],
    animations: [
      "Split-screen: same student question to baseline ChatGPT vs. the constrained tutor. Show the conversation diverge.",
      "The 5×3 audit rubric drawn live, color-filling cell by cell as the conversation progresses.",
      "'8 steps' as a horizontal track at the bottom, lighting up in real time as the student moves through the modeling process.",
      "A failure case: the tutor giving a too-confident wrong answer, with the audit rubric instantly going red. Honest reporting.",
      "Closing voiceover from a real student about what the tutor made easier.",
    ],
  },
];

// ============================================================
// VIDEO STRUCTURE & HOUSE RULES
// ============================================================

export const videoStructure = [
  { time: "0:00–0:20", beat: "Hook", body: "A single image or claim that would make a Math 2B student stop scrolling. No throat-clearing." },
  { time: "0:20–1:00", beat: "The question", body: "Whose problem? Why unsolved? Why care in 30 seconds?" },
  { time: "1:00–2:30", beat: "Minimum LA", body: "Smallest concept set. ONE Manim animation of the core idea." },
  { time: "2:30–4:30", beat: "The contribution", body: "Hardware / code / framework, shown working. Real footage, real numbers." },
  { time: "4:30–6:00", beat: "What the data says", body: "Pilot results, with honest uncertainty. Show the failure cases." },
  { time: "6:00–6:30", beat: "What this changes", body: "One sentence about the bigger frame: classroom practice, equity, AI in education." },
  { time: "6:30–7:00", beat: "Call to action", body: "Link to the paper, the GitHub, the Colab, an invitation to remix." },
];

export const videoHouseRules = [
  {
    rule: "Always show the basis",
    body:
      "Vectors are nothing without an explicit coordinate system on screen. Animate the basis change, do not just write 'let v = Px.'",
  },
  {
    rule: "Color = direction, brightness = magnitude",
    body:
      "Lock this convention across all three videos so viewers transfer intuition between them.",
  },
  {
    rule: "Diagonalization is a rotation",
    body:
      "Whenever a matrix is diagonalized, animate the rotation. Never let P⁻¹AP be a static formula.",
  },
  {
    rule: "Eigenvectors are arrows that survive",
    body:
      "Animate by transforming a circle of vectors, then highlighting only the ones that did not change direction.",
  },
  {
    rule: "SVD is two rotations and a stretch",
    body:
      "Always animate UΣVᵀ in this geometric sequence, never as three matrices being multiplied.",
  },
  {
    rule: "One whiteboard, one camera, one voice per video",
    body:
      "Resist the temptation to over-edit. Production value comes from clarity of thought, not transitions.",
  },
];

// ============================================================
// MENTOR PROTOCOL
// ============================================================

export const mentorProtocol = [
  {
    rule: "Async first, sync rare",
    body:
      "One email per week, max one in-person meeting per month. Mon 8:00–8:40 PM PST is the standing call slot.",
  },
  {
    rule: "Asks-only emails",
    body:
      "Each email contains exactly one decision needed from Jeff, a TL;DR, and links — never an open-ended 'thoughts?'",
  },
  {
    rule: "Default to drafts",
    body:
      "If you would normally ask 'should I…?', instead send a working draft and ask 'anything I should change before I commit?'",
  },
  {
    rule: "Mentor budget",
    body:
      "If you have used >30 minutes of Jeff's time this month, the next ask must be a status update, not a question.",
  },
  {
    rule: "Always include your proposed answer",
    body:
      "Lets Jeff reply with a single character if he agrees.",
  },
];

// ============================================================
// TEMPLATES
// ============================================================

const TEMPLATE_BASE = "https://fansofhenry.github.io/research-lab/templates";

export const benchTemplates: BenchTemplate[] = [
  {
    filename: "research-log.md",
    title: "research-log.md",
    description:
      "Daily one-paragraph log entry. Use when something shifts in your understanding.",
    href: `${TEMPLATE_BASE}/research-log.md`,
  },
  {
    filename: "experiment.md",
    title: "experiment.md",
    description:
      'The README that goes in every experiment folder. Includes "what would falsify this."',
    href: `${TEMPLATE_BASE}/experiment.md`,
  },
  {
    filename: "weekly-review.md",
    title: "weekly-review.md",
    description: "Sunday review template. Five questions. ~15 minutes.",
    href: `${TEMPLATE_BASE}/weekly-review.md`,
  },
  {
    filename: "mentor-update.md",
    title: "mentor-update.md",
    description:
      "The weekly email to Jeff. Asks-only, one decision per email.",
    href: `${TEMPLATE_BASE}/mentor-update.md`,
  },
  {
    filename: "paper-skeleton.md",
    title: "paper-skeleton.md",
    description:
      "The PRIMUS-style section skeleton you instantiate on day one of any new paper.",
    href: `${TEMPLATE_BASE}/paper-skeleton.md`,
  },
  {
    filename: "video-script.md",
    title: "video-script.md",
    description:
      "The 7-minute companion-video script template, mapped to the standard structure.",
    href: `${TEMPLATE_BASE}/video-script.md`,
  },
  {
    filename: "long-list-of-candidates.md",
    title: "long-list-of-candidates.md",
    description:
      "The 4 paper directions we did NOT pick this round, kept warm for next quarter.",
    href: `${TEMPLATE_BASE}/long-list-of-candidates.md`,
  },
];

// ============================================================
// LAB METADATA
// ============================================================

export const labMeta = {
  name: "The Modeling Bench",
  tagline:
    "Three first-author papers at the intersection of applied linear algebra, hands-on lab pedagogy, and CS education in the age of AI.",
  principal: "Henry Fan",
  mentor: "Prof. Jeff Anderson",
  mentorAffiliation: "Foothill College",
  startDate: "2026-04-10",
  targetVenues: "PRIMUS · College Math Journal · J. Computing in Higher Ed",
  hubMirror: "https://fansofhenry.github.io/research-lab/",
};
