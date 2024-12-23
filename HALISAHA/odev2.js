const sol_isim_giris = document.getElementById("oyuncu_ekleme_ad_sol"); 
const sag_isim_giris = document.getElementById("oyuncu_ekleme_ad_sag"); 

const liste_sol = document.getElementById('oyuncu_liste_sol');
const liste_sag = document.getElementById('oyuncu_liste_sag');

const oyuncu_slotlari_sol = document.getElementsByClassName("saha_yazi_sol_ekip");
const oyuncu_slotlari_sag = document.getElementsByClassName("saha_yazi_sag_ekip");

let oyuncu_adlari_sol = [];
let oyuncu_adlari_sag = [];
let sol_sayi = 0;
let sag_sayi = 0;

var benkactimbay = {};

function sol_oyuncu_ekle() 
{
    if (!sol_isim_giris.value || sol_isim_giris.value.trim() === '')
    {
        alert("buraya bişi yazman lazım");
        sol_isim_giris.value = "";
        return;
    }
    if (oyuncu_adlari_sol.indexOf(sol_isim_giris.value) == -1)
    {
        oyuncu_adlari_sol.push(sol_isim_giris.value);
    }
    else
    {
        alert("bu oyuncu zaten var");
        return;
    }
    const ogrenci_konteynir = document.createElement("div");
    ogrenci_konteynir.classList.add('ogrenci_id');
    ogrenci_konteynir.id = `ogrenci-${sol_sayi}`;

    const ogrenci_adi = document.createElement('input');
    ogrenci_adi.type = 'text';
    ogrenci_adi.value = sol_isim_giris.value
    ogrenci_adi.placeholder = 'Ogrenci adi gir...';
    ogrenci_adi.id = `ogrenci-input-${sol_sayi}`;

    const silTusu = document.createElement('button');
    silTusu.textContent = 'Sil';
    silTusu.id = `remove-${sol_sayi}`
    silTusu.addEventListener('click', () => {
        let index = oyuncu_adlari_sol.indexOf(ogrenci_adi.value);
        if (index == -1){
            alert("bu oyuncu aslında yok");
        }
        else{
            oyuncu_adlari_sol.splice(index, 1);
        }
        ogrenci_konteynir.remove();
        sol_sayi--; 
    });

    ogrenci_konteynir.appendChild(ogrenci_adi);
    ogrenci_konteynir.appendChild(silTusu);
    liste_sol.appendChild(ogrenci_konteynir);
    sol_sayi++; 
    sol_isim_giris.value = "";
}

function sag_oyuncu_ekle() 
{
    if (!sag_isim_giris.value || sag_isim_giris.value.trim() === '')
        {
            alert("buraya bişi yazman lazım");
            sag_isim_giris.value = "";
            return;
        }
    if (oyuncu_adlari_sag.indexOf(sag_isim_giris.value) == -1)
    {
        oyuncu_adlari_sag.push(sag_isim_giris.value);
    }
    else
    {
        alert("bu oyuncu zaten var");
        return;
    }
    const ogrenci_konteynir = document.createElement("div");
    ogrenci_konteynir.classList.add('ogrenci_id');
    ogrenci_konteynir.id = `ogrenci-${sag_sayi}`;

    const ogrenci_adi = document.createElement('input');
    ogrenci_adi.type = 'text';
    ogrenci_adi.value = sag_isim_giris.value
    ogrenci_adi.placeholder = 'Ogrenci adi gir...';
    ogrenci_adi.id = `ogrenci-input-${sag_sayi}`;

    const silTusu = document.createElement('button');
    silTusu.textContent = 'Sil';
    silTusu.id = `remove-${sag_sayi}`
    silTusu.addEventListener('click', () => {
        let index = oyuncu_adlari_sag.indexOf(ogrenci_adi.value);
        if (index == -1){
            alert("bu oyuncu aslında yok");
        }
        else{
            oyuncu_adlari_sag.splice(index, 1);
        }
        ogrenci_konteynir.remove();
        sag_sayi--; 
    });

    ogrenci_konteynir.appendChild(ogrenci_adi);
    ogrenci_konteynir.appendChild(silTusu);
    liste_sag.appendChild(ogrenci_konteynir);
    sag_sayi++; 
    sag_isim_giris.value = "";
}

function oyuncu_dagit()
{
    let oyuncular_sol = oyuncu_adlari_sol.slice();
    let i = 0;
    Array.from(oyuncu_slotlari_sol).forEach(element => {
        if (oyuncular_sol.length == 0){
            alert("adam tam yetmedi. " + (Array.from(oyuncu_slotlari_sol).length - i).toString()+" daha lazım");
            let kalan = Array.from(oyuncu_slotlari_sol);
            for (j=i; j<Array.from(oyuncu_slotlari_sol).length; j++){
                kalan[j].textContent = "Boş";
            }
            throw benkactimbay;
        }
        const randomIndex = Math.floor(Math.random() * oyuncular_sol.length);
        const selectedItem = oyuncular_sol[randomIndex];
        element.textContent = selectedItem;
        console.log(selectedItem);
        oyuncular_sol.splice(randomIndex, 1);
        i++;
    });
}

function oyuncu_dagit_sag()
{
    let oyuncular_sag = oyuncu_adlari_sag.slice();
    let i = 0;
    Array.from(oyuncu_slotlari_sag).forEach(element => {
        if (oyuncular_sag.length == 0){
            alert("adam tam yetmedi. " + (Array.from(oyuncu_slotlari_sag).length - i).toString()+" daha lazım");
            let kalan = Array.from(oyuncu_slotlari_sag);
            for (j=i; j<Array.from(oyuncu_slotlari_sag).length; j++){
                kalan[j].textContent = "Boş";
            }
            throw benkactimbay;
        }
        const randomIndex = Math.floor(Math.random() * oyuncular_sag.length);
        const selectedItem = oyuncular_sag[randomIndex];
        element.textContent = selectedItem;
        console.log(selectedItem);
        oyuncular_sag.splice(randomIndex, 1);
        i++;
    });
}
