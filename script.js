let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let result = document.getElementsByClassName("result")[0];
searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  result.innerHTML = `
    <div class="wrapper">
            <div class="data-wrapper">
                <span><h4 style='font-size:30px' class="load">Loading resource...</h4></span>
            </div>
         </div>`;
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      console.log(data[0].capital[0]);
      console.log(data[0].flags.svg);
      console.log(data[0].name.common);
      console.log(data[0].continents[0]);
      // console.log(Object.keys(data[0].currencies[0]));
      console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      console.log(
        Object.values(data[0].languages).toString().split(",").join(",")
      );
      result.innerHTML = `
         <img src="${data[0].flags.svg}" class="flag-img">
         <h2> ${data[0].name.common}
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
         </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
            </div>
         </div>
          <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                }</span>

            </div>
         </div>
          <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages:</h4>
                <span>${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(",")}</span>

            </div>
         </div>
        `;
    })
    .catch((err) => {
      result.innerHTML = `😔 unable to load resources `;
    });
});
