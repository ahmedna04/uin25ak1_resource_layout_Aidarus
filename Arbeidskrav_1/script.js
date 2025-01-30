
const tittel = document.getElementById("kategori-tittel");
const beskrivelse = document.getElementById("kategori-beskrivelse");
const liste = document.getElementById("ressurs-liste");
const knapper = document.querySelectorAll("nav button");

function visRessurser(kategori) {

    const valgtKategori = resources.find(res => res.category === kategori);
    tittel.textContent = valgtKategori.category;
    beskrivelse.textContent = valgtKategori.text;
    
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
    knapp.addEventListener("click", () => {
        const kategori = knapp.getAttribute("data-kategori");
        visRessurser(kategori);
    });
});

visRessurser("HTML");
