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
        "Printable shoot brief exported",
        "Shot-type preset selected",
        "Person-release status tracked",
        "Lighting/location risk scored",
        "Asset manifest schema completed"
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
    "sampleClient": "Oak & Olive Cafe",
    "modules": [
        { "name": "Shot taxonomy builder", "description": "Shot-type presets grouped by hero, detail, people, environment, process, and social formats." },
        { "name": "Consent tracker", "description": "Person-release status, guardian approval, usage window, and revocation notes per shot." },
        { "name": "Location and lighting risk", "description": "Weather, permission, accessibility, lighting, and backup-plan checks before shoot day." },
        { "name": "Asset manifest", "description": "Filename schema, delivery status, channel crop, alt text, and license metadata for every deliverable." }
    ],
    "saas": {
        "playbooks": [
            "Shoot-day call sheet workflow",
            "Consent and release collection process",
            "Location-risk mitigation checklist",
            "Post-shoot asset manifest QA"
        ],
        "automations": [
            "Filename manifest export",
            "Missing consent warnings",
            "Lighting/location risk scoring",
            "Channel crop readiness tracker"
        ],
        "revenueModel": "Per-shoot workspace with add-on asset manifest QA and client approval portals",
        "integrationTargets": [
            "Google Drive asset folders",
            "Dropbox transfer packs",
            "Airtable content calendar",
            "Meta/Google Business Profile crops"
        ]
    }
};
//# sourceMappingURL=domain.js.map