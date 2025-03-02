import clsx from "clsx";

import css from "../FriendListItem/FriendListItem.module.css"

export default function FriendListItem({ avatar, name, isOnline }) {

  const statusClsx = clsx(css.text, isOnline ? css.online : css.offline)

  return (
    <div className={css.container}>
      <img src={avatar} alt={name} width="48" /> 
      <p className={css.text}>{name}</p>
      <p className={statusClsx}>{isOnline ? "Online" : "Offline"}</p> 
    </div>
  );
}
