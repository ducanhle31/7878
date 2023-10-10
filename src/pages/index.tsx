import ErrorBoundary from "@/components/ErrorBoundary";
import { Loading } from "@/components/Loading";
import { Home } from "@/features/home";

const Page = () => {
  return (
    <>
      <ErrorBoundary fallback={<Loading />}>
        <Home />
      </ErrorBoundary>
    </>
  );
};

export default Page;
