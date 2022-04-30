<template>
  <div class="map">
    <div id="container" class="container"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      MinList: [],
    };
  },
  mounted() {
    this.MinDep();
    setTimeout(() => {
      this.initMap(); //初始化地图
    }, 1000);
  },
  methods: {
    MinDep() {
      this.$axios({
        url: this.url + "/Screen/data",
        method: "get",
      }).then((res) => {
        console.log(res.data.data, "大屏");
        this.MinList = res.data.data;
      });
    },
    //构建地图
    initMap() {
      console.log("初始化地图");
      var _this = this;
      _this.map = new AMap.Map("container", {
        resizeEnable: true, //是否监控地图容器尺寸变化
        rotateEnable: true,
        pitchEnable: true,
        zoom: 11, //初始化地图层级
        pitch: 50,
        viewMode: "3D", //开启3D视图,默认为关闭
        buildingAnimation: true, //楼块出现是否带动画
        mapStyle: "amap://styles/darkblue",
      });
      // 类型为  1  拌合站    2   车辆   3 施工部位
      var startIcon1 = new AMap.Icon({
        // 图标尺寸
        size: new AMap.Size(50, 56),
        // 图标的取图地址
        // image: "http://121.36.254.84:8299/Captcha/icon/buzhidao.png",
        image: this.url + "/Captcha/icon/buzhidao.png",
        // 图标所用图片大小
        imageSize: new AMap.Size(50, 56),
      });
      // 车辆图标
      var startIcon2 = new AMap.Icon({
        size: new AMap.Size(50, 56),
        image: this.url + "/Captcha/icon/partCar.png",
        imageSize: new AMap.Size(50, 50),
      });
      // 施工部位图标
      var startIcon3 = new AMap.Icon({
        size: new AMap.Size(50, 56),
        image: this.url + "/Captcha/icon/hammer.png",
        imageSize: new AMap.Size(50, 56),
      });
      
      var Minmarker = [];
      var markersList=[];
      if(this.MinList != null){
        this.MinList.forEach((item) => {
        var listm = {};
        var type = "";
        var position = [];
        var icon = ""
        var form = {}
        if (item.type == 1) {
          type = 1;
          icon = startIcon1;
          position = [item.mixPlant.coordinateX, item.mixPlant.coordinateY];
          form = item.mixPlant
        } else {
          type = 2;
          icon = startIcon2
          position = [item.carModel.coordinateX, item.carModel.coordinateY];
          form = item.carModel
        }
        listm = {
          icon: icon,
          position: position,
          type: type,
          form : form
        };
        Minmarker.push(listm)
      });
      }
      console.log(Minmarker,'Minmarker');
      var markers = Minmarker
      // var markers = [
      //   {
      //     icon: startIcon1,
      //     position: [114.329036, 30.578641],
      //     type: 1,
      //   },
      //   {
      //     icon: startIcon1,
      //     position: [114.025728, 30.563809],
      //     type: 2,
      //   },
      //   {
      //     icon: startIcon1,
      //     position: [114.425756, 30.607333],
      //     type: 2,
      //   },
      // ];
      // 添加一些分布不均的点到地图上,地图上添加三个点标记，作为参照
      markers.forEach((marker) => {
        //构建信息窗体中显示的内容
        var info = [];
        if (marker.type == 1) {
          info.push(
            `<div class="mapcard f-01">
            <div class="top">${marker.form.name}</div>
            <div class="bom">
              <div class="bo-01">
                <div class='to-00'>
                  <div>
                    <span>负责人</span>
                    <span>${marker.form.responsibleUser || ""}</span>
                  </div>
                  <div>
                    <span>联系人</span>
                    <span>${marker.form.phone || ""}</span>
                  </div>
                </div>
                <div class="to-01">
                  <div>
                    <span>车辆数量</span>
                    <span>76辆</span>
                  </div>
                  <div>
                    <span>未出</span>
                    <span>76辆</span>
                  </div>
                  <div>
                    <span>闲置</span>
                    <span>0辆</span>
                  </div>
                </div>
                <div class="to-01">
                  <div>
                    <span>拌合站数量</span>
                    <span>6台</span>
                  </div>
                  <div>
                    <span>闲置</span>
                    <span>0台</span>
                  </div>
                </div>
                <div class='to-03'>
                  <div>
                    <span>最近生产混凝土强度等级</span>
                    <span>C20、C50</span>
                  </div>
                </div>
              </div>
            </div>
        </div>`
          );
        }
        else if(marker.type == 2){
          info.push(
            `<div class="mapcard f-03">
            <div class="top">${marker.form.plateNumber}-某拌合站</div>
            <div class="bom">
              <div class="bo-01">
                <div class='to-00'>
                  <div>
                    <span>驾驶员</span>
                    <span>王五</span>
                  </div>
                  <div>
                    <span>联系方式</span>
                    <span>18872769507</span>
                  </div>
                   <div>
                    <span>目的地</span>
                    <span>某施工部位</span>
                  </div>
                   <div>
                    <span>混凝土强度等级</span>
                    <span>C40</span>
                  </div>
                  <div>
                    <span>运输方量</span>
                    <span>20m³</span>
                  </div>
                  <div>
                    <span>预计到达时间</span>
                    <span>2021-11-24 18:18</span>
                  </div>
                  <div>
                    <span>订单号</span>
                    <span>4561548541215491516</span>
                  </div>
                </div>
              </div>
            </div>
        </div>`
          )
        }else {
          info.push(
            `<div class="mapcard">
          <div class="top">某施工部位信息</div>
          <div class="bom">
            <div class="bo-01">
              <div class='to-00'>
                <div>
                  <span>负责人</span>
                  <span>李四</span>
                </div>
                <div>
                  <span>联系人</span>
                  <span>18872769507</span>
                </div>
                 <div>
                  <span>最近生产混凝土强度等级</span>
                  <span>C20、C50</span>
                </div>
                 <div>
                  <span>需求方量</span>
                  <span>89m³</span>
                </div>
                <div>
                  <span>需求部位</span>
                  <span>某施工部位</span>
                </div>
              </div>
            </div>
          </div>
    </div>`
          );
        }
        var infoWindow = new AMap.InfoWindow({
          isCustom: true, //使用自定义窗体
          content: info.join(""), //使用默认信息窗体框样式，显示信息内容
        });
        var marker = new AMap.Marker({
          map: _this.map,
          icon: marker.icon,
          position: [marker.position[0], marker.position[1]],
          offset: new AMap.Pixel(-13, -30),
        });
        marker.on("mouseover", function () {
          infoWindow.open(_this.map, marker.getPosition());
        });
        marker.on("mouseout", function (e) {
          infoWindow.close(_this.map, marker.getPosition());
        });
        markersList.push(marker)
      });


    _this.map.setFitView(markersList);
    },
  },
};
</script>
<style lang="scss">
.map
{
    margin-bottom: 0;
}
.container
{
    width: 100vw;  height: 100vh;  margin: auto;
}

</style>
