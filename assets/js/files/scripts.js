// Инициализация динамической адаптации
new Adapt();

// Инициализация модального окна
const modal = new Modal({ animation: "fadeIn" });

new Menu("main-menu");

new Tabs("inner-tabs");

new Spoiler("submenu-spoiler", {
	mediaMax: 1200,
});
