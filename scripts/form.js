const products = [
    { id: 1001, name: "Pinnacle Blender" },
    { id: 1002, name: "Pinnacle Gas Cooker" },
    { id: 1003, name: "Pinnacle Water Dispenser" },
    { id: 1004, name: "Pinnacle Refrigerator" },
    { id: 1005, name: "Pinnacle Electric Kettle" }
];

const select = document.getElementById("product");

// Populate Select Options
products.forEach(prod => {
    let option = document.createElement("option");
    option.value = prod.id;
    option.textContent = prod.name;
    select.appendChild(option);
});
