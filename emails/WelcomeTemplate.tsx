import {
  Html,
  Body,
  Tailwind,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Hello Abord!</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Text className="text-3xl font-bold">Hello {name}</Text>
            <Link
              className="text-black font-serif"
              href="http://localhost:3000"
            >
              www.localhost.com
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
