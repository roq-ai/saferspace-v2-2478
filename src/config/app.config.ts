interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: [],
  tenantRoles: ['Admin', 'User', 'Investigator', 'Resolver'],
  tenantName: 'Organization',
  applicationName: 'SaferSpace v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
