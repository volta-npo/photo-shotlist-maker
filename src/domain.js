export const domain = {
    "kind": "shotlist",
    "title": "Photo Shotlist Maker",
    "purpose": "A purpose-built shotlist interface for generate practical photo shotlists for restaurants, services, nonprofits, and founder-led teams.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "Shot list",
    "metricLabels": [
        "Shot Coverage",
        "Consent Coverage",
        "Production Readiness"
    ],
    "fields": [
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "Oak & Olive Cafe",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "usable photos captured per shoot",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "input-asset",
            "label": "Input asset",
            "type": "text",
            "sample": "Industry preset selected",
            "placeholder": "Enter input asset"
        },
        {
            "id": "output-format",
            "label": "Output format",
            "type": "text",
            "sample": "Industry shotlist",
            "placeholder": "Enter output format"
        },
        {
            "id": "review-threshold",
            "label": "Review threshold",
            "type": "number",
            "sample": 85,
            "placeholder": "Enter review threshold"
        },
        {
            "id": "approved-channel",
            "label": "Approved channel",
            "type": "text",
            "sample": "Owner handoff packet",
            "placeholder": "Enter approved channel"
        }
    ],
    "rows": [
        "Industry preset selected",
        "Hero shots planned",
        "Detail shots planned",
        "Team/location shots planned",
        "Consent status tracked",
        "Lighting/location warnings reviewed",
        "Filename plan generated",
        "Printable shoot brief exported"
    ],
    "artifacts": [
        "Industry shotlist",
        "Prop checklist",
        "File naming plan"
    ],
    "checks": [
        "Each shot needs purpose/channel",
        "Consent for identifiable people",
        "Hero/detail/team/location mix required"
    ],
    "sampleClient": "Oak & Olive Cafe"
};
//# sourceMappingURL=domain.js.map