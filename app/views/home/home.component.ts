import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'home',
  template: `
    <div >
      <h1 (click)="demo()">Home</h1>
      <h3>Total users: # {{users?.length}}</h3>
    </div>
  `,
})
export class HomeViewComponent {
  users;

  constructor(private http: Http) {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .map((res) => res.json())
      .subscribe((res) => (this.users = res));
  }

  demo() {
    console.log(this.count());
    // Driver Code
    let arr = [40, 50, 30, 40, 50, 30, 30, 40, 40, 2, 2, 2, 2, 2, 2, 2, 2];
    let n = arr.length;
    console.log('mostFrequent', this.mostFrequent(arr, n));
  }

  count() {
    // console.log('this.count()')
    let string = 'athequickbrownfoxjumpsoverthelazydogg';
    return string.split('').reduce((a, letter) => {
      console.log('a', a, 'letter', letter);

      var currentCount = a[letter];
      console.log(currentCount);

      if (currentCount) {
        currentCount = currentCount + 1; // If previously counted + 1
      } else {
        currentCount = 1; // Else initialize with first occurence.
      }
      a[letter] = currentCount; //Store the new count.
      return a;
    }, {});
  }

  //Most frequent element in an array
  mostFrequent(arr, n) {
    let maxcount = 0;
    let element_having_max_freq;
    for (let i = 0; i < n; i++) {
      let count = 0;
      // console.log('arr[i]',arr[i])
      for (let j = 0; j < n; j++) {
        // console.log('arr[j]',arr[j])
        if (arr[i] == arr[j]) count++;
      }
      //  console.log(count)
      if (count > maxcount) {
        //  console.log('arr[i]',arr[i])
        maxcount = count;
        element_having_max_freq = arr[i];
      }
      // console.log(maxcount)
    }

    return element_having_max_freq;
  }
}
