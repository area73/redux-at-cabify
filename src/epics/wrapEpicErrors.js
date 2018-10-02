import { never } from "rxjs/observable/never";
import { catchError } from "rxjs/operators";

export default (epic) => (...args) =>
  epic(...args).pipe(
    catchError((error, source) => {
      console.error(error.toString());
      return never();
    })
  );
