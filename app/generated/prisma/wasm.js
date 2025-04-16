
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  employee_name: 'employee_name',
  employee_code: 'employee_code',
  employee_work_email: 'employee_work_email',
  employee_work_password: 'employee_work_password',
  employee_private_email: 'employee_private_email',
  employee_phone_number: 'employee_phone_number',
  employee_birthday: 'employee_birthday',
  employee_bank_account: 'employee_bank_account',
  employee_citizen_identification: 'employee_citizen_identification',
  employee_license_plate: 'employee_license_plate',
  role_id: 'role_id'
};

exports.Prisma.DevlogScalarFieldEnum = {
  id: 'id',
  hours: 'hours',
  overtime: 'overtime',
  date: 'date',
  note: 'note',
  account_id: 'account_id',
  project_id: 'project_id',
  task_id: 'task_id'
};

exports.Prisma.Member_projectScalarFieldEnum = {
  id: 'id',
  account_id: 'account_id',
  project_id: 'project_id'
};

exports.Prisma.Notice_devlogScalarFieldEnum = {
  id: 'id',
  leader_id: 'leader_id',
  employee_id: 'employee_id',
  project_id: 'project_id',
  date: 'date',
  notice_count: 'notice_count'
};

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  project_name: 'project_name',
  description: 'description',
  start_date: 'start_date',
  end_date: 'end_date',
  status: 'status'
};

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  role_name: 'role_name'
};

exports.Prisma.TaskScalarFieldEnum = {
  id: 'id',
  task_name: 'task_name',
  task_name_index: 'task_name_index',
  project_id: 'project_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.accountOrderByRelevanceFieldEnum = {
  employee_name: 'employee_name',
  employee_code: 'employee_code',
  employee_work_email: 'employee_work_email',
  employee_work_password: 'employee_work_password',
  employee_private_email: 'employee_private_email',
  employee_phone_number: 'employee_phone_number',
  employee_bank_account: 'employee_bank_account',
  employee_citizen_identification: 'employee_citizen_identification',
  employee_license_plate: 'employee_license_plate'
};

exports.Prisma.devlogOrderByRelevanceFieldEnum = {
  note: 'note'
};

exports.Prisma.projectOrderByRelevanceFieldEnum = {
  project_name: 'project_name',
  description: 'description'
};

exports.Prisma.roleOrderByRelevanceFieldEnum = {
  role_name: 'role_name'
};

exports.Prisma.taskOrderByRelevanceFieldEnum = {
  task_name: 'task_name'
};


exports.Prisma.ModelName = {
  account: 'account',
  devlog: 'devlog',
  member_project: 'member_project',
  notice_devlog: 'notice_devlog',
  project: 'project',
  role: 'role',
  task: 'task'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
