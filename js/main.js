const apiKey = " https://lanciweb.github.io/demo/api/pictures/";

axios
  .get(apiKey)
  .then((response) => {
    console.log(response.data);
    //codice da eseguire in caso di successo

    response.data.forEach((element) => {
      const cardContainer = document.querySelector(".container .row");

        
        //! first version animated
        // si Usa innerHTML per inserire tutta la struttura img

        cardContainer.innerHTML += `  
        <div class="col-sm-12 col-md-6 col-lg-4 my-3">

          <div class="card rotate-zoom position-relative" style="width: 100%;">

            <figure class=" rotation-none position-absolute top-0 start-50 translate-middle">
              <img class="position-absolute top-0 start-50 translate-middle " src="./img/pin.svg" alt="pin">
            </figure>

            <a href="#" class="rounded" id="${element.id}"  >
              <img  src= "${element.url}" class="card-img-top p-3 img-fluid" alt=${element.title}">
            </a>
                        
            <div class="card-body">
              <p class="card-text">${element.date}</p>
              <h5 class="card-title fw-bold text-uppercase">${element.title}</h5>
            </div>

          </div>

        </div>
      `;

      console.log(element.id)
        

        // Aggiungo un listener per il click sulle card
        cardContainer.addEventListener("click", function (event) {
            
          //! Controlla se il click è su un link (<a>)
          const clickedElement = event.target.closest("a");
          
          if (clickedElement) {
            event.preventDefault();

            //todo  Ottieni l'URL dell'immagine cliccata
            const imgSorgente = clickedElement.querySelector("img").src; 
              
            // si Usa innerHTML per aggiornare l'immagine nel popup
            document.getElementById("popUpImg").innerHTML =
            `
            <img src="${imgSorgente}" class="card-img-top p-3 rounded " width="250px" alt=${element.title}>
            `;
            // Mostra il pop-up
            document.querySelector(".opacity-container").classList.remove("d-none"); 
          }
        });
        
        
    });
    
  })  
  
  .catch((error) => {
    // codice da eseguire in caso di errore
    console.error(error);
    
  });
  
  //! Aggiungo un listener per il pulsante Chiudi
  document.getElementById("closePopUp").addEventListener("click", function () {
    
    // Nascondi il pop-up
    document.querySelector(".opacity-container").classList.add("d-none"); 
  });
  
  // ! erorre STRANO (mancava il punto....)
  // ! premendo sul container opaco aggiungo la classe d-none 
  document.querySelector(".opacity-container").addEventListener("click", function () {
    document.querySelector(".opacity-container").classList.add("d-none"); // Nascondi il pop-up
  });

