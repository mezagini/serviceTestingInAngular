import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

@Component({
  template: `
    <h5 class="title" highlight>Hay un valor</h5>
    <h5 highlight="yellow">Hay un valor</h5>
    <p highlight="blue">párrafo</p>
    <p>párrafo</p>
    `
})
class HostComponent {

}

fdescribe('HighlightDirective', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostComponent, HighlightDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have three highlight elements', () => {
    const elements = fixture.debugElement.queryAll(By.directive(HighlightDirective));
    const elementsWithOutDirective = fixture.debugElement.queryAll(By.css('*:not([highlight])'));

    expect(elements.length).toEqual(3);
    expect(elementsWithOutDirective.length).toEqual(1);
  });

  it('should the elements be match with bgColor', () => {
    const elements = fixture.debugElement.queryAll(By.directive(HighlightDirective));

    expect(elements[0].nativeElement.style.backgroundColor).toEqual('gray');
    expect(elements[1].nativeElement.style.backgroundColor).toEqual('yellow');
    expect(elements[2].nativeElement.style.backgroundColor).toEqual('blue');
  });

  it('should the h5.title be default color', () => {
    const titleDebug = fixture.debugElement.query(By.css('.title'));
    const dir = titleDebug.injector.get(HighlightDirective);

    expect(titleDebug.nativeElement.style.backgroundColor).toEqual(dir.defaultColor);
  });

});
