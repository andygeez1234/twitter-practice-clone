import Image from "next/image";
import React from "react";
import SideBarMenuItems from "./SideBarMenuItems";
import { HomeIcon } from "@heroicons/react/24/solid";
import {
  BellIcon,
  BookmarkSquareIcon,
  ClipboardIcon,
  EllipsisHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";

const SideBar = () => {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/* Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width={50}
          height={50}
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          alt="twitter logo"
         
        />
      </div>
      {/* menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SideBarMenuItems text="Home" Icon={HomeIcon} active />
        <SideBarMenuItems text="Explore" Icon={HashtagIcon} />
        <SideBarMenuItems text="Notifications" Icon={BellIcon} />
        <SideBarMenuItems text="Messages" Icon={InboxIcon} />
        <SideBarMenuItems text="Bookmarks" Icon={BookmarkSquareIcon} />
        <SideBarMenuItems text="Lists" Icon={ClipboardIcon} />
        <SideBarMenuItems text="Profile" Icon={UserIcon} />
        <SideBarMenuItems text="More" Icon={EllipsisHorizontalIcon} />
      </div>
      {/* button*/}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
            Tweet
          </button>
      {/* mini profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img className="h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEhL4sRJDSqfac51T5radEfBOPZLwjmOu776Ec-0cqg&s" alt="profile picture" />
        <div className="leading-5 hidden xl:inline">
         <h4 className="font-bold">Some Dude</h4>
         <p className="text-gray-500">@Somedude.com</p>
        </div>
        <EllipsisHorizontalCircleIcon className="h-5 xl:ml-8 hidden xl:inline"/>
      </div>
    </div>
  );
};

export default SideBar;
