import type { Page } from "astro";
import {
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  Pagination as ShadcnPagination,
} from "./ui/pagination";
import type { Project } from "@prisma/client";

interface PaginationProps {
  page: Page<Project>;
}

const Pagination = ({ page }: PaginationProps) => {
  const { currentPage, total, size, lastPage } = page;

  const totalPages = Math.ceil(total / size);

  function renderVisiblePages() {
    const visiblePages = [];
    for (let i = 1; i <= totalPages; i++) {
      visiblePages.push(i);
    }
    return visiblePages.map((page) => {
      if (page >= currentPage - 1 && page <= currentPage + 1) {
        return (
          <PaginationItem
            key={page}
            className={page === currentPage ? "bg-slate-600 rounded-md" : ""}
          >
            <PaginationLink href={`/projetos/${page > 1 ? page : ""}`}>
              {page}
            </PaginationLink>
          </PaginationItem>
        );
      }
    });
  }

  return (
    <ShadcnPagination>
      <PaginationContent>
        {currentPage > 1 ? (
          <>
            <PaginationItem>
              <PaginationPrevious
                href={
                  currentPage > 1 ? "/projetos" : `/projetos/${currentPage - 1}`
                }
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        ) : null}

        {renderVisiblePages()}
        {currentPage < lastPage ? (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext href={`/projetos/${currentPage + 1}`} />
            </PaginationItem>
          </>
        ) : null}
      </PaginationContent>
    </ShadcnPagination>
  );
};

export default Pagination;
