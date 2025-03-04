import React from 'react';
import Form from './Form';
import Table from './Table';

export default function Parent() {
    return (
        <div 
            style={{
                minHeight: '100vh', 
                padding: '20px', 
                width: '100%', 
                backgroundColor: '#F5F5F5', 
                margin: '15px', 
                fontSize: '16px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                gap: '20px'
            }}
        >
            <div style={{ flex: '1', backgroundColor: 'white', borderRadius: '8px', padding: '20px' }}>
                <h3 style={{ color: '#333', textAlign: 'center' }}>Formulaire</h3>
                <Form />
            </div>
            <div style={{ flex: '1', backgroundColor: 'white', borderRadius: '8px', padding: '20px' }}>
                <h3 style={{ color: '#333', textAlign: 'center' }}>Tableau</h3>
                <Table />
            </div>
        </div>
    );
}
