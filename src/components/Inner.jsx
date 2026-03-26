import Header from "./Header";
import Form from "./Form";
import Cv from "./Cv";
import tabs from "../data/tabs";
import MobileToggleBtn from "./MobileToggleBtn";
import useActiveTab from "../hooks/useActiveTab";
import useCvData from "../hooks/useCvData";
import useMobileCvActive from "../hooks/useMobileCvActive";

function Inner() {
  const activeTabState = useActiveTab();
  const currentCvState = useCvData();
  const mobileCvState = useMobileCvActive();

  return (
    <section>
      <MobileToggleBtn handleTggl={mobileCvState.handleToggleMobileButton} />
      <div className="container inner-grid">
        <div
          className={`flex flex--column ${mobileCvState.mobileCvActive && "mobile-cv-active"}`}
        >
          <Header tabs={tabs} useActiveTab={activeTabState}></Header>
          <Form
            tabs={tabs}
            useActiveTab={activeTabState}
            cvState={currentCvState}
          ></Form>
        </div>
        <Cv cvData={currentCvState.currentCvData}></Cv>
      </div>
    </section>
  );
}

export default Inner;
