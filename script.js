// =====================================================
// SMOOTH SCROLLING
// =====================================================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const section = document.querySelector(
            this.getAttribute("href")
        );

        if (section) {

            section.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =====================================================
// WELCOME MESSAGE
// =====================================================

console.log(
    "Welcome to Manikandan's Portfolio Website"
);


// =====================================================
// NAVIGATION HIGHLIGHT
// =====================================================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav ul li a");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;


        if (
            window.pageYOffset >=
            sectionTop - 100
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.style.color = "white";


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.style.color = "#38bdf8";

        }

    });

});


// =====================================================
// TECHNOLOGY DATA
// =====================================================

const techData = {


    // =================================================
    // JAVA
    // =================================================

    "Java": {

        icon: "devicon-java-plain",

        projects: [

            {

                name:
                    "Data Acquisition System",

                client:
                    "ISRO Propulsion Complex (IPRC)",

                role:
                    "Software Developer",

                usage: [

                    "Full-stack application development",

                    "Backend development with Java and Spring Boot",

                    "Real-time data exchange"

                ]

            },


            {

                name:
                    "Data Handling Software System",

                client:
                    "Bharat Electronics Limited",

                role:
                    "Software Developer",

                usage: [

                    "Testing and reporting software",

                    "JavaFX desktop interface",

                    "Application development"

                ]

            }

        ]

    },


    // =================================================
    // SPRING BOOT
    // =================================================

    "Spring Boot": {

        icon:
            "devicon-spring-plain",

        projects: [

            {

                name:
                    "Data Acquisition System",

                client:
                    "ISRO Propulsion Complex (IPRC)",

                role:
                    "Software Developer",

                usage: [

                    "Backend application development",

                    "REST API and business services",

                    "Real-time data exchange"

                ]

            },


            {

                name:
                    "Burso Cost Allocation Application",

                client:
                    "MGT Consulting, USA",

                role:
                    "Software Engineer",

                usage: [

                    "Scalable microservices development",

                    "Backend services",

                    "REST API development"

                ]

            }

        ]

    },


    // =================================================
    // REACT
    // =================================================

    "React": {

        icon:
            "devicon-react-original",

        projects: [

            {

                name:
                    "Data Acquisition System",

                client:
                    "ISRO Propulsion Complex (IPRC)",

                role:
                    "Software Developer",

                usage: [

                    "Full-stack web application",

                    "Frontend development",

                    "Real-time data interface"

                ]

            },


            {

                name:
                    "Burso Cost Allocation Application",

                client:
                    "MGT Consulting, USA",

                role:
                    "Software Engineer",

                usage: [

                    "Frontend application development",

                    "UI development",

                    "Integration with backend services"

                ]

            }

        ]

    },


    // =================================================
    // MYSQL
    // =================================================

    "MySQL": {

        icon:
            "devicon-mysql-original",

        projects: [

            {

                name:
                    "Data Acquisition System",

                client:
                    "ISRO Propulsion Complex (IPRC)",

                role:
                    "Software Developer",

                usage: [

                    "Managing live stream records",

                    "Application data persistence",

                    "Database operations"

                ]

            },


            {

                name:
                    "Data Handling Software System",

                client:
                    "Bharat Electronics Limited",

                role:
                    "Software Developer",

                usage: [

                    "Application data storage",

                    "Data management",

                    "Reporting data"

                ]

            }

        ]

    },


    // =================================================
    // AWS
    // =================================================

    "AWS": {

        icon:
            "devicon-amazonwebservices-plain-wordmark",

        projects: [

            {

                name:
                    "Burso Cost Allocation Application",

                client:
                    "MGT Consulting, USA",

                role:
                    "Software Engineer",

                usage: [

                    "AWS cloud services",

                    "Microservices applications",

                    "Scalable cloud solution"

                ]

            },


            {

                name:
                    "Burso AI ChatBot System",

                client:
                    "MGT Consulting, USA",

                role:
                    "AI Engineer / MLOps",

                usage: [

                    "AWS Bedrock",

                    "AWS Lambda",

                    "Amazon OpenSearch"

                ]

            }

        ]

    },


    // =================================================
    // MICROSERVICES
    // =================================================

    "Microservices": {

        icon:
            "fa-solid fa-cubes",

        projects: [

            {

                name:
                    "Burso Cost Allocation Application",

                client:
                    "MGT Consulting, USA",

                role:
                    "Software Engineer",

                usage: [

                    "Scalable microservices architecture",

                    "Backend service development",

                    "Cloud-based application services"

                ]

            }

        ]

    },


    // =================================================
    // JAVAFX
    // =================================================

    "JavaFX": {

        icon:
            "fa-solid fa-desktop",

        projects: [

            {

                name:
                    "Data Handling Software System",

                client:
                    "Bharat Electronics Limited",

                role:
                    "Software Developer",

                usage: [

                    "Desktop application interface",

                    "Testing software",

                    "Reporting software"

                ]

            }

        ]

    },


    // =================================================
    // LLM
    // =================================================

    "LLM": {

        icon:
            "fa-solid fa-robot",

        projects: [

            {

                name:
                    "Burso AI ChatBot System",

                client:
                    "MGT Consulting, USA",

                role:
                    "AI Engineer / MLOps",

                usage: [

                    "LLM-based AI chatbot",

                    "RAG-based question answering",

                    "AI response generation"

                ]

            }

        ]

    },


    // =================================================
    // RAG CHATBOT
    // =================================================

    "RAG ChatBot": {

        icon:
            "fa-solid fa-comments",

        projects: [

            {

                name:
                    "Burso AI ChatBot System",

                client:
                    "MGT Consulting, USA",

                role:
                    "AI Engineer / MLOps",

                usage: [

                    "RAG-based AI chatbot",

                    "Retrieval Augmented Generation",

                    "Context-aware responses"

                ]

            }

        ]

    },


    // =================================================
    // OTHER TECHNOLOGIES
    // =================================================

    "JavaScript": {

        icon:
            "devicon-javascript-plain",

        projects: []

    },


    "HTML5": {

        icon:
            "devicon-html5-plain",

        projects: []

    },


    "CSS3": {

        icon:
            "devicon-css3-plain",

        projects: []

    },


    "MongoDB": {

        icon:
            "devicon-mongodb-plain",

        projects: []

    },


    "Google Cloud": {

        icon:
            "devicon-googlecloud-plain",

        projects: []

    },


    "Docker": {

        icon:
            "devicon-docker-plain",

        projects: []

    },


    "Git": {

        icon:
            "devicon-git-plain",

        projects: []

    },


    "GitHub": {

        icon:
            "devicon-github-original",

        projects: []

    },


    "REST APIs": {

        icon:
            "fa-solid fa-network-wired",

        projects: []

    },


    "Machine Learning": {

        icon:
            "fa-solid fa-brain",

        projects: []

    },


    "Deep Learning": {

        icon:
            "fa-solid fa-diagram-project",

        projects: []

    },


    "Cursor AI": {

        icon:
            "fa-solid fa-code",

        projects: []

    },


    "Artificial Intelligence": {

        icon:
            "fa-solid fa-microchip",

        projects: []

    },


    "Prompt Engineering": {

        icon:
            "fa-solid fa-wand-magic-sparkles",

        projects: []

    },


    "Windsurf": {

        icon:
            "fa-solid fa-wind",

        projects: []

    }

};


// =====================================================
// SHOW TECHNOLOGY DETAILS
// =====================================================

function showTechDetails(technology) {


    const modal =
        document.getElementById(
            "techModal"
        );


    const title =
        document.getElementById(
            "techModalTitle"
        );


    const subtitle =
        document.getElementById(
            "techModalSubtitle"
        );


    const projectsContainer =
        document.getElementById(
            "techProjects"
        );


    const iconContainer =
        document.getElementById(
            "techModalIcon"
        );


    // -----------------------------------------------
    // CHECK MODAL
    // -----------------------------------------------

    if (!modal) {

        console.error(
            "Technology modal was not found."
        );

        return;

    }


    // -----------------------------------------------
    // GET TECHNOLOGY DATA
    // -----------------------------------------------

    const data =
        techData[technology];


    // -----------------------------------------------
    // TECHNOLOGY TITLE
    // -----------------------------------------------

    title.textContent =
        technology;


    // -----------------------------------------------
    // TECHNOLOGY ICON
    // -----------------------------------------------

    if (
        data &&
        data.icon
    ) {

        iconContainer.innerHTML =
            `<i class="${data.icon}"></i>`;

    }
    else {

        iconContainer.innerHTML =
            `<i class="fa-solid fa-code"></i>`;

    }


    // -----------------------------------------------
    // NO PROJECT INFORMATION
    // -----------------------------------------------

    if (
        !data ||
        !data.projects ||
        data.projects.length === 0
    ) {


        subtitle.textContent =
            "Project usage information";


        projectsContainer.innerHTML = `

            <div class="no-projects">

                <i
                    class="fa-solid fa-circle-info">
                </i>

                <p>

                    Project usage details
                    have not been added yet.

                </p>

            </div>

        `;

    }


    // -----------------------------------------------
    // PROJECT INFORMATION EXISTS
    // -----------------------------------------------

    else {


        subtitle.textContent =
            `Used in ${data.projects.length} project${
                data.projects.length > 1
                    ? "s"
                    : ""
            }`;


        // Clear previous content

        projectsContainer.innerHTML =
            "";


        // -------------------------------------------
        // CREATE PROJECT CARDS
        // -------------------------------------------

        data.projects.forEach(
            project => {


                // Create usage list

                const usageList =
                    project.usage
                        .map(
                            item =>
                                `<li>${item}</li>`
                        )
                        .join("");


                // Add project card

                projectsContainer.innerHTML += `

                    <div
                        class="tech-project-card">


                        <!-- PROJECT TITLE -->

                        <div
                            class="tech-project-title">

                            <i
                                class="fa-solid fa-folder-open">
                            </i>

                            <h3>
                                ${project.name}
                            </h3>

                        </div>


                        <!-- PROJECT INFO -->

                        <div
                            class="tech-project-info">


                            <p>

                                <i
                                    class="fa-solid fa-building">
                                </i>

                                <strong>
                                    Client:
                                </strong>

                                ${project.client}

                            </p>


                            <p>

                                <i
                                    class="fa-solid fa-user">
                                </i>

                                <strong>
                                    Role:
                                </strong>

                                ${project.role}

                            </p>


                        </div>


                        <!-- USAGE -->

                        <div
                            class="tech-usage">


                            <h4>

                                <i
                                    class="fa-solid fa-code">
                                </i>

                                How I Used It

                            </h4>


                            <ul>

                                ${usageList}

                            </ul>


                        </div>


                    </div>

                `;

            }
        );

    }


    // -----------------------------------------------
    // OPEN MODAL
    // -----------------------------------------------

    modal.classList.add(
        "active"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    // Prevent background scrolling

    document.body.style.overflow =
        "hidden";

}


// =====================================================
// CLOSE TECHNOLOGY MODAL
// =====================================================

function closeTechModal() {


    const modal =
        document.getElementById(
            "techModal"
        );


    if (!modal) {

        return;

    }


    modal.classList.remove(
        "active"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    // Restore scrolling

    document.body.style.overflow =
        "";

}


// =====================================================
// CLOSE WHEN CLICKING OUTSIDE
// =====================================================

document.addEventListener(
    "click",
    function(event) {


        const modal =
            document.getElementById(
                "techModal"
            );


        if (
            modal &&
            event.target === modal
        ) {

            closeTechModal();

        }

    }
);


// =====================================================
// CLOSE WITH ESC KEY
// =====================================================

document.addEventListener(
    "keydown",
    function(event) {


        if (
            event.key === "Escape"
        ) {

            closeTechModal();

        }

    }
);
