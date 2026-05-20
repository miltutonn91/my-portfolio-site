import works from "@/data/works";
import WorkDetail from "@/app/works/components/WorksDetail";
import { notFound } from "next/navigation";
import HamburgerMenu from "@/components/ui/HamburgerMenu";

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const work = works.find((work) => String(work.id) === id);

  if (!work) {
    notFound();
  }

  return (
    <>
      <HamburgerMenu isWorksDetailPage />
      <WorkDetail work={work} />
    </>
  );
}
