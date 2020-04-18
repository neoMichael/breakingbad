import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EpisodedetailsPage } from './episodedetails.page';

describe('EpisodedetailsPage', () => {
  let component: EpisodedetailsPage;
  let fixture: ComponentFixture<EpisodedetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodedetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EpisodedetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
