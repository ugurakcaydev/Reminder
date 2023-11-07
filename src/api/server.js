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
          
          email: "aassaa@gmail.com",
          password: "123aassa",
        }),
      }
    );
    
    if (!response.ok) {
        //kullanıcı zaten var da olabilir
      console.log("Register failed");
      return null;
    }

    const responseJson = await response.json(); //true dönyor

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
        // Diğer isteğe özel başlıkları burada ekleyebilirsiniz
      },
      body: JSON.stringify({
        email: "aa@gmail.com",
        password: "123a",
      }),
    });

    if (!response.ok) {
      console.log("Login failed");
      return null;
    }

    const responseJson = await response.json();
    console.log(responseJson);
    console.log("Login successful");
    return responseJson;
  } catch (error) {
    console.error("Giriş yaparken hata oluştu: ", error);
    return null;
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
