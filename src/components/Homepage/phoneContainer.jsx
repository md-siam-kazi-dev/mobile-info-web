import { use } from "react";
import PhoneCard from "./phoneCard";

const PhoneContainer = ({phonePromis}) =>{
    const responese = use(phonePromis);
    const phones = responese.data;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-fit  container-div gap-2 ">

        {phones.map(phone => {
            return(
                <PhoneCard key={phone.id} phone = {phone}></PhoneCard>
            )
        })}
        </div>
    )
    
}
export default PhoneContainer;