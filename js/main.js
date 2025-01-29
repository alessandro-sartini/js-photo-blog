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
        cardContainer.innerHTML += `  
        <div class="col-sm-12 col-md-6 col-lg-4 ">

                <div class="card m-3 rotate-zoom position-relative" style="width: 100%;">

                    <figure class=" rotation-none position-absolute top-0 start-50 translate-middle">
                        <img class="position-absolute top-0 start-50 translate-middle " src="./img/pin.svg" alt="pin">
                    </figure>

                    <a href="#" data-bs-toggle="modalImg" data-bs-target="#modalImg" >
                        <img id="pressCard" src= "${element.url}" class="card-img-top p-3 img-fluid" alt=${element.title}>
                    </a>
                        
                    <div class="card-body">
                    <p class="card-text">${element.date}</p>
                    <h5 class="card-title fw-bold">${element.title}</h5>
                    </div>

                </div>

        </div>
            `;
    });
  })
  .catch((error) => {
    // codice da eseguire in caso di errore
    console.error(error);
  });


// const pressCard = document.getElementById('pressCard');
// const modalImg = document.getElementById('modalImg');

// pressCard.addEventListener('click', function () {
    
//     modalImg.innerHTML +=
//     `


//         <div class="modal-content">
//             <div class="modal-header">
//                     <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
//             </div>
//             <div class="modal-body">
//                     ...
//             </div>
//             <div class="modal-footer">
//                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                 <button type="button" class="btn btn-primary">Understood</button>
//             </div>
//         </div> 
    
//     `


// })
