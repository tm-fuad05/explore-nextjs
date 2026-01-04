"use client";
import Link from "next/link";
import React, { use } from "react";

const NewArticle = ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) => {
  const { articleId } = use(params);
  const { lang = "en" } = React.use(searchParams);

  return (
    <div>
      <h1 className="text-4xl mb-3">News Article {articleId}</h1>
      <p>Reading in {lang}</p>

      <div className="flex gap-3">
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
};

export default NewArticle;
