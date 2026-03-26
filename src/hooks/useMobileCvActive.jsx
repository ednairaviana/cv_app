import { useState } from "react";

function useMobileCvActive() {
  const [mobileCvActive, setMobileCvActive] = useState(false);

  function handleToggleMobileButton() {
    setMobileCvActive(!mobileCvActive);
  }

  return { mobileCvActive, handleToggleMobileButton };
}

export default useMobileCvActive;
