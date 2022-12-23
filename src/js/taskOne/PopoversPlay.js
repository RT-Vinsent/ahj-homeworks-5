/* eslint-disable no-console */
export default class PopoversPlay {
  constructor() {
    this.container = null; // for container
    this.clickListeners = [];
  }

  // binding container to class
  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  // check container
  checkBinding() {
    if (this.container === null) {
      throw new Error('DomPlay not bind to DOM');
    }
  }

  // rendering HTML
  drawUI() {
    this.checkBinding();

    this.container.innerHTML = `
      <H2>
        Popovers - подсказки открываются по допустимому месту начиная справа и по часовой.
      </H2>
      <div class="container">

        <div><a href="" class="has-tooltip" title="Устройтесь на работу!">Деньги!</a>

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi facere dolor dicta accusamus corporis itaque 
        quam deleniti, earum similique alias nostrum corrupti aspernatur, beatae, veniam vel quidem tenetur, odit reiciendis.</div>
        
        <div>Laboriosam aliquid neque in itaque at eaque, similique nisi consequatur voluptatem nam blanditiis eum ab, pariatur, 
        harum molestias quas veniam. Aliquam maxime ipsa neque earum accusantium suscipit quasi. Harum, atque.</div>

        <div>Commodi fugiat vitae facere, provident voluptatem architecto reprehenderit. Nemo natus, qui quia animi voluptatibus. 
        Cupiditate dolores, ducimus, nihil adipisci nemo dolorum aliquam eveniet obcaecati aperiam quis eum corporis velit! Esse.</div>

        <div>Earum deleniti laborum sunt ea, inventore voluptatum. Excepturi maiores laboriosam fugit, inventore hic quae ipsum, 
        sequi ipsam expedita quisquam provident velit dolorum natus atque qui dignissimos numquam, quam, debitis! Error!</div>

        <div>Autem iure cum, accusantium soluta dolor beatae voluptas, ipsa ad quas dignissimos. Laboriosam laborum praesentium 
        necessitatibus cumque tempore animi similique corporis quas, ipsam suscipit id possimus deserunt vitae incidunt eos.</div>

        <div>Autem, temporibus, nihil. Debitis quasi ex minus, delectus doloremque officiis sint facere, ducimus impedit! Sit, minima, 
        et modi reiciendis sequi quo, voluptas dignissimos fugit veritatis quis nobis dolor saepe. Nobis!
        
        <a href="" class="has-tooltip" title="Это просто подсказка!">Подсказка</a></div>

        <div>Itaque eum maxime tempora soluta, impedit placeat, dolores quod esse quibusdam saepe consequatur pariatur maiores? 
        Ex minima delectus unde sit repudiandae quidem maxime non velit aliquam temporibus nulla, magnam, laboriosam!</div>

        <div>Eum maiores doloribus, unde vel, doloremque, perferendis amet perspiciatis et distinctio natus veniam tempora magni 
        possimus. Eius repellat molestiae nihil deserunt accusantium provident soluta eligendi, sequi possimus suscipit, laudantium, rem!</div>

        <div>Odit voluptas quisquam minus id magni, temporibus cupiditate rem aspernatur nihil ipsam? Minima, tempora perspiciatis doloribus 
        ut nulla. Magni tempore repellendus voluptatem nisi esse minima ipsam, saepe facere et qui?</div>

        <div>Esse molestiae dolore hic sunt asperiores vitae odio ab voluptatum provident corporis, voluptates ducimus reiciendis inventore, 
        placeat quasi minima dicta nemo voluptas voluptate unde, culpa illum? Modi qui, officia nobis.</div>

        <div>Enim blanditiis nesciunt, repudiandae, ipsa accusantium  quos vitae magnam modi? Quia eaque natus officiis excepturi adipisci 
        
        <a href="" class="has-tooltip" title="Не важный текст подсказки">Важно</a> 

        optio voluptate quis ut praesentium vero. Adipisci pariatur molestias harum ullam, incidunt blanditiis officia!</div>

        <div>Beatae aspernatur eveniet doloribus ullam magnam, reprehenderit odio eius, laboriosam voluptatum cupiditate voluptate officiis 
        fuga neque, inventore magni, labore assumenda porro dolores quidem. Accusantium temporibus consectetur architecto ab, a suscipit?</div>

        <div>Sit dicta eos magni vel quae est debitis ipsam eligendi veniam totam et perspiciatis reprehenderit itaque excepturi omnis autem 
        nihil explicabo sequi ut optio, officia voluptates sed? Ipsam, rerum maiores.</div>

        <div>Doloremque fugiat nemo ea, id praesentium illum ab soluta cumque labore nam. Itaque reprehenderit vitae aliquid debitis rerum 
        temporibus cupiditate quos dignissimos! Praesentium molestias provident vero quia esse recusandae magni.</div>

        <div>Soluta, rem reprehenderit dignissimos excepturi aut alias natus dicta, cumque, sequi, perferendis facere! Neque debitis veritatis 

        <a href="" class="has-tooltip" title="Подсказка открыта">Подсказку</a> 

        ratione in aut, consectetur incidunt sunt cupiditate exercitationem! Perferendis nemo molestias facilis perspiciatis voluptas.</div>

        <div>Totam dicta esse iure repudiandae asperiores culpa accusamus facilis magnam aut nemo earum quia provident necessitatibus, nihil amet, 
        praesentium voluptatibus animi temporibus libero dolorem quis eveniet dolore debitis nisi. Suscipit.</div>

        <div>Dolores, inventore, minima. Aut assumenda laudantium praesentium, molestiae cumque incidunt animi necessitatibus ut laboriosam. 
        Porro cupiditate laboriosam, eum dicta ut repudiandae aliquam explicabo soluta. Quidem molestiae numquam unde accusantium quasi!</div>

        <div>Eveniet iusto, placeat architecto enim fugiat obcaecati, ullam perferendis in culpa commodi, provident magnam similique natus nobis. 
        Illum, dolores, voluptate placeat laboriosam soluta cupiditate possimus, ea aspernatur quis debitis sint.</div>

        <div>Eligendi reiciendis doloremque veritatis rerum corporis voluptatem est expedita porro fuga quae. Nam hic asperiores consequatur odit, 
        ea, illo vitae quis non, aperiam tenetur architecto sint, nisi iure ipsum laudantium.</div>

        <div>Ad, repellendus doloremque. Debitis molestiae recusandae vero, quasi autem iusto mollitia deserunt odio delectus voluptatum dicta quae, 
        tempora sint doloremque rem. Quod eum fugiat magni nostrum, dolore eligendi vel nisi.</div>

        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut aspernatur praesentium ipsum perferendis voluptas omnis ab quidem, 
    
        <a href="" class="has-tooltip" title="Выхода нет, скоро рассвет">Конец</a>
    
        corrupti corporis aperiam, architecto, doloremque sequi at nisi fugit quaerat molestiae quae consectetur!</div>

        <div>Modi ab asperiores est quae consectetur inventore perferendis! Voluptatibus cumque voluptate repellat, earum ad nulla et natus eligendi. 
        Repellat ad iusto facilis dolorem recusandae, modi suscipit sapiente soluta nihil quam!</div>

      </div>
    `;

    this.container.classList.add('task');

    // DOM elements
    this.hasTooltips = this.container.querySelectorAll('.has-tooltip');

    // DOM events
    for (let i = 0; i < this.hasTooltips.length; i += 1) {
      this.hasTooltips[i].addEventListener('click', (event) => this.onClick(event));
    }

    window.addEventListener('scroll', () => this.position());
  }

  // Add listener to click
  addClickListeners(callback) {
    this.clickListeners.push(callback);
  }

  onClick(event) {
    event.preventDefault();
    this.position();

    // const { title } = event.target;
    this.clickListeners.forEach((o) => o.call(null, event.target));
  }

  addTooltips() { // метод добавления подсказки в ссылку
    for (let i = 0; i < this.hasTooltips.length; i += 1) {
      const tooltip = document.createElement('div');
      const tooltipHeading = `
        <p>Popover Title</p>
      `;
      const tooltipText = `
        <p>${this.hasTooltips[i].title}</p>
      `;

      tooltip.classList.add('tooltip');
      tooltip.innerHTML = tooltipText;
      this.hasTooltips[i].appendChild(tooltip);
      tooltip.insertAdjacentHTML('afterBegin', tooltipHeading);
    }
  }

  position() { // позиционирование подсказки
    for (let i = 0; i < this.hasTooltips.length; i += 1) {
      const tooltip = this.hasTooltips[i].querySelector('.tooltip');

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      let tooltipHeight = 0; // высота подсказки
      let tooltipWidth = 0; // ширина подсказки

      if (tooltip.classList.contains('tooltip_active')) {
        tooltipHeight = tooltip.getBoundingClientRect().height; // находим высоту подсказки
        tooltipWidth = tooltip.getBoundingClientRect().width; // находим ширину подсказки
      }

      if (!tooltip.classList.contains('tooltip_active')) {
        tooltip.classList.add('tooltip_active');
        tooltipHeight = tooltip.getBoundingClientRect().height; // находим высоту подсказки
        tooltipWidth = tooltip.getBoundingClientRect().width; // находим ширину подсказки
        tooltip.classList.remove('tooltip_active');
      }

      const {
        top,
        left,
        right,
        bottom,
        height,
        width,
      } = this.hasTooltips[i].getBoundingClientRect();

      // if (i === 1) {
      //   console.log(`top ${top}`);
      //   console.log(`left ${left}`);
      //   console.log(`right ${right}`);
      //   console.log(`bottom ${bottom}`);
      //   console.log(`height ${height}`);

      //   console.log(`screenWidth ${screenWidth}`);
      //   console.log(`screenHeight ${screenHeight}`);

      //   console.log(`tooltipHeight ${tooltipHeight}`);
      //   console.log(`tooltipWidth ${tooltipWidth}`);
      // }

      // задаём через style позиционирование по условию
      if (screenWidth - (right + tooltipWidth) >= 0) {
        // справа
        tooltip.dataset.position = 'right';
        tooltip.style = `left: ${right}px; top: ${top - ((tooltipHeight - height) / 2)}px`;
      // eslint-disable-next-line max-len
      } else if (screenHeight - (bottom + tooltipHeight) >= 0 && tooltipWidth <= screenWidth && (screenWidth - left) >= tooltipWidth) {
        // снизу
        tooltip.dataset.position = 'bottom';
        tooltip.style = `left: ${(left + width / 2) - tooltipWidth / 2}px; top: ${bottom}px`;
      } else if (left - tooltipWidth >= 0) {
        // слева
        tooltip.dataset.position = 'left';
        tooltip.style = `left: ${left - tooltipWidth}px; top: ${top - ((tooltipHeight - height) / 2)}px`;
      } else if (top - tooltipHeight >= 0) {
        // сверху
        tooltip.dataset.position = 'top';
        tooltip.style = `left: ${(left + width / 2) - tooltipWidth / 2}px; top: ${top - tooltipHeight}px`;
      }
    }
  }

  // delTooltip() {
  //   for (let i = 0; i < this.tooltips.length; i += 1) {
  //     const divTooltips = this.tooltips[i].querySelector('.tooltip');

  //     if (divTooltips) {
  //       this.tooltips[i].removeChild(divTooltips);
  //     }
  //   }
  // }

  tooltipActive(hasTooltip) {
    const tooltip = hasTooltip.querySelector('.tooltip'); // находим подсказку у ссылки

    if (tooltip.classList.contains('tooltip_active')) { // если подсказка активна
      this.hasTooltips.forEach((element) => element.querySelector('div.tooltip').classList.remove('tooltip_active'));
    } else {
      this.hasTooltips.forEach((element) => element.querySelector('div.tooltip').classList.remove('tooltip_active'));
      tooltip.classList.add('tooltip_active'); // включает подсказку
    }
  }

  clearHTML() { // очищаем container в DOM
    this.container.classList.remove('task');
    this.container.innerHTML = '';
  }
}
