import React from 'react';
import './Home.css';

function GiftList (props) {

    let newGift = props.setgift;

    let newGiftElement = newGift.map(gift => {
        <tr key={gift.id}>
                        <td>{gift.name}</td>
                        <td>{gift.source}</td>
                        <td>{gift.price}$</td>
           </tr>
    });

    // let newGiftElement = newGift.map(gift => {
    //     <li key={gift.id}>{gift.name} {gift.source} {gift.price}</li>
                        
        
    // });

    // let newGiftElement = 
    //     <tr key={newGift.id}>
    //                 <td>{newGift.name}</td>
    //                 <td>{newGift.source}</td>
    //                 <td>{newGift.price}$</td>
    //     </tr>

        console.log(props.setgift)

    return(
        <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Where
                        </th>
                        <th>
                            How much
                        </th>
                    </tr>
                </thead>

                <tbody>
                    
              
                <tr>
                {newGiftElement}   
           </tr>
                    
                </tbody>
            </table>

        // <div className="name-list">
        //     <ul>
        //         {newGift.map(gift => gift.name)}
                
        //     </ul>
        // </div>

    )
}

export default GiftList;