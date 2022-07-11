import React, {useEffect, useState} from 'react';
import {Col, Form, Row, Radio, Input, Space, InputNumber, Table, Button} from "antd";
import style from './Graph.module.css'


const Graph = () => {
    const [minX, setMinX] = useState(1);
    const [maxX, setMaxX] = useState(1);
    const [spanX, setSpanX] = useState(1);
    const [selectedFunc, setSelectedFunc] = useState(1);
    const [arrayX, setArrayX] = useState(['']);
    const [arrayY, setArrayY] = useState(['']);


    const spanCol = [
        {
            title: 'X',
            dataIndex: 'x',

        },
        {
            title: 'Function 1',
            dataIndex: 'func1',

        },
    ];

    const dataStr = [
        {
            key: '1',
            x: 1,
            func1: 1,
        },
        {
            key: 2,
            x: 2,
            func1: 4,
        },

    ];

    function generateArray (min, max, span) {
        return 0;
    }

    return (
        <Row className={style.graph}>
            <Col span={6}>
                <div className={style.formData}>
                    <form>

                        <label htmlFor="minX">Min: {minX}</label>
                        <InputNumber min={1} max={100000} defaultValue={1} id='minX' type='number' value={minX}
                                     onChange={(value) => {
                                         setMinX(Number(value));
                                     }}/>
                        <div>
                            <label htmlFor="maxX">Max: {maxX}</label>
                            <InputNumber min={1} max={100000} defaultValue={1} id='maxX' type='number' value={maxX}
                                         onChange={(value) => {
                                             setMaxX(Number(value));
                                         }}/>
                        </div>
                        <div>
                            <label htmlFor="spanX">Шаг: {spanX}</label>
                            <InputNumber min={1} max={1000} defaultValue={1} id='spanX' type='number' value={spanX}
                                         onChange={(value) => {
                                             setSpanX(Number(value))
                                         }}/>
                        </div>

                        <Radio.Group onChange={(e) => {
                            setSelectedFunc(e.target.value);
                        }} value={selectedFunc}>
                            <Space direction="vertical">
                                <Radio value={1}>y = x</Radio>
                                <Radio value={2}>y = x^2</Radio>
                                <Radio value={3}>y = x^3</Radio>
                            </Space>
                        </Radio.Group>
                        <Button onClick={() => {
                            console.log(`minX ${minX}; maxX ${maxX}; spanX ${spanX}; func ${selectedFunc}`);
                            setArrayX(['']);
                            setArrayY(['']);
                            for (let i = minX; i <= maxX; i = i + spanX) {
                                setArrayX( array => [...array, `${i}`]);
                            }
                            for (let i = 0; i < arrayX.length; i++) {
                                setArrayY( array => [...array, `${arrayX[i]*2}`]);
                            }
                            console.log(arrayX);
                            console.log(arrayY);
                        }}>Рассчитать</Button>
                    </form>
                </div>
            </Col>
            <Col span={18}>

                <Table dataSource={dataStr} columns={spanCol} scroll={{
                    x: "100vw",
                }}/>;
            </Col>
        </Row>
    )
};

export default Graph;