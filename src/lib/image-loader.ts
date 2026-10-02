const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src }: { src: string }) {
  if (src.startsWith("http") || (basePath && src.startsWith(basePath))) return src;
  return `${basePath}${src.startsWith("/") ? "" : "/"}${src}`;
}
