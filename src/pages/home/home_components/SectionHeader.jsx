import styled from 'styled-components';

const Container = styled.div`
  height: 22px;
  padding: 0 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderTitle = styled.div`
  font-size: 20px;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
`;

const HeaderMore = styled.div``;

const SectionHeader = ({ headerText, moreText }) => (
  <Container>
    <HeaderTitle>{headerText}</HeaderTitle>
    <HeaderMore>{moreText}</HeaderMore>
  </Container>
);

export default SectionHeader;
