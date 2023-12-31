import { setCurrentUser } from "../../store/currentUser/actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      // kullanıcı zaten var da olabilir
      showToast("Kullanıcı zaten kayıtlı");
      console.log("Register failed");
      return { registerSuccess: false };
    }
    console.log(response);

    return { registerSuccess: true };
    // return responseJson;
  } catch (error) {
    console.error("Kayıt yaparken hata oluştu: ", error);
    return { registerSuccess: false };
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

export const GetAllUser = async () => {
  try {
    const response = await fetch(
      "http://localhost:5206/api/User/Get-All-User",
      {
        method: "GET",
      }
    );

    const allJsonCommand = await response.json();
    const value = allJsonCommand.$values;
    return value;
  } catch (error) {
    console.error(error);
  }
};
