document.addEventListener("DOMContentLoaded", () => {
    const addMedicineForm = document.getElementById("add-medicine-form");
    const medicineNameInput = document.getElementById("medicine-name");
    const medicineList = document.getElementById("medicine-list");

    function addMedicine(name) {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        listItem.classList.add("medicine-item");
        listItem.addEventListener("click", () => {
            listItem.remove();
        });
        medicineList.appendChild(listItem);
    }

    addMedicineForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const medicineName = medicineNameInput.value.trim();
        if (medicineName) {
            addMedicine(medicineName);
            medicineNameInput.value = "";
        }
    });
});
