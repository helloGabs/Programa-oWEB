/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Gabriel Cintra Brandão
DATA: 02/04/2023 */


// Função usada para validar os campos do formul
function validateForm(event) {
    event.preventDefault();

    // usada para obter os dados
    const form = event.target;
    const name = form.elements.name.value.trim();
    const birthdate = form.elements.birthdate.value.trim();
    const cpf = form.elements.cpf.value.trim();
    const address = form.elements.address.value.trim();
    const phone = form.elements.phone.value.trim();

    // valida obrigatóriedade
    if (!name || !birthdate || !cpf || !address || !phone) {
        alert('Preencha todos os campos obrigatórios.');
        return;
    }

    // usada para adicionar pacientes no armazenamento
    let patients = JSON.parse(localStorage.getItem('patients'));
    if (!Array.isArray(patients)) {
        patients = [];
    }
    patients.push({ name, birthdate, cpf, address, phone });
    localStorage.setItem('patients', JSON.stringify(patients));

    // da clear no formulário
    form.reset();
}

// inclui submit ao formulário
const form = document.querySelector('#patient-form');
form.addEventListener('submit', validateForm);
