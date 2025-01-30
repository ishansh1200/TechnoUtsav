import React from 'react'
import Card from './ui/Card';
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "./ui/text-reveal-card";

function Sponsers() {
    return (
        <div className='pt-[5%] h-screen w-full  text-white bg-opacity-50'>
            
        <Card className="custom-spotlight-card h-96 mx-[27%]  my-10 bg-opacity-50" 
            spotlightColor="rgba(0, 229, 255, 0.2) sm:px-24 lg:px-32">
                    <TextRevealCardTitle className= "text-center text-3xl font-bold mb-12 bg-opacity-50"> 
                    Sponsers
                    </TextRevealCardTitle>
                    <TextRevealCard
                    text="Sponsers coming soon"
                    revealText="Sponsers coming soon "
                    className="text-center text-2xl bg-opacity-50"
                    >

                    </TextRevealCard>
                    
        </Card>
        
        </div>
    )
}

export default Sponsers
