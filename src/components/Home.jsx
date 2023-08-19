import React from 'react';

 
export default function Home() {
    return (
        <div>
            <section id="hero" className="hero">

                <div className="info d-flex align-items-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h2 data-aos="fade-down">Welcome to <span>Blue Whale Cloud</span></h2>
                                <p data-aos="fade-up">A cloud management platform that enables developers to quickly deploy and provision cloud resources using pre-defined templates. The platform also includes policies that govern resource operations, improving overall IT productivity and visibility by centralizing cloud data and resources..</p>
                                <a data-aos="fade-up" data-aos-delay="200" href="#get-started" className="btn-get-started">Try us out</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">

                    <div className="carousel-item active" style={{ backgroundImage: `url(assets/img/hero-carousel/cloud1.jpg)` }}></div>
                    <div className="carousel-item" style={{ backgroundImage: `url(assets/img/hero-carousel/cloud3.jpg)` }}></div>
                    <div className="carousel-item" style={{ backgroundImage: `url(assets/img/hero-carousel/cloud4.jpg)` }}></div>
                    <div className="carousel-item" style={{ backgroundImage: `url(assets/img/hero-carousel/cloud6.jpg)` }}></div>

                    <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                    </a>

                    <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                    </a>

                </div>

            </section>

            <main id="main">

                <section id="get-started" className="get-started section-bg">
                    <div className="container">

                        <div className="row justify-content-between gy-4">

                            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up">
                                <div className="content">
                                    <h3>Benefits of Our Cloud Management.</h3>
                                    <p>A cloud management platform that enables developers to quickly deploy and provision cloud resources using pre-defined templates. The platform also includes policies that govern resource operations, improving overall IT productivity and visibility by centralizing cloud data and resources.</p>
                                    <p>Let users order services, make requests, or check on incidents via a personalized services catalog.</p>
                                </div>
                            </div>

                            <div className="col-lg-5" data-aos="fade">
                                <form action="forms/quote.php" method="post" className="php-email-form">
                                    <h3>Get the latest updates</h3>
                                    <p>Manage multiple cloud providers from a single console. Optimize your operations to reduce cloud spend, manage hybrid cloud services, and minimize business risk.</p>
                                    <div className="row gy-3">

                                        <div className="col-md-12">
                                            <input type="text" name="name" className="form-control" placeholder="Name" required />
                                        </div>

                                        <div className="col-md-12 ">
                                            <input type="email" className="form-control" name="email" placeholder="Email" required />
                                        </div>

                                        <div className="col-md-12">
                                            <input type="text" className="form-control" name="phone" placeholder="Phone" required />
                                        </div>

                                        <div className="col-md-12">
                                            <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                                        </div>

                                        <div className="col-md-12 text-center">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your quote request has been sent successfully. Thank you!</div>

                                            <button type="submit">Connect us</button>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="services" className="services section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Services</h2>
                            <p>From planning to operating and beyond, our experts help you accelerate edge to cloud transformation, optimize operations, and maximize IT investments.</p>
                        </div>

                        <div className="row gy-4">
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100"  >
                                <div className="service-item  position-relative">
                                    <div className="icon">
                                        <i className="fa-solid fa-mountain-city"></i>
                                    </div>
                                    <h3>Cloud Consulting</h3>
                                    <p>Leverage our decades of experience with some of the world's most complicated IT environments to create your optimal cloud strategy, streamline your IT architecture, and achieve your desire business results.</p>
                                    <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
                            </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                                    </div>
                                    <h3>Private Cloud Services</h3>
                                    <p>Experience the perfect combination of cloud efficiency and private infrastructure performance, compliance, and security that empowers you to modernize and manage your enterprise. We offer a unified, consistent approach across all the cloud landscape with our dedicated on-prem resources and our seamless integration with public cloud workload.</p>
                                    <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="fa-solid fa-compass-drafting"></i>
                                    </div>
                                    <h3>Public Cloud Service</h3>
                                    <p>Our proven, standardized, and repeatable services are meticulously designed to empower you to effortlessly design and deploy your applications and workloads on the optimal public cloud platform for your enterprise. BlueWhale Public Cloud services prioritize security and ease of management in addition to offering flexible deployment options tailored to your specific needs. From initial design to ongoing management, our Public Cloud Services provide comprehensive, integrated, and full-lifecycle support for cloud environments, all built on industry best practices, and fully aligned with the unique cloud adoption and management frameworks of each hyperscaler.</p>
                                    <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="fa-solid fa-trowel-bricks"></i>
                                    </div>
                                    <h3>Modern Operation</h3>
                                    <p>Blackwhale seamlessly integrates people, processes, and cutting-edge technology to provide unparalleled value that iterates on your current state, anticipated future needs, and the precise steps required to optimize your operational processes and maximize efficiency. Our evolved operating model is specifically tailored to meet the challenges and opportunities of today's rapidly evolving digital landscape, and expertly managed to facilitate ongoing business growth.</p>
                                    <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="fa-solid fa-helmet-safety"></i>
                                    </div>
                                    <h3>Cloud Migration</h3>
                                    <p>Embark on your cloud adoption journey with Blackwhale's Cloud Migration Services. Develop and execute the optimal migration strategy for your enterprise. Minimize the complexities of cloud migration and streamline your journey with our expert assessment and seamless workload migration capabilities. Bluewhale builds secure, repeatable, and scalable cloud environments for you on the cloud provider of your choice.</p>
                                    <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                                    </div>
                                    <h3>Managed Cloud Services</h3>
                                    <p>With a suite of unparalleled capabilities across public, private, and hybrid cloud, bluewhale empowers enterprises to optimize and modernize their infrastructure and applications, enabling them to fully harness the potential of the cloud, while also offering an array of managed services that cover the entire IT stack. Maximize the full potential of your IT infrastructure with bluewhale Managed Services.</p>
                                    <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="alt-services" className="alt-services">
                    <div className="container" data-aos="fade-up">

                        <div className="row justify-content-around gy-4">
                            <div className="col-lg-6 img-bg" style={{ backgroundImage: `url(assets/img/altimg.jpg)` }} data-aos="zoom-in" data-aos-delay="100"></div>

                            <div className="col-lg-5 d-flex flex-column justify-content-center">
                                <h3>Protect sensitive workflows</h3>
                                <p>Bluewhale Vault groups a set of premium security and privacy controls into a scalable package that can grow with you as your needs change.</p>

                                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                                    <i className="bi bi-easel flex-shrink-0"></i>
                                    <div>
                                        <h4><a href="" className="stretched-link">Platform Encryption</a></h4>
                                        <p>Cloud Encryption provides volume-based encryption and ensures sensitive data-at rest is always protected in ServiceNow datacenters with FIPS 140-2 Level 3.</p>
                                    </div>
                                </div>

                                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                                    <i className="bi bi-patch-check flex-shrink-0"></i>
                                    <div>
                                        <h4><a href="" className="stretched-link">Reduce Risk</a></h4>
                                        <p>Our services are designed with integrated industry best practices, processes, and methodologies that are reinforced by  24-7 support, that helps your service runs smoothly, minimizes the risk of failure and drives your ongoing success.</p>
                                    </div>
                                </div>

                                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                                    <i className="bi bi-brightness-high flex-shrink-0"></i>
                                    <div>
                                        <h4><a href="" className="stretched-link">Secure</a></h4>
                                        <p>Our modern security and privacy measures safeguard your data and our time-tested processes coupled with our cloud governance, compliance, and visibility features provide unparalleled transparency and control over your IT environment from our user-friendly digital self-service model.</p>
                                    </div>
                                </div>

                                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                                    <i className="bi bi-brightness-high flex-shrink-0"></i>
                                    <div>
                                        <h4><a href="" className="stretched-link">Manage</a></h4>
                                        <p>Prioritize your business objectives by entrusting the management of your IT estate to the Kyndryl experts. Our intelligent monitoring and pre-emptive management of hybrid multi-cloud environments allow you to optimize the potential of your cloud environment, giving you the freedom to focus on what truly matters.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                <section id="projects" class="projects">
                    <div class="container" data-aos="fade-up">

                        <div class="section-header">
                            <h2>Our Partners</h2>
                            <p>Bluewhale Stacks Partner Ecosystem for Enterprise Solutions</p>
                        </div>

                        <div class="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">


                            <div class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

                                <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/intel2.png" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>intel</h4>
                                                <p>Intel Support</p>
                                                <a href="assets/img/intel2.png" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-construction">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/azure.png" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>Azure Cloud</h4>
                                                <p>Azure cloud partner</p>
                                                <a href="assets/img/azure.png" title="Construction 1" data-gallery="portfolio-gallery-construction" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/gcp.png" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>Google Cloud</h4>
                                                <p>Google cloud service</p>
                                                <a href="assets/img/gcp.png" title="Repairs 1" data-gallery="portfolio-gallery-repairs" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-design">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/aws.png" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>AWS</h4>
                                                <p>Amazon web Services</p>
                                                <a href="assets/img/aws.png" title="Repairs 1" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/ibm.png" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>ibm</h4>
                                                <p>ibm cloud services</p>
                                                <a href="assets/img/ibm.png" title="Remodeling 2" data-gallery="portfolio-gallery-remodeling" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-construction">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/jera.png" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>Jera</h4>
                                                <p>Jera Soft</p>
                                                <a href="assets/img/jera.png" title="Construction 2" data-gallery="portfolio-gallery-construction" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/kubernet.png" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>kubernets</h4>
                                                <p>kubernet services</p>
                                                <a href="assets/img/kubernet.png" title="Repairs 2" data-gallery="portfolio-gallery-repairs" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-design">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/cisco.png" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>Cisco</h4>
                                                <p>Cisco Services</p>
                                                <a href="assets/img/cisco.png" title="Repairs 2" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/vmware.png" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>VM Ware</h4>
                                                <p>Vmware</p>
                                                <a href="assets/img/vmware.png" title="Remodeling 3" data-gallery="portfolio-gallery-remodeling" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-construction">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/docker.png" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>Docker</h4>
                                                <p>Docker</p>
                                                <a href="assets/img/docker.png" title="Construction 3" data-gallery="portfolio-gallery-construction" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/ms.png" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>Microsoft</h4>
                                                <p>Microsoft service</p>
                                                <a href="assets/img/ms.png" title="Repairs 2" data-gallery="portfolio-gallery-repairs" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-design">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/siemens.png" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>Siemens</h4>
                                                <p>Siemens services</p>
                                                <a href="assets/img/siemens.png" title="Repairs 3" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>
            </main>
        </div>
    )
}
