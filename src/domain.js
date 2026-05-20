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
        { "id": "shoot-date", "label": "Shoot date", "type": "date", "sample": "2026-04-18", "placeholder": "Enter shoot date" },
        { "id": "crew-lead", "label": "Crew lead", "type": "text", "sample": "Student photo pod A", "placeholder": "Enter crew lead" },
        { "id": "delivery-sla", "label": "Delivery SLA", "type": "text", "sample": "48-hour proof gallery", "placeholder": "Enter delivery SLA" },
        { "id": "asset-count-target", "label": "Asset count target", "type": "number", "sample": 36, "placeholder": "Enter asset count target" },
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
        "Asset manifest schema completed",
        "Shoot workspace provisioned",
        "Crew roles and backups assigned",
        "Shot dependency map completed",
        "Client approval gallery planned",
        "Asset delivery SLA set",
        "Retake queue workflow configured",
        "Usage-right expiration reminders created",
        "Recurring content refresh offered",
    ],
    "artifacts": [
        "Industry shotlist",
        "Prop checklist",
        "File naming plan",
        "Shoot operations dashboard",
        "Client approval gallery manifest",
        "Retake and refresh plan",
    ],
    "checks": [
        "Each shot needs purpose/channel",
        "Consent for identifiable people",
        "Hero/detail/team/location mix required",
        "No identifiable subject ships without release status",
        "Retake requests need owner-visible status",
        "Asset license and channel crop must travel with manifest",
    ],
    "sampleClient": "Oak & Olive Cafe",
    "modules": [
        { "name": "Shoot operations dashboard", "description": "Schedule, location, role, risk, and progress board for planning and running client shoots." },
        { "name": "Approval gallery manifest", "description": "Client-facing proof selections with consent state, usage scope, crop variants, alt text, and delivery status." },
        { "name": "Retake queue", "description": "Issue triage for missing shots, blurry assets, consent blockers, lighting problems, and client-requested redos." },
        { "name": "Recurring content planner", "description": "Quarterly or monthly refresh scheduling tied to seasonal promotions, new staff, products, and events." },
        { "name": "Crew capacity scheduler", "description": "Assigns photographers, assistants, reviewers, and editors with backup coverage and due dates." },
        { "name": "Rights renewal monitor", "description": "Tracks usage windows, revocations, renewal prompts, and blocked channels per image." }
    ],
    "saas": {
        "customerSegments": [
            "Student photo pods executing structured field shoots",
            "Small businesses needing repeatable web/social asset capture",
            "Nonprofits documenting programs and community events",
            "Marketing mentors reviewing consent-safe photo delivery"
        ],
        "pricingTiers": [
            "Free: single shotlist and printable plan",
            "Shoot Pro: approval gallery, asset manifest, and retake queue",
            "Studio Team: crew scheduling, recurring shoots, and rights renewal alerts",
            "Agency: multi-client content calendar and white-label gallery exports"
        ],
        "onboardingChecklist": [
            "Create client shoot workspace",
            "Select industry and channel presets",
            "Assign crew lead and owner approver",
            "Collect model/location release requirements",
            "Set delivery SLA and retake policy"
        ],
        "successMetrics": [
            "Target asset count reached with approved manifest",
            "100% identifiable people have release status",
            "All hero/detail/team/location categories covered",
            "Client approval gallery exported before delivery SLA"
        ],
        "dashboards": [
            "Shoot-day readiness",
            "Consent and rights blockers",
            "Asset delivery pipeline",
            "Retake and refresh backlog"
        ],
        "dataModel": [
            "ShootWorkspace",
            "ShotPreset",
            "LocationRisk",
            "ConsentRelease",
            "AssetManifestItem",
            "GalleryApproval",
            "RetakeRequest",
            "UsageWindow"
        ],
        "permissions": [
            "Crew lead: schedule and shot planning",
            "Photographer: asset manifest updates",
            "Owner: approval gallery decisions",
            "Mentor: certification and release review"
        ],
        "compliance": [
            "Release state required for people assets",
            "Location permission evidence retained",
            "Usage scope follows approved channels",
            "Revoked assets excluded from exports"
        ],
        "lifecycle": [
            "Plan",
            "Schedule",
            "Capture",
            "Review",
            "Approve",
            "Deliver",
            "Retake",
            "Refresh"
        ],
        "retentionSignals": [
            "Upcoming rights expiration",
            "Unapproved gallery items",
            "Recurring shoot window approaching",
            "Retake queue aging beyond SLA"
        ],
        "exportChannels": [
            "Printable call sheet",
            "Asset manifest CSV",
            "Client approval gallery markdown",
            "Alt text packet",
            "Retake backlog"
        ],
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