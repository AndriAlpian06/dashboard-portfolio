import { BsEnvelope, BsGear, BsHouse, BsHouseDoor, BsKanban, BsListUl, BsQuestion, BsQuestionCircle } from "react-icons/bs";
import { SideNavItem, SideNavItemGroup } from "./types/types";

export const SIDENAV_ITEMS: SideNavItemGroup[] = [

    {
        title: "Dashboards",
        menuList: [{
            title: "Dashboard",
            path: "/",
            icon: <BsHouseDoor size={20} />
        }]
    },
    {
        title: 'Manage',
        menuList: [
            {
                title: "Products",
                path: '/products',
                icon: <BsKanban size={20} />,
                submenu: true,
                subMenuItems: [
                    { title: 'All', path: '/products'},
                    { title: 'New', path: '/products/new'}
                ]
            },
            {
                title: 'Skill',
                path: '/skill',
                icon: <BsListUl size={20} />
            },
            {
                title: 'Project',
                path: '/project',
                icon: <BsEnvelope size={20} />
            },
        ]
    },
    {
        title: 'Others',
        menuList:[
            {
                title: 'Account',
                path: '/account',
                icon: <BsGear size={20} />
            },
            {
                title: 'Help',
                path: '/help',
                icon: <BsQuestionCircle size={20} />
            }
        ]
    }
    
]