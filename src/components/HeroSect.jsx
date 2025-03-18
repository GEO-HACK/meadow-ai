import { Chip, Stack } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { motion } from "framer-motion";
import Landing from "./landing";

export default function LandingSection() {
  const handleClick = (platform) => {
    console.log(`${platform} Install Clicked`);
  };

  const navigateTo = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col justify-between min-h-screen px-10 bg-black text-white overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col items-center p-6 sm:px-32">
        <div className="flex flex-wrap justify-between items-center  max-w-[1100px] w-full">
          
          {/* Title & Description */}
          {/* <div className="flex flex-col justify-center text-center sm:text-left">
            <motion.h1 
              className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              Welcome to Meadow AI
            </motion.h1>
            <motion.p 
              className="text-gray-400 mt-3 text-lg"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              The future of AI is here. Install the app and get started.
            </motion.p>
          </div>

          
          <motion.div 
            className="flex flex-col items-end"
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p className="text-gray-400 text-sm mb-2">Install Meadow AI (alpha v***)</p>
            <Stack direction="row" spacing={2}>
              {["Android", "iOS", "Web"].map((platform) => (
                <motion.div
                  key={platform}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Chip
                    label={platform}
                    onClick={() => handleClick(platform)}
                    className="bg-gradient-to-r from-green-500 to-blue-500 text-white cursor-pointer px-4 py-2 rounded-md hover:shadow-lg"
                  />
                </motion.div>
              ))}
            </Stack>
          </motion.div> */}
        </div>

        {/* Scroll Down Button */}
        {/* <motion.div
          className="cursor-pointer flex items-center justify-center h-16 w-16 bg-white bg-opacity-10 rounded-full shadow-md transition-all hover:scale-105"
          onClick={() => navigateTo("#info-card")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowDownwardIcon className="text-green-400" />
        </motion.div> */}
      </div>

      {/* Landing Section */}
      <div className="flex flex-col items-center justify-center ">
        <Landing />
      </div>
    </div>
  );
}
