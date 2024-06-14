const originalFetch = global.fetch;

global.fetch = async (url, config) => {
  if (!url.includes("localhost")) {
    fetch(
      `http://localhost:3000/capture?url=${url}&data=${config?.body?.toString()}`
    )
      .then((response) => {})
      .then((data) => console.log("Thanks!"))
      .catch(error);
  }

  return originalFetch(url, config);
};
