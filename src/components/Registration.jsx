import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [name, setName] = useState("");
  const [eta, setEta] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !eta.trim()) return; // 최소 유효성

    try {
      setLoading(true);
      await addDoc(collection(db, "registrations"), {
        name: name.trim(),
        eta: eta.trim(),
        note: note.trim(),
        createdAt: serverTimestamp(),
        ua: navigator.userAgent,
      });
      // 성공 후 리셋
      setName("");
      setEta("");
      setNote("");
      alert("등록 완료!");
      navigate("/complete");
    } catch (err) {
      console.error(err);
      alert("등록 실패. 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center">
          <div className="text-5xl font-bold text-green-400">REGISTRATION</div>

          <div className="flex flex-col gap-10 pt-25">
            <div className="flex flex-col justify-center items-center gap-2">
              <label htmlFor="" className="text-green-400 text-2xl">
                이름
              </label>
              <input
                type="text"
                className="w-85 h-15 border border-green-400 rounded text-2xl px-4 text-center focus:outline-none placeholder:text-gray-600"
                placeholder="이름 혹은 제가 알 만한 무언가로.."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <label htmlFor="" className="text-green-400 text-2xl">
                도착 예정 시간
              </label>
              <input
                type="text"
                className="w-85 h-15 border border-green-400  rounded text-2xl px-4 text-center focus:outline-none placeholder:text-gray-600"
                placeholder="8시"
                value={eta}
                onChange={(e) => setEta(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <label htmlFor="" className="text-green-400 text-2xl">
                기타
              </label>
              <textarea
                type="text"
                className="w-85 h-50 border border-green-400 rounded text-xl p-4 focus:outline-none placeholder:text-gray-600"
                placeholder="요청, 문의, 아무 말"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
            <div className="w-full pt-5">
              <button
                type="submit"
                disabled={loading || !name.trim() || !eta.trim()}
                className="w-full h-20 border border-green-400 bg-green-400/50 text-white rounded-sm text-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "등록 중..." : "등록하기"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
