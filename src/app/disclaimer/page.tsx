import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Disclaimer = () => {
  return (
      <div><Navbar />

              <div className="bg-[#ffffff] min-h-[750px] relative overflow-hidden">

                    <div
                          className="w-full h-full absolute left-0 top-0"
                          style={{
                                background: "linear-gradient(142.9deg, rgba(113, 9, 129, 1) 0%, rgba(0, 0, 0, 1) 51.5%)",
                          }}>
                    </div>


                    <div className="absolute left-0 right-0 top-[20px] flex items-center justify-center h-[50px]">
                          <div className="text-[#ffffff] text-center font-medium text-[20px] md:text-[24px] leading-[120%] hover:text-[#FF00FF] cursor-pointer transition duration-300 transform hover:scale-105">
                                DISCLAIMER
                          </div>
                    </div>


                    <div className="absolute left-0 right-0 top-[80px] flex flex-col items-center text-[#ffffff] text-left font-medium text-[11px] md:text-[13px] leading-[160%] w-[90%] sm:w-[85%] lg:w-[70%] mx-auto mt-4 space-y-6">
                          <div className="space-y-6">


                                <div className="hover:text-[#FF00FF] transition-all duration-300 transform hover:translate-y-2">
                                      This Website has been compiled in good faith by Green cinemas and Theatres and all information and data provided on this site is for informational purposes only.
                                </div>

                                <div className="hover:text-[#FF00FF] transition-all duration-300 transform hover:translate-y-2">
                                      Green cinemas and Theatres do not guarantee the accuracy, validity, completeness or the suitability of any information or data on this site (www.ticketer.com). No representation is made or warranty given, either express or implied as to the completeness or accuracy of the information that it contains, that it will be uninterrupted or error-free or that any information is free of bugs, viruses, worms, trojan horses, or other harmful components.
                                </div>

                                <div className="hover:text-[#FF00FF] transition-all duration-300 transform hover:translate-y-2">
                                      Although we believe that all information which currently appears on the www.ticketer.com website is to the best of our knowledge valid and accurate and has been obtained from reliable sources, it is, however, the sole responsibility of the user to ascertain the validity and accuracy of the information provided on the www.ticketer.com site prior to making decisions.
                                </div>

                                <div className="hover:text-[#FF00FF] transition-all duration-300 transform hover:translate-y-2">
                                      To the maximum extent permitted by law, Green cinemas and Theatres disclaims all implied warranties with regard to information, products, services, and material provided through this Website. All such information, products, services, and materials are provided “as is” and “as available” without warranty of any kind.
                                </div>

                                <div className="hover:text-[#FF00FF] transition-all duration-300 transform hover:translate-y-2">
                                      This Website may contain links to websites operated by third parties. Such links are provided for your reference only, and your use of these sites may be subject to terms and conditions posted on them. Green cinemas and Theatres inclusion of links to other websites does not imply any endorsement of the material on such websites, and Green cinemas and Theatres accepts no liability for their contents. Further, the user agrees that Green cinemas and Theatres cannot be held responsible for any damage, claims, or any mishaps that may happen to occur from any link leading outside this site.
                                </div>

                                <div className="hover:text-[#FF00FF] transition-all duration-300 transform hover:translate-y-2">
                                      By accessing this Website (www.ticketer.com), you agree that Green cinemas and Theatres will not be liable for any direct, indirect, or consequential loss or damages of any nature arising from the use of this Website, including information and material contained in it, from your access to other material on the internet via web links from this Website, delay, or inability to use this Website or the availability and utility of the products and services.
                                </div>

                                <div className="hover:text-[#FF00FF] transition-all duration-300 transform hover:translate-y-2">
                                      You further agree to indemnify, hold Green cinemas and Theatres harmless from, and covenant not to sue Green cinemas and Theatres for any claims based on using this Website (www.ticketer.com).
                                </div>
                          </div>
                    </div>
              </div>
              <Footer />
        </div>
   );
};

export default Disclaimer;