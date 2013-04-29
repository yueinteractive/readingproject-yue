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

				//The animation I just created isnt as fluent as expectation.. just mark here
				//And I fixed it in the CSS
				$(".circle_btn").addClass("rotationArrow");
			}else{

				panelOffsetX = 0;
				$(this).parent().prevAll().css('opacity', 1);
				$(this).parent().next().nextAll().css('opacity', 1);

				$(".circle_btn").removeClass("rotationArrow");

			}

			$(panelContainer).css('left', panelOffsetX + 'px');
		});
	});
});