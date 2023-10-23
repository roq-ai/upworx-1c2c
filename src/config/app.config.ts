interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Upworx',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage job applications.',
    'View job offers.',
    'View contracts.',
    'Update personal user information.',
  ],
  ownerAbilities: ['Manage contracts', 'Manage job applications', 'Manage job offers', 'Manage company'],
  getQuoteUrl: 'https://app.roq.ai/proposal/b427bf7a-492c-43d6-be37-7da93a3dda6e',
};
