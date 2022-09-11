import { LocationDetails } from "components";
import { useParams } from "react-router-dom";

export default function LocationsPage(){
    const { id } = useParams();
    return (
        id?<LocationDetails id={+id} />:<h1>Not Found</h1>
    )
}