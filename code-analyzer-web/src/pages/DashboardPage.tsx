import {useEffect, useState} from "react";
import { getAnalyses } from "../api/analyses";

const DashboardPage = () => {
  const [analyses, setAnalyses] = useState([]);

  useEffect(() => {
    const fetchAnalyses = async () => {
      const analyses = await getAnalyses();
      setAnalyses(analyses);
    };

    fetchAnalyses();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div
        className="
          mt-6
          space-y-4
        "
      >
        {analyses.map(
          (analysis: any) => (
            <div
              key={analysis.id}
              className="
                rounded
                border
                p-4
              "
            >
              <h2>
                {
                  analysis.instruction
                }
              </h2>

              <p>
                {new Date(
                  analysis.createdAt
                ).toLocaleString()}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default DashboardPage;