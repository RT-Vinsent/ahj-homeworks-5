export default class Popovers {
  constructor(popoversPlay) {
    this.popoversPlay = popoversPlay;
  }

  init() {
    this.popoversPlay.addClickListeners(this.onClick.bind(this));
    this.popoversPlay.drawUI();
  }

  onClick(textEL) {
    this.popoversPlay.delTooltip(); // удаляет старую подсказку
    this.popoversPlay.addTooltip(textEL); // добавляет новую подсказку
    // this.popoversPlay.positioning(); // позиционирует подсказку c любой стороны
    this.popoversPlay.position(); // позиционирует подсказку только сверху
  }
}
