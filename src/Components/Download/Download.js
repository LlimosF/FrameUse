import React from "react";

export default function DownloadButton () {
  const handleDownload = () => {
    const data = "";
    const blob = new Blob([data], {type: "text/plain"});

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = "framework.css";
    document.body.appendChild(link);
    link.click();

    URL.revokeObjectURL(url);
    document.body.removeChild(link);
  };

  return (
    <div className="exemple-btn">
      <button onClick={handleDownload} className="btn5">Download</button>
    </div>
  )
}