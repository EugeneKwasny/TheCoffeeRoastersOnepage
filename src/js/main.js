import mobileMenu from './modules/mobile-menu';
import tabsModule from './modules/tabsModule';

/**
 * Mobile menu init
 */
mobileMenu({
    toggleSlector: '.site-header__main-menu-toggle',
    mobileMenuSelector: '.mobile-menu',
    activeSelectorModifier: '--active'
});


/**
 * Menu Tabs init
 */

tabsModule({
    tabsSelector: '.menu-section__tabs-list-item-link',
    tabsContentWrapperSelector: '.menu-section__list-wrapper',
    activeSelectorModifier: '--active'
});