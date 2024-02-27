import Link from "next/link";
import * as React from "react";

interface ICountPageProps {}

export const dynamicParams = false;
export const dynamic = "force-static";
export const fetchCache = "only-cache";

const CountPage: React.FunctionComponent<ICountPageProps> = (props: any) => {
  return (
    <div>
      {props.params?.count}
      <Link href={`/${(Number(props.params?.count?.toString()) || 0) + 1}`}>
        <button className="bg-red-400">Click for next page</button>
      </Link>
    </div>
  );
};

export default CountPage;
