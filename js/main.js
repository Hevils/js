function Data() {
	this.createDate = function(key, date) {
		localStorage.setItem(key, data);

	}
	this.readDate = function(key) {
		return localStorage.getItem(key);

	}
}
var data = new Data();
data.createDate('a', 'some data');
console.info(data.readDate('a'));