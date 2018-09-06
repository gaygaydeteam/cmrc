import store from '../../store'
let H5API = {};
H5API.install = function (Vue, options) {
    let barcode = null;
    let backbuttonClickCount = 0;

    let h5api = Vue.prototype.$h5api =  {
        // 创建Barcode扫码控件
        createBarcode: function () {
            barcode = plus.barcode.create('barcode', [plus.barcode.QR], {
                top:'0',
                left:'0',
                right: '0',
                bottom: '0',
                width: '100%',
                height: '100%',
                position: 'absolute',
                frameColor: '#f2562e',
                scanbarColor: '#f2562e'
            });
            barcode.onmarked = onmarked;
            plus.webview.currentWebview().append(barcode);
            barcode.start();
            // 扫码成功回调
            function onmarked(type, result) {
                var text = '未知: ';
                switch(type){
                    case plus.barcode.QR:
                    text = 'QR: ';
                    break;
                    case plus.barcode.EAN13:
                    text = 'EAN13: ';
                    break;
                    case plus.barcode.EAN8:
                    text = 'EAN8: ';
                    break;
                }
                alert( text + result );
            }
        },
        // 移除扫码控件
        removeBarcode: function () {
            if(barcode) {
                barcode.close();
            }
        }
    }
    // 扩展API加载完毕后调用onPlusReady回调函数
    document.addEventListener("plusready", onPlusReady, false);
    // 扩展API加载完毕，现在可以正常调用扩展API
    function onPlusReady() {
        // 注册返回按键事件
        plus.key.addEventListener('backbutton', function() {
            h5api.removeBarcode();
            if(store.state.views.index === 0) {
                var main = plus.android.runtimeMainActivity();
                main.moveTaskToBack(false);
                return;
            }
            window.history.go(-1);
        }, false);
    }

}
export default H5API;

