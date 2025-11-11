import Header from "./Header";
import Form from "./Form";
import Cv from "./Cv";
import tabs from "../data/tabs";

function Inner() {
  return (
    <section>
      <div className="container inner-grid">
        <div className="flex flex--column">
          <Header tabs={tabs}></Header>
          <Form tabs={tabs}></Form>
        </div>
        <Cv></Cv>
      </div>
    </section>
  );
}

export default Inner;
