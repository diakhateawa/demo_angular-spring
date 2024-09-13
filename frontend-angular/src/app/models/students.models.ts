export interface Student{
  id : string,
  code : string,
  firstaName : string,
  lasteName : string,
  programId : string,
  photo : string
}

export interface Paiement{
  id : number,
  date : string
  amount : number,
  type : string,
  status : string,
  file : string,
  student : Student
}

export enum PaiementType{
  CASH = 0, CHECK = 1,TRANSFER = 2, DEPOSIT = 3

}

export enum PaiementStatus{
  CREATED = 0, VALIDATED = 1,REJECTED = 2,

}

