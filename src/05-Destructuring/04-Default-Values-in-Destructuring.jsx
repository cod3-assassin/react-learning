const DestructuringDefaultValues = () => {
  const person = { name: "Skipper", age: 23 };

  // Destructuring with default values

  const {
    name,
    age,
    city = "Unknown",
    email = "Skipper123@gmail.com",
  } = person;

  return (
    <div>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>City : {city}</p>
      <p>Email : {email}</p>
    </div>
  );
};

export default DestructuringDefaultValues;
