//Unit test for Computer Price 
function PriceTest(num1, num2, num3, num4) {
	
	return  num1 + num2 + num3 + num4 === 1000;
}
 test('PriceTest()', function(){
 	ok(PriceTest(1000,0,0,0), " Base price should equal to 1000");
 })

function PriceTest2(num1, num2, num3, num4) {
	
	return  num1 + num2 + num3 + num4 === 1200;
}
 test('PriceTest2()', function(){
 	ok(PriceTest2(1000,200,0,0), " Price should equal to 1200 with 15 Inches screen, 128GDB HD and 8 GB of RAM ");
 })

function PriceTest3(num1, num2, num3, num4) {
	
	return  num1 + num2 + num3 + num4 === 1400;
}
 test('PriceTest3()', function(){
 	ok(PriceTest3(1000,200,200,0), " Price should equal to 1400 with 15 Inches screen, 256GDB HD and 8 GB of RAM ");
 })
function PriceTest4(num1, num2, num3, num4) {
	
	return  num1 + num2 + num3 + num4 === 1600;
}
 test('PriceTest4()', function(){
 	ok(PriceTest4(1000,200,200,200), " Price should equal to 1600 with 15 Inches screen, 256GDB HD and 16 GB of RAM ");
 })
