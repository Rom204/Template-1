import dal from "./dal_mysql";

const create_some_table =`
    sql code here
`;


const mysql_create_table = () => {
    dal.execute(create_some_table);
}; 


export default mysql_create_table