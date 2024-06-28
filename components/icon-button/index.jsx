import Icon from "../icon"

export default function IconButton(props){
    const {icon, badge} = props

    return (
        <div className="relative">
            {
                badge && <span className="w-4 h-4 border border-[#0F0F0F] bg-[#CC0000] rounded-full text-white font-bold flex items-center justify-center absolute right-1 top-1 text-xs">{badge}</span>
            }
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#272727] transition-all">
                <Icon icon={icon}/>
            </button>
        </div>
    )
}