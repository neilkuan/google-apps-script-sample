function updateData(){
  var gst_bsc = "0x4a2c860cEC6471b9F5F5a336eB4F38bb21683c98"

  var ss = SpreadsheetApp.getActiveSpreadsheet(),
  sheet = ss.getActiveSheet();
  let value = sheet.getRange("B2").getValue();
  let gst = getPriceUSD(gst_bsc);
  
  Logger.log(value);
  Logger.log(gst);
  sheet.getRange("H2").setValue(gst) // request new value at every spreadsheets content change. 

}


function getPriceUSD(ids){
  var response = UrlFetchApp.fetch("https://api.pancakeswap.info/api/v2/tokens/"+ ids );
  
  var dataAll = Utilities.jsonParse(response.getContentText());
  return dataAll["data"]['price']
}

function getPriceBNB(ids){
  var response = UrlFetchApp.fetch("https://api.pancakeswap.info/api/v2/tokens/"+ ids);
  
  var dataAll = Utilities.jsonParse(response.getContentText());
  return dataAll["data"]['price_BNB']
}
