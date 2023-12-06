import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getAuthToken = () => {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=").map((c) => c.trim());
    if (name === "authToken") {
      return value;
    }
  }
  return null;
};

export const getFirstChar = () => {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=").map((c) => c.trim());
    if (name === "firstChar") {
      return value;
    }
  }
  return null;
};

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
      return response;
    }

    const responseJson = await response.json();

    // Extract the token from the response
    const authToken = responseJson.Token;

    // Store the token in a cookie
    document.cookie = `authToken=${authToken}; path=/`;

    const firstChar = _email.charAt(0).toLowerCase();

    // Store the first character in a cookie
    document.cookie = `firstChar=${firstChar}; path=/`;

    window.location.href = "/dashboard";
    return { response, responseJson };
  } catch (error) {
    console.error("Giriş yaparken hata oluştu: ", error);
    return null;
  }
};

// eslint-disable-next-line no-unused-vars
export const AddComment = async ({ _text, _stars }) => {
  try {
    const authToken = getAuthToken();

    const response = await fetch(
      "http://localhost:5206/api/Comment/Add-Comment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          UserComment: "koddan yazı gönderiyorum", // Değişiklik burada
          Star: 2, // Değişiklik burada
        }),
      }
    );

    console.log(response, "aaaaa");

    // Handle the response as needed
  } catch (error) {
    console.error("Giriş yaparken hata oluştu: ", error);
    return null;
  }
};

export const getAllCommand = async () => {
  try {
    const response = await fetch(
      "http://localhost:5206/api/Comment/Get-All-Comment",
      {
        method: "GET",
      }
    );

    const allJsonCommand = await response.json();

    console.log(allJsonCommand);
  } catch (error) {
    console.error(error);
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
