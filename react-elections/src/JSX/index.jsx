import { useEffect, useState } from "react";
import { cidades } from "../JS/API";
import '../index.css'
import { imag } from "./images"

export function Name() {
    const [idd, setIdd] = useState(0)
    const [cityselec, setCityselec] = useState({ ...cidades[0] })

    useEffect(() => {
        setCityselec({ ...cidades[idd] })
    }, [idd]);

    function hv({ name, voto, percentual, username }, i) {
        let texto = 'Não Eleito'
        let sty = 'text-orange-600 flex justify-around'

        if (i == 0) { texto = "Eleito"; sty = 'text-green-600 flex justify-around' }
        if (!voto == 0) {
            return (
                <div className="grid-cols-2 shadow-lg  justify-around p-5   items-center ">
                    <div className="flex justify-around">
                        <div className="">
                            <img className="h-20 w-20 rounded-full" alt="imagem de heroi" src={imag(username)}></img>
                        </div>
                        <div className="pb-8 ">
                            <div className={sty}>{percentual}%</div>
                            <div >{voto.toLocaleString('PT')} votos</div>
                        </div>
                    </div>
                    <div className="font-bold flex justify-around pt-2" >{name}</div>
                    <div className={`${sty} py-2`}> {texto} </div>
                </div>
            )
        }
    }

    return (
        <div className="items-center ">
            <div className="flex items-center justify-center mb-2">
                <select className="bg-white shadow-md rounded-full" onChange={x => setIdd(x.target.value)}>{cidades.map(obj => <option value={obj.id2}>{obj.name}</option>)}</select>
            </div>
            <div className="border-2 border-grey-900 p-4">
                <div className="flex-row px-4">
                    <h2 className="flex justify-center font-extrabold mt-3 ">Eleição em {cityselec.name}</h2>
                    <div className="flex justify-center m-3">
                        <div className="flex"><h3 className="font-bold mx-3">Total de Eleitores:</h3> {cityselec.votingPopulation.toLocaleString('PT')}</div>
                        <div className="flex"><h3 className="font-bold mx-3">Abstenção:</h3> {cityselec.absence.toLocaleString('PT')}</div>
                        <div className="flex"><h3 className="font-bold mx-3">Comparecimento: </h3>{cityselec.presence.toLocaleString('PT')}</div>
                    </div>
                    <div className=" flex font-semibold justify-center"> {cityselec.participantes} candidatos</div>
                    <div className="grid grid-cols-4 gap-4 ">
                        {cityselec.herois.map((H, i) => { return <> {hv(H, i)} </> })}
                    </div>
                </div>
            </div>
        </div >
    );
}


