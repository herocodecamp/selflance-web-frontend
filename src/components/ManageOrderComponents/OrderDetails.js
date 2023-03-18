import React,{useState, useEffect} from "react";
import profile1 from '../../Assets/manage-order/profile-1.png';
import gigImageFUll from '../../Assets/gig_image_full.png';
import { Modal,Button, Label, TextInput } from "flowbite-react";
import gigDeliveryImage from "../../Assets/gig_delivery_file.png";


const order_screen_nav =['Timeline', 'Chat']
const chat = "Chat will live here";

const order_status_button_value = ['In Progress', 'Completed','In Revision', 'Pending','Cancelled','Delivered'];

const order_details = {
    order_id: '#F025E15',
    title: 'I will create responsive design for your mobile app',
    details: 'Lorem ipsum dolor sit amet consectetur. Orci orci vel ulla mcorper suspendisse eu sed at. Sit imper. Lorem ipsum dolor sit amet consectetur. Orci orci vel ulla mcorper suspendisse eu sed at. Sit imper. Lorem ipsum dolor sit amet consectetur. Orci orci vel ulla mcorper suspendisse eu sed at. Sit imper. Lorem ipsum dolor sit amet consectetur. Orci orci vel ulla mcorper suspendisse eu sed at.',
    gig_image: gigImageFUll,
    duration: '3 Days',
    amount: '$5.00',
    status:[{
        category: "Active",
        value: true
    },
    {
        category: "Revisions",
        value: false
    },
    {
        category: "Pending",
        value: false
    },
    {
        category: "Cancelled",
        value: false
    },

],
    
    gig_buyed: {
        package: 'Basic',
        revisions: 'Unlimited',
        files: ['Source file', 'JPG', 'PNG', 'ZIP'],
        resolution: 'High Resolution',
        seller: {
            _id: '0',
            image: profile1,
            name: 'Ahmed'
        },
        delivery:{
            value:false,
            deliveryFiles : [gigDeliveryImage],
            deliveryDate: '24 Jun 2023'

        }
        
    },
    summary: {
        subtotal: '$5.00',
        service: '$2.00',
        delivery_date: 'Thursday, 24 Jun 2023'
    }
}

// const order_details_pending = {
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

// const order_details_delivered = {
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

// }



const ManageOrderDetails = () => {

    const[showModal,setShowModal]=useState(false)

 const handleOrderCancel=()=>{
    console.log('Order Cancelled')
 }
    

    return (
        <>
        <div class="mx-4 lg:mx-24 my-10">
            <div class='flex items-center justify-between mb-1 lg:mb-4'>
                <p class="text-[#5E5E5E] text-[10px] md:text-lg">Order ID {order_details.order_id}</p>
                <p class='text-[8px] md:text-xl font-semibold sm:font-bold'>Day : <span class='text-[#D57635]'>03</span> : : Hours : <span class='text-[#00538F]'>24</span> : : Minutes : <span class=' text-[#00538F]'>30</span></p>
            </div>

            <div class="grid grid-cols-2 mt-2 lg:mt-4 rounded-md border border-solid p-2 lg:p-10 shadow-md">
                {/* Image_Gig */}
                <div class="col-span-full">
                        <img src={order_details.gig_image} alt='' class="inline rounded-md" />
                </div>
                <div class="col-span-full flex flex-row flex-wrap items-center mt-3 lg:mt-6 justify-between">
                    <div class="flex flex-row items-center justify-start">
                        <img src={order_details.gig_buyed.seller.image} class="inline md:w-[58px] w-[20px] h-[20px] mt-2 md:h-[58px] rounded-full" alt="" />
                        <h4 class="ml-1 md:ml-3 text-[8px] md:text-base font-semibold text-[#5E5E5E] opacity-80">{order_details.gig_buyed.seller.name}</h4>
                    </div>
                     <button class='bg-[#27AE60] w-[60px] md:w-[100px] h-auto border border-[#27AE60]  py-1 rounded text-[5px] md:text-xs text-white '>In Progress</button>
                </div>
                <div class="col-span-full mt-4 space-y-3">
                    <h1 class="text-[#00538F] text- base lg:text-2xl font-semibold">{order_details.title}</h1>
                    <h3 class="text-[#5E5E5E] text-sm md:text-base font-normal">Service Details</h3>
                    <h2 class="text-[8px] md:text-sm text-[#979797] opacity-90">{order_details.details.slice(0,340)}....Read more</h2>
                    <div class="flex flex-row items-center">
                        <h3 class="text-sm md:text-base text-right text-[#979797] font-semibold">Duration</h3>
                        <h3 class="text-sm md:text ml-16 text-[#979797] font-semibold">:</h3>
                        <h3 class="text-sm md:text ml-10 text-[#979797] font-semibold" >{order_details.duration}</h3>
                    </div>
                    <div class="flex flex-row items-center">
                        <h3 class="text-sm md:text text-right text-[#979797] font-semibold">Amount</h3>
                        <h3 class="text-sm md:text ml-16 text-[#979797] font-semibold">:</h3>
                        <h3 class="text-sm md:text ml-10 text-[#979797] font-semibold">{order_details.amount}</h3>
                    </div>
                    <div class="flex flex-row items-center">
                        <h3 class="text-sm md:text text-right text-[#979797] font-semibold">Status</h3>
                        <h3 class="text-sm md:text ml-20 text-[#979797] font-semibold">:</h3>
                        <h3 class="text-sm md:text ml-10 text-[#121F3E] font-semibold">{order_details.duration}</h3>
                    </div>

                    <div class="flex flex-col md:flex-row flex-wrap items-top  justify-center gap-3 lg:gap-5 mx-5">
                        <div class="border border-solid rounded-md p-4 shadow-md  text-left space-y-3 lg:my-10">
                            {/* Box #1 */}
                            <div class="text-lg  text-[#121F3E] font-semibold">Order Details</div>
                            {/* Item # 1 */}
                            <div class="grid grid-cols-7 gap-5">

                                <div class="col-start-1 col-span-2">
                                    <h2 class="text-[#979797] opacity-80 text-sm text-start">Revisions</h2>
                                </div>

                                <div class="col-start-4 col-span-1">
                                    <h2 class="text-[#979797] opacity-80 text-sm">:</h2>
                                </div>

                                <div class="col-start-5 col-span-3 text-end">
                                    <h2 class="text-[#979797] opacity-80 text-sm">Unlimited</h2>
                                </div>

                            </div>

                            {/* Item # 2 */}
                            <div class="grid grid-cols-7 gap-5">

                                <div class="col-start-1 col-span-2">
                                    <h2 class="text-[#979797] opacity-80 text-sm text-start">Files</h2>
                                </div>

                                <div class="col-start-4 col-span-1">
                                    <h2 class="text-[#979797] opacity-80 text-sm">:</h2>
                                </div>

                                <div class="col-start-5 col-span-3 text-end">
                                    {
                                        order_details.gig_buyed.files.map((item,index)=>{
                                           return( <h2 key={index} class="text-[#979797] opacity-80 text-sm">
                                                    {item} ,
                                                </h2>)
                                        })
                                    }
                                </div>

                            </div>

                            {/* Item # 3 */}
                            <div class="grid grid-cols-7 gap-5">

                                <div class="col-start-1 col-span-2">
                                    <h2 class="text-[#979797] opacity-80 text-sm text-start">Resolution</h2>
                                </div>

                                <div class="col-start-4 col-span-1">
                                    <h2 class="text-[#979797] opacity-80 text-sm">:</h2>
                                </div>

                                <div class="col-start-5 col-span-3 text-end">
                                     <h2 class="text-[#979797] opacity-80 text-sm">
                                                    {order_details.gig_buyed.resolution}
                                                </h2>
                                        
                                    
                                </div>

                            </div>

                            {/* Item # 4 */}
                            <div class="grid grid-cols-7 gap-5">

                                <div class="col-start-1 col-span-2">
                                    <h2 class="text-[#979797] opacity-80 text-sm text-start">Package</h2>
                                </div>

                                <div class="col-start-4 col-span-1">
                                    <h2 class="text-[#979797] opacity-80 text-sm">:</h2>
                                </div>

                                <div class="col-start-5 col-span-3 text-end">
                                     <h2 class="text-[#979797] opacity-80 text-sm">
                                                    {order_details.gig_buyed.package}
                                                </h2>
                                        
                                    
                                </div>

                            </div>

                        </div>

                        {/* Box 2 */}
                        <div class="border border-solid rounded-md p-4 shadow-md  text-left space-y-3 mb-8 lg:my-10">
                            {/* Box #1 */}
                            <div class="text-lg  text-[#121F3E] font-semibold">Order Summary</div>
                            {/* Item # 1 */}
                            <div class="grid grid-cols-7 gap-5">

                                <div class="col-start-1 col-span-2">
                                    <h2 class="text-[#979797] opacity-80 text-sm text-start">Subtotal</h2>
                                </div>

                                <div class="col-start-4 col-span-1">
                                    <h2 class="text-[#979797] opacity-80 text-sm">:</h2>
                                </div>

                                <div class="col-start-5 col-span-3 text-end">
                                    <h2 class="text-[#979797] opacity-80 text-sm">{order_details.summary.subtotal}</h2>
                                </div>

                            </div>

                            {/* Item # 2 */}
                            <div class="grid grid-cols-7 gap-5">

                                <div class="col-start-1 col-span-2">
                                    <h2 class="text-[#979797] opacity-80 text-sm text-start">Service</h2>
                                </div>

                                <div class="col-start-4 col-span-1">
                                    <h2 class="text-[#979797] opacity-80 text-sm">:</h2>
                                </div>

                                <div class="col-start-5 col-span-3 text-end">
                               <h2  class="text-[#979797] opacity-80 text-sm">
                                                    {order_details.summary.service}
                                                </h2>
                                </div>

                            </div>

                            {/* Item # 3 */}
                            <div class="grid grid-cols-7 gap-5">

                                <div class="col-start-1 col-span-2">
                                    <h2 class="text-[#979797] opacity-80 text-sm text-start">Total</h2>
                                </div>

                                <div class="col-start-4 col-span-1">
                                    <h2 class="text-[#979797] opacity-80 text-sm">:</h2>
                                </div>

                                <div class="col-start-5 col-span-3 text-end">
                                     <h2 class="text-[#979797] opacity-80 text-sm">
                                                    $7.00
                                                </h2>
                                        
                                    
                                </div>

                            </div>

                            {/* Item # 4 */}
                            <div class="grid grid-cols-7 gap-5">

                                <div class="col-start-1 col-span-2">
                                    <h2 class="text-[#979797] opacity-80 text-sm text-start">Delivery Date</h2>
                                </div>

                                <div class="col-start-4 col-span-1">
                                    <h2 class="text-[#979797] opacity-80 text-sm">:</h2>
                                </div>

                                <div class="col-start-5 col-span-3 text-end">
                                     <h2 class="text-[#979797] opacity-80 text-sm">
                                                    {order_details.summary.delivery_date}
                                                </h2>
                                        
                                    
                                </div>

                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>

            <div class="flex flex-col md:flex-row flex-wrap justify-center gap-6 my-10">
            <button type="button" onClick={()=>setShowModal(true)} class="text-[#FF3B30] bg-white md:w-[180px] h-auto font-medium border border-[#FF3B30] rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2">Cancel</button>

            <button type="button" class="text-white md:w-[180px] h-auto bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2">Review</button>
            
            <div>
            
            </div>
            
            </div>
            {/* Modal */}
           




        </div>
        <div class="m-auto">
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
              class="pointer-events-none absolute z-20 ml-4 text-sm font-semibold max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.4] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              value="Enter Reason"
            />
            </div>
            <div class="">
            <TextInput
                  class="peer block min-h-[150px] w-full rounded border-0 bg-neutral-100 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:bg-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"

                                id="reason"
                                value="Lorem ipsum dolor sit amet, cons 
            ectetur adipiscing elit."
            required={true}
            
          />
          </div>
          <div class="flex flex-row place-content-center">
          <Button class="bg-blue-800 rounded-3xl mt-5 text-xl px-4 text-white text-center" onClick={()=>{handleOrderCancel(); setShowModal(false)}}>
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