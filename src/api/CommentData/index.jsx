
// eslint-disable-next-line no-unused-vars
export const AddComment = async (_text, _star = 5, _mail, _token) => {
    try {
      const response = await fetch(
        `http://localhost:5206/api/Comment/Create-Comment`,
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
  
          headers: {
            Authorization: `Bearer ${_token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Comment: _text, // Değişiklik burada
            Star: _star,
            Email: _mail, // Değişiklik burada
          }), // body data type must match "Content-Type" header
        }
      );
  
      response.ok
        ? console.log("Yorum yapma başarılı")
        : console.log("Kullanıcı birden fazla yorum yapamaz");
      return response.json();
  
      // Handle the response as needed
    } catch (error) {
      console.error("Error during request:", error);
  
      // Log response details
      console.log("Response status:", error.status);
      console.log("Response status text:", error.statusText);
      console.log("Response body:", await error.text());
  
      return null;
    }
  };
  
  export const GetAllCommand = async () => {
    try {
      const response = await fetch(
        "http://localhost:5206/api/Comment/Get-All-Comment",
        {
          method: "GET",
        }
      );
  
      const allJsonCommand = await response.json();
      return allJsonCommand.$values;
    } catch (error) {
      console.error(error);
    }
  };
  