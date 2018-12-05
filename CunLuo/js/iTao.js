/**
 * Created by iTao on 2017/11/3.
 */
 
var viewer = new Cesium.Viewer('cesiumContainer',{  
    animation: false,  //动画控件
    baseLayerPicker: false, //图层选择控件
    geocoder: true, //地名查找控件
    timeline: false, //时间线控件
    sceneModePicker: true, //投影方式控件
    navigationHelpButton: false, //帮助信息控件
    infoBox: true,  //信息详情控件	
	vrButton: false, //VR 按钮	
	homeButton: true, //初始
	fullscreenButton: true, //全屏
	sceneModePicker: false,//场景模式选择
	geocoder: false,//地名查找
	infoBox: false,//信息面板
	/* imageryProvider : new Cesium.ArcGisMapServerImageryProvider({
        url : 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
    }) */	
	imageryProvider:new Cesium.WebMapServiceImageryProvider({   
			url : './Data/TMS',         
			layers: 'LocalTMS'// Here just give layer name   
		}),
});  



//3dtile属性显示
//viewer.extend(Cesium.viewerCesium3DTilesInspectorMixin);

//添加指北针
//viewer.extend(Cesium.viewerCesiumNavigationMixin, {});

//相机能否看穿地面
viewer.scene.globe.depthTestAgainstTerrain = true;

//隐藏底部Logo信息
viewer._cesiumWidget._creditContainer.style.display="none";

//添加本地DEM
var cesiumTerrainProviderMeshes = new Cesium.CesiumTerrainProvider({    
	url :'../data/TerrainData',
    requestWaterMask : true,
    requestVertexNormals : true
});
//viewer.terrainProvider = cesiumTerrainProviderMeshes;

//加载TMS本地离线影像图层
var layers = viewer.imageryLayers;	
var GlobalTMS = layers.addImageryProvider(Cesium.createTileMapServiceImageryProvider({  
	url : './Data/TMS',  
	credit : '离线本地TMS影像瓦片'//仅仅是影像图层名称  
}));

//添加倾斜摄影模型	
	//C3D('../Data/TEMP/Production_7.json',-10 ); 
	
	

//加载天地图矢量信息
viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({ 
	url: "http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles", 
	layer: "tdtImgAnnoLayer", 
	style: "default", 
	format: "image/jpeg", 
	tileMatrixSetID: "GoogleMapsCompatible", 
	show: false
}));

//杨庄村实景模型
var YZC = document.getElementById('YZC');

YZC.onclick = function(){
	//相机飞行至项目
	viewer.camera.flyTo({
		destination: Cesium.Cartesian3.fromDegrees(115.2547259,36.3848511,1000.0)
	});
	
	C3D('./Data/YangZhuangCun/Production_1A_C3D.json',-20 );
	
}


//南冯庄村实景模型
var NFZ = document.getElementById('NFZ');

NFZ.onclick = function(){
	//相机飞行至项目
	viewer.camera.flyTo({
		destination: Cesium.Cartesian3.fromDegrees(115.2580608,36.3799780,1000.0)
	});
	
	C3D('./Data/NanFengZhuang/Production_1B_C3d.json',-20 );
	
	
}

//阎庙村实景模型
var YMC = document.getElementById('YMC');

YMC.onclick = function(){
	//相机飞行至项目
	viewer.camera.flyTo({
		destination: Cesium.Cartesian3.fromDegrees(115.2794172,36.3967860,1500.0)
	});
	
	C3D('./Data/YanMiaoCun/Production_1C_C3d.json',-20 );
	
	
}


