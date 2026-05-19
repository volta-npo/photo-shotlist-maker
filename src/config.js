export const config = {
    "number": 26,
    "slug": "photo-shotlist-maker",
    "title": "Photo Shotlist Maker",
    "category": "Marketing & Content",
    "tagline": "Generate practical photo shotlists for restaurants, services, nonprofits, and founder-led teams.",
    "persona": "Students coordinating content shoots on a budget.",
    "gap": "Bad photos undermine websites and social pages, but most owners do not know what to capture.",
    "niche": "Low-budget content production for small clients.",
    "metric": "usable photos captured per shoot",
    "modules": [
        "Industry shotlists",
        "Lighting and framing tips",
        "Consent notes",
        "Asset naming system"
    ],
    "theme": {
        "accent": "#db2777",
        "accent2": "#f9a8d4",
        "emoji": "\ud83d\udce3",
        "metricLabel": "Content readiness",
        "workflow": [
            "Capture owner voice",
            "Generate channel-ready assets",
            "Review for local fit",
            "Export approved content"
        ],
        "privacy": "Do not publish quotes, photos, or testimonials without explicit owner/client approval."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "industry-shotlists",
            "label": "Industry shotlists",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify industry shotlists with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "lighting-and-framing-tips",
            "label": "Lighting and framing tips",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify lighting and framing tips with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "consent-notes",
            "label": "Consent notes",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify consent notes with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "asset-naming-system",
            "label": "Asset naming system",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify asset naming system with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for Photo Shotlist Maker and capture baseline evidence.",
            "Complete the industry shotlists workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "Oak & Olive Cafe",
        "chapter": "Dallas",
        "studentLead": "Volta Student Lead",
        "notes": "Neighborhood marketing project with owner-approved content assets. Photo Shotlist Maker sample.",
        "evidencePrefix": "Photo Shotlist Maker",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map