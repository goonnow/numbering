module.exports = {
    padding : function( number, charAmount, paddingChar ){
        var numberStr = number.toString();
        var strLength = numberStr.length;
        var paddingChar = ( typeof paddingChar === "undefined" )? "0" : paddingChar;
        var paddingAmount = charAmount-strLength;

        var resStr = paddingChar.repeat(paddingAmount)+number;

        return resStr;
    }
};


String.prototype.repeat = function( num )
{
    return new Array( num + 1 ).join( this );
}


