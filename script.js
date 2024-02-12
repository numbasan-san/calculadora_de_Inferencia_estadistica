
var input_n = (document.getElementById('input_n'));
var input_r = (document.getElementById('input_r'));
var input_p = (document.getElementById('input_p'));
var input_lamda = (document.getElementById('input_lamda'));
var input_x = (document.getElementById('input_x'));
var input_mi = (document.getElementById('input_mi'));
var input_sigma = (document.getElementById('input_sigma'));
var input_z = (document.getElementById('input_z'));
var input_error = (document.getElementById('input_error'));
var input_total_pop = (document.getElementById('input_total_pop'));

var btn_list = document.getElementById('btn_list');
var btn_vars_names = document.getElementById('btn_vars_names');
var btn_sample_size = document.getElementById('btn_sample_size');

var output_formula = document.getElementById('output_formula');
var output_result = document.getElementById('output_result');
var output_forms = document.getElementById('output_forms');
var output_vars_names = document.getElementById('output_vars_names');
var output_sample_size = document.getElementById('output_sample_size');

function vars_names() {
  btn_vars_names.setAttribute("onClick", "clean_vars_names()");
  btn_vars_names.innerHTML = "Limpiar";
  output_vars_names.innerHTML =
  '<ul>'+
  '    <li>Distribución de Probabilidad Binomial (DPB):'+
  '        <ul>'+
  '            <li>n (número total de ensayos)</li>'+
  '            <li>r (número de éxitos deseado)</li>'+
  '            <li>p (probabilidad de éxito en un solo ensayo)</li>'+
  '            <li>q (probabilidad de fracaso en un solo ensayo: q = 1 - p)</li>'+
  '        </ul>'+
  '    </li>'+
  '    <li>Media de una Distribución Binomial (MDB):'+
  '        <ul>'+
  '            <li>n (número total de ensayos)</li>'+
  '            <li>p (probabilidad de éxito en un solo ensayo)</li>'+
  '        </ul>'+
  '    </li>'+
  '    <li>Desviación Estándar de una Distribución Binomial (DEDB):'+
  '        <ul>'+
  '            <li>n (número total de ensayos)</li>'+
  '            <li>p (probabilidad de éxito en un solo ensayo)</li>'+
  '            <li>q (probabilidad de fracaso en un solo ensayo, q = 1 - p)</li>'+
  '        </ul>'+
  '    </li>'+
  '    <li>Distribución de Poisson (DP):'+
  '        <ul>'+
  '            <li>λ (tasa media de ocurrencia)</li>'+
  '            <li>x (número de eventos que ocurren en un intervalo específico)</li>'+
  '            <li>e (número de Euler, o 2.7182)</li>'+
  '        </ul>'+
  '    </li>'+
  '    <li>Distribución Especial (DE):'+
  '        <ul>'+
  '            <li>x (valor de la variable aleatoria)</li>'+
  '            <li>μ (media)</li>'+
  '            <li>σ (desviación estándar)</li>'+
  '        </ul>'+
  '    </li>'+
  '  <li>Muestra Proporcional (Cualitativa):</li>' +
  '  <ul>' +
  '    <li>Población Desconocida (MPPCL-PD):' +
  '      <ul>' +
  '        <li>n (tamaño de la muestra)</li>' +
  '        <li>Z (valor crítico de la distribución normal estándar)</li>' +
  '        <li>p (proporción esperada en la población)</li>' +
  '        <li>q (complemento de la proporción esperada, q = 1 - p)</li>' +
  '        <li>e (margen de error)</li>' +
  '      </ul>' +
  '    </li>' +
  '    <li>Población Conocida (MPPCL-PC):' +
  '      <ul>' +
  '        <li>n (tamaño de la muestra)</li>' +
  '        <li>N (tamaño de la población)</li>' +
  '        <li>Z (valor crítico de la distribución normal estándar)</li>' +
  '        <li>p (proporción esperada en la población)</li>' +
  '        <li>q (complemento de la proporción esperada, q = 1 - p)</li>' +
  '        <li>e (margen de error)</li>' +
  '      </ul>' +
  '    </li>' +
  '  </ul>' +
  '  <li>Muestra Promedial (Cuantitativa):</li>' +
  '  <ul>' +
  '    <li>Población Desconocida (MPMCN-PD):' +
  '      <ul>' +
  '        <li>n (tamaño de la muestra)</li>' +
  '        <li>Z (valor crítico de la distribución normal estándar)</li>' +
  '        <li>σ (desviación estándar de la población)</li>' +
  '        <li>e (margen de error)</li>' +
  '      </ul>' +
  '    </li>' +
  '    <li>Población Conocida (MPMCN-PC):' +
  '      <ul>' +
  '        <li>n (tamaño de la muestra)</li>' +
  '        <li>N (tamaño de la población)</li>' +
  '        <li>Z (valor crítico de la distribución normal estándar)</li>' +
  '        <li>σ (desviación estándar de la población)</li>' +
  '        <li>e (margen de error)</li>' +
  '      </ul>' +
  '    </li>' +
  '  </ul>' +
  '</ul>';
  
}

function sample_size() {
  btn_sample_size.setAttribute("onClick", "clean_sample_size()");
  btn_sample_size.innerHTML = "Limpiar";
  output_sample_size.innerHTML =
  '<ul>' +
  '  <li>Muestra Proporcional (Cualitativa):</li>' +
  '  <ul>' +
  '    <li>Población Desconocida (MPPCL-PD): n = ((Z^2) * p * q) / (e^2)</li>' +
  '    <li>Población Conocida (MPPCL-PC): <br  /> n = (N * (Z^2) * p * q) / ((e^2) * (N - 1) + (Z^2) * p * q)</li>' +
  '  </ul>' +
  '  <li>Muestra Promedial (Cuantitativa):</li>' +
  '  <ul>' +
  '    <li>Población Desconocida (MPMCN-PD): n = ((Z^2) * (&#963^2)) / (e^2)</li>' +
  '    <li>Población Conocida (MPMCN-PC): <br  /> n = (N * (Z^2) * (&#963^2)) / ((e^2) * (N - 1) + (Z^2) * (&#963^2))</li>' +
  '  </ul>' +
  '</ul>';

}

function clean_sample_size() {
  btn_sample_size.setAttribute("onClick", "sample_size()");
  btn_sample_size.innerHTML = "Mostrar";
  output_sample_size.innerHTML = '';
}
function clean_vars_names() {
  btn_vars_names.setAttribute("onClick", "vars_names()");
  btn_vars_names.innerHTML = "Nombres de las Variables";
  output_vars_names.innerHTML = '';
}

/*
  Operaciones necesarias
*/
function factorial(num) { // Factorización
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

/* Las fórmulas calculadas */
function distri_bernoulli() { // Distribución de Probabilidad Binomial o de Bernoulli
  n = parseFloat(input_n.value)
  r = parseFloat(input_r.value)
  p = parseFloat(input_p.value / 100)
  q = parseFloat(1 - p)
  result = ((factorial(n) / (factorial(r) * factorial(n - r))) * (p**r) * (q ** (n-r))) * 100
  output_formula.innerHTML = 'Fórmula (DPB): P(x = r) = (n!/(r! * (n-r)!)) * p^r * q^(n-r)';
  output_result.innerHTML = result + '%';
}

function media_distri_binom() { // Media de Distribución Binomial
  n = parseFloat(input_n.value)
  p = parseFloat(input_p.value / 100)
  result = n * p
  output_formula.innerHTML = 'Fórmula (MDB): μ = n * p';
  output_result.innerHTML = result;
}

function desv_esta_distri_binom() { // Desviación Estandar Distribución Binomial
  n = parseFloat(input_n.value)
  p = parseFloat(input_p.value / 100)
  q = parseFloat(1 - p)
  result = Math.sqrt(n * p * q)
  output_formula.innerHTML = 'Fórmula (DEDB): &#963 = &#8730;(n * p * q)';
  output_result.innerHTML = result;
}

function poisson() { // Fómula de Poisson
  lamda = parseFloat(input_lamda.value * -1)
  x = parseFloat(input_x.value)
  e = 2.7182
  result = ((lamda ** x) * (e ** (lamda))) / factorial(x)
  output_formula.innerHTML = 'Fórmula (DP): P(x) = ((λ^x) * (2.7182^(-λ)))/x!';
  output_result.innerHTML = result;
}

function distrib_espe() { // Distribución Especial
  mi = parseFloat(input_mi.value)
  x = parseFloat(input_x.value)
  sigma = parseFloat(input_sigma.value)
  result = ((x - mi) / sigma)
  output_formula.innerHTML = 'Fórmula (DE): Z = ((x - μ) / &#963)';
  output_result.innerHTML = result;
}

function MPPCL_PD() { // Muestra Proporcional (Cualitativa) Población Desconocida
  z = parseFloat(input_z.value)
  p = parseFloat(input_p.value / 100)
  q = parseFloat(1 - p)
  e = parseFloat(input_error.value)
  result = ((z ** 2) * p * q) / (e ** 2)
  output_formula.innerHTML = 'Fórmula (MPPCL-PD):  n = ((Z^2) * p * q) / (e^2)';
  output_result.innerHTML = result + ' ≈ ' + Math.ceil(result);
}

function MPPCL_PC() { // Muestra Proporcional (Cualitativa) Población Conocida
  N = parseFloat(input_total_pop.value)
  z = parseFloat(input_z.value)
  p = parseFloat(input_p.value / 100)
  q = parseFloat(1 - p)
  e = parseFloat(input_error.value)
  result = ((N * (z ** 2) * p * q) / ((e ** 2) * (N - 1) + (z^2) * p * q))
  output_formula.innerHTML = 'Fórmula (MPPCL-PC):  n = (N * (Z^2) * p * q) / ((e^2) * (N - 1) + (Z^2) * p * q)';
  output_result.innerHTML = result + ' ≈ ' + Math.ceil(result);
}

function MPMCN_PD() { // Muestra Promedial (Cuantitativa) Población Desconocida
  z = parseFloat(input_z.value)
  sigma = parseFloat(input_sigma.value)
  e = parseFloat(input_error.value)
  result = ((z ** 2) * (sigma ** 2)) / (e ** 2)
  output_formula.innerHTML = 'Fórmula (MPMCN-PD):  n = ((Z^2) * (σ^2)) / (e^2)';
  output_result.innerHTML = result + ' ≈ ' + Math.ceil(result);
}

function MPMCN_PC() { // Muestra Promedial (Cuantitativa) Población Conocida
  N = parseFloat(input_total_pop.value)
  z = parseFloat(input_z.value)
  p = parseFloat(input_p.value / 100)
  q = parseFloat(1 - p)
  e = parseFloat(input_error.value)
  sigma = parseFloat(input_sigma.value)
  e = parseFloat(input_error.value)
  result = (N * (z ** 2) * (sigma ** 2)) / ((e ** 2) * (N - 1) + (z ** 2) * (sigma ** 2))
  output_formula.innerHTML = 'Fórmula (MPMCN-PC):  n = (N * (Z^2) * (σ^2)) / ((e^2) * (N - 1) + (Z^2) * (σ^2))';
  output_result.innerHTML = result + ' ≈ ' + Math.ceil(result);
}
