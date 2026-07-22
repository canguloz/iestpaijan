const estadisticasData = {
  ingresantes: {
    titulo: "Ingresantes por Año",
    datos: [
      { programa: "Enfermería Técnica", "2022": 44, "2023": 45, "2024": 50, "2025": 50 },
      { programa: "Producción Agropecuaria", "2022": 39, "2023": 40, "2024": 40, "2025": 26 },
      { programa: "Administración de Centros de Cómputo", "2022": 35, "2023": 35, "2024": 21, "2025": 21 }
    ]
  },
  matriculados: {
    titulo: "Matriculados por Año",
    datos: [
      { programa: "Enfermería Técnica", "2022": 80, "2023": 85, "2024": 88, "2025": 90 },
      { programa: "Producción Agropecuaria", "2022": 70, "2023": 72, "2024": 74, "2025": 65 },
      { programa: "Administración de Centros de Cómputo", "2022": 60, "2023": 63, "2024": 58, "2025": 55 }
    ]
  },
  egresados: {
    titulo: "Egresados por Año",
    datos: [
      { programa: "Enfermería Técnica", "2022": 40, "2023": 42, "2024": 44, "2025": 45 },
      { programa: "Producción Agropecuaria", "2022": 35, "2023": 38, "2024": 36, "2025": 32 },
      { programa: "Administración de Centros de Cómputo", "2022": 30, "2023": 33, "2024": 28, "2025": 25 }
    ]
  }
};

// cuerpo
function mostrarTabla(tipo) {
      const cardContainer = document.getElementById("card-container");
      cardContainer.innerHTML = ""; // limpiar

      const data = estadisticasData[tipo];
      if (!data) return;

      // Crear tarjeta
      const card = document.createElement("div");
      card.classList.add("card");

      // Título
      const h2 = document.createElement("h2");
      h2.textContent = data.titulo;
      card.appendChild(h2);

      // Tabla
      const table = document.createElement("table");

      // Cabecera
      const thead = document.createElement("thead");
      thead.innerHTML = `
        <tr>
          <th>Programa de Estudios</th>
          <th>2022</th>
          <th>2023</th>
          <th>2024</th>
          <th>2025</th>
        </tr>`;
      table.appendChild(thead);

      // Cuerpo
      const tbody = document.createElement("tbody");
      let total = {2022:0, 2023:0, 2024:0, 2025:0};

      data.datos.forEach(fila => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${fila.programa}</td>
          <td>${fila["2022"]}</td>
          <td>${fila["2023"]}</td>
          <td>${fila["2024"]}</td>
          <td>${fila["2025"]}</td>
        `;
        tbody.appendChild(tr);

        total["2022"] += fila["2022"];
        total["2023"] += fila["2023"];
        total["2024"] += fila["2024"];
        total["2025"] += fila["2025"];
      });
      table.appendChild(tbody);

      // Pie de tabla
      const tfoot = document.createElement("tfoot");
      tfoot.innerHTML = `
        <tr>
          <td>Total</td>
          <td>${total["2022"]}</td>
          <td>${total["2023"]}</td>
          <td>${total["2024"]}</td>
          <td>${total["2025"]}</td>
        </tr>`;
      table.appendChild(tfoot);

      card.appendChild(table);
      cardContainer.appendChild(card);

      // Mostrar tarjeta
      card.style.display = "block";
    }
