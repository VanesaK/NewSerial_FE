import styled from "@emotion/styled";

const breakpoint = "768px";

const mediaQuery = () => `@media(min-width:${breakpoint})`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #ff6f4f;

  ${mediaQuery} {
    background-color: white;
  }
`;

export const Top = styled.div`
  label: top;
  background-color: #ff6f4f;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  ${mediaQuery} {
    padding-top: 30px;
  }
`;

export const Title = styled.div`
  width: 100px;
  height: 35px;
  background-color: white;
  color: #ff6f4f;
  font-family: Bangers;
  border-radius: 20px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const User = styled.div`
  font-family: Bangers;
  color: white;
  font-size: 2rem;
  margin: 20px 0;
`;

export const TabBox = styled.div`
  label: tab-box;
  width: 100%;
  padding: 0 2px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  ${mediaQuery} {
    width: 60%;
    height: 80px;
    background-color: white;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    margin-bottom: 0;
    justify-content: center;
  }
`;

export const TabBoxUnderline = styled.div`
  label: tab-box-underline;
  display: none;

  ${mediaQuery} {
    display: block;
    width: 50%;
    height: 1px;
    background-color: #d9d9d9;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const Tab = styled.div<{ selected: boolean }>`
  label: tab;
  width: 32%;
  height: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 1.5rem;
  font-family: Noto Sans KR;
  font-weight: ${(props) => (props.selected ? "700" : "400")};
  opacity: ${(props) => (props.selected ? "100%" : "50%")};
  position: relative;

  ${mediaQuery} {
    width: 20%;
    height: 100%;
    justify-content: center;
    color: ${(props) => (props.selected ? "#ff6f4f" : "#7f8386")};

    .tab__text {
      margin: 5px 0;
    }
  }
`;

export const TabLine = styled.div`
  height: 50px;
  width: 1px;
  background-color: white;
  opacity: 50%;
`;

export const TabUnderline = styled.div`
  label: tab-underline;
  width: 50%;
  height: 2px;
  background-color: white;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translate(-50%, 0);

  ${mediaQuery} {
    background-color: #ff6f4f;
    bottom: 0;
    z-index: 999;
  }
`;

export const Main = styled.div`
  label: main;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 40px 25px;
  box-sizing: border-box;
  font-family: Noto Sans KR;
  margin-top: 30px;

  .main--highlight {
    color: #ff6f4f;
    font-weight: 700;
  }

  & > img {
    width: 50%;
    height: 200px;
    margin: 20px 0;
  }

  ${mediaQuery} {
    width: 60%;
    margin-top: 0;
    border-radius: 0;
    padding: 40px 25px;
  }
`;

export const MainTop = styled.div<{ selected: boolean }>`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 15px;

  & > .main-top--small {
    color: #ff6f4f;
    font-size: 1.2rem;
    justify-content: center;
  }

  ${mediaQuery} {
    width: ${(props) => (props.selected ? "60%" : "fit-content")};
    margin-bottom: ${(props) => (props.selected ? 0 : "10px")};
    background-color: ${(props) => (props.selected ? "none" : "#d9d9d9")};
    justify-content: ${(props) => (props.selected ? "end" : "center")};
    color: #ff6f4f;
    border-radius: 20px;
    padding: 2px 10px;
  }
`;

export const Info = styled.div`
  width: 15px;
  height: 15px;
  background-color: #939d9e;
  color: white;
  border-radius: 50%;
`;

export const MainTitle = styled.div`
  width: 100%;
  font-size: 2rem;
  margin-top: 35px;
  span {
    font-size: 3.6rem;
  }

  ${mediaQuery} {
    width: 55%;
    margin-top: 0;
  }
`;

export const MainDetail = styled.div`
  label: main-detail;
  width: 70%;
  padding: 10px 20px;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  position: relative;
  font-size: 1.5rem;

  img {
    width: 60px;
    height: auto;
    position: absolute;
    bottom: -15px;
    right: -30px;
  }

  ${mediaQuery} {
    width: 50%;
  }
`;

export const List = styled.div<{ border: boolean }>`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  font-family: Noto Sans KR;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: ${(props) => (props.border ? "1px solid #e0e0e0" : "none")};

  ${mediaQuery} {
    width: 92%;
    border-top: none;
  }
`;

export const ListMid = styled.div`
  width: 60%;
  font-size: 1.4rem;

  .list-mid__quiz {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: start;
  }

  .list-mid__bookmark {
    width: 100%;
    white-space: normal;
    height: 40px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    text-align: start;
  }
`;

export const ListMidQuiz = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;

  div {
    margin-right: 10px;
  }
`;

export const ListRight = styled.div`
  width: 20%;
  color: #7f8386;
  font-size: 1.3rem;
`;

export const NoData = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  color: #7f8386;
  font-size: 2.5rem;
`;

export const ModalTitle = styled.div`
  font-family: Noto Sans KR;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const ModalMain = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 5px 20px;
  margin: 20px 0;
`;

export const ModalMainText = styled.div`
  font-family: Noto Sans KR;
  font-size: 1.4rem;
  display: flex;
  justify-content: start;
`;

export const ModalBottom = styled.div`
  font-family: Noto Sans KR;
  font-size: 1.4rem;
  color: #ff6f4f;
  font-weight: 700;
`;
