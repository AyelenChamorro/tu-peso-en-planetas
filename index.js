function calcular() {
  const usuario = document.getElementById("usuario");
  const planeta = document.getElementById("planeta");

  let peso_final = document.getElementById("peso_final");
  /* let planeta = parseInt(
  prompt("Elije tu planeta \n 1 es para marte 2 es para jupiter")
); */
  let peso = parseInt(usuario.value);
  let pesoFinal;
  let gravedad_tierra = 9.8;
  let gravedad_marte = 3.7;
  let gravedad_jupiter = 24.8;

  if (planeta.value === "marte") {
    pesoFinal = (peso * gravedad_marte) / gravedad_tierra;
    pesoFinal = parseInt(pesoFinal);
    peso_final.textContent = `Tu peso en marte es ${pesoFinal}   kilos `;
  } else if (planeta.value === "jupiter") {
    pesoFinal = (peso * gravedad_jupiter) / gravedad_tierra;
    pesoFinal = parseInt(pesoFinal);
    peso_final.textContent = `Tu peso en jupiter es ${pesoFinal} kilos `;
  }
}
