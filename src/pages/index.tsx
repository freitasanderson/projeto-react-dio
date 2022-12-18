import { useState } from 'react';

const Teste = () => {

    const [name, setName] = useState('Anderson');

    const handleChangeName = () => {
        setName(prev => prev === 'Anderson' ? 'Dinho' : 'Anderson')
    }


    console.log('Renderizou')
    
    return (
        <div>
            <p>
                {name}
            </p>
            <button onClick={handleChangeName}>Alterar</button>
        </div>
    )
}

export { Teste };