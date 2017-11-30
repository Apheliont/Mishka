{
    const menuModel = {
        isMenuOpen: false,
        menu: '',
        menuItems: '',
        menuItemsLength: '',
        menuHeight: ''
    };

    const menuView = {
        init() {
            this.showMenuBtn = document.querySelector('.menu__button');
            this.showMenuBtn.addEventListener('click', () => {
                menuController.toggleMenu();
            });
        }
    };

    const menuController = {
        init() {
            this.initModel();
            this.hideMenu();
            menuView.init();
        },
        initModel() {
            menuModel.menu = document.querySelector('.menu__list');
            menuModel.menuHeight = parseInt(getComputedStyle(menuModel.menu).height);
            menuModel.menuItems = menuModel.menu.children;
            menuModel.menuItemsLength = menuModel.menu.children.length;
        },
        toggleMenu() {
             if (menuModel.isMenuOpen) {
                for (let i = 0; i < menuModel.menuItemsLength; i++) {
                    setTimeout(() => {
                        menuModel.menuItems[i].classList.add('menu__item--hidden');
                    },600 / (i + 2));
                }

                let multiplier = 1;
                const menuInterval = setInterval(() => {
                    const currentHeight = parseInt(getComputedStyle(menuModel.menu).height);
                    if (currentHeight - multiplier >= 0) {
                        menuModel.menu.style.height = `${currentHeight - multiplier}px`;
                        multiplier *= 1.03;
                    } else {
                        menuModel.menu.style.height = 0;
                        clearInterval(menuInterval);
                    }

                },5);
            } else {
                for (let i = 0; i < menuModel.menuItemsLength; i++) {
                    setTimeout(() => {
                        menuModel.menuItems[i].classList.remove('menu__item--hidden');
                    },i * 170);
                }
                let multiplier = 2;
                const menuInterval = setInterval(() => {
                    const currentHeight = parseInt(getComputedStyle(menuModel.menu).height);

                    if (currentHeight + multiplier < menuModel.menuHeight) {
                        menuModel.menu.style.height = `${currentHeight + multiplier}px`;
                        multiplier *= 1.02;
                    } else {
                        menuModel.menu.style.height = menuModel.menuHeight;
                        clearInterval(menuInterval);
                    }

                },5);
            }
            menuModel.isMenuOpen = !menuModel.isMenuOpen;
        },
        hideMenu() {
            for (let i = 0; i < menuModel.menuItemsLength; i++) {
                setTimeout(() => {
                    menuModel.menuItems[i].classList.add('menu__item--hidden');
                },600 / (i * 2 + 2));
            }
            menuModel.menu.style.height = 0;
        }
    };

    menuController.init();
}