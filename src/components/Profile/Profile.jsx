import css from "../Profile/Profile.module.css"

export default function Profile({ avatar, username, tag, location, stats }) {
    return (
<div className={css.container}>
<div className={css.userBlock}>
                <img className={css.imgAvatar}
                    src={avatar}
alt="User avatar"/>
                <p className={css.username}>{username}</p>
                <p className={css.userInf}>@{tag}</p>
                <p className={css.userInf}>{location}</p>
</div>

<ul className={css.list}>
<li className={css.item}>
<span>Followers</span>
                    <span className={css.numbers}>{stats.followers}</span>
</li>
<li className={css.item}>
<span>Views</span>
                    <span className={css.numbers}>{ stats.views}</span>
</li>
<li className={css.item}>
<span>Likes</span>
                    <span className={css.numbers}>{stats.likes}</span>
</li>
</ul>
</div>

)
}




