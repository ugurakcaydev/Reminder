import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setCurrentUser } from "../store/currentUser/actions";

// export const getAuthToken = () => {
//   const cookies = document.cookie.split(";");
//   for (const cookie of cookies) {
//     const [name, value] = cookie.split("=").map((c) => c.trim());
//     if (name === "authToken") {
//       return value;
//     }
//   }
//   return null;
// };

// export const getFirstChar = () => {
//   const cookies = document.cookie.split(";");
//   for (const cookie of cookies) {
//     const [name, value] = cookie.split("=").map((c) => c.trim());
//     if (name === "firstChar") {
//       return value;
//     }
//   }
//   return null;
// };

function showToast(message) {
  toast.warning(message, {
    position: toast.POSITION.TOP_CENTER,
  });
}

// eslint-disable-next-line no-unused-vars
export const CreateUser = async ({ _email, _password, _passwordAgain }) => {
  try {
    const response = await fetch(
      `http://localhost:5206/api/User/Register-User`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Diğer isteğe özel başlıkları burada ekleyebilirsiniz
        },
        body: JSON.stringify({
          email: _email,
          password: _password,
        }),
      }
    );

    if (!response.ok) {
      //kullanıcı zaten var da olabilir
      showToast("Kullanıcı zaten kayıtlı");
      console.log("Register failed");
      return null;
    }

    const responseJson = await response.json(); //true dönyor
    window.location.href = "/login";
    return responseJson;
  } catch (error) {
    console.error("Kayıt yaparken hata oluştu: ", error);
    return null;
  }
};

// eslint-disable-next-line no-unused-vars
export const LoginUser = async ({ _email, _password }) => {
  try {
    const response = await fetch(`http://localhost:5206/api/User/Login-User`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: _email,
        password: _password,
      }),
    });

    if (!response.ok) {
      showToast("Kullanıcı adı veya şifre hatalı");
      console.log("Login failed");
      return { loginSuccess: false };
    } else {

      const responseJson = await response.json();

      const authToken = responseJson.Token;
      const userId = responseJson.UserId;
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          usermail: _email,
          userpassword: _password,
          usertoken: authToken,
          userId: userId,
        })
      );
      setCurrentUser({
        usermail: _email,
        userpassword: _password,
        usertoken: authToken,
        userId: userId,
      });
      return { loginSuccess: true };
    }
  } catch (error) {
    return { loginSuccess: false };
  }
};

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

    response.ok ? console.log("Yorum yapma başarılı") : console.log("Kullanıcı birden fazla yorum yapamaz");
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

// DELETE COMMENT
export const DeleteUserComment = async (_token, userId) => {
  try {
    const response = await fetch(
      `http://localhost:5206/api/Comment/Delete-Comment`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${_token}`,
          UserId: `${userId}`,
          "Content-Type": "application/json",
          // Diğer isteğe özel başlıkları burada ekleyebilirsiniz
        },
      }
    );

    if (response.ok) {
      console.log("Kullanıcı yorumu başarıyla silindi!");
      window.location.reload();
    } else {
      console.error(
        "Kullanıcı yorumu silinirken bir hata oluştu. Status: ",
        response.status
      );
    }
  } catch (error) {
    console.error("Hata oluştu: ", error);
  }
};



// export const DeleteUser = async (userId) => {
//   try {
//     const response = await fetch(
//       `http://localhost:5206/api/User/Delete-User/${userId}`,
//       {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           // Diğer isteğe özel başlıkları burada ekleyebilirsiniz
//         },
//       }
//     );

//     if (response.ok) {
//       console.log("Kullanıcı başarıyla silindi!");
//     } else {
//       console.error(
//         "Kullanıcı silinirken bir hata oluştu. Status: ",
//         response.status
//       );
//     }
//   } catch (error) {
//     console.error("Hata oluştu: ", error);
//   }
// };

// export const GetUserWithToken = async (token) => {
//   try {
//     const response = await fetch(
//       `http://localhost:5206/api/User/Get-User-With-Token?token=${token}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           // Diğer isteğe özel başlıkları burada ekleyebilirsiniz
//         },
//       }
//     );

//     if (response.ok) {
//       const userData = await response.json(); // API'den gelen kullanıcı verilerini JSON formatında alıyoruz
//       console.log("Kullanıcı verileri: ", userData);
//       return userData; // Kullanıcı verilerini döndürüyoruz
//     } else {
//       console.error(
//         "Kullanıcı verilerini alırken bir hata oluştu. Status: ",
//         response.status
//       );
//       return null; // Hata durumunda null değeri döndürebiliriz veya başka bir hata işleme yöntemi kullanabiliriz
//     }
//   } catch (error) {
//     console.error("Hata oluştu: ", error);
//     return null; // Hata durumunda null değeri döndürebiliriz veya başka bir hata işleme yöntemi kullanabiliriz
//   }
// };
