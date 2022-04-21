import { useEffect, useState } from "react";
import { getData } from "../JS/API";
import '../index.css'
import { imageName } from "./images"
import ClipLoader from "react-spinners/ClipLoader";
import { FcRemoveImage } from "react-icons/fc";


const style = { height: "150px", width: "150px", marginBottom: "20px" }
export function Home() {
    const [idd, setIdd] = useState(0)
    const [cityselec, setCityselec] = useState('')
    const [start, setStart] = useState(false)
    const [cities, setCities] = useState([])

    useEffect(() => {
        let helper = []
        if (cities.length === 0) {
            async function api() {
                helper = await getData()
                setCities(helper)
                setCityselec(cities[idd])
            } api()
        } else {setCityselec(cities[idd])}

        
    }, [idd, start]);

    function candidates({ name, votes, percentage, username }, i) {
        let text = 'Não Eleito'
        let sty = 'text-orange-600 flex justify-around'

        if (i == 0) { text = "Eleito"; sty = 'text-green-600 flex justify-around' }
        if (!votes == 0) {
            return (
                <div key={`candidate${i}`} className="grid-cols-2 shadow-lg  justify-around p-5  items-center ">
                    <div className="flex justify-around">
                        <div className="">
                            <img className="h-20 w-20 rounded-full" alt="imagem de heroi" src={imageName(username)}></img>
                        </div>
                        <div className="pb-8 ">
                            <div className={sty}>{percentage}%</div>
                            <div >{votes.toLocaleString('PT')} votos</div>
                        </div>
                    </div>
                    <div className="font-bold flex justify-around pt-2" >{name}</div>
                    <div className={`${sty} py-2`}> {text} </div>
                </div>
            )
        }
    }
    if (cities === undefined || cityselec === '' || cityselec === undefined) {
        setTimeout(() => {
            if (start === true) {
                return (
                    <div className="flex flex-col items-center justify-center">
                        <FcRemoveImage style={style} />
                        Ative o backend
                    </div>
                )
            }
        }, 500);
        return (
            <div className="flex flex-col items-center justify-center"> <ClipLoader />
                {(() => { setTimeout(() => setStart(true), 500) })()}
            </div>
        )
    }

    return (
        <div className="items-center ">
            <div className="flex items-center justify-center mb-2">
                <select className="bg-white shadow-md rounded-full" onChange={evt => setIdd(evt.target.value)}>
                    {cities.map((obj, i) => <option key={`city${i}`} value={obj.id2}>{obj.name}</option>)}
                </select>
            </div>
            <div className="border-2 border-grey-900 p-4">
                <div className="flex-row px-4">
                    <h2 className="flex justify-center font-extrabold mt-3 ">Eleição em {cityselec.name}</h2>
                    <div className="flex justify-center m-3">
                        <div className="flex"><h3 className="font-bold mx-3">Total de Eleitores:</h3> {cityselec.votingPopulation.toLocaleString('PT')}</div>
                        <div className="flex"><h3 className="font-bold mx-3">Abstenção:</h3> {cityselec.absence.toLocaleString('PT')}</div>
                        <div className="flex"><h3 className="font-bold mx-3">Comparecimento: </h3>{cityselec.presence.toLocaleString('PT')}</div>
                    </div>
                    <div className=" flex font-semibold justify-center"> {cityselec.participants} candidatos</div>
                    <div className="grid grid-cols-4 gap-4 ">
                        {cityselec.heroes.map((H, i) => { return <> {candidates(H, i)} </> })}
                    </div>
                </div>
            </div>
        </div >
    );
}


