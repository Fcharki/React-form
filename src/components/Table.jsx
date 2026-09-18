import { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export default function Table({ formData, setFormData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [editedIndex, setEditedIndex] = useState(null);

  // Function to delete a row
  const deleteRow = (index) => {
    const updatedData = formData.filter((_, i) => i !== index);
    setFormData(updatedData);
  };

  // Function to save the edited data
  const saveEditedData = () => {
    const updatedForm = formData.map((item, i) =>
      i === editedIndex ? editedData : item
    );

    setFormData(updatedForm);

    // Reset editing state
    setIsEditing(false);
    setEditedData({});
    setEditedIndex(null);
  };

  return (
    <div className="bg-light p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="mb-0" style={{ color: '#333' }}>
          Tableau
        </h3>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => setFormData([])}
        >
          Clear storage
        </button>
      </div>

      <p className="mb-3">Table de données</p>

      <div className="table-responsive">
        <table className="table table-info table-bordered table-hover text-center align-middle">
          <thead>
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
                <td>{data?.nom}</td>
                <td>{data?.prenom}</td>
                <td>{data?.email}</td>
                <td>{data?.dateNaissance}</td>
                <td>{data?.filiere}</td>
                <td>{data?.niveau}</td>
                <td>{data?.EtatFormation}</td>

                <td colSpan="2">
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() => {
                      setIsEditing(true);
                      setEditedData(data);
                      setEditedIndex(index);
                    }}
                  >
                    Modifier
                  </button>

                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => deleteRow(index)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isEditing && (
        <div
          className="bg-light p-4 rounded shadow-sm mt-4"
          style={{ maxWidth: '500px' }}
        >
          <h3 className="mb-4 text-center">
            Formulaire de modification
          </h3>

          <div className="mb-3">
            <label className="form-label">Nom:</label>
            <input
              className="form-control"
              type="text"
              value={editedData.nom || ''}
              onChange={(e) =>
                setEditedData({
                  ...editedData,
                  nom: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Prénom:</label>
            <input
              className="form-control"
              type="text"
              value={editedData.prenom || ''}
              onChange={(e) =>
                setEditedData({
                  ...editedData,
                  prenom: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              className="form-control"
              type="email"
              value={editedData.email || ''}
              onChange={(e) =>
                setEditedData({
                  ...editedData,
                  email: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Date de naissance:</label>
            <input
              className="form-control"
              type="date"
              value={editedData.dateNaissance || ''}
              onChange={(e) =>
                setEditedData({
                  ...editedData,
                  dateNaissance: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Filière:</label>
            <input
              className="form-control"
              type="text"
              value={editedData.filiere || ''}
              onChange={(e) =>
                setEditedData({
                  ...editedData,
                  filiere: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Niveau:</label>
            <input
              className="form-control"
              type="text"
              value={editedData.niveau || ''}
              onChange={(e) =>
                setEditedData({
                  ...editedData,
                  niveau: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-4">
            <label className="form-label">État de formation:</label>
            <input
              className="form-control"
              type="text"
              value={editedData.EtatFormation || ''}
              onChange={(e) =>
                setEditedData({
                  ...editedData,
                  EtatFormation: e.target.value,
                })
              }
            />
          </div>

          <div className="d-grid">
            <button
              className="btn btn-success"
              onClick={saveEditedData}
            >
              Enregistrer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

Table.propTypes = {
  formData: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFormData: PropTypes.func.isRequired,
};
