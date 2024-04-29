function doGet() {
  var spreadsheet = SpreadsheetApp.openById('1NP20i0LFNhlorlNG4pYpbfk6HZn1cBJgPRONqgpDxaQ');
  var sheet = spreadsheet.getSheetByName('Лист1');
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values.length; j++) {
      if (values[i][j] instanceof Date) {
        values[i][j] = Utilities.formatDate(values[i][j], Session.getScriptTimeZone(), "dd.MM.yyyy");
      }
    }
  }
  
  var template = HtmlService.createTemplateFromFile('SIS1');
  template.data = values;

  return template.evaluate().setTitle('Chingis Utegenov Daily Expenses');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
