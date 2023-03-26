// will appear when te user will click on the order in OrderDetails.js
import React,{useState} from "react";
import ManageOrderDetails from "./OrderDetails";


// will get the props of the order_details
const order_screen_nav =['Timeline', 'Chat']
const chat = "Chat will live here";

const OrderScreen=()=>{

    const [activeButton, setActiveButton] = useState(0);

    const handleButtonClick = (buttonId) => {
      setActiveButton(buttonId);
    }
  
  


    return(

        <div>
            <div className="mx-4 lg:mx-24 my-10">
            <div className="grid grid-cols-4">
                

            </div>
            <div className="grid grid-cols-2 items-center text-center">
               
            {order_screen_nav.map((item, index) => {
          return (
            
                <div className={`col-start-${index+1} ${activeButton === index ? `bg-[#00538F] text-white roun`:`bg-[#dfdfdf] text-[#828282]`} col-span-1 ${index === 0? `rounded-l-md`:`rounded-r-md`}`  }>
                <button key={index} className={`w-[1/2] h-[56px] text-xl font-semibold`} onClick={() => handleButtonClick(index)}>
                {item}
                </button>
                </div>
            
                )

                })
                }
            </div>

        </div>
            {
                activeButton === 0 ? (
                <div>
                <ManageOrderDetails />
                </div>
                ):(
                    <div className="mx-4 lg:mx-24 my-10 text-center items-center">
                        {chat}
                    </div>
                )
            }
            
        </div>
        
    )
}

export default OrderScreen