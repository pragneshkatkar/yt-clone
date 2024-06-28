import Image from "next/image";

export default function Logo(){
    return (
        <div>
            <Image src={`/images/logo.png`} alt={`Youtube logo`} width={91} height={24}/>
        </div>
    )
}