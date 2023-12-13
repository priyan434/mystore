import React, { useEffect, useState } from "react";
import Users from "./Summary/Users";
import Linechart from "./Summary/LineChart";
import axios from "axios";
import { setheader } from "../../Features/api";
import moment from "moment";

const Summary = () => {
  const [RT, setRT] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const res = await axios.get(
          "http://localhost:5000/api/stats",
          setheader()
        );
        // console.log(res.data);
        setRT(res.data);
      }
      fetchData();
    } catch (error) {
      // Handle error
    }
  }, []);

  return (
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      {/* Users Component */}
      <Users />

      <div className="flex items-center justify-center mt-40">
        <div className="flex flex-col  rounded w-full bg-gray-50 h-28 dark:bg-gray-800 p-0 items-center">
          <Linechart />
          <p className="font-bold">weekly Transcations </p>
        </div>

    
      </div>
    {/* Order Details */}
    <div className="overflow-x-auto border border-gray-900 mt-72">
          <table className="min-w-full divide-y divide-gray-900">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                  Name
                </th>
                <th className="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                  Total
                </th>
                <th className="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {RT.length > 0 ? (
                RT.map((order, i) => (
                  <tr key={i} className="bg-white dark:bg-gray-800">
                    <td className="py-2 px-4 border border-gray-900">
                      {order.shipping.name}
                    </td>
                    <td className="py-2 px-4 border border-gray-900">
                      {order.total / 100}
                    </td>
                    <td className="py-2 px-4 border border-gray-900">
                    {moment(order.createdAt).fromNow()}

                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="py-4 text-center text-gray-500 dark:text-gray-400"
                  >
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      {/* Additional Content */}
      <div>{/* Additional content goes here */}</div>
    </div>
  );
};

export default Summary;
