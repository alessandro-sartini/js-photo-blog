const apiKey = " https://lanciweb.github.io/demo/api/pictures/";

axios
  .get(apiKey)
  .then((response) => {
    console.log(response.data);
    //codice da eseguire in caso di successo

    response.data.forEach((element) => {
      const cardContainer = document.querySelector(".container .row");

        
        //! 2th version no animate
        // cardContainer.innerHTML +=
        //     `
        //      <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
        //             <div class="card mb-4">
        //                 <div class="position-relative">
        //                     <div class="position-absolute top-0 start-50 translate-middle">
        //                         <img src="./img/pin.svg" alt="pin">
        //                     </div>
        //                 </div>
        //                 <img width="100%" src="${element.url}" class="card-img-top p-3" alt="${element.title}">
        //                 <div class="card-body">
        //                 <p class="card-text">${element.date}</p> 
        //                 <h5 class="card-title fw-bold">${element.title}</h5>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
            
        //     `
        
        //! first version animated
        // si Usa innerHTML per inserire tutta la struttura img

        cardContainer.innerHTML += `  
        <div class="col-sm-12 col-md-6 col-lg-4 ">

          <div class="card m-3 rotate-zoom position-relative" style="width: 100%;">

            <figure class=" rotation-none position-absolute top-0 start-50 translate-middle">
              <img class="position-absolute top-0 start-50 translate-middle " src="./img/pin.svg" alt="pin">
            </figure>

            <a href="#" class="" id="${element.id}" data-bs-toggle="modalImg"  >
              <img  src= "${element.url}" class="card-img-top p-3 img-fluid" alt=${element.title}>
            </a>
                        
            <div class="card-body">
              <p class="card-text">${element.date}</p>
              <h5 class="card-title fw-bold">${element.title}</h5>
            </div>

          </div>

        </div>
      `;

      console.log(element.id)



        // Aggiungo un listener per il click sulle card
        document.querySelector(".container .row").addEventListener("click", function (event) {
            
          //! Controlla se il click è su un link (<a>)
          const clickedElement = event.target.closest("a");
          
          if (clickedElement) {
            event.preventDefault();
            const imgSorgente = clickedElement.querySelector("img").src; // Ottieni l'URL dell'immagine cliccata
              
            // si Usa innerHTML per aggiornare l'immagine nel popup
            document.getElementById("popUpImg").innerHTML =
            `
            <img src="${imgSorgente}" class="card-img-top p-3 rounded"alt=${element.title}>
            `;
              
            document.querySelector(".opacity-container").classList.remove("d-none"); // Mostra il pop-up
          }
        });
      // Aggiungo un listener per il pulsante Chiudi
      document.getElementById("closePopUp").addEventListener("click", function () {
        document.querySelector(".opacity-container").classList.add("d-none"); // Nascondi il pop-up
      });




    });
  })
  
  .catch((error) => {
    // codice da eseguire in caso di errore
    console.error(error);
});


// const pressCard = document.getElementById('pressCard');
// const popUp = document.getElementById('popUp');

// pressCard.addEventListener('click', function (event) {
//     event.preventDefault();
//     popUp.classList.remove('d-none');


// })
