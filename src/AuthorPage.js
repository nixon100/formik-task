import React from "react";
import { useFormik } from "formik";

const AuthorPage = (props) => {
  const validate = (values) => {
    const errors = {};
    if (!values.author) {
      errors.author = "Author Name Required";
    } else if (values.author.length > 15) {
      errors.author = "Must be 15 characters or less";
    }

    if (!values.biography) {
      errors.biography = "Biography Required";
    } else if (values.biography.length > 100) {
      errors.biography = "Must be 15 characters or less";
    }

    if (!values.DOB) {
      errors.DOB = "Date Of Birth Required";
    } else if (
      !/^\d{4}-\d{2}-\d{2}$/.test(values.DOB) &&
      !/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(values.DOB)
    ) {
      errors.DOB =
        "Invalid date format. Please use the format YYYY-MM-DD or YYYY-MM-DD HH:MM:SS.";
    }
    // if (!values.publicationdate) {
    //   errors.publicationdate = "Date Required";
    // } else if (
    //   !/^\d{4}-\d{2}-\d{2}$/.test(values.publicationdate) &&
    //   !/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(values.publicationdate)
    // ) {
    //   errors.publicationdate =
    //     "Invalid date format. Please use the format YYYY-MM-DD or YYYY-MM-DD HH:MM:SS.";
    // }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      author: "",
      biography: "",
      DOB: "",
    },
    validate,
    onSubmit: (values) => {
      // addOrEditItem(values, editid);
      // setAdd(false);
      // setEdit(false);
      console.log(values);
      props.setJson(props.json.map((item, index) => (
        item.id === props.authorid? {...item,...values } : item
      )))      
      props.setEdit2(false)
      
    },
  });

  function cancell () {
    props.setEdit2(false)
  }

  return (
    <div className="adddd">
      <form onSubmit={formik.handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" htmlFor="author" id="basic-addon1">
            Author
          </span>
          <input
            type="text"
            id="author"
            name="author"
            className="form-control"
            placeholder="Author Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.author}
          />
        </div>
        {formik.errors.author ? (
          <div id="error1">{formik.errors.author}</div>
        ) : null}

        <div className="input-group mb-3">
          <span
            className="input-group-text"
            htmlFor="biography"
            id="basic-addon3"
          >
            Biography
          </span>
          <input
            type="text"
            id="biography"
            name="biography"
            className="form-control"
            placeholder="Enter Biography"
            aria-describedby="basic-addon3 basic-addon4"
            onChange={formik.handleChange}
            value={formik.values.biography}
          />
        </div>
        {formik.errors.biography ? (
          <div id="error1">{formik.errors.biography}</div>
        ) : null}

        <div className="input-group mb-3">
          <span className="input-group-text" htmlFor="DOB" id="basic-addon3">
            DOB
          </span>
          <input
            type="text"
            id="DOB"
            name="DOB"
            className="form-control"
            placeholder="Date of birth"
            aria-describedby="basic-addon3 basic-addon4"
            onChange={formik.handleChange}
            value={formik.values.DOB}
          />
        </div>
        {formik.errors.DOB ? <div id="error1">{formik.errors.DOB}</div> : null}

        {/* <div className="input-group mb-3">
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
        ) : null} */}

        <div className="editt">
          <button type="submit" class="btn btn-primary btn-sm">
            Save
          </button>
          <button type="button" class="btn btn-secondary btn-sm" onClick={cancell}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthorPage;
