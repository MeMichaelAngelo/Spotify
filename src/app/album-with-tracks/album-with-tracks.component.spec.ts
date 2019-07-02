import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumWithTracksComponent } from './album-with-tracks.component';

describe('AlbumWithTracksComponent', () => {
  let component: AlbumWithTracksComponent;
  let fixture: ComponentFixture<AlbumWithTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumWithTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumWithTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
