const DestructuringWithAliases = () => {
  const person = { firstName: "Skipper", lastName: "Penguin" };

  // Destructuring with variable aliases
  const { firstName: first, lastName: last } = person;

  return (
    <div>
      <p>First Name : {first}</p>
      <p>Last Name : {last}</p>
    </div>
  );
};

export default DestructuringWithAliases;
