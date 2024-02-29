const DestructuringObject = () => {
  const person = { name: "Skipper", age: 24, city: "New York" };
  const User = {
    username: "Kowalski",
    position: "Analysis Expert",
    mobileNo: 478209282,
  };
  // Destructuring assignment

  const { name, age, city } = person;

  const { username, position, mobileNo } = User;
  return (
    <div>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>City : {city}</p>

      <p>{username}</p>
      <p>{position}</p>
      <p>{mobileNo}</p>
    </div>
  );
};

export default DestructuringObject;
