import React,{useState,useEffect} from "react";
import ServiceDetailsView from "./ServiceDetailsView";
import { useParams } from "react-router-dom";
import { readGig } from "../../api";
import Loading from "./Loading";

const ServiceDetails = () =>{

    const params = useParams();
    const [gig,setGig] = useState(null);

    console.log("gigID",params.gigID)

    useEffect(()=>{
        readGig(params.gigID).then((resp)=>{
            if(resp && resp.error)
                {
                    console.log(resp.error)
                }
                else
                {
                    setGig(resp.data)
                }
        })
    },[params.gigID])
    console.log(gig)
    return(
        gig ?
        <ServiceDetailsView gig={gig} /> : <Loading />
    )
}


export default ServiceDetails;