import React, { useState, useEffect } from 'react';

function Github() {
    const [data, setData] = useState({}); // Initialize as empty object

    useEffect(() => {
        fetch(`https://api.github.com/users/hiteshchoudhary`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setData(res); // Save response to state
            })
            .catch(error => console.log("Github URL NOT Working:", error));
    }, []);

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github ID : {data.id}
            <br />
            Github Name : {data.name}
            <br />
            Github Followers : {data.followers}
            <br/>

            <img src={data.avatar_url} alt="Git Picture" width={300} />

        </div>
    );
}

export default Github;
