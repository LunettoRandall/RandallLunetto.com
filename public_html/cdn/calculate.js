var calculate = {};

calculate.add = function(firstnumber,secondnumber){
	return firstnumber + secondnumber
}

calculate.divide = function(firstnumber,secondnumber){
	return firstnumber / secondnumber
}

calculate.profitpercentage = function(buyprice,marketprice){
	var differenceInPrice = marketprice - buyprice;
	var percentageDifference = differenceInPrice / buyprice;
	var wholepercentagenumber = percentageDifference * 100;
return wholepercentagenumber;

}

