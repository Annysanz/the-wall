import * as Pages from '../../components/pages/pages.index';
// import {
//   EActiveMenuItem,
//   activeMenuItemKey,
// } from '../../components/organisms/navigationMenu/navigationItems';

export enum ERoutes {
  HOME = '/home',
  ABOUT_ME = '/about-me',
//   CONTACT = '/contact'

}

export type TRoutes =
  | ERoutes.HOME
  | ERoutes.ABOUT_ME
//   | ERoutes.CONTACT
 


/**
 * The file auth.tsx, for some reason beyond my understanding try to log in the user even when the route
 * is not restricted and store the action in the setIsSessionStartPage forcing a call to Auth0. Obviously
 * for my future self or any other developer reading this, not restricted and public should be the same,
 * but for lack of time for re-testing the whole aplication I thought it would better for my present self
 * create a new property
 * */
export const Routes = [
  {
    path: ERoutes.HOME,
    exact: true,
    restricted: true,
    component: Pages.HomeComponent,
  },
  {
    path: ERoutes.ABOUT_ME,
    exact: true,
    restricted: true,
    component: Pages.AboutComponent,
  },
//   {
//     path: ERoutes.CONTACT,
//     exact: true,
//     restricted: true,
//     component: Pages.ContactComponent,
//   },

];
