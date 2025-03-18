import React from "react";
import { motion } from "framer-motion";
import { LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function TeamSection() {
  const teamData = [
    { id: 1, name: "DR. LAWRENCE NDERU", role: "lead", image: "/about.jpg", description: "Alice is an expert in AI and blockchain, leading our core development team.",url:"https://www.linkedin.com/in/lawrence-nderu-0b0b3b1b/" },
    { id: 2, name: "MARKVICTOR KITHINJI", role: "Project Manager", image: "/about.jpg", description: "John specializes in futuristic design systems and immersive UI experiences.",url:"https://www.linkedin.com/in/markvictor-kithinji-0b0b3b1b/" },
    { id: 3, name: "SAMUEL GICHEHA", role: "Data Analyst", image: "/about.jpg", description: "Emma builds cutting-edge AI models and ensures data-driven decision-making.",url:"https://www.linkedin.com/in/samuel-gicheha-0b0b3b1b/" },
    { id: 4, name: "ALLAN NJOROGE", role: "Mobile Developee", image: "/about.jpg", description: "Michael secures our platforms with state-of-the-art encryption techniques.",url:"https://www.linkedin.com/in/allan-njoroge-0b0b3b1b/" },
    { id: 5, name: "TERESIAH MUTHONI", role: "Data Analyst", image: "/about.jpg", description: "Sophia oversees project execution and ensures timely delivery of features.",url:"https://www.linkedin.com/in/teresiah-muthoni-0b0b3b1b/" },
    { id: 6, name: "GEOFFREY KIRUMBA", role: "Full-Stack Developer", image: "/about.jpg", description: "Daniel bridges frontend and backend development for seamless integration.",url:"https://www.linkedin.com/in/geoffrey-kirumba-0b0b3b1b/" },
  ];

 


  return (
    <section className="relative py-10 bg-black text-gray-300 border-t border-gray-800">
   

      <div className="relative flex flex-col items-center justify-center max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-green-400 mb-10 border-b-2 border-green-500 inline-block pb-2">
          Meet Our Team
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {teamData.map((member) => (
            <motion.div
              key={member.id}
              className="flex flex-col items-center w-full md:w-[45%] lg:w-[30%] p-4 bg-black/60 border border-gray-700 backdrop-blur-md shadow-lg rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Profile Image */}
              <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden shadow-lg border-4 border-green-400">
                <img src={member.image} alt={`${member.name} profile`} className="w-full h-full object-cover" />
              </div>

              {/* Member Details */}
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-green-400">{member.name}</h3>
                <p className="text-green-300">{member.role}</p>
                <p className="mt-2 text-gray-400 text-sm">{member.description}</p>
                <Link to={member.url} className="mt-4">
                  <LinkedIn className="text-green-400 mt-2 cursor-pointer hover:text-green-300 transition duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
