import { useEffect, useState } from 'react';
 
const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/kibria-khandaker/API-Service-items-blog/master/servicesData.Json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return [services, setServices];
}

export default useServices;