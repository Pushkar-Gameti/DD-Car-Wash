export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return res.status(500).json({
      error: "Google Places API is not configured yet."
    });
  }

  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "id,displayName,rating,userRatingCount,reviews,googleMapsUri,googleMapsLinks"
      }
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data?.error?.message || "Google Places API request failed."
      });
    }

    return res.status(200).json({
      id: data.id,
      name: data.displayName?.text || "DD Car Wash",
      rating: data.rating,
      userRatingCount: data.userRatingCount,
      reviews: data.reviews || [],
      googleMapsUri: data.googleMapsUri,
      googleMapsLinks: data.googleMapsLinks || {}
    });
  } catch {
    return res.status(500).json({
      error: "Unable to connect to Google Places API."
    });
  }
}