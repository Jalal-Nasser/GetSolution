import { GlobalWorkerOptions, getDocument } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.164/pdf.worker.min.js";

export async function extractPdfText(url: string): Promise<string> {
  const doc = await getDocument(url).promise;
  let result = "";
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const strs = content.items.map((item: any) => item.str);
    result += strs.join(" ") + "\n";
  }
  return result;
}

function extractList(text: string): string[] {
  const lines = text.split(/\n|\.|•|\-|\u2022/g).map(s => s.trim()).filter(Boolean);
  const uniq: string[] = [];
  for (const l of lines) {
    if (l.length < 2) continue;
    if (uniq.includes(l)) continue;
    uniq.push(l);
    if (uniq.length >= 12) break;
  }
  return uniq;
}

export function parsePartners(text: string): string[] {
  const idx = text.toLowerCase().indexOf("partners");
  if (idx === -1) return [];
  const slice = text.slice(idx, idx + 1200);
  return extractList(slice).slice(1, 7);
}

export function parseCertifications(text: string): string[] {
  const idx = text.toLowerCase().indexOf("certifications");
  const alt = text.toLowerCase().indexOf("certified");
  const pos = idx !== -1 ? idx : alt;
  if (pos === -1) return [];
  const slice = text.slice(pos, pos + 1200);
  return extractList(slice).slice(1, 7);
}

export function parseHighlights(text: string): string[] {
  const lower = text.toLowerCase();
  const anchors = [
    "solutions",
    "services",
    "capabilities",
    "offerings",
    "experience",
    "expertise",
  ];
  let best: string[] = [];
  for (const a of anchors) {
    const i = lower.indexOf(a);
    if (i !== -1) {
      const slice = text.slice(i, i + 1600);
      const list = extractList(slice);
      if (list.length > best.length) best = list;
    }
  }
  return best.slice(1, 8);
}
