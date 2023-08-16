const mapping: Record<string, string> = {
  feedbacks: 'feedback',
  organizations: 'organization',
  reports: 'report',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
