// oyun tahtasını al
const tahta = document.getElementById("oyun-tahtasi")

const oyunGecmisi = document.getElementById("gecmis");

// taş slotlarını koy
let index = 0;
for (i = 0; i<8; i++)
{
    for (j = 0; j<8; j++){
        if ((i+j) % 2 == 0){
            tahta.innerHTML += "<div class='beyaz' id="+index+"TAHTA"+"></div>";
        }else{
            tahta.innerHTML += "<div class='siyah' id="+index+"TAHTA"+"></div>";
        }
        index++;
    }
}


function tasTanimla(id, foto)
{
    document.getElementById(id+"TAHTA").innerHTML += "<img draggable='true' class='parca' id='"+foto+"' src='"+"parcalar/"+foto+".svg"+"'>"
}

function tasDiz(index, renk, yon)
{
    tasTanimla(index, "rook"+"-"+renk);index+=yon;
    tasTanimla(index, "knight"+"-"+renk);index+=yon;
    tasTanimla(index, "bishop"+"-"+renk);index+=yon;
    tasTanimla(index, "king"+"-"+renk);index+=yon;
    tasTanimla(index, "queen"+"-"+renk);index+=yon;
    tasTanimla(index, "bishop"+"-"+renk);index+=yon;
    tasTanimla(index, "knight"+"-"+renk);index+=yon;
    tasTanimla(index, "rook"+"-"+renk);index+=yon;
    for (i=index; i<index+(yon*8) || i>index+(yon*8); i+=yon){tasTanimla(i, "pawn"+"-"+renk);}
}

// siyah taşları başa normal diz
tasDiz(0, "b", 1);

// beyaz taşları sona ve ters diz
tasDiz(63, "w", -1);

let parcalar = document.getElementsByClassName("parca");

// şimdi şöyle bir güzellik var; framework kullanmadan herşey çok zor
// drag eventleri için adam akıllı birşey yok
// yani html taglarını sağa sola taşıyınca document.getElement yaptıklarımız boşa çıkıyor
// o yüzden her değişiklikte yeniden taramamız lazım
function eventleriAyarla()
{
    parcalar = document.getElementsByClassName("parca");
    for (var i = 0; i < parcalar.length; i++)
    {
        parcalar[i].addEventListener("drop", dropHandlerParca);
        parcalar[i].addEventListener("dragstart", dragHandler);
        parcalar[i].addEventListener("dragover", (e) => {e.preventDefault();});
    }
}

var slotlar = [];
var dragged = null;

// sloları listeye ekle
for (i=0; i<64; i++)
{
    slotlar.push(document.getElementById(i+"TAHTA"));
}


// slota taş bıraktık
function dropHandlerSlot(ev)
{
    ev.preventDefault();
    if (dragged == null){return;}

    ev.target.innerHTML = dragged.outerHTML;
    dragged.outerHTML = "";


    let yazi = ev.target.id+"->"+dragged.id;

    oyunGecmisi.innerHTML += "<li>"+yazi+"</li>";

    dragged = null;
    eventleriAyarla();
}

// dolu slota taş bıraktık
function dropHandlerParca(ev)
{
    ev.preventDefault();
    if (dragged == null){return;}

    ev.target.outerHTML = dragged.outerHTML;
    dragged.outerHTML = "";

    dragged = null;
    eventleriAyarla();
}

// sürüklemeye başladık
function dragHandler(ev)
{
    console.log("aaa");
    dragged = ev.target; // bu sürüklenen taş.
}

// dragstart, dragover falan parça için.
// drop eventi ana div için
eventleriAyarla();

// slotların eventleri
for (var i = 0; i < slotlar.length; i++)
{
    slotlar[i].addEventListener("drop", dropHandlerSlot);
    slotlar[i].addEventListener("dragover", (e) => {e.preventDefault();});
}