import React, { useState } from 'react';
import styles from './Rating.module.css';

const Rating = (props)=> {

    const [rank, setRank] = useState(props.rank || 0);

    const onUpdate = (value)=>{
        console.log('VALUE', value);
        setRank(value);

        if(props.displayNote) {
            props.displayNote(value);
        }
    }

    const stars = [0,1,2,3,4].map((pos, i)=> {
        let css = (pos<rank) ? styles.orange : styles.gray;
        return <span className={css} key={i} onClick={()=>onUpdate(i+1)}>&#9733;</span>
    });

    /*let stars =[];
    for(let j=0; j<5; j++){
        let css = (j<rank) ? styles.orange : styles.gray;
        stars.push(<span className={css} key={j} onClick={()=>onUpdate(j+1)}>&#9733;</span>);
    }*/

    return (
        <div className={styles.rating}>
            {/* Number 0 to reset all stars */}
            <span onClick={()=>onUpdate(0)}>0</span>

            {/* Display starts */}
            { stars }
        </div>   
    );

}

export default Rating;