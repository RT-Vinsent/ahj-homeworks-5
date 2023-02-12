export default class Popovers {
  constructor(popoversPlay) {
    this.popoversPlay = popoversPlay;
  }

  init() {
    this.popoversPlay.addClickListeners(this.onClick.bind(this));

    this.popoversPlay.drawUI();
    this.popoversPlay.addTooltips();
  }

  onClick(value) {
    this.popoversPlay.tooltipActive(value);
  }
}
