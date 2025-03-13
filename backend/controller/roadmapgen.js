require("dotenv").config();
const { CohereClient } = require("cohere-ai");

// Initialize the Cohere Client
const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY,
});

const roadmapgen = async (req, res) => {
    const { idea } = req.body;
console.log("genarating....");
    if (!idea) {
        return res.status(400).json({ error: "Startup idea is required" });
    }

    try {
        const response = await cohere.generate({
            model: "command",
            prompt: `Generate a structured roadmap for this startup idea. 
            Format the output strictly as follows:
            - Titles (headings) should be prefixed with "### ".
            - Subpoints should start with "- ".
            - Steps or explanations should be in normal sentences.
            - No other symbols should be used.
            - Genarate only once.
            
            Startup Idea: ${idea}`,     
                        max_tokens: 10000, // Increased to get a more complete response
        });

        let roadmap = response.generations[0].text;
        if (response.generations[0].finish_reason === 'MAX_TOKENS') {
            roadmap += "\n\n[Response truncated due to token limit. Consider refining your request or increasing max_tokens.]";
        }
console.log(roadmap);
        res.send( roadmap );
    } catch (error) {
        console.error("Cohere API Error:", error);
        res.status(500).json({ error: "Error generating roadmap", details: error.message });
    }
};

module.exports = { roadmapgen };
