import TrendingCard from "./TrendingCard"
import Fade from "react-reveal/Fade"

const Trending = () => {
  return (
    <div id="trending" className="w-full py-[4rem] " >
        <Fade bottom>
        <div className="flex flex-col space-y-4 xl:flex-row xl:space-y-0 items-center justify-between" >
            <p className="text-[1.4rem] font-bold text-center " >Popular Games of the Moment</p>
            <button className="bg-[#160E46] w-[7rem] py-3 text-sm rounded-lg" >SEE ALL</button>
        </div>
        </Fade>

        <Fade bottom>
        <div className="flex flex-wrap items-center justify-center xl:justify-between sm:space-x-4 xl:space-x-0 mt-[4rem]" >
            <TrendingCard image={require("../images/card1.png")} />
            <TrendingCard image={require("../images/card2.png")} />
            <TrendingCard image={require("../images/card3.png")}/>
            <TrendingCard image={require("../images/card4.png")}/>
        </div>
        </Fade>
    </div>
  )
}

export default Trending