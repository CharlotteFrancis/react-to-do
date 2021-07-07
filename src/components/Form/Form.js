import './Form.css'

const Form = () => {
  return (
    <form>
      <div class="mb-3 text-center">
        <label htmlFor="item-text" class="form-label">Add Item</label>
        <input id='item-text' type="email" class="form-control" aria-describedby="emailHelp"/>
      </div>
      <button id='submit' type="submit" class="btn btn-primary text-center">Submit</button>
    </form>
  )
}

export default Form
