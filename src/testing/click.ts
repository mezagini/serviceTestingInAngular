import { DebugElement } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import { query, queryById } from "./finders";

export function clickEvent<T>(
  fixture: ComponentFixture<T>,
  selector: string,
  withTestId = false,
  event: unknown = null
  ) {
  let element: DebugElement;
  if (withTestId) {
    element = queryById(fixture, selector);
  }
  else {
    element = query(fixture, selector);
  }
  element.triggerEventHandler('click', event);
}
