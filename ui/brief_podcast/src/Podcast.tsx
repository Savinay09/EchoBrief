import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

/**
Podcast profile pic
    <img className="w-[375px] h-[520px] left-0 top-0 absolute rounded-tl-[32px] rounded-tr-[32px]" src="https://via.placeholder.com/375x520" />
    <img className="w-[375px] h-[520px] left-0 top-0 absolute rounded-tl-[32px] rounded-tr-[32px]" src="../assets/podprofile_lex.png" />


Podcast thumb:
                <img className="w-[78px] h-[77px] rounded-[10px]" src="https://via.placeholder.com/78x77" />
                <img className="w-[78px] h-[77px] rounded-[10px]" src="../assets/podthumb_small_lex.png" />

Play button
                <div className="w-8 h-8 relative flex-col justify-start items-start flex" />
                <div className="w-8 h-8 relative flex-col justify-start items-start flex"><img src='../assets/PlayButtonIcon.svg'/></div>

AI icon
                    <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex" />
                    <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex"><img src='../assets/AiIcon.svg'/></div>

Back button
        <div className="w-[53px] h-[52px] relative" />
        <div className="w-[53px] h-[52px] relative"><img src="../assets/BackButton.svg"/></div>
*/

function App() {
  const [count, setCount] = useState(0)

  return (
<div className="w-full h-[910px] p-2.5 bg-slate-400 flex-col justify-center items-center gap-2.5 inline-flex">
<div className="w-[375px] h-[812px] relative bg-white rounded-[32px]">
    <div className="left-[24px] top-[549px] absolute text-neutral-800 text-lg font-semibold font-['Poppins']">All Episodes</div>
    <div className="left-[24px] top-[596px] absolute flex-col justify-start items-start gap-4 inline-flex">
        <div className="w-[327px] h-[101px] justify-between items-center inline-flex">
            <div className="w-[251px] h-[101px] justify-start items-center gap-3.5 flex">
                <img className="w-[78px] h-[77px] rounded-[10px]" src="../assets/podthumb_small_lex.png" />
                <div className="w-[259px] h-[100px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="w-[175px] text-neutral-800 text-base font-medium font-['Poppins'] leading-snug">#5 - Statistical Learning</div>
                    <div className="text-neutral-400 text-xs font-medium font-['Poppins']">1h 40min • 22 Feb 2022</div>
                    <div className="pr-[11px] pt-[0.50px] pb-[11.50px] justify-start items-center inline-flex">
                        <img className="w-[178px] h-2.5 rounded-[5px]" src="https://via.placeholder.com/178x10" />
                    </div>
                </div>
            </div>
            <div className="pl-[13.50px] flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="w-8 h-8 relative flex-col justify-start items-start flex"><img src='../assets/PlayButtonIcon.svg'/></div>
                <div className="self-stretch h-[35px] pl-0.5 pt-[3px] pb-0.5 bg-neutral-700 rounded-[10px] flex-col justify-center items-center inline-flex">
                    <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex"><img src='../assets/AiIcon.svg'/></div>
                </div>
            </div>
        </div>
        <div className="w-[327px] h-[101px] justify-between items-center inline-flex">
            <div className="w-[251px] h-[101px] justify-start items-center gap-3.5 flex">
                <img className="w-[78px] h-[77px] rounded-[10px]" src="../assets/podthumb_small_lex.png" />
                <div className="w-[259px] h-[100px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="w-[175px] text-neutral-800 text-base font-medium font-['Poppins'] leading-snug">#4 - Deep Learning</div>
                    <div className="text-neutral-400 text-xs font-medium font-['Poppins']">1h 40min • 22 Feb 2022</div>
                </div>
            </div>
            <div className="pl-[13.50px] flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="w-8 h-8 relative flex-col justify-start items-start flex"><img src='../assets/PlayButtonIcon.svg'/></div>
                <div className="self-stretch h-[35px] pl-0.5 pt-[3px] pb-0.5 bg-neutral-700 rounded-[10px] flex-col justify-center items-center inline-flex">
                    <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex"><img src='../assets/AiIcon.svg'/></div>
                </div>
            </div>
        </div>
    </div>
    <img className="w-[375px] h-[520px] left-0 top-0 absolute rounded-tl-[32px] rounded-tr-[32px]" src="../assets/podprofile_lex.png" />
    <div className="w-[69px] h-[82px] p-[5px] left-[5px] top-0 absolute justify-center items-center gap-2.5 inline-flex">
        <div className="w-[53px] h-[52px] relative"><img src="../assets/BackButton.svg"/></div>
    </div>
</div>
</div>
  )
}

export default App
