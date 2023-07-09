"use client";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UploadForm() {
  const [uploadedAudio, setUploadedAudio] = useState("");
  const [selectedAudio, setSelectedAudio] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const supabase = useSupabaseClient();

  async function handleSubmit() {
    setLoading(true);
    const id = uuidv4();

    const file = selectedAudio[0];
    await supabase.storage.from("audios").upload(`${id}.mp3`, file);

    // get the url of the uploaded file
    const res = supabase.storage.from("audios").getPublicUrl(`${id}.mp3`);
    setUploadedAudio(res.data.publicUrl);
    setLoading(false);
  }

  const handleCopyAudioLink = () => {
    copy(uploadedAudio);
    toast.success("Copied to clipboard!");
  };

  return (
    <>
      <div className="mx-auto max-w-xl px-5 py-10 text-center lg:py-20">
        <h1 className="mb-5 text-h2-m font-black md:text-h2-t lg:mb-8 lg:text-h2-d">Upload Audio</h1>
        <form>
          <input type="file" accept="audio/*" onChange={(event) => setSelectedAudio(event.target.files)} />
          <div className="mt-5">
            <button
              type="button"
              onClick={handleSubmit}
              className={`
            ${loading ? "cursor-not-allowed" : "cursor-pointer"}
            button button--blue font-aeonik relative m-0 inline-block overflow-hidden rounded-btn border border-primary px-16 py-3 font-bold outline-none lg:px-20`}
            >
              <span className="text-center font-general-sans text-bt-m font-medium text-white md:text-lg lg:text-bt-d2 lg:font-semibold">
                {loading ? <Loader2 className="animate-spin" size={24} /> : "Upload"}
              </span>
            </button>
          </div>
        </form>

        <div className="mt-12">
          {uploadedAudio && (
            <div>
              <p className="mb-2">File Uploaded Successfully!</p>
              <button
                onClick={handleCopyAudioLink}
                type="button"
                className={`
            button button--blue font-aeonik relative m-0 inline-block overflow-hidden rounded-btn border border-primary px-16 py-3 font-bold outline-none lg:px-20`}
              >
                <span className="text-center font-general-sans text-bt-m font-medium text-white md:text-lg lg:text-bt-d2 lg:font-semibold">
                  Copy Link
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
