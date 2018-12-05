var map = new AMap.Map("container", {
    resizeEnable: true,
    center: [114.87785339, 24.11855508],
    zoom: 10
});
addMarker();

//添加marker标记
function addMarker() {
    map.clearMap();
    var marker = new AMap.Marker({
        map: map,
        position: [114.93488789, 24.24406894]
    });
	
	 //鼠标点击大坑水库弹出自定义的信息窗体
    AMap.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker.getPosition());
    });
	
	var marker2 = new AMap.Marker({
        map: map,
        position: [114.73134041, 24.14065361]
    });
	
	 //鼠标点击赤竹径水库弹出自定义的信息窗体
    AMap.event.addListener(marker2, 'click', function () {
        infoWindow2.open(map, marker2.getPosition());
    });
	
	var marker3 = new AMap.Marker({
        map: map,
        position: [114.84809160, 23.98718834]
    });
	
	 //鼠标点击白礤水库弹出自定义的信息窗体
    AMap.event.addListener(marker3, 'click', function () {
        infoWindow3.open(map, marker3.getPosition());
    });
	
	
   
}

//实例化大坑水库信息窗体
var title = '大坑水库',
    content = [];
content.push("<img src='./images/DK.jpg'>地址：广东省惠州市惠阳区永湖镇大坑村");
content.push("电话：0762-8562207");
content.push("<a href='./720/DKSK/index.html'>进入全景</a>");
var infoWindow = new AMap.InfoWindow({
    isCustom: true,  //使用自定义窗体
    content: createInfoWindow(title, content.join("<br/>")),
    offset: new AMap.Pixel(16, -45)
});

//实例化赤竹径水库信息窗体
var title = '赤竹径水库',
    content = [];
content.push("<img src='./images/CZ.jpg'>地址：广东省河源市东源县顺天镇赤竹径村");
content.push("电话：0762-8448189");
content.push("<a href='./720/CZJSK/index.html'>进入全景</a>");
var infoWindow2 = new AMap.InfoWindow({
    isCustom: true,  //使用自定义窗体
    content: createInfoWindow(title, content.join("<br/>")),
    offset: new AMap.Pixel(16, -45)
});

//实例化白礤水库信息窗体
var title = '白礤水库',
    content = [];
content.push("<img src='./images/BC.jpg'>地址：广东省河源市东源县灯塔镇");
content.push("电话：0762-8102400");
content.push("<a href='./720/BCSK/index.html'>进入全景</a>");
var infoWindow3 = new AMap.InfoWindow({
    isCustom: true,  //使用自定义窗体
    content: createInfoWindow(title, content.join("<br/>")),
    offset: new AMap.Pixel(16, -45)
});




//构建自定义信息窗体
function createInfoWindow(title, content) {
    var info = document.createElement("div");
    info.className = "custom-info input-card content-window-card";

    //可以通过下面的方式修改自定义窗体的宽高
    //info.style.width = "400px";
    // 定义顶部标题
    var top = document.createElement("div");
    var titleD = document.createElement("div");
    var closeX = document.createElement("img");
    top.className = "info-top";
    titleD.innerHTML = title;
    closeX.src = "https://webapi.amap.com/images/close2.gif";
    closeX.onclick = closeInfoWindow;

    top.appendChild(titleD);
    top.appendChild(closeX);
    info.appendChild(top);

    // 定义中部内容
    var middle = document.createElement("div");
    middle.className = "info-middle";
    middle.style.backgroundColor = 'white';
    middle.innerHTML = content;
    info.appendChild(middle);

    // 定义底部内容
    var bottom = document.createElement("div");
    bottom.className = "info-bottom";
    bottom.style.position = 'relative';
    bottom.style.top = '0px';
    bottom.style.margin = '0 auto';
    var sharp = document.createElement("img");
    sharp.src = "https://webapi.amap.com/images/sharp.png";
    bottom.appendChild(sharp);
    info.appendChild(bottom);
    return info;
}

//关闭信息窗体
function closeInfoWindow() {
    map.clearInfoWindow();
}