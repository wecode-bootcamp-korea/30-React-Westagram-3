function Comment({ name, comment }) {
  return (
    <div className="commentblock">
      <div>
        <div>
          <p className="nickname">{name}</p>
          <span>{comment}</span>
        </div>
      </div>
      <div>
        <i className="far fa-heart"></i>
      </div>
    </div>
  );
}

export default Comment;
