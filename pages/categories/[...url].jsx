import { FC, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { Header } from "@/components/header";

export const getServerSideProps = async ({ params, query }) => {
  const url = params?.url.join("/");
  return {
    props: {
      url,
    },
  };
};

function DefaultCategories(props) {
  const { url } = props;
  const page = useRef(1);
  const router = useRouter();
  const updateUrl = () => {
    page.current = page.current + 1;
    const path = "/categories/" + url + "?page=" + page.current;
    // router.replace(path, path, {
    //   scroll: false,
    //   shallow: true,
    // });
    router.replace(
      {
        pathname: "/categories/[...url]",
        query: {
          url: url.split("/"),
          page: page.current,
        },
      },
      path,
      {
        scroll: false,
        shallow: true,
      }
    );
  };
  return (
    <div>
      <h2>url: {url}</h2>
      <h3 onClick={updateUrl} style={{ cursor: "pointer" }}>
        click update url page
      </h3>
      <Header />
    </div>
  );
}

export default function Categories(props) {
  const router = useRouter();
  return <DefaultCategories key={router.asPath.split("?")[0]} {...props} />;
}
