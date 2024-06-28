import Icon from "@/components/icon";
import IconButton from "@/components/icon-button";
import Logo from "@/components/logo";
import Image from "next/image";

export default function Header(){
    return (
        <div className="sticky top-0 w-full z-10 bg-black h-[58px] flex items-center justify-between px-3">
            <div className="h-[58px] flex items-center">
                <div className="flex items-center gap-x-[15px]">
                    <IconButton icon="Menu"/>
                    <Logo/>
                </div>
            </div>

            <div className="flex items-center justify-center gap-x-4 w-full max-w-[600px]">
                <div className="w-full flex items-center h-10 rounded-full border border-[#2C2C2C] overflow-hidden">
                    <input placeholder="Search" className="flex-grow bg-transparent mx-4 text-white"/>
                    <button className="h-full w-16 flex items-center justify-center bg-[#222222]">
                        <Icon icon="Search_bold"/>
                    </button>
                </div>

                <IconButton icon="Dic"/>
            </div>

            <div className="flex items-center justify-end gap-x-[10px]">
                <IconButton icon="Movie"/>
                <IconButton icon="Notification_Off" badge="4"/>
                <div className="w-8 h-8 rounded-full overflow-hidden relative">
                    <Image src="/images/default-profile.png" fill/>
                </div>
            </div>
        </div>
    )
}