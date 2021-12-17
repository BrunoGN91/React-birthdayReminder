import React from "react"



function List ({people}) {
    return (
        <>
        {people.map((person) => {
            const {id, name, age, image} = person;
            return (
                <article key={id} className="person">
                    <img className="profile-image"src={image} alt=""/>
                    <div className="profile-data">
                        <h4>{name}</h4>
                        <h4>Age: {age}</h4>
                    </div>
                </article>
            )
        })}
        </>
    )
};

export default List