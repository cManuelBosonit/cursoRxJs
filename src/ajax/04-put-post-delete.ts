import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

/* ajax
  .put(
    url,
    {
      id: 1,
      nombre: "Man",
    },
    {
      "mi-token": "ABC123",
    }
  )
  .subscribe(console.log); */

ajax({
  url: url,
  method: "PUT",
  headers: {
    "mi-token": "ABC123",
  },
  body: {
    id: 1,
    nombre: "Man",
  },
}).subscribe(console.log);
