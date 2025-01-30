
const tittel = document.getElementById("kategori-tittel");
const beskrivelse = document.getElementById("kategori-beskrivelse");
const liste = document.getElementById("ressurs-liste");
const knapper = document.querySelectorAll("nav button");

function ressurser(kategori) {

    const valgtKategori = resource.find(res => res.kategori === kategori);
    tittel.textContent = valgtKategori.kategori;
    
    liste.innerHTML= "";
    valgtKategori.sources.forEach(kilde => {
        const link = document.createElement("a");
        link.href = kilde.url;
        link.textContent = kilde.tittel;

        const liste = document.createElement("li");
        list.appendChild(link);
    });

    
}
knapper.forEach(knapp => {
    knapp.addEventListener("klikk", () => {
        const kategori = knapp.getAttribute("data-kategori");
    })
})
