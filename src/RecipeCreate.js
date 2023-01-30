import React, { useState } from "react";

function RecipeCreate({ onCreate }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });

  //tried a changeHandler but it ended up breaking more
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  console.log(formData);

  const handleSubmit = (event) => {
    // prevents unwanted page refreshing
    event.preventDefault();
    // calls the onCreate prop and passes an object with the current type and content state
    onCreate(formData);
    // sets the content state back to an empty string
    setFormData({ ...initialFormState });
  };
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table className="form-table">
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required={true}
                value={formData.name}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                required={true}
                value={formData.cuisine}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="text"
                placeholder="URL"
                required={true}
                value={formData.photo}
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                type="text"
                placeholder="Ingredients"
                required={true}
                value={formData.ingredients}
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                type="text"
                placeholder="Preparation"
                required={true}
                value={formData.preparation}
                onChange={handleChange}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
