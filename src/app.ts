import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  message = 'Hello World!';
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'],      name: 'home',       moduleId: 'routes/home/home', title: 'Home' },
      { route: 'simulation',      name: 'simulation', moduleId: 'routes/simulation/simulation', title: 'Simulation', nav: true },
      { route: 'patterns/:id?',    name: 'patterns',   moduleId: 'routes/patterns/patterns', title: 'Patterns', nav: true, href: '#/patterns' },
      { route: 'test',    name: 'test',   moduleId: 'routes/test/test', title: 'Test', nav: true }
    ]);
  }
}
