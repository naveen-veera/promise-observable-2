import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Promise-Observable';
  constructor(private http: HttpClient) {}

  listCountry: any = [];
  listCity: any = [];

  name: String;
  gender: string;
  country: any;
  city: string;
  formdata: any;

  ngOnInit(): void {
    let promise = new Promise((resolve, reject) => {
      let apiURL = `https://api.mocki.io/v1/50b6e912/countries`;
      this.http
        .get(apiURL)
        .toPromise()
        .then(res => {
          this.listCountry = res;
          resolve("Success");
        });
    });
  }

  onChangeCountry(): void {
    let promise = new Promise((resolve, reject) => {
      let apiURL = `https://api.mocki.io/v1/50b6e912/cities/${this.country}`;
      this.http
        .get(apiURL)
        .toPromise()
        .then(res => {
          this.listCity = res;
          resolve("Success");
        });
    });
  }

  onClickSubmit(data): void {
    this.name = data.name;
    this.gender = data.gender;
    this.country = data.country;
    this.city = data.city;
    console.log(data);
  }
}
