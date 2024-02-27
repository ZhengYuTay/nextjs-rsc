"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import * as React from "react";

interface ICountPageProps {}

export const runtime = "edge";

const CountPage: React.FunctionComponent<ICountPageProps> = (props) => {
  const params = useParams();
  return (
    <div>
      {params?.count}

      <button className="bg-red-400">
        <Link shallow href={`/${(Number(params?.count?.toString()) || 0) + 1}`}>
          Click for next page
        </Link>
      </button>
    </div>
  );
};

export default CountPage;
