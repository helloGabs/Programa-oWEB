document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const patientList = document.getElementById('patient-list');


    const patients = [
        { name: 'Pedro da Silva', cpf: '839.579.190-96' },
        { name: 'Ana Souza', cpf: '257.007.490-09' },
        { name: 'José Alencar', cpf: '499.437.510-02' },
        { name: 'Maria Santos', cpf: '928.453.380-58' },
        { name: 'João Pereira', cpf: '682.390.430-54' },
        { name: 'Fernanda Silva', cpf: '370.074.100-65' },
        { name: 'Luiz Gonzaga', cpf: '924.298.720-48' },
        { name: 'Rafaela Oliveira', cpf: '430.912.670-75' },
    ];
    
    function displayPatients(patientsToDisplay) {
        patientList.innerHTML = '';
        patientsToDisplay.forEach(patient => {
            const patientDiv = document.createElement('div');
            patientDiv.innerHTML = `<strong>Nome:</strong> ${patient.name} <br> <strong>CPF:</strong> ${patient.cpf}`;
            patientList.appendChild(patientDiv);
        });
    }

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = document.getElementById('search').value;
        const filteredPatients = patients.filter(patient =>
            patient.name.includes(searchTerm) || patient.cpf.includes(searchTerm)
        );
        displayPatients(filteredPatients);
    });

    displayPatients(patients);
});
