import { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export default function Form({ setFormData }) {
    const[nom, setNom] = useState('');
    const[prenom, setPrenom] = useState('');
    const[email, setEmail] = useState('');
    const[dateNaissance, setDateNaissance] = useState('');
    const[filiere, setFiliere] = useState('');
    const[niveau, setNiveau] = useState('');
    const[EtatFormation, setEtatFormation] = useState('');

//* checkbox
    function SelectCheckBox(e){
        setEtatFormation(e.target.value);
          
    }console.log(EtatFormation);
//* radio
        function SelectRadio(e){
            setNiveau(e.target.value);
           
    }console.log(niveau);

    //* saving data in a json file
    
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with form data
    const formData = {
      nom,
      prenom,
      email,
      dateNaissance,
      filiere,
      niveau,
      EtatFormation,
    };

    // Persist to local storage, then share the new entry with the table
    try {
      await saveToLocalstorage(formData);
      setFormData((prev) => [...prev, formData]);
      reset();
    } catch (error) {
      console.error("Erreur lors de l'enregistrement :", error);
    }
  };

  // Function to save data to local storage
  const saveToLocalstorage = (data) => {
    return new Promise((resolve, reject) => {
      try {
        const storedData = JSON.parse(localStorage.getItem('formData')) || [];
        storedData.push(data);
        localStorage.setItem('formData', JSON.stringify(storedData));
        resolve(storedData);
      } catch (error) {
        reject(error);
      }
    });
  };

    // reset 
    function reset(){
        setNom('');
        setPrenom('');
        setEmail('');
        setDateNaissance('');
        setFiliere('');
        setFiliere('');
        setNiveau('');
        setEtatFormation('');
    }

return (
    <form className="form-group wrapper" style={{ fontSize: "16px", padding: "20px", maxWidth: "800px", margin: "auto", borderRadius: "8px", backgroundColor: "#f9f9f9" }} onSubmit={handleSubmit}>
        <h3 style={{ color: '#333', textAlign: 'center' }}>Formulaire</h3>
        <p style={{ color: '#575656', textAlign: 'center', marginBottom: '20px' }}>Veuillez saisir vos données</p>
        <div className="form-row" style={{ marginBottom: '15px' }}>
            <div className="col-12 col-md-6">
                <label style={{ fontWeight: 'bold', color: '#444' }}>Nom :</label>
                <input 
                    className="form-control focus" 
                    autoFocus 
                    type="text" 
                    value={nom} 
                    onChange={e => setNom(e.target.value)} 
                    placeholder="Entrez votre nom"
                    style={{ borderRadius: '5px', padding: '10px' }}
                />
            </div>
            <div className="col-12 col-md-6">
                <label style={{ fontWeight: 'bold', color: '#444' }}>Prénom :</label>
                <input 
                    className="form-control focus" 
                    type="text" 
                    value={prenom} 
                    onChange={e => setPrenom(e.target.value)} 
                    placeholder="Entrez votre prénom"
                    style={{ borderRadius: '5px', padding: '10px' }}
                />
            </div>
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold', color: '#444' }}>Email :</label>
            <input 
                className="form-control focus" 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="Entrez votre email"
                style={{ borderRadius: '5px', padding: '10px' }}
            />
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold', color: '#444' }}>Date de naissance :</label>
            <input 
                className="form-control focus" 
                type="date" 
                value={dateNaissance} 
                onChange={e => setDateNaissance(e.target.value)} 
                style={{ borderRadius: '5px', padding: '10px' }}
            />
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold', color: '#444' }}>Filière :</label>
            <select 
                className="form-control focus" 
                value={filiere} 
                onChange={e => setFiliere(e.target.value)} 
                style={{ borderRadius: '5px', padding: '10px' }}
            >
                <option value="Développement Digital">Développement Digital</option>
                <option value="Infrastructure Digital">Infrastructure Digital</option>
                <option value="Design Digital">Design Digital</option>
                <option value="Techniques agricoles">Techniques agricoles</option>
                <option value="BTP">BTP</option>
            </select>
        </div>

                <div className="form-group" style={{ marginBottom: '20px' }}>
            <label style={{ fontWeight: 'bold', color: '#444', fontSize: '16px' }}>Niveau : </label>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        onChange={SelectRadio} 
                        name="formation" 
                        value="Technicien Spécialisé" 
                    />
                    <label className="form-check-label" style={{ paddingLeft: '0px' }}>Technicien Spécialisé</label>
                </div>
                <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            onChange={SelectRadio} 
                            name="formation" 
                            value="Technicien" 
                        />
                        <label className="form-check-label" style={{ paddingLeft: '0px' }}>Technicien</label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            onChange={SelectRadio} 
                            name="formation" 
                            value="Formation Qualifiante" 
                        />
                        <label className="form-check-label" style={{ paddingLeft: '0px' }}>Formation Qualifiante</label>
                    </div>
                </div>
            </div>

            <div className="form-group" style={{ marginBottom: '20px' }}>
                <label style={{ fontWeight: 'bold', color: '#444', fontSize: '16px' }}>Etat de formation : </label>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            onChange={SelectCheckBox} 
                            type="checkbox" 
                            name="" 
                            value="En cours" 
                        />
                        <label className="form-check-label" style={{ paddingLeft: '0px' }}>En cours</label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            onChange={SelectCheckBox} 
                            type="checkbox" 
                            name="" 
                            value="Diplôme" 
                        />
                        <label className="form-check-label" style={{ paddingLeft: '0px' }}>Diplômé</label>
                    </div>
                </div>
            </div>
        <div className="form-group d-flex justify-content-center" style={{ marginTop: '30px' }}>
            <button className="btn btn-primary p-2 text-white mx-2" type="submit" style={{ borderRadius: '5px', width: '150px' }}>Enregistrer</button>
            <button className="btn btn-warning p-2 mx-2" onClick={reset} type="reset" style={{ borderRadius: '5px', width: '150px' }}>Reset</button>
        </div>
    </form>
);

}

Form.propTypes = {
    setFormData: PropTypes.func.isRequired,
}; 