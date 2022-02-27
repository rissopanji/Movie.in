
//Fungsi Navbar 

class Navigation extends HTMLElement {
  constructor() {
      super();

      this.innerHTML = `
<!--  Header -->
<header class="header-area" id="navbar">
        <div >
          <nav class="main-nav">
                    <!-- Logo-->
                    <div class="logo">
                    <a href="index.html">
                      <img src="Assets/icon/logo.png" alt="">
                    </a>
                    </div>
                    <!-- Menu-->
                    <ul class="nav">
                        <li ><a href="#" class="active">Home</a></li>
                        <li ><a href="#popular" class="active">Trending</a></li>
                        <li ><a href="#top_rated" class="active">Top Rated</a></li> 
                        <li ><a href="#upcoming" class="active">Upcoming</a></li> 
                    </ul>  
          </nav>
    </div>
</header>
      `;
  }
}

customElements.define('nav-bar', Navigation);

//fungsi navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "rgb(12, 12, 12)";
  
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    
  }
}

//Fungsi Navbar 


class MovieSection extends HTMLElement {
  constructor() {
      super();
      this.setAttribute('class', 'movieSection');

      this.title = this.getAttribute('title');
      this.moreLink = this.getAttribute('more-link');
      this.movieTag = this.getAttribute('movie-tag');

      this.innerHTML = `
          <div class="movieSection__head">
              <p class="title">
                  ${this.title}
              </p>
              <a href="${this.moreLink}" class="more__link">
                  <span>FIND MORE</span> <i class="fa-solid fa-angle-right"></i>
              </a>
          </div>
          <div class="movie__container">
              <div class="scroll__button">
                  <div class="prev"><i class="fa-solid fa-chevron-left"></i></div>
                  <div class="next"><i class="fa-solid fa-chevron-right"></i></div>
              </div>
              <div class="movieContainer__card" id="${this.movieTag}"></div>
          </div>
  </div>
      `;
  }
}
customElements.define('movie-section', MovieSection);



class MovieCard extends HTMLElement {
  constructor(movie) {
      super();
      this.setAttribute('class', 'movie__card');

      this.setAttribute('title', movie.title);

      this.innerHTML = `
      
          <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" alt="${movie.title}"
          class="image">
          <div class="card__details">
              <div class="rating">
                  <i class="fa-solid fa-star star"></i>
                  <span>${movie.vote_average}</span>
              </div>
              <div class="title">
                  ${movie.title}
              </div>
          </div>
          <a href="./detail.html?id=${movie.id}" class="to__detail">
              
          </a>
      `;
  }
}
customElements.define('movie-card', MovieCard);

class Mainbanner extends HTMLElement {
  constructor(movie) {
      super();
      this.setAttribute('class', 'main-banner');
      


      this.innerHTML = `
      <!--  Main Banner  -->
          <section class="section main-banner" id="top">
            <div class="video-overlay header-text">
                  <div class="caption">
                      <h6> ${this.title}</h6>
                      <div class="header-title">
                        <h2> ${this.movieTag}</h2>
                        <h4>in the Multiverse of Madness</h4>
                      </div>   
                            <p>Journey into the unknown with Doctor Strange, who, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.</p>
                            <div class="main-button-red"><a href="#top">Visit</a></div>
                  </div>
            </div>
          </section>
      `;
  }
}

customElements.define('main-banner', Mainbanner);


