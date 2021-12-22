import { Deta } from "deta";
import Card from "../../components/Card";

const CardPage = ({ title, name, message, recipient }) => {
  return (
    <main className="min-h-screen bg-blue-100">
      <Card title={title} name={name} message={message} recipient={recipient} />
    </main>
  );
};

export default CardPage;

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const deta = Deta(process.env.DETA_PROJECT_KEY);
  const db = deta.Base("cards");
  const data = await db.get(id);
  if (!data) {
    return {
      notFound: true,
    };
  }
  const { title, name, message, recipient } = data;
  return {
    props: {
      title,
      name,
      message,
      recipient,
    },
  };
};
