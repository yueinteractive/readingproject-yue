// create flip cards
var panelContents = $(document.body).find('.individualPanelContent');
var firstPanel = panelContents[0];

for(var i = 0; i < 3; ++i) {
	var flipCard = new ritrd.FlipCard();
	$(firstPanel).append(flipCard.domElement);

}
	
if(i = 0) {
	$(firstPanel).append('<p>Test</p>');
}

else if( i = 1) {
	$(firstPanel).append('<h2>Test1</h2>');
}