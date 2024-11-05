import packageJson from '../package.json';

export type ConfigValue = {
  appName: string;
  appVersion: string;
};

export const CONFIG: ConfigValue = {
  appName: 'IT Support Center',
  appVersion: packageJson.version,
};
