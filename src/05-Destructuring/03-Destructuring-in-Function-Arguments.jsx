// Destructuring in function parameters
const DestructuringFunction = ({ name, age }) => {
  return (
    <div>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
    </div>
  );
};

const DestructuringFunctionExample = () => {
  const person = { name: "Kowalski", age: 23 };

  return <DestructuringFunction {...person} />;
};

export default DestructuringFunctionExample;

// const ExampleArgumrnts = ({ name, email }) => {
//   return (
//     <div>
//       <p>Name :{name}</p>
//       <p>Email : {email}</p>
//     </div>
//   );
// };

// const PassedArguments = () => {
//   const person = { name: "SKipper", email: "Skipper123@gamil.com" };

//   return <ExampleArgumrnts {...person} />;
// };
// export default PassedArguments;
