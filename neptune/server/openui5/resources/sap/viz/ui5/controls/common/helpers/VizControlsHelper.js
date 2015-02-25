/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
jQuery.sap.declare('sap.viz.ui5.controls.common.helpers.VizControlsHelper');sap.viz.ui5.controls.common.helpers.VizControlsHelper={};
sap.viz.ui5.controls.common.helpers.VizControlsHelper.getFeedInstances=function(f){if(f){return sap.viz.ui5.controls.common.feeds.FeedItem.toInstances(f)}else{return[]}};
sap.viz.ui5.controls.common.helpers.VizControlsHelper.updateAxis=function(d,v,f){if(!f||f.length===0||!d||d.length===0){return}var a={};d.forEach(function(c){a[c.getName()]=c});var b=sap.viz.ui5.controls.common.helpers.VizControlsHelper._getFeedDefsMap(v);f.forEach(function(c){var e=b[c.getUid()];if(e.type!=='Dimension'){return}var g=e.aaIndex;c.getValues().forEach(function(h){var i=a[h.getName()];if(i){i.setAxis(g)}})})};
sap.viz.ui5.controls.common.helpers.VizControlsHelper.getFakedDataInstance=function(v,a,f){var g=sap.viz.ui5.controls.common.helpers.VizControlsHelper.getFeedInstances;var b=sap.viz.ui5.controls.common.helpers.VizControlsHelper.getDataInstance;var d=b(a);if(d){var c=new sap.viz.controls.services.FakeDataService(v,JSON.parse(JSON.stringify(d.data())),g(f));d=new sap.viz.api.data.CrosstableDataset();d.data(c.getVizDataset());return d}else{return null}};
sap.viz.ui5.controls.common.helpers.VizControlsHelper.getDataInstance=function(v){if(v){return v.getVIZDataset()}else{return null}};
sap.viz.ui5.controls.common.helpers.VizControlsHelper.updateFeedsByAAIndex=function(v,f){if(!f||f.length===0||f.length===1){return f}var a=sap.viz.ui5.controls.common.helpers.VizControlsHelper._getFeedDefsMap(v);if(a){f.sort(function(b,c){var d=a[b.getUid()];var e=a[c.getUid()];var p=d.aaIndex?d.aaIndex:d.aaIndex+1000;var g=e.aaIndex?e.aaIndex:e.aaIndex+1000;return p-g})}};
sap.viz.ui5.controls.common.helpers.VizControlsHelper.getSwitchBarGroups=function(){var L=sap.viz.controls.common.managers.LangManager;var s=[{"name":L.get("VIZ_SWITCHBAR_COLUMN_CHARTS"),"types":[{"id":"viz/column"},{"id":"viz/stacked_column"},{"id":"viz/dual_column"}]},{"name":L.get("VIZ_SWITCHBAR_LINE_CHARTS"),"types":[{"id":"viz/line"},{"id":"viz/area"},{"id":"viz/combination"},{"id":"viz/dual_line"},{"id":"viz/dual_combination"}]},{"name":L.get("VIZ_SWITCHBAR_PIE_CHARTS"),"types":[{"id":"viz/pie"},{"id":"viz/donut"}]},{"name":L.get("VIZ_SWITCHBAR_SCATTER_CHARTS"),"types":[{"id":"viz/scatter"},{"id":"viz/bubble"}]},{"name":L.get("VIZ_SWITCHBAR_MAP_CHARTS"),"types":[{"id":"viz/heatmap"},{"id":"viz/treemap"}]}];return s};
sap.viz.ui5.controls.common.helpers.VizControlsHelper._getFeedDefsMap=function(v){var a;try{a=sap.viz.api.manifest.Viz.get(v)[0].allFeeds()}catch(e){return null}var m={};for(var i=0;i<a.length;i++){m[a[i].id]=a[i]}return m};
