"use client";

import { useEffect, useState } from "react";
import { Button } from "@headlessui/react";
import { Icon } from "components";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { usePathname } from "next/navigation";
import { translations } from "config/translations";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Resume = () => {
  const [pdfWidth, setPdfWidth] = useState(800);
  const pathname = usePathname();

  const lang = pathname?.split("/")[1] || "en";
  const resumeFile = `/assets/cv-mark_evers-${lang}.pdf`;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = `cv-mark_evers-${lang}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const updateWidth = () => {
      setPdfWidth(Math.min(window.innerWidth - 32, 800));
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="mb-4 flex flex-col items-center gap-y-2 p-4 md:mb-6">
      <div className="flex w-full justify-center">
        <Document
          file={resumeFile}
          className="border border-gray-300 dark:border-gray-800"
        >
          <Page pageNumber={1} width={pdfWidth} />
        </Document>
      </div>
      <Button
        onClick={handleDownload}
        className="group flex flex-row items-center justify-center gap-x-2 rounded-lg bg-primary-500 px-4 py-2 font-bold text-slate-100 transition-colors duration-200 hover:bg-primary-600 active:bg-primary-400 dark:bg-primary-100 dark:text-slate-700 dark:hover:bg-primary-200 dark:active:bg-primary-300"
      >
        <Icon
          name="Download"
          size={16}
          weight="bold"
          className="group-hover:motion-preset-seesaw-lg"
        />
        {translations.resume_page.download_button[lang]}
      </Button>
    </div>
  );
};

export default Resume;
