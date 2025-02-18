import { Avatar, AvatarGroup, Chip, Stack } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import image from "../assets/img-01.png";
import Landing from "./landing";
export default function LandingSection() {

  const handleClick = () => {
    console.log("Chip clicked");
  };

  const navigateTo = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col justify-between h-[170vh] min-h-fit pb-12 rounded-b-[30px] bg-[#A3A847]  overflow-hidden">
      {/* Landing Information Section */}
      <div className="flex flex-col items-center p-4 sm:px-32">
        <div className="flex flex-wrap justify-between mb-12 max-w-[1100px] h-28 w-full">
          {/* Contributors */}
          <div className="flex flex-col justify-center">
            <p className="text-[#404A3D] text-sm mb-2">Join us to build this today</p>
            <AvatarGroup max={4} className="space-x-[-8px]">
              <Avatar alt="Remy Sharp" src={image} className="w-8 h-8" />
              <Avatar alt="Travis Howard" src={image} className="w-8 h-8" />
              <Avatar alt="Cindy Baker" src={image} className="w-8 h-8" />
              <Avatar alt="Agnes Walker" src={image} className="w-8 h-8" />
              <Avatar alt="Trevor Henderson" src={image} className="w-8 h-8" />
            </AvatarGroup>
            <p>
              <a href="https://github.com/meedowdev" className="text-[#404A3D] font-bold underline">
                Visit our GitHub
              </a>
            </p>
          </div>

          {/* Scroll Down Button */}
          <div className="flex items-center justify-center">
            <div className="cursor-pointer flex items-center justify-center h-24 w-24 bg-white rounded-full" onClick={() => navigateTo("#info-card")}>
              <ArrowDownwardIcon className="text-[#404A3D]" />
            </div>
          </div>

          {/* Install App */}
          <div className="flex flex-col items-end">
            <p className="text-[#404A3D] text-sm mb-2">Install Meadow AI (alpha v***)</p>
            <Stack direction="row" spacing={1}>
              <Chip label="Android" onClick={handleClick} className="bg-[#404A3D] text-white cursor-pointer" />
              <Chip label="iOS" onClick={handleClick} className="bg-[#404A3D] text-white cursor-pointer" />
              <Chip label="Web" onClick={handleClick} className="bg-[#404A3D] text-white cursor-pointer" />
            </Stack>
          </div>
        </div>
      </div>
      
      {/* Landing Section */} 
      <Landing/>
    </div>
  );
}
