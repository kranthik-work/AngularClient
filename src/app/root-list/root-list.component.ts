import { Component, OnInit } from '@angular/core';
import {RootService} from "../shared/root/root.service";

@Component({
  selector: 'app-root-list',
  templateUrl: './root-list.component.html',
  styleUrls: ['./root-list.component.css']
})
export class RootListComponent implements OnInit {
  root: Array<any>;


  constructor(private rootService: RootService) { }

  ngOnInit() {
    this.rootService.getAll().subscribe(
      data => {
        this.root = data;
      },
      error => console.error(error)
    );
  }

}
