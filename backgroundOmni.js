chrome.omnibox.onInputEntered.addListener(function(text) { 
  if(text == "docs"){//Send to documents
  	chrome.tabs.update({url: "https://docs.google.com/document/u/0/"});
  }else if(text == "sheets"){//Send to sheets
  	chrome.tabs.update({url: "https://docs.google.com/spreadsheets/u/0/"});
  }else if(text == "slides"){//Send to slides
	chrome.tabs.update({url: "https://docs.google.com/presentation/u/0/"});
  }else if(text == "drive"){
  	chrome.tabs.update({url: "https://drive.google.com/drive/"});
  }
});