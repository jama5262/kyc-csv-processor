import { ORM } from 'redux-orm';
import KYC from "./models/KYC"
import Record from "./models/Record"

const orm = new ORM({
    stateSelector: state => state.orm,
});
orm.register(KYC, Record);

export default orm;