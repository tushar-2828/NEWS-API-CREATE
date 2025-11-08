 let second = document.querySelector(".second");
        async function getapi() {
            let search = document.getElementById("search").value.trim() || "bihar election";
            second.innerHTML = "Loading News...";

            fetch(`https://newsapi.org/v2/everything?q=${search}&from=2025-10-08&sortBy=publishedAt&apiKey=0553afd6ca8249fe86a82a238c0ba36a`)
                .then((response) => {
                    // console.log(data);
                    response.json()
                        .then((data) => {
                            if (data.articles && data.articles.length > 0) {

                                second.innerHTML = "";
                                data.articles.forEach(news => {
                                    let div = document.createElement("div");
                                    div.classList.add("news-articles");
                                    div.innerHTML = `
                                        <img src = "${news.urlToImage}">
                                        <h3>${news.title}</h3>
                                        <p>${news.description}</p>
                                        <a href="${news.url}" target = "_blank">Read more</a>
                                    `;

                                    second.appendChild(div);
                                });
                            }
                            else {
                                second.innerHTML = "<p>No record on this topic</p>";
                            }
                        })

                })


                .catch((e) => {
                    second.innerHTML = "<p>Error fetching. Please try again</p>";
                })
        }


        getapi();