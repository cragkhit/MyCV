// Default CV data. Lives in localStorage once the user edits it.
window.DEFAULT_CV = {
  meta: {
    name: "Alex Researcher",
    title: "Associate Professor — Computer Science",
    tagline: [
      "Software Engineering",
      "Static Analysis",
      "Code Similarity & Clone Detection",
      "Mining Software Repositories"
    ],
    lastUpdate: "1 January 2025",
    photo: "assets/headshot.jpg"
  },
  contact: {
    address: [
      "Department of Computer Science, Example University",
      "123 University Avenue",
      "Example City, State 12345, Country"
    ],
    tel: "+1 555-000-1234",
    mobile: "+1 555-000-5678",
    emails: [
      "alex.researcher@example.edu",
      "alex@example.com"
    ],
    links: [
      { label: "Publications", url: "https://example.com/publications" },
      { label: "Personal Website", url: "https://example.com" }
    ]
  },
  interests: [
    "Software Engineering",
    "Static Software Analysis",
    "Code Similarity and Clone Detection",
    "Mining Software Repositories",
    "Software Dependency and Vulnerabilities",
    "Code Proficiency"
  ],
  experience: [
    { role: "Associate Professor", org: "Department of Computer Science, Example University", location: "Country", start: "January 2023", end: "Present" },
    { role: "Assistant Professor", org: "Department of Computer Science, Example University", location: "Country", start: "January 2018", end: "December 2022" },
    { role: "Postdoctoral Researcher", org: "Institute of Software Research, Tech University", location: "Country", start: "September 2016", end: "December 2017" },
    { role: "Software Engineer", org: "Example Tech Corporation", location: "Country", start: "2012", end: "2014" }
  ],
  education: [
    { degree: "Doctor of Philosophy (Computer Science — Software Engineering)", school: "Tech University", department: "Department of Computer Science, Faculty of Engineering", location: "City, Country", year: "September 2016" },
    { degree: "Master of Science in Computer Science", school: "State University", department: "School of Computing", location: "City, Country", year: "May 2012" },
    { degree: "Bachelor of Science in Computer Science (Summa Cum Laude)", school: "Example University", department: "Department of Computer Science, Faculty of Science", location: "City, Country", year: "May 2010" }
  ],
  honors: [
    "Distinguished Reviewer Award, 30th IEEE/ACM International Conference on Program Comprehension (ICPC '22)",
    "Best Reviewer Award, Journal of Systems and Software, 2021",
    "Best Paper Award, 28th Asia-Pacific Software Engineering Conference (APSEC '21), Virtual Event, 2021",
    "Best Paper Award and People's Choice Award (best presentation), 14th International Workshop on Software Clones, Virtual Event, 2020",
    "Outstanding PhD Thesis Award, National Research Foundation, 2017",
    "Full PhD Scholarship, Example University, 2014",
    "Full Master's Scholarship, Government Scholarship Program, 2010",
    "Winner of the Regional Software Contest — Software for Education, 2009"
  ],
  grants: [
    "Example University Strategic Research Fund (Rising Category) 2024 — \"AI-Powered Testing Framework for Large Language Models\", $150,000 × 2 years",
    "Example University Scholarship for PhD Student 2024",
    "National Research Foundation Grant — \"Code Similarity Applications for Improving Software Quality\", 2022–2024, $80,000 × 2 years",
    "University Research Cluster — \"Applying Software Engineering for Improving Data Science Applications\", 2021–2022 (led by Dr. B. Collaborator)",
    "International Research Exchange Grant, Royal Academy of Engineering, 2019–2021, £15,000 × 2 years",
    "Cloud Computing Research Credits, Major Cloud Provider, 2018, $20,000 USD",
    "Student Travel Support Grant, National Science Foundation, 2016, $700 USD"
  ],
  pubStats: {
    monographs: 0, journals: 8, conferences: 20, chapters: 2, workshops: 5, edited: 0,
    citations: { source: "Google Scholar (1 Jan 2025)", count: 800, h: 14 },
    citations2: { source: "Scopus (1 Jan 2025)", count: 500, h: 12 }
  },
  publications: [
    { type: "chapter", year: 2024, authors: "A. Researcher, B. Collaborator, C. Scholar", title: "Code Similarity in Modern Software Development: Challenges and Opportunities", venue: "Handbook of Software Engineering Research (Smith & Jones eds.), pp. 112–145, Springer" },
    { type: "chapter", year: 2021, authors: "B. Collaborator, A. Researcher", title: "Static Analysis Techniques for Clone Detection", venue: "Advances in Program Analysis (Brown ed.), pp. 67–98, MIT Press" },

    { type: "journal", year: 2024, authors: "A. Researcher, B. Collaborator, C. Scholar, D. Academic", title: "Automated Knowledge Transfer in Software Engineering: A Case Study in Small and Medium-Sized Enterprises", venue: "Journal of Systems and Software (JSS)" },
    { type: "journal", year: 2024, authors: "C. Scholar, E. Postdoc, A. Researcher", title: "Security by Documentation? Characterizing Security Policy Adoption in Open Source Python Libraries", venue: "Empirical Software Engineering" },
    { type: "journal", year: 2023, authors: "B. Collaborator, F. Student, A. Researcher, G. Partner, H. Advisor", title: "SprintVec: A Deep Characterization of Sprints in Iterative Software Development", venue: "IEEE Transactions on Software Engineering, vol. 50, no. 1, pp. 100–125" },
    { type: "journal", year: 2022, authors: "A. Researcher, B. Collaborator", title: "Siamese: Scalable and Incremental Code Clone Search via Multiple Code Representations", venue: "Empirical Software Engineering" },
    { type: "journal", year: 2022, authors: "A. Researcher, B. Collaborator, E. Postdoc, G. Partner, H. Advisor", title: "Toxic Code Snippets on Stack Overflow", venue: "IEEE Transactions on Software Engineering" },
    { type: "journal", year: 2021, authors: "C. Scholar, I. Researcher, A. Researcher", title: "Studying the Association Between Issue Bounties and Resolving Outcomes", venue: "Journal of Systems and Software" },
    { type: "journal", year: 2020, authors: "E. Postdoc, B. Collaborator, A. Researcher, G. Partner, H. Advisor", title: "The Impact of Code Review on Architectural Changes", venue: "IEEE Transactions on Software Engineering" },
    { type: "journal", year: 2019, authors: "A. Researcher, B. Collaborator, D. Academic", title: "A Comparison of Code Similarity Analysers", venue: "Empirical Software Engineering" },

    { type: "conference", year: 2024, authors: "A. Researcher, J. GradStudent, K. Undergrad, C. Scholar, G. Partner", title: "jscefr: A Framework to Evaluate Code Proficiency for JavaScript", venue: "ICSME '24 — Tool Demo Track, Example City, Country" },
    { type: "conference", year: 2024, authors: "L. Undergrad, A. Researcher, C. Scholar, M. Advisor", title: "Autorepairability: A New Software Quality Characteristic", venue: "SANER 2024, Example City, Country" },
    { type: "conference", year: 2023, authors: "C. Scholar, N. Researcher, A. Researcher, O. Student, P. Partner, M. Advisor", title: "Mining the Characteristics of Jupyter Notebooks in Data Science Projects", venue: "MSR '23 — Registered Report, Example City, Country" },
    { type: "conference", year: 2023, authors: "Q. Student, R. Student, S. Student, A. Researcher, P. Partner, C. Scholar, M. Advisor", title: "Microusity: A Testing Tool for Backends for Frontends (BFF) Microservice Systems", venue: "ICPC '23, Example City, Country" },
    { type: "conference", year: 2022, authors: "A. Researcher, C. Scholar, N. Researcher, T. Collaborator", title: "Using Virtual Reality for Software Engineering Project Presentations", venue: "APSEC 2022, Virtual Event (best paper award)" },
    { type: "conference", year: 2022, authors: "A. Researcher, E. Postdoc", title: "Recommending Code Improvements Based on Q&A Answer Edits", venue: "MSR '22 — Registered Report, Virtual Event" },
    { type: "conference", year: 2021, authors: "U. Student, V. Student, A. Researcher, W. Partner", title: "FixMe: A Bot for Detecting and Monitoring On-hold Self-Admitted Technical Debt", venue: "ASE 2021 — Tool Demonstrations, Virtual Event" },
    { type: "conference", year: 2020, authors: "X. Student, A. Researcher, B. Collaborator, E. Postdoc, Y. Partner", title: "Does Code Review Really Remove Coding Convention Violations?", venue: "SCAM 2020, Virtual Event" },
    { type: "conference", year: 2019, authors: "Z. Student, B. Collaborator, A. Researcher", title: "Are Developers Aware of the Architectural Impact of Their Changes?", venue: "ASE 2019, Example City, Country" },
    { type: "conference", year: 2018, authors: "A. Researcher, B. Collaborator, D. Academic", title: "Similarity of Source Code in the Presence of Pervasive Modifications", venue: "SCAM 2018, Example City, Country" },
    { type: "conference", year: 2017, authors: "A. Researcher, B. Collaborator, D. Academic", title: "Measuring Code Similarity in Large-Scale Code Corpora", venue: "ICSME 2017 — Doctoral Symposium, Example City, Country" },

    { type: "workshop", year: 2024, authors: "J. GradStudent, K. Undergrad, A. Researcher", title: "Challenges in Adopting Open-Source LLMs: An Empirical Study", venue: "QuASoQ 2024, Example City, Country" },
    { type: "workshop", year: 2022, authors: "B. Collaborator, A. Researcher", title: "BigCloneBench Considered Harmful for Machine Learning", venue: "IWSC '22, Virtual Event (best paper and best presentation awards)" },
    { type: "workshop", year: 2019, authors: "A. Researcher, B. Collaborator", title: "A Picture is Worth a Thousand Words: Code Clone Detection Based on Image Similarity", venue: "IWSC 2019, Example City, Country" },
    { type: "workshop", year: 2018, authors: "A. Researcher, B. Collaborator", title: "Using Compilation/Decompilation to Enhance Clone Detection", venue: "IWSC 2018, Example City, Country" },
    { type: "workshop", year: 2017, authors: "C. Scholar, G. Partner, A. Researcher, H. Advisor, I. Researcher", title: "Software Team Member Configurations: A Study of Team Effectiveness", venue: "IWESEP 2017, Example City, Country" }
  ],
  supervision: {
    phd: [
      { years: "2022–Present", entries: ["Ada Phdstudent — AI Techniques for Improving Software Quality (University PhD Scholarship 2022)"] }
    ],
    masters: [
      { years: "2024", entries: ["Bob Masterstudent — Multilingual Testing Framework for Large Language Models (co-supervised with Dr. C. Scholar)"] },
      { years: "2023", entries: [
        "Carol Gradstudent — LLMs for Human-Interpretable Explanation in Code Clone Detection (co-supervised with Dr. D. Academic)",
        "Dave Masterstudent — Detecting Malicious Mobile Applications on Third-Party Repositories (co-supervised with Dr. E. Postdoc)"
      ]}
    ],
    undergrad: [
      { years: "2024", entries: [
        "Eve Undergrad, Frank Senior, Grace Junior — Pull Request Link Summarizer",
        "Henry Sophomore, Ivy Freshman, Jack Senior — Automated Software Requirement Quality Assessment"
      ]},
      { years: "2023", entries: [
        "Kate Undergrad, Leo Senior, Mia Junior — Social Media Reactions to Open Source Promotions",
        "Nina Sophomore, Oscar Senior, Paula Junior — Detecting and Explaining LLM-Generated Source Code",
        "Quinn Undergrad, Ray Student, Sara Student — Automated Tool for Testing LLM Trustworthiness"
      ]},
      { years: "2022", entries: [
        "Tom Senior, Uma Undergrad, Victor Junior — Analyzing Coding Competency of Open-Source Contributors"
      ]},
      { years: "2021", entries: [
        "Wendy Student, Xavier Junior, Yara Senior — Recommending Coding Alternatives in Jupyter Notebooks",
        "Zara Student, Aaron Junior, Beth Senior — Defining and Evaluating Code Competency Frameworks"
      ]}
    ]
  },
  teaching: [
    { code: "CS101", title: "Introduction to Software Engineering", years: "2019–2024" },
    { code: "CS201", title: "Software Design and Development", years: "2019–2024" },
    { code: "CS301", title: "Software Quality Assurance and Testing", years: "2019–2024" },
    { code: "CS401", title: "Advanced Topics in Software Engineering", years: "2020–2024" },
    { code: "CS450", title: "Secure Software Design", years: "2022–2024" },
    { code: "CS220", title: "Fundamentals of Information Systems", years: "2021–2023" },
    { code: "CS110", title: "Computer Applications", years: "2019–2020" }
  ],
  curriculum: [
    "Bachelor of Science in Computer Science, Department of Computer Science, Example University"
  ],
  services: {
    consulting: ["Software Engineering Consultant (2019–Present): adoption of ISO/IEC 29110-4-1:2018 — Lifecycle profiles for Very Small Entities (VSEs)"],
    courses: [
      { title: "Software Quality Assurance and Testing: Introduction to Testing Principles", host: "Online Learning Platform", url: "https://example.com/courses/sq-testing" },
      { title: "Introduction to Software Engineering for Non-Majors", host: "University Open Courseware", url: "https://example.com/open/se-intro" }
    ],
    journals: [
      "IEEE Transactions on Software Engineering (TSE)",
      "Empirical Software Engineering (EMSE)",
      "ACM Transactions on Software Engineering and Methodology (TOSEM)",
      "Journal of Systems and Software (JSS)",
      "Software: Practice and Experience (SPE)",
      "Journal of Software: Evolution and Process (JSEP)",
      "IEEE Access",
      "Science of Computer Programming (SCP)",
      "Software Quality Journal (SQJ)"
    ],
    organizing: [
      { year: 2024, items: ["Short Papers and Posters Track Co-Chair, SANER 2025"] },
      { year: 2022, items: ["Diversity, Inclusion and Outreach Co-Chair, MSR 2022"] },
      { year: 2021, items: ["Program co-chair, ERA Track of ICPC 2021", "Guest Editor (with A. Collaborator), JSS Special Issue on Software Clones"] },
      { year: 2020, items: ["Judge, ACM Student Research Competition Track of ICSE 2020", "Program co-chair, IWSC 2020"] }
    ],
    pcMembership: [
      { year: 2025, items: ["ISSTA '25 (Research)", "ICST '25 (Research)", "SANER '25 (ERA)", "ICPC '25 (Research)", "MSR '25 (Technical)", "ICSE '25 (Research)"] },
      { year: 2024, items: ["APSEC 2024 (ERA)", "APSEC 2024 (Technical)", "ICSME '24 (Doctoral Symposium)", "FSE '24 (Demonstrations)", "ICPC '24 (Research)", "MSR '24 (Technical)", "ICSE '24 (Research)", "ASE '24 (Research)"] },
      { year: 2023, items: ["IWSC '23", "ASE 2023 (Tool Demo/NIER)", "ICSME '23 (Research)", "CAIN '23", "MSR '23 (Registered Reports)", "ICPC '23", "SANER '23"] },
      { year: 2022, items: ["SSBSE '22 (RENE/NIER)", "IWSC '22", "ASE '22 (Tool Demo)", "ICSME '22 (Research)", "ICPC 2022 (Research)", "MSR 2022", "SANER 2022 (ERA)"] },
      { year: 2021, items: ["KSE 2021", "IWSC 2021", "ICSME 2021 (Research)", "ASE 2021 (Late Breaking Results)", "ICSE 2021 (Posters)"] },
      { year: 2020, items: ["ASE 2020 (Research Papers)", "ICPC 2020 (Technical Research)"] },
      { year: 2019, items: ["ICSME 2019 (Technical Research)", "ICPC 2019 (Technical Research)", "IWSC 2019"] }
    ],
    examiner: ["Bob Phdcandidate — Code Reuse and Developer Productivity, PhD, Example University, 2023"],
    mentoring: [
      "National Youth Tech Competition 2024 — Mentor of Team AI Health, Example High School (Finalist)",
      "National Youth Tech Competition 2023 — Mentor of Team EcoSense, Example Academy (Winner)"
    ]
  },
  talks: [
    { title: "Rapid Prototyping with AI-Assisted Programming", host: "Department of Computer Science, State University", date: "15 September 2024", location: "Country" },
    { title: "Challenges in Code Similarity: Accuracy and Scalability", host: "Software Engineering Research Lab, Tech Institute", date: "10 June 2023", location: "Country" },
    { title: "Automated Software Engineering for Industry", host: "Regional Tech Conference", date: "20–22 November 2022", location: "City, Country" },
    { title: "Code Similarity and Clone Search in Large-Scale Source Code Data", host: "Software Engineering Lab, Example University", date: "5 August 2020", location: "Country" }
  ]
};
