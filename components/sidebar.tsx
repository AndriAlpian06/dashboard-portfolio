import { SIDENAV_ITEMS } from "@/SIDEBAR_CONTSTANTS"
import Image from "next/image"
import { SideBarMenuItem } from "./sidebar-menu-item"
import classNames from "classnames"
import REACT from 'react'
import { useSideBarToggle } from "@/hooks/use-sidebar-toggle"
import SideBarMenuGroup from "./sidebar-menu-group"

export const SideBar = () => {
    const {toggleCollapse} = useSideBarToggle();
    const asideStyle = classNames("sidebar overflow-y-auto overflow-x-auto fixed bg-[#31353d] text-gray-500 z-50 h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out w-[20rem]",
        {
            ["w-[20rem]"]:!toggleCollapse,
            ["sm:w-[5.4rem] sm:left-0 left-[-100%]"]:toggleCollapse
            
        }
    );

    return(
        <aside className={asideStyle}>
            <div className="sidebar-top relative flex items-center py-5 px-3.5">
                <Image alt="" src='/dashboard-preview.png' className="w-12 mx-3.5 min-h-fit" width={35} height={35}></Image>
                    { !toggleCollapse && <h3 className="pl-2 font-bold text-2xl text-white min-w-max">
                        DASHBOARD
                        </h3>
                    }
                </div>
            <nav className="flex flex-col gap-2 transition duration-300">
                <div className="flex flex-col gap-2 px-4">
                    {
                        SIDENAV_ITEMS.map((item, index) => {
                            return <SideBarMenuGroup key={index} menuGroup={item} ></SideBarMenuGroup>
                        })
                    }
                </div>
            </nav>
        </aside>
    )
}
