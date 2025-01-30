
const tittel = document.getElementById("kategori-tittel");
const beskrivelse = document.getElementById("kategori-beskrivelse");
const liste = document.getElementById("ressurs-liste");
const knapper = document.querySelectorAll("nav button");

// Koden her viser ressurserser fra de kategoriene
function visRessurser(kategori) {

    const valgtKategori = resources.find(res => res.category === kategori);
    tittel.textContent = valgtKategori.category;
    beskrivelse.textContent = valgtKategori.text;
    
    liste.innerHTML= "";

    // Koden her går gjennom kildene, setter tekst på kilden og URL-en
    valgtKategori.sources.forEach(kilde => {
        const link = document.createElement("a");
        link.href = kilde.url;
        link.textContent = kilde.title;

        const list = document.createElement("li");
        list.appendChild(link);
        liste.appendChild(list);
    });

    // Koden her gir funkonsjonalitet på knappene
}
knapper.forEach(knapp => {
    knapp.addEventListener("click", () => {
        const kategori = knapp.getAttribute("data-kategori");
        visRessurser(kategori);
    });
});

visRessurser("HTML");
