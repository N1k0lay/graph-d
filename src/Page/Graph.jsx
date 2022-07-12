import React, {useEffect, useState} from 'react';
import {Col, Form, Row, Radio, Input, Space, InputNumber, Table, Button} from "antd";
import style from './Graph.module.css'


const Graph = () => {
    const [minX, setMinX] = useState(0);
    const [maxX, setMaxX] = useState(1);
    const [spanX, setSpanX] = useState(1);
    const [selectedFunc, setSelectedFunc] = useState(1);
    const [arrayX, setArrayX] = useState([]);
    const [arrayY, setArrayY] = useState([]);


    useEffect(()=> {
        if(spanX<1) {
            setSpanX(1);
        }
        if(spanX >= maxX) {
            setSpanX(maxX);
        }
    }, [spanX, maxX])

    useEffect(()=> {
        if(minX>=maxX) {
            setMinX(maxX-1);
        }
    }, [minX, maxX])

    useEffect(() => {
        console.log('useEffect');
        setArrayX([]);
        for (let i = minX; i <= maxX; i = i + spanX) {
            setArrayX(oldArray => [...oldArray, i]);
        }

    }, [minX, maxX, spanX])


    useEffect(()=> {
        setArrayY([]);
        for (let i = 0; i < arrayX.length; i++) {
            setArrayY(oldArray => [...oldArray, arrayX[i] * 2]);
        }
    }, [arrayX])


    function formSetup(minX, setMinX, maxX, setMaxX, spanX, setSpanX) {
        return  <form>
            <label htmlFor="minX">Min: {minX}</label>
            <input type="number" min={0} id='minX' value={minX} onChange={(e) => setMinX(Number(e.target.value))}/>
            <label htmlFor="maxX">Max: {maxX}</label>
            <input type="number" min={0} id='maxX' value={maxX} onChange={(e) => setMaxX(Number(e.target.value))}/>
            <label htmlFor="spanX">Шаг: {spanX}</label>
            <input type="number" min={1} id='spanX' value={spanX} onChange={(e) => setSpanX(Number(e.target.value))}/>

            <Button onClick={() => {
                console.log(`minX ${minX}; maxX ${maxX}; spanX ${spanX}; func ${selectedFunc}`);
                console.log(arrayX);
                console.log(arrayY);
            }}>Рассчитать</Button>
        </form>
    }

    return (
        <Row className={style.graph}>
            <Col span={6}>
                <div className={style.formData}>
                    {formSetup(minX, setMinX, maxX, setMaxX, spanX, setSpanX)}
                </div>
            </Col>
            <Col span={18}>
                <div className={style.bigTable}>
                    <table>
                        <tr>
                            {arrayX.map(n => {
                                return <th>{n}</th>
                            })}
                        </tr>
                        <tr>
                            {arrayY.map(n => {
                                return <th>{n}</th>
                            })}
                        </tr>
                    </table>
                </div>
            </Col>
        </Row>
    )
};

export default Graph;