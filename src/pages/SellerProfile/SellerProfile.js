import React ,{useState,useEffect} from "react";
import SellerProfileView from "./SellerProfileView";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../../api";
import { readAllGigs } from "../../api";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { userDataActions } from "../../store/UserData";

const SellerProfile = () =>{

    const [user,setUser] = useState(null);
    const [allGigs,setAllGigs] = useState([])

        const params = useParams()
        console.log(params.userID)
        const dispatch = useDispatch();

        useEffect(()=>{
            
            getUserDetails(params.userID).then((resp)=>{
                if(resp && resp.error)
                {
                    console.log(resp.error)
                }
                else
                {
                    setUser(resp.data)

                    dispatch(userDataActions.getUserData({user: resp.data}))
                }
            })


            readAllGigs(params.userID).then((resp)=>{
                if(resp && resp.error)
                {
                    console.log(resp.error)
                }
                else
                {
                    console.log("reading all",resp.data)
                    setAllGigs(resp.data)
                }
            })
            

        
        },[params.userID])

        console.log(user)
        
        // user && dispatch(userDataActions.getUserData({user}))

    return(
        // user && (<SellerProfileView user={user} userID={params.userID} allGigs={allGigs}/>)
        (user && allGigs) ? <SellerProfileView user={user} userID={params.userID} allGigs={allGigs}/> : <Loading />
        
    )
}

export default SellerProfile;