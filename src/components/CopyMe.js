import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyMe = ({ url }) => {
  const [copied, setCopied] = useState(false);

  //clears copy message after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <>
      <input value={url} readOnly />
      <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
        <button>Copy</button>
      </CopyToClipboard>
      {copied && <span>Copied!</span>}
    </>
  );
};

export default CopyMe;
