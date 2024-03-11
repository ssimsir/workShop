
const selectCountry = document.getElementById("select-country")

const getCountries = async () => {

    try {
        const countryResponce = await fetch("https://restcountries.com/v3/all");

        if (countryResponce.ok) {
            const countryData = await countryResponce.json()

            countryNames = []
            countryData.forEach(country => {
                countryNames.push(country.name.common)
            });
            countryNames.sort();
            fillCountryList(countryNames);
        } else {
            throw new Error("hata oluştu")
        }
    } catch (error) {
        console.log(error)
    }
}

getCountries()

const fillCountryList = (countries) => {

    countries.forEach(country => {
        const option = document.createElement("option")
        option.textContent = country;
        selectCountry.appendChild(option)
    })

}

selectCountry.addEventListener("change", () => {
    getCountry(selectCountry.value)

})

const getCountry = async (countryName) => {

    try {
        const countryRes = await fetch("https://restcountries.com/v3/all");
        if (countryRes.ok) {
            const countryData = await countryRes.json()
            countryData.forEach(country => {
                const { flags, name, region, capital, languages, currencies, population, borders, maps } = country;


                if (name.common === countryName) {
                    mainDiv = document.getElementById("main")
                    mainDiv.innerHTML = `
                    
                    <aside>
                        <div class="card" style="width: 18rem;">
                        <img src="${flags[1]}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><i class="fa-solid fa-earth-oceania"></i><span class="fw-bold">Region:</span>${region}</li>
                                <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i><span class="fw-bold">Capitals:</span>${capital}</li>
                                <li class="list-group-item"><i class="fas fa-lg fa-comments"></i><span class="fw-bold">Languages:</span>${languages}</li>
                                <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i><span class="fw-bold">Currencies:</span>${currencies}</li>
                                <li class="list-group-item"><i class="fa-solid fa-people-group"></i><span class="fw-bold">Population:</span>${population}</li>
                                <li class="list-group-item"><i class="fa-sharp fa-solid fa-road-barrier"></i><span class="fw-bold">Borders:</span>${borders}</li>
                              </ul>
                        </div>
                      </div>
    
                    </aside>
    
                    <article>
                


                    <div class="ratio ratio-16x9">
                    <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/place/Portekiz/@35.9915752,-18.8269796,5z/data=!3m1!4b1!4m6!3m5!1s0xb32242dbf4226d5:0x2ab84b091c4ef041!8m2!3d39.399872!4d-8.224454!16zL20vMDVyNHc?entry=ttu"></iframe>
                    </div>
                </article>
                    
                    
                    `
                    console.log(flags, name, region)
                }

            })
        } else {

        }

    } catch (error) {

    }
}



