import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuotedetailsPage } from './quotedetails.page';

describe('QuotedetailsPage', () => {
  let component: QuotedetailsPage;
  let fixture: ComponentFixture<QuotedetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotedetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuotedetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
