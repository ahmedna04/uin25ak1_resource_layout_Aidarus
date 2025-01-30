
const tittel = document.getElementById("kategori-tittel");
const beskrivelse = document.getElementById("kategori-beskrivelse");
const liste = document.getElementById("ressurs-liste");
const knapper = document.querySelectorAll("nav button");

function ressurser(kategori) {
    const valgtKategori = resource.find(res => res.kategori === kategori);
    tittel.textContent = valgtKategori.kategori;
    beskrivelse.textContent = valgtKategori.text;
    liste.innerHTML = valgtKategori.sources.map(kilde => 
        `<li><a href="${kilde.url}">${kilde.title}</a></li>`
    ).join("");
}
