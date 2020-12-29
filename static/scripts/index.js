// ScrollTrigger
var trigger = new ScrollTrigger.default();
// Counters callback
function animateCallback(trigger) {
  let obj = trigger.element;
  let duration = 1500;
  let start = 0;
  let startTimestamp = null;
  let end = parseInt(obj.innerHTML);

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start) + '%';
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}


trigger.add('.graph.numbers span', {
  toggle: {
    callback: {
      in: animateCallback
    }
  }
})


mapboxgl.accessToken = // eslint-disable-line
  'pk.eyJ1IjoiaW5zaXR1dG9lc2NvbGhhcyIsImEiOiJja2Zpb2hiZWwwMjhzMnJxdWZ0ZHZzMXFmIn0.mneTdwquGBg11NhL1aX_Ww';

var mapLayers = {
  'comercializacao-eq-abastecimento': ['eq-abastecimento'],
  'comercializacao-escola-publica': ['escola-publica'],
  'comercializacao-hex-misto-innat': ['hex-misto-innat'],
  'comercializacao-hex-ultra': ['hex-ultra'],
  'agricultura-estabelecimentos-agro': ['estabelecimentos-agro'],
  'agricultura-producao-vbp': ['producao-vbp'],
  'agricultura-areas-ambientais': [
    'areas-ambientais-UCI',
    'areas-ambientais-UCS',
    'areas-ambientais-MAN',
    'areas-ambientais-PRO',
    'areas-ambientais-VER',
  ],
  'sintese-eq-abastecimento': ['eq-abastecimento'],
  'sintese-escola-publica': ['escola-publica'],
  'sintese-hex-misto-innat': ['hex-misto-innat'],
  'sintese-hex-ultra': ['hex-ultra'],
  'sintese-estabelecimentos-agro': ['estabelecimentos-agro'],
  'sintese-producao-vbp': ['producao-vbp'],
  'sintese-areas-ambientais': [
    'areas-ambientais-UCI',
    'areas-ambientais-UCS',
    'areas-ambientais-MAN',
    'areas-ambientais-PRO',
    'areas-ambientais-VER',
  ],
  'sintese-ipvs': ['ipvs'],
  'sintese-uso-mapbiomas': ['uso-mapbiomas'],
  'sintese-dens-pop': ['dens-pop'],
};

var mapComercializacao = new mapboxgl.Map({
  container: 'comercializacao-map-container',
  style: 'mapbox://styles/insitutoescolhas/ckg8fj2t70pvq19pe29xojx9c', // stylesheet location
  // style: 'mapbox://styles/insitutoescolhas/ckgwo0dop043119qkjb53c9bd', // stylesheet location
  center: [-46.516345, -23.538221], // starting position [lng, lat]
  zoom: 9, // starting zoom
  minZoom: 8,
  maxZoom: 13,
  maxBounds: [
    [-48.7, -25.5], // Southwest coordinates
    [-43.5, -22.0], // Northeast coordinates
  ],
});

var mapAgricultura = new mapboxgl.Map({
  container: 'agricultura-producao-map-container',
  style: 'mapbox://styles/insitutoescolhas/ckgwo0dop043119qkjb53c9bd', // stylesheet location
  center: [-46.516345, -23.538221], // starting position [lng, lat]
  zoom: 9, // starting zoom
  minZoom: 8,
  maxZoom: 13,
  maxBounds: [
    [-48.7, -25.5], // Southwest coordinates
    [-43.5, -22.0], // Northeast coordinates
  ],
});

var mapSintese = new mapboxgl.Map({
  container: 'sintese-map-container',
  style: 'mapbox://styles/insitutoescolhas/ckh0w7i8806l119mp7gabxw5k', // stylesheet location
  center: [-46.516345, -23.538221], // starting position [lng, lat]
  zoom: 9, // starting zoom
  minZoom: 8,
  maxZoom: 13,
  maxBounds: [
    [-48.7, -25.5], // Southwest coordinates
    [-43.5, -22.0], // Northeast coordinates
  ],
});

var mapInstances = {
  '#comercializacao': mapComercializacao,
  '#agricultura-producao': mapAgricultura,
  '#sintese': mapSintese,
};

// FLV - quantidade-flv
const chartFrutas = {
  bindto: '#chart-frutas',
  data: {
    columns: [
      ['hortalicas', 47, 28, 25, 26, 24],
      ['frutas', 60, 45, 28, 36, 26],
      ['cereais', 47, 34, 28, 30, 28],
      ['farinhas', 14, 9, 8, 8, 12],
      ['panificados', 28, 27, 24, 26, 18],
      ['carnes', 26, 31, 22, 23, 21],
      ['aves', 24, 21, 12, 13, 16],
      ['acucares', 25, 17, 14, 16, 14],
      ['sais', 8, 5, 6, 6, 5],
      ['oleos', 13, 8, 8, 8, 7],
      ['bebidas', 28, 37, 54, 56, 52],
    ],
    hide: [
      'cereais',
      'farinhas',
      'panificados',
      'carnes',
      'aves',
      'acucares',
      'sais',
      'oleos',
      'bebidas',
    ],
    colors: {
      cereais: '#f4898a',
      hortalicas: '#9b060e',
      frutas: '#ed2124',
      farinhas: '#2ffffa',
      panificados: '#67d681',
      carnes: '#00bf74',
      aves: '#0a5c5a',
      acucares: '#bcbec0',
      sais: '#939598',
      oleos: '#58595b',
      bebidas: '#000000',
    },
    names: {
      hortalicas: 'Hortaliças',
      frutas: 'Frutas',
      cereais: 'Cereais e leguminosas',
      farinhas: 'Farinhas e massas',
      panificados: 'Panificados',
      carnes: 'Carnes',
      aves: 'Aves e ovos',
      acucares: 'Açúcares',
      sais: 'Sais e condimentos',
      oleos: 'Óleos e gorduras',
      bebidas: 'Bebidas e infusões',
    },
  },
  axis: {
    x: {
      categories: ['87/88', '95/96', '2002/03', '08/09', '17/18'],
      tick: {
        centered: true,
      },
      type: 'category',
    },
    y: {
      min: 0,
      max: 60,
      padding: {
        bottom: 1,
        top: 5,
      },
      tick: {
        values: [0, 20, 40, 60],
      },
    },
  },
  grid: {
    y: {
      show: true,
    },
  },
  point: {
    r: 0,
    focus: {
      expand: {
        r: 3,
      },
    },
  },
  padding: {
    bottom: 20,
  },
};

// Industria
const chartIndustria = {
  bindto: '#chart-industria',
  data: {
    columns: [
      ['servico', 382, 455, 499, 488, 540, 613, 544],
      ['industria', 98, 99, 105, 91, 78, 113, 99],
      ['primaria', 27, 27, 26, 30, 27, 29, 28],
      ['comercio', 573, 588, 591, 651, 548, 663, 658],
    ],
    colors: {
      comercio: '#9b060e',
      servico: '#ff0000',
      industria: '#f4898a',
      primaria: '#2ffffa',
    },
    names: {
      comercio: 'Comércio de alimentos',
      servico: 'Serviços alimentares',
      industria: 'Indústria',
      primaria: 'Produção primária',
    },
    type: 'bar',
    groups: [['comercio', 'servico', 'industria', 'primaria']],
    order: 'asc',
  },
  axis: {
    x: {
      categories: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
      tick: {
        centered: true,
      },
      type: 'category',
    },
    y: {
      min: 0,
      max: 1500,
      padding: {
        bottom: 1,
        top: 5,
      },
      tick: {
        values: [0, 500, 1000, 1500],
      },
    },
  },
  grid: {
    y: {
      show: true,
    },
  },
  padding: {
    bottom: 20,
    left: 32,
  },
};

// Modelos
const chartModelos = {
  bindto: '#chart-modelos',
  data: {
    columns: [
      ['anual', -343334, -12458, 9766, 128034, 169134, 162679, 162679, 162679, 162679, 162679],
      ['acumulado', -343334, -355792, -258132, -130098, 39036, 201715, 364394, 527072, 689751, 852430],
    ],
    colors: {
      anual: '#f4898a',
      acumulado: '#9b060e',
    },
    names: {
      anual: 'Fluxo de Caixa Anual',
      acumulado: 'Fluxo de Caixa Acumulado',
    },
    type: 'bar',
    types: {
      acumulado: 'spline',
    },
    groups: [['anual', 'acumulado']],
    // order: 'asc',
  },
  axis: {
    x: {
      categories: [
        'Ano 1', 'Ano 2', 'Ano 3', 'Ano 4', 'Ano 5', 'Ano 6', 'Ano 7', 'Ano 8', 'Ano 9', 'Ano 10',
      ],
      tick: {
        centered: true,
      },
      type: 'category',
    },
    y: {
      min: -500000,
      max: 1000000,
      padding: {
        bottom: 1,
        top: 5,
      },
      tick: {
        values: [-500000, 0, 500000, 1000000],
      },
    },
  },
  grid: {
    y: {
      show: true,
    },
  },
  padding: {
    bottom: 20,
    left: 32,
  },
};

// Estabelecimentos
const chartEstabelecimentos = {
  bindto: '#chart-estabelecimentos',
  data: {
    columns: [
      ['nao_pronaf', 1.4, 0.4],
      ['pronaf_b', 32, 5.1],
      ['pronaf_v', 31.9, 6.2],
      ['nao_familiar', 34.7, 88.2],
    ],
    colors: {
      nao_pronaf: '#9b060e',
      pronaf_b: '#ff0000',
      pronaf_v: '#f4898a',
      nao_familiar: '#2ffffa',
    },
    names: {
      nao_pronaf: 'Agricultura Familiar-Não pronafiano',
      pronaf_b: 'Agricultura Familiar-Pronaf B',
      pronaf_v: 'Agricultura Familiar-Pronaf V',
      nao_familiar: 'Agricultura Não Familiar',
    },
    type: 'bar',
    groups: [['nao_pronaf', 'pronaf_b', 'pronaf_v', 'nao_familiar']],
    order: 'asc',
  },
  axis: {
    x: {
      categories: ['número de estabelecimentos (5.083)', 'área dos estabelecimentos (123.459ha)'],
      tick: {
        centered: true,
      },
      type: 'category',
    },
    y: {
      min: 0,
      max: 100,
      padding: {
        bottom: 1,
        top: 5,
      },
      tick: {
        values: [0, 100],
      },
    },
  },
  grid: {
    y: {
      show: true,
    },
  },
  padding: {
    bottom: 20,
    left: 32,
  },
};


// Estabelecimentos Agro
const chartEstabelecimentosAgro = {
  bindto: '#chart-estabelecimentos-agro',
  data: {
    columns: [
      ['hort_flor', 890, 782, 1306],
      ['pecuaria', 458, 433, 172],
      ['florestas_plantadas', 178, 103, 43],
      ['lav_permanentes', 146, 164, 67],
      ['lav_temporarias', 60, 138, 23],
      ['aquicultura', 27, 2, 3],
      ['outros', 7, 7, 5],
    ],
    colors: {
      outros: '#939598',
      aquicultura: '#0a5c5a',
      lav_temporarias: '#00bf74',
      lav_permanentes: '#9b060e',
      florestas_plantadas: '#ff0000',
      pecuaria: '#f4898a',
      hort_flor: '#2ffffa',
    },
    names: {
      outros: 'Outros (florestas nativas, sementes e mudas, pesca)',
      aquicultura: 'Aquicultura',
      lav_temporarias: 'Lavouras temporárias',
      lav_permanentes: 'Lavouras permanentes',
      florestas_plantadas: 'Florestas plantadas',
      pecuaria: 'Pecuária e outros animais',
      hort_flor: 'Horticultura e floricultura',
    },
    type: 'bar',
    groups: [['outros', 'aquicultura', 'lav_temporarias', 'lav_permanentes', 'florestas_plantadas', 'pecuaria', 'hort_flor']],
    order: 'asc',
  },
  axis: {
    x: {
      categories: [
        'Agricultura Não Familiar',
        'Agricultura Familiar-Pronaf B',
        'Agricultura Familiar-Pronaf V'
      ],
      tick: {
        centered: true,
      },
      type: 'category',
    },
    y: {
      min: 0,
      max: 1619,
      padding: {
        bottom: 1,
        top: 5,
      },
      tick: {
        values: [0, 1619],
      },
    },
  },
  grid: {
    y: {
      show: true,
    },
  },
  padding: {
    bottom: 20,
    left: 32,
  },
};



// Estabelecimentos VBP
const chartEstabelecimentosVBP = {
  bindto: '#chart-estabelecimentos-vbp',
  data: {
    columns: [
      ['alface', 109284],
      ['cogumelos', 72854],
      ['couve', 50463],
      ['espinafre', 26268],
      ['repolho', 23664],
      ['coentro', 18632],
      ['brocolis', 16380],
      ['cebolinha', 14636],
      ['rucula', 13246],
      ['mudas', 12978],
      ['couveflor', 11870],
      ['salsa', 10423],
      ['outros', 71115],
    ],
    colors: {
      alface: '#9b060e',
      cogumelos: '#ed2124',
      couve: '#2ffffa',
      espinafre: '#bcbec0',
      repolho: '#67d681',
      coentro: '#00bf74',
      brocolis: '#0a5c5a',
      cebolinha: '#000000',
      rucula: '#bcbc35',
      mudas: '#f2ef8c',
      couveflor: '#939598',
      salsa: '#58595b',
      outros: '#f4898a',
    },
    names: {
      alface: 'Alface',
      cogumelos: 'Cogumelos',
      couve: 'Couve',
      espinafre: 'Espinafre',
      repolho: 'Repolho',
      coentro: 'Coentro',
      brocolis: 'Brócolis',
      cebolinha: 'Cebolinha',
      rucula: 'Rúcula',
      mudas: 'Mudas',
      couveflor: 'Couve-flor',
      salsa: 'Salsa',
      outros: 'Outros',
    },
    type: 'pie',
    order: 'asc',
  },
  padding: {
    bottom: 20,
    left: 32,
  },
};


document.addEventListener('DOMContentLoaded', function () {
  // Charts
  c3.generate(chartFrutas);
  c3.generate(chartIndustria);
  c3.generate(chartModelos);
  c3.generate(chartEstabelecimentos);
  c3.generate(chartEstabelecimentosAgro);
  c3.generate(chartEstabelecimentosVBP);

  // Hide Modal
  let closeButtons = document.querySelectorAll('.close-nav a');
  Array.prototype.forEach.call(closeButtons, function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      let element = e.currentTarget;
      let targetName = element.getAttribute('data-target');
      let targetElement = document.getElementById(targetName);
      targetElement.style.display = 'none';
    });
  });

  // Display Modal
  let openModalElements = document.querySelectorAll('.open-modal a');
  Array.prototype.forEach.call(openModalElements, function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      let element = e.currentTarget;
      let targetName = element.getAttribute('data-target');
      let targetElement = document.getElementById(targetName);
      targetElement.style.display = 'block';
    });
  });

  // Mapbox
  for (var elementID in mapInstances) {
    let selector = elementID + ' .map-controls li a';
    let elements = document.querySelectorAll(selector);
    let mapInstance = mapInstances[elementID];

    // Standard behavior
    mapInstance.addControl(new mapboxgl.NavigationControl());
    mapInstance.scrollZoom.disable();

    // Layer controls
    Array.prototype.forEach.call(elements, function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        let element = e.currentTarget;
        let layerId = element.id;

        Array.prototype.forEach.call(mapLayers[layerId], function (layer) {
          var visibility = mapInstance.getLayoutProperty(layer, 'visibility');
          if (visibility === 'visible') {
            element.classList.remove('active');
            mapInstance.setLayoutProperty(layer, 'visibility', 'none');
          } else {
            element.classList.add('active');
            mapInstance.setLayoutProperty(layer, 'visibility', 'visible');
          }
        });
      });
    });
  }

  // Tipologias
  let tipoogiasLinksSelector = '.tipologias-titles .tipologias-title a';
  let tipoogiasLinksElements = document.querySelectorAll(tipoogiasLinksSelector);
  let tipoogiasDefaultElement = document.getElementById('tipologias-content-default');
  Array.prototype.forEach.call(tipoogiasLinksElements, function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
    });
    el.addEventListener('mouseenter', function (e) {
      let displayElement = document.getElementById(el.getAttribute('data-target-id'));
      displayElement.style.display = 'flex';
      displayElement.style.visibility = 'visible';
      displayElement.style.opacity = 1;

      tipoogiasDefaultElement.style.display = 'none';
      tipoogiasDefaultElement.style.visibility = 'hidden';
      tipoogiasDefaultElement.style.opacity = 0;
    });
    el.addEventListener('mouseout', function (e) {
      let displayElement = document.getElementById(el.getAttribute('data-target-id'));
      displayElement.style.display = 'none';
      displayElement.style.visibility = 'hidden';
      displayElement.style.opacity = 0;

      tipoogiasDefaultElement.style.display = 'flex';
      tipoogiasDefaultElement.style.visibility = 'visible';
      tipoogiasDefaultElement.style.opacity = 1;
    });
  });



  // Magnifier glass
  let posX, posY;
  let percentageX, percentageY;
  let targetDisplay;
  let magnifierGlass = document.getElementById('magnifier-glass');
  let elementsToMagnify = document.querySelectorAll('.to-magnify');

  Array.prototype.forEach.call(elementsToMagnify, function (el) {
    let displayElement = document.getElementById(el.getAttribute('data-to-display'));
    el.addEventListener('mouseenter', function (e) {
      e.preventDefault();
      displayElement.style.display = 'block';
      magnifierGlass.style.display = 'block';
    });
    el.addEventListener('mouseout', function (e) {
      e.preventDefault();
      displayElement.style.display = 'none';
      magnifierGlass.style.display = 'none';
    });
    el.addEventListener('mousemove', function (e) {
      e.preventDefault();
      magnifierGlass.style.display = 'block';
      if (e.target.classList.contains('to-magnify')) {
        posX = e.target.offsetLeft - e.target.scrollLeft;
        posY = e.target.offsetTop - e.target.scrollTop;

        percentageX = (e.pageX - posX) / e.target.width;
        percentageY = (e.pageY - posY) / e.target.height;

        displayElement.style.top = 175 - Math.round(percentageY * displayElement.height) + 'px';
        displayElement.style.left = 175 - Math.round(percentageX * displayElement.width) + 'px';

        magnifierGlass.style.top = e.pageY - 175 + 'px';
        magnifierGlass.style.left = e.pageX - 175 + 'px';
      }
    });
  });


});

// Scroll events
document.addEventListener('scroll', function () {

  // console.log(window.pageYOffset / (document.body.offsetHeight - window.innerHeight));

  document.body.style.setProperty(
    "--scroll",
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
  );

  var topHeader = document.getElementById('top-header');
  var element = this.scrollingElement;
  if (element.scrollTop > 145) {
    topHeader.classList.add('active');
  } else {
    topHeader.classList.remove('active');
  }
});
