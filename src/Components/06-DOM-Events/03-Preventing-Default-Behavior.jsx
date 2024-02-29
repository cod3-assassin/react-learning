const FormSubmitHandler = () => {
  //Event handler funtion for form submission

  const handelsumitt = (e) => {
    e.preventDefault();
    alert("From Submitted !!");
  };

  return (
    <form onSubmit={handelsumitt}>
      <button type="submit">Submitt !</button>
    </form>
  );
};

export default FormSubmitHandler;
