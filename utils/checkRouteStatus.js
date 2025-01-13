export const checkRouteStatus = async (url) => {
  try {
    const response = await fetch(url, {
      method: "HEAD",
    });
    return response.ok; // true if the status is 200-299
  } catch (error) {
    return false; // If there's an error, treat the route as inactive
  }
};
