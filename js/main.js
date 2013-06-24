// create flip cards
var panelContents = $(document.body).find('.individualPanelContent');
var firstPanel = panelContents[0];

for(var i = 0; i < 6; ++i) {
	var cardData = ritrd.data.flipCard[i];
	var flipCard = new ritrd.FlipCard( cardData );
	$(firstPanel).append(flipCard.domElement);

}
	
if(i = 0) {
	$(firstPanel).append('<p>Test</p>');
}