// Edit this file to update the site content. Everything on the page is rendered from here.
const DATA = {
  name: "Aarati Mahato",
  roles: ["Flutter Developer", "Mobile App Builder", "Computer Engineer"],
  intro:
    "I build cross-platform mobile apps with Flutter and Firebase, and I've shipped six of them to both the Google Play Store and the Apple App Store.",
  email: "aaratimahato006@gmail.com",
  github: "https://github.com/nilumahato",
  phone: "9863742165",
  location: "Kathmandu, Nepal",

  skills: [
    { group: "Mobile", items: ["Flutter", "Dart", "Material Design"] },
    { group: "State Management", items: ["Bloc", "Provider", "setState"] },
    { group: "Backend & Services", items: ["Firebase", "FCM Push", "Google Cloud", "REST APIs", "Socket.IO"] },
    { group: "Auth", items: ["Google Sign-In", "OAuth"] },
    { group: "Tools", items: ["Git", "GitHub", "Postman"] },
    { group: "Languages", items: ["C", "C++"] },
  ],

  experience: [
    {
      role: "Flutter Developer",
      org: "Nomor LLC",
      meta: "Full-time · Kathmandu · On-site",
      date: "Oct 2025 – Sep 2026",
      points: ["Developed Flutter apps across different project domains and implemented features for varied user needs."],
    },
    {
      role: "Junior Flutter App Developer",
      org: "NexSewa",
      meta: "Full-time · Kathmandu · On-site",
      date: "Jul 2025 – Sep 2025",
      points: ["Built cross-platform Flutter apps with responsive interfaces and REST API integration."],
    },
    {
      role: "Flutter Intern",
      org: "Nepal Rastra Bank (NRB)",
      meta: "Full-time · Pokhara · Hybrid",
      date: "Feb 2025 – Apr 2025",
      points: ["Developed a Library Management System using Flutter.", "Implemented admin and member features."],
    },
    {
      role: "Committee Member (Volunteer)",
      org: "Innovative Computer Engineering Students' Society (ICES)",
      meta: "Volunteer",
      date: "Jan 2022 – Jan 2025",
      points: ["Led event management and educational initiatives."],
    },
  ],

  education: [
    { school: "Tribhuvan University, IOE, Paschimanchal Campus", degree: "B.E. Computer Engineering", date: "2021 – 2025" },
    { school: "Capital College and Research Centre", degree: "High School – Science", date: "2017 – 2019" },
    { school: "Laligurans Academy", degree: "SEE, Secondary Education", date: "2006 – 2017" },
  ],

  // type: "published" apps show store links; others are "academic" / "hackathon" / "internship"
  projects: [
    {
      title: "NEC License Exam Preparation",
      desc: "Engineering license exam preparation app.",
      type: "published",
      play: "https://play.google.com/store/apps/details?id=com.aaratiniraj.nec",
      apple: "https://apps.apple.com/us/app/nec-license-exam-preparations/id6761411295",
    },
    {
      title: "Bridge Course: After SEE",
      desc: "Class 11 entrance exam preparation.",
      type: "published",
      play: "https://play.google.com/store/apps/details?id=com.aaratiniraj.bridgecourse",
      apple: "https://apps.apple.com/us/app/bridge-course/id6761420144",
    },
    {
      title: "Engineering Entrance Prep",
      desc: "Entrance preparation for IOE, KU, PU and COMPEX.",
      type: "published",
      play: "https://play.google.com/store/apps/details?id=com.aaratiniraj.engineeringentrancepreparation",
      apple: "https://apps.apple.com/us/app/engineering-entrance-prep/id6781546010",
    },
    {
      title: "TypeMobo",
      desc: "Typing speed test and practice app.",
      type: "published",
      play: "https://play.google.com/store/apps/details?id=com.aaratiniraj.typemobo",
      apple: "https://apps.apple.com/us/app/typemobo-typing-test-practice/id6796981635",
    },
    {
      title: "Wardrobe Planner",
      desc: "Closet and outfit organizer.",
      type: "published",
      play: "https://play.google.com/store/apps/details?id=com.aaratiniraj.wardrobe",
      apple: "https://apps.apple.com/us/app/wardrobe-closet-outfit-planner/id6772237247",
    },
    {
      title: "Simply Me",
      desc: "MBTI personality test app.",
      type: "published",
      play: "https://play.google.com/store/apps/details?id=com.aarati.mbti_test",
      apple: "https://apps.apple.com/us/app/personality-test-simply-me/id6775892203",
    },
    { title: "NRB-LMS", desc: "Library management system built during my NRB internship.", type: "internship" },
    { title: "SafeConnect", desc: "Encrypted messenger app.", type: "academic", tag: "Minor Project" },
    { title: "Tokma", desc: "Digital tourism app.", type: "hackathon", tag: "Hackathon" },
    { title: "Marga Darshan", desc: "Public transportation route tracing.", type: "academic", tag: "Software Engineering Project" },
  ],

  competitions: ["Vertex Hackathon 2023", "Yantra Hackathon 2024"],
};
