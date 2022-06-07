import { auditTime, fromEvent, tap, map } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x }) => x),
    tap((valor) => console.log("tap", valor)),
    auditTime(5000)
  )
  .subscribe(console.log);
