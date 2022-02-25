export default function Comment({ id, name, text }) {
  return (
    <li className="mentsWrap">
      <span key={id} className="commentId">
        {name}
      </span>
      <span>{text}</span>
    </li>
  );
}
