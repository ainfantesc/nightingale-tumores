// Diez categorías de tumores con más defunciones, todas las edades (columna B).
const tumores = [
  {
    "name": "Tumor maligno de la tráquea, de los bronquios y del pulmón",
    "hombres": 16606,
    "mujeres": 6691
  },
  {
    "name": "Tumor maligno del colon",
    "hombres": 5913,
    "mujeres": 4538
  },
  {
    "name": "Tumor maligno del páncreas",
    "hombres": 4302,
    "mujeres": 4090
  },
  {
    "name": "Tumor maligno de la mama",
    "hombres": 96,
    "mujeres": 6563
  },
  {
    "name": "Tumor maligno de la próstata",
    "hombres": 5967,
    "mujeres": 0
  },
  {
    "name": "Tumor maligno del hígado y vías biliares intrahepáticas",
    "hombres": 3655,
    "mujeres": 1612
  },
  {
    "name": "Tumores malignos del tejido linfático, de los órganos hematopoyéticos y de tejidos afines, excepto leucemia",
    "hombres": 2671,
    "mujeres": 2227
  },
  {
    "name": "Tumor maligno del estómago",
    "hombres": 2816,
    "mujeres": 1931
  },
  {
    "name": "Tumor maligno de sitios mal definidos, secundarios y de sitios no especificados",
    "hombres": 2275,
    "mujeres": 2009
  },
  {
    "name": "Tumor maligno de la vejiga",
    "hombres": 3386,
    "mujeres": 897
  }
];
const colores = { hombres: '#3678bd', mujeres: '#ed7e9d' };
const formato = n => n.toLocaleString('es-ES');
const totalMax = Math.max(...tumores.map(d => d.hombres + d.mujeres));
const chart = echarts.init(document.getElementById('chart-area'));

// En una rosa APILADA la superficie de cada banda es proporcional a su valor.
// ECharts roseType:'area' no admite apilamiento dentro de cada sector,
// por eso usamos una serie custom y dibujamos dos anillos por categoría.
function renderItem(params, api) {
  const i = api.value(0), h = api.value(1), m = api.value(2);
  const ancho = Math.min(api.getWidth(), api.getHeight());
  const cx = api.getWidth() * 0.43, cy = api.getHeight() * 0.51;
  const radioExterior = ancho * 0.39;
  const radioInterior = ancho * 0.075;
  const areaDisponible = radioExterior**2 - radioInterior**2;
  const rH = Math.sqrt(radioInterior**2 + areaDisponible * h / totalMax);
  const rT = Math.sqrt(radioInterior**2 + areaDisponible * (h + m) / totalMax);
  const paso = Math.PI * 2 / tumores.length;
  const inicio = -Math.PI / 2 + i * paso + 0.018;
  const fin = -Math.PI / 2 + (i + 1) * paso - 0.018;
  return {
    type: 'group',
    children: [
      { type:'sector', shape:{cx,cy,r0:radioInterior,r:rH,startAngle:inicio,endAngle:fin,clockwise:true}, style:{fill:colores.hombres,stroke:'#fff',lineWidth:1} },
      { type:'sector', shape:{cx,cy,r0:rH,r:rT,startAngle:inicio,endAngle:fin,clockwise:true}, style:{fill:colores.mujeres,stroke:'#fff',lineWidth:1} },
      { type:'text', silent:true, style:{x:cx + (radioExterior+15)*Math.cos((inicio+fin)/2), y:cy + (radioExterior+15)*Math.sin((inicio+fin)/2), text:String(i+1),fill:'#24354a',font:'bold 12px sans-serif',textAlign:'center',textVerticalAlign:'middle'} }
    ]
  };
}
const datosSerie = tumores.map((d,i) => [i,d.hombres,d.mujeres]);
function dibujar() {
  chart.setOption({
    title:{text:'Defunciones por tipo de tumor',subtext:'10 categorías con más defunciones · Todas las edades · Hombres y mujeres',left:'center'},
    tooltip:{trigger:'item',formatter:p=>{
      const d=tumores[p.dataIndex], t=d.hombres+d.mujeres;
      return `<strong>${p.dataIndex+1}. ${d.name}</strong><br/>Hombres: ${formato(d.hombres)} (${(100*d.hombres/t).toFixed(1)}%)<br/>Mujeres: ${formato(d.mujeres)} (${(100*d.mujeres/t).toFixed(1)}%)<br/><strong>Total: ${formato(t)}</strong>`;
    }},
    series:[{type:'custom',renderItem,coordinateSystem:'none',data:datosSerie, z:2}],
    graphic:[]
  });
}
dibujar();
window.addEventListener('resize',()=>{chart.resize();});
const listado = document.getElementById('listado');
listado.innerHTML = tumores.map((d,i)=>`<li><b>${i+1}.</b> ${d.name}: ${formato(d.hombres+d.mujeres)} (H: ${formato(d.hombres)}; M: ${formato(d.mujeres)})</li>`).join('');
