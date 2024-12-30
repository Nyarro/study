var a = {
    b: function (a) {
        return {
            c: [1, 2, function (c) {
                return [1, c]
            }]
        };
    }
}


var z = a['b'](2).c[2](20)[1]



var n = [1, 2, [1, 2, 3, function Func(a) {
    return {b: function VX(a){
        return [{s:{d:1}}, 2];
        }}
}]]

function c(a) {
    return {};
}
var d = n[2][3](c(2)).b(10)[0]['s'].d;