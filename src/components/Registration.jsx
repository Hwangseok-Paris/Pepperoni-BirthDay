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
          <div className="text-5xl font-bold text-orange-600">REGISTRATION</div>

          <div className="flex flex-col gap-10 pt-25">
            <div className="flex flex-col justify-center items-center gap-2">
              <label htmlFor="" className="text-orange-600 text-2xl">
                이름
              </label>
              <input
                type="text"
                className="w-85 h-15 border border-orange-200 rounded text-xl px-4 text-center focus:outline-none placeholder:text-gray-500 bg-white shadow-inner"
                placeholder="이름 혹은 제가 알 만한 무언가로.."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <label htmlFor="" className="text-orange-600 text-2xl">
                도착 예정 시간
              </label>
              <input
                type="text"
                className="w-85 h-15 border border-orange-200  rounded text-xl px-4 text-center focus:outline-none placeholder:text-gray-500 bg-white shadow-inner"
                placeholder="8시"
                value={eta}
                onChange={(e) => setEta(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <label htmlFor="" className="text-orange-600 text-2xl">
                기타
              </label>
              <textarea
                type="text"
                className="w-85 h-50 border border-orange-200 rounded text-xl p-4 focus:outline-none placeholder:text-gray-500 bg-white shadow-inner"
                placeholder="요청, 문의, 아무 말"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
            <div className="w-full pt-5">
              <button
                type="submit"
                disabled={loading || !name.trim() || !eta.trim()}
                className="w-full h-20 border border-orange-300 bg-orange-500 text-white rounded-sm text-xl font-semibold shadow-[0_10px_25px_rgba(248,113,38,0.28)] disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? "등록 중..." : "등록하기"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
