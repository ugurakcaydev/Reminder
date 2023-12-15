import { Rating } from "@mui/material";
import FeedbackIcon from "@mui/icons-material/Feedback";
import classNames from "classnames";
import { useCurrentUser } from "../../store/currentUser/hooks";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export default function UserComments({ commentData, loading }) {
  const { currentUser } = useCurrentUser();

  return (
    <div className="w-full  flex flex-col gap-y-6 justify-start items-center  ">
      <p className="text-xl font-bold font-sans rounded-md  bg-[#232e35e3] py-4 px-8 flex items-center justify-center roundedxl text-[color:var(--color-primary)]">
        Kullanıcı Yorumları
      </p>
      <div className="w-full h-auto flex flex-col gap-y-5 items-center justify-start">
        {loading ? (
          <>
            <span className="loading loading-ring loading-lg"></span>
          </>
        ) : (
          <>
            {commentData?.length === 0 ? (
              <>
                <div className="mt-4 rounded-3xl py-5 px-8 border-none bg-[#232E35] hover:bg-[#2d3b45] flex justify-start items-center gap-x-7">
                  <FeedbackIcon fontSize="large" />
                  <div className="text-left">
                    <span className="font-semibold text-xl">
                      Bu konuda ne düşündüğünüzü merak ediyoruz!
                    </span>
                    <p className="text-base text-[#d4dbe0]">
                      Daha önce hiç yorum yapılmamış, ilk siz olun !
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                {commentData
                  ?.sort((a, b) => b.Star - a.Star)
                  .map((comment, index) => (
                    <div
                      key={index}
                      className={classNames(
                        "w-full flex gap-x-4 p-4 shadow-md shadow-[color:var(--bg-secondary)] bg-[color:var(--bg-base-secondary)] rounded-2xl",
                        {
                          "bg-[#816d43c9]":
                            comment?.UserId == currentUser?.userId,
                        }
                      )}
                    >
                      <div className="w-16  flex justify-center items-start">
                        <img
                          className="w-full"
                          src="https://cdn.discordapp.com/attachments/1080900269572898817/1173299552971931738/defaultProfileIcon.png?ex=6563735c&is=6550fe5c&hm=00d71729e12f08394efd0ae221a8e49d39a4af3ef0d2a3ba817540f9a0e807d1&"
                          alt="kullanıcıResmi"
                        />
                      </div>
                      <div className="w-full flex flex-col gap-y-1.5   text-justify break-words   pl-2 border-l border-[#d7d7d7]">
                        <span className="text-[color:var(--color-primary)] font-bold  text-lg">
                          {comment.UserName}
                        </span>
                        <span className="text-[color:var(--color-base)] text-sm font-roboto">
                          {comment.UserComment}
                        </span>
                        <div className="flex justify-between">
                          <div>
                            <Rating
                              name="read-only"
                              value={comment.Star}
                              readOnly
                            />
                          </div>
                          <div className="flex flex-col justify-end text-[color:var(--color-base-secondary)] font-roboto text-xs  ">
                            {/* Tarih dönüşümü JSX içinde */}
                            {(() => {
                              const commentDate = new Date(comment.CreatedDate);
                              const gun = commentDate.getDate();
                              const ay = commentDate.getMonth() + 1;
                              const yil = commentDate.getFullYear();
                              const formatCommentDate = `${gun}.${ay}.${yil}`;
                              return formatCommentDate;
                            })()}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

UserComments.propTypes = {
  commentData: PropTypes.array,
};
