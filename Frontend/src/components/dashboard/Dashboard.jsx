import { useEffect } from "react";
import axios from "axios";
import { axiosInstance } from "../../axiosinstance";

export const Dashboard = () => {
  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axiosInstance.get("/protected-view/");
        console.log("Success in fetching data: ", response.data);
      } catch (error) {
        console.log(`Error in fetching data: ${error}`);
      }
    };
    fetchProtectedData();
  }, []);
  return (
    <div>
      <h1>Dashboard...</h1>
    </div>
  );
};
