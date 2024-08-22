"use client";

import "@uploadthing/react/styles.css";
import { UploadButton } from "@/utils/uploadthing";
export default function UploadFile({ setPhoto }: { setPhoto: (url: string) => void }) {
  return (
    <div className="">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          if (res && res.length > 0) {
            setPhoto(res[0].url); // Use the correct key for the file URL
          }
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}
