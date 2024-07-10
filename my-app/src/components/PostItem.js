import React from "react"
import css from "./css/PostItem.module.css";


function PostItem(props) {
    return (
        <div>
            {Array.isArray(props.savedPosts) ? props.savedPosts.map(post => {
                const {title, name, image, description} = post;
                return (
                    <div className={css.SearchItem} key={title}>
                        <p>{title}</p>
                        <p>{name}</p>
                        <img src={image} alt="random"/>
                        <p>{description}</p>
                    </div>
                );
            }) : null}
        </div>
    );
}

export default PostItem