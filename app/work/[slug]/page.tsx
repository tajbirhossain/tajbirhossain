import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/work/CaseStudy";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  getAllProjectSlugs,
  getProject,
} from "@/content/projects";

type WorkSlugPageProps = PageProps<"/work/[slug]">;

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WorkSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return { title: "Project" };
  }
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function WorkSlugPage({ params }: WorkSlugPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <CaseStudy project={project} />
      <div className="mx-auto max-w-6xl border-t border-border px-5 py-12 md:px-8">
        <ButtonLink href="/work" variant="secondary">
          ← All work
        </ButtonLink>
      </div>
    </>
  );
}
