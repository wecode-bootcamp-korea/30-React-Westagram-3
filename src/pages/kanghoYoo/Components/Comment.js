export default function Comment(props) {
  return (
    <li className="mentsWrap">
      <span className="commentId">{props.name}</span> {props.text}
    </li>
  );
}
