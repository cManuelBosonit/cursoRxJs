import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (next) => console.log("next: ", next),
  error: (error) => console.warn("error: ", error),
  complete: () => console.log("completado"),
};

const intervalo$ = new Observable<number>((subscriber) => {
  // Crear un contador
  let contador = 0;

  const interval = setInterval(() => {
    contador++;
    subscriber.next(contador);
    console.log(contador);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log("Intérvalo destruido");
  };
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2);
subs2.add(subs3);

setTimeout(() => {
  subs1.unsubscribe();
  /* subs2.unsubscribe();
  subs3.unsubscribe(); */

  console.log("Completado timeout");
}, 3000);
