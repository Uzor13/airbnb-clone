import React from 'react';
import Link from "next/link";

const House = (props) => {

    return (
        <Link href="/houses/[id]" as={`/houses/${props.id}`}>
            <a>
                <img src={props.picture} width="100%" alt={props.title}/>
                <p>
                    {props.type} - {props.town}
                </p>
                <p>{props.title}</p>
            </a>
        </Link>
    );
};

export default House;
