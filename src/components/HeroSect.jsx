import { Avatar, AvatarGroup, Chip, Stack } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import image from "../assets/img-01.png";
import Landing from "./landing";

export default function LandingSection() {
  const handleClick = (platform) => {
    console.log(`${platform} Install Clicked`);
  };

  const navigateTo = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col justify-between min-h-fit px-10 bg-[#A3A847] overflow-hidden">
      {/* Landing Information Section */}
      <div className="flex flex-col items-center p-4 sm:px-32">
        <div className="flex flex-wrap justify-between mb-12 max-w-[1100px] h-28 w-full">
          {/* Contributors */}
          <div className="flex flex-col justify-center">
            <p className="text-[#404A3D] text-sm mb-2">Join us to build this today</p>
            <AvatarGroup max={4} className="space-x-[-6px]">
              {[...Array(5)].map((_, index) => (
                <Avatar key={index} alt={`User ${index + 1}`} src={image} className="w-8 h-8 border border-white" />
              ))}
            </AvatarGroup>
            <p>
              <a href="https://github.com/meedowdev" className="text-[#404A3D] font-bold underline hover:text-[#303A2D] transition-all">
                Visit our GitHub
              </a>
            </p>
          </div>

          {/* Scroll Down Button */}
          {/* <div className="flex items-center justify-center">
            <div
              className="cursor-pointer flex items-center justify-center h-24 w-24 bg-white rounded-full transition-all hover:scale-105 hover:shadow-lg"
              onClick={() => navigateTo("#info-card")}
            >
              <ArrowDownwardIcon className="text-[#404A3D]" />
            </div>
          </div> */}

          {/* Install App */}
          <div className="flex flex-col items-end">
            <p className="text-[#404A3D] text-sm mb-2">Install Meadow AI (alpha v***)</p>
            <Stack direction="row" spacing={1}>
              {['Android', 'iOS', 'Web'].map((platform) => (
                <Chip
                  key={platform}
                  label={platform}
                  onClick={() => handleClick(platform)}
                  className="bg-[#404A3D] text-white cursor-pointer hover:bg-[#303A2D] transition-all"
                />
              ))}
            </Stack>
          </div>
        </div>
      </div>

      {/* Landing Section */} 
      <div className="flex flex-col items-center justify-center mt-5">
        <Landing />
      </div>
    </div>
  );
}