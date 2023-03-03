import React from "react";

const PrivacyandTermsView =({heading, subheading})=>{
    return(<>
        <div class="flex flex-col">
            {/* Header */}
            <div class="min-h-[360px] bg-[#e5eef4]">
                        <div class="grid grid-cols-8 text-center justify-center items-center space-y-8">
                            {/* Title */}
                            <div class="col-start-3 col-span-4 mt-28 text-6xl font-bold text-center text-[#1D263A]">
                            {heading}
                            </div>
                            {/* Subtitle */}
                            <div class="col-start-3 col-span-4 text-[#1D263A] text-xs md:text-lg font-normal opacity-70 justify-self-center">
                                <div class="flex flex-row">
                                    {subheading}
                                </div>
                            </div>
                        </div>
                </div>
            {/* Header ends */}

            {/* Body */}
            <div class="grid grid-cols-6 justify-center items-center mx-20 gap-10 mt-20 mb-40">
                {/* section 1 */}
                <div class="col-start-1 col-span-2">
                    <div class="flex flex-row gap-5">
                        <div class="border-solid border-l-2 h-auto"></div>
                       <div class="mt-5 mb-5">
                        <ul class="list-none space-y-6 text-base font-normal w-60">
                                <li class="font-bold">Introduction</li>
                                <li>Our Values</li>
                                <li>Why we Process information?</li>
                                <li>Your rights our your information</li>
                                <li>Information we collect automatically</li>
                                <li>Information we receive from third party</li>
                        </ul>
                       </div>
                    </div>
                    
                </div>
                {/* section 1 ends */}
                {/* section 2 */}
                <div class="col-start-3 col-span-4 justify-start leading-[3rem] text-base font-normal tracking-tight">
                    <h1 class="font-bold text-2xl mb-5">Introduction</h1>
                    <p>Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration; but this prescription is not consistently followed, even by most health care providers, because the term respiratory rate (RR) is a well-established term in health care, even though it would need to be consistently replaced with ventilation rate if the precise usage were to be followed.
                    </p>
                    <p>
                    Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body
                    </p>
                </div>
                {/* section 2 ends */}

            </div>
            {/* Body ends */}

        </div>
    </>)
}

export default PrivacyandTermsView;