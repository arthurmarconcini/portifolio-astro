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
  const { currentPage, lastPage } = page;

  const getPageUrl = (pageNumber: number) => {
    if (pageNumber === 1) {
      return "/projetos";
    }
    return `/projetos/${pageNumber}`;
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (lastPage <= maxPagesToShow) {
      for (let i = 1; i <= lastPage; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (currentPage > 3) {
        pageNumbers.push(-1); // Ellipsis
      }

      let start = Math.max(2, currentPage - 1);
      let end = Math.min(lastPage - 1, currentPage + 1);

      if (currentPage <= 2) {
        start = 2;
        end = 4;
      }

      if (currentPage >= lastPage - 1) {
        start = lastPage - 3;
        end = lastPage - 1;
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      if (currentPage < lastPage - 2) {
        pageNumbers.push(-1); // Ellipsis
      }
      pageNumbers.push(lastPage);
    }

    return pageNumbers.map((pageNumber, index) =>
      pageNumber === -1 ? (
        <PaginationItem key={`ellipsis-${index}`}>
          <PaginationEllipsis />
        </PaginationItem>
      ) : (
        <PaginationItem
          key={pageNumber}
          className={
            pageNumber === currentPage ? "bg-slate-600 rounded-md" : ""
          }
        >
          <PaginationLink href={getPageUrl(pageNumber)}>
            {pageNumber}
          </PaginationLink>
        </PaginationItem>
      )
    );
  };

  return (
    <ShadcnPagination>
      <PaginationContent>
        {page.url.prev && (
          <PaginationItem>
            <PaginationPrevious href={page.url.prev} />
          </PaginationItem>
        )}
        {renderPageNumbers()}
        {page.url.next && (
          <PaginationItem>
            <PaginationNext href={page.url.next} />
          </PaginationItem>
        )}
      </PaginationContent>
    </ShadcnPagination>
  );
};

export default Pagination;
