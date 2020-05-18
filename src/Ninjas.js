import React from 'react';
import './Ninjas.css';


const Ninjas = ({ninjas, deleteNinja}) => {
    // console.log(this.props);
    // const { name, age, belt } = this.props;
    // const { ninjas } = props;

    // One way to do conditional statement and render the outpus:
    // const ninjaList = ninjas.map(ninja => {
    //     if (ninja.age > 20) {
    //         return (
    //             <div className="ninja" key={ninja.id}>
    //             <div>Name: {ninja.name}</div>
    //             <div>Age: {ninja.age}</div>
    //             <div>Belt: {ninja.belt}</div>
    //         </div>
    //         )
    //     } else {
    //         return null
    //     }
    // })

// Second way to do confitional statement and rendering the output
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
            <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
            </div>
        ) : null;
    });


    return(
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}

export default Ninjas