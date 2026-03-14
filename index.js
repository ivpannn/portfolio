// Ham dropdown menu
const hamMenu = document.querySelector("#ham-menu");
const hamElement = document.querySelector(".ham-element");
const menuLinks = document.querySelectorAll(".ham-element a")
// querySelector = getElementById (only works with IDs)
// but querySelector can select IDs, classes, tags, or any CSS selector.

hamMenu.addEventListener('click', () => {
    // addEventListener = when the event happens (click, mousemove, input, etc) then run the code
    hamMenu.classList.toggle('active');
    // classList lets you add, remove, or check classes easily.
    // toggle = If the element does not have the class active, it adds it. If have, then remove it
    hamElement.classList.toggle('active');
})

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamMenu.classList.remove('active');
        hamElement.classList.remove('active');
    });
});


// myPhoto
let myPhoto = document.querySelector("#myPhoto");

const description = ["Pattaya Beach", "Singapore", "The face suite", "Changi Airport", "MBS", "The face", "The face", "Velocity", "Dataran Merdeka", "Putrajaya", "Thailand"]

let pictureContainer = document.createElement('div');
pictureContainer.className = 'picture-container';

for (let index = 0; index < description.length; index++) {
    let path = `ivan${index}.jpg`;

    pictureContainer.innerHTML +=
        // innerHTML - puts HTML code inside an element
        `<div class="picture">
            <img src="img/${path}">
            <h4>${description[index]}</h4>
        </div>`;
}
// Duplicate pictures for seamless loop
pictureContainer.innerHTML += pictureContainer.innerHTML;
// Add container to myPhoto
myPhoto.appendChild(pictureContainer);


// Projects card auto-generate
const projectData = [
    {
        image: "img/portfolio-pjt.png",
        title: "My Portfolio Website",
        description: "A personal portfolio website to showcase my projects and skills.",
        skills: ["HTML", "CSS", "JavaScript"]
    },

    {
        image: "img/ecoquest-pjt.png",
        title: "EcoQuest",
        description: "A school project that enables users to track their contributions and promotes environmental sustainability and awareness.",
        skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    },

    {
        image: "img/project3-pjt.jpg",
        title: "My third project",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        skills: ["Skill1", "Skill2", "Skill3"]
    },

    {
        image: "img/project4-pjt.jpg",
        title: "My fourth project",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        skills: ["Skill1", "Skill2", "Skill3"]
    }
];

const projectList = document.getElementById("project-card");

projectData.forEach(pjt => {
    const container = document.createElement("div");
    container.className = "projects";

    container.innerHTML = `
    <img src= "${pjt.image}" alt="${pjt.title}">
    <h4 class ="title">${pjt.title}</h4>
    <p class="description">${pjt.description}</p>
    <div class="skill-container">
        ${pjt.skills.map(skill =>
        `<span class="skills">${skill}</span>`
    ).join("")}
    </div>
`;
    projectList.appendChild(container);
});

//Experiences auto-generate
const experienceData = [
    {
        company: "Telemarketing Specialist | Dream Houz sdn bhd | 2024",
        duration: "Part-time • May 2024 - Jul 2024 • 3 mos",
        achievements: [
            "✅ Assisted with both client communication and project coordination",
            "✅ Brought in a potential client that worth over 100k, which is successfully closed by my senior",
            "✅ Completed client invitations that led to more than five successfully closed deals",
            "✅ Ability to handle customer inquiries, concerns, and complaints effectively",
            "✅ Ability to identify customer needs and tailor sales approaches accordingly"
        ],
        image: ["img/dreamhouz.png", "img/dreamhouz1.png"],
        skills: ["Strategic communication", "Storytelling and presentation", "Behavior Analysis", "Tone Control"]
    },

    {
        company: "Knorr Event Crew | Knorr sdn bhd | 2025",
        duration: "Event Crew • 7 Oct 2025 - 16 Oct 2025 • 10 days",
        achievements: [
            "✅ Assisted in event setup, coordination, and teardown tasks efficiently",
            "✅ Collaborated with teammates to ensure smooth event flow and logistics",
            "✅ Communicated effectively with guests and staff to provide support and information",
            "✅ Solved on-site problems quickly and adapted to last-minute changes",
            "✅ Encourage customers to engage with the event's game and distribution gift"
        ],
        image: ["img/knorr.jpg", "img/knorr1.jpeg", "img/knorr2.jpeg"],
        skills: ["Product promotion", "Consumer engagement", "Booth operation"]
    },

    {
        company: "Douyin Event Crew | Douyin sdn bhd | 2025",
        duration: "Event Crew • December 2025",
        achievements: [
            "✅ Generated new user leads through direct engagement and promotional activities in multiple outstation events",
            "✅ Contributed to increased event participation by teaching the installation process",
            "✅ Collected and analyzed customer feedback during promotional activities to provide insights"
        ],
        image: ["img/douyin1.jpeg", "img/douyin2.jpeg", "img/douyin3.jpeg"],
        skills: ["Lead generation", "Data collection", "Conflict resolution"]
    },
];

const experienceList = document.querySelector(".experience-list");

experienceData.forEach(exp => {
    const container = document.createElement("div");
    container.className = "experience";

    container.innerHTML = `
    <div class="info">
        <h2 class="info" id="intro">${exp.company}</h2>
        <h5 style="color: grey;">${exp.duration}</h5>
        <div class="experience-achievements">
            ${exp.achievements.map(achievement => `<p>${achievement}</p>`).join("")}
        </div>
        <div class="experience-image">
            ${exp.image.map(img => `<img src="${img}" >`).join("")}
        </div>
        <p class="skill-text">Skill gained : </p>
        <div class="experience-skill">
        ${exp.skills.map(skill => `
            <div class="skill-gained">
                    <p>${skill}</p>
            </div>
            `).join("")}
        </div>
    </div>
`;
    experienceList.appendChild(container);
});

// Edu-container auto generate
const educationData = [
    {
        institution: "Asia Pacific University",
        program: "Diploma in Software Engineering",
        achievements: [
            "A CGPA of 3.89 was maintained throughout the diploma studies",
            "4.0 GPA for both first & second semesters",
            "Full-stack developer",
            "Rust Malaysia Greet-Up Meetup"
        ]
    },

    {
        institution: "Sijil Pelajaran Malaysia - SMK Dato Onn",
        program: "Multimedia student",
        achievements: [
            "Basic in Microsoft Office Suite (Word, Excel, PowerPoint)",
            "Basic graphic design software (e.g., Adobe Photoshop)",
            "Basic versatile animator in 2D and 3D animation techniques (Adobe Flash, Autodesk 3D)"
        ]
    },

    {
        institution: "Srinakorn Foundation School",
        program: "Private Education Institution in Hat Yai, Thailand",
        achievements: [
            "Completed 7 years of education up to Grade 4",
            "Possess the capability in speaking, reading, writing, and listening",
            "Able to communicate effectively in Thai language"
        ]
    }
];

const eduList = document.querySelector("#edu-list");

educationData.forEach(edu => {
    const container = document.createElement("div");
    container.className = "edu-container";

    container.innerHTML = `
    <h4>${edu.institution}</h4>
    <p>${edu.program}</p>
    <div class="edu-achievement">
        ${edu.achievements.map(item => `<p>- ${item}</p>`).join("")}
    </div>`;

    eduList.appendChild(container);
});