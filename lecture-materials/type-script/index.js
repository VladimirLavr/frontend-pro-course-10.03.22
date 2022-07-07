var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var mySomething;
function greet(name) {
    return "Hello ".concat(name);
}
var person = {
    name: "Bob",
    lastName: "Andersen",
    age: 43
};
var person2 = {
    name: "Jack",
    lastName: "Ducks",
    age: 43
};
// ----- data ------ //
var exampleOfSignUpData = {
    login: "johnny.dog",
    email: "johnny.dog@mail.com",
    password: "123456789",
    confirmPassword: "123456789",
    subscribeToEmailNotifications: true
};
var wrongExampleOfSignUpData = {
    login: "johnny.dog",
    email: "johnny.dog@mail.com",
    password: "123456789",
    confirmPassword: "123456789"
};
function register(data, testing, registerDateTime) {
    if (registerDateTime === void 0) { registerDateTime = new Date(); }
    data.subscribeToEmailNotifications && registerDateTime ? console.log(123) : console.log(456);
}
register(wrongExampleOfSignUpData);
// ---- Arrays ------ //
var myArray = [];
myArray.push(exampleOfSignUpData);
myArray.push(wrongExampleOfSignUpData);
var message = {
    message: "Hello world!",
    author: person2,
    style: "italic"
};
var ErrorTypesEnum;
(function (ErrorTypesEnum) {
    ErrorTypesEnum[ErrorTypesEnum["NOT_ADDED_ITEM"] = 0] = "NOT_ADDED_ITEM";
    ErrorTypesEnum[ErrorTypesEnum["NOT_ENOUGH_SPACE"] = 1] = "NOT_ENOUGH_SPACE";
})(ErrorTypesEnum || (ErrorTypesEnum = {}));
var SessionSeasons;
(function (SessionSeasons) {
    SessionSeasons["SUMMER"] = "SUMMER";
    SessionSeasons["WINTER"] = "WINTER";
})(SessionSeasons || (SessionSeasons = {}));
var tuple = ["bob andersen", "math", SessionSeasons.SUMMER, 90];
var ReportData = /** @class */ (function () {
    function ReportData(person, data, formFillSeason) {
        this.person = person;
        this.data = data;
        this.formFillSeason = formFillSeason;
    }
    ReportData.prototype["do"] = function () {
        this.data = exampleOfSignUpData;
        return this.data;
    };
    return ReportData;
}());
// -----
var reportData = new ReportData(person2, wrongExampleOfSignUpData, SessionSeasons.SUMMER);
var BaseReportGenerator = /** @class */ (function () {
    function BaseReportGenerator() {
    }
    return BaseReportGenerator;
}());
var HtmlReportGenerator = /** @class */ (function (_super) {
    __extends(HtmlReportGenerator, _super);
    function HtmlReportGenerator() {
        return _super.call(this) || this;
    }
    HtmlReportGenerator.prototype.prepareForPrint = function (checkData) {
        return "<h1>".concat(checkData.person.name, "</h1>") + "<p>".concat(checkData.person.lastName, "</p>");
    };
    return HtmlReportGenerator;
}(BaseReportGenerator));
var htmlRG = new HtmlReportGenerator();
var PDFReportGenerator = /** @class */ (function (_super) {
    __extends(PDFReportGenerator, _super);
    function PDFReportGenerator() {
        return _super.call(this) || this;
    }
    PDFReportGenerator.prototype.prepareForPrint = function (checkData) {
        return "".concat(checkData.person.name, " ").concat(checkData.person.lastName);
    };
    return PDFReportGenerator;
}(BaseReportGenerator));
var pdfRG = new PDFReportGenerator();
function printReport(reportGenerator) {
    return reportGenerator.prepareForPrint(reportData);
}
var Observable = /** @class */ (function () {
    function Observable(value) {
        this.value = value;
    }
    Observable.prototype.getValue = function () {
        return this.value;
    };
    return Observable;
}());
var numberObservable = new Observable(5);
numberObservable.getValue();
var personObservable = new Observable(person2);
personObservable.getValue();
var EntityTypeEnum;
(function (EntityTypeEnum) {
    EntityTypeEnum[EntityTypeEnum["PROVIDER"] = 0] = "PROVIDER";
})(EntityTypeEnum || (EntityTypeEnum = {}));
var stringObservable = new Observable(htmlRG);
var myEntityObservable = new Observable({
    id: '2145',
    entityName: "YouTube",
    entityType: EntityTypeEnum.PROVIDER
});
myEntityObservable.getValue();
