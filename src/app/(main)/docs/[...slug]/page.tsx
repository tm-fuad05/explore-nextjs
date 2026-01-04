const DocsDetails = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;

  if (slug?.length === 1) {
    return <h1>আমার নাম {slug[0]}</h1>;
  } else if (slug?.length === 2) {
    return <h1>আমার আব্বুর নাম {slug[1]}</h1>;
  }
  if (slug?.length === 3) {
    return <h1>আমার আম্মুর নাম {slug[2]}</h1>;
  }
};

export default DocsDetails;
