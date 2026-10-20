import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContatosContainer } from './contatos-container';

describe('ContatosContainer', () => {
  let component: ContatosContainer;
  let fixture: ComponentFixture<ContatosContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatosContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(ContatosContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
