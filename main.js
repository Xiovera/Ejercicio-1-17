//prompt ("Por favor, ingrese el número de horas trabajadas");

var horasTrabajadas = document.getElementById("horas_trabajadas");
var pagoHora = document.getElementById("pago_hora");
var divSalida = document.getElementById("salida");

function calcular ()
{
	var valorPagoHoras = pagoHora.value;
	var valorCantidadHoras = horasTrabajadas;

	if(valorPagoHoras == || valorCantidadHoras == "")
	{
		//si es verdad hace esto:
		salida.innerHTML = "0.00";
		document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">No se ingresaron valores</div>';
	}else{
		console.log("Horas");
		pagoSemana1 = parseFloat(pagoHora.value) * parseFloat(horasTrabajadas.value);
		salida.innerHTML = pagoSemana1.toFixed(2);
	}
}