{
    const menuModel = {
        isMenuOpen: false,
        menuItems: ''
    };

    const menuView = {
        init() {
            this.menu = document.querySelector('.menu__list');
            this.showMenuBtn = document.querySelector('.menu__button');
            menuController.toggleMenu();

            this.showMenuBtn.addEventListener('click', () => {
                menuController.toggleMenu();
            });
        }
    };

    const menuController = {
        init() {
            menuView.init();
        },
        toggleMenu() {
            if (!menuModel.menuItems) {
                menuModel.menuItems = menuView.menu.children;
            }

            const menuItemsLength = menuModel.menuItems.length;

            if (menuModel.isMenuOpen) {
                for (let i = 0; i < menuItemsLength; i++) {
                    setTimeout(() => {
                        menuModel.menuItems[i].classList.remove('menu__item--hidden');
                    },i * 200);
                }
                menuView.menu.classList.remove('menu__list--hidden');
            } else {
                for (let i = 0; i < menuItemsLength; i++) {
                    setTimeout(() => {
                        menuModel.menuItems[i].classList.add('menu__item--hidden');
                    },1000 / (i + 2));
                }
                menuView.menu.classList.add('menu__list--hidden');
            }
            menuModel.isMenuOpen = !menuModel.isMenuOpen;
        }
    };

    menuController.init();
}