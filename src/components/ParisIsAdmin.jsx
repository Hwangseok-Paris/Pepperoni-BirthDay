import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function ParisisAdmin() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "registrations"), orderBy("createdAt", "desc"));

    const unsub = onSnapshot(
      q,
      (snap) => {
        const data = snap.docs.map((d) => {
          const v = d.data();
          return {
            id: d.id,
            name: v.name ?? "",
            eta: v.eta ?? "",
            note: v.note ?? "",
            createdAt: v.createdAt?.toDate?.() ?? null,
          };
        });
        setList(data);
        setLoading(false);
      },
      (err) => {
        console.error(err);
        setLoading(false);
      },
    );

    return () => unsub();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <header className="flex items-end justify-between mb-6">
        <h1 className="text-3xl font-bold text-orange-600">Registrations</h1>
        <div className="text-sm text-gray-600">{loading ? "Loading..." : `${list.length}명`}</div>
      </header>

      {list.length === 0 && !loading ? (
        <div className="text-center text-gray-500 border border-dashed border-orange-300/60 rounded p-10 bg-white">
          아직 등록 데이터가 없습니다.
        </div>
      ) : (
        <ul className="space-y-3">
          {list.map((item) => (
            <li key={item.id} className="border border-orange-200 rounded-md p-4 bg-white shadow-sm">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-lg text-[#1f1409]">{item.name || "(무명)"}</div>
                <div className="text-xs text-gray-600">
                  {item.createdAt ? item.createdAt.toLocaleString() : "—"}
                </div>
              </div>
              <div className="mt-1 text-orange-600">ETA: {item.eta || "—"}</div>
              {item.note && <div className="mt-2 text-sm text-gray-700">“{item.note}”</div>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
