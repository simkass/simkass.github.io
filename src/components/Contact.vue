<template>
  <div class="contact">
    <div class="container">
      <div class="title"><h2>Contact Me</h2></div>

      <form>
        <label for="fname">Name</label>
        <input type="text" id="fname" name="fullname" placeholder="Full Name" />
        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Enter Email" />

        <label for="comment">Comment</label>
        <textarea
          id="comment"
          name="comment"
          placeholder="What's on your mind?"
          style="height: 200px"
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact {
  width: 100%;
  margin-top: 20px;
  display: inline-flex;
  justify-content: center;
}
.title {
  height: 50px;
  text-align: center;
}

/* Style inputs with type="text", select elements and textareas */
input[type="text"],
select,
textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
  font-size: 20px;
}

/* Style the submit button with a specific background color etc */
input[type="submit"] {
  background-color: #000000;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 20px;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type="submit"]:hover {
  background-color: #131313;
}

label {
  font-size: 20px;
}

/* Add a background color and some padding around the form */
.container {
  width: 60%;
  border-radius: 5px;
  padding: 20px;
}

@media all and (max-width: 1500px) {
  .container {
    width: 80%;
  }
}
@media all and (max-width: 1200px) {
  .container {
    width: 95%;
  }
}
@media all and (max-width: 950px) {
  .container {
    width: 100%;
  }
}
</style>
