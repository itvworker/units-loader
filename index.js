let loaderUtils = require('loader-utils');
module.exports = function (source) {
    // const options = loaderUtils.getOptions(this)
    let opt = loaderUtils.getOptions(this)

    // let unit = 'rem';
    // let divisor = 37.5;
    // let raw = 'rpx';
    // let accuracy = 2;


    let defualt_con = {
        unit: 'rem',
        divisor: 37.5,
        raw: 'rpx',
        accuracy: 2
    }


    if(opt.arr) {
        let arr = opt.arr;
        arr.forEach((item,index)=>{
            let change = JSON.parse(JSON.stringify(defualt_con));
            for(let i in item) {
                change[i] = item[i]
            }
            let byte = 1;
            for(let i =0, l = change.accuracy; i < l; i++) {
                byte +='0';
            }
            byte = parseInt(byte);
            let reg = new RegExp(`([0-9]+${change.raw})|([0-9]+\\.[0-9]*${change.raw})`,'g')
            source = source.replace(reg, function(word){
                return parseInt(parseFloat(word.slice(0,-change.raw.length))/change.divisor*byte)/byte+change.unit
            })
        })


    }else{
        let change = JSON.parse(JSON.stringify(defualt_con));
        if(opt){
            for(let i in opt) {
                change[i] = opt[i]
            }
        }
        let byte = 1;
        for(let i =0, l = change.accuracy; i < l; i++) {
            byte +='0';
        }
        byte = parseInt(byte);
        let reg = new RegExp(`([0-9]+${change.raw})|([0-9]+\\.[0-9]*${change.raw})`,'g')
        source = source.replace(reg, function(word){
           return parseInt(parseFloat(word.slice(0,-change.raw.length))/change.divisor*byte)/byte+change.unit
        })
    }

    return source
}
