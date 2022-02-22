import { useEffect, useState } from 'react';
import Article from './Article';

function Main() {
  const [ArticleList, setArticleList] = useState([]); // 댓글 내용만 모아놓은 배열

  useEffect(() => {
    fetch('http://localhost:3000/data/suinJung/feeds.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setArticleList(data);
      });
  }, []);

  return (
    <>
      <main>
        {ArticleList.map(feed => {
          return <Article key={feed.id} name={feed.userName} />;
        })}
      </main>
    </>
  );
}

export default Main;
