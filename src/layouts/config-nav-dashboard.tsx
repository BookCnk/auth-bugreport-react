import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navDataBaseUser = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic-analytics'),
  },
  {
    title: 'My Request',
    path: '/my-request',
    icon: icon('ic-disabled'),
  },
];

export const navDataAdmin = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic-analytics'),
  },
  {
    title: 'All Request',
    path: '/all-request',
    icon: icon('ic-disabled'),
  },
  {
    title: 'Role',
    path: '/role',
    icon: icon('ic-lock'),
  },
  {
    title: 'Permission',
    path: '/permission',
    icon: icon('ic-lock'),
  },
  {
    title: 'User',
    path: '/user',
    icon: icon('ic-user'),
  },
];
