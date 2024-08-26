export type User = {
    id:number;
    name: {
        firstName:string,
        lastName:string
    },
    address:{
        street:string;
        zipcode:string;
    },
    languages: {
        english: boolean;
        german: boolean;
        spanish: boolean;
    };

};