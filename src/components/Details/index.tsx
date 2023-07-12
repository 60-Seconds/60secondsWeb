import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { BrowserRouter, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';

// Victim 객체를 위한 인터페이스를 정의합니다.
interface Victim {
  disasterIdx: number;
  name: string;
  age: number;
  gender: string;
  info: string; // 추가된 속성: 사람에 대한 설명
}

interface Accident {
  date: string;
  reason: string;
}

const VictimRegistration: React.FC = () => {
  const [victim, setVictim] = useState<Victim>({
    disasterIdx: 0, // 희생자의 재난 인덱스 초기값을 0으로 설정합니다.
    name: '',
    age: 0, // 희생자의 나이 초기값을 0으로 설정합니다.
    gender: '',
    info: '', // 추가된 속성: 희생자에 대한 설명 초기값을 빈 문자열로 설정합니다.
  });
  const [notification, setNotification] = useState<string>(''); // 알림 메시지를 표시할 상태 변수입니다.
  const [accidentInfo, setAccidentInfo] = useState<Accident | null>(null); // 사고 정보를 저장할 상태 변수입니다.

  useEffect(() => {
    fetchAccidentInfo(); // 컴포넌트가 마운트되면 사고 정보를 가져오도록 합니다.
  }, []);

  const fetchAccidentInfo = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8080/v2/disaster/get?type=nat'); // 서버에서 사고 정보를 가져옵니다.
      setAccidentInfo(response.data); // 가져온 사고 정보를 상태 변수에 저장합니다.
    } catch (error) {
      console.error('사고 정보를 가져오는 데 실패했습니다.', error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setVictim((prevVictim) => ({
      ...prevVictim,
      [name]: value, // 입력 필드의 name 속성을 사용하여 해당 속성의 값을 업데이트합니다.
    }));
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault(); // 폼의 기본 동작인 페이지 새로고침을 방지합니다.

    try {
      await axios.post('http://127.0.0.1:8080/v2/victim/register', victim); // 희생자 정보를 서버로 전송합니다.

      setVictim({
        disasterIdx: 0,
        name: '',
        age: 0,
        gender: '',
        info: '', // 추가된 속성: 희생자에 대한 설명 초기값으로 초기화합니다.
      });

      setNotification('희생자 정보가 등록되었습니다.'); // 등록이 성공했음을 알리는 메시지를 설정합니다.
    } catch (error) {
      setNotification('희생자 정보 등록에 실패했습니다.'); // 등록이 실패했음을 알리는 메시지를 설정합니다.
    }
  };

  return (
    <div>
      <nav className='navbar-container'>
        <NavLink to="/">
          {"we'member"}
        </NavLink>
        <NavLink to="/event_registration">사건 등록</NavLink>
        <NavLink to="/victim_registration">희생자 등록</NavLink>
      </nav>
    <div>
      <h2>희생자 정보 등록</h2>
      {notification && <div>{notification}</div>} {/* 알림 메시지를 표시합니다. */}
      {accidentInfo && (
        <div>
          <h3>사고 정보</h3>
          <p>일시: {accidentInfo.date}</p>
          <p>이유: {accidentInfo.reason}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          이름:
          <input
            type="text"
            name="name"
            value={victim.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          나이:
          <input
            type="number" // 입력 필드의 타입을 숫자로 설정합니다.
            name="age"
            value={victim.age}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          성별:
          <input
            type="text"
            name="gender"
            value={victim.gender}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          설명:
          <textarea
            name="info"
            value={victim.info}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">등록</button>
      </form>
    </div>
    </div>
  );
};

export default VictimRegistration;

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <VictimRegistration />
    </BrowserRouter>
  </React.StrictMode>
);
