import React,{useState} from "react";
import { RxHamburgerMenu,RxCross2 } from 'react-icons/rx';


const headings = ['Introduction', 'Our Values','Why we process Information?','Your rights our your information','Information we collect automatically','Information we receive from third party'];

const privacy_policy = [
    {
        title: 'Introduction',
        description: `Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration; but this prescription is not consistently followed, even by most health care providers, because the term respiratory rate (RR) is a well-established term in health care, even though it would need to be consistently replaced with ventilation rate if the precise usage were to be followed.
      
        Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body
       `
    },
    {
        title: 'Our Values',
        description: `Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration; but this prescription is not consistently followed, even by most health care providers, because the term respiratory rate (RR) is a well-established term in health care, even though it would need to be consistently replaced with ventilation rate if the precise usage were to be followed.
      
        Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body
        `
    },
    {
        title: 'Why we process Information?',
        description: `Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration; but this prescription is not consistently followed, even by most health care providers, because the term respiratory rate (RR) is a well-established term in health care, even though it would need to be consistently replaced with ventilation rate if the precise usage were to be followed.
       ${'\n'}
        Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body
        `
    },
    {
        title: 'Your rights our your information',
        description: `Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration; but this prescription is not consistently followed, even by most health care providers, because the term respiratory rate (RR) is a well-established term in health care, even though it would need to be consistently replaced with ventilation rate if the precise usage were to be followed.
      
        Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body`
    },
    {
        title: 'Information we collect automatically',
        description: `Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration; but this prescription is not consistently followed, even by most health care providers, because the term respiratory rate (RR) is a well-established term in health care, even though it would need to be consistently replaced with ventilation rate if the precise usage were to be followed.
     
        Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body
        `
    },
    {
        title: 'Information we receive from third party',
        description: `Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration; but this prescription is not consistently followed, even by most health care providers, because the term respiratory rate (RR) is a well-established term in health care, even though it would need to be consistently replaced with ventilation rate if the precise usage were to be followed.
    
        Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body
        `
    },
    

]

const PrivacyandTermsView =({heading, subheading})=>{

    const [activeIndex,setActiveIndex]= useState(0);
    const [activeListItem,setActiveListItem] = useState('Introduction');

    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
                setIsOpen(!isOpen)
            }

    return(<>
        <div class="flex flex-col">
            {/* Header */}
            <div class="min-h-[180px] lg:min-h-[360px] bg-[#e5eef4]">
                        <div class="grid grid-cols-8 text-center justify-center items-center space-y-4 md:space-y-8">
                            {/* Title */}
                            <div class="col-start-2 col-span-6 md:col-start-3 md:col-span-4 mt-10 lg:mt-28 text-4xl md:text-6xl font-bold text-center text-[#1D263A]">
                            {heading}
                            </div>
                            {/* Subtitle */}
                            <div class="col-start-2 col-span-6 md:col-start-3 md:col-span-4 text-[#1D263A] text-xs md:text-lg font-normal opacity-70 justify-self-center">
                                <div class="flex flex-row">
                                    {subheading}
                                </div>
                            </div>
                        </div>
            </div>
            {/* Header ends */}

            {/* Body */}
            
            <div class="grid grid-cols-6 justify-center lg:items-center lg:mx-20 gap-1 lg:gap-10 mt-5 lg:mt-20 mb-40">
                {/* section 1 */}
                
                <div class="lg:hidden col-start-1 col-span-1">
                     <button class='ml-2 text-start mt-1' onClick={handleToggle}><RxHamburgerMenu class='text-2xl' /></button>
                     <div class="lg:hidden absolute  w-[150px] md:w-[250px] ml-1 mb-5">
                                {
                                    isOpen && (
                                    <div class="bg-white bg-opacity-90 z-100 border border-solid border-[#00538F] rounded-lg">
                                        <div class="text-left ml-2"><button class="text-lg" onClick={()=>handleToggle()}><RxCross2/></button></div>
                                        <ul class="list-none space-y-6 text-base font-normal w-28 md:w-60 ml-3 mb-3">
                                            {
                                                headings.map((item,index)=>{
                                                    return(
                                                        <li key={index} class={activeListItem === item ? `text-base font-bold `: `text-sm`}>
                                                            <button class="text-start" onClick={()=>{setActiveIndex(index); setActiveListItem(item);handleToggle()}}>
                                                                {item}
                                                            </button>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>

                                    )
                                }
                </div>
                </div>
                
                
                <div class="hidden lg:block col-start-1 col-span-2">
                    <div class="flex flex-row  gap-5">
                        <div class="border-solid border-l-2 h-auto"></div>
                       <div class="mt-5 mb-5">
                        <ul class="list-none space-y-6 text-base font-normal w-28 md:w-60">
                            {
                                headings.map((item,index)=>{
                                    return(
                                        <li key={index} class={activeListItem === item ? `text-lg font-bold `: `text-base`}>
                                            <button class="text-start" onClick={()=>{setActiveIndex(index); setActiveListItem(item)}}>
                                                {item}
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                       </div>
                    </div>
                    
                </div>
                {/* section 1 ends */}
                {/* section 2 */}
                <div class="col-start-2 col-span-5 lg:col-start-3 lg:col-span-4 justify-start leading-6 md:leading-[3rem] text-xs md:text-base font-normal tracking-tight mr-5 lg:mr-0">
                    <h1 class="font-bold text-lg md:text-2xl mb-2 lg:mb-5">{privacy_policy[activeIndex].title}</h1>
                    <p>{privacy_policy[activeIndex].description}</p>
                   
                </div>
                {/* section 2 ends */}

            </div>
            {/* Body ends */}

        </div>
    </>)
}

export default PrivacyandTermsView;