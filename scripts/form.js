const products = [
    { id: 1001, name: "Pinnacle Blender" },
    { id: 1002, name: "Pinnacle Gas Cooker" },
    { id: 1003, name: "Pinnacle Water Dispenser" },
    { id: 1004, name: "Pinnacle Refrigerator" },
    { id: 1005, name: "Pinnacle Electric Kettle" }
];

const select = document.getElementById("product");

products.forEach(item => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name;
    select.appendChild(option);
});
