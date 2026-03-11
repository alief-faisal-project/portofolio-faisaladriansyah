"use client";

export default function ResumeTab() {
  const handleDownload = () => {
    const fileId = "1abc123dummyfileid";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    window.open(downloadUrl, "_blank");
  };

  return (
    <button onClick={handleDownload} className="resume-tab">
      RESUME
    </button>
  );
}
