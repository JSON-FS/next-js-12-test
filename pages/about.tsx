import { GetServerSideProps } from "next";

interface AboutProps {
  myobj: string;
}

export default function About({ myobj }: AboutProps) {
  return <h1>{myobj}</h1>;
}

export const getServerSideProps: GetServerSideProps<{
  myobj: string;
}> = async () => {
  return {
    props: {
      myobj: "Hello, World!",
    },
  };
};
