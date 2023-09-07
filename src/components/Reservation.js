import { useState } from "react";
import Header from "./Header";
import rest from "../photos/restaurant.jpg"
function Reservation() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [comment,setComment] = useState("")

    const handlesubmit = (e) =>{
        e.preventDefault();
        
    }
    return (
        <>
        <Header/>
        <div className="lg:grid lg:grid-cols-12 bg-[#495E57]">
        <div className="grid grid-cols-4 md:grid-cols-8  lg:col-start-1 lg:col-span-7  ">
            <img src={rest} alt="resturant" className="col-span-4 md:col-span-6 md:col-start-2 px-[70px]  lg:col-span-12 lg:p-[20px] lg:pt-[50px] " />
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:col-span-4 ">
        <h2 className=" px-[70px] pt-[15px] order-1 text-[15px] text-[#F4CE14] font-semibold font-Inter col-span-4 md:text-[26px] md:col-span-6 md:py-2 md:col-start-2 lg:col-start-1 lg:text-left lg:text-[24px] lg:pt-[50px] lg:col-span-12 lg:px-[-0px]  ">Book your Reservation!</h2>
        <form onSubmit={handlesubmit} className=" col-span-4 order-2 mx-[70px] md:col-start-2 md:col-span-6 lg:col-start-1  lg:col-span-12 lg:mx-[-0px]  ">
            <fieldset >
            <div className="grid my-[13px] md:my-[13px] lg:grid-cols-12  ">
                <label class=" text-[14px] order-1 text-[#F4CE14] md:text-[24px] lg:col-span-6 lg:text-[22px]">Select Branch *</label>
                <select name="branches" class=" text-[14px] rounded-[20px] bg-[#F4CE14] text-center order-1 border-[1px] border-black md:text-[26px] md:border-[2px] lg:col-span-6 lg:text-[22px]  ">
                    <option value="Mall1">Mall Of Arabia</option>
                    <option value="Mall2">Mall Of Egypt</option>
                    <option value="Mall3">Mall Elbostan</option>
                    <option value="Mall4">El Mazarita</option>
                </select>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8">
                <label class=" text-[14px] order-2 col-span-2 text-[#F4CE14] md:col-span-4 md:text-[26px] lg:text-[22px]" >Select Date *</label>
                <select name="times" class=" text-center text-[14px]  rounded-[20px] col-span-2 bg-[#F4CE14] order-2 border-[1px] border-black md:col-span-4 md:border-[2px] md:text-[26px] lg:text-[22px] ">
                    <option value="time1">2:00 PM</option>
                    <option value="time2">3:00 PM</option>
                    <option value="time3">4:00 PM</option>
                    <option value="time4">5:00 PM</option>
                    <option value="time5">6:00 PM</option>
                    <option value="time6">7:00 PM</option>
                    <option value="time7">8:00 PM</option>
                </select>
            </div>
            <div className="grid grid-cols-4 my-[13px] ">
                <label class=" text-[14px] order-1 text-[#F4CE14] col-span-2 md:text-[26px] lg:text-[22px]">Select Time *</label>
                <select name="timess" class=" text-[14px] col-span-2 rounded-[20px] text-center bg-[#F4CE14] order-5 border-[1px] border-black md:border-[2px] md:text-[26px] lg:text-[22px] ">
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    </select>
            </div>
            <div className="grid grid-cols-4 ">
                <label class=" text-[14px] text-[#F4CE14] order-1 col-span-2 md:text-[26px] lg:text-[22px]">Guests Number *</label>
                <select name="guests" class=" text-[14px] rounded-[20px] col-span-2 text-center bg-[#F4CE14] order-5 border-[1px] border-black md:border-[2px] md:text-[26px] lg:text-[22px] ">
                    <option value="num1">2</option>
                    <option value="num2">3</option>
                    <option value="num3">4</option>
                    <option value="num4">5</option>
                    <option value="num5">6</option>
                    <option value="num6">7</option>
                    <option value="num7">8</option>
                    <option value="num8">9</option>
                    <option value="num9">10</option>
                    </select>
            </div>
            <div className="grid grid-cols-4 my-[13px] md:my-[13px]">
                <label htmlFor="name"  class=" text-[14px] text-[#F4CE14] md:text-[26px] lg:text-[22px] ">Name *</label>
                <input class=" text-[14px] rounded-[20px] col-span-3 bg-[#F4CE14] order-6 border-[1px] border-black md:border-[2px] md:text-[26px] lg:col-span-2 lg:col-start-3 lg:text-[22px] "
                id="name"
                type="text"
                placeholder=""
                name="name"
                value={name}
                onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="grid grid-cols-4">
                <label htmlFor="email" class=" text-[14px] md:text-[26px] lg:text-[22px] text-[#F4CE14] ">Email *</label>
                <input class=" text-[14px] rounded-[20px] col-span-3 bg-[#F4CE14]  border-[1px] border-black md:border-[2px] md:text-[26px] lg:col-span-2 lg:col-start-3 lg:text-[22px] "
                id="email"
                type="email"
                placeholder=""
                name="emil"
                value={email}
                onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="grid grid-cols-4 my-[13px] md:my-[13px]">
                <label class=" text-[14px] col-span-2 text-[#F4CE14] md:text-[26px] lg:text-[22px]">Phone Number *</label>
                <input htmlFor="Phone Number"  class=" text-[14px] rounded-[20px] bg-[#F4CE14] col-span-2  border-[1px] border-black md:border-[2px] md:text-[26px] lg:text-[22px] "
                id="Phone"
                type="phone"
                placeholder=""
                name="phone"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)} />
            </div>
            <div className="grid grid-cols-4">
                <label class=" text-[14px] col-span-4 text-[#F4CE14] md:text-[26px] lg:text-[22px]">special Instruction *</label>
                <textarea class=" text-[14px] bg-[#F4CE14] col-span-4 h-16 rounded-[20px] border-[1px] border-black md:border-[2px] md:text-[26px] md:h-52 lg:text-[22px] lg:h-28 "
                placeholder=""
                value={comment}
                onChange={(e)=>setComment(e.target.value)}></textarea>
            </div>
            <div className="my-[13px] grid grid-cols-4 md:my-[13px]">
                <label htmlFor="agree"  class=" text-[14px] order-1 text-[#F4CE14] col-start-2 col-span-3 md:text-[26px] lg:text-[22px]"> I agree with the Terms and Condition, and Privacy Policy.</label>
                <input class=" text-[14px] bg-[#F5F5F5] h-6 w-6 justify-self-center col-start-1 border-[1px] border-black md:border-[2px] md:text-[26px] md:h-20 md:w-11  lg:w-10 "
                id="agree"
                type="checkbox"
                name="agree" required />
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 md:pt-[13px] lg:grid-cols-12">
            <button className="text-[18px] w-[110px] rounded-[20px] col-start-1 h-[50px] bg-[#F4CE14] text-black md:text-[26px] md:h-[80px] md:w-[200px] lg:col-start-1 lg:text-[26px] lg:w-[200px] lg:h-[100px] "
            disabled={!name && !phone && !email} type="submit">Book Now</button>
            <button className="text-[18px] w-[110px] h-[50px] col-start-3 bg-[#EE9972] rounded-[20px] text-[#495E57] md:text-[26px] md:col-start-5 md:h-[80px] md:w-[200px] md:mb-10 md:ml-10 lg:col-start-8 lg:text-[26px] lg:w-[200px] lg:h-[100px]"
            type="cancel">Cancel</button>
            </div>
            </fieldset>
        </form>
        </div>
        </div>
        </>
    );

}
export default Reservation