import { Component } from '@angular/core';
import { ChangeDetectorRef,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [RouterLink],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {
private http = inject(HttpClient);
private cdr = inject(ChangeDetectorRef);

posts: any[] = [];

  ngOnInit(): void {

    // Debug API not load at 1st time
    console.log("ngOnInit dipanggil");

    // Get API
    this.http.get<any[]>(
      'https://jsonplaceholder.typicode.com/posts'
    ).subscribe({

      // Debug API not load at 1st time
      next: data => {
        console.log("Data diterima:", data);
        this.posts = data;
        this.cdr.detectChanges();
      },

      error: err => {
        console.error(err);
      }

    });
  }

}
