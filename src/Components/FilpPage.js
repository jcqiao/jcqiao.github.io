import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip"; // Import your HTMLFlipBook component
import styles from "./FlipPage.module.css"; // Import the CSS module

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className={styles.pageCover} ref={ref} data-density="hard">
      <div className={styles.pageContent}>
        <h2>
          {props.children}
        </h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className={styles.page} ref={ref}>
      <div className={styles.pageContent}>
        <h2 className={styles.pageHeader}>
          Page header - {props.number}
        </h2>
        <div className={styles.pageImage} />
        <div className={styles.pageText}>
          {props.children}
        </div>
        <div className={styles.pageFooter}>
          {props.number + 1}
        </div>
      </div>
    </div>
  );
});

const FlipPage = () => {
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const flipBookRef = useRef(null);

  const nextButtonClick = () => {
    if (flipBookRef.current && flipBookRef.current.pageFlip) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const prevButtonClick = () => {
    if (flipBookRef.current && flipBookRef.current.pageFlip) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  const onPage = e => {
    setPage(e.data);
  };

  useEffect(
    () => {
      if (flipBookRef.current && flipBookRef.current.pageFlip) {
        // setTotalPage(flipBookRef.current.pageFlip().getPageCount());
      }
    },
    [flipBookRef]
  );

  return (
    <div className={styles.FlipPage}>
      <HTMLFlipBook
        width={550}
        height={733}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={onPage}
        className="demo-book"
        ref={flipBookRef}
      >
        <PageCover>BOOK TITLE</PageCover>
        <Page number={1}>Lorem ipsum...</Page>
        <Page number={2}>Lorem ipsum...</Page>
        {/* ... */}
        <PageCover>THE END</PageCover>
      </HTMLFlipBook>

      <div className={styles.container}>
        <div>
          <button
            type="button"
            className={styles.button}
            onClick={prevButtonClick}
          >
            Previous page
          </button>
          [<span className={styles.pageNumber}>{page}</span> of{" "}
          <span className={styles.pageNumber}>{totalPage}</span>]
          <button
            type="button"
            className={styles.button}
            onClick={nextButtonClick}
          >
            Next page
          </button>
        </div>
        <div>
          State: <i className={styles.stateOrientation}>state</i>, orientation:{" "}
          <i className={styles.stateOrientation}>orientation</i>
        </div>
      </div>
    </div>
  );
};

export default FlipPage;
