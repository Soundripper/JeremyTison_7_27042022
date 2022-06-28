class SearchForm {
    constructor (subject) {
        // this._recipes = Recipes;
        this.subject = subject;
        this.searchGeneral = document.createElement('div')
        this.searchGeneralWrapper = document.querySelector('.search_General_wrapper')
        this.recettesCardsWrapper = document.querySelector('.recettesCardsWrapper')
    }

    inputSearch() {
        this.searchGeneralWrapper
            .querySelector('.search_General')
            .addEventListener('input', e => {
                const query = e.target.value;
                if (query.length >= 3) {
                    console.log("main search sup à 3 char");
                    const value = e.target.value;
                    this.subject.run(
                        {
                            'type': 'main_search',
                            value
                        }
                    )
                } else  {
                    console.log("main search inf à 3 char");
                    this.subject.run(
                        {
                            'type': 'main_search',
                            'value' : ''
                        }
                    )
                }   
            })
        
    }
    render() {
        // const searchForm = `
        // <div class="input-group rounded col-12 mx-auto mt-3" id="searchBar">
        //     <input type="search" class="form-control rounded bg-light search_General" placeholder="Rechercher une recette" aria-label="Search" aria-describedby="search-addon" />
        //     <span class="searchIcon border-0" id="search-addon"></span>
        // </div>
        // `;
        // const searchForm = `
        // <div class="input-group rounded col-12 mx-auto mt-3" id="searchBar">
        //     <input type="search" class="form-control rounded bg-light search_General" placeholder="Rechercher une recette" aria-label="Search" aria-describedby="search-addon" />
        //     <span class="searchIcon border-0" id="search-addon">
        //         <i class="bi bi-search" ></i>
        //     </span>
        // </div>
        // `;
        const searchForm = `
        <div class="input-group col-12 mx-auto mt-3">
            <input class="form-control py-2 search_General" type="search" placeholder="Rechercher une recette" id="searchBar">
            <span class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                <i class="bi bi-search" ></i>
                </button>
            </span>
        </div>`
        this.searchGeneral.innerHTML = searchForm;
        this.searchGeneralWrapper.appendChild(this.searchGeneral);
        this.inputSearch();
    }
}