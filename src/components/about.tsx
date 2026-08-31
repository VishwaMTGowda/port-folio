import {  FileDown, MailPlus, BookMinus } from 'lucide-react'

export default function AboutPage() {

    return (
      <div className="min-h-screen bg-black text-white py-16 px-4" id='Aboutpage'>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">About Me</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-[#1E1E1E] rounded-lg p-8">
                <div className="flex items-center gap-4 mb-4">
                  
                  <img src='src/assets/user.png' />
                 
                  <div>
                    <h2 className="text-2xl font-bold">DevOps Engineer</h2>
                    <p className="text-gray-400">
                      Fresh graduate passionate about automating infrastructure and
                      streamlining development workflows.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    A dedicated DevOps enthusiast with a strong foundation in cloud
                    technologies and automation. Currently focusing on implementing efficient
                    CI/CD pipelines and container orchestration solutions.
                  </p>
                  <p>
                    Actively learning and implementing modern DevOps practices while staying
                    updated with the latest industry trends and technologies.
                  </p>
                </div>
  
                <div className="flex gap-4 mt-8">
                  <a href='https://drive.google.com/file/d/1a8hdq8M0ju4-8Dk4bAQMh_0GN47VVD2d/view?usp=sharing' className="bg-[#4B8BF5] hover:bg-[#3B7BE5] px-6 py-2 rounded-md flex items-center gap-2">
                  <FileDown />
                    Download CV
                  </a>
                  <a href='#Contact' className="border border-[#4B8BF5] text-[#4B8BF5] hover:bg-[#4B8BF5] hover:text-white px-6 py-2 rounded-md flex items-center gap-2">
                  <MailPlus />
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
  
            <div className="space-y-8">
              <div className="bg-[#1E1E1E] rounded-lg p-6">
              <BookMinus />
                <h3 className="text-xl font-bold mb-4">Education </h3> 
                <div className="border-l-2 border-[#4B8BF5] pl-4">
                  <h4 className="font-semibold">Bachelor of Vocation</h4>
                  <p className="text-sm text-gray-400">Software and Application Development</p>
                  <p className="text-sm text-[#4B8BF5]">2022 - 2025</p>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  