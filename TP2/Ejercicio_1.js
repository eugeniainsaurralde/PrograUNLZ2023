function opciones() {
  let opcion;
  do {
    opcion = parseInt(
      prompt(
        "Elija una opcion e ingrese su respectivo numero:\n 1- Contador incremental/ decremental\n 2- Contador incremental+3\n 3- Juego de la oca\n 4- Salir "
      )
    );
    switch (opcion) {
      case 1:
        ejercicio_1();
        break;
      case 2:
        ejercicio_2();
        break;
      case 3:
        ejercicio_3();
        break;
      case 4:
        alert("Hasta luego!");
        break;
      default:
        alert("ERROR. Ingrese un número correspondiente a alguna opción.");
    }
  } while (opcion != 4);

  function ejercicio_1() {
    let number_1 = pedirEntero("Ingrese un número", 0, 100);
    let number_2 = pedirEntero("Ingrese otro número", 0, 100);

    if (number_1 < number_2) {
      for (let i = number_1; i <= number_2; i++) {
        console.log("Contador: " + i);
      }
    } else {
      for (let i = number_1; i >= number_2; i--) {
        console.log("Contador: " + i);
      }
    }
  }
  function ejercicio_2() {
    let number_1 = pedirEntero(
      "Ingrese un número, este le indicará al contador desde donde comenzar.",
      0,
      100
    );
    let number_2 = pedirEntero(
      "Ingrese cuantas veces quiere que el contador itere, tenga en cuenta que avanza de 3 en 3.",
      0,
      100
    );
    let contador = 0;

    for (let i = number_1; contador < number_2; i = i + 3) {
      contador++;

      console.log(contador + "- Acumulador: " + i);
    }
  }
  function ejercicio_3() {
    let number_1 = pedirEntero(
      "Ingrese el avance que quiere que tenga su personaje.",
      0,
      100
    );
    let number_2 = pedirEntero(
      "Ingrese el retroceso que tendrá su personaje. Debe ser un número entre 1 y " +
        number_1,
      0,
      number_1
    );
    let number_3 = pedirEntero(
      "Indique en que dígito quiere que se termine el juego.",
      0,
      100
    );
    let posicion = 0;
    while (posicion <= number_3) {
      posicion += number_1;
      console.log(`Con ${number_1}, avanzamos a la casilla ${posicion}.`);
      posicion -= number_2;
      console.log(
        `Con ${number_2}, retrocedemos hasta la casilla ${posicion}.`
      );
    }
    console.log("La oca llegó. Fin del proceso.");
  }
}

function pedirEntero(mensaje, minimo, maximo) {
  let number = parseInt(prompt(mensaje));
  while (number < minimo || number > maximo || isNaN(number)) {
    number = parseInt(prompt("Error. Reingrese: "));
  }
  return number;
}
