var barcode = null;
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
    alert( text+result );
}
// 创建Barcode扫码控件
function createBarcode() {
    if(!barcode){
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
    }
    barcode.start();
}
export {
    createBarcode
}
