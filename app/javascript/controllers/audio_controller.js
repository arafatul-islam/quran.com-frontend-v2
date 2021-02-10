import {Controller} from "stimulus";

const AUDIO_CDN = "https://audio.qurancdn.com/";
// TODO: should set to false to use web audio instead, but that requires CORS
const USE_HTML5 = false;
let Howl, Howler;

export default class extends Controller {
  connect(){
    this.settings = document.body.setting;
    this.preloadTrack = {};
    this.currentTrack = {
      howl: null,
      segments: []
    };
  }

  loadHowler() {
    if (Howl) {
      return Promise.resolve()
    }

    return import("howler").then(howler => {
      Howl = howler.Howl;
      Howler = howler.Howler;
    });
  }
}
