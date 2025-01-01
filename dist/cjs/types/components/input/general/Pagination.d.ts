import React from 'react';
interface PaginationProps {
    pageTitles: string[];
    currentPage: number;
    setCurrentPage: (page: number) => void;
    handleNext: () => void;
    handlePrevious: () => void;
    endAction?: () => void;
}
export default function Pagination(props: PaginationProps): React.JSX.Element;
export {};
