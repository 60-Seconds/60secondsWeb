import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { info } from 'console';

// Victim 객체를 위한 인터페이스를 정의합니다.
interface Victim {
  disasterIdx : number;
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
    name: '',
    age: null,
    gender: '',
    info: '', // 추가된 속성: 사람에 대한 설명
  });
  const [notification, setNotification] = useState<string>('');
  const [accidentInfo, setAccidentInfo] = useState<Accident | null>(null); // 사고 정보를 저장할 상태 변수

  useEffect(() => {
    fetchAccidentInfo(); // 컴포넌트가 마운트되면 사고 정보를 가져오도록 합니다.
  }, []);

  const fetchAccidentInfo = async () => {
    try {
      const response = await axios.get('http://52.79.56.93/swagger-ui/index.html'); // 서버에서 사고 정보를 가져옵니다.
      setAccidentInfo(response.data);
    } catch (error) {
      console.error('사고 정보를 가져오는 데 실패했습니다.', error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setVictim((prevVictim) => ({
      ...prevVictim,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    try {
      await axios.post('127.0.0.1:8080/v2/victim/register', victim); // 희생자 정보를 서버로 전송합니다.

      setVictim({ 
        name: '',
        age: '',
        gender: '',
        info: '', // 추가된 속성: 사람에 대한 설명
      });

      setNotification('희생자 정보가 등록되었습니다.');
    } catch (error) {
      setNotification('희생자 정보 등록에 실패했습니다.');
    }
  };

  return (
    <div>
      <h2>희생자 정보 등록</h2>
      {notification && <div>{notification}</div>}
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
            type="text"
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
            name="description"
            value={victim.info}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default VictimRegistration;
