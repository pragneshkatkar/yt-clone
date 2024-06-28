import Image from "next/image";

export default function Icon(props){
    const {icon} = props
    
    return (
        <div>
            <Image src={`/images/icons/${icon}.svg`} width={24} height={24} alt={icon}/>
        </div>
    )
}