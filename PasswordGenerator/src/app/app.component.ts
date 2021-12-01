import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //password generator
  pwd: string = '';
  lunghez: number;

  checkStr = false;
  checkNumb = false;
  checkSymb = false;

  finalPassword = '';

  lunghezza(event: Event): void {
    this.lunghez = parseInt((<HTMLInputElement>event.target).value)
    console.log(this.lunghez);

  }

  checkString(): void {
    this.checkStr = !this.checkStr;
    console.log(this.checkStr);

  }

  checkNumber(): void {
    this.checkNumb = !this.checkNumb;
    console.log(this.checkNumb);

  }

  checkSymbol(): void {
    this.checkSymb = !this.checkSymb;
    console.log(this.checkSymb);

  }

  generatePassword(): void {
    if (this.lunghez != 0) {
      this.finalPassword = '';
      let passwordString = '';
      const str: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const nmb: string = '0123456789';
      const smb: string = '@!£$%&"/()=?^|:,;*-+';



      //if checkbox are checked
      if (this.checkStr) {
        passwordString += str;
      } if (this.checkNumb) {
        passwordString += nmb;
      } if (this.checkSymb) {
        passwordString += smb;
      }
      //index of characters 
      //for loop
      for (let i = 0; i < this.lunghez; i++) {
        //random number
        const randomIndex = Math.floor(Math.random() * passwordString.length);

        //use randomIndex to pick a character from passwordString
        this.finalPassword += passwordString[randomIndex];
      }

      console.log(this.finalPassword);
    }

  }


}