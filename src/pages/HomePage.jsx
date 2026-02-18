export default function HomePage() {
  return (
    <>
      <div className="text-center mb-5">
        <h1>Best Home Page EVER</h1>
      </div>
      <div className="d-flex align-items-center gap-4">
        <img
          className="img-fluid w-50"
          src="src/assets/img/placeholder-HomePage.png"
          alt="Home Page Placeholder"
        />
        <figure>
          <blockquote class="blockquote">
            <p className="fs-1">A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <figcaption class="blockquote-footer fs-2">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>
      </div>
    </>
  );
}
