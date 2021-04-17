import { Model, fk, attr } from "redux-orm";

class KYC extends Model { }
KYC.modelName = 'KYC';
KYC.fields = {
    id: attr(),
    name: attr(),
    fileName: attr(),
    records: fk({
        to: 'Record',
        as: 'record',
    }),
};

class Record extends Model { }
Records.modelName = 'Record';
Records.fields = {
    id: attr(),
    key: attr(),
    name: attr(),
    phone: attr(),
    dobTimestamp: attr(),
};

export default KYC;
export default Record;

