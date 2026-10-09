
"use client";

import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");

  function handleImageUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    if (image) URL.revokeObjectURL(image);

    setImage(URL.createObjectURL(file));
    setFileName(file.name);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-white/10 px-6 py-5">
        <h1 className="text-2xl font-bold">
          <span className="text-cyan-400">Deep</span>Detect AI
        </h1>
      </nav>

      <section className="mx-auto max-w-4xl px-5 py-14 text-center">
        <h2 className="text-4xl font-extrabold md:text-5xl">
          Detect the <span className="text-cyan-400">Fake.</span>
        </h2>

        <p className="mt-4 text-slate-300">
          Upload an image to get started with media analysis.
        </p>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-cyan-400/30 bg-slate-900 p-6 md:p-10">
          <label
            htmlFor="image-upload"
            className="flex min-h-48 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-600 p-6 transition hover:border-cyan-400"
          >
            <span className="text-5xl">🖼️</span>
            <span className="mt-4 text-lg font-semibold">
              Choose an Image
            </span>
            <span className="mt-2 text-sm text-slate-400">
              Tap here to select an image from your device
            </span>

            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="mt-5 max-w-full text-sm text-slate-300"
              onChange={handleImageUpload}
            />
          </label>

          {image && (
            <div className="mt-8">
              <h3 className="text-lg font-bold text-cyan-300">
                Image Preview
              </h3>

              <img
                src={image}
                alt="Selected image preview"
                className="mx-auto mt-4 max-h-96 max-w-full rounded-xl object-contain"
              />

              <p className="mt-3 break-all text-sm text-slate-400">
                Selected file: {fileName}
              </p>

              <button
                onClick={() => {
                  URL.revokeObjectURL(image);
                  setImage(null);
                  setFileName("");
                }}
                className="mt-5 rounded-lg border border-white/20 px-5 py-2 hover:bg-white/10"
              >
                Remove Image
              </button>
            </div>
          )}
        </div>

        <p className="mt-6 text-sm text-slate-500">
          AI detection will be integrated in the next stage.
        </p>
      </section>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
        DeepDetect AI · AI Media Detection Project
      </footer>
    </main>
  );
}