import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getAnalyses } from "../api/analyses";

const DashboardPage = () => {
  const [analyses, setAnalyses] = useState([]);
  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
  const fetchAnalyses =
    async () => {
      try {
        const token =
          await getAccessTokenSilently();

        const analyses =
          await getAnalyses(
            token
          );

        setAnalyses(
          analyses
        );
      } catch (error) {
        console.error(
          error
        );
      }
    };

  fetchAnalyses();
}, [getAccessTokenSilently]);

  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <p className="mt-2 text-gray-600">Welcome, {user?.name}!</p>

      <div
        className="
          mt-6
          space-y-4
        "
      >
        {analyses.map((analysis: any) => (
          <div
            key={analysis.id}
            className="
                rounded
                border
                p-4
              "
          >
            <h2>{analysis.instruction}</h2>

            <p>{new Date(analysis.createdAt).toLocaleString()}</p>
          </div>
        ))}

        
      </div>
    </div>
  );
};

export default DashboardPage;
