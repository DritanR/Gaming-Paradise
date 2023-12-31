import Fade from 'react-reveal/Fade'

const COD = () => {
  return (
    <div id='news' className="w-full py-[2rem] " >
        <Fade bottom>
        <p className="text-[1.5rem] font-bold text-center " >
            

        Stay updated on the latest in gaming and entertainment.
        </p>
        </Fade>

        <Fade bottom>
        <div className="mt-[6rem] " >
            <p className="text-[1.3rem] font-medium text-center lg:text-start " >Step into Mayhem</p>
            <p className="text-sm xl:w-[20rem] text-center lg:text-start text-gray-100" >
                ght Across Brand-New Battlegrounds in
                Season 04, now live!
            </p>
        </div>
        </Fade>

        <Fade>
        <div className="w-full mt-[2rem] " >
            <img src={require("../images/cod.png")} />
        </div>
        </Fade>

    </div>
  )
}

export default COD