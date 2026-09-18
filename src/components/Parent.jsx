import { useState, useEffect } from 'react';
import Form from './Form';
import Table from './Table';

export default function Parent() {
    const [formData, setFormData] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('formData')) || [];
        } catch (error) {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

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
                <Form setFormData={setFormData} />
            </div>
            <div style={{ flex: '1', backgroundColor: 'white', borderRadius: '8px', padding: '20px' }}>
                <Table formData={formData} setFormData={setFormData} />
            </div>
        </div>
    );
}
