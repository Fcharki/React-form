import React, { useState, useEffect } from 'react';
import '../App.css';

export default function CompoTable() {
  const [formData, setFormData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [editedIndex, setEditedIndex] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    setFormData(storedData);
  }, []);

  // Function to delete a row
  const deleteRow = (index) => {
    const updatedData = [...formData];
    updatedData.splice(index, 1);

    setFormData(updatedData);
    localStorage.setItem('formData', JSON.stringify(updatedData));
  };

  // Function to save the edited data
  const saveEditedData = () => {
    const updatedForm = [...formData];
    updatedForm[editedIndex] = editedData;

    setFormData(updatedForm);
    localStorage.setItem('formData', JSON.stringify(updatedForm));

    // Reset editing state
    setIsEditing(false);
    setEditedData({});
    setEditedIndex(null);
  };

  return (
    <div className='bg-light'  style={{fontSize: "16px", paddingLeft: '20px'}} >
      <button
        type="button"
        className='btn btn-light text-dark my-1'
        onClick={() => {
          localStorage.clear();
          setFormData([]);
        }}
      >
        Clear storage
      </button>
      <h2>Table de données</h2>
      <table style={{ width: 'auto' }} className="table table-info table-bordered table-hover  text-center m-2">
        <thead className="thead-dark">
          <tr className="table-success">
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Email</th>
            <th scope="col">Date de naissance</th>
            <th scope="col">Filiere</th>
            <th scope="col">Niveau</th>
            <th scope="col">Etat de formation</th>
            <th colSpan="2">Traitements</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td scope="row">{data?.nom}</td>
              <td scope="row">{data?.prenom}</td>
              <td scope="row">{data?.email}</td>
              <td scope="row">{data?.dateNaissance}</td>
              <td scope="row">{data?.filiere}</td>
              <td scope="row">{data?.niveau}</td>
              <td scope="row">{data?.EtatFormation}</td>
              <td colSpan='2'>
                <button
                  className="btn btn-success m-1"
                  onClick={() => {
                    setIsEditing(true);
                    setEditedData(data);
                    setEditedIndex(index);
                  }}
                >
                  Modifier
                </button>
                <button className="btn btn-warning m-1" onClick={() => deleteRow(index)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditing && (
        <div className='bg-info p-3' style={{margin: "8px", maxWidth: '35%'}}>
         <h3>Formulaire de modification:</h3>
          <label>Nom:</label>
            <input  className="form-control"
              type="text"
              value={editedData.nom || ''}
              onChange={(e) => setEditedData({ ...editedData, nom: e.target.value })}
            />
          <label>Prenom:</label>
            <input  className="form-control"
              type="text"
              value={editedData.prenom || ''}
              onChange={(e) => setEditedData({ ...editedData, prenom: e.target.value })}
            />
          <label>Email: </label>
            <input  className="form-control"
              type="text"
              value={editedData.email || ''}
              onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
            />
          <label>Date de naissance:</label>
            <input  className="form-control"
              type="date"
              value={editedData.dateNaissance || ''}
              onChange={(e) => setEditedData({ ...editedData, dateNaissance: e.target.value })}
            />
          <label>Filiere:</label>
            <input  className="form-control"
              type="text"
              value={editedData.filiere || ''}
              onChange={(e) => setEditedData({ ...editedData, filiere: e.target.value })}
            />
          <label>Niveau:</label>
            <input  className="form-control"
              type="text"
              value={editedData.niveau || ''}
              onChange={(e) => setEditedData({ ...editedData, niveau: e.target.value })}
            />
          <label>Etat de formation:</label>
            <input  className="form-control"
              type="text"
              value={editedData.EtatFormation || ''}
              onChange={(e) => setEditedData({ ...editedData, EtatFormation: e.target.value })}
            />
          <button style={{float: 'right', width: '100%'}} class="btn btn-md btn-success m-3" onClick={saveEditedData}>Save</button>
        </div>
      )}
    </div>
  );
}
