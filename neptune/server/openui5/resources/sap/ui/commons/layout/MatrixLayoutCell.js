/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.layout.MatrixLayoutCell");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.commons.layout.MatrixLayoutCell",{metadata:{publicMethods:["addStyleClass","removeStyleClass","hasStyleClass"],library:"sap.ui.commons",aggregatingType:"MatrixLayoutRow",properties:{"backgroundDesign":{type:"sap.ui.commons.layout.BackgroundDesign",group:"",defaultValue:'Transparent'},"colSpan":{type:"int",group:"",defaultValue:1},"hAlign":{type:"sap.ui.commons.layout.HAlign",group:"",defaultValue:'Begin'},"padding":{type:"sap.ui.commons.layout.Padding",group:"",defaultValue:'End'},"rowSpan":{type:"int",group:"",defaultValue:1},"separation":{type:"sap.ui.commons.layout.Separation",group:"",defaultValue:'None'},"vAlign":{type:"sap.ui.commons.layout.VAlign",group:"",defaultValue:'Middle'}},defaultAggregation:"content",aggregations:{"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content"}}}});jQuery.sap.require("sap.ui.core.CustomStyleClassSupport");sap.ui.core.CustomStyleClassSupport.apply(sap.ui.commons.layout.MatrixLayoutCell.prototype);