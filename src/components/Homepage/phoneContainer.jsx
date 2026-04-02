import { use } from "react";
import PhoneCard from "./phoneCard";

const PhoneContainer = ({phonePromis}) =>{
    const responese = use(phonePromis);
    const phones = responese.data;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-fit  max-w-[1440px] mx-auto sm:w-18/20md:w-17/20 gap-2 ">

        {phones.map(phone => {
            return(
                <><PhoneCard phone = {phone}></PhoneCard></>
            )
        })}
        </div>
    )
    
}
export default PhoneContainer;