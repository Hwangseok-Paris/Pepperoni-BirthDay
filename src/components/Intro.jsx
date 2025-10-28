import { FC } from "react";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();
  const goReg = () => {
    navigate("/registration");
    console.log("dd");
  };

  return (
    <>
      <div className="flex flex-col gap-30 items-start max-w-screen-sm w-full mx-auto overflow-x-hidden">
        <div className="flex flex-col gap-4">
          <span className="font-bold sm:text-6xl text-4xl text-green-400 break-words">
            INVITATION
          </span>{" "}
          <span className="font-bold text-3xl">2025. 10. 31 (FRI) 8PM</span>
          <div className="flex flex-col gap-1">
            <span className="text-xl break-words">
              📍Surfers Booth
              <span
                className="break-all"
                onClick={() => window.open("https://www.instagram.com/surfersbooth_mw/", "_blank")}>
                (@Surfersbooth_mw)
              </span>{" "}
            </span>
            <span className="text-xl">서울시 마포구 포은로 54</span>
            <span className="text-xl">door open 8:00pm</span>
          </div>
        </div>

        <div className="flex flex-col text-xl gap-5">
          <span>안녕하세요.</span>
          <span>이번 주 금요일 조그맣게 저의 생일 잔치를 벌여볼까 합니다.</span>
          {/* <span>
            평소에 저를 자주 만나는 사람들도, 오래간만에 제가 보고싶다거나 짧은 인연이었더라도 이
            글을 보시는 지금 이 순간 저에게 ‘초대’당하신 거니까 관심있으시다면 아래 참가 버튼을 눌러
            초대명단에 이름을 올려보세요.
          </span> */}
          <span>
            장소는 제가 애정하는 망원동의 바 ‘서퍼스 부스’구요 음악과 맥주를 적당히 준비해
            두겠습니다. 준비해 둔 맥주가 소진된 이후부터는 서퍼스의 번영을 위해 원하시는 음료를 각자
            구매해 드셔주시면 감사하겠습니다. 서퍼스에는 맛있는 위스키와 칵테일, 태국 맥주들이
            있어요.
          </span>
          <span>
            재미있는 이벤트같은건 없습니다! 그냥 술과 함께 도란도란 이야기 나누는 분위기일 테니
            기대하지 말아 주시길 바라요.
          </span>
          <span>
            아래 안내 사항을 잘 읽어 주시고, 귀한 걸음 해 주실 분께서는 아래 버튼을 눌러 간단한
            정보를 입력해 주시면 감사하겠습니다!
          </span>
        </div>

        <div className="flex flex-col gap-9 border border-green-400 rounded-md py-10 px-5 w-full overflow-x-hidden">
          <div className="w-full text-center font-bold text-2xl">안내</div>
          <span>
            ❗️ 두 손 가볍게 오셔도 괜찮습니다. 오셔서 사고 치지 않고 재밌게 놀다가, 집에 두 발로
            멀쩡히 돌아가 꿀잠 주무신다면 그것만으로 저는 감사해요.
          </span>

          <span>❗️ 10 ~ 11시쯤 다 같이 사진 한 장 남겨볼까 합니다! (변동가능)</span>
          <span>
            ❗️ 11시 이후에는 Mongsang
            <span onClick={() => window.open("https://www.instagram.com/neverthelessthan")}>
              (@neverthelessthan)
            </span>
            님의 디제잉이 있을 예정입니다.
          </span>
          <span>
            ❗️ 배가 고프신 분은 바로 옆 원앙
            <span onClick={() => window.open("https://www.instagram.com/wonang118")}>
              (@wonang118)
            </span>
            에서 맛있는 술과 안주를 즐겨보시길 추천드립니다.
          </span>
          <span>❗️ 각종 후원/협찬은 마다하지 않겠습니다ㅎㅎ. 다만 사전에 문의 부탁드립니다.</span>
          <span className="font-semibold text-green-200">
            ❗️ 디제잉이 가능하시다거나 기깔나는 플레이리스트를 가지고 계신 분이 계시다면 꼭
            알려주세요!!!!
          </span>
          <span className="font-semibold">❗️ 이외 별도 문의사항은 DM 부탁드릴게요^^ 🙏</span>
        </div>

        <div className="w-full">
          <button
            className="w-full h-20 border border-green-400 bg-green-400/50 text-white rounded-sm text-xl"
            onClick={goReg}>
            등록하기
          </button>
        </div>
      </div>
    </>
  );
}
