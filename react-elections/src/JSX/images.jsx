
import ironman from '../img/ironMan.png'
import blackwidow from '../img/blackWidow.png'
import superman from '../img/superman.png'
import captainmarvel from '../img/captainMarvel.png'
import antman from '../img/antman.png'
import greenlantern from '../img/greenLantern.png'
import spiderman from '../img/spiderMan.png'
import aquaman from '../img/aquaman.png'
import batman from '../img/batman.png'
import wonderwoman from '../img/wonderWoman.png'
import flash from '../img/flash.png'
import thor from '../img/thor.png'
import captainamerica from '../img/captainAmerica.png'


export const images = { "ironman": ironman, "blackwidow": blackwidow, "superman": superman, "captainmarvel": captainmarvel, "thor": thor, "greenlantern": greenlantern, "spiderman": spiderman, "captainamerica": captainamerica, "aquaman": aquaman, "batman": batman, "wonderwoman": wonderwoman, "antman": antman, "flash": flash }

export function imageName(username) {
    let heroImage = ''
    Object.entries(images).map(hero => {
        if (hero[0] === username) { heroImage = hero[1]}
        return heroImage
    })
    return heroImage
}