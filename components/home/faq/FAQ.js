const FAQ = () => {
    const toggle = (id)=> {
        id = id;
        const nodeList = document.querySelectorAll(".all-accordion-body");
        const nodeList2 = document.querySelectorAll(".all-coll-heading");
        for (let i = 0; i < nodeList.length; i++) {
            if(nodeList[i].classList.contains("accordion-collapse-body-"+id)) {
                nodeList[i].classList.toggle("hidden");
                nodeList2[i].querySelector("svg").classList.toggle("rotate-180")
            }
            else {
                nodeList[i].classList.add("hidden");
                nodeList2[i].querySelector("svg").classList.add("rotate-180")
            }
        }
    }
    
    return (
        <section id='faq' className="bg-[#fff] pt-0 md:pt-[50px] pb-[40px] md:pb-[170px] px-0 md:px-[50px]">
            <div className="myContainer">
                <h1 className='fpr text-[#0F2E3C] md:text-[45px] lg:text-[65px]   leading-[32px] md:leading-[45px] lg:leading-[65px]  text-center max-w-[700px] mx-auto hidden md:block'>Frequently asked <br /> questions</h1>
                <div id="accordion-collapse" className="mt-0 md:mt-[70px]">
                    <h2 id="accordion-collapse-heading-1" className="all-coll-heading" onClick={()=>toggle("1")}>
                        <button type="button" className="flex items-center justify-between w-full py-[5px] px-[5px] md:p-3.5 font-medium text-left border-b-[1px] border-0 md:border-b-[1px] border-[#292929] focus:outline-none" >
                        <span className="fgr text-[14px] md:text-[20px] leading-[12px] md:leading-[20px] text-[#292929]">What is Coaching?</span>
                        <svg data-accordion-icon="" className="w-[18px] md:w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-1" className="all-accordion-body accordion-collapse-body-1 hidden">
                        <div className="px-[7px] py-2 md:p-3.5 font-light">
                        <p className="fgr mb-2 text-[12px] md:text-[18px] leading-[18px] md:leading-[24px] text-[#292929]"> Coaching is a solution-focused goal oriented way to help clients improve their relationships, careers, and day-to-day lives. It helps identify obstacles in a person’s life and help them find solutions to their problems. 
</p>
                        </div>
                    </div>
                    <h2 id="accordion-collapse-heading-2" className="all-coll-heading" onClick={()=>toggle("2")}>
                        <button type="button" className="flex items-center justify-between w-full py-[5px] px-[5px] md:p-3.5 font-medium text-left text-gray-500 border-b-[1px] border-0 md:border-b-[1px] border-[#292929] focus:outline-none" >
                        <span className="fgr text-[14px] md:text-[20px] leading-[12px] md:leading-[20px] text-[#292929]">What makes Ihsan Coaching different</span>
                        <svg data-accordion-icon="" className="w-[18px] md:w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-2" className="all-accordion-body accordion-collapse-body-2 hidden">
                        <div className="px-[7px] py-2 md:p-3.5 font-light">
                        <p className="fgr mb-2 text-[12px] md:text-[18px] leading-[18px] md:leading-[24px] text-[#292929]"> All of our coaches are trained therapists and have worked in a therapatuic environment for many years. Majority of them are licensed to practice in the state they live in.
</p>
                      </div>
                    </div>
                    <h2 id="accordion-collapse-heading-3" className="all-coll-heading" onClick={()=>toggle("3")}>
                        <button type="button" className="flex items-center justify-between w-full py-[5px] px-[5px] md:p-3.5 font-medium text-left text-gray-500 border-b-[1px] border-0 md:border-b-[1px] border-[#292929] focus:outline-none" >
                        <span className="fgr text-[14px] md:text-[20px] leading-[12px] md:leading-[20px] text-[#292929]">How much does each coaching session cost?</span>
                        <svg data-accordion-icon="" className="w-[18px] md:w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-3" className="all-accordion-body accordion-collapse-body-3 hidden">
                        <div className="px-[7px] py-2 md:p-3.5 font-light">
                        <p className="fgr mb-2 text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] text-[#292929]"> This depends on the type of service being provided and the amount of sessions. We are very transparent about our pricing and this can be seen when booking an appointment.</p>
                      </div>
                    </div>
                    <h2 id="accordion-collapse-heading-4" className="all-coll-heading" onClick={()=>toggle("4")}>
                        <button type="button" className="flex items-center justify-between w-full py-[5px] px-[5px] md:p-3.5 font-medium text-left text-gray-500 border-b-[1px] border-0 md:border-b-[1px] border-[#292929] focus:outline-none" >
                        <span className="fgr text-[14px] md:text-[20px] leading-[12px] md:leading-[20px] text-[#292929]">Do you take insurance?</span>
                        <svg data-accordion-icon="" className="w-[18px] md:w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-4" className="all-accordion-body accordion-collapse-body-4 hidden">
                        <div className="px-[7px] py-2 md:p-3.5 font-light">
                        <p className="fgr mb-2 text-[12px] md:text-[18px] leading-[18px] md:leading-[24px] text-[#292929]"> Unfortunately, we do not take insurance due to us being a nation-wide organization and working with clients across state lines. By not working with insurance companies, we are able to provide better care and able to do more for our clients.  </p> 
                      </div>
                    </div>
                    <h2 id="accordion-collapse-heading-5" className="all-coll-heading" onClick={()=>toggle("5")}>
                        <button type="button" className="flex items-center justify-between w-full py-[5px] px-[5px] md:p-3.5 font-medium text-left text-gray-500 border-b-[1px] border-0 md:border-b-[1px] border-[#292929] focus:outline-none" >
                        <span className="fgr text-[14px] md:text-[20px] leading-[12px] md:leading-[20px] text-[#292929]">What services do you provide?
</span>
                        <svg data-accordion-icon="" className="w-[18px] md:w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-5" className="all-accordion-body accordion-collapse-body-5 hidden">
                        <div className="px-[7px] py-2 md:p-3.5 font-light">
                        <p className="fgr mb-2 text-[12px] md:text-[18px] leading-[18px] md:leading-[24px] text-[#292929]">We provide individual, premarital and marital coaching </p>
                      </div>
                    </div>
                    <h2 id="accordion-collapse-heading-6" className="all-coll-heading" onClick={()=>toggle("6")}>
                        <button type="button" className="flex items-center justify-between w-full py-[5px] px-[5px] md:p-3.5 font-medium text-left text-gray-500 border-b-[1px] border-0 md:border-b-[1px] border-[#292929] focus:outline-none" >
                        <span className="fgr text-[14px] md:text-[20px] leading-[12px] md:leading-[20px] text-[#292929]">How does coaching work?
</span>
                        <svg data-accordion-icon="" className="w-[18px] md:w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-6" className="all-accordion-body accordion-collapse-body-6 hidden">
                        <div className="px-[7px] py-2 md:p-3.5 font-light">
                        <p className="fgr mb-2 text-[12px] md:text-[18px] leading-[18px] md:leading-[24px] text-[#292929]">For those familiar with therapy, it is very similar without the stigmatization of having to be labelled. It is a collaborative effort between the coach and the client, the goal being to build the relationships and making the client feeling as comfortable as possible. Some clients are ready to start working and are very open, while some maybe hesitant. Our coaches understand that it is never easy opening up to a complete stranger and will never force you to reveal something you don’t want to. It is normal to feel nervous and resistant at times. Over time, clients learn to trust the person they are working with and tend to open up. This allows for the “real work” to be accomplished. Everything that is said in the session is confidential.
 </p>
                      </div>
                    </div>
                   
                   
                    <h2 id="accordion-collapse-heading-7" className="all-coll-heading" onClick={()=>toggle("7")}>
                        <button type="button" className="flex items-center justify-between w-full py-[5px] px-[5px] md:p-3.5 font-medium text-left text-gray-500 border-0 md:border-0 border-[#292929] focus:outline-none" >
                        <span className="fgr text-[14px] md:text-[20px] leading-[12px] md:leading-[20px] text-[#292929]">How does booking with Ihsan Coaching work?</span>
                        <svg data-accordion-icon="" className="w-[18px] md:w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-7" className="all-accordion-body accordion-collapse-body-7 hidden">
                        <div className="px-[7px] py-2 md:p-3.5 font-light">
                        <p className="fgr mb-2 text-[12px] md:text-[18px] leading-[18px] md:leading-[24px] text-[#292929]">We understand the hassle of trying to book an appointment. It can be very frustrating going back and forth with a receptionist trying to find a time that works.  That is why we have made the process easier for everyone. Potential clients can choose how many sessions they would like and who they would like to work with. They will also be able to choose the time and date best for them. This avoids all the hassle of having to go back and forth and trying to find the most convenient time for them. 
</p>
                      </div>
                      
                    </div>
                  
                </div>
            </div>
        </section>
    );
};

export default FAQ;
