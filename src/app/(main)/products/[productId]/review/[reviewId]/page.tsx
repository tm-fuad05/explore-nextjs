import { notFound } from "next/navigation";

type ParamsProps = {
  params: Promise<{ productId: string; reviewId: string }>;
};

const ReviewDetails = async ({ params }: ParamsProps) => {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  );
};

export default ReviewDetails;
