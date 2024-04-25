import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { setNestedObjectValues, useFormik } from "formik";
import Default from "./DefaultData.json";

function App() {
  const [add, setAdd] = useState(false);
  const [addData, setAdddata] = useState();
  const [json, setJson] = useState(Default);
  const [edit, setEdit] = useState(false);
  const [editid, setEditid] = useState();

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Title Required";
    } else if (values.title.length > 15) {
      errors.title = "Must be 15 characters or less";
    }

    if (!values.author) {
      errors.author = "author Name Required";
    } else if (values.author.length > 15) {
      errors.author = "Must be 15 characters or less";
    }

    if (!values.isbn) {
      errors.isbn = "ISBN No Required";
    } else if (
      isNaN(values.isbn) ||
      (values.isbn.toString().trim().length !== 10 &&
        values.isbn.toString().trim().length !== 13)
    ) {
      // console.log(values.isbn.toString().trim().length)
      errors.isbn = "Invalid isbn number";
    }
    if (!values.publicationdate) {
      errors.publicationdate = "Date Required";
    } else if (
      !/^\d{4}-\d{2}-\d{2}$/.test(values.publicationdate) &&
      !/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(values.publicationdate)
    ) {
      errors.publicationdate =
        "Invalid date format. Please use the format YYYY-MM-DD or YYYY-MM-DD HH:MM:SS.";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      isbn: "",
      publicationdate: "",
    },
    validate,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // setJson(prevJson => [...prevJson, values]);
      // console.log(JSON.stringify(values))
      //  values.title = "";
      //  values.author = "";
      //  values.isbn = "";
      //  values.publicationdate = "";
      addOrEditItem(values, editid);
      setAdd(false);
      setEdit(false);
    },
  });

  function edit11(i) {
    setEditid(i);
    setEdit(true);
  }

  // Function to add or edit an item in the json array
  function addOrEditItem(v, id) {
    // Check if edit is true
    if (edit) {
      console.log("Edit item with id:", id);
      setJson(json.map((e) => (e.id === id ? v : e)));
    } else {
      console.log("Add new item:", v);
      setJson((prevJson) => [...prevJson, { ...v, id: json.length + 1 }]);
    }

    // Reset form values
    formik.setValues({
      title: "",
      author: "",
      isbn: "",
      publicationdate: "",
    });
  }
  function Qa() {
    if (edit) {
      return View;
    } else {
      return View;
    }
  }
  function Qa1() {
    if (!add) {
      return View;
    } else {
      return null;
    }
  }
  function delete1(id) {
    console.log(id);
    const aw = json.filter((item) => item.id !== id);
    setJson(aw);
    console.log(aw);
  }
  console.log(addData);
  console.log(json);
  const addC = (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Submit</button>
    </form>
  );

  const addB = (
    <div className="adddd">
      <form onSubmit={formik.handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" htmlFor="title" id="basic-addon1">
            Title
          </span>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            placeholder="Title"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
        </div>
        {formik.errors.title ? (
          <div id="error1">{formik.errors.title}</div>
        ) : null}

        <div className="input-group mb-3">
          <span className="input-group-text" htmlFor="author" id="basic-addon3">
            Author
          </span>
          <input
            type="text"
            id="author"
            name="author"
            className="form-control"
            placeholder="Author Name"
            aria-describedby="basic-addon3 basic-addon4"
            onChange={formik.handleChange}
            value={formik.values.author}
          />
        </div>
        {formik.errors.author ? (
          <div id="error1">{formik.errors.author}</div>
        ) : null}

        <div className="input-group mb-3">
          <span className="input-group-text" htmlFor="isbn" id="basic-addon3">
            ISBN Number
          </span>
          <input
            type="text"
            id="isbn"
            name="isbn"
            className="form-control"
            placeholder="ISBN"
            aria-describedby="basic-addon3 basic-addon4"
            onChange={formik.handleChange}
            value={formik.values.isbn}
          />
        </div>
        {formik.errors.isbn ? (
          <div id="error1">{formik.errors.isbn}</div>
        ) : null}

        <div className="input-group mb-3">
          <span
            className="input-group-text"
            htmlFor="publicationdate"
            id="basic-addon3"
          >
            publication date
          </span>
          <input
            type="text"
            id="publicationdate"
            name="publicationdate"
            className="form-control"
            placeholder="DATE"
            aria-describedby="basic-addon3 basic-addon4"
            onChange={formik.handleChange}
            value={formik.values.publicationdate}
          />
        </div>
        {formik.errors.publicationdate ? (
          <div id="error1">{formik.errors.publicationdate}</div>
        ) : null}

        <div className="editt">
          <button type="submit" class="btn btn-primary btn-sm">
            Save
          </button>
          <button type="button" class="btn btn-secondary btn-sm">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );

  const editA = (
    <div className="adddd">
      <form onSubmit={formik.handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" htmlFor="title" id="basic-addon1">
            Title
          </span>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            placeholder="Title"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
        </div>
        {formik.errors.title ? (
          <div id="error1">{formik.errors.title}</div>
        ) : null}

        <div className="input-group mb-3">
          <span className="input-group-text" htmlFor="author" id="basic-addon3">
            Author
          </span>
          <input
            type="text"
            id="author"
            name="author"
            className="form-control"
            placeholder="Author Name"
            aria-describedby="basic-addon3 basic-addon4"
            onChange={formik.handleChange}
            value={formik.values.author}
          />
        </div>
        {formik.errors.author ? (
          <div id="error1">{formik.errors.author}</div>
        ) : null}

        <div className="input-group mb-3">
          <span className="input-group-text" htmlFor="isbn" id="basic-addon3">
            ISBN Number
          </span>
          <input
            type="text"
            id="isbn"
            name="isbn"
            className="form-control"
            placeholder="ISBN"
            aria-describedby="basic-addon3 basic-addon4"
            onChange={formik.handleChange}
            value={formik.values.isbn}
          />
        </div>
        {formik.errors.isbn ? (
          <div id="error1">{formik.errors.isbn}</div>
        ) : null}

        <div className="input-group mb-3">
          <span
            className="input-group-text"
            htmlFor="publicationdate"
            id="basic-addon3"
          >
            publication date
          </span>
          <input
            type="text"
            id="publicationdate"
            name="publicationdate"
            className="form-control"
            placeholder="DATE"
            aria-describedby="basic-addon3 basic-addon4"
            onChange={formik.handleChange}
            value={formik.values.publicationdate}
          />
        </div>
        {formik.errors.publicationdate ? (
          <div id="error1">{formik.errors.publicationdate}</div>
        ) : null}

        <div className="editt">
          <button type="submit" class="btn btn-primary btn-sm">
            Save
          </button>
          <button type="button" class="btn btn-secondary btn-sm">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );

  const View = (
    <ul className="gamut-glpvwy-LayoutGrid e10xj1580">
      {json.map((book, index) => (
        <li key={index} className="gamut-87ddz7-StyledColumn e1y0e4q30">
          <div className="gamut-1jn300j-FlexBox e1tc6bzh0">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">{book.title}</h3>

                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
              </div>
              <ul className="list-group list-group-flush">
                

                <li className="list-group-item">{book.author}<button id="ert">Edit</button></li>
                <li className="list-group-item">{book.publicationdate}</li>
                <li className="list-group-item">{book.isbn}</li>
              </ul>
              <div className="card-body">
                <button
                  href="#"
                  className="card-link"
                  onClick={() => delete1(book.id)}
                >
                  Delete
                </button>
                <button
                  href="#"
                  className="card-link"
                  onClick={() => edit11(book.id)}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Library
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={() => setAdd(true)}
      >
        Add book
      </button>

      {add ? addB : !add && !edit ? View : null}
      {edit ? addB : null}
    </div>
  );
}

export default App;
