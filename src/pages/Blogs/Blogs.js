// logic
import React from "react";

const Blogs= ()=>{
    return(
        // Hero
        
            <div class="flex flex-col">
                {/* Hero */}
                <div class="grid grid-cols-6 bg-[#e5eef4] h-[360px]">
                    <div class="col-start-3 col-span-2 justify-self-center">Blogs</div>
                    <div class="col-start-3 col-span-2 justify-self-center text-center mt-0">
                        <p>Stay ahead of the competition with the latest advice on marketing, networking, and more from our blog.</p>
                    </div>
                </div>
                {/* Related Articles */}
                <div class="grid grid-rows-2 grid-flow-row md:grid-flow-col mt-10 mx-32">
                        <div>Latest articles</div>
                        <div class=" gap-5 columns-3">
                            <div class="">01</div>
                        </div>
                </div>
            </div>
    )
}

export default Blogs;