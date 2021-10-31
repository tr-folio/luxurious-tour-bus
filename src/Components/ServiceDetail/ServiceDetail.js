import { useParams } from "react-router";
import useServicesDb from "../../Hooks/useServicesDb";
import ConfirmBook from "../ConfirmBook/ConfirmBook";

const ServiceDetail = () => {
    const {id} = useParams();
    console.log(id)
    const services = useServicesDb();
    console.log(services);
    return (
        <div>
            <ConfirmBook id={id} services={services}></ConfirmBook>
        </div>
    );
}

export default ServiceDetail;