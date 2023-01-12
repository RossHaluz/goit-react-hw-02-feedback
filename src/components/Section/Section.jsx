import { Container, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Container>
  );
};

export default Section;
