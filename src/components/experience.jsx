import React from "react";
import { EXPERIENCES } from "../constants";
const Experience = () => {
  return (
    <div className="bg-black border-b border-neutral-900 py-4 " id="experience">
        <h2 className="bg-black py-20 text-white text-center text-4xl font-bold">My Experience</h2>
        <div>
        {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4"> 
                            <p className="mb-2 text-sm text-neutral-400"> {experience.year} </p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4"> 
                            <h6 className=" text-white mb-2 font-semibold"> {experience.role} -{" "}
                                <span className=" text-white text-sm"> {experience.company} </span>
                            </h6>
                            <p className="mb-4 text-white">  {experience.description} </p>
                            {experience.technologies.map((tech, index) => (
                                <span key = "index" className="mr-2 mt-4 rounded bg-blue-400 px-2"> {tech}</span>

                            ))}
                        </div>
                        
                        
                    </div>

            ))}

        </div>
            
          
      
    </div>
  );
};

export default Experience;