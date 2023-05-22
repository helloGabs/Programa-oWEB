/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Gabriel Cintra Brandão
DATA: 02/04/2023 */

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointment-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const calendar = document.getElementById('calendar');
        const time = document.getElementById('time');
        const doctor = document.getElementById('doctor');
        const appointmentType = document.getElementById('appointment-type');

        if (validateFields(calendar, time, doctor, appointmentType)) {
            const appointmentData = {
                doctorName: doctor.options[doctor.selectedIndex].text,
                appointmentType: appointmentType.options[appointmentType.selectedIndex].text,
                date: calendar.value,
                time: time.value,
            };

            saveAppointmentData(appointmentData);

            alert('Consulta registrada com sucesso!');
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });
});

function validateFields(calendar, time, doctor, appointmentType) {
    return (
        calendar.value !== '' &&
        time.value !== '' &&
        doctor.value !== '' &&
        appointmentType.value !== ''
    );
}

function saveAppointmentData(appointmentData) {

}
