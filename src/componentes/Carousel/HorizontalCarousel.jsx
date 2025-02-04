import React, { useRef } from 'react';
import './HorizontalCarousel.css'

function HorizontalCarousel({ children }) {
    const containerRef = useRef(null);

    const scrollLeft = () => {
        containerRef.current.scrollLeft -= 100; // Ajuste a quantidade de rolagem
    };

    const scrollRight = () => {
        containerRef.current.scrollLeft += 100; // Ajuste a quantidade de rolagem
    };

    return (
        <div>
            <div>
                <button onClick={scrollLeft}>Anterior</button>
                <button onClick={scrollRight}>Próximo</button>
            </div>
            <div className="carrossel-horizontal" ref={containerRef}>
                {children} {
                    destacks?.length > 0 && destacks.map((card, index) => (
                        <div key={index} className="albuns_list_cards">{
                            /* ############### Render Your favorite artists ####################*/
                            <button className="card" key={destacks.id}>
                                <img src={destacks.imgUrl} alt={destacks.name} />
                                <h4>{destacks.name}</h4>
                            </button>
                        }</div>
                ))}
            </div>
        </div>
    );
}

export default HorizontalCarousel;