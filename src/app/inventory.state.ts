import {Inventory} from './inventory.model';
import {Action, State, StateContext} from '@ngxs/store';
import {Add} from './actions';

@State<Inventory>({
  name: 'inventory',
  defaults: {productQuantity: 0, error: ''}
})
export class InventoryState {

  @Action(Add)
  private addHeroByState(ctx: StateContext<Inventory>, {quantity}: Add) {
    let state = ctx.getState();
    if (quantity < 20) {
      state = {
        ...state,
        productQuantity: state.productQuantity + quantity,
        error: ''
      };
    } else {
      state = {
        ...state,
        error: 'Too many products'
      };
    }
    ctx.setState(state);
  }
}
