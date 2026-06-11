export const getAnalyses =
  async () => {
    const response =
      await fetch(
        "http://localhost:4000/api/analyses"
      );

    return response.json();
  };