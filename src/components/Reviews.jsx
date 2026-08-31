import { useEffect, useState } from "react";
import { ExternalLink, Star, MessageCircle } from "lucide-react";

export default function Reviews() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/reviews")
      .then(async (res) => {
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || "Unable to load reviews");
        return json;
      })
      .then(setData)
      .catch((err) => setError(err.message));
  }, []);

  const reviews = data?.reviews || [];

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="reviews-heading">
          <div>
            <div className="eyebrow dark"><span /> Google Reviews</div>
            <h2>What Our Customers Say</h2>
            <p>Real reviews from customers of DD Car Wash.</p>
          </div>

          {data?.rating && (
            <div className="rating-box">
              <strong>{Number(data.rating).toFixed(1)}</strong>
              <div>
                <div className="stars">
                  {[1,2,3,4,5].map((n) => <Star key={n} size={17} fill="currentColor" />)}
                </div>
                <small>{data.userRatingCount || 0} Google reviews</small>
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="reviews-error">
            Reviews are temporarily unavailable. Please check Google Maps.
          </div>
        )}

        {!data && !error && (
          <div className="reviews-loading">Loading Google reviews…</div>
        )}

        {reviews.length > 0 && (
          <div className="reviews-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name || review.googleMapsUri}>
                <div className="review-top">
                  <div className="review-author">
                    {review.authorAttribution?.photoUri ? (
                      <img
                        src={review.authorAttribution.photoUri}
                        alt=""
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="review-avatar">
                        {(review.authorAttribution?.displayName || "G").charAt(0)}
                      </div>
                    )}
                    <div>
                      <b>{review.authorAttribution?.displayName || "Google user"}</b>
                      <small>{review.relativePublishTimeDescription || ""}</small>
                    </div>
                  </div>

                  <div className="review-stars">
                    {[1,2,3,4,5].map((n) => (
                      <Star
                        key={n}
                        size={15}
                        fill={n <= Math.round(review.rating) ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>

                <p>{review.text?.text || review.originalText?.text || "No review text available."}</p>

                {review.googleMapsUri && (
                  <a
                    href={review.googleMapsUri}
                    target="_blank"
                    rel="noreferrer"
                    className="review-link"
                  >
                    View on Google Maps <ExternalLink size={14} />
                  </a>
                )}
              </article>
            ))}
          </div>
        )}

        {data?.googleMapsLinks?.reviewsUri && (
          <div className="reviews-actions">
            <a className="btn secondary-light" href={data.googleMapsLinks.reviewsUri} target="_blank" rel="noreferrer">
              <ExternalLink size={17} /> Read all Google reviews
            </a>

            {data.googleMapsLinks.writeAReviewUri && (
              <a className="btn review-write" href={data.googleMapsLinks.writeAReviewUri} target="_blank" rel="noreferrer">
                <MessageCircle size={17} /> Write a review
              </a>
            )}
          </div>
        )}

        <div className="google-attribution">
          <span>Reviews powered by</span>
          <strong>Google Maps</strong>
        </div>
      </div>
    </section>
  );
}