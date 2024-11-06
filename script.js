function openModal(cardId) {
    const modal = document.getElementById("myModal");
    const title = document.getElementById("modalTitle");
    const description = document.getElementById("modalDescription");

    // Check if it's a project card or a research card
    if (cardId.startsWith('project')) {
        switch (cardId) {
            case 'project1':
                title.innerText = "Project Title 1";
                description.innerText = "This project aims to analyze stress-strain data collected from material testing, specifically focusing on determining key mechanical properties such as ultimate strength, yield strength, and stiffness. The analysis utilizes a CSV file containing experimental data, processes it to identify significant points in the stress-strain curve, and generates a report that summarizes the findings.";
                break;
            case 'project2':
                title.innerText = "Project Title 2";
                description.innerText = "This project serves as an essential tool for medical researchers, clinicians, or physicians, dealing with scoliosis data, facilitating the efficient organization, analysis, and presentation of complex datasets. By automatically transcribing and aggregating three-dimensional measurements, it reduces manual effort and enhances data accuracy, ultimately supporting informed decision-making in patient care.";
                break;
            case 'project3':
                title.innerText = "Project Title 3";
                description.innerText = "This project aims to find densities and non-symmetric calculations among cancer cells that is currently pending. In finding these densities and correlations, I can hopefully uncover grouping mechanisms that show how Killer CD8+ T-cells group around the tumor and affect the spread of cancer.";
                break;
            case 'project4':
                title.innerText = "Project Title 4";
                description.innerText = "This website helps students at tOSU connect with faculty to find research. After implementing a complex data scraper to get emails, labs, and names dynamically and developing a keyword algorithm to match students across departments, this website has received over 11k views and helped a lot of students.";
                break;
            default:
                title.innerText = "Unknown Project";
                description.innerText = "No details available.";
        }
    } else if (cardId.startsWith('research')) {
        switch (cardId) {
            case 'research1':
                title.innerText = "Research Title 1";
                description.innerText = "Description for Research 1. This research focuses on analyzing the impact of X on Y, utilizing A methodology.";
                break;
            case 'research2':
                title.innerText = "Research Title 2";
                description.innerText = "Description for Research 2. This study investigates the correlation between B and C.";
                break;
            // Add more research cases as needed
            default:
                title.innerText = "Unknown Research";
                description.innerText = "No details available.";
        }
    } else {
        title.innerText = "Invalid Card";
        description.innerText = "Please select a valid project or research card.";
    }

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


