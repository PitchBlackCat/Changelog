import {Component, Input, OnInit} from "@angular/core";
import {Change} from "../version.service";

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.sass'],
  host: { style: "display: block"}
})
export class ChangeComponent implements OnInit {

  @Input() public change: Change;

  constructor() { }

  ngOnInit() {
  }

}
