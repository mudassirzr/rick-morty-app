import { EpisodeDetails } from "components";
import { useParams } from "react-router-dom";

export default function EpisodesPage(){
    const { id } = useParams();
    return (
        id?<EpisodeDetails id={+id} />:<h1>Not Found</h1>
    )
}