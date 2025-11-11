import Header from "./Header";
import Form from "./Form";
import Cv from "./Cv";
import tabs from "../data/tabs";
import useActiveTab from "../data/useActiveTab";

function Inner() {
  const activeTabState = useActiveTab();

  return (
    <section>
      <div className="container inner-grid">
        <div className="flex flex--column">
          <Header tabs={tabs} useActiveTab={activeTabState}></Header>
          <Form tabs={tabs} useActiveTab={activeTabState}></Form>
        </div>
        <Cv></Cv>
      </div>
    </section>
  );
}

export default Inner;
