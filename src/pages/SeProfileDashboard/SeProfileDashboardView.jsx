import React, { useEffect, useState } from "react";
import SePrDashboardMenu from "../../components/SellerPDashboard/SePrDashboardMenu";
import SePrDashboardTopBar from "../../components/SellerPDashboard/SePrDashboardTopBar";
import { useParams } from "react-router-dom";
import axios from "axios";

const SeProfileDashboardView = () => {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState({});

  console.log("userDetails", userDetails);

  const LoadUserDetails = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/user/userDetails/${userId}`
      );
      setUserDetails(data);
    } catch (error) {
      console.log("error message", error.message);
    }
  };

  useEffect(() => {
    LoadUserDetails();
  }, [userId]);

  return (
    <div>
      <div className="flex py-12 w-full">
        <SePrDashboardMenu />
        <SePrDashboardTopBar userDetails={userDetails} />
      </div>
    </div>
  );
};

export default SeProfileDashboardView;
