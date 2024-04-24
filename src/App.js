import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useFormik } from 'formik';

function App() {
  const [add,setAdd] = useState(false)
  const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      Title: '',
      Author:"",
      ISBN:"",
      Date:""
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  const addC =(  <form onSubmit={formik.handleSubmit}>
    <label htmlFor="email">Email Address</label>
    <input
      id="email"
      name="email"
      type="email"
      onChange={formik.handleChange}
      value={formik.values.email}
    />

    <button type="submit">Submit</button>
  </form>)
const addB =(
<div className='adddd'>
  <form onSubmit={formik.handleSubmit}>

<div className="input-group mb-3">
  <span className="input-group-text" htmlFor="title" id="basic-addon1">Title</span>
  <input type="text" id="title" name="title"className="form-control" placeholder="Title" aria-label="Username" aria-describedby="basic-addon1" onChange={formik.handleChange}
         value={formik.values.Title}/>
</div>

<div className="input-group mb-3">
<span className="input-group-text"  htmlFor="author" id="basic-addon3">Author</span>
<input type="text" id="author" name="author" className="form-control" placeholder="Author Name"  aria-describedby="basic-addon3 basic-addon4"/>
</div>



<div className="input-group mb-3">
<span className="input-group-text"  htmlFor="isbnnumber" id="basic-addon3">ISBN Number</span>
<input type="text" id="isbnnumber" name="isbnnumber" className="form-control" placeholder="ISBN" aria-describedby="basic-addon3 basic-addon4"/>
</div>
<div className="input-group mb-3">
<span className="input-group-text"  htmlFor="publicationdate" id="basic-addon3">publication date</span>
<input type="text"   id="publicationdate" name="publicationdate" className="form-control" placeholder="DATE" aria-describedby="basic-addon3 basic-addon4"/>
</div>

<div className='editt'>
<button type="button" class="btn btn-primary btn-sm">Save</button>
<button type="button" class="btn btn-secondary btn-sm">Cancel</button>
</div>
</form>
</div>
  )
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Library</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <button type="button" className="btn btn-primary btn-sm" onClick={()=>setAdd(true)}>Add book</button>
      
    { add ? addB:<ul className='gamut-glpvwy-LayoutGrid e10xj1580'>
      <li className='gamut-87ddz7-StyledColumn e1y0e4q30'>
        <div className='gamut-1jn300j-FlexBox e1tc6bzh0'>
        {/* <div className='e1a33thh0 gamut-14mxqwy-VariableProvider-HeaderBackground e1skjn880'>
          <span className='gamut-x5l22h-StyledText e8i0p5k0'>Book 1</span>
        </div> */}
          <div className="card" style={{"width": "18rem"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">Title</h3>
            
            <button>Edit</button>

            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">ISBN number</li>
            <li className="list-group-item">publication date</li>
            <button className="list-group-item">Edit Author</button>
          </ul>
          <div className="card-body">
            <button href="#" className="card-link">Delete</button>
            <button href="#" className="card-link">Edit</button>

          </div>
          </div>
          </div>
        </li>

        <li className='gamut-87ddz7-StyledColumn e1y0e4q30'>
          <div className="card" style={{"width": "18rem"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">Title</h3>
            
            <button>Edit</button>

            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">ISBN number</li>
            <li className="list-group-item">publication date</li>
            <button className="list-group-item">Edit Author</button>
          </ul>
          <div className="card-body">
            <button href="#" className="card-link">Delete</button>
            <button href="#" className="card-link">Edit</button>
    </div>
          </div>
        </li>

        <li className='gamut-87ddz7-StyledColumn e1y0e4q30'>
          <div className="card" style={{"width": "18rem"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">Title</h3>
            
            <button>Edit</button>

            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">ISBN number</li>
            <li className="list-group-item">publication date</li>
            <button className="list-group-item">Edit Author</button>
          </ul>
          <div className="card-body">
            <button href="#" className="card-link">Delete</button>
            <button href="#" className="card-link">Edit</button>
    </div>
          </div>
        </li>

        <li className='gamut-87ddz7-StyledColumn e1y0e4q30'>
          <div className="card" style={{"width": "18rem"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">Title</h3>
            
            <button>Edit</button>

            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">ISBN number</li>
            <li className="list-group-item">publication date</li>
            <button className="list-group-item">Edit Author</button>
          </ul>
          <div className="card-body">
            <button href="#" className="card-link">Delete</button>
            <button href="#" className="card-link">Edit</button>
    </div>
          </div>
        </li>
    </ul> }

    </div>
  );
}

export default App;
