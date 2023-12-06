import { Button, Rating } from "@mui/material";
import React, { useState } from "react";
import { allComments } from "../../const/mockComments";
import { AddComment, getAllCommand, getAuthToken } from "../../api/server";

export default function Comments({ commentStar }) {
  // const [comment, setComment] = useState(''); // Kullanıcının girdiği yorum
  // const [userImage, setUserImage] = useState(''); // Kullanıcının profil resmi
  // const [stars, setStars] = useState(0); // Kullanıcının verdiği yıldız sayısı

  // const handleStarsChange = (newValue) => {
  //     setStars(newValue);
  // };

  const handleSendComment = async () => {
    try {
      // Burada comment, userImage, stars gibi verileri kullanarak bir API'ye gönderme işlemi yapabilirsiniz.
      // Örneğin, fetch veya başka bir HTTP kütüphanesi kullanarak bir POST isteği gönderilebilir.
      const response = await fetch("https://your-api-endpoint.com/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Diğer gereken başlıkları burada ekleyebilirsiniz.
        },
        body: JSON.stringify({
          comment: comment,
          userImage: userImage,
          stars: stars,
        }),
      });

      if (response.ok) {
        console.log("Yorum başarıyla gönderildi.");
        // Yorum başarıyla gönderildiyse, gerekiyorsa kullanıcıya bir bilgi verebilirsiniz.
      } else {
        console.error("Yorum gönderilirken bir hata oluştu.");
        // Hata durumunda kullanıcıya bir hata mesajı verebilirsiniz.
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };

  const exampleDay = new Date();
  const handleInput = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto"; // Önce textarea'nın yüksekliğini sıfırla
    textarea.style.height = `${textarea.scrollHeight}px`; // Yüksekliği içeriğe göre ayarla
    setComment(textarea.value); // Yorumu güncelle
  };

  return (
    <div className="w-full  flex flex-col items-center">
      <div className="desktop2:w-6/12 desktop1:w-7/12">
        {getAuthToken() != undefined ? (
          <div className=" w-full min-h-[155px] flex gap-x-4 p-3 mb-10 shadow-md shadow-[color:var(--bg-secondary)] rounded-2xl bg-[color:var(--bg-base-secondary)]">
            <div className="w-16  flex  justify-center items-start ">
              <img
                className="w-full "
                src="https://cdn.discordapp.com/attachments/1080900269572898817/1173299552971931738/defaultProfileIcon.png?ex=6563735c&is=6550fe5c&hm=00d71729e12f08394efd0ae221a8e49d39a4af3ef0d2a3ba817540f9a0e807d1&"
                alt="kullanıcıResmi"
              />
            </div>
            <div className="w-full h-auto flex flex-col gap-y-2 pl-4 border-l border-[#d7d7d7]">
              <textarea
                className="w-full min-h-[75px] block pl-3 p-4 bg-transparent break-words resize-none text-[color:var(--color-base)] outline-none border border-[color:var(--bg-secondary)] rounded-md text-sm placeholder:text-sm"
                name=""
                id=""
                onChange={handleInput}
                placeholder="Bir yorum yazınız..."
              ></textarea>
              <div className="flex justify-between">
                <Rating
                  name="simple-controlled"
                  value={5}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <div>
                  <Button
                    onClick={getAllCommand}
                    className="font-poppins py-2 px-4 rounded-full border border-[color:var(--bg-secondary)] transition-all hover:bg-[color:var(--bg-base)] hover:text-[color:var(--color-basse)] hover:scale-90"
                    //   onClick={handleSendComment}
                  >
                    Gönder
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="w-full text-center text-xl font-bold font-sans pb-2">
          {" "}
          Kullanıcı Yorumları
        </div>

        {allComments.map((comment, index) => (
          <div
            key={index}
            className="w-full flex gap-x-4 p-3 mb-5 shadow-md shadow-[color:var(--bg-secondary)] bg-[color:var(--bg-base-secondary)] rounded-2xl"
          >
            <div className="w-16 flex justify-center items-center">
              <img
                className="w-full"
                src="https://cdn.discordapp.com/attachments/1080900269572898817/1173299552971931738/defaultProfileIcon.png?ex=6563735c&is=6550fe5c&hm=00d71729e12f08394efd0ae221a8e49d39a4af3ef0d2a3ba817540f9a0e807d1&"
                alt="kullanıcıResmi"
              />
            </div>
            <div className="w-full flex flex-col gap-y-1   text-justify break-words   pl-2 border-l border-[#d7d7d7]">
              <span className="text-[color:var(--color-base)] font-bold  text-base">
                {comment.userName}
              </span>
              <span className="text-[color:var(--color-base-secondary)] text-xs font-roboto">
                {comment.userComment}
              </span>
              <div className="flex justify-between">
                <div>
                  <Rating name="read-only" value={comment.userVote} readOnly />
                </div>
                <div className="text-[color:var(--color-base-secondary)] font-roboto text-xs">
                  {exampleDay.toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
