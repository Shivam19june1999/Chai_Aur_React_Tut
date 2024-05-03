import { createContext, useContext } from "react";
export const DetailContext=createContext({
	detail:"....",
	setDetail:()=>{}
});
export const DetailContextProvider=DetailContext.Provider;
export default function useDetail(){
	return useContext(DetailContext);
}