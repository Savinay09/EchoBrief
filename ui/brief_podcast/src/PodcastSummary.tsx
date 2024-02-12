import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown'

/**
Pod Summary profile pic
    <img className="w-[375px] h-40 rounded-tl-[32px] rounded-tr-[32px]" src="https://via.placeholder.com/375x160" />
    <img className="w-[375px] h-40 rounded-tl-[32px] rounded-tr-[32px]" src="../assets/PodcastSummaryProfile.png" />

Ai Icon
        <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex" />
        <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex"><img src="../assets/AiIcon.svg"/></div>

Language dropdown arrow
        <div className="w-5 h-5 left-[109px] top-[8px] absolute" />
        <div className="w-5 h-5 left-[109px] top-[8px] absolute"><img src="../assets/LanguageDropdownArrow.svg"/></div>

Play summary button
        <div className="w-[310px] h-[72px] left-[21px] top-[486px] absolute justify-between items-center inline-flex">
            <div className="w-[54px] h-[54px] relative"/>
        </div>

            <div className="w-[310px] h-[72px] left-[33px] top-[400px] absolute justify-center items-center inline-flex">
                <div className="w-[54px] h-[54px] relative"><img src="../assets/PlaySummaryButton.svg"/></div>
            </div>

Back button
        <div className="w-[53px] h-[52px] relative" />
        <div className="w-[53px] h-[52px] relative"><img src="../assets/BackButton.svg"/></div>

<!--
            <div className="w-[101px] h-[13px] left-[15px] top-[6px] absolute text-black text-[15px] font-semibold font-['Poppins']">English</div>
            <div className="w-5 h-5 left-[109px] top-[8px] absolute"><img src={host+"/assets/LanguageDropdownArrow.svg"}/></div>
-->
*/



function PodcastSummary() {
  const [summaryData, setSummaryData] = useState(
    {
      'english': {
        'text': "",
        'audio': ""
      },
      'spanish': {
        'text': "",
        'audio': ""
      },
      'chinese': {
        'text': "",
        'audio': ""
      }
    }
  )

  const [summary, setSummary] = useState('')

  const { podcastId, episodeId } = useParams()
  const host='http://localhost:5173/'

  useEffect( () => {
    async function fetchData() {
      const {data: summary_data} = await axios.get('http://localhost:8080/summary/'+podcastId+'/'+episodeId);
      setSummaryData(summary_data)
      setSummary(summary_data['english']['text'])
    }
    fetchData()
  }, [podcastId, episodeId]);

  let navigate = useNavigate();
  const routeChange = (path) =>{
    navigate(path);
  }

  function TranslationDropdown() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Translate
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSummary(summaryData['english']['text'])} >English</Dropdown.Item>
          <Dropdown.Item onClick={() => setSummary(summaryData['spanish']['text'])} >Spanish</Dropdown.Item>
          <Dropdown.Item onClick={() => setSummary(summaryData['chinese']['text'])} >Chinese</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  return (
<div className="w-screen h-screen p-2.5 bg-slate-400 flex-col justify-center items-center gap-2.5 inline-flex">
<div className="w-[375px] h-[812px] relative bg-white rounded-[32px]">
    <div className="w-[375px] h-[79px] left-0 top-[733px] absolute">
        <div className="w-[375px] h-[79px] left-0 top-0 absolute bg-white rounded-bl-[32px] rounded-br-[32px] shadow" />
        <div className="w-[315px] h-[43px] left-[30px] top-[12.51px] absolute justify-between items-center inline-flex">
            <div className="flex-col justify-start items-center gap-1 inline-flex">
                <div onClick={() => routeChange(`/`)} className="w-6 h-6 px-[2.50px] py-0.5 justify-center items-center inline-flex"><img src = {host+"/assets/HomeButtonIcon.svg"}/></div>
                <div className="w-[52px] text-center text-slate-500 text-[10px] font-semibold font-['Poppins']">Home</div>
            </div>
            <div className="flex-col justify-start items-center gap-1 inline-flex">
                <div className="w-6 h-6 pl-[4.81px] pr-[4.85px] pt-[2.81px] pb-[2.78px] justify-center items-center inline-flex"><img src = {host+"/assets/ProfileButtonIcon.svg"}/></div>
                <div className="w-[52px] text-center text-stone-300 text-[10px] font-medium font-['Poppins']">Profile</div>
            </div>
        </div>
    </div>
    <div className="w-[375px] h-[727px] left-0 top-0 absolute rounded-tl-[32px] rounded-tr-[32px]">
        <div className="w-40 h-[29px] left-[48px] top-[200px] absolute text-neutral-800 text-lg font-semibold font-['Poppins']">Summarization<br/></div>
        <img className="w-[375px] h-40 left-0 top-0 absolute rounded-tl-[32px] rounded-tr-[32px]" src={host+"/assets/PodcastSummaryProfile.png"}/>
        <div className="w-[356px] left-[7px] top-[168px] absolute text-neutral-800 text-base font-medium font-['Poppins'] leading-snug">#5 - Statistical Learning</div>
        <div className="w-8 pl-0.5 pt-[3px] pb-0.5 left-[7px] top-[196px] absolute bg-neutral-700 rounded-[10px] flex-col justify-center items-center inline-flex">
            <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex"><img src={host+"/assets/AiIcon.svg"}/></div> 
        </div>
        <div className="w-[138px] h-[34px] left-[213px] top-[197px] absolute bg-zinc-300 rounded-[5px]">
            {TranslationDropdown()}
        </div>
        <div className="w-[375px] h-[485px] left-0 top-[242px] absolute bg-neutral-600">
            <div className="w-80 h-[319px] left-[22px] top-[20px] absolute flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-80 h-[327px] text-white text-lg font-semibold font-['Poppins'] leading-[25.20px]">{summary}</div>
            </div>
            <div className="w-[310.70px] h-[43.92px] left-[22.65px] top-[357.08px] absolute">
                <div className="w-[34.64px] h-[23.25px] left-0 top-[20.67px] absolute text-white text-xs font-medium font-['Poppins']">23:23</div>
                <div className="w-[43.30px] h-[23.25px] left-[267.39px] top-[20.67px] absolute text-right text-white text-xs font-medium font-['Poppins']">1:20:53</div>
                <div className="w-[310.70px] h-[15.50px] left-0 top-0 absolute">
                    <div className="w-[310.70px] h-[5.17px] left-0 top-[5.17px] absolute bg-white bg-opacity-25 rounded-[20px]" />
                    <div className="w-[110.42px] h-[5.17px] left-0 top-[5.17px] absolute bg-white rounded-[20px]" />
                    <div className="w-[12.99px] h-[15.50px] left-[103.93px] top-[-0px] absolute bg-white rounded-full" />
                </div>
            </div>
            <div className="w-[310px] h-[72px] left-[33px] top-[400px] absolute justify-center items-center inline-flex">
                <div className="w-[54px] h-[54px] relative"><img src={host+"/assets/PlaySummaryButton.svg"}/></div>
            </div>
        </div>
    </div>
    <div className="w-[69px] h-[82px] p-[5px] left-[5px] top-[12px] absolute opacity-80 justify-center items-center gap-2.5 inline-flex">
        <div onClick={() => routeChange(`/podcast/${podcastId}`)} className="w-[53px] h-[52px] relative"><img src={host+"/assets/BackButton.svg"}/></div>
    </div>
</div>
</div>
  )
}

export default PodcastSummary
