var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MH_2023_1 = new ol.format.GeoJSON();
var features_MH_2023_1 = format_MH_2023_1.readFeatures(json_MH_2023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MH_2023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MH_2023_1.addFeatures(features_MH_2023_1);
var lyr_MH_2023_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MH_2023_1, 
                style: style_MH_2023_1,
                popuplayertitle: 'MH_2023',
                interactive: true,
                title: '<img src="styles/legend/MH_2023_1.png" /> MH_2023'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MH_2023_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MH_2023_1];
lyr_MH_2023_1.set('fieldAliases', {'TYPE': 'TYPE', 'SUM_SUPERF': 'SUM_SUPERF', 'MAX_TYPE': 'MAX_TYPE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MH_2023_1.set('fieldImages', {'TYPE': '', 'SUM_SUPERF': '', 'MAX_TYPE': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_MH_2023_1.set('fieldLabels', {'TYPE': 'no label', 'SUM_SUPERF': 'no label', 'MAX_TYPE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_MH_2023_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});