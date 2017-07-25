import React from 'react'

class RecipePuppy extends React.Component {
  constructor() {
    super()
    this.state = {
      ingridients: ""
    }
  }

  render() {
    return (
      <div>
        <h1 className="title is-1">Recipe Puppy</h1>
        <p className="subTitle is-3">Let's decide tonight's menus</p>
        <hr />
      </div>
    )
  }

  getRecipe() {
    // http://www.recipepuppy.com/api/
  }
}

export default RecipePuppy
