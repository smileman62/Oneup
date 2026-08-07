"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [note, setNote] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNote(
      "문의가 준비되었습니다. 실제 운영 시 이메일 전송 서비스와 연결해 주세요.",
    );
  };

  return (
    <form className="contact-form reveal" onSubmit={onSubmit}>
      <label>
        NAME / COMPANY
        <input
          type="text"
          name="name"
          placeholder="이름 또는 회사명"
          required
        />
      </label>
      <label>
        EMAIL
        <input
          type="email"
          name="email"
          placeholder="hello@company.com"
          required
        />
      </label>
      <label>
        INQUIRY TYPE
        <select name="type" defaultValue="브랜드 광고 및 협업">
          <option>브랜드 광고 및 협업</option>
          <option>크리에이터 섭외</option>
          <option>커머스 / PB</option>
          <option>글로벌 진출</option>
          <option>크리에이터 지원</option>
        </select>
      </label>
      <label>
        MESSAGE
        <textarea
          name="message"
          rows={3}
          placeholder="프로젝트와 일정을 알려주세요."
          required
        />
      </label>
      <button type="submit">
        SEND INQUIRY <span>↗</span>
      </button>
      <p className="form-note" role="status">
        {note}
      </p>
    </form>
  );
}
