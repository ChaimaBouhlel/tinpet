import { NextPageWithLayout } from "@/types/global";
import { ReactElement } from "react";
import Layout from "@/layout";
import Post from "@/components/Feed/post";
import { displayPartsToString } from "typescript";
import Link from "next/link";

const Feed: NextPageWithLayout<{}> = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Post />
        <Post />
      </div>
    </>
  );
};

Feed.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Feed;
