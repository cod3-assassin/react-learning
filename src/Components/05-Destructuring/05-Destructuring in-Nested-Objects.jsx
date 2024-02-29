const DestructuringNestedObjects = () => {
  const person = {
    name: "Skipper",
    details: {
      age: 24,
      city: "New York",
      education: { degreee: "BCS", experience: "2 years" },
    },
  };

  // Destructuring nested objects

  const {
    name,
    details: {
      age,
      city,
      education: { degreee, experience },
    },
  } = person;

  return (
    <div>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>City : {city}</p>
      <p>Degree : {degreee}</p>
      <p>Experience : {experience}</p>
    </div>
  );
};

export default DestructuringNestedObjects;
