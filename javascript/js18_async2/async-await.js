//*=================================================
//*               ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayi mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durdurulmasini saglar.
//* Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.

const getNews = async () => {
  const BASE_URL = `https://newsapi.org/v2/`;
//   const API_KEY = `f3eebdb3e86247bc8bd0a99ddc829cb5`; //doğru api key

  const API_KEY = `yanlis`    //yanlış api key

  const queryString = `top-headlines?country=us&category=technology`;

  // https://newsapi.org/v2/top-headlines?country=us&apiKey=f3eebdb3e86247bc8bd0a99ddc829cb5

  const URL = `${BASE_URL}${queryString}&apiKey=${API_KEY}`;

  console.log(URL);

  try {
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    const data = await res.json();
    displayNews(data.articles);
  } catch (error) {
    console.log(error);
    const newsArticle = document.getElementById("news");
    newsArticle.innerHTML= `<img src="./img/404.png" class="card-img-top" alt="image"></img>`
  }
};

const displayNews = (news) => {
  const newsArticle = document.getElementById("news");
  news.forEach((item) => {

    const {urlToImage, title, description, url} = item
    newsArticle.innerHTML += `
        
        <div class="card mb-3" style="width: 18rem;">
            <img src="${urlToImage}" class="card-img-top" alt="image">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <a href="${url}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        `;
  });
};

getNews();
