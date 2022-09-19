< script type = "text/javascript"
charset = "utf-8"
src = "https://files.cnblogs.com/files/liuzhou1/L2Dwidget.min.js" >
    <
    /script>  <
    script >
    L2Dwidget.init({
        "model": {
            //  模板文章  https://blog.csdn.net/weixin_30906185/article/details/94946561
            jsonPath: "https://unpkg.com/live2d-widget-model-koharu/assets/koharu.model.json", <!--这里改模型，前面后面都要改-->
            "scale": 1
        },
        "display": {
            "position": "left", <!--设置看板娘的上下左右位置-->
            "width": 150,
            "height": 300,
            "hOffset": 0,
            "vOffset": -20
        },
        "mobile": {
            "show": true,
            "scale": 0.5
        },
        "react": {
            "opacityDefault": 0.7, <!--设置透明度-->
            "opacityOnHover": 0.2
        }
    }); <
/script>