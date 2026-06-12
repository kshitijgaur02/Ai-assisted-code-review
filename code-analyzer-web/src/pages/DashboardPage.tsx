import { useEffect, useMemo, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import PageContainer from "../components/PageContainer/PageContainer";
import StatCard from "../components/StatCard/StatCard";

import { getAnalyses } from "../api/analyses";
import AnalysisCard from "../components/AnalysisCard/AnalysisCard";
import AnalysisModal from "../components/AnalysisModal/AnalysisModal";

const DashboardPage = () => {
  const [analyses, setAnalyses] = useState<any[]>([]);

  const [selectedAnalysis, setSelectedAnalysis] = useState(null);

  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchAnalyses = async () => {
      const token = await getAccessTokenSilently();

      const result = await getAnalyses(token);

      setAnalyses(result);
    };

    fetchAnalyses();
  }, [getAccessTokenSilently]);

  const totalAnalyses = analyses.length;

  const totalIssues = useMemo(() => {
    return analyses.reduce(
      (total, analysis) => total + (analysis.result?.issues ?? []).length,
      0,
    );
  }, [analyses]);

  const totalImprovements = useMemo(() => {
    return analyses.reduce(
      (total, analysis) => total + (analysis.result?.improvements ?? []).length,
      0,
    );
  }, [analyses]);

  return (
    <PageContainer
      title={`Welcome back, ${user?.name}`}
      subtitle="Your AI-assisted code review history."
    >
      {/* Stats */}

      <div
        className="
          grid
          gap-4
          md:grid-cols-3
        "
      >
        <StatCard title="Analyses" value={totalAnalyses} />

        <StatCard title="Issues Found" value={totalIssues} />

        <StatCard title="Suggestions" value={totalImprovements} />
      </div>

      {/* Recent Analyses */}

      <div className="mt-8">
        <h2
          className="
            mb-4
            text-xl
            font-semibold
          "
        >
          Recent Analyses
        </h2>

        <div className="space-y-4">
          {analyses.map((analysis) => (
            <AnalysisCard
              key={analysis.id}
              analysis={analysis}
              onClick={() => setSelectedAnalysis(analysis)}
            />
          ))}
        </div>
        {selectedAnalysis && (
          <AnalysisModal
            analysis={selectedAnalysis}
            onClose={() => setSelectedAnalysis(null)}
          />
        )}
      </div>
    </PageContainer>
  );
};

export default DashboardPage;
