import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (next) => console.log("siguiente [next]: ", next),
  error: (error) => console.warn("error [obs]: ", error),
  complete: () => console.log("completado [obs]"),
};

// const obs$ = Observable.create()

const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  subs.next("Hola");
  subs.next("Mundo");

  // Forzar un error
  // const a = undefined;
  // a.nombre = "Man";

  subs.complete();

  subs.next("Hola");
  subs.next("Mundo");
});

// obs$.subscribe(observer);

/* obs$.subscribe(
  valor => console.log("next", valor),
  error => console.warn("error", error),
  () => console.info("Completado")
); */
