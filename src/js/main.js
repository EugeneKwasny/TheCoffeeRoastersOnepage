import mobileMenuToggleModule from './modules/mobileMenuToggle';
import tabsModule from './modules/tabsModule';
import sliderModule from './modules/sliderModule';
import scrollToAnchor from './modules/scrollToAnchor';

/**
 * Mobile menu init
 */
mobileMenuToggleModule({
    toggleSlector: '.site-header__main-menu-toggle',
    mobileMenuSelector: '.mobile-menu',
    mobileMenuItemSelector: '.mobile-menu__list-item-link',
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


/**
 * Testimonials slider init
 */
sliderModule({
    navSelector: '.testimonials-slider__nav-list-item-link',
    sliderContentWrapperSelector: '.testimonials-slider__item',
    activeSelectorModifier: '--active'
});


/**
 * Smooth scroll init for main menu 
 */
 scrollToAnchor({
    menuItemSelector: '.site-header__main-menu-list-item-link'
 });

/**
 * Smooth scroll init for mobile menu 
 */
 scrollToAnchor({
    menuItemSelector: '.mobile-menu__list-item-link'
 });