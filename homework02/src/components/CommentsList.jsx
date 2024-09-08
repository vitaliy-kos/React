import { useState } from "react";

function CommentsList() {
    const [comments, setComments] = useState([
      { id: 1, text: "Это первый комментарий 1" },
      { id: 2, text: "Это второй комментарий 2" },
      { id: 3, text: "Это третий комментарий 3" }
    ]);

    const deleteComment = (id) => {
        setComments(comments.filter(comment => comment.id != id));
    }
  
    return comments.map((comment) => 
        <div className="comments_list" key={comment.id}>
            <div className="comment">
                <div className="text">{comment.text}</div>
                <div className="btn_block">
                    <button onClick={deleteComment.bind(this, comment.id)}>Удалить</button>
                </div>
            </div>
        </div>
    );
}

export default CommentsList