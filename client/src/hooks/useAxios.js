import axios from "axios";
import { useProjectsContext } from "../contexts/projects_context";

const useAxios = () => {
	const {displayAlert} = useProjectsContext();
   
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
					displayAlert("error", error.response.data.message);
					console.log(error);
				} else if (error.request) {
					console.log(error.request);
				} else {
					console.log(error);
					console.log("Error", error.message);
					displayAlert("error", error.message);
				}
			}
		};

  return {handleRequest };
}
 
export default useAxios;