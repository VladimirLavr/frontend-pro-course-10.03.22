let mySomething: number | string | boolean | null | undefined | bigint | Function | any | never | unknown;

function greet(name: string): string {
  return `Hello ${name}`;
}

const person = {
  name: "Bob",
  lastName: "Andersen",
  age: 43,
};

interface Person {
  name: string;
  lastName: string;
  age: number;
}

const person2: Person = {
  name: "Jack",
  lastName: "Ducks",
  age: 43
};

// ----- Shape ------ //
interface SignUpDataForm {
  login: string;
  password: string;
  confirmPassword: string;
  email: string;
  subscribeToEmailNotifications?: boolean;
}

// ----- data ------ //
const exampleOfSignUpData: SignUpDataForm = {
  login: "johnny.dog",
  email: "johnny.dog@mail.com",
  password: "123456789",
  confirmPassword: "123456789",
  subscribeToEmailNotifications: true,
};

const wrongExampleOfSignUpData: SignUpDataForm = {
  login: "johnny.dog",
  email: "johnny.dog@mail.com",
  password: "123456789",
  confirmPassword: "123456789",
};


function register(data: SignUpDataForm, testing?: boolean, registerDateTime: Date = new Date()) {
  data.subscribeToEmailNotifications && registerDateTime ? console.log(123) : console.log(456);
}

register(wrongExampleOfSignUpData);

// ---- Arrays ------ //
const myArray: SignUpDataForm[] = [];
myArray.push(exampleOfSignUpData);
myArray.push(wrongExampleOfSignUpData);

type TextStyle = 'bold' | 'italic' | 25 | true;

interface Message {
  message: string;
  author: Person;
  style: TextStyle;
}

const message: Message = {
  message: "Hello world!",
  author: person2,
  style: "italic"
};

enum ErrorTypesEnum {
  NOT_ADDED_ITEM,
  NOT_ENOUGH_SPACE,
}

enum SessionSeasons {
  SUMMER = "SUMMER",
  WINTER = "WINTER",
}

const tuple: [string, string, SessionSeasons, number] = ["bob andersen", "math", SessionSeasons.SUMMER, 90];


class ReportData {
  constructor(
    public person: Person,
    private data: SignUpDataForm,
    protected formFillSeason: SessionSeasons
  ) {
  }

  do(): SignUpDataForm {
    this.data = exampleOfSignUpData;
    return this.data;
  }
}

// -----


const reportData = new ReportData(person2, wrongExampleOfSignUpData, SessionSeasons.SUMMER);


abstract class BaseReportGenerator<T> {
  public abstract prepareForPrint(checkData: T): string;
}


class HtmlReportGenerator extends BaseReportGenerator<ReportData> {
  constructor() {
    super();
  }

  prepareForPrint(checkData: ReportData): string {
    return `<h1>${checkData.person.name}</h1>` + `<p>${checkData.person.lastName}</p>`;
  }
}

const htmlRG = new HtmlReportGenerator();

class PDFReportGenerator extends BaseReportGenerator<ReportData> {
  constructor() {
    super();
  }

  prepareForPrint(checkData: ReportData): string {
    return `${checkData.person.name} ${checkData.person.lastName}`;
  }
}

const pdfRG = new PDFReportGenerator();

function printReport(reportGenerator: BaseReportGenerator<ReportData>): string {
  return reportGenerator.prepareForPrint(reportData);
}


class Observable<T> {
  constructor(public value: T) {
  }

  getValue(): T {
    return this.value;
  }
}


const numberObservable = new Observable<number>(5);
numberObservable.getValue();

const personObservable = new Observable<Person>(person2);
personObservable.getValue();


type UUID = string;

enum EntityTypeEnum {
  PROVIDER
}

interface IEntity {
  id: UUID,
  entityName: string,
  entityType: EntityTypeEnum,
}

const stringObservable = new Observable<BaseReportGenerator<ReportData>>(htmlRG);

const myEntityObservable = new Observable<IEntity>({
  id: '2145',
  entityName: "YouTube",
  entityType: EntityTypeEnum.PROVIDER,
});

myEntityObservable.getValue();
