import { employee } from "./app/employee";



export const empList : employee[] =  [
    {
    "id"     : 1,
     "name"  : "maruthi",
    "permanent" : false,
    "salary" : 12000,
    "department" :{
        "id" : 3,
        "name" : "payroll"
    },
    "skills" : [
        {
            "id" : 1,
            "name" : "dancing"
        },{
            "id" : 2,
            "name" : "singing"
        }
    ]
},{
  "id"     : 2,
   "name"  : "raju",
  "permanent" : true,
  "salary" : 12800,
  "department" :{
      "id" : 1,
      "name" : "payroll"
  },
  "skills" : [
      {
          "id" : 1,
          "name" : "dancing"
      },{
          "id" : 2,
          "name" : "singing"
      }
  ]
},
{
  "id"     : 3,
   "name"  : "nirma",
  "permanent" : false,
  "salary" : 15000,
  "department" :{
      "id" : 2,
      "name" : "ece"
  },
  "skills" : [
      {
          "id" : 5,
          "name" : "laughing"
      },{
          "id" : 6,
          "name" : "coding"
      }
  ]
},{
  "id"     : 4,
   "name"  : "ksn",
  "permanent" : true,
  "salary" : 10000,
  "department" :{
      "id" : 1,
      "name" : "cse"
  },
  "skills" : [
      {
          "id" : 4,
          "name" : "travelling"
      },{
          "id" : 2,
          "name" : "singing"
      }
  ]
},{
  "id"     : 5,
   "name"  : "charan",
  "permanent" : true,
  "salary" : 13000,
  "department" :{
      "id" : 4,
      "name" : "IT"
  },
  "skills" : [
      {
          "id" : 1,
          "name" : "dancing"
      },{
          "id" : 2,
          "name" : "singing"
      }
  ]
},
{
    "id"     : 5,
     "name"  : "malathi",
    "permanent" : true,
    "salary" : 17000,
    "department" :{
        "id" : 4,
        "name" : "IT"
    },
    "skills" : [
        {
            "id" : 1,
            "name" : "dancing"
        },{
            "id" : 2,
            "name" : "singing"
        }
    ]
  }];