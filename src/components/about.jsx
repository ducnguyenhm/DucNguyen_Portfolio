import React from "react";

const About = () => {
    return (
        <div className="bg-black text-white py-20" id="about">
          <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-12">
              <img
                src=""
                alt=""
                className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
              />
              <div className="flex-1">
                <p className="text-lg mb-8">
                  I am a passionate full-stack developer, especially interested in backend. With a strong foundation
                  in both frontend and backend technologies, I strive to create
                  seamless and efficient user experiences.
                </p>
              </div>
              <div > 


              </div>
            </div>
          </div>
        </div>
      );

}
export default About