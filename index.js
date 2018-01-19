const shoppingItem = $(".shopping-list");

function shoppingMenu() {
    shoppingItem.on('click', '.shopping-item-toggle', function (event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    })
    shoppingItem.on('click', '.shopping-item-delete', function (event) {

        $(this).closest('li').remove();
    })
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault()
        const item = $(this).find('.js-shopping-list-entry').val();
        const list =
            `<li>
            <span class="shopping-item">${item}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
            <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
            <span class="button-label">delete</span>
            </button>
            </div>
        </li>`
        shoppingItem.append(list);
    })
}
$(function () {
    shoppingMenu();
});