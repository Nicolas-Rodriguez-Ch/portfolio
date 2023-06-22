import Link from "next/link";
import { texts } from "@/utils/texts";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h2 className="text-3xl font-bold text-wheat mb-4">
        {texts.notFoundTitle}
      </h2>
      <p className="text-eggshell mb-8">{texts.notFoundText}</p>
      <Link
        href="/"
        className="bg-baby-blue hover:bg-blue-700 text-eggshell font-bold py-2 px-4 rounded"
      >
        {texts.notFoundButton}
      </Link>
    </div>
  );
}
