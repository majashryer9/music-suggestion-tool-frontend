import { Type } from '@angular/core';

// Data should be the object that is passed as an input to the component
export interface CarouselItem<T, S> {
    data: T;
    component: Type<S>;
}
