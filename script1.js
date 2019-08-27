var country;
var capital;

function inputData() {
	country = prompt("Введите страну.");
	capital = prompt("Введите столицу");
	addСountry(country, capital);
}

function getInfo() {
	country = prompt("Введите страну для инфо");
	alert(getcountryInfo(country));
}

function countriesall() {
	console.log(listСountries());
}

function deleteData() {
	country = prompt("Какую страну удалить?");
	if ( country in countries) {
		deleteСountry(country);
		alert("Страна " + country + " успешно удалена!");
	} else {
		alert("Страны " + country + " в хэше не существует!");
	}
}