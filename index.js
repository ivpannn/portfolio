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
        image: "img/linedup_project_flyer.png",
        details_img: "img/linedup_detailed_img.png",
        title: "LinedUp",
        description: "A mobile application that allows users to join virtual queues for various restaurants, improving the overall dining experience. The admin can manage the queue and monitor the restaurant's performance.",
        skills: ["React Native", "ExpressJS", "Typescript", "NodeJS", "PrismaORM", "PostgreSQL"],
        source: "https://github.com/ivpannn/LinedUp"
    },

    {
        image: "img/sidequest_project_flyer.png",
        details_img: "img/sidequest_project_flyer.png",
        title: "SideQuest",
        description: "A mobiile application that allows users to host, participate, and discover in local events, fostering community engagement and social interaction.",
        skills: ["React Native", "TailwindCSS", "ExpressJS", "Typescript", "Socket.io", "PrismaORM", "SQLite", "React Native Maps"],
        source: ""
    },

    {
        image: "img/ecoquest-pjt.png",
        details_img: "img/ecoquest_detailed_img.png",
        title: "EcoQuest",
        description: "A web app project that enables users to track their contributions and promotes environmental sustainability and awareness.",
        skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        source: "https://github.com/ivpannn/EcoQuest"
    },

    {
        image: "img/portfolio_flyer.png",
        details_img: "img/portfolio_flyer.png",
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase my projects and skills.",
        skills: ["HTML", "CSS", "JavaScript"],
        source: "https://github.com/ivpannn/portfolio"
    },
];

const projectList = document.getElementById("project-card");
const projectCardDetails = document.getElementById("project-card-details");

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

// pop-up project card details
projectList.addEventListener("click", (event) => {
    const projectCard = event.target.closest(".projects");
    if (projectCard) {
        const projectTitle = projectCard.querySelector(".title").textContent;
        const project = projectData.find(pjt => pjt.title === projectTitle);

        if (project) {
            const sourceLink = project.source ? `
                    <a href="${project.source}" target="_blank" rel="noreferrer" class="source-link">
                        <img src="img/github-svgrepo-com.svg" alt="View Source" class="source-icon">
                    </a>` : '';

            projectCardDetails.innerHTML = `
                <div class="project-details">
                    <button id="close-btn">&times;</button>
                    <h2>${project.title}</h2>
                    <img src="${project.details_img}" alt="${project.title}">
                    <p class="description">${project.description}</p>
                    <div class="skill-container">
                        ${project.skills.map(skill =>
                `<span class="skills">${skill}</span>`
            ).join("")}
                    </div>
                    ${sourceLink}
                </div>
            `;

            projectCardDetails.classList.add("active");
            document.body.classList.add("modal-open");
        }
    }
});

projectCardDetails.addEventListener("click", (event) => {
    if (event.target.id === "close-btn" || event.target === projectCardDetails) {
        projectCardDetails.classList.remove("active");
        document.body.classList.remove("modal-open");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && projectCardDetails.classList.contains("active")) {
        projectCardDetails.classList.remove("active");
        document.body.classList.remove("modal-open");
    }
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
        image: ["img/dreamhouz.png", "img/dreamhouz3.png", "img/dreamhouz2.png"],
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
        image: ["img/knorr.jpg", "img/knorr3.png", "img/knorr2.jpeg"],
        skills: ["Product promotion", "Consumer engagement", "Booth operation"]
    },

    {
        company: "Douyin Event Crew | Douyin sdn bhd | 2025",
        duration: "Event Crew • December 2025",
        achievements: [
            "✅ Contributed to increased event participation by teaching the deployment and usage process",
            "✅ Generated new user leads through direct engagement and promotional activities in multiple outstation events",
            "✅ Leveraging free incentives to stimulate active user participation.",
            "✅ Collected and analyzed customer feedback during promotional activities to provide insights"
        ],
        image: ["img/douyin1.png", "img/douyin2.jpeg", "img/douyin3.jpeg"],
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
            "A CGPA of 3.92 was maintained throughout the diploma studies",
            "4.0 GPA for both first, second & fourth semesters",
            "Full-stack developer (Built mobile and web applications using modern technologies)",
            "Rust Malaysia Greet-Up Meetup"
        ]
    },

    {
        institution: "Sijil Pelajaran Malaysia - SMK Dato Onn",
        program: "Multimedia stream (SPM, Malaysia national examination)",
        achievements: [
            "Basic in Microsoft Office Suite (Word, Excel, PowerPoint)",
            "Basic graphic design software (e.g., Adobe Photoshop)",
            "Basic versatile animator in 2D and 3D animation techniques (Adobe Flash, Autodesk 3D)",
            "Best Subject Award - Multimedia Production (SPM, Malaysia national examination)",
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