import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase one when click add button', () => {
    // given
    component.count = 0;

    // when
    component.addByOne();

    // then
    expect(component.count).toBe(1);
  });

  it('should decrease one when click reduce button', () => {
    // given
    component.count = 0;

    // when
    component.reduceByOne();

    // then
    expect(component.count).toBe(-1);
  });

  it('should isVisible turn false when count is less than zero', () => {
    // given
    component.isMinusButtonVisible = true;
    component.count = 0;

    // when
    component.reduceByOne();

    // then
    expect(component.isMinusButtonVisible).toBe(false);
  });

  it('should isVisible turn true when count is greater than or equals to zero', () => {
    // given
    component.isMinusButtonVisible = false;
    component.count = -1;

    // when
    component.addByOne();

    // then
    expect(component.isMinusButtonVisible).toBe(true);
  });

  it('should plus button hide when count is greater than ten', () => {
    // given
    component.isPlusButtonVisible = true;
    component.count = 10;

    // when
    component.addByOne();

    // then
    expect(component.isPlusButtonVisible).toBe(false);
  });

  it('should plus button appear when count is less than or equals to ten', () => {
    // given
    component.isPlusButtonVisible = false;
    component.count = 11;

    // when
    component.reduceByOne();

    // then
    expect(component.isPlusButtonVisible).toBe(true);
  });

  it('should change number in text to green when count is less than 0', () => {
    // given
    component.count = 0;

    // when
    component.reduceByOne();

    // then
    expect(component.numberBackgroundColor).toBe('green');
  });

  it('should change number in text to red when count is greater than 10', () => {
    // given
    component.count = 10;

    // when
    component.addByOne();

    // then
    expect(component.numberBackgroundColor).toBe('red');
  });

  it('should change number in text to white when count is less than or equals to 10', () => {
    // given
    component.numberBackgroundColor = 'red';
    component.count = 11;

    // when
    component.reduceByOne();

    // then
    expect(component.numberBackgroundColor).toBe('white');
  });

  it('should change number in text to white when count is greater than 0', () => {
    // given
    component.numberBackgroundColor = 'red';
    component.count = 0;

    // when
    component.addByOne();

    // then
    expect(component.numberBackgroundColor).toBe('white');
  });

  it('should change number in text to 0 when click reset button', () => {
    // given
    component.count = 10;

    // when
    component.resetCount();

    // then
    expect(component.count).toBe(0);
    expect(component.numberBackgroundColor).toBe('white');
  });
});
