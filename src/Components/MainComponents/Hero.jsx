import Logo from '../../assets/Logo.jpg';

export default function Hero() {
  return(
    <div className = "container w-full mt-3">
      <div className="relative p-12 overflow-hidden text-center bg-white rounded-lg">
    
        <div className="relative">
          <div className = "container items-center justify-center w-full lg:flex" >
            <img src = {Logo} alt = "Logo" className = "w-32 h-auto rounded-full"/>
            <h1 className="text-3xl font-bold text-black drop-shadow-[35px_35px_rgba(80, 183, 84, 1)] italic">UPV MATHEMATICS CIRCLE NATIONWIDE INTER-SCHOOL QUIZ BEE 2023</h1>
            </div>
        
            <p className="mt-4 text-lg text-black">The University of the Philippines Visayas Mathematics Circle (UPVMC) Quiz Bee is an annual student-run math competition for high school students held at the UPV Campus in Iloilo City. The Quiz Bee aims to encourage interest in math by providing students from all across the country an oppurtunity to work on fun and challenging problems and to meet other students interest in math.</p>
        
            </div>
        {/*Add a register now button}*/}
        <div className = "container items-center justify-center w-full lg:flex" >
        <button className="px-8 py-2 text-lg font-bold text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600 hover:cursor-pointer">Register Now</button>
        </div>
    </div> 
    </div>
)
}

