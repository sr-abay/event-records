// Events and conferences data
const awards = [
    { name: 'Lillian Elsinga Outstanding Student Leader Award 2024', location:'University of North Dakota' , date: 'May 2024', description: 'This award recognizes my service, achievement, and commitment to the University of North Dakota', link:''},
    { name: 'Best Graduate Level Poster Award', location:'University of North Dakota' , date: 'May 2024', description: 'Received first place for best poster awards - graduate level during CARS 2022, UND', link:''},
];
const events = [
    { name: 'IEEE PES T&D Conference and Exhibit', location:'Anaheim, CA' , date: 'May 2024', description: 'Represented Center for Cybersecurity Research (C2SR), UND during the conference and <b>presented poster on Malware attacks on DER.</b>', link:''},
    { name: 'DOE Energy Transition Summit 2024', location:'Arlington, VA' , date: 'March 2024', description: 'Represented Center for Cybersecurity Research (C2SR), UND during the conference', link:'' },
    { name: 'DOE Cyberforce Competition 2023', location:'Chicago, IL' , date: 'November 2023', description: 'Led a team of 4 members in the Cybersecurity National Level Competition (2023) – Cyberforce and secured 49th rank out of 105 teams organized by the U.S. Department of Energy and Argonne National Laboratory.', link:'https://blogs.und.edu/cem/2023/11/und-cyberhawks-soar-in-the-national-cybersecurity-showdown/' },
    { name: 'CYBERCON 2023 - A Critical Infrastructure and Cybersecurity Conference', location:'Bismarck, ND', date: 'October 2023', description: 'Represented Center for Cybersecurity Research (C2SR), UND during the conference and promoted lab activities.', link:'' },
    { name: 'DOE Cyberforce Competition 2022', location:'Remote', date: 'November 2022', description: 'Participated in a team of 4 members in the Cybersecurity National Level Competition (2022) – Cyberforce and secured 55th rank out of 169 teams organized by the U.S. Department of Energy and Argonne National Laboratory.', link:'' },
];

const conferences = [
    { name: 'IEEE International Conference on Electrical Engineering and Green Energy (CEEGE)', location:'Los Angeles, CA' ,date: 'May 2024', description: 'Presented the accepted paper on - <b>Transformer Neural Networks for Intrusion Diagnostic Unit (IDU) and Anomaly Detection in Distributed Energy Resources (DERs).' },
    { name: 'IEEE Annual Computing and Communication Workshop and Conference (CCWC)', location:'Las Vegas, NV' ,date: 'January 2024', description: 'Presented the accepted paper on - <b>Geomagnetic Storm Forecasting Using Machine Learning Models.' },
    { name: 'IEEE Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON)', location:'New York City, NY' ,date: 'October 2023', description: 'Presented the accepted paper on - <b>Cybersecurity Challenges and Solutions in IoT-based Precision Farming Systems.' },
    { name: 'IEEE International Conference on Electro Information Technology (EIT)', location:'Romeoville, IL' ,date: 'May 2023', description: 'Presented the accepted paper on - <b>Correlation of Egg counts, Micro-nutrients, and NDVI Distribution for Accurate Tracking of SCN Population Density Detection.' },
];

// Function to display events and conferences
function displayItems() {
    const eventList = document.getElementById('event-list');
    const conferenceList = document.getElementById('conference-list');
    const awardList = document.getElementById('award-list');

    awards.forEach(award => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${award.name}</strong> <br> <b>Location:</b> ${award.location} <br> <b>Date:</b> ${award.date} <br> <b>Description:</b> ${award.description} <br> ${award.link}`;
        awardList.appendChild(li);
    });

    events.forEach(event => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${event.name}</strong> <br> <b>Location:</b> ${event.location} <br> <b>Date:</b> ${event.date} <br> <b>Description:</b> ${event.description} <br> ${event.link}`;
        eventList.appendChild(li);
    });

    conferences.forEach(conference => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${conference.name}</strong> <br> <b>Location:</b> ${conference.location} <br> <b>Date:</b>: ${conference.date} <br> <b>Description:</b> ${conference.description}`;
        conferenceList.appendChild(li);
    });
}

// Call function to populate lists on page load
window.onload = displayItems;
