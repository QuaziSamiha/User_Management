import PropTypes from "prop-types";

const User = (props) => {
  //   console.log(user);
  const { userName, userEmail } = props.user;
  return (
    <>
      <div>
        <h1>{userName}</h1>
        <p>{userEmail}</p>
      </div>
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
