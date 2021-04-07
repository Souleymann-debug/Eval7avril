var isClicked = false
$('#menu').click(function () {
  if (!isClicked) {
    $('#manav').before(`
    <div class='mune' style='width:100%;background-color:white;position: absolute; top: 100px;padding-left: 15px'>
      <br>
      Louer une voiture
      <br>
      Louer un utilitaire
      <br>
      Réserver un chauffeur
      <br>
      Découvrer nos agences
      <br>
      Mon Compte
      <br>
      Contacts
      <br><br>
    </div>
  `)
  isClicked=true
  }else{
    $('.mune').remove()
    isClicked=false
  }
  
})

$(window).scroll(function() {
    var scrollHeight = $(document).height();
    var scrollPos = $(window).height() + $(window).scrollTop();

    if ((scrollHeight - scrollPos) / scrollHeight == 0) {
        $('#foot').before(`
              <div class="row justify-content-around">
              <!-- carousel -->
              <div >
                  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img class="d-block w-100" src="Annexes/vehicule1.png" alt="First slide">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" src="Annexes/vehicule1.png" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" src="Annexes/vehicule1.png" alt="Third slide">
                        </div>
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
              </div>
              <div>
                  <h3>Peugeot 208</h3>
                  <p>Diesel, 5 portes, GPS, Autoradio, Forfait : 1000 km.</p><br>
                  <p>999€, Agence de Paris</p>
                  <button class="btn btn-success">Réserver et payer</button>
              </div>
          </div>
          <br>
          <div class="barre"></div>
          <br>
          <div class="row justify-content-around">
              <!-- carousel -->
              <div >
                  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img class="d-block w-100" src="Annexes/vehicule4.png" alt="First slide">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" src="Annexes/vehicule4.png" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" src="Annexes/vehicule4.png" alt="Third slide">
                        </div>
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
              </div>
              <div>
                  <h3>Peugeot 208</h3>
                  <p>Diesel, 5 portes, GPS, Autoradio, Forfait : 1000 km.</p><br>
                  <p>999€, Agence de Paris</p>
                  <button class="btn btn-success">Réserver et payer</button>
              </div>
          </div>
          <br>
          <div class="barre"></div>
          <br>
          <div class="row justify-content-around">
              <!-- carousel -->
              <div >
                  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img class="d-block w-100" src="Annexes/vehicule3.png" alt="First slide">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" src="Annexes/vehicule3.png" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" src="Annexes/vehicule3.png" alt="Third slide">
                        </div>
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
              </div>
              <div>
                  <h3>Peugeot 208</h3>
                  <p>Diesel, 5 portes, GPS, Autoradio, Forfait : 1000 km.</p><br>
                  <p>999€, Agence de Paris</p>
                  <button class="btn btn-success">Réserver et payer</button>
              </div>
          </div>
          <br>
          <div class="barre"></div>
          <br>
          <div class="row justify-content-around">
              <!-- carousel -->
              <div >
                  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img class="d-block w-100" src="Annexes/vehicule2.png" alt="First slide">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" src="Annexes/vehicule2.png" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" src="Annexes/vehicule2.png" alt="Third slide">
                        </div>
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
              </div>
              <div>
                  <h3>Peugeot 208</h3>
                  <p>Diesel, 5 portes, GPS, Autoradio, Forfait : 1000 km.</p><br>
                  <p>999€, Agence de Paris</p>
                  <button class="btn btn-success">Réserver et payer</button>
              </div>
          </div>
          <br>
          <div class="barre"></div>
          <br>
        `)
    }

});
