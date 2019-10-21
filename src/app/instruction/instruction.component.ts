import {Component, Input, OnInit} from '@angular/core';
import {Instruction} from '../upgrade.service';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.sass'],
  host: {style: 'display: block'}
})
export class InstructionComponent implements OnInit {

  @Input() public instruction: Instruction;

  constructor() {
  }

  ngOnInit() {
  }

}
