import React , {useState, createContext} from 'react';

export const LoadingContext = createContext();


export default function LoadingProvider(props){

const {children} = props;

const [isLoading,setIsLoading] = useState();


return (<LoadingContext.Provider value={{setIsLoading,isLoading}}>{children}</LoadingContext.Provider>)

}