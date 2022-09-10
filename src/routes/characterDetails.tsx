import { CharacterDetails } from "components";
import { useParams } from "react-router-dom";

export default function CharactersPage(){
    const { id } = useParams();
    return (
        id?<CharacterDetails id={+id} />:<h1>Not Found</h1>
    )
}