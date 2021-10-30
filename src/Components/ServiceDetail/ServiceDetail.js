import { useParams } from "react-router";
import useFakeServicesDb from "../../Hooks/useFakeServicesDb";
import ConfirmBook from "../ConfirmBook/ConfirmBook";

const ServiceDetail = () => {
    const {id} = useParams();
    console.log(id)
    const services = useFakeServicesDb();
    console.log(services);
    return (
        <div>
            <ConfirmBook id={id} services={services}></ConfirmBook>
        </div>
    );
}

export default ServiceDetail;