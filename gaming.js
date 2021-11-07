var season;

function getSeason(q) {
    season = q;
    var s = document.getElementById("s" + q).style.backgroundColor;
    if (s=="gray") {
        document.getElementById("s" + q).style.backgroundColor="";
        season = null;
    }
    else {
        document.getElementById("s" + q).style.backgroundColor="gray";
        for (var c = 1; c < 5; c++) {
            if (c != q) {
                document.getElementById("s" + c).style.backgroundColor="";
            }
        }
    }
  
}
var till;
function getTill(q) {
    till=q;
    var s= document.getElementById("t" + q).style.backgroundColor;
    if (s=="gray") {
        document.getElementById("t" + q).style.backgroundColor="";
        till=null;
    }
    else {
        document.getElementById("t" + q).style.backgroundColor="gray";
        for (var c = 1; c < 4; c++) {
            if (c != q) {
                document.getElementById("t" + c).style.backgroundColor="";
            }
        }
    }
}
const application = [0,0,0];
function getApp(q) {
    application[q-1] = 1;
    var s= document.getElementById("a" + q).style.backgroundColor;
    if (s=="gray") {
        document.getElementById("a" + q).style.backgroundColor="";
        application[q-1] = 0;
    }
    else {
        document.getElementById("a" + q).style.backgroundColor="gray";
       
    }
}
var seeding;
function getSeed(q) {
    seeding=q;
    var s= document.getElementById("e" + q).style.backgroundColor;
    if (s=="gray") {
        document.getElementById("e" + q).style.backgroundColor="";
        seeding=null;
    }
    else {
        document.getElementById("e" + q).style.backgroundColor="gray";
        for (var c = 1; c < 7; c++) {
            if (c != q) {
                document.getElementById("e" + c).style.backgroundColor="";
            }
        }
    }
}
const bac = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
const bac1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
const bac2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var t = 0;
var t1 = 0;
var t2 = 0;
function back1() {
    if (bac2[0] > 0) {
        document.getElementById("f" + bac2[0]).backgroundColor="rgb(117, 89, 89)";
        document.getElementById("f" + bac2[0]).innerHTML="";
        document.getElementById("f" + bac2[0]).style.backgroundColor ="";
        farm[bac2[0]-1] = 0;
        document.getElementById("money").innerHTML = getmoney() + parseInt(bac1[0]);
    }
    for (var k = 1; k < 16; k++) {
        bac2[k-1] = bac2[k];
    }
    bac2[16] = 0;
    
    t2--;
    for (var k = 1; k < 16; k++) {
        bac1[k-1] = bac1[k];
    }
    bac1[16] = 0;
    
    t1--;
}
function back() {
    if (bac[0] > 0) {
    document.getElementById("f" + bac[0]).style.backgroundColor = "rgb(90, 190, 60)";
    console.log("chg: " + bac[0]);
    adb2(bac[0]);
    setTimeout(function() {back1()}, 9000);
    }
    for (var k = 1; k < 16; k++) {
        bac[k-1] = bac[k];
    }
    bac[16] = 0;
    
    t--;
    //console.log("Down: " + t);

}
function adb(q) {
    console.log("add " +  q);
   
    bac[t] = q;
    t++;
    console.log("Now " +t );
}
function adb1(q) {
    //console.log("add " +  q);
   
    bac1[t1] = q;
    t1++;
    //console.log("Now " +t );
}
function adb2(q) {
    //console.log("add " +  q);
   
    bac2[t2] = q;
    t2++;
    //console.log("Now " +t );
}
const farm = [0,0,0,0,0,0];
function getfarm(q) {
    
    var s= farm[q-1];
    if (s==1) {
        document.getElementById("f" + q).innerHTML="";
        farm[q-1]=0;
    }
    if (s==0) {
        document.getElementById("f" + q).innerHTML="selected";
        farm[q-1]=1;
    }
    
}
var pests=0;
function pest() {
    if (pests==0) {
        pests =1;
        document.getElementById("pests").style.backgroundColor="lightblue";
    }
    else if (pests==1) {
        pests =0;
        document.getElementById("pests").style.backgroundColor="";

    }
}
var weathers = 0;
function weather() {
    //alert(1);
    if (weathers==0) {
        weathers =1;
        document.getElementById("wea").style.backgroundColor="lightblue";
        document.getElementById("wea").innerHTML="Good";
    }
    else if (weathers==1) {
        weathers =2;
        document.getElementById("wea").style.backgroundColor="red";
        document.getElementById("wea").innerHTML="Bad";

    }
    else if (weathers==2) {
        weathers =0;
        document.getElementById("wea").style.backgroundColor="";
        document.getElementById("wea").innerHTML="Weather";

    }
}
var soils = 0;
function soil() {
    //alert(1);
    if (soils==0) {
        soils =1;
        document.getElementById("soi").style.backgroundColor="lightblue";
        document.getElementById("soi").innerHTML="Good";
    }
    else if (soils==1) {
        soils =2;
        document.getElementById("soi").style.backgroundColor="red";
        document.getElementById("soi").innerHTML="Bad";

    }
    else if (soils==2) {
        soils =0;
        document.getElementById("soi").style.backgroundColor="";
        document.getElementById("soi").innerHTML="Soil type";

    }
}
var waterlevel = 1;
function waterl() {
    //alert(waterlevel);
    if (waterlevel==6) {
        document.getElementById("wl").style.height="0px";
        document.getElementById("wl").style.marginTop="25px";
        document.getElementById("wl").style.marginBottom="-25px";
        waterlevel =0;
    }
    else if (waterlevel==0) {
        waterlevel =1;
        document.getElementById("wl").style.height="";
        document.getElementById("wl").style.marginTop="";
        document.getElementById("wl").style.marginBottom="";
    

    }
    else if (waterlevel==1) {
        //alert("w");
        waterlevel =2;
        document.getElementById("wl").style.height="10px";
        document.getElementById("wl").style.marginTop="15px";
        document.getElementById("wl").style.marginBottom="-25px";

    }
    else if (waterlevel==2) {
        waterlevel =3;
        document.getElementById("wl").style.height="15px";
        document.getElementById("wl").style.marginTop="10px";
        document.getElementById("wl").style.marginBottom="-25px";

    }
    else if (waterlevel==3) {
        waterlevel =4;
        document.getElementById("wl").style.height="20px";
        document.getElementById("wl").style.marginTop="5px";
        document.getElementById("wl").style.marginBottom="-25px";

    }
    else if (waterlevel==4) {
        waterlevel =5;
        document.getElementById("wl").style.height="25px";
        document.getElementById("wl").style.marginTop="0px";
        document.getElementById("wl").style.marginBottom="-25px";

    }
    else if (waterlevel==5) {
        waterlevel =6;
        document.getElementById("wl").style.height="30px";
        document.getElementById("wl").style.marginTop="-5px";
        document.getElementById("wl").style.marginBottom="-25px";

    }
}
var costs; var yyy;

function findcost() {
    var cost = 0;
    var yield = 0;
    var yields = 50 - season*10;
    var yieldt = till;
    cost = till - 1;
    var yielda = application[0] + application[1] + application[2];
    cost += yielda;
    cost += 1;
    yield += 1;
    yield = yield * yields * yieldt * yielda;
    if (pests ==1) {
        if (application[1] == 1) {
            yield *= 0.75;
        }
        else {
            yield *= 0.44;
        }
    }
    if (weathers == 1) {
        yield *= 1.2;
    }
    if (weathers == 2) {
        yield *= 0.8;
    }
    if (soils == 1) {
        yield *= 1.2;
    }
    if (soils == 2) {
        yield *= 0.8;
    }
    yield *= Math.sqrt(12 - (waterlevel - 3)  * (waterlevel - 3));
    document.getElementById("cost").innerHTML = Math.floor(cost *1000);
    document.getElementById("yield").innerHTML = Math.floor(yield * 10);
    costs = cost *1000;
    yyy = yield *10;
    if (costs !=costs && yyy!=yyy) {
    	alert("Not all selections filled");
    }


}
function getmoney() {
    return parseInt(document.getElementById("money").innerHTML);
}

function harvesting() {
    findcost()
    if (costs ==costs && yyy==yyy) {

    
    var m = getmoney();
    for (var c = 0; c < 6; c++) {
        if (farm[c] == 1){
            m = getmoney();
            if (m - costs >= 0) {
                m -= costs;
                document.getElementById("money").innerHTML = m;
                adb(c+1);
                document.getElementById("f" + (c+1)).style.backgroundColor= "rgb(60, 90, 70)"; 
                farm[c] = 2;
                setTimeout(function() {back()}, 9000);
                adb1(yyy * (1 + Math.random()  / 10));
            }
            
        }
        
    }
}
else {
    alert("Not all selections filled");
}
    //todo
}