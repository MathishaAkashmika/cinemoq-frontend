const AboutUs = () => {
  return (
    <div className="bg-[#ffffff] min-h-[750px] relative overflow-hidden">
      
      <div
        className="w-full h-full absolute left-0 top-0"
        style={{
          background:
            "linear-gradient(142.9deg, rgba(113, 9, 129, 1) 0%, rgba(0, 0, 0, 1) 51.5%)",
        }}
      ></div>

      <div className="absolute left-0 right-0 top-[10px] flex items-center justify-center h-[50px]">
        <div className="text-[#ffffff] text-center font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] leading-[120%] hover:text-[#FF00FF] cursor-pointer transition duration-300 transform hover:scale-105">
          ABOUT US
        </div>
      </div>

      <div className="text-[#ffffff] text-left font-medium text-[14px] leading-[130%] absolute left-[10%] sm:left-[20%] top-[70px] w-[80%] sm:w-[70%] md:w-[60%] hover:text-[#FF00FF] cursor-pointer transition duration-500 ease-in-out transform hover:translate-x-2">
        Dedicated toward raising the bar in Sri Lanka’s cinema experience, cinemoq
        aims to provide our patrons with all the flare of old-school movie theaters,
        coupled with state-of-the-art modernity and comfort, consistent with
        international standards.
      </div>

      <img
        src="/images/1.jpeg"
        alt="First Portrait"
        className="absolute left-1/2 top-[150px] transform -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] object-cover rounded-lg shadow-lg"
      />

      <div
        className="bg-[#ffffff] w-[80%] sm:w-[70%] md:w-[60%] h-[1px] absolute left-[10%] sm:left-[19%] top-[490px]"
        style={{
          transformOrigin: "0 0",
          transform: "scale(1, -1)",
        }}
      ></div>

      <div className="text-[#ffffff] text-left font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] leading-[150%] absolute left-[10%] sm:left-[20%] top-[520px] w-[40%] hover:text-[#FF00FF] cursor-pointer transition duration-300 transform hover:translate-y-2">
        VISION
      </div>

      <div className="text-[#ffffff] text-left font-medium text-[14px] leading-[130%] absolute left-[10%] sm:left-[20%] top-[580px] w-[60%] sm:w-[40%] md:w-[25%] hover:text-[#FF00FF] cursor-pointer transition duration-500 ease-in-out transform hover:translate-x-2">
        To be Sri Lanka’s first multi-sensory luxury entertainment company that
        challenges industry standards by providing creative solutions to customers
        from all walks of life.
      </div>

      <div className="text-[#ffffff] text-left font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] leading-[150%] absolute right-[10%] sm:right-[7%] top-[520px] w-[40%] hover:text-[#FF00FF] cursor-pointer transition duration-300 transform hover:translate-y-2">
        SCOPE
      </div>

      <div className="text-[#ffffff] text-left font-medium text-[14px] leading-[130%] absolute right-[20%] sm:right-[22%] top-[580px] w-[60%] sm:w-[40%] md:w-[25%] hover:text-[#FF00FF] cursor-pointer transition duration-500 ease-in-out transform hover:translate-x-2">
        To deliver a spectrum of diversified positive experiences to customers
        through a portfolio of brands driven by a supportive organizational culture,
        which aims to maximize the value for all stakeholders.
      </div>
          </div>
  );
};

export default AboutUs;
