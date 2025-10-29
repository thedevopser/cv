declare module 'html2pdf.js' {
  export interface Html2CanvasOptions {
    scale?: number;
    useCORS?: boolean;
    logging?: boolean;
    [key: string]: unknown;
  }

  export interface JsPDFOptions {
    unit?: 'pt' | 'mm' | 'cm' | 'in';
    format?: string | [number, number] | 'a4' | 'letter' | 'legal';
    orientation?: 'portrait' | 'landscape';
    [key: string]: unknown;
  }

  export interface PagebreakOptions {
    mode?: Array<'css' | 'legacy' | 'avoid-all' | string> | 'css' | 'legacy' | 'avoid-all';
    before?: string | string[];
    after?: string | string[];
    avoid?: string | string[];
    [key: string]: unknown;
  }

  export interface Html2PdfOptions {
    margin?: number | [number, number] | [number, number, number, number];
    filename?: string;
    image?: { type?: 'jpeg' | 'png'; quality?: number };
    html2canvas?: Html2CanvasOptions;
    jsPDF?: JsPDFOptions;
    pagebreak?: PagebreakOptions;
    [key: string]: unknown;
  }

  export interface Html2PdfChain {
    from(element: HTMLElement | SVGElement): Html2PdfChain;
    set(options: Partial<Html2PdfOptions>): Html2PdfChain;
    save(filename?: string): Promise<void>;
    outputPdf?: () => Promise<Blob>;
  }

  function html2pdf(options?: Partial<Html2PdfOptions>): Html2PdfChain;
  export default html2pdf;
}
