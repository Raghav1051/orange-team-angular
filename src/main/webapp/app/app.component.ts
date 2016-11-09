import { Component } from "@angular/core";
import { Router } from '@angular/router'

/**
 * This is the root component for the application
 */

@Component({
  selector: "rootapp",
  templateUrl: '/app/html/app.component.html',
})
export class RootComponent {
  private router: Router;
  constructor(router: Router) {
    this.router = router;
  }

  /**
   * This method is to route to about component
   */
  onClickAbout() {
    let link = ['about'];
    this.router.navigate(link);
  }

  /**
   * This method is to route to help component
   */
  onClickHelp() {
    let link = ['help'];
    this.router.navigate(link);
  }
}
