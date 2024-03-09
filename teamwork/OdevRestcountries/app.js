
const selectCountry = document.getElementById("select-country")

const getCountries= async () => {

    try {
        const countryResponce = await fetch("https://restcountries.com/v3/all");

        if (countryResponce.ok){
            const countryData = await countryResponce.json()
        
            countryNames=[]
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

const fillCountryList = (countries) =>{
    
    countries.forEach(country => {
        const option = document.createElement("option")
        option.textContent =country;
        selectCountry.appendChild(option)
    })
    
}

selectCountry.addEventListener("change", () => {
    getCountry(selectCountry.value)

})

const getCountry = async (countryName) => {

    try {
        const countryRes = await fetch("https://restcountries.com/v3/all");
        if (countryRes.ok){
            const countryData = await countryRes.json()
            countryData.forEach(country => {
                const {flags, name, region, capital, languages, currencies, population, borders, latlng } = country;

                if (name.common === countryName){
                    console.log(flags,name, region )
                }

            })
        } else {

        }

    } catch (error) {
        
    }
}

