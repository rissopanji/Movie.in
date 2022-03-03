
// Navbar 

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
                        <li ><a href="index.html" class="active">Home</a></li>
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
    document.getElementById("navbar").style.backgroundColor = "rgb(38, 38, 38)";
  
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    
  }
}


class mainbanner extends HTMLElement {
  constructor() {
      super();
      this.setAttribute('class', 'mainbanner');

      this.title = this.getAttribute('title');
        

      this.innerHTML = `
      <div class="main-banner">
        <h3>Looking for Movies</h3>
        <h1>Let's see out collection</h1>
      </div>

      `;
  }
}
customElements.define('main-banner', mainbanner);


class MovieSection extends HTMLElement {
  constructor() {
      super();
      this.setAttribute('class', 'movieSection');

      this.title = this.getAttribute('title');
      this.movieTag = this.getAttribute('movie-tag');

      this.innerHTML = `
          <div class="movieSection__head">
              <p class="title">
                  ${this.title}
              </p>

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

//Card Scroll

const updateContainer = (root) => {
  const movieContainer = root.querySelector('.movie__container');
  const prev = movieContainer.querySelector('.scroll__button .prev');
  const next = movieContainer.querySelector('.scroll__button .next');
  const movieCards = movieContainer.querySelector('.movieContainer__card');
  const cards = movieCards.querySelectorAll('.movie__card');

  let containerWidth = movieContainer.clientWidth;

  prev.classList.add('hide');
  if (movieCards.scrollWidth <= containerWidth) {
      prev.classList.add('hide');
      next.classList.add('hide');
  }

  let iterator = Math.floor(containerWidth / cards.item(0).clientWidth) * 200;

  window.addEventListener('resize', () => {
      containerWidth = movieContainer.clientWidth;
      iterator = Math.floor(containerWidth / cards.item(0).clientWidth) * 200;
  });

  prev.addEventListener('click', () => {
      movieCards.scrollLeft -= iterator;

      //  Check scroll offset for prev
      if (movieCards.scrollLeft <= movieCards.offsetWidth) {
          prev.classList.add('hide');
      }
      next.classList.remove('hide');
  });

  next.addEventListener('click', () => {
      movieCards.scrollLeft += iterator;

      // Check scroll offset for next
      if (
          Math.ceil(movieCards.offsetWidth + movieCards.scrollLeft) >=
          movieCards.scrollWidth - movieCards.offsetWidth
      ) {
          next.classList.add('hide');
      }
      prev.classList.remove('hide');
  });

  movieCards.addEventListener('scroll', () => {
      prev.classList.remove('hide');
      next.classList.remove('hide');
      if (
          Math.ceil(movieCards.offsetWidth + movieCards.scrollLeft) >=
          movieCards.scrollWidth
      ) {
          next.classList.add('hide');
      }
      if (movieCards.scrollLeft == 0) {
          prev.classList.add('hide');
      }
  });
  };

class HeroMovieDetails extends HTMLElement {
  constructor(movie) {
      super();
      this.innerHTML = `
          <style>
              .detail__bg {
                  background-position: right -200px top;
                  background-size: cover;
                  background-repeat: no-repeat;
              }
          </style>
          <div class="detail__bg">
              <div class="bg__layer">
                  <div class="detail__container">
                      <div class="poster">
                          <div class="poster__container">
                              <img src="http://image.tmdb.org/t/p/w500${movie.poster_path}" alt="poster">
                          </div>
                      </div>
                      <div class="details">
                          <div class="header">
                              <div class="header__title">
                                  <span class="title">${movie.title}</span>
                                  <span class="year">(2021)</span>
                              </div>
                              <div class="header__info">
                                  13+
                              </div>
                          </div>
                          <div class="rating">
                            
                              <span>${movie.vote_average}</span>
                          </div>
                          <div class="studio">
                              <p>Studio</p>
                          </div>
                          <div class="overview">
                              <h3>Overview</h3>
                              <p>${movie.overview}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      `;
  }
}
customElements.define('details-hero', HeroMovieDetails);


class Footer extends HTMLElement {
  constructor() {
      super();
      this.innerHTML = `
      <footer class="footer-distributed">
			<div class="footer-right">
				<a href="https://www.instagram.com/rissopanji_"><i class="fa fa-instagram"></i></a>
				<a href="https://www.linkedin.com/in/rissopan-panji-prayogi"><i class="fa fa-linkedin"></i></a>
				<a href="https://github.com/rissopanji"><i class="fa fa-github"></i></a>
			</div>

			<div class="footer-left">
        <a href="#" >
            <img src="Assets/icon/logo.png" alt="">
        </a>
        <div class="footerhide">
            <p>
                Rissopan Panji Prayogi
            </p>
            <h5>
        ini footer
        </h5>
        </div>
			</div>
		</footer>
      `;
  }
}
customElements.define('foo-ter', Footer);


