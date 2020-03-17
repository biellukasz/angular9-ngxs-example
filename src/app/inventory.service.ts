import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';
import {InventoryState} from './inventory.state';
import {Inventory} from './inventory.model';
import {Add} from './actions';
import {Dispatch} from '@ngxs-labs/dispatch-decorator';


@Injectable({ providedIn: 'root' })
export class InventoryService {

  @Select(InventoryState)
  public data$: Observable<Inventory>;

  @Dispatch()
  public add(quantity) {
    return new Add(quantity);
  }
}
