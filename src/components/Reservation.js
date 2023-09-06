import { useState } from "react";
import Header from "./Header";
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
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12  ">
        <h1 className="p-[70px] bg-[#657379] text-[#F4CE14] text-[46px] justify-self-center w-[400px] font-medium font-Martel order-1 col-span-4 md:col-span-8 md:h-[375px] md:w-[880px] md:pl-40 md:text-[124px] lg:col-span-12 lg:text-center lg:text-[124px] lg:w-[1520px] lg:h-[400px]">Book Now!</h1>
        <h2 className=" px-[70px] pt-[15px] text-[15px] font-semibold font-Inter order-2 col-span-4 md:text-[30px] md:col-span-6 md:py-2 md:col-start-2 lg:col-start-3 lg:text-left lg:text-[32px] lg:col-span-7 ">To book a reservation, please fill-out this form.</h2>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 ">
        <form onSubmit={handlesubmit} className=" col-span-4 mx-[70px] md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-9  ">
            <fieldset >
            <div className="grid my-[13px] md:my-[13px] lg:grid-cols-12  ">
                <label class=" text-[14px] order-1 md:text-[28px] lg:col-span-6">Select Branch *</label>
                <select name="branches" class=" text-[14px] bg-[#F5F5F5] text-center order-1 border-[1px] border-black md:text-[34px] md:border-[2px] lg:col-span-6 ">
                    <option value="Mall1">Mall Of Arabia</option> 
                    <option value="Mall2">Mall Of Egypt</option> 
                    <option value="Mall3">Mall Elbostan</option> 
                    <option value="Mall4">El Mazarita</option> 
                </select>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8">
                <label class=" text-[14px] order-2 col-span-2 md:col-span-4 md:text-[28px]" >Select Date *</label>
                <select name="times" class=" text-center text-[14px] col-span-2 bg-[#F5F5F5] order-2 border-[1px] border-black md:col-span-4 md:border-[2px] md:text-[34px] ">
                    <option value="time1">2:00 PM</option>
                    <option value="time2">3:00 PM</option> 
                    <option value="time3">4:00 PM</option>
                    <option value="time4">5:00 PM</option>
                    <option value="time5">6:00 PM</option>
                    <option value="time6">7:00 PM</option>
                    <option value="time7">8:00 PM</option>
                </select>
            </div>
            <div className=" flex-row my-[13px] md:my-[13px]">
                <label class=" text-[14px] order-3 md:text-[28px]">Select Time *</label>
                <input class=" text-[14px] md:text-[28px] " type="radio" value="lunch"  /> Lunch
                <input class=" text-[14px] md:text-[28px] " type="radio" value="Dinner" /> Dinner
            </div>
            <div className="grid grid-cols-4 ">
                <label class=" text-[14px] order-1 col-span-2 md:text-[28px]">Guests Number *</label>
                <select name="guests" class=" text-[14px] col-span-1 text-center bg-[#F5F5F5] order-5 border-[1px] border-black md:border-[2px] md:text-[34px] ">
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
                <label class=" text-[14px] md:text-[28px] ">Name *</label>
                <input class=" text-[14px] col-span-3 bg-[#F5F5F5] order-6 border-[1px] border-black md:border-[2px] md:text-[34px] lg:col-span-2 lg:col-start-3 "
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="grid grid-cols-4">
                <label class=" text-[14px] md:text-[28px] ">Email *</label>
                <input class=" text-[14px] col-span-3 bg-[#F5F5F5]  border-[1px] border-black md:border-[2px] md:text-[34px] lg:col-span-2 lg:col-start-3 "
                type="email"
                placeholder="Email"
                name="emil"
                value={email}
                onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="grid grid-cols-4 my-[13px] md:my-[13px]">
                <label class=" text-[14px] col-span-2 md:text-[28px]">Phone Number *</label>
                <input class=" text-[14px] bg-[#F5F5F5] col-span-2  border-[1px] border-black md:border-[2px] md:text-[34px] "
                type="phone"
                placeholder="Phone Number"
                name="phone"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)} />
            </div>
            <div className="grid grid-cols-4">
                <label class=" text-[14px] col-span-4 md:text-[28px]">special Instruction *</label>
                <textarea class=" text-[14px] bg-[#F5F5F5] col-span-4 h-16 border-[1px] border-black md:border-[2px] md:text-[34px] md:h-52 "
                placeholder="Message"
                value={comment}
                onChange={(e)=>setComment(e.target.value)}></textarea>
            </div>
            <div className="my-[13px] grid grid-cols-4 md:my-[13px]">
                <label class=" text-[14px] order-1 col-start-2 col-span-3 md:text-[28px]"> I agree with the Terms and Condition, and Privacy Policy.</label>
                <input class=" text-[14px] bg-[#F5F5F5] h-6 w-6 justify-self-center col-start-1 border-[1px] border-black md:border-[2px] md:text-[34px] md:h-16 md:w-16 "
                type="checkbox"
                name="agree" required />
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 md:pt-[13px] lg:grid-cols-12">
            <button className="text-[18px] w-[110px] col-start-1 h-[50px] bg-black text-white md:text-[34px] md:h-[100px] md:w-[250px] lg:col-start-2 "
            disabled={!name } type="submit">Book Now</button>
            <button className="text-[18px] w-[110px] h-[50px] col-start-3 bg-[#657379] text-white md:text-[34px] md:col-start-5 md:h-[100px] md:w-[250px] md:mb-10 md:ml-10 lg:col-start-8"
            type="cancel">Cancel</button>
            </div>
            </fieldset>
        </form>
        </div>
        </>
    );

}
export default Reservation