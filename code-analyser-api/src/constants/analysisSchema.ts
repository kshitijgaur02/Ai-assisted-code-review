export const analysisSchema = {
  type: "object",
  properties: {
    explanation: {
      type: "string"
    },

    issues: {
      type: "array",
      items: {
        type: "object",
        properties: {
          title: {
            type: "string"
          },
          severity: {
            type: "string"
          }
        }
      }
    },

    improvements: {
      type: "array",
      items: {
        type: "object",
        properties: {
          title: {
            type: "string"
          },
          explanation: {
            type: "string"
          },
          snippet: {
            type: "string"
          }
        }
      }
    }
  }
};