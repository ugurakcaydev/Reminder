import { Link } from "react-router-dom";
import LoginRegisterButtons from "../components/loginRegisterButtons";
import PropTypes from "prop-types";
import { useState } from "react";
import { CreateUser, LoginUser } from "../api/AuthData/index";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LoginRegisterLayout({ title }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [passwordAgain, setPasswordAgain] = useState("");
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#1d2629] ">
      <ToastContainer />
      <div className="max-w-[880px] flex-col justify-center items-center text-white text-center ">
        <div className=" flex justify-between p-2  rounded-3xl  bg-[#232E35]">
          <div className="w-1/2 flex items-center">
            <div className="flex flex-col  p-7 text-center break-words">
              <img className="" src="/images/loginimage1.png" alt="resim" />
              <p className="text-xl font-bold">
                Ekibinizin farklı saat dilimlerindeki kullanılabilirliğini
                yönetin.
              </p>
              <Link to={"#"}>Daha fazlası için tıkla</Link>
            </div>
          </div>
          <div className="w-[1px] h-auto bg-[#a0a0a0]" />
          {/**Giriş Sayfası - Sağ Kısım */}
          <div className="w-1/2 ">
            <form
              className="flex flex-col  px-8 py-5 text-center break-words"
              onSubmit={async (event) => {
                event.preventDefault();
                const { loginSuccess } = await LoginUser({
                  _email: email,
                  _password: password,
                });
                if (loginSuccess) {
                  navigate("/dashboard");
                } else {
                  console.log("giriş başarısız");
                }
              }}
            >
              <div>
                {title === "register" ? (
                  <>
                    <p className="text-xl font-bold mb-2">
                      Hesabınızı Oluşturun
                    </p>
                    <p className="text-sm font-normal text-[#d4dbe0]">
                      Daima ücretsiz. İstediğiniz zaman yükseltebilirsiniz.
                    </p>
                    <div className="flex flex-col gap-y-2 p-8">
                      <LoginRegisterButtons
                        title={"Kayıt Ol"}
                        other={"Google"}
                      />
                      <LoginRegisterButtons
                        title={"Kayıt Ol"}
                        other={"Microsoft"}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-xl font-bold">Hesabınıza Giriş Yapın</p>
                    <div className="flex flex-col gap-y-2 p-8">
                      <LoginRegisterButtons
                        title={"Giriş Yap"}
                        other={"Google"}
                      />
                      <LoginRegisterButtons
                        title={"Giriş Yap"}
                        other={"Microsoft"}
                      />
                    </div>
                  </>
                )}
                {/* <div className="flex flex-col gap-y-2 p-8">
                  {title === "register" ? (
                    <>
                      <LoginRegisterButtons
                        title={"Kayıt Ol"}
                        other={"Google"}
                      />
                      <LoginRegisterButtons
                        title={"Kayıt Ol"}
                        other={"Microsoft"}
                      />
                    </>
                  ) : (
                    <>
                      <LoginRegisterButtons
                        title={"Giriş Yap"}
                        other={"Google"}
                      />
                      <LoginRegisterButtons
                        title={"Giriş Yap"}
                        other={"Microsoft"}
                      />
                    </>
                  )}
                </div> */}
              </div>
              <div className="flex justify-normal items-center">
                <span className="w-full h-[1px] bg-[#a0a0a0]" />
                <div className=" p-2 rounded-full bg-[#6161617e] border border-[#a0a0a0] text-xs font-semibold whitespace-nowrap">
                  Yada
                </div>
                <span className="w-full h-[1px] bg-[#a0a0a0]" />
              </div>
              <div className="flex flex-col gap-y-2 p-8">
                <div className="flex flex-col gap-y-1 mb-1">
                  <span className="text-base font-bold text-left">
                    E-posta Adresi
                  </span>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="bg-[#616161] rounded-lg py-2 pl-2 placeholder:text-[#c1c1c1]"
                    type="text"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <div className="flex justify-between">
                    <span className="text-base font-bold text-left">Şifre</span>
                    <button
                      className="bg-[#252525] transition-all hover:bg-[#424242] p-1 rounded-lg"
                      onClick={() => {
                        setShow((show) => !show);
                      }}
                    >
                      {show ? "Gizle" : "Göster"}
                    </button>
                  </div>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="bg-[#616161] rounded-lg py-2 pl-2"
                    type={show ? "text" : "password"}
                    placeholder="Şifreniz"
                  />
                </div>

                {/* {title === "register" && (
                  <div className="flex flex-col gap-y-1">
                    <div className="flex justify-between">
                      <span className="text-base font-bold text-left">
                        Şifre Tekrar
                      </span>
                      <button>Göster</button>
                    </div>
                    <input
                      onChange={(e) => {
                        setPasswordAgain(e.target.value);
                      }}
                      className="bg-[#616161] rounded-lg py-2 pl-2"
                      type="text"
                    />
                  </div>
                )} */}

                {title === "register" ? (
                  <Link
                    className="w-full my-2 text-xl p-2 font-bold bg-[#252525] rounded-full"
                    onClick={async () => {
                      const { registerSuccess } = await CreateUser({
                        _email: email,
                        _password: password,
                      });
                      if (registerSuccess) {
                        navigate("/login");
                      } else {
                        console.log("kayıt başrısız");
                      }
                    }}
                  >
                    Kayıt Ol
                  </Link>
                ) : (
                  <>
                    <input
                      className="w-full my-2 text-xl p-2 font-bold bg-[#252525] transition-all hover:bg-[#424242] hover:text-tgold rounded-full"
                      type="submit"
                      value="Giriş Yap"
                    />

                    {/*
                      Buradaki kodlar form etiketinin kendisine aktarılmış ve bu kısımdaki kodlar yerine üst kısımda 
                      bulunan input eklenmiştir.
                    <Link
                      // to={"/dashboard"}
                      className="w-full my-2 text-xl p-2 font-bold bg-[#252525] transition-all hover:bg-[#424242] hover:text-tgold rounded-full"
                      onClick={async () => {
                        const { loginSuccess } = await LoginUser({
                          _email: email,
                          _password: password,
                        });
                        if (loginSuccess) {
                          navigate("/dashboard");
                        } else {
                          console.log("giriş başrısız");
                        }
                      }}
                    >
                      Giriş Yap
                    </Link> */}
                  </>
                )}

                {title === "login" ? (
                  <div className="text-left mt-1">
                    <Link to={"#"} className="hover:underline">
                      Şifreni mi unuttun?
                    </Link>{" "}
                  </div>
                ) : (
                  <div className="text-[#D4DBE0]">
                    Zaten hesabınız var mı?{" "}
                    <Link to={"/login"} className="text-tgold hover:underline">
                      Giriş yap
                    </Link>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
        {title === "login" ? (
          <div className="text-base mt-4">
            Buralarda yeni misin?{" "}
            <Link to={"/register"} className="hover:underline text-tgold">
              Hesap Oluştur
            </Link>
          </div>
        ) : (
          <div className="mt-2 rounded-3xl py-5 px-8 border-none bg-[#232E35] hover:bg-[#2d3b45] flex justify-start items-center gap-x-7">
            <svg className="h-[2rem]" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M21 9.02a3 3 0 013 3V18a3 3 0 01-3 3h-.53l-2.2 2.64a1 1 0 01-1.45.09l-.09-.09-2.2-2.64H12a3 3 0 01-3-2.82V18a1 1 0 012 0 1 1 0 00.88 1h3.13a1.01 1.01 0 01.46.11l.04.03a1.06 1.06 0 01.16.12l.02.01.08.09 1.73 2.08 1.73-2.08a1 1 0 01.65-.35L20 19h1a1 1 0 001-1v-5.98a1 1 0 00-1-1 1 1 0 010-2zM15 0a3 3 0 013 3v7a3 3 0 01-3 3h-4.45l-2.2 3.53a1 1 0 01-1.7 0L4.45 13H3a3 3 0 01-3-3V3a3 3 0 013-3h12zm0 2H3a1 1 0 00-1 1v7a1 1 0 001 1h2a1 1 0 01.85.47l1.65 2.64 1.65-2.64A1 1 0 0110 11h5a1 1 0 001-1V3a1 1 0 00-1-1z"
              ></path>
            </svg>
            <div className="text-left">
              <span className="font-semibold text-xl">
                Bir toplantıya katılmanız mı gerekiyor?
              </span>
              <p className="text-sm text-[#d4dbe0]">
                Toplantı bulucumuz yardımcı olabilir - kayıt olmanıza gerek yok!{" "}
                <a href="" className="text-tgold hover:underline">
                  Toplantımı bul
                </a>{" "}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginRegisterLayout;

LoginRegisterLayout.propTypes = {
  title: PropTypes.string,
};
