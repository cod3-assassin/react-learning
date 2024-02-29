const WelcomUser = ({ username }) => {
  username = "Kowalski";
  return (
    <div>
      <p>Welcome , {username}</p>
    </div>
  );
};
export default WelcomUser;

// Usage
//<WelcomeUser />
// or
//<WelcomeUser username="John" />
