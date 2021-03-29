import { writable } from "svelte/store";

import Home from './Home.svelte'
import Settings from './mini-apps/settings/settings.svelte'
import ShiftsCalculator from './mini-apps/shifts-calculator/shifts-calculator.svelte'


export const view = writable(Settings)

/**@param {Location} location*/
const handleNavigation = location => {

  switch (location.pathname) {
    case '/': view.set(Home); break;
    case '/settings': view.set(Settings); break;
    case '/shift-calculator': view.set(ShiftsCalculator); break;
  
    default: view.set(Home); break;
  }
}


/**
 * 
 * @param {Location} location 
 * @param {MouseEvent} event 
 */
export const onRouteChange = (location, event) => {
  // Only scroll to top on link clicks, not popstate events.
  if (event && event.type === 'click') {
    window.scrollTo(0, 0);
  }
  handleNavigation(location)
}