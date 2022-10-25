//# Quick-access
const $cards = $('.card')
const $headers = $('.grid-item.header')

//# Setup
document.querySelectorAll('.grid').forEach((grid) => animateCSSGrid.wrapGrid(grid, {duration: 300}))
$cards.find('.back').css('display', 'none')
$cards.on('click', function(){
	if ($(this).hasClass('large'))
		$(this).find('.back').css('display', 'none')
	else
		$(this).find('.back').css('display', '')
	setTimeout(() => {
		$(this).toggleClass('large')
	}, 1)
})
$headers.on('click', function() {
	const grid = $(this).next()
	if (grid.find('.card.large').length)
		grid.find('.card.large').trigger('click')
	else
		grid.find('.card').trigger('click')
})
//- Stop bubbling on card links
$cards.find('a').on('click', (e) => e.stopPropagation())

//# Functions