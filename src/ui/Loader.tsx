import styled from "styled-components";

const LoaderWrapper = styled.div`
  width: 100%;

  p {
    text-align: center;
  }
  .loader {
    position: relative;
    width: 45px;
    height: 45px;
    margin: 20px auto 90px;
    animation: spin 2s ease-in-out infinite;
  }

  .bubble-1,
  .bubble-2 {
    position: absolute;
    top: 0;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: #5fd9ff;
  }

  .bubble-2 {
    top: auto;
    bottom: 0;
  }

  .bubble-1,
  .bubble-2 {
    animation: bounce 2s ease-in-out infinite;
  }

  .bubble-2 {
    animation-delay: -1s;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: scale(0);
    }

    50% {
      transform: scale(1);
    }
  }
`;

export const Loader = () => (
  <LoaderWrapper>
    <p>Loading...</p>
    <div className="loader">
      <div className="bubble-1"></div>
      <div className="bubble-2"></div>
    </div>
  </LoaderWrapper>
);
