// Default CV data. Lives in localStorage once the user edits it.
window.DEFAULT_CV = {
  meta: {
    name: "Alex Researcher",
    title: "Associate Professor — Climate Science",
    tagline: [
      "Global Warming & Climate Change",
      "Atmospheric Modeling",
      "Carbon Cycle & Greenhouse Gases",
      "Climate Policy & Sustainability"
    ],
    lastUpdate: "1 January 2025",
    photo: "assets/headshot.jpg"
  },
  contact: {
    address: [
      "Department of Earth and Environmental Sciences, Example University",
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
    "Global Warming and Climate Change",
    "Atmospheric Science and Climate Modeling",
    "Carbon Cycle and Greenhouse Gas Emissions",
    "Climate Feedback Mechanisms",
    "Sea Level Rise and Ice Sheet Dynamics",
    "Climate Policy and Sustainability"
  ],
  experience: [
    { role: "Associate Professor", org: "Department of Earth and Environmental Sciences, Example University", location: "Country", start: "January 2023", end: "Present" },
    { role: "Assistant Professor", org: "Department of Earth and Environmental Sciences, Example University", location: "Country", start: "January 2018", end: "December 2022" },
    { role: "Postdoctoral Researcher", org: "Institute for Climate Research, Tech University", location: "Country", start: "September 2016", end: "December 2017" },
    { role: "Research Scientist", org: "National Center for Atmospheric Research", location: "Country", start: "2012", end: "2014" }
  ],
  education: [
    { degree: "Doctor of Philosophy (Earth Sciences — Atmospheric and Climate Science)", school: "Tech University", department: "Department of Earth and Planetary Sciences, Faculty of Science", location: "City, Country", year: "September 2016" },
    { degree: "Master of Science in Environmental Science", school: "State University", department: "School of Earth and Environment", location: "City, Country", year: "May 2012" },
    { degree: "Bachelor of Science in Physics (Summa Cum Laude)", school: "Example University", department: "Department of Physics, Faculty of Science", location: "City, Country", year: "May 2010" }
  ],
  honors: [
    "Outstanding Reviewer Award, Journal of Climate, American Meteorological Society, 2022",
    "Best Paper Award, International Conference on Climate Change and Global Warming (ICCCGW '21), Virtual Event, 2021",
    "Early Career Scientist Award, International Union of Geodesy and Geophysics (IUGG), 2020",
    "Best Poster Award, American Geophysical Union (AGU) Fall Meeting, San Francisco, 2019",
    "Outstanding PhD Thesis Award, National Research Foundation, 2017",
    "Full PhD Scholarship, Example University, 2014",
    "Full Master's Scholarship, Government Scholarship Program, 2010",
    "Winner of the Regional Science Olympiad — Earth Sciences Category, 2009"
  ],
  grants: [
    "Example University Strategic Research Fund (Rising Category) 2024 — \"AI-Enhanced Climate Projection Models for Regional Warming Scenarios\", $150,000 × 2 years",
    "Example University Scholarship for PhD Student 2024",
    "National Research Foundation Grant — \"Quantifying Feedback Mechanisms in Arctic Amplification\", 2022–2024, $80,000 × 2 years",
    "University Research Cluster — \"Integrated Assessment of Climate Impacts on Coastal Ecosystems\", 2021–2022 (led by Dr. B. Collaborator)",
    "International Research Exchange Grant, Royal Academy of Sciences, 2019–2021, £15,000 × 2 years",
    "High-Performance Computing Research Credits, National Supercomputing Centre, 2018, $20,000 USD",
    "Student Travel Support Grant, National Science Foundation, 2016, $700 USD"
  ],
  pubStats: {
    monographs: 0, journals: 8, conferences: 20, chapters: 2, workshops: 5, edited: 0,
    citations: { source: "Google Scholar (1 Jan 2025)", count: 800, h: 14 },
    citations2: { source: "Scopus (1 Jan 2025)", count: 500, h: 12 }
  },
  publications: [
    { type: "chapter", year: 2024, authors: "A. Researcher, B. Collaborator, C. Scholar", title: "Global Warming Trajectories Under Shared Socioeconomic Pathways: Uncertainties and Opportunities", venue: "Handbook of Climate Science Research (Smith & Jones eds.), pp. 112–145, Springer" },
    { type: "chapter", year: 2021, authors: "B. Collaborator, A. Researcher", title: "Feedback Mechanisms in the Climate System: From Theory to Observation", venue: "Advances in Atmospheric Science (Brown ed.), pp. 67–98, MIT Press" },

    { type: "journal", year: 2024, authors: "A. Researcher, B. Collaborator, C. Scholar, D. Academic", title: "Regional Temperature Extremes Under 1.5°C and 2°C Global Warming: A Multi-Model Analysis", venue: "Nature Climate Change" },
    { type: "journal", year: 2024, authors: "C. Scholar, E. Postdoc, A. Researcher", title: "Permafrost Thaw Carbon Release: Observations and Model Projections for the 21st Century", venue: "Global Change Biology" },
    { type: "journal", year: 2023, authors: "B. Collaborator, F. Student, A. Researcher, G. Partner, H. Advisor", title: "Accelerated Melting of the Greenland Ice Sheet: Attribution and Future Projections", venue: "Journal of Geophysical Research: Atmospheres, vol. 128, no. 4, pp. 100–125" },
    { type: "journal", year: 2022, authors: "A. Researcher, B. Collaborator", title: "ClimSim: A Scalable Framework for High-Resolution Regional Climate Downscaling", venue: "Geoscientific Model Development" },
    { type: "journal", year: 2022, authors: "A. Researcher, B. Collaborator, E. Postdoc, G. Partner, H. Advisor", title: "Urban Heat Island Amplification Under Climate Change: A Global Assessment", venue: "Environmental Research Letters" },
    { type: "journal", year: 2021, authors: "C. Scholar, I. Researcher, A. Researcher", title: "Decadal Variability of the Atlantic Meridional Overturning Circulation and Its Impact on European Climate", venue: "Journal of Climate" },
    { type: "journal", year: 2020, authors: "E. Postdoc, B. Collaborator, A. Researcher, G. Partner, H. Advisor", title: "Tropical Forest Dieback Under Sustained Drought: Carbon Flux Implications", venue: "Nature Geoscience" },
    { type: "journal", year: 2019, authors: "A. Researcher, B. Collaborator, D. Academic", title: "A Comparison of Global Climate Model Downscaling Approaches for Impact Assessment", venue: "Climate Dynamics" },

    { type: "conference", year: 2024, authors: "A. Researcher, J. GradStudent, K. Undergrad, C. Scholar, G. Partner", title: "ClimateViz: An Interactive Framework for Communicating Climate Projections to Policymakers", venue: "AGU Fall Meeting '24 — Tool Demo Track, Example City, Country" },
    { type: "conference", year: 2024, authors: "L. Undergrad, A. Researcher, C. Scholar, M. Advisor", title: "Machine Learning for Sub-Seasonal Temperature Forecasting in Climate-Sensitive Regions", venue: "EGU General Assembly 2024, Example City, Country" },
    { type: "conference", year: 2023, authors: "C. Scholar, N. Researcher, A. Researcher, O. Student, P. Partner, M. Advisor", title: "Characterizing Compound Extreme Events Under Global Warming Scenarios", venue: "AMS Annual Meeting '23 — Registered Report, Example City, Country" },
    { type: "conference", year: 2023, authors: "Q. Student, R. Student, S. Student, A. Researcher, P. Partner, C. Scholar, M. Advisor", title: "IceWatch: A Remote Sensing Tool for Real-Time Polar Ice Extent Monitoring", venue: "IGARSS '23, Example City, Country" },
    { type: "conference", year: 2022, authors: "A. Researcher, C. Scholar, N. Researcher, T. Collaborator", title: "Using Immersive Visualization for Climate Science Outreach in Schools", venue: "EGU General Assembly 2022, Virtual Event (best paper award)" },
    { type: "conference", year: 2022, authors: "A. Researcher, E. Postdoc", title: "Benchmarking Ocean Heat Content Estimates Across Reanalysis Products", venue: "Ocean Sciences Meeting '22 — Registered Report, Virtual Event" },
    { type: "conference", year: 2021, authors: "U. Student, V. Student, A. Researcher, W. Partner", title: "CarbonTrack: A Dashboard for Monitoring National Greenhouse Gas Inventories", venue: "AGU Fall Meeting 2021 — Tool Demonstrations, Virtual Event" },
    { type: "conference", year: 2020, authors: "X. Student, A. Researcher, B. Collaborator, E. Postdoc, Y. Partner", title: "Does Afforestation Really Offset Carbon Emissions? A Meta-Analysis", venue: "Global Carbon Project Conference 2020, Virtual Event" },
    { type: "conference", year: 2019, authors: "Z. Student, B. Collaborator, A. Researcher", title: "Are Policymakers Aware of the Tipping Points in the Earth System?", venue: "Climate Change Conference 2019, Example City, Country" },
    { type: "conference", year: 2018, authors: "A. Researcher, B. Collaborator, D. Academic", title: "Cloud Radiative Feedbacks in the Presence of Elevated CO₂ Concentrations", venue: "CFMIP Meeting 2018, Example City, Country" },
    { type: "conference", year: 2017, authors: "A. Researcher, B. Collaborator, D. Academic", title: "Quantifying Aerosol–Cloud Interactions in Coupled Climate Models", venue: "AMS Annual Meeting 2017 — Doctoral Symposium, Example City, Country" },

    { type: "workshop", year: 2024, authors: "J. GradStudent, K. Undergrad, A. Researcher", title: "Challenges in Bias-Correcting CMIP6 Projections for Regional Impact Studies", venue: "CORDEX Workshop 2024, Example City, Country" },
    { type: "workshop", year: 2022, authors: "B. Collaborator, A. Researcher", title: "Reanalysis Data Considered Harmful as Ground Truth for Deep Learning Climate Models", venue: "Climate Informatics Workshop '22, Virtual Event (best paper and best presentation awards)" },
    { type: "workshop", year: 2019, authors: "A. Researcher, B. Collaborator", title: "A Picture is Worth a Thousand Words: Remote Sensing Imagery for Glacier Retreat Detection", venue: "Cryosphere Workshop 2019, Example City, Country" },
    { type: "workshop", year: 2018, authors: "A. Researcher, B. Collaborator", title: "Using Ensemble Methods to Constrain Equilibrium Climate Sensitivity", venue: "WCRP Workshop 2018, Example City, Country" },
    { type: "workshop", year: 2017, authors: "C. Scholar, G. Partner, A. Researcher, H. Advisor, I. Researcher", title: "Interdisciplinary Research Team Configurations in Climate Science: A Study of Collaboration Effectiveness", venue: "International Workshop on Earth System Science 2017, Example City, Country" }
  ],
  supervision: {
    phd: [
      { years: "2022–Present", entries: ["Ada Phdstudent — Machine Learning Approaches for Improving Regional Climate Projections (University PhD Scholarship 2022)"] }
    ],
    masters: [
      { years: "2024", entries: ["Bob Masterstudent — Multi-Model Assessment of Monsoon Variability Under Global Warming Scenarios (co-supervised with Dr. C. Scholar)"] },
      { years: "2023", entries: [
        "Carol Gradstudent — Deep Learning for Downscaling CMIP6 Precipitation Projections (co-supervised with Dr. D. Academic)",
        "Dave Masterstudent — Detecting Methane Emission Hotspots Using Satellite Observations (co-supervised with Dr. E. Postdoc)"
      ]}
    ],
    undergrad: [
      { years: "2024", entries: [
        "Eve Undergrad, Frank Senior, Grace Junior — Interactive Dashboard for Local Climate Risk Communication",
        "Henry Sophomore, Ivy Freshman, Jack Senior — Automated Assessment of Urban Green Space as a Heat Mitigation Strategy"
      ]},
      { years: "2023", entries: [
        "Kate Undergrad, Leo Senior, Mia Junior — Social Media Discourse Analysis on Climate Change Denial",
        "Nina Sophomore, Oscar Senior, Paula Junior — Detecting and Attributing Extreme Precipitation Events",
        "Quinn Undergrad, Ray Student, Sara Student — Automated Tool for Evaluating National Climate Pledges (NDCs)"
      ]},
      { years: "2022", entries: [
        "Tom Senior, Uma Undergrad, Victor Junior — Analyzing Carbon Footprint of University Campuses"
      ]},
      { years: "2021", entries: [
        "Wendy Student, Xavier Junior, Yara Senior — Recommending Energy-Efficient Alternatives Using Climate Data",
        "Zara Student, Aaron Junior, Beth Senior — Defining and Evaluating Indicators for Climate Resilience"
      ]}
    ]
  },
  teaching: [
    { code: "ES101", title: "Introduction to Climate Science", years: "2019–2024" },
    { code: "ES201", title: "Atmospheric Dynamics and Thermodynamics", years: "2019–2024" },
    { code: "ES301", title: "Global Warming: Science, Impacts, and Policy", years: "2019–2024" },
    { code: "ES401", title: "Advanced Topics in Climate Modeling", years: "2020–2024" },
    { code: "ES450", title: "Climate Change Adaptation and Mitigation", years: "2022–2024" },
    { code: "ES220", title: "Fundamentals of Earth System Science", years: "2021–2023" },
    { code: "ES110", title: "Environmental Science for Non-Majors", years: "2019–2020" }
  ],
  curriculum: [
    "Bachelor of Science in Climate Science, Department of Earth and Environmental Sciences, Example University"
  ],
  services: {
    consulting: ["Climate Science Advisor (2019–Present): technical advisory to regional government on IPCC AR6 implementation and national adaptation planning"],
    courses: [
      { title: "Global Warming: The Science and the Solutions", host: "Online Learning Platform", url: "https://example.com/courses/global-warming" },
      { title: "Introduction to Climate Change for Non-Scientists", host: "University Open Courseware", url: "https://example.com/open/climate-intro" }
    ],
    journals: [
      "Nature Climate Change",
      "Journal of Climate (American Meteorological Society)",
      "Global Change Biology",
      "Environmental Research Letters",
      "Climate Dynamics",
      "Geophysical Research Letters",
      "Nature Geoscience",
      "Climatic Change",
      "Geoscientific Model Development"
    ],
    organizing: [
      { year: 2024, items: ["Short Papers and Posters Track Co-Chair, EGU General Assembly 2025"] },
      { year: 2022, items: ["Diversity, Inclusion and Outreach Co-Chair, AGU Fall Meeting 2022"] },
      { year: 2021, items: ["Program co-chair, Early Career Track of AMS Annual Meeting 2021", "Guest Editor (with A. Collaborator), Climatic Change Special Issue on Tipping Points"] },
      { year: 2020, items: ["Judge, Student Presentation Competition, AGU Fall Meeting 2020", "Program co-chair, Climate Informatics Workshop 2020"] }
    ],
    pcMembership: [
      { year: 2025, items: ["EGU '25 (Atmospheric Sciences)", "AMS Annual Meeting '25 (Climate Variability)", "AGU '25 (Global Environmental Change)", "ICCGW '25 (Research)", "CORDEX '25 (Regional Climate)"] },
      { year: 2024, items: ["EGU 2024 (Climate)", "AGU 2024 (Cryosphere)", "AMS '24 (Climate Change)", "Ocean Sciences '24 (Carbon Cycle)", "Climate Informatics '24 (Research)", "IGARSS '24 (Research)"] },
      { year: 2023, items: ["CORDEX '23", "AGU 2023 (Atmospheric)", "EGU '23 (Research)", "Climate Informatics '23", "AMS '23 (Registered Reports)"] },
      { year: 2022, items: ["WCRP '22", "Climate Informatics '22", "AGU '22 (Poster)", "EGU 2022 (Research)", "Ocean Sciences '22 (Research)"] },
      { year: 2021, items: ["KSE 2021", "CORDEX 2021", "EGU 2021 (Research)", "AGU 2021 (Late Breaking Results)", "AMS 2021 (Posters)"] },
      { year: 2020, items: ["AGU 2020 (Research Papers)", "Climate Informatics 2020 (Technical Research)"] },
      { year: 2019, items: ["EGU 2019 (Technical Research)", "AGU 2019 (Technical Research)", "Cryosphere Workshop 2019"] }
    ],
    examiner: ["Bob Phdcandidate — Carbon Cycle Feedbacks and Climate Sensitivity, PhD, Example University, 2023"],
    mentoring: [
      "National Youth Science Competition 2024 — Mentor of Team ClimateAI, Example High School (Finalist)",
      "National Youth Science Competition 2023 — Mentor of Team EcoSense, Example Academy (Winner)"
    ]
  },
  talks: [
    { title: "AI-Assisted Climate Modeling: Opportunities and Pitfalls", host: "Department of Earth Sciences, State University", date: "15 September 2024", location: "Country" },
    { title: "Tipping Points in the Earth System: What Do We Know?", host: "Climate Research Institute, Tech University", date: "10 June 2023", location: "Country" },
    { title: "Global Warming Beyond 2°C: Regional Impacts and Policy Responses", host: "Regional Climate Summit", date: "20–22 November 2022", location: "City, Country" },
    { title: "Arctic Amplification and Its Role in Mid-Latitude Weather Extremes", host: "Atmospheric Science Lab, Example University", date: "5 August 2020", location: "Country" }
  ]
};
