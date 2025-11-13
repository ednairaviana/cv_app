import Header from "./Header";
import Form from "./Form";
import Cv from "./Cv";
import tabs from "../data/tabs";
import useActiveTab from "../hooks/useActiveTab";
import cvData from "../data/cvData";

function Inner() {
  const activeTabState = useActiveTab();

  return (
    <section>
      <div className="container inner-grid">
        <div className="flex flex--column">
          <Header tabs={tabs} useActiveTab={activeTabState}></Header>
          <Form tabs={tabs} useActiveTab={activeTabState}></Form>
        </div>
        <Cv cvData={cvData}></Cv>
      </div>
    </section>
  );
}

export default Inner;
