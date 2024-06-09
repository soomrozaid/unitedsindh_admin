const config = {
    entities: [],
    discovery: { warnWhenNoEntities: false },
    type: process.env.DATABASE_DIALECT,
    dbName: process.env.DATABASE_NAME,
    clientUrl: process.env.DATABASE_URL,
};
export default config;
