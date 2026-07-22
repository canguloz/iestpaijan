
// Lista de calendarios por periodo
const calendarios = [
    //{ periodo: "2026-I", archivo: "../documentos/calendario-academico-2026-I.pdf" },
    { periodo: "2026-I", archivo: "../documentos/calendario_academico/calendario-academico-2026-I.pdf" },
  
];

// Buscar el calendario del periodo actual
const periodoActual = año + sufijo;
const calendario = calendarios.find(c => c.periodo == periodoActual);

// Asignar PDF al visor (sin toolbar para no mostrar descargar/imprimir)
if (calendario) {
  document.getElementById("visor-pdf").src = calendario.archivo + "#toolbar=0&navpanes=0&scrollbar=0";
} else {
  document.getElementById("calendario").innerHTML = "<p>calendario-academico-2026-I.pdf</p>";
}
