"use client";

import { FunctionComponent, Suspense } from "react";

import { useRouter } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import styles from "@/styles/index.module.scss";

type Bread = {
  category: string;
  title: string;
};

const Bread: FunctionComponent<Bread> = ({ category, title }) => {
  const router = useRouter();

  const clickHandler = () => {
    router.push(`/?category=${encodeURIComponent(category)}`);
  };

  return (
    <Breadcrumb className={`${styles["bread"]} mt-4`}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/`}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem
          className={`${styles["category"]} cursor-pointer`}
          onClick={clickHandler}
        >
          {category}
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default function BreadComponent(props: Bread) {
  return (
    <Suspense fallback={<div></div>}>
      <Bread {...props} />
    </Suspense>
  );
}
