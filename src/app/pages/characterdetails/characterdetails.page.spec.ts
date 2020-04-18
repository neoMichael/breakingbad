import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CharacterdetailsPage } from './characterdetails.page';

describe('CharacterdetailsPage', () => {
  let component: CharacterdetailsPage;
  let fixture: ComponentFixture<CharacterdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
