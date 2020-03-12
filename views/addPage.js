const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    <div>
    <label for="name" class="col-sm-2 control-label">Whats ur name?</label>
      <div class="col-sm-10">
        <input id="name" name="name" type="text" class="form-control"/>
      </div>
    </div>
    <div>
    <label for="email" class="col-sm-2 control-label">Whats ur email?</label>
      <div class="col-sm-10">
        <input id="email" name="email" type="text" class="form-control"/>
      </div>
    </div>
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>
    <div>
    <label for="content" class="col-sm-2 control-label">Write your post here! ;)</label>
      <div class="col-sm-10">
        <textarea id="content" name="content"></textarea>
      </div></div>
    <div>
    <label for="status" class="col-sm-2 control-label">Open it?!?!?!?!</label>
    <div class="col-sm-10">
      <select>
        <option value = 'open'> Open </option>
        <option value = 'closed'> Closed </option></div>
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  </form>
`);
