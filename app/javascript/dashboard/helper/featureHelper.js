const FEATURE_HELP_URLS = {
  agent_bots: 'https://chwt.app/hc/agent-bots',
  agents: 'https://chwt.app/hc/agents',
  audit_logs: 'https://chwt.app/hc/audit-logs',
  campaigns: 'https://chwt.app/hc/campaigns',
  canned_responses: 'https://chwt.app/hc/canned',
  channel_email: 'https://chwt.app/hc/email',
  channel_facebook: 'https://chwt.app/hc/fb',
  custom_attributes: 'https://chwt.app/hc/custom-attributes',
  dashboard_apps: 'https://chwt.app/hc/dashboard-apps',
  help_center: 'https://chwt.app/hc/help-center',
  integrations: 'https://chwt.app/hc/integrations',
  labels: 'https://chwt.app/hc/labels',
  message_reply_to: 'https://chwt.app/hc/reply-to',
  reports: 'https://chwt.app/hc/reports',
  sla: 'https://chwt.app/hc/sla',
  captain: 'https://chwt.app/hc/captain',
  team_management: 'https://chwt.app/hc/teams',
};

export function getHelpUrlForFeature(featureName) {
  return FEATURE_HELP_URLS[featureName];
}
