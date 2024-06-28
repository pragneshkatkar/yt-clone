import Header from "./header";
import Sidebar from "./sidebar";

export default function Wrapper(props){
    const {children} = props
    
    return (
        <>
            <Header/>
            <div className="flex bg-black main-container">
                <Sidebar/>
                <div className="flex-grow">
                    <div className="p-[10px]">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}