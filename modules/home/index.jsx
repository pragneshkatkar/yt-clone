import Wrapper from "@/components/wrapper";
import Videos from "./videos";

function Tag(props){
    const {text} = props

    return (
        <div className="flex items-center justify-center h-8 px-3 rounded-[8px] bg-[#272727]">
            <p className="text-white font-bold text-sm">{text}</p>
        </div>
    )
}

export default function Home(){

    const tags = [
        {
            text: "All"
        },
        {
            text: "Disha Vakani"
        }
    ]
    return (
        <Wrapper>
            <main>
                <div className="flex items-center gap-x-3">
                    {
                        tags.map((item, key) => <Tag key={key} {...item}/>)
                    }
                </div>

                <Videos/>
            </main>
        </Wrapper>
    )
}