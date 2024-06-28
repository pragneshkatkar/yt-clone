import Icon from "@/components/icon";
import IconButton from "@/components/icon-button";
import Logo from "@/components/logo";
import Link from "next/link";

function MenuItem(props){
    const {icon, title, link} = props

    return (
        <Link href={link}>
            <div className={`flex items-center gap-x-[25px] h-10 rounded-[10px] hover:bg-[#272727] transition-all px-3`}>
                <Icon icon={icon}/>
                <p className={`text-white`}>{title}</p>
            </div>
        </Link>
    )
}

function Menu(props){
    const {menuItems} = props
    
    return (
        <div>
            {menuItems.map((item, key) => <MenuItem key={key} {...item}/>)}
        </div>
    )
}

export default function Sidebar(){

    const menuItems = [
        {
            icon: "Home",
            title: "Home",
            link: "#"
        },
        {
            icon: "Short",
            title: "Shorts",
            link: "#"
        },
        {
            icon: "Subscriptions",
            title: "Subscriptions",
            link: "#"
        },
    ]

    const channelItems = [
        {
            icon: "User",
            title: "Your channel",
            link: "#"
        },
        {
            icon: "Notification_Off",
            title: "History",
            link: "#"
        },
        {
            icon: "Play List",
            title: "Playlists",
            link: "#"
        },
        {
            icon: "Play",
            title: "Your videos",
            link: "#"
        },
        {
            icon: "Movie",
            title: "Your movies",
            link: "#"
        },
        {
            icon: "History",
            title: "Watch later",
            link: "#"
        },
        {
            icon: "Like",
            title: "Liked videos",
            link: "#"
        },
        {
            icon: "Cut",
            title: "Your clips",
            link: "#"
        },
    ]
    return (
        <div className="w-60 px-3 sticky top-0">

            <div className="py-[11px]">
                <Menu menuItems={menuItems}/>
                <hr className="my-3 border border-[#3F3F3F]"/>
                <div className="flex items-center px-3 mb-[10px]">
                    <p className="text-white font-bold">You</p>
                    <Icon icon="chevron-right"/>
                </div>
                <Menu menuItems={channelItems}/>
            </div>
        </div>
    )
}