import Link from "next/link";
import { FC } from "react";
import { useRouter } from "next/router";

interface BreadcrumbsProps {
  styling?: string;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ styling = "" }) => {
  const { route } = useRouter();
  const breadcrumbs = route.split("/").join(" > ").split(" ");
  return (
    <nav className={styling}>
      {breadcrumbs.map((breadcrumb, index) => {
        if (breadcrumb === "")
          return (
            <Link href="/" key={index}>
              Home
            </Link>
          );
        if (breadcrumb === ">") return <span key={index}>{breadcrumb}</span>;

        const trimmedPath = breadcrumbs.slice(0, index + 1);
        const filteredPath = trimmedPath.filter((item) => item !== ">");
        const path = filteredPath.join("/");

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
  str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
