const container = document.querySelector(".container")

fetch("https://kenzie-news-api.herokuapp.com/api/news")
.then(res => res.json())
.then(data => {
    let ul = document.createElement("ul")

    for(let i = 0; i < data.length; i++) {

        let li = document.createElement("li") // -- NOTICIA
            let a = document.createElement("a") // -- NOTICIA LINK
                let figure = document.createElement("figure") // -- IMAGEM DA NOTICIA
                    let img = document.createElement("img")

                let figcaption = document.createElement("figcaption") // -- TITULO, E INFORMAÇÕES TEXTUAIS
                    let span = document.createElement("span")
                    let h3 = document.createElement("h3")
                    let p = document.createElement("p")
                    let em = document.createElement("em")

        a.href = data[i].noticia_completa
        a.title = data[i].titulo
        img.src = data[i].imagem
        img.alt = data[i].titulo
        span.innerText = data[i].categoria
        h3.innerText = data[i].titulo
        p.innerText = data[i].resumo
        em.innerText = `Fonte: ${data[i].fonte}`

        figure.append(img)
        figcaption.append(span)
        figcaption.append(h3)
        figcaption.append(p)
        figcaption.append(em)

        a.append(figure)
        a.append(figcaption)

        li.id = data[i].id
        li.append(a)

        if(i > 0) {
            ul.append(li)
        } else{
            container.append(li)
        }
    }

    container.append(ul)
}) 