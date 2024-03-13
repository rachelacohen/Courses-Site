export class Course{
id!:number;
name!:string;
categoryId!:number;
countLessons!:number;
lacturerId!:number;
image!:string;
type!:TypeLearning;
dateStart!:Date;
syllabus:string[]=[];
}
export enum TypeLearning {
   זום = 0,
  פרונטלי = 1
}