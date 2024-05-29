
const equipmentListDiv = document.getElementById("equipment-list")
let equipment = [];

document.addEventListener("DOMContentLoaded", function() {
    fetchAllEquipment();
});

function fetchAllEquipment() {
    fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment")
        .then(resp => resp.json())
        .then(data => {
            equipment = equipment.concat(data.data);
            loopInAttributes();
        })
       
}

function loopInAttributes() {
    equipment.forEach(item => addAttributes(item))
}

function addAttributes(item){
    const div = document.createElement('div')
    const h3 = document.createElement("h3")
    h3.textContent = item.name;


    const img = document.createElement("img");
    img.src = item.image
    img.alt = item.name
    img.style.display = 'none' // Initially hide the image
    img.className = "mouse-img"
    div.addEventListener('mouseover', () => {
        img.style.display = 'block'; // Show the image on hover
    });

    div.addEventListener('mouseout', () => {
        img.style.display ='none'; // Hide the image when not hovering
    })

    const h4 = document.createElement("h4")
    div.addEventListener("click", () => {
        h4.textContent = "Common Locations: " + item.common_locations;
    })

    
    div.appendChild(h3)
    div.appendChild(img)
    div.appendChild(h4)
    equipmentListDiv.appendChild(div)
}



