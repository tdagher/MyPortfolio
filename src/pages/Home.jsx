import "./Pages_css/Home.css";
function Home() {
  return (
    <section className="home-container">
      <article className="home-content">
        <h1>
          Hola, soy <span className="name-highlight">Tomás</span>
        </h1>
        <h2 className="job-title">Desarrollador Web</h2>
        <p className="description">
          Soy estudiante universitario de{" "}
          <strong>Programador Universitario</strong> y{" "}
          <strong>Licenciatura en Informática</strong>.
          <br /> Apasionado por la programación, siempre predispuesto a aprender
          nuevas tecnologías y mantenerme actualizado con las últimas tendencias
          del sector.
        </p>
      </article>
    </section>
  );
}

export default Home;
