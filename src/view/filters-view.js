import AbstractView from '../framework/view/abstract-view.js';


const createTemplate = () => `
<form class="trip-filters" action="#" method="get">
                <div class="trip-filters__filter">
                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
                </div>

                <div class="trip-filters__filter">
                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
                  <label class="trip-filters__filter-label" for="filter-future">Future</label>
                </div>

                <button class="visually-hidden" type="submit">Accept filter</button>
              </form>`;

export default class FiltersView extends AbstractView {

  #onFilterTypeChange = null;

  constructor(onFilterTypeChange) {
    super();
    this.#onFilterTypeChange = onFilterTypeChange;

    this.element.querySelectorAll('input').forEach((value)=>{
      value.addEventListener('change', (evt)=>{
        evt.preventDefault();
        this.#onFilterTypeChange(evt.target.value);
      });
    });
  }


  get template() {
    return createTemplate();
  }
}
