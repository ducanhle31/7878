import { Home } from "@/features/home";

interface IHomepage {
  news: any[];
  totalNews: string;
  notifis: any[];
  totalNotifis: string;
}

const Page = (props: IHomepage) => {
  const { news, notifis } = props;
  return (
    <>
      <Home news={news || []} notifis={notifis || []} />
    </>
  );
};

export default Page;
