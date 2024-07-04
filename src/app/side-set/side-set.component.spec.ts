import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSetComponent } from './side-set.component';

describe('SideSetComponent', () => {
  let component: SideSetComponent;
  let fixture: ComponentFixture<SideSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
