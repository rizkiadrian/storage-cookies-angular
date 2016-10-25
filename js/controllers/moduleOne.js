
var module_controller = angular.module('myCookie',['ngCookies','ngRoute','myRoute','otherModule']);
module_controller.controller('controllerCookies',controllerCookies);



function controllerCookies ($scope,$cookies){
    var now = new Date();
    var expiredate = new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours()+2,now.getMinutes());
    $cookies.put ('token', '234lkj2l3498sfkj345hkjhfwr',{'expires':expiredate});


}


