
import "react-toastify/dist/ReactToastify.css";



/**
 * *DELETE COMMENT
 * ! Çalışmıyor sebebi navigate olabilir.
 */
// export const DeleteUserComment = async (_token, _userId) => {
//   const navigate = useNavigate();
//   try {
//     const response = await fetch(
//       `http://localhost:5206/api/Comment/Delete-Comment`,
//       {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${_token}`,
//           UserId: `${_userId}`,
//           "Content-Type": "application/json",
//           // Diğer isteğe özel başlıkları burada ekleyebilirsiniz
//         },
//       }
//     );
//     if (response.ok) {
//       console.log("Kullanıcı yorumu başarıyla silindi!");
//       navigate(0);
//     } else {
//       console.error(
//         "Kullanıcı yorumu silinirken bir hata oluştu. Status: ",
//         response.status
//       );
//     }
//   } catch (error) {
//     console.error("Hata oluştu: ", error);
//   }
// };

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
