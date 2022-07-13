import React, {useEffect, useState} from 'react';
import {Col, Row} from "antd";
import style from './Graph.module.css'
import FormGraph from "../components/FormGraph";
import MyMultilineChart from "../components/MyMultilineChart";


const Graph = () => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1);
    const [span, setSpan] = useState(1);
    const [selectedFunc, setSelectedFunc] = useState([]);
    const [arrayX, setArrayX] = useState([]);
    const [arrayY, setArrayY] = useState([]);
    const [arrayY1, setArrayY1] = useState([]);
    const [arrayY2, setArrayY2] = useState([]);
    const [arrayY3, setArrayY3] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    //FIXME: Исправить работу, добавить проверку заполненности массива
    const createDataForD3 = (x, y, name, color) => {
        let arrayFunc = []; //Массив всех функций
        for (let i = 0; i < y.length; i++) {
            let arrayCoordinates = [];
            for (let j = 0; j < x.length; j++) {
                arrayCoordinates[j] = {x: x[j], y: y[i][j]};
            }
            arrayFunc[i] = {name: name[i], color: color[i], items: arrayCoordinates}
        }
        return arrayFunc;
    }

    //Размеры графика
    const dimensions = {
        width: 600,
        height: 300,
        margin: {
            top: 30,
            right: 30,
            bottom: 30,
            left: 60
        }
    };

    //Условия для формы
    useEffect(() => {
        if (span < 1) {
            setSpan(1);
        }
        if (span >= max) {
            setSpan(max);
        }
    }, [span, max])
    //Условия для формы
    useEffect(() => {
        if (min >= max) {
            setMin(max - 1);
        }
    }, [min, max])

    //Заполнение массива arrayX
    useEffect(() => {
        setIsLoading(true);
        setArrayX([]);
        for (let i = min; i <= max; i = i + span) {
            setArrayX(oldArray => [...oldArray, i]);
        }
        setIsLoading(false);
    }, [min, max, span])

    //Формулы
    useEffect(() => {
        if (!isLoading) {
            setIsLoading(true);
            if (selectedFunc.includes('f1')) {
                document.querySelector('.funcList').textContent = 'F1 ON'
                setArrayY1([]);
                for (let i = 0; i < arrayX.length; i++) {
                    setArrayY1(oldArray => [...oldArray, Number(arrayX[i] * arrayX[i] - (2 * arrayX[i]) - 1)]);
                    console.log(Number(arrayX[i] * arrayX[i] - (2 * arrayX[i]) - 1));
                }
            } else {
                setArrayY1([]);
            }
            if (selectedFunc.includes('f2')) {
                document.querySelector('.funcList').textContent = 'F2 ON'
                setArrayY2([]);
                for (let i = 0; i < arrayX.length; i++) {
                    setArrayY2(oldArray => [...oldArray, Number(Math.pow(arrayX[i], 3))]);
                }
            } else {
                setArrayY2([]);
            }
            if (selectedFunc.includes('f3')) {
                document.querySelector('.funcList').textContent = 'F1 ON'
                setArrayY3([]);
                for (let i = 0; i < arrayX.length; i++) {
                    setArrayY3(oldArray => [...oldArray, Number(1 / arrayX[i])]);
                }
            } else {
                setArrayY3([]);
            }

            setIsLoading(false);
        }
    }, [selectedFunc])

    //Добавление значений Y в общий массив ArrayY
    useEffect(() => {

    }, [selectedFunc])

    return (
        <Row className={style.graph}>
            <Col span={6}>
                <div className={style.formData}>
                    <FormGraph setMax={setMax} setMin={setMin} setSelectedFunc={setSelectedFunc} setSpan={setSpan}/>
                </div>
            </Col>
            <Col span={18}>
                <p className='funcList'></p>
                <div className={style.d3svg}>
                    <MyMultilineChart
                        data={createDataForD3(arrayX, [arrayY1, arrayY2, arrayY3], ['func1', 'func2', 'func3'], ['#de0000', '#00cbde', '#30de00'])
                        }
                        dimensions={dimensions}
                    />
                </div>
                <div className={style.bigTable}>
                    <table>
                        <thead>
                        <tr>
                            {arrayX.map(n => {
                                return <th key={n}>{n}</th>
                            })}
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            {arrayY1.map(n => {
                                return <th key={`th${n}`}>{n}</th>
                            })}
                        </tr>
                        <tr>
                            {arrayY2.map(n => {
                                return <th key={`th${n}`}>{n}</th>
                            })}
                        </tr>
                        <tr>
                            {arrayY3.map(n => {
                                return <th key={`th${n}`}>{n}</th>
                            })}
                        </tr>
                        </tbody>
                    </table>
                </div>
            </Col>
        </Row>
    )
};

export default Graph;