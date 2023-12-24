/* eslint-disable react/prop-types */
const UserEmailSuggestions = ({ users, inputValue }) => {
  if (inputValue.length === 0) {
    return null;
  }

  const matchingUsers = users.filter((user) => {
    const emailPrefix = user.email.split("@")[0]; // '@' işaretinden önceki kısmı al
    return emailPrefix.includes(inputValue);
  });

  const suggestions = matchingUsers.slice(0, 5);

  if (suggestions.length === 0) {
    return null;
  }

  return (
    <div className="border-t-white border-t-2 py-2  ">
      {suggestions.map((user, index) => (
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="w-full px-2 py-2 hover:bg-[#2d3b45] flex justify-start items-center gap-x-2"
          key={index}
        >
          <div className="w-6 h-6 rounded-full bg-white"></div>
          <li className="list-none">{user.email}</li>
        </button>
      ))}
    </div>
  );
};

export default UserEmailSuggestions;
