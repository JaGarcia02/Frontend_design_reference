import React from "react";
import frontend from "../../assets/images/front-end.png";
import backend from "../../assets/images/backend.png";
import uiux from "../../assets/images/design.png";
import appsDev from "../../assets/images/apps.png";

const Service = () => {
  return (
    <>
      <section id="service">
        <div className="container lg:pt-5">
          <div className="text-center">
            <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
              What do I help
            </h2>
            <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto culpa commodi repellat impedit iste aut quisquam
              aperiam incidunt quibusdam sed earum, ad deserunt ipsam est
              accusamus voluptatum dignissimos dolorum voluptatem perspiciatis
              provident expedita autem? Ipsa libero odit impedit quam ut,
              maxime, incidunt quo tempore quae porro laudantium quos numquam?
              Alias maxime, quia quaerat eius modi eligendi illum. Omnis odio
              itaque velit reiciendis perspiciatis ipsam eveniet!
            </p>
          </div>

          <div className="flex flex-col justify-center sm:py-12">
            <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
              <div className="relative text-gray-700 antialiased text-sm font-semibold">
                {/* ==================== vertical line running through the middle ==================== */}
                <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

                {/* ==================== left card ==================== */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          className="bg-white p-4 rouded shadow group hover:bg-primaryColor cursor-pointer ease-in-out duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                            Frontend Development
                          </h3>
                          <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Libero consequuntur quaerat ratione nesciunt
                            recusandae, beatae reprehenderit blanditiis minus
                            amet explicabo.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <img src={frontend} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* ==================== left card ==================== */}

                {/* ==================== right card ==================== */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                          data-aos="fade-left"
                          data-aos-duration="1300"
                          data-aos-delay="50"
                          className="bg-white p-4 rouded shadow group hover:bg-primaryColor cursor-pointer ease-in-out duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                            Backend Development
                          </h3>
                          <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Libero consequuntur quaerat ratione nesciunt
                            recusandae, beatae reprehenderit blanditiis minus
                            amet explicabo.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <img src={backend} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* ==================== right card ==================== */}
                {/* ==================== left card ==================== */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                          data-aos="fade-right"
                          data-aos-duration="1400"
                          data-aos-delay="100"
                          className="bg-white p-4 rouded shadow group hover:bg-primaryColor cursor-pointer ease-in-out duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                            UI/UX Design
                          </h3>
                          <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Libero consequuntur quaerat ratione nesciunt
                            recusandae, beatae reprehenderit blanditiis minus
                            amet explicabo.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <img src={uiux} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* ==================== left card ==================== */}

                {/* ==================== right card ==================== */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                          data-aos="fade-left"
                          data-aos-duration="1500"
                          className="bg-white p-4 rouded shadow group hover:bg-primaryColor cursor-pointer ease-in-out duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                            Application Development
                          </h3>
                          <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Libero consequuntur quaerat ratione nesciunt
                            recusandae, beatae reprehenderit blanditiis minus
                            amet explicabo.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <img src={appsDev} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* ==================== right card ==================== */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
