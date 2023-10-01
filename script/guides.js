
    window.addEventListener("click",(e)=> {
        const carouselEl = document.querySelector("#image-carousel")
        const target = e.target

            //** KULLANIM KILAVUZU BUTONLARA TIKLADĞINDA BİLGİ FOTORAFLARINI GÖSTERMEK */
            if(target.dataset.imgs) {
                    e.preventDefault()

                    //** BUTONLARA KAYITLI IMG URL DATALARINDAN ARRAY OLUŞTURMAK */
                    const data = target.dataset.imgs.split(",")

                    //** IMG CAROUSEL'İ GÖRÜNTÜLEMEK */
                    carouselEl.classList.add("visible")


                const pictureEl = document.querySelector(".carousel-wrapper")

                    //** ARRAY'DAKİ DATADAN PİCTURE ELEMENTİNİN İÇİNİ OLUŞTURMAK */
                    pictureEl.innerHTML = data.map((item,i)=>{
                        return `
                        <figure id="${i+1}" >
                            <img src="${item}" alt="">
                        </figure>
                        `
                    }).join("")

                const figureEls = document.querySelectorAll("#image-carousel figure")

                    //** İLK GÖRÜNTÜLENCEK IMAGE'İ AYARLAMAK */
                    figureEls[0].classList.add("visible")


                let count = 0
                const buttons = document.querySelectorAll(`#image-carousel button`)
                    buttons.forEach(btn=>btn.addEventListener("click",()=> {

                        //** CLOSE BUTON FONKSİYONU */
                        if(btn.classList.contains("closeBtn")) carouselEl.classList.remove("visible")

                        //** RİGHT BUTON FONKSİYONU */
                        if(btn.classList.contains("rightBtn") && count != data.length-1) {
                            count++
                            figureEls.forEach(el=>el.classList.remove("visible"))
                            figureEls[count].classList.add("visible")    
                        }

                        //** LEFT BUTON FONKSİYONU */
                        if(btn.classList.contains("leftBtn") && count!=0) {
                            count--
                            figureEls.forEach(el=>el.classList.remove("visible"))
                            figureEls[count].classList.add("visible") 
                        }
                    }))                    
            }
            
            // else {
            //     carouselEl.classList.remove("visible")
            // }


    })