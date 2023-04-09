import Link from "next/link";
import { FC, useMemo } from "react";
import { useRouter } from "next/router";

interface BreadcrumbsProps {
  styling?: string;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ styling = "" }) => {
  const { asPath } = useRouter();

  const breadcrumbs = useMemo(
    () => asPath.split("/").join(" > ").split(" "),
    [asPath]
  );

  return (
    <nav className={styling}>
      {breadcrumbs.map((breadcrumb, index) => {
        if (breadcrumb === "")
          return (
            <Link href="/" key={index}>
              Home
            </Link>
          );
        if (breadcrumb === ">") {
          if (breadcrumbs[index + 1] === "store") return;
          return <span key={index}>{breadcrumb}</span>;
        }

        const trimmedPath = breadcrumbs.slice(0, index + 1);
        const filteredPath = trimmedPath.filter((item) => item !== ">");
        const path = filteredPath.join("/");

        breadcrumb = breadcrumb.replaceAll("-", " ");

        if (breadcrumb !== "store")
          return (
            <Link href={path} key={index}>
              {toSentenceCase(breadcrumb)}
            </Link>
          );
      })}
    </nav>
  );
};

export const toSentenceCase = (str: string) =>
  str
    .split(" ")
    .map((s) => s.toLowerCase().charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
