import angular from 'angular';
import { sidebarContent } from './sidebar/index';

let dependencies = [
    'ui.router',
    'ngAnimate',
    'timer',
    'ngAria',
    'ngDialog',
    'ngMessages',
    'ang-drag-drop',
    'angularUUID2',
    'toaster',
    'ajoslin.promise-tracker',
    'cfp.hotkeys',
    'rzModule',
    'ngHttpRateLimiter'
  ];

angular.module('dimApp', dependencies);

angular.module('dimApp').component('sidebarContent', sidebarContent);
