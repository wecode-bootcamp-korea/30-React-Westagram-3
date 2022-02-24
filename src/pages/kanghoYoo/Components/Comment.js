export default function Comment(props) {
  return (
    <li className="mentsWrap">
      <span className="commentId">{props.name}</span> <span>{props.text}</span>
    </li>
  );
}
