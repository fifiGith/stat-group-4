var map = new Datamap({
    element: document.getElementById('choropleth'),
    height: 500,
    setProjection: function(element) {
      var projection = d3.geo.equirectangular()
          .center([40, 50])
          .rotate([4.4, 0])
          .scale(700)
          .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
      var path = d3.geo.path()
          .projection(projection);
      return {path: path, projection: projection};
      },
    fills: {
        GRC: '#ee4035',
        POL: '#f37736',
        RUS: '#fdf498',
        BGR: '#7bc043',
        ROU: '#0932cf',
        defaultFill: '#e7eff6'
    },
    data: {
        GRC: {
            fillKey: 'GRC',
            Population: 10.77
        },
        POL: {
            fillKey: 'POL',
            Population: 38.43
        },
        RUS: {
            fillKey: 'RUS',
            Population: 144.5
        },
        BGR: {
            fillKey: 'BGR',
            Population: 7.102
        },
        ROU: {
            fillKey: 'ROU',
            Population: 19.64
        }
    },
    geographyConfig: {
      highlightFillColor: function(data) {
          if (data.fillKey) {
              return data.fillKey;
          }
          return '#e7eff6';
      },
        popupTemplate: function(geo, data) {
            return ['<div class="hoverinfo"><strong>',
                    geo.properties.name,'<div >',
                    'Population : ' + data.Population +'Million',
                    '</div></strong></div>'].join('');
        }
    }

});