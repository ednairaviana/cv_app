import { useState } from "react";

function useActiveTab() {
  const [activeTab, setActiveTab] = useState(0);

  return { activeTab, setActiveTab };
}

export default useActiveTab;
