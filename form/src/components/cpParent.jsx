import React from 'react';
import CompoForm from './compoForm';
import CompoTable from './compoTable';

export default function ParentCompo() {
    return (
        <div style={{minHeight: '100vh', paddingLeft: "20px", width: '100%', backgroundColor:"#F5F5F5", margin:'15px', fontSize: '25px'}}>
            <CompoForm/>
            <CompoTable/>
        </div>
    )
}