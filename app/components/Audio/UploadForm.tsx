"use client";
import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { v4 as uuidv4 } from "uuid";
import { Loader2 } from "lucide-react";
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingModal from "../Common/LoadingModal";

export default function UploadForm() {
  const [selectedAudio, setSelectedAudio] = useState<any>(null);
  const [audioTitle, setAudioTitle] = useState("");
  const [audios, setAudios] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const supabase = useSupabaseClient();

  async function handleSubmit() {
    if (!selectedAudio) {
      toast.error("Please select an audio file.");
      return;
    }

    if (!audioTitle) {
      toast.error("Please enter a title.");
      return;
    }

    setLoading(true);
    const id = audioTitle ? audioTitle.replace(/\s+/g, "-").toLowerCase() : uuidv4();

    const file = selectedAudio[0];
    await supabase.storage.from("audios").upload(`${id}.mp3`, file);
    toast.success("Audio uploaded!");
    setLoading(false);
    setAudioTitle("");
    setSelectedAudio(null);
    getAudios();
  }

  async function getAudios() {
    const { data } = await supabase.storage.from("audios").list("");
    setAudios(data);

    // get public url of each audio
    if (data) {
      const res = await Promise.all(
        data.map(async (audio: any) => {
          const url = await supabase.storage.from("audios").getPublicUrl(audio.name);
          return url.data.publicUrl;
        })
      );

      const newData = data.map((audio: any, index: number) => {
        return { ...audio, url: res[index] };
      });
      setAudios(newData);
    }
  }

  async function deleteAudio(name: string) {
    setDeleteLoading(true);
    await supabase.storage.from("audios").remove([name]);
    toast.success("Audio deleted!");
    setDeleteLoading(false);
    getAudios();
  }

  useEffect(() => {
    getAudios();
  }, []);

  return (
    <>
      <LoadingModal deleteLoading={deleteLoading} />

      <div className="mx-auto max-w-4xl px-5 py-10 text-center lg:py-20">
        <h1 className="mb-5 text-h2-m font-black md:text-h2-t lg:mb-8 lg:text-h2-d">Upload Audio</h1>
        <form>
          <div className="flex flex-col space-y-6">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={audioTitle}
              onChange={(event) => setAudioTitle(event.target.value)}
              className="placeholder:gray-400 h-[50px] w-full border-b border-[#E8E8E8] px-2 py-3 font-general-sans text-base font-medium text-primary outline-none focus:border-primary lg:text-xl"
              required
            />
            <input type="file" accept="audio/*" onChange={(event) => setSelectedAudio(event.target.files)} required />
          </div>
          <div className="mt-5">
            <button
              type="button"
              onClick={handleSubmit}
              className={`
            ${loading ? "cursor-not-allowed" : ""}
            button button--blue font-aeonik relative m-0 inline-block overflow-hidden rounded-btn border border-primary px-16 py-3 font-bold outline-none lg:px-20`}
            >
              <span className="text-center font-general-sans text-bt-m font-medium text-white md:text-lg lg:text-bt-d2 lg:font-semibold">
                {loading ? <Loader2 className="animate-spin" size={24} /> : "Upload"}
              </span>
            </button>
          </div>
        </form>

        <div className="mt-10">
          {audios.length > 0 ? (
            <div className="flex flex-col space-y-8 md:space-y-4">
              {audios.map((audio: any) => (
                <div
                  className="flex flex-col space-y-4 text-left md:flex-row md:justify-between md:space-x-2 md:space-y-0"
                  key={audio.id}
                >
                  <p className="max-w-sm font-general-sans text-bt-m font-medium text-primary">{audio.name}</p>
                  <div className="flex space-x-2 lg:space-x-4">
                    <button
                      onClick={() => {
                        copy(audio.url);
                        toast.success("Copied to clipboard!");
                      }}
                      type="button"
                      className="button button--blue font-aeonik relative m-0 inline-block overflow-hidden rounded-btn border border-primary px-5 py-2 font-bold outline-none lg:px-8"
                    >
                      <span className="text-center font-general-sans text-bt-m font-medium text-white md:text-lg lg:text-bt-d2 lg:font-semibold">
                        Copy Link
                        {audio.publicURL}
                      </span>
                    </button>
                    <button
                      onClick={() => deleteAudio(audio.name)}
                      type="button"
                      className="button button--red font-aeonik relative m-0 inline-block overflow-hidden rounded-btn border border-secondary px-5 py-2 font-bold outline-none lg:px-8"
                    >
                      <span className="text-center font-general-sans text-bt-m font-medium text-white md:text-lg lg:text-bt-d2 lg:font-semibold">
                        Delete
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No audios uploaded yet.</p>
          )}
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
