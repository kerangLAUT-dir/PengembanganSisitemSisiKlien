import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef,inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
})
export class PostDetail {
private http = inject(HttpClient);
private route = inject(ActivatedRoute);
private cdr = inject(ChangeDetectorRef);


    id!: number;
    details: any;

    ngOnInit(){

        this.id = Number(
            this.route.snapshot.paramMap.get('id')
        );

        console.log(this.id);

        const id = this.route.snapshot.paramMap.get('id');

        // Get API
      this.http.get<any>(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      ).subscribe({

        // Debug API not load at 1st time
        next: data => {
          console.log("Data diterima:", data);
          this.details = data;
          this.cdr.detectChanges();
        },

        error: err => {
          console.error(err);
        }

      });

    }

}
