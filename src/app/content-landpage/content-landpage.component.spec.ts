import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLandpageComponent } from './content-landpage.component';

describe('ContentLandpageComponent', () => {
  let component: ContentLandpageComponent;
  let fixture: ComponentFixture<ContentLandpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentLandpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentLandpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
