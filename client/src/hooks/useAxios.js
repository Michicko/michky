import {useState, useEffect, useCallback} from 'react';
import axios from "axios";

const useAxios = (displayAlert) => {
   
	const handleRequest = async (config) => {
		const content = config.multi
			? { "Content-Type": "multipart/form-data" }
			: "";
			try {
				const res = await axios({
					method: config.method,
					url: config.url,
					data: config.data,
					headers: content,
				});
        return res;
      } catch (error) {
				if (error.response) {
					displayAlert(true, "error", error.response.data.message);
					console.log(error);
				} else if (error.request) {
					console.log(error.request);
				} else {
					console.log(error);
					console.log("Error", error.message);
					displayAlert(true, "error", error.message);
				}
			}
		};

  return {handleRequest };
}
 
export default useAxios;