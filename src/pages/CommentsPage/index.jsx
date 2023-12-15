import { Button, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { AddComment, GetAllCommand } from "../../api/server";
// import { Add } from "@mui/icons-material";
import { useCurrentUser } from "../../store/currentUser/hooks";
import UserComments from "../../components/userComments";


export default function Comments() {
  const [commentData, setCommentData] = useState([]);
  const [comment, setComment] = useState("");
  const [star, setStar] = useState(5);
  const { currentUser } = useCurrentUser();
  const [loading, setLoading] = useState(false)

  const handleInput = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    setComment(textarea.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await GetAllCommand();
        // Veri yüklenmesini taklit etmek amacıyla yapılmış bir kod
        setTimeout(() => {
          setCommentData(response);
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full min-h-[calc(100vh-450px)] flex flex-col items-center">
      <div className="desktop2:w-6/12 desktop1:w-7/12">
        {currentUser && currentUser?.usertoken && !commentData?.find(comment => comment?.UserId === currentUser?.userId) ? (
          <div className="w-full min-h-[155px] flex gap-x-4 p-3 mb-10 shadow-md shadow-[color:var(--bg-secondary)] rounded-2xl bg-[color:var(--bg-base-secondary)]">
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
                  value={star}
                  onChange={(event, newValue) => {
                    setStar(newValue);
                  }}
                />
                <div>
                  <Button
                    onClick={async () => {
                      await AddComment(
                        comment,
                        star,
                        currentUser.usermail,
                        currentUser.usertoken
                      );
                      const updatedComments = await GetAllCommand();
                      setCommentData(updatedComments);
                    }}
                    className="font-poppins py-2 px-4 rounded-full border border-[color:var(--bg-secondary)] transition-all hover:bg-[color:var(--bg-base)] hover:text-[color:var(--color-basse)] hover:scale-90"
                  >
                    Gönder
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <UserComments commentData={commentData} loading={loading} />

      </div>
    </div>
  );
}
