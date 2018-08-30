import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    component.hero = {
      id: 1,
      name: 'My Hero Name'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onInit', () => {
    it('should bind the heroName property', () => {
      expect(component.myHeroName).toEqual('My Hero Name');
    });
  });

  describe('onHeroClick', () => {
    it('should emit heroSelected event', () => {
      spyOn(component.heroSelected, 'emit');
      
      component.onHeroClick();
      
      expect(component.heroSelected.emit).toHaveBeenCalled();
    })
  })
});
