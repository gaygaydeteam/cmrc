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
            top:'0px',
            left:'0px',
            width: '100%',
            height: '100%',
            position: 'fixed'
        });
        // barcode.onmarked = onmarked;
        plus.webview.currentWebview().append(barcode);
    }
    barcode.start();
}
export {
    createBarcode
}
