import React from 'react';
import {Field, Form, Formik} from "formik";

const FormGraph = ({setMin, setMax, setSpan, setSelectedFunc}) => {
    return (
        <Formik
            initialValues={{
                min: 0,
                max: 1,
                span: 1,
                func: [],
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
                setMin(values.min);
                setMax(values.max);
                setSpan(values.span);
                setSelectedFunc(values.func);
            }}
        >
            <Form>
                <label htmlFor="min">Min:</label>
                <Field type="number" id="min" name="min" placeholder={0}/>
                <label htmlFor="max">Max: </label>
                <Field type="number" id="max" name="max" placeholder={1}/>
                <label htmlFor="span">Шаг:</label>
                <Field type="number" min={1} id="span" name="span" placeholder={1}/>
                <div role="group" aria-labelledby="checkbox-group" >
                    <label>
                        <Field type="checkbox" name="func" value="f1" />
                        f1
                    </label>
                    <label>
                        <Field type="checkbox" name="func" value="f2" />
                        f2
                    </label>
                    <label>
                        <Field type="checkbox" name="func" value="f3" />
                        f3
                    </label>
                </div>

                <button type="submit">Рассчитать</button>
            </Form>
        </Formik>
    );
};

export default FormGraph;