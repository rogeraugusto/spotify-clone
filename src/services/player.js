import TrackPlayer, { Event } from 'react-native-track-player';
import store from '~/store';
import PlayerActions from '~/store/ducks/player';

export default async () => {
  TrackPlayer.addEventListener(Event.remotePlay, () => {
    store.dispatch(PlayerActions.play());
  });

  TrackPlayer.addEventListener(Event.remotePause, () => {
    store.dispatch(PlayerActions.pause());
  });

  TrackPlayer.addEventListener(Event.remotePext, () => {
    store.dispatch(PlayerActions.next());
  });

  TrackPlayer.addEventListener(Event.remotePrevious, () => {
    store.dispatch(PlayerActions.prev());
  });

  TrackPlayer.addEventListener(Event.remotePtop, () => {
    store.dispatch(PlayerActions.reset());
  });
};
