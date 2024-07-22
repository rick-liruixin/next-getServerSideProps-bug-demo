import { useRouter } from "next/router";
export function Header() {
  const router = useRouter();
  const data = ["aaaa.html", "bbbb.html", "cccc.html", "dddd.html"];
  const toCagegory = (item) => {
    router.push({
      pathname: "/categories/[...url]",
      query: {
        url: item.split("/"),
      },
    });
  };

  return (
    <div style={{ marginTop: "50px" }}>
      Page：
      {data.map((item, index) => (
        <div
          style={{ cursor: "pointer" }}
          key={index}
          onClick={() => toCagegory(item)}
        >
          go to {item}
        </div>
      ))}
    </div>
  );
}
