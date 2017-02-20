/*
 * Author:mhd
 * Date: 2016.7.13
 */
var NameSpace = window.NameSpace || {};
NameSpace.mhd = (function() {
    var reslut = {};
    reslut.ajaxGetText = function(url,callback) {
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                callback(xmlhttp.responseText, xmlhttp.status, xmlhttp);
            }
        }

        xmlhttp.open("GET",url, true);
        xmlhttp.send();
    }
    return reslut;
})();

