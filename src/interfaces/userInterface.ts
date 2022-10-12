export interface IUser {
    dob:{
        date: string;
        age:string
};
    email: string;
    gender: string;
    name: {
        title: string
        first: string
        last: string
    };
    nat: string;
    picture: {
        large: string
        medium:string
        thumbnail:string
    }
}
