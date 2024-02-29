const UserProfile = ({ username, age }) => {
  return (
    <div>
      <p>Username: {username}</p>
      <p>Age: {age}</p>
      <PassedProps username="Skipper" age={24} />
    </div>
  );
};

export default UserProfile;

const PassedProps = ({ username, age }) => {
  return (
    <div>
      <p>Passed Username: {username}</p>
      <p>Passed Age: {age}</p>
    </div>
  );
};
