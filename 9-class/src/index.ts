class User {
  email: string;
  name: string;
  private city: string = ""; // only accesable in this class
  readonly nationalCode: number = 0;

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const newUser = new User("amin@gmail.com", "ali");
// newUser.city = "tehran"; //error its privat
// ------------------------------------------------------------------------------------------------------------------

// getter and setter:

class User1 {
  private _courseCount: number = 1;
  protected _courseCount1 = 2;

  constructor(public email: string, public name: string) {}

  private deleteToken() {
    console.log("yesss deletedd!!");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("error");
    }

    this._courseCount = courseNum;
  }
}

class SubUser extends User1 {
  isFamily: boolean = true;

  //   changeCourse(){
  //     this._courseCount = 4
  //   }

  changeCourse() {
    this._courseCount1 = 4;
  }
}
// ------------------------------------------------------------------------------------------------------------------

// Interface importance is : define protocols

// interface TakePhoto {
//     cameraMode: string
//     filter:string,
//     burst: number,
// }

// interface Story{
//     creatStory(): void
// }

// class InstagramInstagram implements TakePhoto{
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number,
//     ){}
// }

// class Youtube implements TakePhoto, Story{
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number,
//         public nummmber: number, // you do more but you can do less
//     ){}

//     creatStory(): void {
//         console.log('hhhhh')
//     }
// }
