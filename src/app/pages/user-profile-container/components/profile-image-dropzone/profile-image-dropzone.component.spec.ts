import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileImageDropzoneComponent } from './profile-image-dropzone.component';

describe('ProfileImageDropzoneComponent', () => {
  let component: ProfileImageDropzoneComponent;
  let fixture: ComponentFixture<ProfileImageDropzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileImageDropzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileImageDropzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
