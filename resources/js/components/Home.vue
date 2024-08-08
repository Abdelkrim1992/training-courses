<template>
    <!-- back to top start -->
        <div class="back-to-top-wrapper">
         <button id="back_to_top" type="button" class="back-to-top-btn">
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M11 6L6 1L1 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
            </svg>
         </button>
        </div>
    <!-- back to top end -->


   <!-- header-area-start -->
      <header class="header-area p-relative">
         <div id="header-sticky" class="tp-header-2">
            <div class="container custom-container-larg">
               <div class="row align-items-center">
                  <div class="col-xxl-3 col-xl-3 col-lg-6 col-6">
                     <div class="tp-header-2-right d-flex align-items-center">
                        <div class="tp-header-inner-logo tp-header-logo">
                           <a href="/">
                              <img src="frontend/img/logo/logo-black.png" alt="logo">
                           </a>
                        </div>
                     </div>
                  </div>
                  <div class="col-xxl-6 col-xl-7 col-lg-6 d-none d-xl-block">
                     <div class="main-menu text-xl-center d-none d-xl-block">
                        <nav class="tp-main-menu-content">
                           <ul>
                              <li class="text-center">
                                 <a href="/">Home</a>
                              </li>
                              <li class="text-center">
                                 <a href="route('frontend.about_us)">About Us</a>
                              </li>
                              <li class="text-center"> 
                                 <a href="route('frontend.courses)">Courses</a>
                              </li>
                              <li class="text-center"> 
                                 <a href="route('frontend.contact_us)">Contact Us</a>
                              </li>
                              
                           </ul>
                           
                        </nav>
                     </div>
                  </div>
                  <div class="col-xxl-3 col-xl-2 col-lg-6 col-6">
                     <div class="tp-header-2-contact d-flex align-items-center justify-content-end">
                     
                        <div class="tp-header-inner-btn home-2 d-none d-xxl-block ">
                           <a class="tp-btn-inner " href="https://wa.me/message/FBO52GTDTUCCE1">Get Started Now</a>
                        </div>
                    
                        <div class="offcanvas-btn d-xxl-none ml-30">
                           <button class="offcanvas-open-btn"><i class="fa-solid fa-bars"></i></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   <!-- header-area-end -->


   <!-- offcanvas area start -->
      <div class="offcanvas__area offcanvas__2">
         <div class="offcanvas__wrapper">
            <div class="offcanvas__close">
               <button class="offcanvas__close-btn offcanvas-close-btn">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M11 1L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M1 1L11 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
               </button>
            </div>
            <div class="offcanvas__content">
               <div class="offcanvas__top mb-90 d-flex justify-content-between align-items-center">
                  <div class="offcanvas__logo tp-header-logo">
                     <a href="/">
                        <img src="frontend/img/logo/logo-black.png" alt="logo">
                     </a>
                  </div>
               </div>
               <div class="offcanvas-main">
                  <div class="tp-main-menu-mobile d-xxl-none"></div>
                  <div class="offcanvas-gallery home-2">
                     <div class="row gx-2 mb-40">
                     </div>
                  </div>
                  <h3 class="offcanvas-title sm">Information</h3>
      
                     <ul>
                        <li><a href="tel:1245654">+ 4 20 7700 1007</a></li>
                        <li><a href="mailto:hello@acadia.com">hello@acadia.com</a></li>
                        <li><a href="#">Avenue de Roma 158b, Lisboa</a></li>
                  </ul>
               </div>
               
            </div>
         </div>
      </div>
      <div class="body-overlay"></div>
   <!-- offcanvas area end -->

      <main>

      <!-- hero-area-start -->
         <div class="tp-hero-area lightblue-bg tp-hero-2-bg">
            <div class="container custom-container">
               <div class="tp-hero-2-wrap">
                  <div class="row align-items-end">
                     <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-12">
                        <div class="tp-hero-2-content">
                           <span class="tp-hero-2-subtitle wow fadeInUp" data-wow-delay=".3s">Keep Learning</span>
                           <h2 class="tp-hero-2-title wow fadeInUp" data-wow-delay=".5s">Best digital 
                               <span>Online <img class="wow bounceIn" data-wow-duration="1.5s" data-wow-delay=".4s" src="frontend/img/unlerline/hero-2-svg-1.svg" alt=""></span> 
                           Courses</h2>
                           <p class=" wow fadeInUp" data-wow-delay=".7s">Acquire global knowledge and build your <br> professional skills</p>
                           <div class="tp-hero-2-btn wow fadeInUp" data-wow-delay=".9s">
                              <a class="tp-btn-border" href="https://wa.me/message/FBO52GTDTUCCE1">Get Started With Us 
                                 <span>
                                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M8.71533 1L13 5.28471L8.71533 9.56941" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M1 5.28473H12.88" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                 </span>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div class="offset-xxl-4 col-xxl-3 offset-xl-2 col-xl-4 col-lg-5 col-md-6">
                        <div class="tp-hero-2-course p-relative wow fadeInUp" data-wow-delay=".5s">
                           <div class="tp-course-item p-relative fix mb-30">
                              <div class="tp-course-teacher mb-15">
                                 <span><img src="frontend/img/teacher/teacher-5.png" alt="">Hilary Ouse</span>
                                 <span class="discount">-25%</span>
                              </div>
                              <div class="tp-course-thumb">
                                 <a href="course-details-2.html"><img class="course-lightblue" src="frontend/img/course/course-thumb-1.jpg" alt=""></a>
                              </div>
                              <div class="tp-course-content">
                                 <div class="tp-course-tag mb-10">
                                    <span>Art & Design</span>
                                 </div>
                                 <h4 class="tp-course-title">
                                    <a href="course-details-2.html">Interior design concepts <br> Masterclass</a>
                                 </h4>
                                 <div class="tp-course-rating d-flex align-items-end justify-content-between">
                                    <div class="tp-course-rating-star">
                                       <p>5.0<span> /5</span></p>
                                       <div class="tp-course-rating-icon">
                                          <i class="fa-solid fa-star"></i>
                                          <i class="fa-solid fa-star"></i>
                                          <i class="fa-solid fa-star"></i>
                                          <i class="fa-solid fa-star"></i>
                                          <i class="fa-solid fa-star"></i>
                                       </div>
                                    </div>
                                    <div class="tp-course-pricing home-2">
                                       <del>$26.00</del>
                                       <span>$84.00</span>
                                    </div>
                                 </div>
                              </div>
                              <div class="tp-course-btn home-2">
                                 <a href="course-details-2.html">Preview this Course</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="tp-hero-2-thumb">
                     <img src="frontend/img/hero/hero-2-thumb-1.png" alt="">
                  </div>
               </div>
            </div>
            <div class="tp-hero-2-shape">
               <div class="tp-hero-2-shape-1">
                  <span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="846" height="579" viewBox="0 0 846 579" fill="none">
                        <path class="line-2" d="M212.745 593.864C358.949 649.758 822.546 792.326 466.431 560.525C110.316 328.724 477.436 405.184 743.017 461.029C1008.6 516.874 193.087 -40.2421 69.0387 93.5502C-55.0097 227.343 493.91 431.765 484.946 51.9085" stroke="url(#paint0_linear_311_1041)" stroke-width="100" stroke-linecap="square"/>
                        <defs>
                          <linearGradient id="paint0_linear_311_1041" x1="769.255" y1="703.159" x2="-110.567" y2="48.8101" gradientUnits="userSpaceOnUse">
                          </linearGradient>
                        </defs>
                      </svg>
                  </span>
               </div>
               <div class="tp-hero-2-shape-2">
                  <img src="frontend/img/hero/hero-2-shape-2.png" alt="">
               </div>
               <div class="tp-hero-2-shape-3">
                  <img src="frontend/img/hero/hero-2-shape-3.png" alt="">
               </div>
               <div class="tp-hero-2-shape-4">
                  <img src="frontend/img/hero/hero-2-shape-4.png" alt="">
               </div>
            </div>
         </div>
      <!-- hero-area-end -->

      <!-- category-area-start -->
         <section class="category-area mb-80 mt-95">
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-xl-8 col-lg-10">
                     <div class="tp-section mb-40 text-center wow fadeInUp" data-wow-delay=".4s">
                        <h5 class="tp-section-3-subtitle">Top Categories</h5>
                        <h3 class="tp-section-3-title">Most demanding 
                           <span>Categories 
                              <img class="tp-underline-shape-5 wow bounceIn" data-wow-duration="1.5s" data-wow-delay=".4s" src="assets/img/shape/bottom-line/line-2-category.svg" alt="">
                           </span>.
                        </h3>
                     </div>
                  </div>
               </div>
               <div class="row">
                  <div class="col-lg-3 col-md-4 col-sm-6">
                     <a href="course-categories.html" class="tp-category-item mb-25 wow fadeInUp" data-wow-delay=".3s">
                        <div class="tp-category-icon">
                           <span class="cat-purple"><img src="frontend/img/icon/category/cat-2-icon-1.svg" alt=""></span>
                        </div>
                        <div class="tp-category-content">
                           <h4 class="tp-category-title">Development</h4>
                           <span>Code with Confident</span>
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6">
                     <a href="course-categories.html" class="tp-category-item mb-25 wow fadeInUp" data-wow-delay=".3s">
                        <div class="tp-category-icon">
                           <span class="cat-green"><img src="frontend/img/icon/category/cat-2-icon-2.svg" alt=""></span>
                        </div>
                        <div class="tp-category-content">
                           <h4 class="tp-category-title">UI/UX Design</h4>
                           <span>Design with Confident</span>
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6">
                     <a href="course-categories.html" class="tp-category-item mb-25 wow fadeInUp" data-wow-delay=".3s">
                        <div class="tp-category-icon">
                           <span class="cat-purple"><img src="frontend/img/icon/category/cat-2-icon-3.svg" alt=""></span>
                        </div>
                        <div class="tp-category-content">
                           <h4 class="tp-category-title">Lifestyle</h4>
                           <span>New Skills, New You</span>
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6">
                     <a href="course-categories.html" class="tp-category-item mb-25 wow fadeInUp" data-wow-delay=".3s">
                        <div class="tp-category-icon">
                           <span class="cat-blue"><img src="frontend/img/icon/category/cat-2-icon-4.svg" alt=""></span>
                        </div>
                        <div class="tp-category-content">
                           <h4 class="tp-category-title">Business</h4>
                           <span>Improve your business</span>
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6">
                     <a href="course-categories.html" class="tp-category-item mb-25 wow fadeInUp" data-wow-delay=".5s">
                        <div class="tp-category-icon">
                           <span class="cat-pink"><img src="frontend/img/icon/category/cat-2-icon-5.svg" alt=""></span>
                        </div>
                        <div class="tp-category-content">
                           <h4 class="tp-category-title">Photography</h4>
                           <span>Major or Minor</span>
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6">
                     <a href="course-categories.html" class="tp-category-item mb-25 wow fadeInUp" data-wow-delay=".5s">
                        <div class="tp-category-icon">
                           <span class="cat-l-purple"><img src="frontend/img/icon/category/cat-2-icon-6.svg" alt=""></span>
                        </div>
                        <div class="tp-category-content">
                           <h4 class="tp-category-title">Music</h4>
                           <span>Control your Wallet</span>
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6">
                     <a href="course-categories.html" class="tp-category-item mb-25 wow fadeInUp" data-wow-delay=".5s">
                        <div class="tp-category-icon">
                           <span class="cat-yellow"><img src="frontend/img/icon/category/cat-2-icon-7.svg" alt=""></span>
                        </div>
                        <div class="tp-category-content">
                           <h4 class="tp-category-title">Teaching</h4>
                           <span>High Education Level</span>
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6">
                     <a href="course-categories.html" class="tp-category-item mb-25 wow fadeInUp" data-wow-delay=".5s">
                        <div class="tp-category-icon">
                           <span class="cat-lgreen"><img src="frontend/img/icon/category/cat-2-icon-8.svg" alt=""></span>
                        </div>
                        <div class="tp-category-content">
                           <h4 class="tp-category-title">Development</h4>
                           <span>Improve your business</span>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
         </section>
      <!-- category-area-end -->

      <!-- funfact-area-start -->
         <section class="funfact-area tp-funfact-bg" data-background="frontend/img/bg/funfact-2-bg-1.jpg">
            <div class="container">
               <div class="row">
                  <div class="col-lg-3 col-sm-6">
                     <div class="tp-funfact-item d-flex align-items-center">
                        <div class="tp-funfact-icon">
                           <span><img src="frontend/img/icon/funfact/funfact-2-icon-1.svg" alt="icon"></span>
                        </div>
                        <div class="tp-funfact-content">
                           <h4 class="tp-funfact-title">Flexible classes</h4>
                           <span>You pick schedule.</span>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                     <div class="tp-funfact-item tp-funfact-item-2 d-flex align-items-center">
                        <div class="tp-funfact-icon">
                           <span><img src="frontend/img/icon/funfact/funfact-2-icon-2.svg" alt="icon"></span>
                        </div>
                        <div class="tp-funfact-content">
                           <h4 class="tp-funfact-title">Offline mode</h4>
                           <span>Download classes.</span>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                     <div class="tp-funfact-item tp-funfact-item-3 d-flex align-items-center">
                        <div class="tp-funfact-icon">
                           <span><img src="frontend/img/icon/funfact/funfact-2-icon-3.svg" alt="icon"></span>
                        </div>
                        <div class="tp-funfact-content">
                           <h4 class="tp-funfact-title">10k online courses</h4>
                           <span>Explore a fresh topics</span>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                     <div class="tp-funfact-item d-flex align-items-center justify-content-lg-end">
                        <div class="tp-funfact-icon">
                           <span><img src="frontend/img/icon/funfact/funfact-2-icon-4.svg" alt="icon"></span>
                        </div>
                        <div class="tp-funfact-content">
                           <h4 class="tp-funfact-title">Educator help</h4>
                           <span>Always get answers.</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      <!-- funfact-area-end -->

      <!-- course-area-start -->
         <section class="course-area tp-course-wrapper mt-100 mb-100">
            <div class="container">
               <div class="row align-items-end">
                  <div class="col-xxl-5 col-xl-6 col-lg-7">
                     <div class="tp-section mb-40">
                        <h5 class="tp-section-3-subtitle">Our Courses</h5>
                        <h3 class="tp-section-3-title">Most Popular
                           <span>Courses
                              <img class="tp-underline-shape-6 wow bounceIn" data-wow-duration="1.5s" data-wow-delay=".4s" src="assets/img/unlerline/course-2-svg-1.svg" alt="">
                           </span>
                        </h3>
                     </div>
                  </div>
               </div>
               <div class="row">
                  <div class="col-lg-12">
                     <div class="tab-content wow fadeInUp" data-wow-delay=".3s" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab" tabindex="0">
                           <div class="row">
                              <div class="col-lg-4 col-md-6">
                                 <div class="tp-course-item p-relative fix mb-30">
                                    <div class="tp-course-teacher mb-15">
                                       <span><img src="frontend/img/teacher/teacher-1.png" alt="">Hilary Ouse</span>
                                    </div>
                                    <div class="tp-course-thumb">
                                       <a href="course-details-2.html"><img class="course-pink" src="frontend/img/course/course-thumb-1.jpg" alt=""></a>
                                    </div>
                                    <div class="tp-course-content">
                                       <div class="tp-course-tag mb-10">
                                          <span>Art & Design</span>
                                       </div>
                                       <div class="tp-course-meta">
                                          <span>
                                             <span>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M13.9228 10.0426V2.29411C13.9228 1.51825 13.2949 0.953997 12.5252 1.01445H12.4847C11.1276 1.12529 9.07163 1.82055 7.91706 2.53596L7.80567 2.6065C7.62337 2.71733 7.30935 2.71733 7.11692 2.6065L6.9549 2.50573C5.81046 1.79033 3.75452 1.1152 2.3974 1.00437C1.62768 0.943911 0.999756 1.51827 0.999756 2.28405V10.0426C0.999756 10.6573 1.50613 11.2417 2.12393 11.3122L2.30622 11.3425C3.70386 11.5238 5.87126 12.2392 7.10685 12.9143L7.1372 12.9244C7.30937 13.0252 7.59293 13.0252 7.75498 12.9244C8.99057 12.2393 11.1681 11.5339 12.5758 11.3425L12.7885 11.3122C13.4164 11.2417 13.9228 10.6674 13.9228 10.0426Z" stroke="#94928E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                   <path d="M7.46118 2.81787V12.4506" stroke="#94928E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                             </span>
                                             12 Lessons
                                          </span>
                                          <span>
                                             <span>
                                                <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M6.57134 7.5C8.36239 7.5 9.81432 6.04493 9.81432 4.25C9.81432 2.45507 8.36239 1 6.57134 1C4.7803 1 3.32837 2.45507 3.32837 4.25C3.32837 6.04493 4.7803 7.5 6.57134 7.5Z" stroke="#94928E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                   <path d="M12.1426 14C12.1426 11.4845 9.64553 9.44995 6.57119 9.44995C3.49684 9.44995 0.999756 11.4845 0.999756 14" stroke="#94928E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                             </span>
                                             45 Student
                                          </span>
                                       </div>
                                       <h4 class="tp-course-title">
                                          <a href="course-details-2.html">Interior design concepts <br> Masterclass</a>
                                       </h4>
                                       <div class="tp-course-rating d-flex align-items-end justify-content-between">
                                          <div class="tp-course-rating-star">
                                             <p>5.0<span> /5</span></p>
                                             <div class="tp-course-rating-icon">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                             </div>
                                          </div>
                                          <div class="tp-course-pricing home-2">
                                             <span>Free</span>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="tp-course-btn home-2">
                                       <a href="course-details-2.html">Preview this Course</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      <!-- course-area-end -->

      <!-- testimonial-area-start -->
         <section class="testimonial-area lightblue-bg pb-85">
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-xxl-6 col-lg-8">
                     <div class="tp-testimonial-section">
                        <div class="tp-section text-center mb-40">
                           <h3 class="tp-section-3-title mt-100">Student
                              <span>Say
                                 <img class="tp-underline-shape-8 wow bounceIn" data-wow-duration="1.5s" data-wow-delay=".4s" src="frontend/img/unlerline/testimonial-2-svg-1.svg" alt="">
                              </span>
                              About Acadia
                           </h3>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="row justify-content-center">
                  <div class="col-xl-5 col-lg-6 col-md-8">
                     <div class="tp-testimonial-2-avatar-active">
                        <div class="tp-testimonial-2-avatar-item">
                           <img src="frontend/img/testimonial/test-2-avatar-1.png" alt="avatar">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="row justify-content-center">
                  <div class="col-lg-8">
                     <div class="tp-testimonial-2-active">
                        <div class="tp-testimonial-2-item text-center">
                           <div class="tp-testimonial-2-avatar-info">
                              <h4 class="tp-testimonial-2-avatar-title">Annette </h4>
                              <span>Lecturer, Oxford university</span>
                              <div class="tp-testimonial-2-avatar-rating">
                                 <i class="fa-solid fa-star"></i>
                                 <i class="fa-solid fa-star"></i>
                                 <i class="fa-solid fa-star"></i>
                                 <i class="fa-solid fa-star"></i>
                                 <i class="fa-solid fa-star"></i>
                              </div>
                           </div>
                           <div class="tp-testimonial-2-content p-relative">
                              <p>I need to get a certification for English proficiency and Acadia is my best choice.
                                 Their tutors are smart and professional when dealing with students.  I wanted
                                 to place a review since ! Thanks and 5 stars!
                              </p>
                              <div class="tp-testimonial-2-shape">
                                 <div class="shape-1"><img src="frontend/img/testimonial/testimonial-shape-1.png" alt=""></div>
                                 <div class="shape-2"><img src="frontend/img/testimonial/testimonial-shape-3.png" alt=""></div>
                              </div>
                           </div>
                        </div>
                        
                     </div>
                  </div>
               </div>
            </div>
         </section>
      <!-- testimonial-area-end -->

      <!-- team-area-start -->
         <section class="team-area pt-100 mb-100">
            <div class="container">
               <div class="row align-items-end">
                  <div class="col-lg-6 col-md-8">
                     <div class="tp-section mb-45">
                        <h5 class="tp-section-3-subtitle">Our Team</h5>
                        <h3 class="tp-section-3-title">Meet Our 
                           <span>Teachers
                              <img class="tp-underline-shape-9 wow bounceIn" data-wow-duration="1.5s" data-wow-delay=".4s" src="frontend/img/unlerline/team-2-svg-1.svg" alt="">
                           </span>
                        </h3>
                     </div>
                  </div>
                  <div class="col-lg-6 col-md-4">
                     <div class="tp-team-2-arrow d-flex align-items-center justify-content-md-end mb-55">
                        <div class="tp-team-2-prev">
                           <span>
                              <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M6 11L1 6L6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                           </span>
                        </div>
                        <div class="tp-team-2-next">
                           <span>
                              <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="swiper tp-team-2-active wow fadeInUp" data-wow-delay=".5s">
                  <div class="swiper-wrapper align-items-end">
                     <div class="swiper-slide">
                        <div class="tp-team-2-item">
                           <div class="tp-team-2-bg"></div>
                           <div class="tp-team-2-social">
                              <span class="tp-team-2-social-wrap">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                              </span>
                              <div class="tp-team-2-social-icon">
                                 <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                 <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                 <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                              </div>
                           </div>
                           <div class="tp-team-2-thumb">
                              <img src="frontend/img/team/team-2-thumb-1.png" alt="">
                           </div>
                           <div class="tp-team-2-content">
                              <h4 class="tp-team-2-title"><a href="my-profile.html">Leslie Alexander</a></h4>
                              <span>Teaches Interior Design</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      <!-- team-area-end -->

   <!-- Talk area start here -->
<section class="talk-area pt-50 pb-25 mt-5" data-background="frontend/img/shop/shop-thumb-bg.png">
    <div class="container">
        <div class="row g-4">
            <div class="col-lg-7">
                <div class="tp-funfact-content pt-30">
                    
                    <h1 class="text-white wow fadeInUp pb-30 text-center" data-wow-delay="200ms" data-wow-duration="1000ms">
                        Start the conversation to develop your business skills
                    </h1>
                    <h5 class="text-white wow fadeInUp text-center" data-wow-delay="400ms" data-wow-duration="1000ms">
                        Schedule a free consultation with our experts. Discover opportunities and take the first step towards digital success
                    </h5>  
                    <div class="d-flex align-items-center gap-4 mt-40 wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1000ms">
                        <a href="https://wa.me/message/FBO52GTDTUCCE1" class="tp-btn-inner">Let's talk<i class="fa-regular fa-circle-arrow-right ml-10"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                <div class="contact__form">
                    <h3 class="text-capitalize mb-30 text-center text-white">Get a free consultation</h3>
                    <div id="formMessage" style="display:none;" class="alert alert-success"></div>
                    <form id="form" action="" method="POST">
                        @csrf
                        <input type="text" id="client_name" name="client_name" placeholder="Your name*" required class="text-right" />
                        <div class="row g-3">
                            <div class="col-6">
                                <input type="text" id="client_email" name="client_email" placeholder="Your email*" required class="text-right" />
                            </div>
                            <div class="col-6">
                                <input type="text" id="client_phone" name="client_phone" placeholder="Your phone*" required class="text-right" />
                            </div>
                        </div>
                        <textarea name="message" id="message" placeholder="Message" class="form-control mb-3 text-right" required></textarea>
                        <button type="submit" class="tp-btn-inner">Send <i class="fa-regular fa-circle-arrow-right ml-10"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
   <!-- Talk area end here -->

      </main>

   <!-- footer-area-start -->
      <footer>
         <div class="tp-footer-2">
            <div class="tp-footer-main pt-70 pb-55">
               <div class="container">
                  <div class="row">
                     <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="tp-footer-widget tp-footer-2-col-1 mb-30">
                           <div class="tp-footer-widget-logo mb-20 tp-header-logo">
                              <a href="/"><img src="frontend/img/logo/logo-black.png" alt=""></a>
                           </div>
                           <div class="tp-footer-widget-content">
                              <p>Acadia education theme, built specifically for the education centers which is teaching and involve learners.</p>
                           </div>
                           <div class="tp-footer-contact">
                              <div class="tp-footer-btn">
                                 <a class="tp-btn-round" href="contact.html">Contact Us 
                                    <span>
                                       <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M8.71533 1L13 5.28471L8.71533 9.56941" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M1 5.28467H12.88" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                       </svg>
                                    </span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div class="tp-footer-widget tp-footer-2-col-2 mb-30">
                           <h4 class="tp-footer-widget-title mb-15">About</h4>
                           <div class="tp-footer-widget-link">
                              <ul>
                                 <li><a href="about.html">About Us</a></li>
                                 <li><a href="course-with-filter.html">Courses</a></li>
                                 <li><a href="blog-standard.html">News & Blogs</a></li>
                                 <li><a href="become-instructor.html">Become a Teacher</a></li>
                                 <li><a href="event.html">Events</a></li>
                                 <li><a href="contact.html">Contact</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div class="tp-footer-widget tp-footer-2-col-3 mb-30">
                           <h4 class="tp-footer-widget-title mb-15">Quick links</h4>
                           <div class="tp-footer-widget-link">
                              <ul>
                                 <li><a href="student-profile.html">Students</a></li>
                                 <li><a href="university-admission-overview.html">Addmition</a></li>
                                 <li><a href="university-leadership.html">Faculty & Staffs</a></li>
                                 <li><a href="#">Media Relations</a></li>
                                 <li><a href="#">Alumni</a></li>
                                 <li><a href="university-schedule.html">Visit</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="p-footer-widget tp-footer-2-col-4 mb-30">
                           <h4 class="tp-footer-widget-title mb-20">Our Newsletter</h4>
                           <div class="tp-footer-contact">
                              <span>Got Questions? Call us</span>
                              <a href="tel:012345678">+670 413 90 762</a>
                           </div>
                           <div class="tp-footer-contact-mail mb-20">
                              <a href="mailto:acadia@gmail.com">
                                 <span>
                                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M1 5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6H5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M13 5.40039L10.496 7.40015C9.672 8.05607 8.32 8.05607 7.496 7.40015L5 5.40039" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M1 11.4004H5.8" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M1 8.19922H3.4" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                 </span> 
                                 acadia@gmail.com</a>
                           </div>
                           <div class="tp-footer-app">
                              <a href="#"><img src="assets/img/footer/google-play.jpg" alt=""></a>
                              <a href="#"><img src="assets/img/footer/apple-store.jpg" alt=""></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="tp-footer-bottom">
               <div class="container">
                  <div class="row align-items-center">
                     <div class="col-lg-3 col-md-4">
                        <div class="tp-footer-bottom-social">
                           <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                           <a href="#"><i class="fa-brands fa-twitter"></i></a>
                           <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                           <a href="#"><i class="fa-brands fa-youtube"></i></a>
                        </div>
                     </div>
                     <div class="col-lg-6 col-md-5">
                        <div class="tp-footer-copyright text-start text-md-center">
                           <span>© 2024 <a href="#">Acadia</a>. All rights reserved.</span>
                        </div>
                     </div>
                     <div class="col-lg-3 col-md-3">
                        <div class="header-bottom__lang-2 text-start text-md-end">
                           <ul>
                              <li>
                                 <a id="header-bottom__lang-toggle" href="javascript:void(0)">
                                    <span>EN</span>
                                    <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                                          <path d="M1 1L5 5L9 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                       </svg>
                                    </span>
                                 </a>
                                 <ul class="header-bottom__lang-submenu-2">
                                    <li>
                                       <a href="#">Arabic</a>
                                    </li>
                                    <li>
                                       <a href="#">Spanish</a>
                                    </li>
                                    <li>
                                       <a href="#">Mandarin</a>
                                    </li>
                                 </ul>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   <!-- footer-area-end -->
</template>


<script>

    export default{
        name:'Home'
    }

</script>