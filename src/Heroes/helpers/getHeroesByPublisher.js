import { heroes } from "../data/heroes";



export const getHeroesByPublisher = ( publisher ) => {

        const validPublishers = ["DC Comics", "Marvel Comics"];
        if ( !validPublishers.includes(publisher)){
            throw new Error ( `${ publisher } No es valido el dato`)
        }

  
    return heroes.filter(heroe => heroe.publisher === publisher )
}
