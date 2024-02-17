import React, {useState} from 'react';
import '../App.css';

export default function CompoForm() {
    const[nom, setNom] = useState('');
    const[prenom, setPrenom] = useState('');
    const[email, setEmail] = useState('');
    const[dateNaissance, setDateNaissance] = useState('');
    const[filiere, setFiliere] = useState('');
    const[niveau, setNiveau] = useState('');
    const[EtatFormation, setEtatFormation] = useState('');
    const[preview, setpreview] = useState(null);

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
  const handleSubmit = (e) => {
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


  
    // Save data to local storage (for demonstration purposes)
    saveToLocalstorage(formData);
  };

  // Function to save data to local storage
  const saveToLocalstorage = (data) => {
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    storedData.push(data);
    localStorage.setItem('formData', JSON.stringify(storedData));
    alert('Données enregistrées!');
    console.log(storedData)
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
        setpreview('');
    }

  
const  handleFileChange = (e) => {
       const file = e.target.files[0];
   
       if (file) {
         const reader = new FileReader();
   
         reader.onloadend = () => {
           setpreview(reader.result);
         };
   
         reader.readAsDataURL(file);
       } else {
         setpreview(null);
       }
     };

let padding = {paddingRight:"15px"};
    return (
        <form className="form-group wrapper container" style={{fontSize: "16px"}} onSubmit={handleSubmit}>
            <h2 style={{color: 'black'}}>Veuillez saisir vos données..</h2>
            <tr>
                <td><label>Nom : </label></td>
                <td><input className="form-control focus" autoFocus='autofocus' type='text' value={nom} onChange = {e =>setNom(e.target.value)}/></td>
            </tr>
            <tr>
                <td><label>Prénom : </label></td>
                <td><input  className="form-control focus" type="text"  value={prenom} onChange = {e =>setPrenom(e.target.value)}/></td>
            </tr> 
            <tr>
                <td><label>Email : </label></td>
                <td><input  className="form-control focus" value={email} type="email" onChange = {e =>setEmail(e.target.value)} /></td>
            </tr> 
            <tr>
                <td><label>Date de naissance : </label></td>
                <td><input  className="form-control focus" type="date"  value={dateNaissance} onChange = {e =>setDateNaissance(e.target.value)}/></td>
            </tr> 
            <tr>
                <td><label>Filière : </label></td>
                <td>
                <select  className="form-control focus" value={filiere} onChange= {e =>setFiliere(e.target.value)}>
                    <option value=""></option>
                    <option value="Développement Digital">Développement Digital</option>
                    <option value="Infrastructure Digital">Infrastructure Digital</option>
                    <option value="Design Digital">Design Digital</option>
                    <option value="Techniques agricoles">Techniques agricoles</option>
                    <option value="BTP">BTP</option>
                    </select></td>
            </tr> 
            <tr>
                <td><label>Niveau : </label></td>
                <td class="m-3">
                    <input  class="form-check-input"  type="radio" onChange={SelectRadio} name="formation" value="Technicien Spécialisé"/><span style={padding}>Technicien Spécialisé</span>
                    <input  class="form-check-input"  type="radio" onChange={SelectRadio} name="formation" value="Technicien"/><span style={padding}>Technicien</span>
                    <input  class="form-check-input"  type="radio" onChange={SelectRadio} name="formation" value="Formtion Qualifiante"/><span style={padding}>Formtion Qualifiante</span>

                </td>
            </tr> 
            <tr>
                <td><label class="radio-inline">Etat de formation : </label></td>
                <td>
                    <input class="form-check-input" onChange={SelectCheckBox} type="checkbox" name="" value="En cours"/><span style={padding}>En cours</span>
                    <input class="form-check-input" onChange={SelectCheckBox} type="checkbox" name="" value="Diplome"/><span style={padding}>Diplomé</span>
                </td>
            </tr>
            <tr>
                <td>
                <div>
                CIN Recto : <input  type="file" accept='image/*'  onChange={handleFileChange}/>
                    {preview && (
                    <div>
                    <h2>Preview:</h2>
                    <img src={preview} alt="Preview" style={{ maxWidth: '50%' }} />
                    </div>
                    )}
                </div>
                </td>
                <td>
                </td>
            </tr>
            <tr>
                <button class="btn btn-primary p-1 btn-outline-dark text-white buttons" type="submit">Enregister</button>
                <button class="btn btn-warning p-1 btn-outline-dark buttons" onClick={reset}  type="reset">Reset</button>
            </tr>
        </form>

    )
} 