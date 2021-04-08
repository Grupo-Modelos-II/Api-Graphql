import config from '../config/databaseConfig';

export const getIdDB = (table: string): string => {
    switch (table) {
        default:
            return 'id';
    }
}

export const getValueText = (table: string, data: { [x: string]: any; }): string => {
    let query: string = '(';
    for(let key in data) {
        query += `${key}, `;
    }
    query = query.substring(0, query.length - 2) + ') VALUES(';
    let array: any[] = toArray(table, data);
    for(let i: number = 1; i <= array.length; i++) {
        switch(config) {
            case 'postgres':
                query += `$${i}, `;
                break;

            case 'mysql':
            default:
                query += `?, `;
        }
    }
    query = query.substring(0, query.length - 2) + ')';
    return query;
}

export const getUpdateText = (table: string, data: { [x: string]: any; }): string => {
    let query: string = '';
    let i: number = 1;
    for(let key in data) {
        if(key != getIdDB(table)) {
            switch(config) {
                case 'postgres':
                case 'postgresql':
                    query += `${key} = $${i}, `;
                    break;
    
                case 'mariadb':
                case 'mysql':
                default:
                    query += `${key} = ?, `;
            }
        }
        i++;
    }
    query = query.substring(0, query.length - 2);
    switch(config) {
        case 'postgres':
        case 'postgresql':
            query += `WHERE ${getIdDB(table)} = $1`;
            break;

            case 'mariadb':
            case 'mysql':
            default:
            query += `WHERE ${getIdDB(table)} = ?`;
    }
    return query;
}

export const toArray = (table: string, data: { [x: string]: any }): any[] => {
    let array: any[] = [];
    let primaryKey: string = '';
    for(let key in data) {
        if(key != getIdDB(table)) {
            array.push(data[key]);
        } else {
            primaryKey = key;
        }
    }
    array.push(data[primaryKey]);
    return array;
}