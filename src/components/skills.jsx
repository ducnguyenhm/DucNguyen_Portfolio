import React from "react";

const LanguagesAndDatabase = [
  {
    id: 1,
    title: "React",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Javascript",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Mongo",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Express.js",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 5,
    title: "C++",
    description: "Writing content for your business and companies.",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
  },
];

const Libraries = [
  {
    id: 1,
    title: "React",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Javascript",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Mongo",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Express.js",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 5,
    title: "C++",
    description: "Writing content for your business and companies.",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
  },
];

const Framework = [
  {
    id: 1,
    title: "React",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Javascript",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Mongo",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Express.js",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 5,
    title: "C++",
    description: "Writing content for your business and companies.",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
  },
];

const Others = [
  {
    id: 1,
    title: "React",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Javascript",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Mongo",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Express.js",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 5,
    title: "C++",
    description: "Writing content for your business and companies.",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
  },
];
const Skills = () => {
  return (
    <div className="bg-black text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
          
        <div>
          <div className=" px-3 pb-3 rounded-lg hover:shadow-lg transform 
                    transition-transform duration-300 hover:scale-105"> 
                <h3 className="text-2xl font bold text-center pb-5"> Libraries </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                
                {Framework.map((Libraries) => (
                  <div
                    key={Libraries.id}
                    className="bg-gray-800 px-3 pb-3 rounded-lg hover:shadow-lg transform 
                    transition-transform duration-300 hover:scale-105"
                  >
                    <h3 className="mt-2 text-xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-blue-300 to-blue-500">
                      {Libraries.title}
                    </h3>
                  </div>
              ))}
            </div>
            </div>

            <div className=" px-3 pb-3 rounded-lg hover:shadow-lg transform 
                  transition-transform duration-300 hover:scale-105"> 
              <h3 className="text-2xl font bold text-center pb-5"> Frameworks </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              
              {Framework.map((Framework) => (
                <div
                  key={Framework.id}
                  className="bg-gray-800 px-3 pb-3 rounded-lg hover:shadow-lg transform 
                  transition-transform duration-300 hover:scale-105"
                >
                  <h3 className="mt-2 text-xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-blue-300 to-blue-500">
                    {Framework.title}
                  </h3>
                </div>
            ))}
          </div> 
          </div>

          <div className=" px-3 pb-3 rounded-lg hover:shadow-lg transform 
                    transition-transform duration-300 hover:scale-105"> 
                <h3 className="text-2xl font bold text-center pb-5"> Languages And Database </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                
                {LanguagesAndDatabase.map((LanguagesAndDatabase) => (
                  <div
                    key={LanguagesAndDatabase.id}
                    className="bg-gray-800 px-3 pb-3 rounded-lg hover:shadow-lg transform 
                    transition-transform duration-300 hover:scale-105"
                  >
                    <h3 className="mt-2 text-xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-blue-300 to-blue-500">
                      {LanguagesAndDatabase.title}
                    </h3>
                  </div>
              ))}
            </div>
          </div>
          <div className=" px-3 pb-3 rounded-lg hover:shadow-lg transform 
                    transition-transform duration-300 hover:scale-105"> 
                <h3 className="text-2xl font bold text-center pb-5"> Others </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                
                {Others.map((Others) => (
                  <div
                    key={Others.id}
                    className="bg-gray-800 px-3 pb-3 rounded-lg hover:shadow-lg transform 
                    transition-transform duration-300 hover:scale-105"
                  >
                    <h3 className="mt-2 text-xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-blue-300 to-blue-500">
                      {Others.title}
                    </h3>
                  </div>
              ))}
            </div>
          </div>
          
        </div> 
       
        </div>
          
      </div>
  );
};

export default Skills;