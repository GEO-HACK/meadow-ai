import { motion } from "framer-motion";
import { LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function TeamSection() {
  // Team Member Data
  const teamData = [
    {
      id: 1,
      name: "Alice Johnson",
      role: "Lead Developer",
      image: "/about.jpg",
      description: "Alice is an expert in AI and blockchain, leading our core development team.",
    },
    {
      id: 2,
      name: "John Doe",
      role: "UX Designer",
      image: "/about.jpg",
      description: "John specializes in futuristic design systems and immersive UI experiences.",
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Machine Learning Engineer",
      image: "/about.jpg",
      description: "Emma builds cutting-edge AI models and ensures data-driven decision-making.",
    },
    {
      id: 4,
      name: "Michael Brown",
      role: "Cybersecurity Expert",
      image: "/about.jpg",
      description: "Michael secures our platforms with state-of-the-art encryption techniques.",
    },
    {
      id: 5,
      name: "Sophia Lee",
      role: "Product Manager",
      image: "/about.jpg",
      description: "Sophia oversees project execution and ensures timely delivery of features.",
    },
    {
      id: 6,
      name: "Daniel Martinez",
      role: "Full-Stack Developer",
      image: "/about.jpg",
      description: "Daniel bridges frontend and backend development for seamless integration.",
    },
  ];

  return (
    <section className="py-16 bg-green-300 text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-blue-700 mb-10">
          Meet Our Team
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {teamData.map((member, index) => (
            <motion.div
              key={member.id}
              className="flex flex-col items-center w-full md:w-[45%] lg:w-[30%] p-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Profile Image */}
              <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden shadow-lg border-4 border-blue-300">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>

              {/* Member Details */}
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
                <p className="text-blue-700">{member.role}</p>
                <p className="mt-2 text-gray-700 text-sm">{member.description}</p>
                <Link href="#" className="mt-4">
                <LinkedIn className="text-blue-700 mt-2 cursor-pointer" />
                </Link>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
