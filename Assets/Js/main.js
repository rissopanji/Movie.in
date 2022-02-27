
class Mainbanner extends HTMLElement {
  constructor(movie) {
      super();
      
      this.setAttribute('class', 'MainBanner');
     

      this.title = this.getAttribute('title');
      this.moreLink = this.getAttribute('more-link');
      this.movieTag = this.getAttribute('movie-tag');

      this.innerHTML = `
      <!--  Main Banner  -->
          <section class="section main-banner" id="top">
            <video autoplay muted loop id="bg-video">
                <source src="assets/images/MainBanner _ Official Trailer.mp4" type="video/mp4" />
            </video>

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