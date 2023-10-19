import { BoxTest } from "@/components/BoxTest";
import { Frame } from "@/components/Frame";
import { Loading } from "@/components/Loading";

export const LichKg = ({
  list,
  isLoading,
}: {
  list: string[];
  isLoading: boolean;
}) => {
  return (
    <>
      {isLoading && <Loading he="50vh" />}
      {!isLoading && <Frame list1={list} />}
    </>
  );
};
