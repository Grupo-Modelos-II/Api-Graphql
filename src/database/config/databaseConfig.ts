let databaseType: string = 'mongodb';

export const setDatabaseType = (type: string): void => {
    databaseType = type;
}

export const getDatabaseType = (): string => {
    return databaseType;
}