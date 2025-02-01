// Sample list of diseases with their descriptions and cures for Arecanut (Betel Nut)
const diseases = [
    {
        name: "Yellow Leaf Disease",
        description: "A bacterial infection that causes yellowing of the leaves, reducing photosynthesis and weakening the plant. It spreads through water, tools, or infected plant material, leading to stunted growth and eventual plant death if untreated.",
        cure: "Use copper-based fungicides or systemic bactericides. Remove and destroy infected leaves to prevent the spread of bacteria."
    },
    {
        name: "Bud Rot Disease",
        description: "A fungal infection that affects the buds, causing them to rot and decay. It thrives in humid conditions and can spread rapidly, destroying flowers and reducing crop yield.",
        cure: "Apply fungicides like carbendazim or mancozeb. Remove and destroy infected buds to stop the spread."
    },
    {
        name: "Root Rot Disease",
        description: "Caused by fungi like *Phytophthora* and *Pythium*, this disease decays roots, leading to wilting, yellowing, and plant death. It spreads in waterlogged or poorly drained soils.",
        cure: "Improve soil drainage and avoid overwatering. Apply fungicides to infected soil and plants."
    },
    {
        name: "Leaf Spot Disease",
        description: "Various fungi cause circular or irregular spots on leaves, reducing photosynthesis and weakening the plant. Spots may turn brown or black, leading to leaf drop.",
        cure: "Remove infected leaves and spray fungicides like Mancozeb or Carbendazim. Avoid overhead watering."
    },
    {
        name: "Tropical Root Rot",
        description: "A fungal disease that causes root decay, especially in humid and waterlogged conditions. It leads to stunted growth, yellowing, and plant death.",
        cure: "Apply fungicides and ensure proper drainage. Avoid overwatering and improve soil structure."
    },
    {
        name: "Leaf Blight",
        description: "Caused by the *Pestalotiopsis* fungus, this disease dries out leaves, causing brown or black lesions. It spreads quickly in warm, humid conditions.",
        cure: "Spray fungicides and remove dead or infected leaves. Ensure proper air circulation around plants."
    },
    {
        name: "Stem Bleeding",
        description: "A fungal infection that causes sap to leak from the stem, weakening the plant. It often occurs in damaged or stressed plants.",
        cure: "Prune affected areas and apply fungicides. Keep plants healthy to prevent infection."
    },
    {
        name: "Crown Rot Disease",
        description: "A fungal disease that rots the growing tip of the plant, causing wilting and death. It thrives in wet, poorly drained soils.",
        cure: "Treat with systemic fungicides and improve irrigation. Avoid waterlogging around the crown."
    },
    {
        name: "Coconut Rhinoceros Beetle",
        description: "These beetles damage the crown of the plant by feeding on it, leading to reduced growth and yield. They are common in tropical regions.",
        cure: "Use traps and insecticides to control beetles. Remove and destroy infected plant parts."
    },
    {
        name: "Aphid Infestation",
        description: "Aphids suck sap from leaves, causing deformed growth and spreading viral diseases. They reproduce quickly, leading to large infestations.",
        cure: "Use neem oil or insecticidal soaps to control aphids. Introduce natural predators like ladybugs."
    },
    {
        name: "Powdery Mildew",
        description: "A fungal disease that forms a white powdery coating on leaves, stems, and flowers. It reduces photosynthesis and weakens the plant.",
        cure: "Apply sulfur-based fungicides or neem oil. Improve air circulation and avoid overcrowding plants."
    },
    {
        name: "Downy Mildew",
        description: "A fungal disease causing yellow spots on leaves and a fuzzy growth on the underside. It spreads in cool, wet conditions.",
        cure: "Use copper-based fungicides and avoid overhead watering. Remove infected leaves promptly."
    },
    {
        name: "Fusarium Wilt",
        description: "A soil-borne fungal disease that causes yellowing, wilting, and death of plants. It blocks water and nutrient flow in the plant.",
        cure: "Use resistant plant varieties and rotate crops. Apply fungicides to infected soil."
    },
    {
        name: "Verticillium Wilt",
        description: "A fungal disease that causes wilting and yellowing of leaves, starting from the lower parts of the plant. It persists in soil for years.",
        cure: "Remove infected plants and rotate crops. Use soil fumigants to control the fungus."
    },
    {
        name: "Bacterial Blight",
        description: "A bacterial disease causing water-soaked lesions on leaves, stems, and fruits. It spreads through water, tools, or infected plants.",
        cure: "Use copper-based bactericides and remove infected parts. Avoid overhead watering."
    },
    {
        name: "Anthracnose",
        description: "A fungal disease causing dark, sunken lesions on leaves, stems, and fruits. It spreads in warm, humid conditions.",
        cure: "Apply fungicides like chlorothalonil. Remove and destroy infected plant debris."
    },
    {
        name: "Black Spot",
        description: "A fungal disease causing black spots on leaves, leading to defoliation. It thrives in warm, humid weather.",
        cure: "Spray fungicides and remove fallen leaves. Ensure proper air circulation around plants."
    },
    {
        name: "Rust",
        description: "A fungal disease causing orange or brown pustules on leaves and stems. It weakens the plant and reduces yield.",
        cure: "Apply fungicides and remove infected plant parts. Avoid overcrowding plants."
    },
    {
        name: "Mosaic Virus",
        description: "A viral disease causing mottled or streaked leaves, stunted growth, and reduced yield. It spreads through insects or infected tools.",
        cure: "Remove infected plants and control insect vectors like aphids. Use virus-free seeds."
    },
    {
        name: "Canker Disease",
        description: "A fungal or bacterial disease causing sunken, dead areas on stems, branches, or trunks. It weakens the plant and can lead to death.",
        cure: "Prune infected areas and apply fungicides or bactericides. Keep plants healthy to prevent infection."
    }
];

// Function to display diseases in the list
function displayDiseases(diseases) {
    const diseaseList = document.getElementById('disease-list');
    diseaseList.innerHTML = ''; // Clear the list before adding new items

    diseases.forEach(disease => {
        const li = document.createElement('li');
        li.textContent = disease.name;
        li.onclick = () => showDiseaseInfo(disease);
        diseaseList.appendChild(li);
    });
}

// Function to filter diseases based on the search input
function filterDiseases() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const filteredDiseases = diseases.filter(disease => disease.name.toLowerCase().includes(searchTerm));
    displayDiseases(filteredDiseases);
}

// Function to display detailed disease information in a modal
function showDiseaseInfo(disease) {
    document.getElementById('disease-name').textContent = disease.name;
    document.getElementById('disease-description').textContent = disease.description;
    document.getElementById('disease-cure').textContent = disease.cure;

    const modal = document.getElementById('disease-info-modal');
    modal.style.display = "flex";

    // Close modal when clicking on the close button
    document.querySelector('.close-btn').onclick = () => {
        modal.style.display = "none";
    };

    // Add functionality for the back button
    document.getElementById('back-btn').onclick = () => {
        modal.style.display = "none";
    };
}

// Initial display of all diseases
displayDiseases(diseases);
