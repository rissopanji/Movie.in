
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
                        <div class="main-button-red"><a href="#top">Visit</a></div>
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

class Mainbanner extends HTMLElement {
  constructor() {
      super();

      this.innerHTML = `
      <!--  Main Banner  -->
          <section class="section main-banner" id="top">
            <video autoplay muted loop id="bg-video">
                <source src="assets/images/MainBanner _ Official Trailer.mp4" type="video/mp4" />
            </video>

            <div class="video-overlay header-text">
                  <div class="caption">
                      <h6>Coming soon</h6>
                      <div class="header-title">
                        <h2>Doctor Strange</h2>
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

