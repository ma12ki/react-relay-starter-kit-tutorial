import Relay from 'react-relay';

/*
 * anchor our game to the game root field of the schema:
 */
export default class extends Relay.Route {
  static path = '/';
  static queries = {
    game: () => Relay.QL`query { game }`,
  };
  static routeName = 'AppHomeRoute';
}