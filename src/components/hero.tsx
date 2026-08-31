import "../Hero.css"
export default function Hero() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center" id="Home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Section (Animated Text) */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Hi, I'm Vishwa M T
            </h1>

            {/* Animated Text */}
            <div className="content">
              <div className="content__container">
                <ul className="content__container__list">
                  <li className="content__container__list__item">DevOps Engineer</li>
                  <li className="content__container__list__item">Frontend Developer</li>
                  <li className="content__container__list__item">DevOps Engineer</li>
                  <li className="content__container__list__item">Frontend Developer</li>


                </ul>
              </div>
            </div>

            <p className="text-gray-400 text-xl mb-8 mt-4">
              Specialized in Cloud Infrastructure & Automation
            </p>

            <div className="flex gap-4">
              <a href="#Contact" className="px-6 py-3 border border-[#4B8BF5] text-[#4B8BF5] rounded-lg hover:bg-[#4B8BF5]/10 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
      {/* <div className="space-y-8">
              <div className=" rounded-e-full p-6">
           
                          </div>
  
            </div> */}
      </div>
    </div>
  );
}
