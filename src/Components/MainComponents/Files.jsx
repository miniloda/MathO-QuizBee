import React, { useState } from 'react';
export default function Files (){
    return(
        <div className = "container w-full mt-3">
            <PDF />
        </div>
    )
}

const PDF = ({source}) => {
    const [embedURL] = useState(source);
    return(
        <div>
            <iframe src="https://drive.google.com/file/d/1-ckViPebZg0DeJvTHtfjt6tn_g690q0_/view?usp=sharing" width="640" height = "480"></iframe>
        </div>

    )
}