import { data } from "./data"
//import axios from "axios"
let cities = []

function percentage(votes, presenca) {
    return ((votes / presenca) * 100).toFixed(2)
}

function voting({ cityId, candidateId, votes }, i, j, arrcit, arrheroes) {
    if (cityId === arrcit[i].id && candidateId === arrheroes[j].id) {
        return votes;
    }
    else {
        return 0;
    }
}

async function getData() {
    // let objcit = await axios.get('http://localhost:3001/cities')
    // let objheroes = await axios.get('http://localhost:3001/candidates')
    // let objvoter = await axios.get('http://localhost:3001/election')
    // let arrcit = [...objcit.data]
    // let arrheroes = [...objheroes.data]
    // let arrvoter = [...objvoter.data]

    let arrcit = [...data.cities]
    let arrheroes = [...data.candidates]
    let arrvoter = [...data.election]

    for (let i = 0; i < 5; i++) {

        arrcit[i].heroes = JSON.parse(JSON.stringify(arrheroes))

        for (let j = 0; j < 13; j++) {
            let votes = 0

            for (let k = 0; k < arrvoter.length; k++) {
                votes += voting(arrvoter[k], i, j, arrcit, arrheroes)
            }

            arrcit[i].heroes[j]['votes'] = votes;
            arrcit[i].heroes[j]['percentage'] = percentage(votes, arrcit[i].presence)
        }
        arrcit[i]["id2"] = i
        let part = 0
        arrcit[i].heroes.forEach(hero => {
            if (!hero.votes == 0) { part++ }
        });
        arrcit[i]["participants"] = part
        arrcit[i].heroes = arrcit[i].heroes.sort((a, b) => b.votes - a.votes)
        cities.push(arrcit[i])
    }
    return cities
}


export { getData }
