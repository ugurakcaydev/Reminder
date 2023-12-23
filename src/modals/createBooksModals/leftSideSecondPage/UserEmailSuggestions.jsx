/* eslint-disable react/prop-types */

const UserEmailSuggestions = ({ users, inputValue }) => {
  if (inputValue.length === 0) {
    return null;
  }

  const matchingUsers = users.filter((user) => user.email.includes(inputValue));
  const suggestions = matchingUsers.slice(0, 5);

  if (suggestions.length === 0) {
    return null;
  }

  return (
    <div className="border-t-white border-t-2 py-2  ">
      {suggestions.map((user, index) => (
        <div
          className=" px-2 py-2 hover:bg-[#2d3b45] flex justify-start items-center gap-x-2"
          key={index}
        >
          <div className="w-6 h-6 rounded-full bg-white"></div>
          <li className="list-none">{user.email}</li>
        </div>
      ))}
    </div>
  );
};
export default UserEmailSuggestions;
