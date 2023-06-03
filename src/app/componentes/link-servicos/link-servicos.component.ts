// link-servicos.component.ts
import { Component } from '@angular/core';
import servicosJson from 'src/assets/servicos.json';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-link-servicos',
  templateUrl: './link-servicos.component.html',
  styleUrls: ['./link-servicos.component.css']
})
export class LinkServicosComponent {
  servicos = servicosJson.servicos;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 767px)')
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

}
