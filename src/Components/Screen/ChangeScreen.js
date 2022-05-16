import StartScreen from '../StartScreen/StartScreen';
import DeckScreen from '../DeckScreen/DeckScreen';
import React from 'react';

export default function ChangeScreen() {
    const [screen, setScreen] = React.useState(false)

    return (
        <> 
        {
            !screen?     
            <StartScreen screen={screen} setScreen={() => setScreen(true)}/> : 
            <DeckScreen /> 
        }
        </>
    )
}

