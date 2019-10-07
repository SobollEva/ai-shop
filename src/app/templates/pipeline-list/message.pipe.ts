import { Pipe, PipeTransform } from '@angular/core';

// TODO: (prokopenko) move helpers to global file
// TODO: (prokopenko) input types?
function findValues(obj, key) {
  return findValuesHelper(obj, key, []);
}

// TODO: (prokopenko) input types?
function findValuesHelper(obj, key, list) {
  if (!obj) {
    return list;
  }
  if (obj instanceof Array) {
    // TODO: (prokopenko) it's better to use Object.values
    Object.keys(obj)
      .forEach((i) => list = list.concat(findValuesHelper(obj[i], key, [])));
    return list;
  }

  if (obj[key]) {
    list.push(obj[key]);
  }

  if ((typeof obj === 'object') && (obj !== null)) {
    // TODO: (prokopenko) variable name looks like it should be Object.values(obj); Next it more convenient.
    const children = Object.keys(obj);
    // TODO: (prokopenko) useless if
    if (children.length > 0) {
      // TODO: (prokopenko) don't use plain cycles.
      //  It's better to use functional analogs. children.map() or children.reduce() or children.forEach().
      //  Reduce is the best in this case
      for (let i = 0; i < children.length; i++) {
        list = list.concat(findValuesHelper(obj[children[i]], key, []));
      }
    }
  }
  return list;
}

@Pipe({
  name: 'message'
})

export class MessagePipe implements PipeTransform {

  transform(value: string): string {
    let errorMessage;
    if (value.includes('campaigns')) {
      const errorText = findValues(JSON.parse(value).campaigns[0], 'error')[0];
      errorMessage = errorText && errorText.hasOwnProperty('error_user_msg')
        ? `${errorText.error_user_title}. ${errorText.error_user_msg}`
        : 'Ad was not created.';
    } else {
      errorMessage = value;
    }
    return errorMessage;
  }
}
