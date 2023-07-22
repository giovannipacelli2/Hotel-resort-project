import { createClient } from "contentful"; 

export default createClient({
    space: process.env.REACT_APP_API_SPACE ? process.env.REACT_APP_API_SPACE : REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN ? process.env.REACT_APP_ACCESS_TOKEN : REACT_APP_ACCESS_TOKEN,
    
});