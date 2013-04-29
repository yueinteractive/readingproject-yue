var panels = $('.panel');


panels.each(function(panelIndex, panel) {

	var panelContainer = $(panel).find('.panelContainer');
	var panelContents = $(panel).find('.individualPanelContent');
	var buttons = $(panel).find('.circle_btn');

	buttons.each(function(buttonIndex, button) {
		$(button).click(function(e) {
			var panelContent = panelContents[buttonIndex];

			var panelOffsetX = null;

			var hasExpanded = $(panelContent).hasClass('expanded');
			panelContents.removeClass('expanded');


			if(!hasExpanded) {
				$(panelContent).addClass('expanded');
				panelOffsetX = - 400 * buttonIndex;
				$(this).parent().prevAll().css('opacity', 0);
				$(this).parent().next().nextAll().css('opacity', 0);
			}else{
				panelOffsetX = 0;
				$(this).parent().prevAll().css('opacity', 1);
				$(this).parent().next().nextAll().css('opacity', 1);
			}

			$(panelContainer).css('left', panelOffsetX + 'px');
		});
	});
});