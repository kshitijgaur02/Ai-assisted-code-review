export const getAnalyses =
  async (token: string) => {
    const response =
      await fetch(
        "http://localhost:4000/api/analyses",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

    return response.json();
  };