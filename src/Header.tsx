import styled from "styled-components";

const Header = () => {
  const pageList = ["Home", "Ai-Styling", "Community", "Customer"];
  return (
    <HeaderWrapper>
      <LogoWrapper>Ai in Style</LogoWrapper>
      <PageWrapper>
        {pageList.map((page) => (
          <div key={page}>{page}</div>
        ))}
      </PageWrapper>
      <LoginWrapper>Login</LoginWrapper>
    </HeaderWrapper>
  );
};

const LoginWrapper = styled.div`
  font-size: 32px;
  width: 15%;
`;

const PageWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  width: 70%;
`;

const LogoWrapper = styled.div`
  font-size: 32px;
  font-weight: 800;
  width: 15%;
`;

const HeaderWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  width: calc(100% - 60px);
  padding: 12px 30px;
`;

export default Header;
