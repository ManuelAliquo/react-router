import Header from "../components/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="container py-4 d-flex flex-column align-items-center">
        <h1>Best Home Page EVER</h1>
        <figure className="text-center">
          <blockquote className="blockquote fs-2">
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <figcaption className="blockquote-footer fs-3">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>
        <img
          className="img-fluid w-50"
          src="src/assets/img/placeholder-HomePage.png"
          alt="Home Page Placeholder"
        />
      </div>
    </>
  );
}
