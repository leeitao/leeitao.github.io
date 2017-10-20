function OpenStreetMapNominatimGeocoder() {}
OpenStreetMapNominatimGeocoder.prototype.geocode = function (input) {
var endpoint = 'http://nominatim.openstreetmap.org/search?';
var query = 'format=json&q=' + input;
var requestString = endpoint + query;
return Cesium.loadJson(requestString)
.then(function (results) {
var bboxDegrees;
return results.map(function (resultObject) {
bboxDegrees = resultObject.boundingbox;
return {
displayName: resultObject.display_name,
destination: Cesium.Rectangle.fromDegrees(
bboxDegrees[2],bboxDegrees[0],bboxDegrees[3],bboxDegrees[1])};});});}
var viewer = new Cesium.Viewer('cesiumContainer',{  
imageryProvider:new Cesium.WebMapServiceImageryProvider({   
			url : './GlobalTMS',         
			layers: 'LocalTMS'   
		}), 
animation: true,baseLayerPicker: false,geocoder: false,timeline: true,sceneModePicker: false,navigationHelpButton: false,infoBox: true,vrButton: false,homeButton:true,geocoder: new OpenStreetMapNominatimGeocoder(),
});
viewer.scene.globe.depthTestAgainstTerrain = true;
viewer._cesiumWidget._creditContainer.style.display="none";
viewer.extend(Cesium.viewerCesiumNavigationMixin, {});
Cesium.Camera.DEFAULT_VIEW_RECTANGLE =
Cesium.Rectangle.fromDegrees(80, 22, 130, 50);
viewer.scene.globe.enableLighting = true;
viewer.scene.fog.enabled = true;
viewer.shadows = true;
var d = new Date();
var hour = 0 - d.getTimezoneOffset();
viewer.animation.viewModel.timeFormatter = function (date, viewModel) {
var dateZone8 = Cesium.JulianDate.addMinutes(date, hour, new Cesium.JulianDate());
var gregorianDate = Cesium.JulianDate.toGregorianDate(dateZone8);
var millisecond = Math.round(gregorianDate.millisecond);
if (Math.abs(viewModel._clockViewModel.multiplier) < 1) {
return Cesium.sprintf("%02d:%02d:%02d.%03d;", gregorianDate.hour, gregorianDate.minute, gregorianDate.second);
}
return Cesium.sprintf("%02d:%02d:%02d GMT+8", gregorianDate.hour, gregorianDate.minute, gregorianDate.second);
};
function toDate(y,m,d,h){
var start = Cesium.JulianDate.fromDate(new Date(y, m, d, h));
var stop = Cesium.JulianDate.addSeconds(start, 86400, new Cesium.JulianDate());
viewer.clock.startTime = start.clone();
viewer.clock.stopTime = stop.clone();
viewer.clock.currentTime = start.clone();
viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;
viewer.clock.multiplier = 1000;
viewer.timeline.zoomTo(start, stop);}
var ChunFen = document.getElementById('ChunFen');
ChunFen.onclick = function(){
toDate(2017,2,21,8);}
var XiaZhi = document.getElementById('XiaZhi');
XiaZhi.onclick = function(){
	toDate(2017,5,22,8);}
var QiuFen = document.getElementById('QiuFen');
QiuFen.onclick = function(){
	toDate(2017,8,23,8);}
var DongZhi = document.getElementById('DongZhi');
DongZhi.onclick = function(){
	toDate(2017,11,22,8);}
var layers = viewer.imageryLayers;
var GlobalTMS = layers.addImageryProvider(Cesium.createTileMapServiceImageryProvider({  
url : './GlobalTMS',  
credit : '离线本地TMS影像瓦片' 
}));
viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({ 
url: "http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles", 
layer: "tdtImgAnnoLayer", 
style: "default", format: "image/jpeg", tileMatrixSetID: "GoogleMapsCompatible", show: false}));
viewer.camera.flyTo({
destination: Cesium.Cartesian3.fromDegrees(114.6352161367,37.8933088638, 1546.0000313)});
function createModelXTZ(url, height) {
var position = Cesium.Cartesian3.fromDegrees(114.6352161367,37.8933088638, height);
var heading = Cesium.Math.toRadians(0);
var pitch =0;var roll = 0;
var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
var entity = viewer.entities.add({name : url,position : position,orientation : orientation,model : {uri : url,}});}
for (i=0;i<17;i++){if(i<10){createModelXTZ('./Data/0'+[i]+'.gltf',0.0);}else{createModelXTZ('./Data/'+[i]+'.gltf',0.0);}}