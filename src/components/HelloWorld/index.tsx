import React from 'react';
import {HelloWrapper, HelloWrapper2} from './index.style';

const HelloWorld = () => (
    <>
        <HelloWrapper>Almost before we knew it</HelloWrapper>
        <HelloWrapper2>Almost before we knew it</HelloWrapper2>
        <h1>Hello World</h1>
        <hr />
        <h3>Environmental variables:</h3>
        <p>
            process.env.PRODUCTION: <b>{process?.env?.PRODUCTION?.toString()}</b>
        </p>
        <p>
            process.env.NAME: <b>{process.env.NAME}</b>
        </p>
        <p>
            process.env.VERSION: <b>{process.env.VERSION}</b>
        </p>
    </>
);

export default HelloWorld;
