


document.getElementById("addProductButton").addEventListener("click", displayForm);

function displayForm() {
    console.log("form")
  document.getElementById("addProductForm").innerHTML = `
  <form>
    <div class="mb-3">
      <label class="form-label">Product Name</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Amount</label>
      <input type="number" class="form-control" id="exampleInputPassword1">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
`;
}