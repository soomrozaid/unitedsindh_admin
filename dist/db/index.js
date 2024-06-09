import { MikroORM } from '@mikro-orm/core';
import { Database, Resource } from '@adminjs/mikroorm';
import AdminJS from 'adminjs';
import config from './config.js';
AdminJS.registerAdapter({ Database, Resource });
const orm = await MikroORM.init(config);
const initialize = async () => ({ orm });
export default initialize;
