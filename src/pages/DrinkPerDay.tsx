import React from 'react'
import { useState } from "react";
const DrinkPerDay = () => {

    const [mode, setMode] = useState('light');
    const [Weight, setWeight] = useState<number>(0);


    const handleChangeMode = (e) => {
        setMode(e.target.value);
    };
    const onChangeWater = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(+event.target.value)
        console.log((Weight * 2.2) * (30 / 2))
    }
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("Submitted")
    }

    if (Weight === 0) {
        return <>
            <div className={`app ${mode}`}>
                <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
                <form onSubmit={onSubmit}>
                    <div>
                        <h1>x มล.</h1>
                    </div>
                    <div>
                        <input style={{ width: "300px", height: "30px", fontSize: 20, textAlign: 'center' }} placeholder="น้ำหนักของคุณกิโลกรัม" type="text" id="Weight" name="name" onChange={onChangeWater} />
                    </div>

                </form>
                <div className='containerDD'>
                    <select value={mode} onChange={handleChangeMode}>
                        <option value="light">Light Mode</option>
                        <option value="dark">Dark Mode</option>
                    </select>
                </div>
            </div>
        </>
    }
    else {
        return (

            <>
                <div className={`app ${mode}`}>
                    <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
                    <form onSubmit={onSubmit}>
                        <div>
                            <h1>{(Weight * 2.2) * (30 / 2)} มล.</h1>
                        </div>
                        <div>
                            <input style={{ width: "300px", height: "30px", fontSize: 20, textAlign: 'center' }} placeholder="น้ำหนักของคุณกิโลกรัม" type="text" id="Weight" name="name" onChange={onChangeWater} />
                        </div>

                    </form>
                    <div className='containerDD'>
                        <select value={mode} onChange={handleChangeMode}>
                            <option value="light">Light Mode</option>
                            <option value="dark">Dark Mode</option>
                        </select>
                    </div>

                </div>
            </>
        )
    }


}
export default DrinkPerDay