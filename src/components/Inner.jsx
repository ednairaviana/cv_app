import Header from "./Header";
import Form from "./Form";
import Cv from "./Cv";
import tabs from "../data/tabs";
import useActiveTab from "../hooks/useActiveTab";
import useCvData from "../hooks/useCvData";

function Inner() {
  const activeTabState = useActiveTab();
  const currentCvState = useCvData();

  return (
    <section>
      <div className="container inner-grid">
        <div className="flex flex--column">
          <Header tabs={tabs} useActiveTab={activeTabState}></Header>
          <Form
            tabs={tabs}
            useActiveTab={activeTabState}
            handleChangeFunction={currentCvState.handleCvDataChange}
          ></Form>
        </div>
        <Cv cvData={currentCvState.currentCvData}></Cv>
      </div>
    </section>
  );
}

export default Inner;
