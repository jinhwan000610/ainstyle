import React from 'react';
import './NoticeBody.css';

interface Notice {
  id: number;
  title: string;
  content: string;
  date: string;
}

const notices: Notice[] = [
  { id: 1, title: "첫 번째 공지사항", content: "첫 번째 공지사항의 내용입니다.", date: "2024-05-16" },
  { id: 2, title: "두 번째 공지사항", content: "두 번째 공지사항의 내용입니다.", date: "2024-05-15" },
  { id: 3, title: "세 번째 공지사항", content: "세 번째 공지사항의 내용입니다.", date: "2024-05-14" },
];

const NoticeBody: React.FC = () => {
  return (
    <div className="NoticeBoard">
      <h1>공지사항</h1>
      <ul className="NoticeList">
        {notices.map(notice => (
          <li key={notice.id} className="NoticeItem">
            <h2>{notice.title}</h2>
            <p>{notice.content}</p>
            <small>{notice.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoticeBody;