const RestInObjectDestructuring = () => {
  const person = { name: "Riko", age: 26, city: "New York", country: "USA" };

  const secondPerosn = {
    username: "Kowalski",
    profession: "Head o the Mission ",
    qulification: { education: "Computer Science", experience: "4 Years" },
  };

  // Destructuring with rest syntax

  const { name, age, ...address } = person;

  //Destructuring with rest syntax in nested object

  const {
    username,
    profession,
    qulification: { ...quality },
  } = secondPerosn;

  return (
    <div>
      <div>
        <p>Name : {name}</p>
        <p>Age : {age}</p>
        <p>Address : {JSON.stringify(address)}</p>
      </div>
      <div>
        <p>Name : {username}</p>
        <p>Profession : {profession}</p>
        <p>Qualification : {JSON.stringify(quality)}</p>
      </div>
    </div>
  );
};

export default RestInObjectDestructuring;
