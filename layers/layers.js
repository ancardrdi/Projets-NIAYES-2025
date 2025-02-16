ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32628").setExtent([77844.755940, 1380875.518479, 1031201.393953, 1875208.590041]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LIMITESCommunesNIAYES_1 = new ol.format.GeoJSON();
var features_LIMITESCommunesNIAYES_1 = format_LIMITESCommunesNIAYES_1.readFeatures(json_LIMITESCommunesNIAYES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_LIMITESCommunesNIAYES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITESCommunesNIAYES_1.addFeatures(features_LIMITESCommunesNIAYES_1);
var lyr_LIMITESCommunesNIAYES_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITESCommunesNIAYES_1, 
                style: style_LIMITESCommunesNIAYES_1,
                popuplayertitle: 'LIMITES Communes NIAYES',
                interactive: true,
                title: '<img src="styles/legend/LIMITESCommunesNIAYES_1.png" /> LIMITES Communes NIAYES'
            });
var format_COMMUNESCOUVERTES_2 = new ol.format.GeoJSON();
var features_COMMUNESCOUVERTES_2 = format_COMMUNESCOUVERTES_2.readFeatures(json_COMMUNESCOUVERTES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_COMMUNESCOUVERTES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNESCOUVERTES_2.addFeatures(features_COMMUNESCOUVERTES_2);
var lyr_COMMUNESCOUVERTES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNESCOUVERTES_2, 
                style: style_COMMUNESCOUVERTES_2,
                popuplayertitle: 'COMMUNES COUVERTES ',
                interactive: true,
                title: '<img src="styles/legend/COMMUNESCOUVERTES_2.png" /> COMMUNES COUVERTES '
            });
var format_COMMUNESAVECPROJET_3 = new ol.format.GeoJSON();
var features_COMMUNESAVECPROJET_3 = format_COMMUNESAVECPROJET_3.readFeatures(json_COMMUNESAVECPROJET_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_COMMUNESAVECPROJET_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNESAVECPROJET_3.addFeatures(features_COMMUNESAVECPROJET_3);
var lyr_COMMUNESAVECPROJET_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNESAVECPROJET_3, 
                style: style_COMMUNESAVECPROJET_3,
                popuplayertitle: 'COMMUNES AVEC PROJET.',
                interactive: false,
                title: '<img src="styles/legend/COMMUNESAVECPROJET_3.png" /> COMMUNES AVEC PROJET.'
            });
var format_PACAO_4 = new ol.format.GeoJSON();
var features_PACAO_4 = format_PACAO_4.readFeatures(json_PACAO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_PACAO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PACAO_4.addFeatures(features_PACAO_4);
var lyr_PACAO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PACAO_4, 
                style: style_PACAO_4,
                popuplayertitle: 'PACAO',
                interactive: true,
                title: '<img src="styles/legend/PACAO_4.png" /> PACAO'
            });
var format_OCPGIS_5 = new ol.format.GeoJSON();
var features_OCPGIS_5 = format_OCPGIS_5.readFeatures(json_OCPGIS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_OCPGIS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OCPGIS_5.addFeatures(features_OCPGIS_5);
var lyr_OCPGIS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OCPGIS_5, 
                style: style_OCPGIS_5,
                popuplayertitle: 'OCP GIS',
                interactive: true,
                title: '<img src="styles/legend/OCPGIS_5.png" /> OCP GIS'
            });
var format_AICCRA_6 = new ol.format.GeoJSON();
var features_AICCRA_6 = format_AICCRA_6.readFeatures(json_AICCRA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_AICCRA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AICCRA_6.addFeatures(features_AICCRA_6);
var lyr_AICCRA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AICCRA_6, 
                style: style_AICCRA_6,
                popuplayertitle: 'AICCRA',
                interactive: true,
                title: '<img src="styles/legend/AICCRA_6.png" /> AICCRA'
            });
var format_PARIIS_7 = new ol.format.GeoJSON();
var features_PARIIS_7 = format_PARIIS_7.readFeatures(json_PARIIS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_PARIIS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARIIS_7.addFeatures(features_PARIIS_7);
var lyr_PARIIS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARIIS_7, 
                style: style_PARIIS_7,
                popuplayertitle: 'PARIIS',
                interactive: true,
                title: '<img src="styles/legend/PARIIS_7.png" /> PARIIS'
            });
var format_PDCVR_8 = new ol.format.GeoJSON();
var features_PDCVR_8 = format_PDCVR_8.readFeatures(json_PDCVR_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_PDCVR_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDCVR_8.addFeatures(features_PDCVR_8);
var lyr_PDCVR_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDCVR_8, 
                style: style_PDCVR_8,
                popuplayertitle: 'PDCVR',
                interactive: true,
                title: '<img src="styles/legend/PDCVR_8.png" /> PDCVR'
            });
var format_PROVALECV_9 = new ol.format.GeoJSON();
var features_PROVALECV_9 = format_PROVALECV_9.readFeatures(json_PROVALECV_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_PROVALECV_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVALECV_9.addFeatures(features_PROVALECV_9);
var lyr_PROVALECV_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROVALECV_9, 
                style: style_PROVALECV_9,
                popuplayertitle: 'PROVALE CV',
                interactive: true,
                title: '<img src="styles/legend/PROVALECV_9.png" /> PROVALE CV'
            });
var format_PIESAN_10 = new ol.format.GeoJSON();
var features_PIESAN_10 = format_PIESAN_10.readFeatures(json_PIESAN_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_PIESAN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIESAN_10.addFeatures(features_PIESAN_10);
var lyr_PIESAN_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PIESAN_10, 
                style: style_PIESAN_10,
                popuplayertitle: 'PIESAN',
                interactive: true,
                title: '<img src="styles/legend/PIESAN_10.png" /> PIESAN'
            });
var format_RICOWAS_11 = new ol.format.GeoJSON();
var features_RICOWAS_11 = format_RICOWAS_11.readFeatures(json_RICOWAS_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_RICOWAS_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RICOWAS_11.addFeatures(features_RICOWAS_11);
var lyr_RICOWAS_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RICOWAS_11, 
                style: style_RICOWAS_11,
                popuplayertitle: 'RICOWAS',
                interactive: true,
                title: '<img src="styles/legend/RICOWAS_11.png" /> RICOWAS'
            });
var format_AGRIJEUNE_12 = new ol.format.GeoJSON();
var features_AGRIJEUNE_12 = format_AGRIJEUNE_12.readFeatures(json_AGRIJEUNE_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_AGRIJEUNE_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRIJEUNE_12.addFeatures(features_AGRIJEUNE_12);
var lyr_AGRIJEUNE_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRIJEUNE_12, 
                style: style_AGRIJEUNE_12,
                popuplayertitle: 'AGRIJEUNE',
                interactive: true,
                title: '<img src="styles/legend/AGRIJEUNE_12.png" /> AGRIJEUNE'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_LIMITESCommunesNIAYES_1.setVisible(true);lyr_COMMUNESCOUVERTES_2.setVisible(true);lyr_COMMUNESAVECPROJET_3.setVisible(true);lyr_PACAO_4.setVisible(true);lyr_OCPGIS_5.setVisible(true);lyr_AICCRA_6.setVisible(true);lyr_PARIIS_7.setVisible(true);lyr_PDCVR_8.setVisible(true);lyr_PROVALECV_9.setVisible(true);lyr_PIESAN_10.setVisible(true);lyr_RICOWAS_11.setVisible(true);lyr_AGRIJEUNE_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LIMITESCommunesNIAYES_1,lyr_COMMUNESCOUVERTES_2,lyr_COMMUNESAVECPROJET_3,lyr_PACAO_4,lyr_OCPGIS_5,lyr_AICCRA_6,lyr_PARIIS_7,lyr_PDCVR_8,lyr_PROVALECV_9,lyr_PIESAN_10,lyr_RICOWAS_11,lyr_AGRIJEUNE_12];
lyr_LIMITESCommunesNIAYES_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'CAR': 'CAR', 'FONCTION': 'FONCTION', 'TELEPHONE': 'TELEPHONE', });
lyr_COMMUNESCOUVERTES_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_COMMUNESAVECPROJET_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', 'COM_COUVER': 'COM_COUVER', 'layer': 'layer', 'path': 'path', });
lyr_PACAO_4.set('fieldAliases', {'nom': 'nom', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_OCPGIS_5.set('fieldAliases', {'NOM': 'NOM', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_AICCRA_6.set('fieldAliases', {'NOM': 'NOM', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_PARIIS_7.set('fieldAliases', {'NOM': 'NOM', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_PDCVR_8.set('fieldAliases', {'NOM': 'NOM', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_PROVALECV_9.set('fieldAliases', {'NOM': 'NOM', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_PIESAN_10.set('fieldAliases', {'nOM': 'nOM', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_RICOWAS_11.set('fieldAliases', {'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_AGRIJEUNE_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_LIMITESCommunesNIAYES_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'CAR': 'TextEdit', 'FONCTION': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_COMMUNESCOUVERTES_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_COMMUNESAVECPROJET_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', 'COM_COUVER': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PACAO_4.set('fieldImages', {'nom': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_OCPGIS_5.set('fieldImages', {'NOM': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_AICCRA_6.set('fieldImages', {'NOM': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_PARIIS_7.set('fieldImages', {'NOM': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_PDCVR_8.set('fieldImages', {'NOM': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_PROVALECV_9.set('fieldImages', {'NOM': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_PIESAN_10.set('fieldImages', {'nOM': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_RICOWAS_11.set('fieldImages', {'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_AGRIJEUNE_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_LIMITESCommunesNIAYES_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'hidden field', 'DEPARTEMEN': 'hidden field', 'COMMUNE': 'hidden field', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'CAR': 'hidden field', 'FONCTION': 'hidden field', 'TELEPHONE': 'hidden field', });
lyr_COMMUNESCOUVERTES_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'hidden field', 'DEPARTEMEN': 'hidden field', 'COMMUNE': 'hidden field', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'hidden field', 'TELEPHONE': 'hidden field', });
lyr_COMMUNESAVECPROJET_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'hidden field', 'DEPARTEMEN': 'hidden field', 'COMMUNE': 'inline label - always visible', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'hidden field', 'TELEPHONE': 'hidden field', 'COM_COUVER': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_PACAO_4.set('fieldLabels', {'nom': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_OCPGIS_5.set('fieldLabels', {'NOM': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_AICCRA_6.set('fieldLabels', {'NOM': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_PARIIS_7.set('fieldLabels', {'NOM': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_PDCVR_8.set('fieldLabels', {'NOM': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_PROVALECV_9.set('fieldLabels', {'NOM': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_PIESAN_10.set('fieldLabels', {'nOM': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_RICOWAS_11.set('fieldLabels', {'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_AGRIJEUNE_12.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_AGRIJEUNE_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});