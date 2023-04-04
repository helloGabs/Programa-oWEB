document.getElementById('consulta-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const paciente = document.getElementById('paciente').value;
    const medico = document.getElementById('medico').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;
    const tipoConsulta = document.getElementById('tipo-consulta').value;
    const motivoConsulta = document.getElementById('motivo-consulta').value;
    const telefone = document.getElementById('telefone').value;

    const consulta = {
        paciente,
        medico,
        data,
        horario,
        tipoConsulta,
        motivoConsulta,
        telefone
    };

    exibirConsulta(consulta);
    this.reset();
});

function exibirConsulta(consulta) {
    const div = document.createElement('div');
    div.classList.add('consulta');

    div.innerHTML = `
        <p><strong>Paciente:</strong> ${consulta.paciente}</p>
        <p><strong>Médico:</strong> ${consulta.medico}</p>
        <p><strong>Data:</strong> ${consulta.data}</p>
        <p><strong>Horário:</strong> ${consulta.horario}</p>
        <p><strong>Tipo de consulta:</strong> ${consulta.tipoConsulta}</p>
        <p><strong>Motivo da consulta:</strong> ${consulta.motivoConsulta}</p>
        <p><strong>Telefone:</strong> ${consulta.telefone}</p>
        <hr>
    `;

    document.getElementById('consultas-list').appendChild(div);
}
