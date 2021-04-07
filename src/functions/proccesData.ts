export const getIdDB = (table: string): string => {
    switch (table) {
        default:
            return 'id';
    }
};

export const getValueText = (object:{[x:string]:any}): string => {
    let query: string = '(';
    for(let key in object.getObject()) {
        query += `${key}, `;
    }
    query = query.substring(0, query.length - 2) + ') VALUES(';
    let array: any[] = object.getArray();
    for(let i: number = 1; i <= array.length; i++) {
        query += `$${i}, `;
    }
    query = query.substring(0, query.length - 2) + ')';
    return query;
};

export const getUpdateText = (table: string, object: {[x:string]:any}): string => {
    let query: string = '';
    let i: number = 1;
    for(let key in object.getObject()) {
        if(key != getIdDB(table)) {
            query += `${key} = $${i}, `;
        }
        i++;
    }
    query = query.substring(0, query.length - 2);
    query += `WHERE ${getIdDB(table)} = $1`;
    return query;
};