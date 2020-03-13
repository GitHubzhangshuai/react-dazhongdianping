var info = require('./search/list')
var fs = require('fs')
var request = require('request')
var downloadPic = function(src, dest){
request(src).pipe(fs.createWriteStream(dest)).on('close',function(){
    console.log('pic saved!')
})
}
var arr = []
for(var i=0;i<info.data.length;i++){
    downloadPic(info.data[i].img,'./public/search/'+i+'.png')
    arr.push('list/'+i+'.png')
}