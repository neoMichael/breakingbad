import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeathcountPage } from './deathcount.page';

describe('DeathcountPage', () => {
  let component: DeathcountPage;
  let fixture: ComponentFixture<DeathcountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathcountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeathcountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
