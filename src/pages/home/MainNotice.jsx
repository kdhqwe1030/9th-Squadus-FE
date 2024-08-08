import styled from 'styled-components';
import MainNoticeItem from './home_components/MainNoticeItem';
import SectionHeader from './home_components/SectionHeader';

const Container = styled.div`
  min-height: 20%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NoticeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MainNotice = () => (
  <Container>
    <SectionHeader headerText={'중요공지'} moreText={'더보기'}></SectionHeader>
    <NoticeContainer>
      <MainNoticeItem></MainNoticeItem>
      <MainNoticeItem></MainNoticeItem>
    </NoticeContainer>
  </Container>
);

export default MainNotice;
