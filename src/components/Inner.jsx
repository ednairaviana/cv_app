import Header from "./Header";
import Form from "./Form";
import Cv from "./Cv";

function Inner() {
  return (
    <section>
      <div className="container inner-grid">
        <div className="flex flex--column">
          <Header></Header>
          <Form></Form>
        </div>

        <Cv></Cv>
      </div>
    </section>
  );
}

export default Inner;
