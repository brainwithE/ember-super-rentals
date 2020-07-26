import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class RentalListComponent extends Component {
  @tracked query = '';
}
