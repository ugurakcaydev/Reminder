import { Rating } from "@mui/material";
import classNames from "classnames";
import { useCurrentUser } from "../../store/currentUser/hooks";
import PropTypes from "prop-types";
import DeleteIcon from '@mui/icons-material/Delete';
import { DeleteUserComment, GetAllCommand } from "../../api/server";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function UserComments({ commentData }) {
    const { currentUser } = useCurrentUser();


    return (
        <div>
            <div className="w-full h-auto flex flex-col gap-y-2 justify-start items-center ">
                <p className="text-xl font-bold font-sans pb-2">Kullanıcı Yorumları</p>
                <div className="w-full h-auto flex flex-col items-center justify-start">
                    {commentData === null ? (
                        <span className="loading loading-spinner loading-lg"></span>
                    ) : (
                        <>
                            {commentData?.map((comment, index) => (
                                <div
                                    key={index}
                                    className={classNames(
                                        "w-full flex gap-x-4 p-3 mb-5 shadow-md shadow-[color:var(--bg-secondary)] bg-[color:var(--bg-base-secondary)] rounded-2xl",
                                        {
                                            "bg-red-50": comment?.UserId == currentUser?.userId,
                                        }
                                    )}
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
                                            {comment.UserName}
                                        </span>
                                        <span className="text-[color:var(--color-base-secondary)] text-xs font-roboto">
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
                                                22.07.2023
                                            </div>
                                        </div>
                                    </div>
                                    {currentUser && currentUser?.userId === comment?.UserId && (

                                        <>

                                            <div className="flex justify-center items-center">
                                                <button onClick={async () =>
                                                    await DeleteUserComment(
                                                        currentUser?.usertoken,
                                                        comment?.UserId
                                                    )} className="p-2 shadow-sm shadow-black border rounded-full bg-red-400 bg-opacity-50 transition-all hover:bg-red-400 ">
                                                    <DeleteIcon fontSize="medium" />
                                                </button>
                                            </div>
                                        </>
                                    )}

                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

UserComments.propTypes = {
    commentData: PropTypes.array,
};
