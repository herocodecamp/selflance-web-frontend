import React,{useState, useEffect} from "react";
import profile1 from '../../Assets/manage-order/profile-1.png';
import gigImageFUll from '../../Assets/gig_image_full.png';
import { Modal,Button, Label, TextInput } from "flowbite-react";
import gigDeliveryImage from "../../Assets/gig_delivery_file.png";
import {VscBellDot} from "react-icons/vsc";
import {BsThreeDotsVertical, BsFillFileEarmarkTextFill} from 'react-icons/bs';
import {FaAngleUp, FaAngleDown} from 'react-icons/fa';
import {BiDownload} from 'react-icons/bi';


const order_status_button_value = ['In Progress', 'Completed','In Revision', 'Pending','Cancelled','Delivered'];

const order_details = {
    order_id: '#F025E15',
    title: 'I will create responsive design for your mobile app',
    details: 'Lorem ipsum dolor sit amet consectetur. Orci orci vel ulla mcorper suspendisse eu sed at. Sit imper. Lorem ipsum dolor sit amet consectetur. Orci orci vel ulla mcorper suspendisse eu sed at. Sit imper. Lorem ipsum dolor sit amet consectetur. Orci orci vel ulla mcorper suspendisse eu sed at. Sit imper. Lorem ipsum dolor sit amet consectetur. Orci orci vel ulla mcorper suspendisse eu sed at.',
    gig_image: gigImageFUll,
    duration: '3 Days',
    amount: '$5.00',
    expectedDelivery: '25 Jun 2023',
    orderStatus: [false,false,false,false,false,true],   
    gig_buyed: {
        package: 'Basic',
        revisions: 'Unlimited',
        files: ['Source file', 'JPG','PNG','ZIP'],
        resolution: 'High Resolution',
        seller:{
            _id:'0',
            image: profile1,
            name: 'Ahmed'
        },
        delivery:{
            value:false,
            deliveryFiles : [gigDeliveryImage],
            deliveryDate: '24 Jun 2023'

        }
        
    },
    buyer:{
        name: 'Shaid ul Islam',
        online: true,
        notifications: []
    },
    summary: {
        subtotal: '$5.00',
        service: '$2.00',
        delivery_date: 'Thursday, 24 Jun 2023'
    }
}


// pending
// const order_details = {
//     order_id: '#F025E15',
//     title: 'I will create responsive design for your mobile app',
//     details: 'Lorem ipsum dolor sit amet consectetur. Orci orci vel ulla mcorper suspendisse eu sed at. Sit imper. Lorem ipsum dolor sit amet consectetur. Orci orci vel ulla mcorper suspendisse eu sed at. Sit imper. Lorem ipsum dolor sit amet consectetur. Orci orci vel ulla mcorper suspendisse eu sed at. Sit imper. Lorem ipsum dolor sit amet consectetur. Orci orci vel ulla mcorper suspendisse eu sed at.',
//     gig_image: '',
//     duration: '3 Days',
//     amount: '$5.00',
//     active: false,
//     revisions: false,
//     pending: true,
//     cancelled: false,
//     gig_buyed: {
//         package: 'Basic',
//         revisions: 'Unlimited',
//         files: ['Source file', 'JPG','PNG','ZIP'],
//         resolution: 'High Resolution',
//     },
//     summary: {
//         subtotal: '$5.00',
//         service: '$2.00',
//         delivery_date: 'Thursday, 24 Jun 2023'
//     }
// }
// delivered
// const order_details = {
//     order_id: '#F025E15',
//     title: 'I will create responsive design for your mobile app',
//     details: 'Lorem ipsum dolor sit amet consectetur. Orci orci vel ulla mcorper suspendisse eu sed at. Sit imper. Lorem ipsum dolor sit amet consectetur. Orci orci vel ulla mcorper suspendisse eu sed at. Sit imper. Lorem ipsum dolor sit amet consectetur. Orci orci vel ulla mcorper suspendisse eu sed at. Sit imper. Lorem ipsum dolor sit amet consectetur. Orci orci vel ulla mcorper suspendisse eu sed at.',
//     gig_image: '',
//     duration: '3 Days',
//     amount: '$5.00',
//     active: false,
//     delivered: true,
//     revisions: false,
//     pending: true,
//     cancelled: false,
//     gig_buyed: {
//         package: 'Basic',
//         revisions: 'Unlimited',
//         files: ['Source file', 'JPG','PNG','ZIP'],
//         resolution: 'High Resolution',
//     },
//     summary: {
//         subtotal: '$5.00',
//         service: '$2.00',
//         delivery_date: 'Thursday, 24 Jun 2023'
//     },
//     delivered_image: '',
//     delivered_file: 'Figma file 23564 25452...'

// }



const ManageOrderDetails =()=>{

    const[showModal,setShowModal]=useState(false);
    const [orderNavIndex,setorderNavIndex] = useState(0);
    const [isFileOpen,setIsFileOpen]  = useState(false);
    const [isDeliveryOpen, setIsdeliveryOpen] = useState(false);


 useEffect(()=>{
    order_details.orderStatus.map((item,index)=>{
                                         
        return item && setorderNavIndex(index)
    })
 } , [])

 const handleOrderCancel=()=>{
    console.log('Order Cancelled')
 }

 console.log(orderNavIndex)

    return(
        <>


        <div className="mx-4 lg:mx-24 my-10">
            <div className="grid grid-cols-6 flex-row mb-5">
                <div className="col-start-1 col-span-2">
                            <div>
                                {
                                    order_status_button_value[orderNavIndex].includes('In Progress') ||  order_status_button_value[orderNavIndex].includes('In Revision') || order_status_button_value[orderNavIndex].includes('Delivered') ? 
                                                            (<div className="flex-col">
                                                                <div className="text-sm md:text-4xl font-normal md:font-semibold">{order_details.buyer.name}</div>
                                                                <div className={`text-xs md:text-sm ${order_details.buyer.online ? `text-[#27AE60]`:`text-[#4F5350]`}`}>Online</div>
                                                                </div>):'Order Details'
                                }
                               
                                
                            </div>
                </div>

                <div className="col-start-6 col-span-1 flex flex-row justify-end gap-5">
                        <div className={`text-lg md:text-3xl ${order_details.buyer.notifications.length > 0? `text-[#00538F]`:`text-[#979797]`}`} ><VscBellDot /></div>
                        <div className="text-lg md:text-3xl"><BsThreeDotsVertical /></div>                
                        
                </div>

            </div>
            <hr></hr>
            <div className='flex items-center justify-between mb-1 lg:mb-4'>
                <p className=" text-[10px] md:text-2xl font-bold my-5">
                    {
                        (()=>{

                            if( order_status_button_value[orderNavIndex].includes('In Progress') || (order_status_button_value[orderNavIndex].includes('In Revision')))
                                {
                                        return (<div>Expected Delivery {order_details.expectedDelivery}</div>)
                                }
                            else if(order_status_button_value[orderNavIndex].includes('Completed') || (order_status_button_value[orderNavIndex].includes('Cancelled')))
                            {
                                return(<div> Order ID {order_details.order_id}</div>)
                            }
                            else if(order_status_button_value[orderNavIndex].includes('Delivered'))
                            {
                                return(<div className="flex flex-col">
                                <div>Order was Deliverd</div>
                                <div className="text-sm font-semibold text-[#5E5E5E]">{order_details.gig_buyed.delivery.deliveryDate}</div>
                                </div>)
                            }
                            else
                            {
                                return (<div>Order Details are Pending</div>)
                            }
                        })()
                       
                        
                    }
                    
                    </p>
                    {
                       ( order_status_button_value[orderNavIndex].includes('In Progress') || (order_status_button_value[orderNavIndex].includes('In Revision'))) && (<p className='text-[8px] md:text-xl font-semibold sm:font-bold'>Day : <span className='text-[#D57635]'>03</span> : : Hours : <span className='text-[#00538F]'>24</span> : : Minutes : <span className=' text-[#00538F]'>30</span></p>)

                    }
                
            </div>

            <div className="grid grid-cols-2 mt-2 lg:mt-4 rounded-md border border-solid p-2 lg:p-10 shadow-md">
                {/* Image_Gig */}
                {
                     order_status_button_value[orderNavIndex].includes('Completed') || (order_status_button_value[orderNavIndex].includes('Cancelled')) ? null : (<div className="col-span-full">
                     <img src={order_details.gig_image} alt='' className="inline rounded-md" />
                    </div>)
                    
                }
                
                <div className="col-span-full flex flex-row flex-wrap items-center mt-3 lg:mt-6 justify-between">
                    <div className="flex flex-row items-center justify-start">
                        <img src={order_details.gig_buyed.seller.image} className="inline md:w-[58px] w-[20px] h-[20px] mt-2 md:h-[58px] rounded-full" alt="" />
                        <h4 className="ml-1 md:ml-3 text-[8px] md:text-base font-semibold text-[#5E5E5E] opacity-80">{order_details.gig_buyed.seller.name}</h4>
                    </div>
                    
                    {
                        
                        order_details.orderStatus.map((item,index)=>{
                            if(item)
                            {
                                let color_arr= ['#D57635','#27AE60','#ff0e0e','#dde80f','#5f0707','#00538F']
                                return(
                                <button key={index} className={`bg-[${color_arr[index]}] w-[60px] md:w-[100px] h-auto border border-[#1c1b1b]  py-1 rounded text-[5px] md:text-xs text-white `}>{order_status_button_value[index]}</button>)
                                    
                               
                            }
                        })
                    }
                
                    
                
                     
                </div>
                <div className="col-span-full mt-4 space-y-3">
                    <h1 className="text-[#00538F] text- base lg:text-3xl font-semibold">{order_details.title}</h1>
                    <h3 className="text-[#5E5E5E] text-sm md:text-base font-normal">Service Details</h3>
                    <h2 className="text-[8px] md:text-sm text-[#979797] opacity-90">{order_details.details.slice(0,340)}....Read more</h2>
                    {
                    (order_status_button_value[orderNavIndex].includes('Cancelled')) ? null : (
                        <div>
                                <div className="flex flex-row items-center">
                                <h3 className="text-sm md:text-base text-right text-[#979797] font-semibold">Duration</h3>
                                <h3 className="text-sm md:text ml-16 text-[#979797] font-semibold">:</h3>
                                <h3 className="text-sm md:text ml-10 text-[#979797] font-semibold" >{order_details.duration}</h3>
                            </div>
                            <div className="flex flex-row items-center">
                                <h3 className="text-sm md:text text-right text-[#979797] font-semibold">Amount</h3>
                                <h3 className="text-sm md:text ml-16 text-[#979797] font-semibold">:</h3>
                                <h3 className="text-sm md:text ml-10 text-[#979797] font-semibold">{order_details.amount}</h3>
                            </div>
                            <div className="flex flex-row items-center">
                                <h3 className="text-sm md:text text-right text-[#979797] font-semibold">Status</h3>
                                <h3 className="text-sm md:text ml-20 text-[#979797] font-semibold">:</h3>
                                <h3 className="text-sm md:text ml-10 text-[#121F3E] font-semibold">{order_details.duration}</h3>
                            </div>
                    </div>)
                    }
                    
                    </div>
                    {/* Boxes */}
                    {
                        order_status_button_value[orderNavIndex].includes('Completed') || (order_status_button_value[orderNavIndex].includes('Cancelled')) ? null : (
                            
                                <div className="col-span-full">

                                        <div className="flex flex-col md:flex-row flex-wrap items-top mt-3 md:mt-6 justify-center gap-3 lg:gap-5 mx-5">
                                            <div className="border border-solid rounded-md p-4 shadow-md  text-left space-y-3 lg:my-10">
                                                {/* Box #1 */}
                                                <div className="text-sm md:text-lg  text-[#121F3E] font-semibold">Order Details</div>
                                                {/* Item # 1 */}
                                                <div className="grid grid-cols-7 gap-5">

                                                    <div className="col-start-1 col-span-2">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm text-start">Revisions</h2>
                                                    </div>

                                                    <div className="col-start-4 col-span-1">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm">:</h2>
                                                    </div>

                                                    <div className="col-start-5 col-span-3 text-end">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm">Unlimited</h2>
                                                    </div>

                                                </div>

                                                {/* Item # 2 */}
                                                <div className="grid grid-cols-7 gap-5">

                                                    <div className="col-start-1 col-span-2">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm text-start">Files</h2>
                                                    </div>

                                                    <div className="col-start-4 col-span-1">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm">:</h2>
                                                    </div>

                                                    <div className="col-start-5 col-span-3 text-end">
                                                        {
                                                            order_details.gig_buyed.files.map((item,index)=>{
                                                            return( <h2 key={index} className="text-[#979797] opacity-80 text-xs md:text-sm">
                                                                        {item} ,
                                                                    </h2>)
                                                            })
                                                        }
                                                    </div>

                                                </div>

                                                {/* Item # 3 */}
                                                <div className="grid grid-cols-7 gap-5">

                                                    <div className="col-start-1 col-span-2">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm text-start">Resolution</h2>
                                                    </div>

                                                    <div className="col-start-4 col-span-1">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm">:</h2>
                                                    </div>

                                                    <div className="col-start-5 col-span-3 text-end">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm">
                                                                        {order_details.gig_buyed.resolution}
                                                                    </h2>
                                                            
                                                        
                                                    </div>

                                                </div>

                                                {/* Item # 4 */}
                                                <div className="grid grid-cols-7 gap-5">

                                                    <div className="col-start-1 col-span-2">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm text-start">Package</h2>
                                                    </div>

                                                    <div className="col-start-4 col-span-1">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm">:</h2>
                                                    </div>

                                                    <div className="col-start-5 col-span-3 text-end">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm">
                                                                        {order_details.gig_buyed.package}
                                                                    </h2>
                                                            
                                                        
                                                    </div>

                                                </div>

                                            </div>

                                            {/* Box 2 */}
                                            <div className="border border-solid rounded-md p-4 shadow-md  text-left space-y-3 mb-8 lg:my-10">
                                                {/* Box #1 */}
                                                <div className="text-sm md:text-lg  text-[#121F3E] font-semibold">Order Summary</div>
                                                {/* Item # 1 */}
                                                <div className="grid grid-cols-7 gap-5">

                                                    <div className="col-start-1 col-span-2">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm text-start">Subtotal</h2>
                                                    </div>

                                                    <div className="col-start-4 col-span-1">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm">:</h2>
                                                    </div>

                                                    <div className="col-start-5 col-span-3 text-end">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm">{order_details.summary.subtotal}</h2>
                                                    </div>

                                                </div>

                                                {/* Item # 2 */}
                                                <div className="grid grid-cols-7 gap-5">

                                                    <div className="col-start-1 col-span-2">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm text-start">Service</h2>
                                                    </div>

                                                    <div className="col-start-4 col-span-1">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm">:</h2>
                                                    </div>

                                                    <div className="col-start-5 col-span-3 text-end">
                                                <h2  className="text-[#979797] opacity-80 text-xs md:text-sm">
                                                                        {order_details.summary.service}
                                                                    </h2>
                                                    </div>

                                                </div>

                                                {/* Item # 3 */}
                                                <div className="grid grid-cols-7 gap-5">

                                                    <div className="col-start-1 col-span-2">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm text-start">Total</h2>
                                                    </div>

                                                    <div className="col-start-4 col-span-1">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm">:</h2>
                                                    </div>

                                                    <div className="col-start-5 col-span-3 text-end">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm">
                                                                        $7.00
                                                                    </h2>
                                                            
                                                        
                                                    </div>

                                                </div>

                                                {/* Item # 4 */}
                                                <div className="grid grid-cols-7 gap-5">

                                                    <div className="col-start-1 col-span-2">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm text-start">Delivery Date</h2>
                                                    </div>

                                                    <div className="col-start-4 col-span-1">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm">:</h2>
                                                    </div>

                                                    <div className="col-start-5 col-span-3 text-end">
                                                        <h2 className="text-[#979797] opacity-80 text-xs md:text-sm">
                                                                        {order_details.summary.delivery_date}
                                                                    </h2>
                                                            
                                                        
                                                    </div>

                                                </div>

                                            </div>
                                            
                                        </div>
                                </div>
                        )
                    }
                    
            </div>
                {/* Delivered files and options */}
            {
                order_status_button_value[orderNavIndex].includes('Completed') || (order_status_button_value[orderNavIndex].includes('Delivered')) || (order_status_button_value[orderNavIndex].includes('In Revision')) ? (
                    <div className="space-y-8 md:space-y-12 mt-10">
                    <div className="flex flex-col rounded-md border border-solid p-2 lg:p-6 shadow-md">
                            <div className="flex flex-row justify-between text-base lg:text-lg font-semibold">
                                <div>The Order was Delivered</div>
                                <div><button onClick={()=>setIsdeliveryOpen(!isDeliveryOpen)}><FaAngleDown /></button> </div>
                            </div>
                     </div>
                {
                    isDeliveryOpen && (
                                        <div className="flex flex-col mt-2 lg:mt-4 rounded-md border border-solid p-2 lg:p-6 shadow-md">
                                        <div className="flex flex-row justify-between text-base lg:text-lg font-semibold">
                                            <div>Here is the Work of the Seller</div>
                                            <div> <button onClick={()=>setIsFileOpen(!isFileOpen)}><FaAngleUp /></button> </div>
                                        </div>
                                        </div>
                                                     
                            )
                   
                                   
                 
                }
                {
                                
                                isFileOpen && (
                                <div>
                                    <div className="text-lg lg:text-3xl font-semibold">Delivery File From the Seller</div>
                            <div className="flex flex-col mt-2 lg:mt-4 rounded-md border border-solid p-2 lg:p-6 shadow-md">
                            <div className="flex flex-row items-center justify-between">
                                <div className="text-lg lg:text-3xl text-[#00538F]"><BsFillFileEarmarkTextFill/></div>
                            
                                <div className="flex flex-col">
                                    <div className="text-base lg:text-xl font-semibold">Here is Seller work file</div>
                                    <div><a href="/#" className="text-xs md:text-sm text-[#8E8E8E] underline">Figma file 23564 25452...</a></div>
                                </div>
                                <div className="text-[#8E8E8E] text-lg lg:text-3xl"><a href="/#"><BiDownload/></a></div>
                            </div>
                        
                            </div>
                            <div className="my-4 md:my-8 text-base md:text-xl font-semibold ">Image File</div>
                            <div className="object-left"><img src={order_details.gig_buyed.delivery.deliveryFiles} alt="" className="inline w-[350px] h-auto" /></div>
                                </div>
                )
                }
                                
                           
                    

                     
                     
                     
                     </div>
                ): null
            }
        
            

                {/* Buttons */}

            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 my-10">
                {
                    order_status_button_value[orderNavIndex].includes('In Progress') || (order_status_button_value[orderNavIndex].includes('Pending')) || order_status_button_value[orderNavIndex].includes('Delivered') || order_status_button_value[orderNavIndex].includes('In Revision') ? (<button type="button" onClick={()=>setShowModal(true)} className="text-[#FF3B30] bg-white md:w-[180px] h-auto font-medium border border-[#FF3B30] rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2">Cancel</button>):null

                }
                {
                    
                    order_status_button_value[orderNavIndex].includes('Delivered') && (<button type="button" className="text-white md:w-[180px] h-auto bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2">Review</button>)
                }
                {
                    order_status_button_value[orderNavIndex].includes('Completed') && (<button type="button" className="text-white md:w-[180px] h-auto bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2">Re Order</button>)
                }

            
            
            <div>
            
            </div>
            
            </div>
            {/* Modal */}
           




        </div>



        <div className="m-auto">
         <Modal
                show={showModal}
                size ="md"
                position = "center"
                onClose={()=>setShowModal(false)}
                
            >

            <Modal.Header >
                Cancel Order?
            </Modal.Header>
            <Modal.Body>
            <div className="mb-4 text-start">
            <Label
              htmlFor="reason"
              className="pointer-events-none absolute z-20 ml-4 text-sm font-semibold max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.4] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              value="Enter Reason"
            />
            </div>
            <div className="">
            <TextInput
                  className="peer block min-h-[150px] w-full rounded border-0 bg-neutral-100 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:bg-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"

            id="reason"
            value="Lorem ipsum dolor sit amet, cons 
            ectetur adipiscing elit."
            required={true}
            
          />
          </div>
          <div className="flex flex-row place-content-center">
          <Button className="bg-blue-800 rounded-3xl mt-5 text-xl px-4 text-white text-center" onClick={()=>{handleOrderCancel(); setShowModal(false)}}>
            Confirm
          </Button>
          </div>
            </Modal.Body>

             </Modal>
         </div>
        </>

    )
}

export default ManageOrderDetails;