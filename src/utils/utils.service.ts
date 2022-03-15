import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {

  addNewFieldInEachObjectOfArray(
    [mainArr, id]: [any[], string],
    [subArr, id2]: [any[], string],
    fieldNameMainArr: string,
    fieldNameSubArr: string 
  ) {
    return mainArr.map((player) => {
      const object  = subArr.find((item) => item[id2] === player[id]);
      return {
        ...player,
        [fieldNameMainArr]: object[fieldNameSubArr],
      };
    });
  }
}
