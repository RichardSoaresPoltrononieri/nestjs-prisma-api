// import {
//   CallHandler,
//   ExecutionContext,
//   Injectable,
//   NestInterceptor,
// } from '@nestjs/common';
// import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';

// @Injectable()
// export class DateFormatInterceptor implements NestInterceptor {
//   intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
//     return next.handle().pipe(
//       map((data) => this.formatDates(data)),
//     );
//   }

//   private formatDates(data: any): any {
//     if (!data) return data;

//     if (Array.isArray(data)) {
//       return data.map((item) => this.formatDates(item));
//     }

//     if (typeof data === 'object') {
//       const newObj: any = {};

//       for (const key in data) {
//         const value = data[key];

//         if (value instanceof Date) {
//           newObj[key] = this.formatToYYYYMMDD(value);
//         }

//         else if (typeof value === 'object') {
//           newObj[key] = this.formatDates(value);
//         }

//         else {
//           newObj[key] = value;
//         }
//       }

//       return newObj;
//     }

//     return data;
//   }

//   private formatToYYYYMMDD(date: Date): string {
//     return date.toLocaleDateString('sv-SE');
//   }
// }