const hamburgerMenu = document.querySelector(".hamburger__icon");
const mobileIcon = document.querySelector(".mobile__menu");

hamburgerMenu.addEventListener("click", () => {
  // alert('hello')
  hamburgerMenu.classList.toggle("active");
  mobileIcon.classList.toggle("active");
});

document.querySelectorAll(".navList").forEach((n) =>
  n.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    mobileIcon.classList.remove("active");
  })
);

// FAQ
const accordion = document.getElementsByClassName("contentBx");
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

const pageComponent = [
  {
    image: "./assets/nav.png",
    title: "Header",
    html: `<section class="nav__section">
    <header>
      <nav class="nav__bar">
          <a href="/" class="logo">
            <img src="./assets/logo.svg" alt="" />
            Logo
          </a>
      
        <ul class="nav__menu">
          <li class="navList"><a href="#home">Home</a></li>
          <li class="navList"><a href="#service">Service</a></li>
          <li class="navList"><a href="#about">About Us</a></li>
          <li class="navList"><a href="#blog">Blog</a></li>
          <li class="navList">
            <a href="#faq">FAQ</a>
          </li>
        </ul>
        <div
          class="nav__btn"
        >
          <button>Build Your Site</button>
        </div>
        <div class="hamburger__icon">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
      </div>
      <div class="mobile__menu">
        <ul class="nav__menu">
          <li class="navList"><a href="#home">Home</a></li>
          <li class="navList"><a href="#service">Service</a></li>
          <li class="navList"><a href="#about">About Us</a></li>
          <li class="navList"><a href="#blog">Blog</a></li>
          <li class="navList">
            <a href="#faq">FAQ</a>
          </li>
        </ul>
    </div>
      </nav>
    </header>
  </section>`,
  },
  {
    image: "./assets/hero-snapshop.png",
    title: "Hero",
    html: ` <section>
    <div class="hero__Section">
      <div class="hero__text">
        <h3 class="heroText">
          Empowering Businesses in the Digital Age
        </h3>
        <p class="pText hero__pText">
          Innovative ICT Marketing Solutions for Success!
        </p>
        <button
          class="hero__btn"
        >
          Build Your SIte
          <span class="iconify" data-icon="feather:arrow-right"></span>
        </button>
      </div>
      <div class="hero__img">
        <img src="./assets/heroImage.svg" alt="" />
      </div>
    </div>
  </section>`,
  },
  {
    image: "./assets/service-snapshot.png",
    title: "Service",
    html: ` <section class="help__section">
    <div class="help__heading">
      <h3 class="heading__text">How We Can Help You?</h3>
      <p class="help__pText">
        We create compelling SEO blog post & social media Content that
        drives the right people to your site.
      </p>
    </div>
    <div class="help__container">
        <div class="help__containerFlex">
          <div class="help__flexContent">
            <img src="./assets/h-1svg.svg" alt="" />
            <h3 class="font-bold text-base">
              The Basics about Cryptocurrency
            </h3>
            <p
              class="text-base font-normal w-full max-w-[22rem] mx-auto my-3"
            >
              Lorem ipsum dolor sit ametero irseo, consectetur adipiscing
              elit. Scelerisque viverra donec diammeo.
            </p>
          </div>
          <div class="help__flexContent">
            <img src="./assets/h-2.svg" alt="" />
            <h3 class="font-bold text-base">
              The Basics about Cryptocurrency
            </h3>
            <p
              class="text-base font-normal w-full max-w-[22rem] mx-auto my-2"
            >
              Lorem ipsum dolor sit ametero irseo, consectetur adipiscing
              elit. Scelerisque viverra donec diammeo.
            </p>
          </div>
          <div class="help__flexContent">
            <img src="./assets/h-3.svg" alt="" />
            <h3>
              The Basics about Cryptocurrency
            </h3>
            <p
            >
              Lorem ipsum dolor sit ametero irseo, consectetur adipiscing
              elit. Scelerisque viverra donec diammeo.
            </p>
          </div>
        </div>
      
    </div>
  </section>`,
  },
  {
    image: "./assets/cta-snapshot1.png",
    title: "CTA",
    html: ` <section>
    <div class="quality__container">
      <div class="quality__img">
        <img src="./assets/Rectangle 11.svg" alt="" />
      </div>
      <div class="quality__textCon">
        <h3 class="quality__headingText">
          Need help creating high quality content?
        </h3>
        <p>
          <p>We're known for Content Strategy and Content Creation.</p> <p class="my-2">Get super
            rich content experience in blog & social media post, drive traffic
            and improve outcomes by as much as 59%. Increase search exposure,
            build brand awareness and attract top-of-funnel visitors with blog
            posts created by our in-house team of content marketers.</p> 
            <p>We develop
              engaging, high-quality content that's personalized for your target
              audience and optimized for search engines.</p>
        </p>
        <button
          class=""
        >
          Build Your Site
          <span class="iconify" data-icon="feather:arrow-right"></span>
        </button>
      </div>
    </div>
  </section>`,
  },
  {
    image: "./assets/testimonial-snapshop.png",
    title: "Testimonials",
    html: ` <section class="client__section">
    <div class="client__container">
      <div>
        <h3 class="heading__text">What Our Clients Are Saying</h3>
        <p class="client__pText">Our top priority is the satisfaction of our clients, and we are grateful for all their positive feedback.</p>
      </div>
      <div>
        <article
      class="grid lg:grid-cols-2 mx-auto max-w-[70.5rem] gap-6 lg:px-0 px-5"
    >
      <!-- left -->
      <ul class="flex flex-col gap-y-7">
        <li class="bg-white py-5 px-4 rounded-lg">
          <figure class="flex items-center gap-5">
            <img src="./assets/profile1.svg" alt="" class="w-14" />
            <figcaption>
              <h3 class="lg:text-xl md:text-lg w-full text-base text-appGray">
                Samantha Thompson
              </h3>
              <p class="sm:text-sm text-xs">CEO of TechSavvy Solutions</p>
            </figcaption>
          </figure>
          <p class="max-w-[27rem] mt-4 text-sm">
            Geecore Limited has been a game-changer for us! Their UI/UX
            design team brought our vision to life with stunning visuals and
            seamless user experiences.
          </p>
        </li>
        <li class="bg-white py-5 px-4 rounded-lg">
          <figure class="flex items-center gap-5">
            <img src="./assets/profile2.svg" alt="" class="w-14" />
            <figcaption>
              <h3 class="lg:text-xl md:text-lg text-base text-appGray">
                Emily Chang
              </h3>
              <p class="sm:text-sm text-xs">Founder of Ecliptic Designs</p>
            </figcaption>
          </figure>
          <p class="max-w-[27rem] mt-4 text-sm">
            Geecore Limited is a true partner in our success. Their UI/UX
            design team has an incredible knack for understanding our brand
            and translating it into visually stunning designs.
          </p>
        </li>
        <li class="bg-white py-5 px-4 rounded-lg">
          <figure class="flex items-center gap-5">
            <img src="./assets/profile3.svg" alt="" class="w-14" />
            <figcaption>
              <h3 class="lg:text-xl md:text-lg text-base text-appGray">
                Michael Foster
              </h3>
              <p class="sm:text-sm text-xs">CTO of CloudStride Solutions</p>
            </figcaption>
          </figure>
          <p class="max-w-[27rem] mt-4 text-sm">
            We were impressed with Geecore Limited's web development team's understanding of our complex requirements, delivering a robust and scalable system.
          </p>
        </li>
      </ul>
      <!-- right -->
      <ul class="flex flex-col gap-y-7">
        <li class="bg-white py-5 px-4 rounded-lg">
          <figure class="flex items-center gap-5">
            <img src="./assets/profile5.svg" alt="" class="w-14" />
            <figcaption>
              <h3 class="lg:text-xl md:text-lg text-base text-appGray">
                James Rodriguez
              </h3>
              <p class="sm:text-sm text-xs">
                IT Manager at InnovateTech Corporation
              </p>
            </figcaption>
          </figure>
          <p class="max-w-[30.5rem] mt-4 text-sm">
            I have had the pleasure of working with Geecore Limited for a number of years. The expertise of their team at Geecore Limited is second-to-none, and they consistently deliver high-quality products. They are responsive, creative, and adaptable to our needs as well. <br />
            <br />
            I am delighted to say that Geecore has become our go-to partner for all of our IT training initiatives, providing comprehensive programs that have contributed to the development of our team's skills
          </p>
        </li>
        <li class="bg-white py-5 px-4 rounded-lg">
          <figure class="flex items-center gap-5">
            <img src="./assets/profile4.svg" alt="" class="w-14" />
            <figcaption>
              <h3 class="lg:text-xl md:text-lg text-base text-appGray">
                David Walker
              </h3>
              <p class="sm:text-sm text-xs">CTO of CloudStride Solutions</p>
            </figcaption>
          </figure>
          <p class="max-w-[27rem] mt-4 text-sm">
            As a result of Geecore Limited's design, our e-commerce platform was not only visually stunning but also optimized for user engagement, resulting in a significant increase in sales
Their web development team worked tirelessly to ensure a seamless and secure online shopping experience.
          </p>
        </li>
      </ul>
    </article>
      </div>
    </div>
</section>`,
  },
  {
    image: "./assets/plans-snapshot.png",
    title: "Plans",
    html: ` <section>
    <div class="signup__container">
      <div class="help__heading">
        <h3 class="heading__text">Ready to Sign Up?</h3>
        <p class="help__pText">These are our flexible payment options</p>
      </div>
      <div class="signup__plans">
        <div class="plans__variant">
          <img src="./assets/plans-img.svg" alt="">
          <h5>Standard</h5>
          <h1>$249/month</h1>
          <ul>
            <li>10 Blog Article</li>
            <li>Keyword Research</li>
            <li>700+ words</li>
            <li>SEO+ friendly</li>
          </ul>
          <button>Let's Talk</button>
        </div>
        <div class="plans__variant">
          <img src="./assets/plans-img.svg" alt="">
          <h5>Pay Over Time</h5>
          <h1>$249/month</h1>
          <ul>
            <li>10 Blog Article</li>
            <li>Keyword Research</li>
            <li>700+ words</li>
            <li>SEO+ friendly</li>
          </ul>
          <button>Let's Talk</button>
        </div>
        <div class="plans__variant">
          <img src="./assets/plans-img.svg" alt="">
          <h5>Custom</h5>
          <h1>Get a quote</h1>
          <ul>
            <li>10 Blog Article</li>
            <li>Keyword Research</li>
            <li>700+ words</li>
            <li>SEO+ friendly</li>
          </ul>
          <button>Let's Talk</button>
        </div>
      </div>
    </div>
  </section>`,
  },
  {
    image: "./assets/faq-snapshot.png",
    title: "Testimonials",
    html: `    <section class="frequent__container">
    <div class="help__heading">
      <h3 class="heading__text">Frequently asked questions</h3>
      <p class="help__pText">These are our flexible payment options</p>
    </div>
    
    <div class="frequent__body">
      <button class="btn__count">
        <img src="./assets/Count_plus.svg" alt="">
      </button>
      <h3>What is AI Builder</h3>
    </div>
    <p class="count__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatum eius, odit nihil porro animi pariatur voluptate, distinctio veniam quia, amet molestias commodi id omnis explicabo! Expedita rem corporis in.</p>
    <div class="frequent__body">
      <button class="btn__count">
        <img src="./assets/Count_plus.svg" alt="">
      </button>
      <h3>Who can use AI Builder</h3>
    </div>
    <p class="count__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatum eius, odit nihil porro animi pariatur voluptate, distinctio veniam quia, amet molestias commodi id omnis explicabo! Expedita rem corporis in.</p>
    <div class="frequent__body">
      <button class="btn__count">
        <img src="./assets/Count_plus.svg" alt="">
      </button>
      <h3>How does AI Builder work</h3>
    </div>
    <p class="count__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatum eius, odit nihil porro animi pariatur voluptate, distinctio veniam quia, amet molestias commodi id omnis explicabo! Expedita rem corporis in.</p>
    <div class="frequent__body">
      <button class="btn__count">
        <img src="./assets/Count_plus.svg" alt="">
      </button>
      <h3>What types of websites can be created with AI Builder</h3>
    </div>
    <p class="count__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatum eius, odit nihil porro animi pariatur voluptate, distinctio veniam quia, amet molestias commodi id omnis explicabo! Expedita rem corporis in.</p>
  </section>`,
  },
  {
    image: "./assets/cta-snapshot2.png",
    title: "CTA",
    html: `  <section class="grow__socials">
    <div class="growSocials__bg">
      <img src="" alt="">
      <div class="btn__con">
        <div class="help__heading">
          <h3 class="heading__text">Need to grow your socials?</h3>
          <p class="help__pText">Fuel your brand and drive results with industry-leading content creation team.</p>
        </div>
        <div class="social__btn">
          <button>
            Let's Talk
            <span class="iconify" data-icon="feather:arrow-right"></span>
          </button>
        </div>
      </div>
    </div>
  </section>`,
  },
  {
    image: "./assets/cta-snapshot2.png",
    title: "Footer",
    html: ` <section>
    <div class="footer__container">
      <div class="foot__nav">
        <a href="/" class="foot__logo">
          <img src="./assets/logo.svg" alt="" />
          Logo
        </a>
    
      <ul class="footNav__menu">
        <li class="navList"><a href="#home">Home</a></li>
        <li class="navList"><a href="#service">Service</a></li>
        <li class="navList"><a href="#about">About Us</a></li>
        <li class="navList"><a href="#blog">Blog</a></li>
        <li class="navList">
          <a href="#faq">FAQ</a>
        </li>
      </ul>
      </div>

      <div class="foot__email">
        <p>Get the freshest news from us</p>

        <div class="foot__flex">
          <div class="input__field">
            <input type="email" placeholder="Your email address…">
          </div>
          <div class="foot__btn">
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>

    <div class="terms__section">
      <div class="terms__container">
        <ul class="copyNav__menu">
          <li class="navList"><a href="#tac">Terms & Conditions</a></li>
          <span></span>
          <li class="navList"><a href="#privacy">Privacy Policy</a></li>
          <span></span>
          
          <li class="navList"><a href="#about">Accessibility</a></li>
          <span></span>

          <li class="navList"><a href="#blog">Legal</a></li>
        </ul>

        <div class="foot__copy">
         <p> &copy; 2024. All right reserved</p>
        </div>
      </div>
    </div>
  </section>`,
  },
];
