import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  searchForm: FormGroup;
  result: any = [];
  translatedDescription: string;

  constructor(private fb: FormBuilder, 
              private movie: MovieService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.searchForm = this.fb.group({
      search: ''
    })
  }

  onSubmit(): void {
    this.movie.getMovie(this.searchForm.value.search).subscribe(data => {
      this.result = data.results;
      for( let i=0; i<data.results.length; i++){
        this.movie.translateDescription(data.results[i].overview).subscribe(translatedText => {
          this.translatedDescription = translatedText.contents.translated;
        });
      }
    })
  }
}
