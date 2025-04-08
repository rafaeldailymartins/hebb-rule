var s = [[1,1],[-1,1],[1,-1],[-1,-1]]
var t = [1, -1, 1, -1]

var wnew = [0,0]
var bnew = 0
var wold = [0,0]
var bold = 0

var threshold = 0

var x = [[0,0],[0,0],[0,0],[0,0]]

function input() {
    t[0] = parseInt(document.getElementById('t0').value)
    t[1] = parseInt(document.getElementById('t1').value)
    t[2] = parseInt(document.getElementById('t2').value)
    t[3] = parseInt(document.getElementById('t3').value)
    wold = [0,0]
    bold = 0
}

function train() {
    input()
    for(let i=0; i<4; i++){
        x[i] = s[i]
        let y = t[i]

        wnew[0] = wold[0] + x[i][0]*y
        wnew[1] = wold[1] + x[i][1]*y
        bnew = bold + y

        wold=wnew
        bold=bnew
    }
    document.getElementById('w1').value = wnew[0]
    document.getElementById('w2').value = wnew[1]
    document.getElementById('bias').value = bnew



}

function test() {
    let yres = [0,0,0,0]
    for(let i = 0; i<4;i++){
        let ynet = wnew[0]*x[i][0] + wnew[1]*x[i][1] + bnew
        let ytest = 1
        if(ynet>=threshold){
           ytest=1
        }else{
           ytest=-1
        }
        yres[i] = ytest
    }

    document.getElementById('y0').value = yres[0]
    document.getElementById('y1').value = yres[1]
    document.getElementById('y2').value = yres[2]
    document.getElementById('y3').value = yres[3]
}