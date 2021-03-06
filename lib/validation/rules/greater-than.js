module.exports = function(that) {

  var value = that.getValue();

  if (!value)
    return true;

  var otherField = that.getField(that.Rules.greaterThan);

  if (!otherField || !otherField.getValue())
    return true;
	
  var otherFieldValue = otherField.getValue();

  var value1 = !!isNaN(value) || typeof value=='object'?value:parseFloat(value);
  var value2 = !!isNaN(otherFieldValue) || typeof otherFieldValue=='object'?otherFieldValue:parseFloat(otherFieldValue);

  return value1 > value2;

}
