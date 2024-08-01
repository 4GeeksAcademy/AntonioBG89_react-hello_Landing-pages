import React from 'react'
import Card from './Card'

const Cards = () => {
    return (
        <div className="row d-flex justify-content-around" >
            <Card title="4Geeks Academy" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus tortor enim. In convallis felis augue, quis finibus nibh aliquet et. Aenean ultrices arcu et arcu ultricies, venenatis rutrum velit." />
            <Card title="Spain-PT-73" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus tortor enim. In convallis felis augue, quis finibus nibh aliquet et. Aenean ultrices arcu et arcu ultricies, venenatis rutrum velit." />
            <Card title="Clase React" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus tortor enim. In convallis felis augue, quis finibus nibh aliquet et. Aenean ultrices arcu et arcu ultricies, venenatis rutrum velit." />
            <Card title="Full Stack Developer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus tortor enim. In convallis felis augue, quis finibus nibh aliquet et. Aenean ultrices arcu et arcu ultricies, venenatis rutrum velit." />
        </div>
    )
}

export default Cards;