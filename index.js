let loaderUtils = require('loader-utils');
module.exports = function (source) {
    // const options = loaderUtils.getOptions(this)
    let opt = loaderUtils.getOptions(this)

    let unit = 'rem';
    let divisor = 37.5;
    let raw = 'rpx';
    let accuracy = 2;


    if(opt && opt.unit){
        unit = opt.unit;
    }

    if(opt && opt.divisor){
        divisor = opt.divisor;
    }

    if(opt && opt.raw){
        raw = opt.raw;
    }

    if(opt && opt.divisor){
        divisor = opt.divisor;
    }

    if(opt && opt.accuracy){
        accuracy = opt.accuracy;
    }

    let byte = 1;
    for(let i =0, l = accuracy; i < l; i++) {
        byte +='0';
    }
    byte = parseInt(byte);

    let reg = new RegExp(`([0-9]+${raw})|([0-9]+.[0-9]?${raw})`,'g')
    // let reg = /([0-9]+rpx)|([0-9]+.[0-9]?rpx)/g;

    source = source.replace(reg, function(word){
        return parseInt(parseFloat(word.slice(0,-3))/divisor*byte)/byte+unit
    })

    return source
}
