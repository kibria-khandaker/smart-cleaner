import { useEffect, useState } from 'react';

const useReviews = () => {
    const [customerReviews, setCustomerReviews] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/kibria-khandaker/api_for_watch_review/master/review-data.json')
        .then(res=>res.json())
        .then(data=>setCustomerReviews(data))
    },[])

    return [customerReviews, setCustomerReviews];
}

export default useReviews;