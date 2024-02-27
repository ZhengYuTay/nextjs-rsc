import { ServerRuntime } from "next";
import Link from "next/link";
import { useParams } from "next/navigation";
import * as React from "react";

interface ICountPageProps {}

export const dynamicParams = false;
export const dynamic = "force-static";

const CountPage: React.FunctionComponent<ICountPageProps> = (props: any) => {
  return (
    <div>
      {props.params?.count}
      <button className="bg-red-400">
        <Link href={`/${(Number(props.params?.count?.toString()) || 0) + 1}`}>
          Click for next page
        </Link>
      </button>
    </div>
  );
};

export default CountPage;
