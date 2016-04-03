var Wings = function () { };

Wings.Member = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Wings.Member.prototype = {
    getName : function () {
        return this.lastName + ' ' + this.firstName;
    }
};

var mem = new Wings.Member('Yukihiro', 'Yamada');
document.writeln(mem.getName());