
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model account
 * 
 */
export type account = $Result.DefaultSelection<Prisma.$accountPayload>
/**
 * Model devlog
 * 
 */
export type devlog = $Result.DefaultSelection<Prisma.$devlogPayload>
/**
 * Model member_project
 * 
 */
export type member_project = $Result.DefaultSelection<Prisma.$member_projectPayload>
/**
 * Model notice_devlog
 * 
 */
export type notice_devlog = $Result.DefaultSelection<Prisma.$notice_devlogPayload>
/**
 * Model project
 * 
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>
/**
 * Model role
 * 
 */
export type role = $Result.DefaultSelection<Prisma.$rolePayload>
/**
 * Model task
 * 
 */
export type task = $Result.DefaultSelection<Prisma.$taskPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.accountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.devlog`: Exposes CRUD operations for the **devlog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devlogs
    * const devlogs = await prisma.devlog.findMany()
    * ```
    */
  get devlog(): Prisma.devlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member_project`: Exposes CRUD operations for the **member_project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Member_projects
    * const member_projects = await prisma.member_project.findMany()
    * ```
    */
  get member_project(): Prisma.member_projectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notice_devlog`: Exposes CRUD operations for the **notice_devlog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notice_devlogs
    * const notice_devlogs = await prisma.notice_devlog.findMany()
    * ```
    */
  get notice_devlog(): Prisma.notice_devlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.projectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.taskDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    account: 'account',
    devlog: 'devlog',
    member_project: 'member_project',
    notice_devlog: 'notice_devlog',
    project: 'project',
    role: 'role',
    task: 'task'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "devlog" | "member_project" | "notice_devlog" | "project" | "role" | "task"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      account: {
        payload: Prisma.$accountPayload<ExtArgs>
        fields: Prisma.accountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          findFirst: {
            args: Prisma.accountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          findMany: {
            args: Prisma.accountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>[]
          }
          create: {
            args: Prisma.accountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          createMany: {
            args: Prisma.accountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.accountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          update: {
            args: Prisma.accountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          deleteMany: {
            args: Prisma.accountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.accountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.accountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.accountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      devlog: {
        payload: Prisma.$devlogPayload<ExtArgs>
        fields: Prisma.devlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.devlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.devlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devlogPayload>
          }
          findFirst: {
            args: Prisma.devlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.devlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devlogPayload>
          }
          findMany: {
            args: Prisma.devlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devlogPayload>[]
          }
          create: {
            args: Prisma.devlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devlogPayload>
          }
          createMany: {
            args: Prisma.devlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.devlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devlogPayload>
          }
          update: {
            args: Prisma.devlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devlogPayload>
          }
          deleteMany: {
            args: Prisma.devlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.devlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.devlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devlogPayload>
          }
          aggregate: {
            args: Prisma.DevlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevlog>
          }
          groupBy: {
            args: Prisma.devlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<DevlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.devlogCountArgs<ExtArgs>
            result: $Utils.Optional<DevlogCountAggregateOutputType> | number
          }
        }
      }
      member_project: {
        payload: Prisma.$member_projectPayload<ExtArgs>
        fields: Prisma.member_projectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.member_projectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.member_projectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_projectPayload>
          }
          findFirst: {
            args: Prisma.member_projectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.member_projectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_projectPayload>
          }
          findMany: {
            args: Prisma.member_projectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_projectPayload>[]
          }
          create: {
            args: Prisma.member_projectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_projectPayload>
          }
          createMany: {
            args: Prisma.member_projectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.member_projectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_projectPayload>
          }
          update: {
            args: Prisma.member_projectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_projectPayload>
          }
          deleteMany: {
            args: Prisma.member_projectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.member_projectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.member_projectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_projectPayload>
          }
          aggregate: {
            args: Prisma.Member_projectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember_project>
          }
          groupBy: {
            args: Prisma.member_projectGroupByArgs<ExtArgs>
            result: $Utils.Optional<Member_projectGroupByOutputType>[]
          }
          count: {
            args: Prisma.member_projectCountArgs<ExtArgs>
            result: $Utils.Optional<Member_projectCountAggregateOutputType> | number
          }
        }
      }
      notice_devlog: {
        payload: Prisma.$notice_devlogPayload<ExtArgs>
        fields: Prisma.notice_devlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notice_devlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notice_devlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notice_devlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notice_devlogPayload>
          }
          findFirst: {
            args: Prisma.notice_devlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notice_devlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notice_devlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notice_devlogPayload>
          }
          findMany: {
            args: Prisma.notice_devlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notice_devlogPayload>[]
          }
          create: {
            args: Prisma.notice_devlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notice_devlogPayload>
          }
          createMany: {
            args: Prisma.notice_devlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.notice_devlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notice_devlogPayload>
          }
          update: {
            args: Prisma.notice_devlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notice_devlogPayload>
          }
          deleteMany: {
            args: Prisma.notice_devlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notice_devlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.notice_devlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notice_devlogPayload>
          }
          aggregate: {
            args: Prisma.Notice_devlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotice_devlog>
          }
          groupBy: {
            args: Prisma.notice_devlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<Notice_devlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.notice_devlogCountArgs<ExtArgs>
            result: $Utils.Optional<Notice_devlogCountAggregateOutputType> | number
          }
        }
      }
      project: {
        payload: Prisma.$projectPayload<ExtArgs>
        fields: Prisma.projectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      role: {
        payload: Prisma.$rolePayload<ExtArgs>
        fields: Prisma.roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findFirst: {
            args: Prisma.roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findMany: {
            args: Prisma.roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          create: {
            args: Prisma.roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          createMany: {
            args: Prisma.roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          update: {
            args: Prisma.roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          deleteMany: {
            args: Prisma.roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.roleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      task: {
        payload: Prisma.$taskPayload<ExtArgs>
        fields: Prisma.taskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.taskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.taskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          findFirst: {
            args: Prisma.taskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.taskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          findMany: {
            args: Prisma.taskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          create: {
            args: Prisma.taskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          createMany: {
            args: Prisma.taskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.taskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          update: {
            args: Prisma.taskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          deleteMany: {
            args: Prisma.taskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.taskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.taskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.taskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.taskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: accountOmit
    devlog?: devlogOmit
    member_project?: member_projectOmit
    notice_devlog?: notice_devlogOmit
    project?: projectOmit
    role?: roleOmit
    task?: taskOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    devlog: number
    member_project: number
    notice_devlog_notice_devlog_employee_idToaccount: number
    notice_devlog_notice_devlog_leader_idToaccount: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devlog?: boolean | AccountCountOutputTypeCountDevlogArgs
    member_project?: boolean | AccountCountOutputTypeCountMember_projectArgs
    notice_devlog_notice_devlog_employee_idToaccount?: boolean | AccountCountOutputTypeCountNotice_devlog_notice_devlog_employee_idToaccountArgs
    notice_devlog_notice_devlog_leader_idToaccount?: boolean | AccountCountOutputTypeCountNotice_devlog_notice_devlog_leader_idToaccountArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountDevlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: devlogWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountMember_projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: member_projectWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountNotice_devlog_notice_devlog_employee_idToaccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notice_devlogWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountNotice_devlog_notice_devlog_leader_idToaccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notice_devlogWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    devlog: number
    member_project: number
    notice_devlog: number
    task: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devlog?: boolean | ProjectCountOutputTypeCountDevlogArgs
    member_project?: boolean | ProjectCountOutputTypeCountMember_projectArgs
    notice_devlog?: boolean | ProjectCountOutputTypeCountNotice_devlogArgs
    task?: boolean | ProjectCountOutputTypeCountTaskArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountDevlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: devlogWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMember_projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: member_projectWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountNotice_devlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notice_devlogWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    account: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | RoleCountOutputTypeCountAccountArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    devlog: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devlog?: boolean | TaskCountOutputTypeCountDevlogArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountDevlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: devlogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    employee_name: string | null
    employee_code: string | null
    employee_work_email: string | null
    employee_work_password: string | null
    employee_private_email: string | null
    employee_phone_number: string | null
    employee_birthday: Date | null
    employee_bank_account: string | null
    employee_citizen_identification: string | null
    employee_license_plate: string | null
    role_id: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    employee_name: string | null
    employee_code: string | null
    employee_work_email: string | null
    employee_work_password: string | null
    employee_private_email: string | null
    employee_phone_number: string | null
    employee_birthday: Date | null
    employee_bank_account: string | null
    employee_citizen_identification: string | null
    employee_license_plate: string | null
    role_id: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    employee_name: number
    employee_code: number
    employee_work_email: number
    employee_work_password: number
    employee_private_email: number
    employee_phone_number: number
    employee_birthday: number
    employee_bank_account: number
    employee_citizen_identification: number
    employee_license_plate: number
    role_id: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    employee_name?: true
    employee_code?: true
    employee_work_email?: true
    employee_work_password?: true
    employee_private_email?: true
    employee_phone_number?: true
    employee_birthday?: true
    employee_bank_account?: true
    employee_citizen_identification?: true
    employee_license_plate?: true
    role_id?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    employee_name?: true
    employee_code?: true
    employee_work_email?: true
    employee_work_password?: true
    employee_private_email?: true
    employee_phone_number?: true
    employee_birthday?: true
    employee_bank_account?: true
    employee_citizen_identification?: true
    employee_license_plate?: true
    role_id?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    employee_name?: true
    employee_code?: true
    employee_work_email?: true
    employee_work_password?: true
    employee_private_email?: true
    employee_phone_number?: true
    employee_birthday?: true
    employee_bank_account?: true
    employee_citizen_identification?: true
    employee_license_plate?: true
    role_id?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which account to aggregate.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type accountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountWhereInput
    orderBy?: accountOrderByWithAggregationInput | accountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: accountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: number
    employee_name: string | null
    employee_code: string | null
    employee_work_email: string
    employee_work_password: string
    employee_private_email: string | null
    employee_phone_number: string | null
    employee_birthday: Date | null
    employee_bank_account: string | null
    employee_citizen_identification: string | null
    employee_license_plate: string | null
    role_id: number
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends accountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type accountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employee_name?: boolean
    employee_code?: boolean
    employee_work_email?: boolean
    employee_work_password?: boolean
    employee_private_email?: boolean
    employee_phone_number?: boolean
    employee_birthday?: boolean
    employee_bank_account?: boolean
    employee_citizen_identification?: boolean
    employee_license_plate?: boolean
    role_id?: boolean
    role?: boolean | roleDefaultArgs<ExtArgs>
    devlog?: boolean | account$devlogArgs<ExtArgs>
    member_project?: boolean | account$member_projectArgs<ExtArgs>
    notice_devlog_notice_devlog_employee_idToaccount?: boolean | account$notice_devlog_notice_devlog_employee_idToaccountArgs<ExtArgs>
    notice_devlog_notice_devlog_leader_idToaccount?: boolean | account$notice_devlog_notice_devlog_leader_idToaccountArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type accountSelectScalar = {
    id?: boolean
    employee_name?: boolean
    employee_code?: boolean
    employee_work_email?: boolean
    employee_work_password?: boolean
    employee_private_email?: boolean
    employee_phone_number?: boolean
    employee_birthday?: boolean
    employee_bank_account?: boolean
    employee_citizen_identification?: boolean
    employee_license_plate?: boolean
    role_id?: boolean
  }

  export type accountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employee_name" | "employee_code" | "employee_work_email" | "employee_work_password" | "employee_private_email" | "employee_phone_number" | "employee_birthday" | "employee_bank_account" | "employee_citizen_identification" | "employee_license_plate" | "role_id", ExtArgs["result"]["account"]>
  export type accountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | roleDefaultArgs<ExtArgs>
    devlog?: boolean | account$devlogArgs<ExtArgs>
    member_project?: boolean | account$member_projectArgs<ExtArgs>
    notice_devlog_notice_devlog_employee_idToaccount?: boolean | account$notice_devlog_notice_devlog_employee_idToaccountArgs<ExtArgs>
    notice_devlog_notice_devlog_leader_idToaccount?: boolean | account$notice_devlog_notice_devlog_leader_idToaccountArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $accountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "account"
    objects: {
      role: Prisma.$rolePayload<ExtArgs>
      devlog: Prisma.$devlogPayload<ExtArgs>[]
      member_project: Prisma.$member_projectPayload<ExtArgs>[]
      notice_devlog_notice_devlog_employee_idToaccount: Prisma.$notice_devlogPayload<ExtArgs>[]
      notice_devlog_notice_devlog_leader_idToaccount: Prisma.$notice_devlogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employee_name: string | null
      employee_code: string | null
      employee_work_email: string
      employee_work_password: string
      employee_private_email: string | null
      employee_phone_number: string | null
      employee_birthday: Date | null
      employee_bank_account: string | null
      employee_citizen_identification: string | null
      employee_license_plate: string | null
      role_id: number
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type accountGetPayload<S extends boolean | null | undefined | accountDefaultArgs> = $Result.GetResult<Prisma.$accountPayload, S>

  type accountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface accountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['account'], meta: { name: 'account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {accountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accountFindUniqueArgs>(args: SelectSubset<T, accountFindUniqueArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accountFindUniqueOrThrowArgs>(args: SelectSubset<T, accountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accountFindFirstArgs>(args?: SelectSubset<T, accountFindFirstArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accountFindFirstOrThrowArgs>(args?: SelectSubset<T, accountFindFirstOrThrowArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accountFindManyArgs>(args?: SelectSubset<T, accountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {accountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends accountCreateArgs>(args: SelectSubset<T, accountCreateArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {accountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accountCreateManyArgs>(args?: SelectSubset<T, accountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {accountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends accountDeleteArgs>(args: SelectSubset<T, accountDeleteArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {accountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accountUpdateArgs>(args: SelectSubset<T, accountUpdateArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {accountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accountDeleteManyArgs>(args?: SelectSubset<T, accountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accountUpdateManyArgs>(args: SelectSubset<T, accountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {accountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends accountUpsertArgs>(args: SelectSubset<T, accountUpsertArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountCountArgs>(
      args?: Subset<T, accountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends accountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountGroupByArgs['orderBy'] }
        : { orderBy?: accountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, accountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the account model
   */
  readonly fields: accountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends roleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roleDefaultArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    devlog<T extends account$devlogArgs<ExtArgs> = {}>(args?: Subset<T, account$devlogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$devlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    member_project<T extends account$member_projectArgs<ExtArgs> = {}>(args?: Subset<T, account$member_projectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$member_projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notice_devlog_notice_devlog_employee_idToaccount<T extends account$notice_devlog_notice_devlog_employee_idToaccountArgs<ExtArgs> = {}>(args?: Subset<T, account$notice_devlog_notice_devlog_employee_idToaccountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notice_devlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notice_devlog_notice_devlog_leader_idToaccount<T extends account$notice_devlog_notice_devlog_leader_idToaccountArgs<ExtArgs> = {}>(args?: Subset<T, account$notice_devlog_notice_devlog_leader_idToaccountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notice_devlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the account model
   */
  interface accountFieldRefs {
    readonly id: FieldRef<"account", 'Int'>
    readonly employee_name: FieldRef<"account", 'String'>
    readonly employee_code: FieldRef<"account", 'String'>
    readonly employee_work_email: FieldRef<"account", 'String'>
    readonly employee_work_password: FieldRef<"account", 'String'>
    readonly employee_private_email: FieldRef<"account", 'String'>
    readonly employee_phone_number: FieldRef<"account", 'String'>
    readonly employee_birthday: FieldRef<"account", 'DateTime'>
    readonly employee_bank_account: FieldRef<"account", 'String'>
    readonly employee_citizen_identification: FieldRef<"account", 'String'>
    readonly employee_license_plate: FieldRef<"account", 'String'>
    readonly role_id: FieldRef<"account", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * account findUnique
   */
  export type accountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account findUniqueOrThrow
   */
  export type accountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account findFirst
   */
  export type accountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account findFirstOrThrow
   */
  export type accountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account findMany
   */
  export type accountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account create
   */
  export type accountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The data needed to create a account.
     */
    data: XOR<accountCreateInput, accountUncheckedCreateInput>
  }

  /**
   * account createMany
   */
  export type accountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accounts.
     */
    data: accountCreateManyInput | accountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * account update
   */
  export type accountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The data needed to update a account.
     */
    data: XOR<accountUpdateInput, accountUncheckedUpdateInput>
    /**
     * Choose, which account to update.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account updateMany
   */
  export type accountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountUpdateManyMutationInput, accountUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
  }

  /**
   * account upsert
   */
  export type accountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The filter to search for the account to update in case it exists.
     */
    where: accountWhereUniqueInput
    /**
     * In case the account found by the `where` argument doesn't exist, create a new account with this data.
     */
    create: XOR<accountCreateInput, accountUncheckedCreateInput>
    /**
     * In case the account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountUpdateInput, accountUncheckedUpdateInput>
  }

  /**
   * account delete
   */
  export type accountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter which account to delete.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account deleteMany
   */
  export type accountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to delete
     */
    where?: accountWhereInput
    /**
     * Limit how many accounts to delete.
     */
    limit?: number
  }

  /**
   * account.devlog
   */
  export type account$devlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devlog
     */
    select?: devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devlog
     */
    omit?: devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devlogInclude<ExtArgs> | null
    where?: devlogWhereInput
    orderBy?: devlogOrderByWithRelationInput | devlogOrderByWithRelationInput[]
    cursor?: devlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DevlogScalarFieldEnum | DevlogScalarFieldEnum[]
  }

  /**
   * account.member_project
   */
  export type account$member_projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_project
     */
    select?: member_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_project
     */
    omit?: member_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: member_projectInclude<ExtArgs> | null
    where?: member_projectWhereInput
    orderBy?: member_projectOrderByWithRelationInput | member_projectOrderByWithRelationInput[]
    cursor?: member_projectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Member_projectScalarFieldEnum | Member_projectScalarFieldEnum[]
  }

  /**
   * account.notice_devlog_notice_devlog_employee_idToaccount
   */
  export type account$notice_devlog_notice_devlog_employee_idToaccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_devlog
     */
    select?: notice_devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_devlog
     */
    omit?: notice_devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_devlogInclude<ExtArgs> | null
    where?: notice_devlogWhereInput
    orderBy?: notice_devlogOrderByWithRelationInput | notice_devlogOrderByWithRelationInput[]
    cursor?: notice_devlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Notice_devlogScalarFieldEnum | Notice_devlogScalarFieldEnum[]
  }

  /**
   * account.notice_devlog_notice_devlog_leader_idToaccount
   */
  export type account$notice_devlog_notice_devlog_leader_idToaccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_devlog
     */
    select?: notice_devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_devlog
     */
    omit?: notice_devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_devlogInclude<ExtArgs> | null
    where?: notice_devlogWhereInput
    orderBy?: notice_devlogOrderByWithRelationInput | notice_devlogOrderByWithRelationInput[]
    cursor?: notice_devlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Notice_devlogScalarFieldEnum | Notice_devlogScalarFieldEnum[]
  }

  /**
   * account without action
   */
  export type accountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
  }


  /**
   * Model devlog
   */

  export type AggregateDevlog = {
    _count: DevlogCountAggregateOutputType | null
    _avg: DevlogAvgAggregateOutputType | null
    _sum: DevlogSumAggregateOutputType | null
    _min: DevlogMinAggregateOutputType | null
    _max: DevlogMaxAggregateOutputType | null
  }

  export type DevlogAvgAggregateOutputType = {
    id: number | null
    hours: number | null
    account_id: number | null
    project_id: number | null
    task_id: number | null
  }

  export type DevlogSumAggregateOutputType = {
    id: number | null
    hours: number | null
    account_id: number | null
    project_id: number | null
    task_id: number | null
  }

  export type DevlogMinAggregateOutputType = {
    id: number | null
    hours: number | null
    overtime: boolean | null
    date: Date | null
    note: string | null
    account_id: number | null
    project_id: number | null
    task_id: number | null
  }

  export type DevlogMaxAggregateOutputType = {
    id: number | null
    hours: number | null
    overtime: boolean | null
    date: Date | null
    note: string | null
    account_id: number | null
    project_id: number | null
    task_id: number | null
  }

  export type DevlogCountAggregateOutputType = {
    id: number
    hours: number
    overtime: number
    date: number
    note: number
    account_id: number
    project_id: number
    task_id: number
    _all: number
  }


  export type DevlogAvgAggregateInputType = {
    id?: true
    hours?: true
    account_id?: true
    project_id?: true
    task_id?: true
  }

  export type DevlogSumAggregateInputType = {
    id?: true
    hours?: true
    account_id?: true
    project_id?: true
    task_id?: true
  }

  export type DevlogMinAggregateInputType = {
    id?: true
    hours?: true
    overtime?: true
    date?: true
    note?: true
    account_id?: true
    project_id?: true
    task_id?: true
  }

  export type DevlogMaxAggregateInputType = {
    id?: true
    hours?: true
    overtime?: true
    date?: true
    note?: true
    account_id?: true
    project_id?: true
    task_id?: true
  }

  export type DevlogCountAggregateInputType = {
    id?: true
    hours?: true
    overtime?: true
    date?: true
    note?: true
    account_id?: true
    project_id?: true
    task_id?: true
    _all?: true
  }

  export type DevlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which devlog to aggregate.
     */
    where?: devlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devlogs to fetch.
     */
    orderBy?: devlogOrderByWithRelationInput | devlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: devlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned devlogs
    **/
    _count?: true | DevlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DevlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DevlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DevlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DevlogMaxAggregateInputType
  }

  export type GetDevlogAggregateType<T extends DevlogAggregateArgs> = {
        [P in keyof T & keyof AggregateDevlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevlog[P]>
      : GetScalarType<T[P], AggregateDevlog[P]>
  }




  export type devlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: devlogWhereInput
    orderBy?: devlogOrderByWithAggregationInput | devlogOrderByWithAggregationInput[]
    by: DevlogScalarFieldEnum[] | DevlogScalarFieldEnum
    having?: devlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DevlogCountAggregateInputType | true
    _avg?: DevlogAvgAggregateInputType
    _sum?: DevlogSumAggregateInputType
    _min?: DevlogMinAggregateInputType
    _max?: DevlogMaxAggregateInputType
  }

  export type DevlogGroupByOutputType = {
    id: number
    hours: number
    overtime: boolean
    date: Date
    note: string | null
    account_id: number
    project_id: number
    task_id: number
    _count: DevlogCountAggregateOutputType | null
    _avg: DevlogAvgAggregateOutputType | null
    _sum: DevlogSumAggregateOutputType | null
    _min: DevlogMinAggregateOutputType | null
    _max: DevlogMaxAggregateOutputType | null
  }

  type GetDevlogGroupByPayload<T extends devlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DevlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DevlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DevlogGroupByOutputType[P]>
            : GetScalarType<T[P], DevlogGroupByOutputType[P]>
        }
      >
    >


  export type devlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hours?: boolean
    overtime?: boolean
    date?: boolean
    note?: boolean
    account_id?: boolean
    project_id?: boolean
    task_id?: boolean
    account?: boolean | accountDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
    task?: boolean | taskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["devlog"]>



  export type devlogSelectScalar = {
    id?: boolean
    hours?: boolean
    overtime?: boolean
    date?: boolean
    note?: boolean
    account_id?: boolean
    project_id?: boolean
    task_id?: boolean
  }

  export type devlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hours" | "overtime" | "date" | "note" | "account_id" | "project_id" | "task_id", ExtArgs["result"]["devlog"]>
  export type devlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
    task?: boolean | taskDefaultArgs<ExtArgs>
  }

  export type $devlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "devlog"
    objects: {
      account: Prisma.$accountPayload<ExtArgs>
      project: Prisma.$projectPayload<ExtArgs>
      task: Prisma.$taskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hours: number
      overtime: boolean
      date: Date
      note: string | null
      account_id: number
      project_id: number
      task_id: number
    }, ExtArgs["result"]["devlog"]>
    composites: {}
  }

  type devlogGetPayload<S extends boolean | null | undefined | devlogDefaultArgs> = $Result.GetResult<Prisma.$devlogPayload, S>

  type devlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<devlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DevlogCountAggregateInputType | true
    }

  export interface devlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['devlog'], meta: { name: 'devlog' } }
    /**
     * Find zero or one Devlog that matches the filter.
     * @param {devlogFindUniqueArgs} args - Arguments to find a Devlog
     * @example
     * // Get one Devlog
     * const devlog = await prisma.devlog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends devlogFindUniqueArgs>(args: SelectSubset<T, devlogFindUniqueArgs<ExtArgs>>): Prisma__devlogClient<$Result.GetResult<Prisma.$devlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Devlog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {devlogFindUniqueOrThrowArgs} args - Arguments to find a Devlog
     * @example
     * // Get one Devlog
     * const devlog = await prisma.devlog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends devlogFindUniqueOrThrowArgs>(args: SelectSubset<T, devlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__devlogClient<$Result.GetResult<Prisma.$devlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devlog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devlogFindFirstArgs} args - Arguments to find a Devlog
     * @example
     * // Get one Devlog
     * const devlog = await prisma.devlog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends devlogFindFirstArgs>(args?: SelectSubset<T, devlogFindFirstArgs<ExtArgs>>): Prisma__devlogClient<$Result.GetResult<Prisma.$devlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devlog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devlogFindFirstOrThrowArgs} args - Arguments to find a Devlog
     * @example
     * // Get one Devlog
     * const devlog = await prisma.devlog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends devlogFindFirstOrThrowArgs>(args?: SelectSubset<T, devlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__devlogClient<$Result.GetResult<Prisma.$devlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devlogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devlogs
     * const devlogs = await prisma.devlog.findMany()
     * 
     * // Get first 10 Devlogs
     * const devlogs = await prisma.devlog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const devlogWithIdOnly = await prisma.devlog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends devlogFindManyArgs>(args?: SelectSubset<T, devlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$devlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Devlog.
     * @param {devlogCreateArgs} args - Arguments to create a Devlog.
     * @example
     * // Create one Devlog
     * const Devlog = await prisma.devlog.create({
     *   data: {
     *     // ... data to create a Devlog
     *   }
     * })
     * 
     */
    create<T extends devlogCreateArgs>(args: SelectSubset<T, devlogCreateArgs<ExtArgs>>): Prisma__devlogClient<$Result.GetResult<Prisma.$devlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devlogs.
     * @param {devlogCreateManyArgs} args - Arguments to create many Devlogs.
     * @example
     * // Create many Devlogs
     * const devlog = await prisma.devlog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends devlogCreateManyArgs>(args?: SelectSubset<T, devlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Devlog.
     * @param {devlogDeleteArgs} args - Arguments to delete one Devlog.
     * @example
     * // Delete one Devlog
     * const Devlog = await prisma.devlog.delete({
     *   where: {
     *     // ... filter to delete one Devlog
     *   }
     * })
     * 
     */
    delete<T extends devlogDeleteArgs>(args: SelectSubset<T, devlogDeleteArgs<ExtArgs>>): Prisma__devlogClient<$Result.GetResult<Prisma.$devlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Devlog.
     * @param {devlogUpdateArgs} args - Arguments to update one Devlog.
     * @example
     * // Update one Devlog
     * const devlog = await prisma.devlog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends devlogUpdateArgs>(args: SelectSubset<T, devlogUpdateArgs<ExtArgs>>): Prisma__devlogClient<$Result.GetResult<Prisma.$devlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devlogs.
     * @param {devlogDeleteManyArgs} args - Arguments to filter Devlogs to delete.
     * @example
     * // Delete a few Devlogs
     * const { count } = await prisma.devlog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends devlogDeleteManyArgs>(args?: SelectSubset<T, devlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devlogs
     * const devlog = await prisma.devlog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends devlogUpdateManyArgs>(args: SelectSubset<T, devlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Devlog.
     * @param {devlogUpsertArgs} args - Arguments to update or create a Devlog.
     * @example
     * // Update or create a Devlog
     * const devlog = await prisma.devlog.upsert({
     *   create: {
     *     // ... data to create a Devlog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Devlog we want to update
     *   }
     * })
     */
    upsert<T extends devlogUpsertArgs>(args: SelectSubset<T, devlogUpsertArgs<ExtArgs>>): Prisma__devlogClient<$Result.GetResult<Prisma.$devlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devlogCountArgs} args - Arguments to filter Devlogs to count.
     * @example
     * // Count the number of Devlogs
     * const count = await prisma.devlog.count({
     *   where: {
     *     // ... the filter for the Devlogs we want to count
     *   }
     * })
    **/
    count<T extends devlogCountArgs>(
      args?: Subset<T, devlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DevlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Devlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DevlogAggregateArgs>(args: Subset<T, DevlogAggregateArgs>): Prisma.PrismaPromise<GetDevlogAggregateType<T>>

    /**
     * Group by Devlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devlogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends devlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: devlogGroupByArgs['orderBy'] }
        : { orderBy?: devlogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, devlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the devlog model
   */
  readonly fields: devlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for devlog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__devlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends accountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountDefaultArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    task<T extends taskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, taskDefaultArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the devlog model
   */
  interface devlogFieldRefs {
    readonly id: FieldRef<"devlog", 'Int'>
    readonly hours: FieldRef<"devlog", 'Int'>
    readonly overtime: FieldRef<"devlog", 'Boolean'>
    readonly date: FieldRef<"devlog", 'DateTime'>
    readonly note: FieldRef<"devlog", 'String'>
    readonly account_id: FieldRef<"devlog", 'Int'>
    readonly project_id: FieldRef<"devlog", 'Int'>
    readonly task_id: FieldRef<"devlog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * devlog findUnique
   */
  export type devlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devlog
     */
    select?: devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devlog
     */
    omit?: devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devlogInclude<ExtArgs> | null
    /**
     * Filter, which devlog to fetch.
     */
    where: devlogWhereUniqueInput
  }

  /**
   * devlog findUniqueOrThrow
   */
  export type devlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devlog
     */
    select?: devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devlog
     */
    omit?: devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devlogInclude<ExtArgs> | null
    /**
     * Filter, which devlog to fetch.
     */
    where: devlogWhereUniqueInput
  }

  /**
   * devlog findFirst
   */
  export type devlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devlog
     */
    select?: devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devlog
     */
    omit?: devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devlogInclude<ExtArgs> | null
    /**
     * Filter, which devlog to fetch.
     */
    where?: devlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devlogs to fetch.
     */
    orderBy?: devlogOrderByWithRelationInput | devlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for devlogs.
     */
    cursor?: devlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of devlogs.
     */
    distinct?: DevlogScalarFieldEnum | DevlogScalarFieldEnum[]
  }

  /**
   * devlog findFirstOrThrow
   */
  export type devlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devlog
     */
    select?: devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devlog
     */
    omit?: devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devlogInclude<ExtArgs> | null
    /**
     * Filter, which devlog to fetch.
     */
    where?: devlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devlogs to fetch.
     */
    orderBy?: devlogOrderByWithRelationInput | devlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for devlogs.
     */
    cursor?: devlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of devlogs.
     */
    distinct?: DevlogScalarFieldEnum | DevlogScalarFieldEnum[]
  }

  /**
   * devlog findMany
   */
  export type devlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devlog
     */
    select?: devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devlog
     */
    omit?: devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devlogInclude<ExtArgs> | null
    /**
     * Filter, which devlogs to fetch.
     */
    where?: devlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devlogs to fetch.
     */
    orderBy?: devlogOrderByWithRelationInput | devlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing devlogs.
     */
    cursor?: devlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devlogs.
     */
    skip?: number
    distinct?: DevlogScalarFieldEnum | DevlogScalarFieldEnum[]
  }

  /**
   * devlog create
   */
  export type devlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devlog
     */
    select?: devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devlog
     */
    omit?: devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devlogInclude<ExtArgs> | null
    /**
     * The data needed to create a devlog.
     */
    data: XOR<devlogCreateInput, devlogUncheckedCreateInput>
  }

  /**
   * devlog createMany
   */
  export type devlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many devlogs.
     */
    data: devlogCreateManyInput | devlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * devlog update
   */
  export type devlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devlog
     */
    select?: devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devlog
     */
    omit?: devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devlogInclude<ExtArgs> | null
    /**
     * The data needed to update a devlog.
     */
    data: XOR<devlogUpdateInput, devlogUncheckedUpdateInput>
    /**
     * Choose, which devlog to update.
     */
    where: devlogWhereUniqueInput
  }

  /**
   * devlog updateMany
   */
  export type devlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update devlogs.
     */
    data: XOR<devlogUpdateManyMutationInput, devlogUncheckedUpdateManyInput>
    /**
     * Filter which devlogs to update
     */
    where?: devlogWhereInput
    /**
     * Limit how many devlogs to update.
     */
    limit?: number
  }

  /**
   * devlog upsert
   */
  export type devlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devlog
     */
    select?: devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devlog
     */
    omit?: devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devlogInclude<ExtArgs> | null
    /**
     * The filter to search for the devlog to update in case it exists.
     */
    where: devlogWhereUniqueInput
    /**
     * In case the devlog found by the `where` argument doesn't exist, create a new devlog with this data.
     */
    create: XOR<devlogCreateInput, devlogUncheckedCreateInput>
    /**
     * In case the devlog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<devlogUpdateInput, devlogUncheckedUpdateInput>
  }

  /**
   * devlog delete
   */
  export type devlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devlog
     */
    select?: devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devlog
     */
    omit?: devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devlogInclude<ExtArgs> | null
    /**
     * Filter which devlog to delete.
     */
    where: devlogWhereUniqueInput
  }

  /**
   * devlog deleteMany
   */
  export type devlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which devlogs to delete
     */
    where?: devlogWhereInput
    /**
     * Limit how many devlogs to delete.
     */
    limit?: number
  }

  /**
   * devlog without action
   */
  export type devlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devlog
     */
    select?: devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devlog
     */
    omit?: devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devlogInclude<ExtArgs> | null
  }


  /**
   * Model member_project
   */

  export type AggregateMember_project = {
    _count: Member_projectCountAggregateOutputType | null
    _avg: Member_projectAvgAggregateOutputType | null
    _sum: Member_projectSumAggregateOutputType | null
    _min: Member_projectMinAggregateOutputType | null
    _max: Member_projectMaxAggregateOutputType | null
  }

  export type Member_projectAvgAggregateOutputType = {
    id: number | null
    account_id: number | null
    project_id: number | null
  }

  export type Member_projectSumAggregateOutputType = {
    id: number | null
    account_id: number | null
    project_id: number | null
  }

  export type Member_projectMinAggregateOutputType = {
    id: number | null
    account_id: number | null
    project_id: number | null
  }

  export type Member_projectMaxAggregateOutputType = {
    id: number | null
    account_id: number | null
    project_id: number | null
  }

  export type Member_projectCountAggregateOutputType = {
    id: number
    account_id: number
    project_id: number
    _all: number
  }


  export type Member_projectAvgAggregateInputType = {
    id?: true
    account_id?: true
    project_id?: true
  }

  export type Member_projectSumAggregateInputType = {
    id?: true
    account_id?: true
    project_id?: true
  }

  export type Member_projectMinAggregateInputType = {
    id?: true
    account_id?: true
    project_id?: true
  }

  export type Member_projectMaxAggregateInputType = {
    id?: true
    account_id?: true
    project_id?: true
  }

  export type Member_projectCountAggregateInputType = {
    id?: true
    account_id?: true
    project_id?: true
    _all?: true
  }

  export type Member_projectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which member_project to aggregate.
     */
    where?: member_projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of member_projects to fetch.
     */
    orderBy?: member_projectOrderByWithRelationInput | member_projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: member_projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` member_projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` member_projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned member_projects
    **/
    _count?: true | Member_projectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Member_projectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Member_projectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Member_projectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Member_projectMaxAggregateInputType
  }

  export type GetMember_projectAggregateType<T extends Member_projectAggregateArgs> = {
        [P in keyof T & keyof AggregateMember_project]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember_project[P]>
      : GetScalarType<T[P], AggregateMember_project[P]>
  }




  export type member_projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: member_projectWhereInput
    orderBy?: member_projectOrderByWithAggregationInput | member_projectOrderByWithAggregationInput[]
    by: Member_projectScalarFieldEnum[] | Member_projectScalarFieldEnum
    having?: member_projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Member_projectCountAggregateInputType | true
    _avg?: Member_projectAvgAggregateInputType
    _sum?: Member_projectSumAggregateInputType
    _min?: Member_projectMinAggregateInputType
    _max?: Member_projectMaxAggregateInputType
  }

  export type Member_projectGroupByOutputType = {
    id: number
    account_id: number
    project_id: number
    _count: Member_projectCountAggregateOutputType | null
    _avg: Member_projectAvgAggregateOutputType | null
    _sum: Member_projectSumAggregateOutputType | null
    _min: Member_projectMinAggregateOutputType | null
    _max: Member_projectMaxAggregateOutputType | null
  }

  type GetMember_projectGroupByPayload<T extends member_projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Member_projectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Member_projectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Member_projectGroupByOutputType[P]>
            : GetScalarType<T[P], Member_projectGroupByOutputType[P]>
        }
      >
    >


  export type member_projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    project_id?: boolean
    account?: boolean | accountDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member_project"]>



  export type member_projectSelectScalar = {
    id?: boolean
    account_id?: boolean
    project_id?: boolean
  }

  export type member_projectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "account_id" | "project_id", ExtArgs["result"]["member_project"]>
  export type member_projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }

  export type $member_projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "member_project"
    objects: {
      account: Prisma.$accountPayload<ExtArgs>
      project: Prisma.$projectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      account_id: number
      project_id: number
    }, ExtArgs["result"]["member_project"]>
    composites: {}
  }

  type member_projectGetPayload<S extends boolean | null | undefined | member_projectDefaultArgs> = $Result.GetResult<Prisma.$member_projectPayload, S>

  type member_projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<member_projectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Member_projectCountAggregateInputType | true
    }

  export interface member_projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['member_project'], meta: { name: 'member_project' } }
    /**
     * Find zero or one Member_project that matches the filter.
     * @param {member_projectFindUniqueArgs} args - Arguments to find a Member_project
     * @example
     * // Get one Member_project
     * const member_project = await prisma.member_project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends member_projectFindUniqueArgs>(args: SelectSubset<T, member_projectFindUniqueArgs<ExtArgs>>): Prisma__member_projectClient<$Result.GetResult<Prisma.$member_projectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member_project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {member_projectFindUniqueOrThrowArgs} args - Arguments to find a Member_project
     * @example
     * // Get one Member_project
     * const member_project = await prisma.member_project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends member_projectFindUniqueOrThrowArgs>(args: SelectSubset<T, member_projectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__member_projectClient<$Result.GetResult<Prisma.$member_projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member_project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_projectFindFirstArgs} args - Arguments to find a Member_project
     * @example
     * // Get one Member_project
     * const member_project = await prisma.member_project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends member_projectFindFirstArgs>(args?: SelectSubset<T, member_projectFindFirstArgs<ExtArgs>>): Prisma__member_projectClient<$Result.GetResult<Prisma.$member_projectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member_project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_projectFindFirstOrThrowArgs} args - Arguments to find a Member_project
     * @example
     * // Get one Member_project
     * const member_project = await prisma.member_project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends member_projectFindFirstOrThrowArgs>(args?: SelectSubset<T, member_projectFindFirstOrThrowArgs<ExtArgs>>): Prisma__member_projectClient<$Result.GetResult<Prisma.$member_projectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Member_projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_projectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Member_projects
     * const member_projects = await prisma.member_project.findMany()
     * 
     * // Get first 10 Member_projects
     * const member_projects = await prisma.member_project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const member_projectWithIdOnly = await prisma.member_project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends member_projectFindManyArgs>(args?: SelectSubset<T, member_projectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$member_projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member_project.
     * @param {member_projectCreateArgs} args - Arguments to create a Member_project.
     * @example
     * // Create one Member_project
     * const Member_project = await prisma.member_project.create({
     *   data: {
     *     // ... data to create a Member_project
     *   }
     * })
     * 
     */
    create<T extends member_projectCreateArgs>(args: SelectSubset<T, member_projectCreateArgs<ExtArgs>>): Prisma__member_projectClient<$Result.GetResult<Prisma.$member_projectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Member_projects.
     * @param {member_projectCreateManyArgs} args - Arguments to create many Member_projects.
     * @example
     * // Create many Member_projects
     * const member_project = await prisma.member_project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends member_projectCreateManyArgs>(args?: SelectSubset<T, member_projectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member_project.
     * @param {member_projectDeleteArgs} args - Arguments to delete one Member_project.
     * @example
     * // Delete one Member_project
     * const Member_project = await prisma.member_project.delete({
     *   where: {
     *     // ... filter to delete one Member_project
     *   }
     * })
     * 
     */
    delete<T extends member_projectDeleteArgs>(args: SelectSubset<T, member_projectDeleteArgs<ExtArgs>>): Prisma__member_projectClient<$Result.GetResult<Prisma.$member_projectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member_project.
     * @param {member_projectUpdateArgs} args - Arguments to update one Member_project.
     * @example
     * // Update one Member_project
     * const member_project = await prisma.member_project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends member_projectUpdateArgs>(args: SelectSubset<T, member_projectUpdateArgs<ExtArgs>>): Prisma__member_projectClient<$Result.GetResult<Prisma.$member_projectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Member_projects.
     * @param {member_projectDeleteManyArgs} args - Arguments to filter Member_projects to delete.
     * @example
     * // Delete a few Member_projects
     * const { count } = await prisma.member_project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends member_projectDeleteManyArgs>(args?: SelectSubset<T, member_projectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Member_projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Member_projects
     * const member_project = await prisma.member_project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends member_projectUpdateManyArgs>(args: SelectSubset<T, member_projectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member_project.
     * @param {member_projectUpsertArgs} args - Arguments to update or create a Member_project.
     * @example
     * // Update or create a Member_project
     * const member_project = await prisma.member_project.upsert({
     *   create: {
     *     // ... data to create a Member_project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member_project we want to update
     *   }
     * })
     */
    upsert<T extends member_projectUpsertArgs>(args: SelectSubset<T, member_projectUpsertArgs<ExtArgs>>): Prisma__member_projectClient<$Result.GetResult<Prisma.$member_projectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Member_projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_projectCountArgs} args - Arguments to filter Member_projects to count.
     * @example
     * // Count the number of Member_projects
     * const count = await prisma.member_project.count({
     *   where: {
     *     // ... the filter for the Member_projects we want to count
     *   }
     * })
    **/
    count<T extends member_projectCountArgs>(
      args?: Subset<T, member_projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Member_projectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member_project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_projectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Member_projectAggregateArgs>(args: Subset<T, Member_projectAggregateArgs>): Prisma.PrismaPromise<GetMember_projectAggregateType<T>>

    /**
     * Group by Member_project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_projectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends member_projectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: member_projectGroupByArgs['orderBy'] }
        : { orderBy?: member_projectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, member_projectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMember_projectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the member_project model
   */
  readonly fields: member_projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for member_project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__member_projectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends accountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountDefaultArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the member_project model
   */
  interface member_projectFieldRefs {
    readonly id: FieldRef<"member_project", 'Int'>
    readonly account_id: FieldRef<"member_project", 'Int'>
    readonly project_id: FieldRef<"member_project", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * member_project findUnique
   */
  export type member_projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_project
     */
    select?: member_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_project
     */
    omit?: member_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: member_projectInclude<ExtArgs> | null
    /**
     * Filter, which member_project to fetch.
     */
    where: member_projectWhereUniqueInput
  }

  /**
   * member_project findUniqueOrThrow
   */
  export type member_projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_project
     */
    select?: member_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_project
     */
    omit?: member_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: member_projectInclude<ExtArgs> | null
    /**
     * Filter, which member_project to fetch.
     */
    where: member_projectWhereUniqueInput
  }

  /**
   * member_project findFirst
   */
  export type member_projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_project
     */
    select?: member_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_project
     */
    omit?: member_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: member_projectInclude<ExtArgs> | null
    /**
     * Filter, which member_project to fetch.
     */
    where?: member_projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of member_projects to fetch.
     */
    orderBy?: member_projectOrderByWithRelationInput | member_projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for member_projects.
     */
    cursor?: member_projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` member_projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` member_projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of member_projects.
     */
    distinct?: Member_projectScalarFieldEnum | Member_projectScalarFieldEnum[]
  }

  /**
   * member_project findFirstOrThrow
   */
  export type member_projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_project
     */
    select?: member_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_project
     */
    omit?: member_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: member_projectInclude<ExtArgs> | null
    /**
     * Filter, which member_project to fetch.
     */
    where?: member_projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of member_projects to fetch.
     */
    orderBy?: member_projectOrderByWithRelationInput | member_projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for member_projects.
     */
    cursor?: member_projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` member_projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` member_projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of member_projects.
     */
    distinct?: Member_projectScalarFieldEnum | Member_projectScalarFieldEnum[]
  }

  /**
   * member_project findMany
   */
  export type member_projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_project
     */
    select?: member_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_project
     */
    omit?: member_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: member_projectInclude<ExtArgs> | null
    /**
     * Filter, which member_projects to fetch.
     */
    where?: member_projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of member_projects to fetch.
     */
    orderBy?: member_projectOrderByWithRelationInput | member_projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing member_projects.
     */
    cursor?: member_projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` member_projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` member_projects.
     */
    skip?: number
    distinct?: Member_projectScalarFieldEnum | Member_projectScalarFieldEnum[]
  }

  /**
   * member_project create
   */
  export type member_projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_project
     */
    select?: member_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_project
     */
    omit?: member_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: member_projectInclude<ExtArgs> | null
    /**
     * The data needed to create a member_project.
     */
    data: XOR<member_projectCreateInput, member_projectUncheckedCreateInput>
  }

  /**
   * member_project createMany
   */
  export type member_projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many member_projects.
     */
    data: member_projectCreateManyInput | member_projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * member_project update
   */
  export type member_projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_project
     */
    select?: member_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_project
     */
    omit?: member_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: member_projectInclude<ExtArgs> | null
    /**
     * The data needed to update a member_project.
     */
    data: XOR<member_projectUpdateInput, member_projectUncheckedUpdateInput>
    /**
     * Choose, which member_project to update.
     */
    where: member_projectWhereUniqueInput
  }

  /**
   * member_project updateMany
   */
  export type member_projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update member_projects.
     */
    data: XOR<member_projectUpdateManyMutationInput, member_projectUncheckedUpdateManyInput>
    /**
     * Filter which member_projects to update
     */
    where?: member_projectWhereInput
    /**
     * Limit how many member_projects to update.
     */
    limit?: number
  }

  /**
   * member_project upsert
   */
  export type member_projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_project
     */
    select?: member_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_project
     */
    omit?: member_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: member_projectInclude<ExtArgs> | null
    /**
     * The filter to search for the member_project to update in case it exists.
     */
    where: member_projectWhereUniqueInput
    /**
     * In case the member_project found by the `where` argument doesn't exist, create a new member_project with this data.
     */
    create: XOR<member_projectCreateInput, member_projectUncheckedCreateInput>
    /**
     * In case the member_project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<member_projectUpdateInput, member_projectUncheckedUpdateInput>
  }

  /**
   * member_project delete
   */
  export type member_projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_project
     */
    select?: member_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_project
     */
    omit?: member_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: member_projectInclude<ExtArgs> | null
    /**
     * Filter which member_project to delete.
     */
    where: member_projectWhereUniqueInput
  }

  /**
   * member_project deleteMany
   */
  export type member_projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which member_projects to delete
     */
    where?: member_projectWhereInput
    /**
     * Limit how many member_projects to delete.
     */
    limit?: number
  }

  /**
   * member_project without action
   */
  export type member_projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_project
     */
    select?: member_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_project
     */
    omit?: member_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: member_projectInclude<ExtArgs> | null
  }


  /**
   * Model notice_devlog
   */

  export type AggregateNotice_devlog = {
    _count: Notice_devlogCountAggregateOutputType | null
    _avg: Notice_devlogAvgAggregateOutputType | null
    _sum: Notice_devlogSumAggregateOutputType | null
    _min: Notice_devlogMinAggregateOutputType | null
    _max: Notice_devlogMaxAggregateOutputType | null
  }

  export type Notice_devlogAvgAggregateOutputType = {
    id: number | null
    leader_id: number | null
    employee_id: number | null
    project_id: number | null
    notice_count: number | null
  }

  export type Notice_devlogSumAggregateOutputType = {
    id: number | null
    leader_id: number | null
    employee_id: number | null
    project_id: number | null
    notice_count: number | null
  }

  export type Notice_devlogMinAggregateOutputType = {
    id: number | null
    leader_id: number | null
    employee_id: number | null
    project_id: number | null
    date: Date | null
    notice_count: number | null
  }

  export type Notice_devlogMaxAggregateOutputType = {
    id: number | null
    leader_id: number | null
    employee_id: number | null
    project_id: number | null
    date: Date | null
    notice_count: number | null
  }

  export type Notice_devlogCountAggregateOutputType = {
    id: number
    leader_id: number
    employee_id: number
    project_id: number
    date: number
    notice_count: number
    _all: number
  }


  export type Notice_devlogAvgAggregateInputType = {
    id?: true
    leader_id?: true
    employee_id?: true
    project_id?: true
    notice_count?: true
  }

  export type Notice_devlogSumAggregateInputType = {
    id?: true
    leader_id?: true
    employee_id?: true
    project_id?: true
    notice_count?: true
  }

  export type Notice_devlogMinAggregateInputType = {
    id?: true
    leader_id?: true
    employee_id?: true
    project_id?: true
    date?: true
    notice_count?: true
  }

  export type Notice_devlogMaxAggregateInputType = {
    id?: true
    leader_id?: true
    employee_id?: true
    project_id?: true
    date?: true
    notice_count?: true
  }

  export type Notice_devlogCountAggregateInputType = {
    id?: true
    leader_id?: true
    employee_id?: true
    project_id?: true
    date?: true
    notice_count?: true
    _all?: true
  }

  export type Notice_devlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notice_devlog to aggregate.
     */
    where?: notice_devlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notice_devlogs to fetch.
     */
    orderBy?: notice_devlogOrderByWithRelationInput | notice_devlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notice_devlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notice_devlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notice_devlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notice_devlogs
    **/
    _count?: true | Notice_devlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Notice_devlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Notice_devlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Notice_devlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Notice_devlogMaxAggregateInputType
  }

  export type GetNotice_devlogAggregateType<T extends Notice_devlogAggregateArgs> = {
        [P in keyof T & keyof AggregateNotice_devlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotice_devlog[P]>
      : GetScalarType<T[P], AggregateNotice_devlog[P]>
  }




  export type notice_devlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notice_devlogWhereInput
    orderBy?: notice_devlogOrderByWithAggregationInput | notice_devlogOrderByWithAggregationInput[]
    by: Notice_devlogScalarFieldEnum[] | Notice_devlogScalarFieldEnum
    having?: notice_devlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Notice_devlogCountAggregateInputType | true
    _avg?: Notice_devlogAvgAggregateInputType
    _sum?: Notice_devlogSumAggregateInputType
    _min?: Notice_devlogMinAggregateInputType
    _max?: Notice_devlogMaxAggregateInputType
  }

  export type Notice_devlogGroupByOutputType = {
    id: number
    leader_id: number
    employee_id: number
    project_id: number
    date: Date
    notice_count: number
    _count: Notice_devlogCountAggregateOutputType | null
    _avg: Notice_devlogAvgAggregateOutputType | null
    _sum: Notice_devlogSumAggregateOutputType | null
    _min: Notice_devlogMinAggregateOutputType | null
    _max: Notice_devlogMaxAggregateOutputType | null
  }

  type GetNotice_devlogGroupByPayload<T extends notice_devlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Notice_devlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Notice_devlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Notice_devlogGroupByOutputType[P]>
            : GetScalarType<T[P], Notice_devlogGroupByOutputType[P]>
        }
      >
    >


  export type notice_devlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leader_id?: boolean
    employee_id?: boolean
    project_id?: boolean
    date?: boolean
    notice_count?: boolean
    account_notice_devlog_employee_idToaccount?: boolean | accountDefaultArgs<ExtArgs>
    account_notice_devlog_leader_idToaccount?: boolean | accountDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notice_devlog"]>



  export type notice_devlogSelectScalar = {
    id?: boolean
    leader_id?: boolean
    employee_id?: boolean
    project_id?: boolean
    date?: boolean
    notice_count?: boolean
  }

  export type notice_devlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leader_id" | "employee_id" | "project_id" | "date" | "notice_count", ExtArgs["result"]["notice_devlog"]>
  export type notice_devlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_notice_devlog_employee_idToaccount?: boolean | accountDefaultArgs<ExtArgs>
    account_notice_devlog_leader_idToaccount?: boolean | accountDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }

  export type $notice_devlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notice_devlog"
    objects: {
      account_notice_devlog_employee_idToaccount: Prisma.$accountPayload<ExtArgs>
      account_notice_devlog_leader_idToaccount: Prisma.$accountPayload<ExtArgs>
      project: Prisma.$projectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      leader_id: number
      employee_id: number
      project_id: number
      date: Date
      notice_count: number
    }, ExtArgs["result"]["notice_devlog"]>
    composites: {}
  }

  type notice_devlogGetPayload<S extends boolean | null | undefined | notice_devlogDefaultArgs> = $Result.GetResult<Prisma.$notice_devlogPayload, S>

  type notice_devlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notice_devlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Notice_devlogCountAggregateInputType | true
    }

  export interface notice_devlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notice_devlog'], meta: { name: 'notice_devlog' } }
    /**
     * Find zero or one Notice_devlog that matches the filter.
     * @param {notice_devlogFindUniqueArgs} args - Arguments to find a Notice_devlog
     * @example
     * // Get one Notice_devlog
     * const notice_devlog = await prisma.notice_devlog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notice_devlogFindUniqueArgs>(args: SelectSubset<T, notice_devlogFindUniqueArgs<ExtArgs>>): Prisma__notice_devlogClient<$Result.GetResult<Prisma.$notice_devlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notice_devlog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notice_devlogFindUniqueOrThrowArgs} args - Arguments to find a Notice_devlog
     * @example
     * // Get one Notice_devlog
     * const notice_devlog = await prisma.notice_devlog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notice_devlogFindUniqueOrThrowArgs>(args: SelectSubset<T, notice_devlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notice_devlogClient<$Result.GetResult<Prisma.$notice_devlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notice_devlog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notice_devlogFindFirstArgs} args - Arguments to find a Notice_devlog
     * @example
     * // Get one Notice_devlog
     * const notice_devlog = await prisma.notice_devlog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notice_devlogFindFirstArgs>(args?: SelectSubset<T, notice_devlogFindFirstArgs<ExtArgs>>): Prisma__notice_devlogClient<$Result.GetResult<Prisma.$notice_devlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notice_devlog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notice_devlogFindFirstOrThrowArgs} args - Arguments to find a Notice_devlog
     * @example
     * // Get one Notice_devlog
     * const notice_devlog = await prisma.notice_devlog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notice_devlogFindFirstOrThrowArgs>(args?: SelectSubset<T, notice_devlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__notice_devlogClient<$Result.GetResult<Prisma.$notice_devlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notice_devlogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notice_devlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notice_devlogs
     * const notice_devlogs = await prisma.notice_devlog.findMany()
     * 
     * // Get first 10 Notice_devlogs
     * const notice_devlogs = await prisma.notice_devlog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notice_devlogWithIdOnly = await prisma.notice_devlog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notice_devlogFindManyArgs>(args?: SelectSubset<T, notice_devlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notice_devlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notice_devlog.
     * @param {notice_devlogCreateArgs} args - Arguments to create a Notice_devlog.
     * @example
     * // Create one Notice_devlog
     * const Notice_devlog = await prisma.notice_devlog.create({
     *   data: {
     *     // ... data to create a Notice_devlog
     *   }
     * })
     * 
     */
    create<T extends notice_devlogCreateArgs>(args: SelectSubset<T, notice_devlogCreateArgs<ExtArgs>>): Prisma__notice_devlogClient<$Result.GetResult<Prisma.$notice_devlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notice_devlogs.
     * @param {notice_devlogCreateManyArgs} args - Arguments to create many Notice_devlogs.
     * @example
     * // Create many Notice_devlogs
     * const notice_devlog = await prisma.notice_devlog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notice_devlogCreateManyArgs>(args?: SelectSubset<T, notice_devlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notice_devlog.
     * @param {notice_devlogDeleteArgs} args - Arguments to delete one Notice_devlog.
     * @example
     * // Delete one Notice_devlog
     * const Notice_devlog = await prisma.notice_devlog.delete({
     *   where: {
     *     // ... filter to delete one Notice_devlog
     *   }
     * })
     * 
     */
    delete<T extends notice_devlogDeleteArgs>(args: SelectSubset<T, notice_devlogDeleteArgs<ExtArgs>>): Prisma__notice_devlogClient<$Result.GetResult<Prisma.$notice_devlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notice_devlog.
     * @param {notice_devlogUpdateArgs} args - Arguments to update one Notice_devlog.
     * @example
     * // Update one Notice_devlog
     * const notice_devlog = await prisma.notice_devlog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notice_devlogUpdateArgs>(args: SelectSubset<T, notice_devlogUpdateArgs<ExtArgs>>): Prisma__notice_devlogClient<$Result.GetResult<Prisma.$notice_devlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notice_devlogs.
     * @param {notice_devlogDeleteManyArgs} args - Arguments to filter Notice_devlogs to delete.
     * @example
     * // Delete a few Notice_devlogs
     * const { count } = await prisma.notice_devlog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notice_devlogDeleteManyArgs>(args?: SelectSubset<T, notice_devlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notice_devlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notice_devlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notice_devlogs
     * const notice_devlog = await prisma.notice_devlog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notice_devlogUpdateManyArgs>(args: SelectSubset<T, notice_devlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notice_devlog.
     * @param {notice_devlogUpsertArgs} args - Arguments to update or create a Notice_devlog.
     * @example
     * // Update or create a Notice_devlog
     * const notice_devlog = await prisma.notice_devlog.upsert({
     *   create: {
     *     // ... data to create a Notice_devlog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notice_devlog we want to update
     *   }
     * })
     */
    upsert<T extends notice_devlogUpsertArgs>(args: SelectSubset<T, notice_devlogUpsertArgs<ExtArgs>>): Prisma__notice_devlogClient<$Result.GetResult<Prisma.$notice_devlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notice_devlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notice_devlogCountArgs} args - Arguments to filter Notice_devlogs to count.
     * @example
     * // Count the number of Notice_devlogs
     * const count = await prisma.notice_devlog.count({
     *   where: {
     *     // ... the filter for the Notice_devlogs we want to count
     *   }
     * })
    **/
    count<T extends notice_devlogCountArgs>(
      args?: Subset<T, notice_devlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Notice_devlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notice_devlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Notice_devlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Notice_devlogAggregateArgs>(args: Subset<T, Notice_devlogAggregateArgs>): Prisma.PrismaPromise<GetNotice_devlogAggregateType<T>>

    /**
     * Group by Notice_devlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notice_devlogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notice_devlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notice_devlogGroupByArgs['orderBy'] }
        : { orderBy?: notice_devlogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notice_devlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotice_devlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notice_devlog model
   */
  readonly fields: notice_devlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notice_devlog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notice_devlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account_notice_devlog_employee_idToaccount<T extends accountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountDefaultArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account_notice_devlog_leader_idToaccount<T extends accountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountDefaultArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notice_devlog model
   */
  interface notice_devlogFieldRefs {
    readonly id: FieldRef<"notice_devlog", 'Int'>
    readonly leader_id: FieldRef<"notice_devlog", 'Int'>
    readonly employee_id: FieldRef<"notice_devlog", 'Int'>
    readonly project_id: FieldRef<"notice_devlog", 'Int'>
    readonly date: FieldRef<"notice_devlog", 'DateTime'>
    readonly notice_count: FieldRef<"notice_devlog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * notice_devlog findUnique
   */
  export type notice_devlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_devlog
     */
    select?: notice_devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_devlog
     */
    omit?: notice_devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_devlogInclude<ExtArgs> | null
    /**
     * Filter, which notice_devlog to fetch.
     */
    where: notice_devlogWhereUniqueInput
  }

  /**
   * notice_devlog findUniqueOrThrow
   */
  export type notice_devlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_devlog
     */
    select?: notice_devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_devlog
     */
    omit?: notice_devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_devlogInclude<ExtArgs> | null
    /**
     * Filter, which notice_devlog to fetch.
     */
    where: notice_devlogWhereUniqueInput
  }

  /**
   * notice_devlog findFirst
   */
  export type notice_devlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_devlog
     */
    select?: notice_devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_devlog
     */
    omit?: notice_devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_devlogInclude<ExtArgs> | null
    /**
     * Filter, which notice_devlog to fetch.
     */
    where?: notice_devlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notice_devlogs to fetch.
     */
    orderBy?: notice_devlogOrderByWithRelationInput | notice_devlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notice_devlogs.
     */
    cursor?: notice_devlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notice_devlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notice_devlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notice_devlogs.
     */
    distinct?: Notice_devlogScalarFieldEnum | Notice_devlogScalarFieldEnum[]
  }

  /**
   * notice_devlog findFirstOrThrow
   */
  export type notice_devlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_devlog
     */
    select?: notice_devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_devlog
     */
    omit?: notice_devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_devlogInclude<ExtArgs> | null
    /**
     * Filter, which notice_devlog to fetch.
     */
    where?: notice_devlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notice_devlogs to fetch.
     */
    orderBy?: notice_devlogOrderByWithRelationInput | notice_devlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notice_devlogs.
     */
    cursor?: notice_devlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notice_devlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notice_devlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notice_devlogs.
     */
    distinct?: Notice_devlogScalarFieldEnum | Notice_devlogScalarFieldEnum[]
  }

  /**
   * notice_devlog findMany
   */
  export type notice_devlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_devlog
     */
    select?: notice_devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_devlog
     */
    omit?: notice_devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_devlogInclude<ExtArgs> | null
    /**
     * Filter, which notice_devlogs to fetch.
     */
    where?: notice_devlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notice_devlogs to fetch.
     */
    orderBy?: notice_devlogOrderByWithRelationInput | notice_devlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notice_devlogs.
     */
    cursor?: notice_devlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notice_devlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notice_devlogs.
     */
    skip?: number
    distinct?: Notice_devlogScalarFieldEnum | Notice_devlogScalarFieldEnum[]
  }

  /**
   * notice_devlog create
   */
  export type notice_devlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_devlog
     */
    select?: notice_devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_devlog
     */
    omit?: notice_devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_devlogInclude<ExtArgs> | null
    /**
     * The data needed to create a notice_devlog.
     */
    data: XOR<notice_devlogCreateInput, notice_devlogUncheckedCreateInput>
  }

  /**
   * notice_devlog createMany
   */
  export type notice_devlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notice_devlogs.
     */
    data: notice_devlogCreateManyInput | notice_devlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notice_devlog update
   */
  export type notice_devlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_devlog
     */
    select?: notice_devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_devlog
     */
    omit?: notice_devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_devlogInclude<ExtArgs> | null
    /**
     * The data needed to update a notice_devlog.
     */
    data: XOR<notice_devlogUpdateInput, notice_devlogUncheckedUpdateInput>
    /**
     * Choose, which notice_devlog to update.
     */
    where: notice_devlogWhereUniqueInput
  }

  /**
   * notice_devlog updateMany
   */
  export type notice_devlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notice_devlogs.
     */
    data: XOR<notice_devlogUpdateManyMutationInput, notice_devlogUncheckedUpdateManyInput>
    /**
     * Filter which notice_devlogs to update
     */
    where?: notice_devlogWhereInput
    /**
     * Limit how many notice_devlogs to update.
     */
    limit?: number
  }

  /**
   * notice_devlog upsert
   */
  export type notice_devlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_devlog
     */
    select?: notice_devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_devlog
     */
    omit?: notice_devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_devlogInclude<ExtArgs> | null
    /**
     * The filter to search for the notice_devlog to update in case it exists.
     */
    where: notice_devlogWhereUniqueInput
    /**
     * In case the notice_devlog found by the `where` argument doesn't exist, create a new notice_devlog with this data.
     */
    create: XOR<notice_devlogCreateInput, notice_devlogUncheckedCreateInput>
    /**
     * In case the notice_devlog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notice_devlogUpdateInput, notice_devlogUncheckedUpdateInput>
  }

  /**
   * notice_devlog delete
   */
  export type notice_devlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_devlog
     */
    select?: notice_devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_devlog
     */
    omit?: notice_devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_devlogInclude<ExtArgs> | null
    /**
     * Filter which notice_devlog to delete.
     */
    where: notice_devlogWhereUniqueInput
  }

  /**
   * notice_devlog deleteMany
   */
  export type notice_devlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notice_devlogs to delete
     */
    where?: notice_devlogWhereInput
    /**
     * Limit how many notice_devlogs to delete.
     */
    limit?: number
  }

  /**
   * notice_devlog without action
   */
  export type notice_devlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_devlog
     */
    select?: notice_devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_devlog
     */
    omit?: notice_devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_devlogInclude<ExtArgs> | null
  }


  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    project_name: string | null
    description: string | null
    start_date: Date | null
    end_date: Date | null
    status: boolean | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    project_name: string | null
    description: string | null
    start_date: Date | null
    end_date: Date | null
    status: boolean | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    project_name: number
    description: number
    start_date: number
    end_date: number
    status: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    project_name?: true
    description?: true
    start_date?: true
    end_date?: true
    status?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    project_name?: true
    description?: true
    start_date?: true
    end_date?: true
    status?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    project_name?: true
    description?: true
    start_date?: true
    end_date?: true
    status?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    project_name: string
    description: string | null
    start_date: Date
    end_date: Date
    status: boolean
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_name?: boolean
    description?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    devlog?: boolean | project$devlogArgs<ExtArgs>
    member_project?: boolean | project$member_projectArgs<ExtArgs>
    notice_devlog?: boolean | project$notice_devlogArgs<ExtArgs>
    task?: boolean | project$taskArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>



  export type projectSelectScalar = {
    id?: boolean
    project_name?: boolean
    description?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
  }

  export type projectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "project_name" | "description" | "start_date" | "end_date" | "status", ExtArgs["result"]["project"]>
  export type projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devlog?: boolean | project$devlogArgs<ExtArgs>
    member_project?: boolean | project$member_projectArgs<ExtArgs>
    notice_devlog?: boolean | project$notice_devlogArgs<ExtArgs>
    task?: boolean | project$taskArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project"
    objects: {
      devlog: Prisma.$devlogPayload<ExtArgs>[]
      member_project: Prisma.$member_projectPayload<ExtArgs>[]
      notice_devlog: Prisma.$notice_devlogPayload<ExtArgs>[]
      task: Prisma.$taskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_name: string
      description: string | null
      start_date: Date
      end_date: Date
      status: boolean
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<Prisma.$projectPayload, S>

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project'], meta: { name: 'project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectFindUniqueArgs>(args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs>(args: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectFindFirstArgs>(args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs>(args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectFindManyArgs>(args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends projectCreateArgs>(args: SelectSubset<T, projectCreateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectCreateManyArgs>(args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends projectDeleteArgs>(args: SelectSubset<T, projectDeleteArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectUpdateArgs>(args: SelectSubset<T, projectUpdateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectDeleteManyArgs>(args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectUpdateManyArgs>(args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends projectUpsertArgs>(args: SelectSubset<T, projectUpsertArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project model
   */
  readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    devlog<T extends project$devlogArgs<ExtArgs> = {}>(args?: Subset<T, project$devlogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$devlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    member_project<T extends project$member_projectArgs<ExtArgs> = {}>(args?: Subset<T, project$member_projectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$member_projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notice_devlog<T extends project$notice_devlogArgs<ExtArgs> = {}>(args?: Subset<T, project$notice_devlogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notice_devlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    task<T extends project$taskArgs<ExtArgs> = {}>(args?: Subset<T, project$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project model
   */
  interface projectFieldRefs {
    readonly id: FieldRef<"project", 'Int'>
    readonly project_name: FieldRef<"project", 'String'>
    readonly description: FieldRef<"project", 'String'>
    readonly start_date: FieldRef<"project", 'DateTime'>
    readonly end_date: FieldRef<"project", 'DateTime'>
    readonly status: FieldRef<"project", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>
  }

  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>
  }

  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * project.devlog
   */
  export type project$devlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devlog
     */
    select?: devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devlog
     */
    omit?: devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devlogInclude<ExtArgs> | null
    where?: devlogWhereInput
    orderBy?: devlogOrderByWithRelationInput | devlogOrderByWithRelationInput[]
    cursor?: devlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DevlogScalarFieldEnum | DevlogScalarFieldEnum[]
  }

  /**
   * project.member_project
   */
  export type project$member_projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_project
     */
    select?: member_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_project
     */
    omit?: member_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: member_projectInclude<ExtArgs> | null
    where?: member_projectWhereInput
    orderBy?: member_projectOrderByWithRelationInput | member_projectOrderByWithRelationInput[]
    cursor?: member_projectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Member_projectScalarFieldEnum | Member_projectScalarFieldEnum[]
  }

  /**
   * project.notice_devlog
   */
  export type project$notice_devlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_devlog
     */
    select?: notice_devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_devlog
     */
    omit?: notice_devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_devlogInclude<ExtArgs> | null
    where?: notice_devlogWhereInput
    orderBy?: notice_devlogOrderByWithRelationInput | notice_devlogOrderByWithRelationInput[]
    cursor?: notice_devlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Notice_devlogScalarFieldEnum | Notice_devlogScalarFieldEnum[]
  }

  /**
   * project.task
   */
  export type project$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    where?: taskWhereInput
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    cursor?: taskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
  }


  /**
   * Model role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    role_name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    role_name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    role_name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    role_name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    role_name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    role_name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role to aggregate.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roleWhereInput
    orderBy?: roleOrderByWithAggregationInput | roleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    role_name: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_name?: boolean
    account?: boolean | role$accountArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type roleSelectScalar = {
    id?: boolean
    role_name?: boolean
  }

  export type roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role_name", ExtArgs["result"]["role"]>
  export type roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | role$accountArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "role"
    objects: {
      account: Prisma.$accountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role_name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type roleGetPayload<S extends boolean | null | undefined | roleDefaultArgs> = $Result.GetResult<Prisma.$rolePayload, S>

  type roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role'], meta: { name: 'role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {roleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roleFindUniqueArgs>(args: SelectSubset<T, roleFindUniqueArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roleFindUniqueOrThrowArgs>(args: SelectSubset<T, roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roleFindFirstArgs>(args?: SelectSubset<T, roleFindFirstArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roleFindFirstOrThrowArgs>(args?: SelectSubset<T, roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends roleFindManyArgs>(args?: SelectSubset<T, roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {roleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends roleCreateArgs>(args: SelectSubset<T, roleCreateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {roleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roleCreateManyArgs>(args?: SelectSubset<T, roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {roleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends roleDeleteArgs>(args: SelectSubset<T, roleDeleteArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {roleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roleUpdateArgs>(args: SelectSubset<T, roleUpdateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {roleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roleDeleteManyArgs>(args?: SelectSubset<T, roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roleUpdateManyArgs>(args: SelectSubset<T, roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {roleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends roleUpsertArgs>(args: SelectSubset<T, roleUpsertArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends roleCountArgs>(
      args?: Subset<T, roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roleGroupByArgs['orderBy'] }
        : { orderBy?: roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role model
   */
  readonly fields: roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends role$accountArgs<ExtArgs> = {}>(args?: Subset<T, role$accountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the role model
   */
  interface roleFieldRefs {
    readonly id: FieldRef<"role", 'Int'>
    readonly role_name: FieldRef<"role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * role findUnique
   */
  export type roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findUniqueOrThrow
   */
  export type roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findFirst
   */
  export type roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findFirstOrThrow
   */
  export type roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findMany
   */
  export type roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role create
   */
  export type roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to create a role.
     */
    data: XOR<roleCreateInput, roleUncheckedCreateInput>
  }

  /**
   * role createMany
   */
  export type roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role update
   */
  export type roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to update a role.
     */
    data: XOR<roleUpdateInput, roleUncheckedUpdateInput>
    /**
     * Choose, which role to update.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role updateMany
   */
  export type roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * role upsert
   */
  export type roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The filter to search for the role to update in case it exists.
     */
    where: roleWhereUniqueInput
    /**
     * In case the role found by the `where` argument doesn't exist, create a new role with this data.
     */
    create: XOR<roleCreateInput, roleUncheckedCreateInput>
    /**
     * In case the role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roleUpdateInput, roleUncheckedUpdateInput>
  }

  /**
   * role delete
   */
  export type roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter which role to delete.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role deleteMany
   */
  export type roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * role.account
   */
  export type role$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    where?: accountWhereInput
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    cursor?: accountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * role without action
   */
  export type roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
  }


  /**
   * Model task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    task_name_index: number | null
    project_id: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    task_name_index: number | null
    project_id: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    task_name: string | null
    task_name_index: number | null
    project_id: number | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    task_name: string | null
    task_name_index: number | null
    project_id: number | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    task_name: number
    task_name_index: number
    project_id: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    task_name_index?: true
    project_id?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    task_name_index?: true
    project_id?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    task_name?: true
    task_name_index?: true
    project_id?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    task_name?: true
    task_name_index?: true
    project_id?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    task_name?: true
    task_name_index?: true
    project_id?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task to aggregate.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type taskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
    orderBy?: taskOrderByWithAggregationInput | taskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: taskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    task_name: string
    task_name_index: number
    project_id: number
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends taskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type taskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_name?: boolean
    task_name_index?: boolean
    project_id?: boolean
    devlog?: boolean | task$devlogArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>



  export type taskSelectScalar = {
    id?: boolean
    task_name?: boolean
    task_name_index?: boolean
    project_id?: boolean
  }

  export type taskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "task_name" | "task_name_index" | "project_id", ExtArgs["result"]["task"]>
  export type taskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devlog?: boolean | task$devlogArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $taskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "task"
    objects: {
      devlog: Prisma.$devlogPayload<ExtArgs>[]
      project: Prisma.$projectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      task_name: string
      task_name_index: number
      project_id: number
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type taskGetPayload<S extends boolean | null | undefined | taskDefaultArgs> = $Result.GetResult<Prisma.$taskPayload, S>

  type taskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<taskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface taskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task'], meta: { name: 'task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {taskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends taskFindUniqueArgs>(args: SelectSubset<T, taskFindUniqueArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {taskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends taskFindUniqueOrThrowArgs>(args: SelectSubset<T, taskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends taskFindFirstArgs>(args?: SelectSubset<T, taskFindFirstArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends taskFindFirstOrThrowArgs>(args?: SelectSubset<T, taskFindFirstOrThrowArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends taskFindManyArgs>(args?: SelectSubset<T, taskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {taskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends taskCreateArgs>(args: SelectSubset<T, taskCreateArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {taskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends taskCreateManyArgs>(args?: SelectSubset<T, taskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {taskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends taskDeleteArgs>(args: SelectSubset<T, taskDeleteArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {taskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends taskUpdateArgs>(args: SelectSubset<T, taskUpdateArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {taskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends taskDeleteManyArgs>(args?: SelectSubset<T, taskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends taskUpdateManyArgs>(args: SelectSubset<T, taskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {taskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends taskUpsertArgs>(args: SelectSubset<T, taskUpsertArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends taskCountArgs>(
      args?: Subset<T, taskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends taskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: taskGroupByArgs['orderBy'] }
        : { orderBy?: taskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, taskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the task model
   */
  readonly fields: taskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__taskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    devlog<T extends task$devlogArgs<ExtArgs> = {}>(args?: Subset<T, task$devlogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$devlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the task model
   */
  interface taskFieldRefs {
    readonly id: FieldRef<"task", 'Int'>
    readonly task_name: FieldRef<"task", 'String'>
    readonly task_name_index: FieldRef<"task", 'Int'>
    readonly project_id: FieldRef<"task", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * task findUnique
   */
  export type taskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task findUniqueOrThrow
   */
  export type taskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task findFirst
   */
  export type taskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task findFirstOrThrow
   */
  export type taskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task findMany
   */
  export type taskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task create
   */
  export type taskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The data needed to create a task.
     */
    data: XOR<taskCreateInput, taskUncheckedCreateInput>
  }

  /**
   * task createMany
   */
  export type taskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: taskCreateManyInput | taskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * task update
   */
  export type taskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The data needed to update a task.
     */
    data: XOR<taskUpdateInput, taskUncheckedUpdateInput>
    /**
     * Choose, which task to update.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task updateMany
   */
  export type taskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
  }

  /**
   * task upsert
   */
  export type taskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The filter to search for the task to update in case it exists.
     */
    where: taskWhereUniqueInput
    /**
     * In case the task found by the `where` argument doesn't exist, create a new task with this data.
     */
    create: XOR<taskCreateInput, taskUncheckedCreateInput>
    /**
     * In case the task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<taskUpdateInput, taskUncheckedUpdateInput>
  }

  /**
   * task delete
   */
  export type taskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter which task to delete.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task deleteMany
   */
  export type taskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to delete.
     */
    limit?: number
  }

  /**
   * task.devlog
   */
  export type task$devlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devlog
     */
    select?: devlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devlog
     */
    omit?: devlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: devlogInclude<ExtArgs> | null
    where?: devlogWhereInput
    orderBy?: devlogOrderByWithRelationInput | devlogOrderByWithRelationInput[]
    cursor?: devlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DevlogScalarFieldEnum | DevlogScalarFieldEnum[]
  }

  /**
   * task without action
   */
  export type taskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
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

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const DevlogScalarFieldEnum: {
    id: 'id',
    hours: 'hours',
    overtime: 'overtime',
    date: 'date',
    note: 'note',
    account_id: 'account_id',
    project_id: 'project_id',
    task_id: 'task_id'
  };

  export type DevlogScalarFieldEnum = (typeof DevlogScalarFieldEnum)[keyof typeof DevlogScalarFieldEnum]


  export const Member_projectScalarFieldEnum: {
    id: 'id',
    account_id: 'account_id',
    project_id: 'project_id'
  };

  export type Member_projectScalarFieldEnum = (typeof Member_projectScalarFieldEnum)[keyof typeof Member_projectScalarFieldEnum]


  export const Notice_devlogScalarFieldEnum: {
    id: 'id',
    leader_id: 'leader_id',
    employee_id: 'employee_id',
    project_id: 'project_id',
    date: 'date',
    notice_count: 'notice_count'
  };

  export type Notice_devlogScalarFieldEnum = (typeof Notice_devlogScalarFieldEnum)[keyof typeof Notice_devlogScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    project_name: 'project_name',
    description: 'description',
    start_date: 'start_date',
    end_date: 'end_date',
    status: 'status'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    role_name: 'role_name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    task_name: 'task_name',
    task_name_index: 'task_name_index',
    project_id: 'project_id'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const accountOrderByRelevanceFieldEnum: {
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

  export type accountOrderByRelevanceFieldEnum = (typeof accountOrderByRelevanceFieldEnum)[keyof typeof accountOrderByRelevanceFieldEnum]


  export const devlogOrderByRelevanceFieldEnum: {
    note: 'note'
  };

  export type devlogOrderByRelevanceFieldEnum = (typeof devlogOrderByRelevanceFieldEnum)[keyof typeof devlogOrderByRelevanceFieldEnum]


  export const projectOrderByRelevanceFieldEnum: {
    project_name: 'project_name',
    description: 'description'
  };

  export type projectOrderByRelevanceFieldEnum = (typeof projectOrderByRelevanceFieldEnum)[keyof typeof projectOrderByRelevanceFieldEnum]


  export const roleOrderByRelevanceFieldEnum: {
    role_name: 'role_name'
  };

  export type roleOrderByRelevanceFieldEnum = (typeof roleOrderByRelevanceFieldEnum)[keyof typeof roleOrderByRelevanceFieldEnum]


  export const taskOrderByRelevanceFieldEnum: {
    task_name: 'task_name'
  };

  export type taskOrderByRelevanceFieldEnum = (typeof taskOrderByRelevanceFieldEnum)[keyof typeof taskOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type accountWhereInput = {
    AND?: accountWhereInput | accountWhereInput[]
    OR?: accountWhereInput[]
    NOT?: accountWhereInput | accountWhereInput[]
    id?: IntFilter<"account"> | number
    employee_name?: StringNullableFilter<"account"> | string | null
    employee_code?: StringNullableFilter<"account"> | string | null
    employee_work_email?: StringFilter<"account"> | string
    employee_work_password?: StringFilter<"account"> | string
    employee_private_email?: StringNullableFilter<"account"> | string | null
    employee_phone_number?: StringNullableFilter<"account"> | string | null
    employee_birthday?: DateTimeNullableFilter<"account"> | Date | string | null
    employee_bank_account?: StringNullableFilter<"account"> | string | null
    employee_citizen_identification?: StringNullableFilter<"account"> | string | null
    employee_license_plate?: StringNullableFilter<"account"> | string | null
    role_id?: IntFilter<"account"> | number
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
    devlog?: DevlogListRelationFilter
    member_project?: Member_projectListRelationFilter
    notice_devlog_notice_devlog_employee_idToaccount?: Notice_devlogListRelationFilter
    notice_devlog_notice_devlog_leader_idToaccount?: Notice_devlogListRelationFilter
  }

  export type accountOrderByWithRelationInput = {
    id?: SortOrder
    employee_name?: SortOrderInput | SortOrder
    employee_code?: SortOrderInput | SortOrder
    employee_work_email?: SortOrder
    employee_work_password?: SortOrder
    employee_private_email?: SortOrderInput | SortOrder
    employee_phone_number?: SortOrderInput | SortOrder
    employee_birthday?: SortOrderInput | SortOrder
    employee_bank_account?: SortOrderInput | SortOrder
    employee_citizen_identification?: SortOrderInput | SortOrder
    employee_license_plate?: SortOrderInput | SortOrder
    role_id?: SortOrder
    role?: roleOrderByWithRelationInput
    devlog?: devlogOrderByRelationAggregateInput
    member_project?: member_projectOrderByRelationAggregateInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogOrderByRelationAggregateInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogOrderByRelationAggregateInput
    _relevance?: accountOrderByRelevanceInput
  }

  export type accountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    employee_code?: string
    AND?: accountWhereInput | accountWhereInput[]
    OR?: accountWhereInput[]
    NOT?: accountWhereInput | accountWhereInput[]
    employee_name?: StringNullableFilter<"account"> | string | null
    employee_work_email?: StringFilter<"account"> | string
    employee_work_password?: StringFilter<"account"> | string
    employee_private_email?: StringNullableFilter<"account"> | string | null
    employee_phone_number?: StringNullableFilter<"account"> | string | null
    employee_birthday?: DateTimeNullableFilter<"account"> | Date | string | null
    employee_bank_account?: StringNullableFilter<"account"> | string | null
    employee_citizen_identification?: StringNullableFilter<"account"> | string | null
    employee_license_plate?: StringNullableFilter<"account"> | string | null
    role_id?: IntFilter<"account"> | number
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
    devlog?: DevlogListRelationFilter
    member_project?: Member_projectListRelationFilter
    notice_devlog_notice_devlog_employee_idToaccount?: Notice_devlogListRelationFilter
    notice_devlog_notice_devlog_leader_idToaccount?: Notice_devlogListRelationFilter
  }, "id" | "employee_code">

  export type accountOrderByWithAggregationInput = {
    id?: SortOrder
    employee_name?: SortOrderInput | SortOrder
    employee_code?: SortOrderInput | SortOrder
    employee_work_email?: SortOrder
    employee_work_password?: SortOrder
    employee_private_email?: SortOrderInput | SortOrder
    employee_phone_number?: SortOrderInput | SortOrder
    employee_birthday?: SortOrderInput | SortOrder
    employee_bank_account?: SortOrderInput | SortOrder
    employee_citizen_identification?: SortOrderInput | SortOrder
    employee_license_plate?: SortOrderInput | SortOrder
    role_id?: SortOrder
    _count?: accountCountOrderByAggregateInput
    _avg?: accountAvgOrderByAggregateInput
    _max?: accountMaxOrderByAggregateInput
    _min?: accountMinOrderByAggregateInput
    _sum?: accountSumOrderByAggregateInput
  }

  export type accountScalarWhereWithAggregatesInput = {
    AND?: accountScalarWhereWithAggregatesInput | accountScalarWhereWithAggregatesInput[]
    OR?: accountScalarWhereWithAggregatesInput[]
    NOT?: accountScalarWhereWithAggregatesInput | accountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"account"> | number
    employee_name?: StringNullableWithAggregatesFilter<"account"> | string | null
    employee_code?: StringNullableWithAggregatesFilter<"account"> | string | null
    employee_work_email?: StringWithAggregatesFilter<"account"> | string
    employee_work_password?: StringWithAggregatesFilter<"account"> | string
    employee_private_email?: StringNullableWithAggregatesFilter<"account"> | string | null
    employee_phone_number?: StringNullableWithAggregatesFilter<"account"> | string | null
    employee_birthday?: DateTimeNullableWithAggregatesFilter<"account"> | Date | string | null
    employee_bank_account?: StringNullableWithAggregatesFilter<"account"> | string | null
    employee_citizen_identification?: StringNullableWithAggregatesFilter<"account"> | string | null
    employee_license_plate?: StringNullableWithAggregatesFilter<"account"> | string | null
    role_id?: IntWithAggregatesFilter<"account"> | number
  }

  export type devlogWhereInput = {
    AND?: devlogWhereInput | devlogWhereInput[]
    OR?: devlogWhereInput[]
    NOT?: devlogWhereInput | devlogWhereInput[]
    id?: IntFilter<"devlog"> | number
    hours?: IntFilter<"devlog"> | number
    overtime?: BoolFilter<"devlog"> | boolean
    date?: DateTimeFilter<"devlog"> | Date | string
    note?: StringNullableFilter<"devlog"> | string | null
    account_id?: IntFilter<"devlog"> | number
    project_id?: IntFilter<"devlog"> | number
    task_id?: IntFilter<"devlog"> | number
    account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
    task?: XOR<TaskScalarRelationFilter, taskWhereInput>
  }

  export type devlogOrderByWithRelationInput = {
    id?: SortOrder
    hours?: SortOrder
    overtime?: SortOrder
    date?: SortOrder
    note?: SortOrderInput | SortOrder
    account_id?: SortOrder
    project_id?: SortOrder
    task_id?: SortOrder
    account?: accountOrderByWithRelationInput
    project?: projectOrderByWithRelationInput
    task?: taskOrderByWithRelationInput
    _relevance?: devlogOrderByRelevanceInput
  }

  export type devlogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: devlogWhereInput | devlogWhereInput[]
    OR?: devlogWhereInput[]
    NOT?: devlogWhereInput | devlogWhereInput[]
    hours?: IntFilter<"devlog"> | number
    overtime?: BoolFilter<"devlog"> | boolean
    date?: DateTimeFilter<"devlog"> | Date | string
    note?: StringNullableFilter<"devlog"> | string | null
    account_id?: IntFilter<"devlog"> | number
    project_id?: IntFilter<"devlog"> | number
    task_id?: IntFilter<"devlog"> | number
    account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
    task?: XOR<TaskScalarRelationFilter, taskWhereInput>
  }, "id">

  export type devlogOrderByWithAggregationInput = {
    id?: SortOrder
    hours?: SortOrder
    overtime?: SortOrder
    date?: SortOrder
    note?: SortOrderInput | SortOrder
    account_id?: SortOrder
    project_id?: SortOrder
    task_id?: SortOrder
    _count?: devlogCountOrderByAggregateInput
    _avg?: devlogAvgOrderByAggregateInput
    _max?: devlogMaxOrderByAggregateInput
    _min?: devlogMinOrderByAggregateInput
    _sum?: devlogSumOrderByAggregateInput
  }

  export type devlogScalarWhereWithAggregatesInput = {
    AND?: devlogScalarWhereWithAggregatesInput | devlogScalarWhereWithAggregatesInput[]
    OR?: devlogScalarWhereWithAggregatesInput[]
    NOT?: devlogScalarWhereWithAggregatesInput | devlogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"devlog"> | number
    hours?: IntWithAggregatesFilter<"devlog"> | number
    overtime?: BoolWithAggregatesFilter<"devlog"> | boolean
    date?: DateTimeWithAggregatesFilter<"devlog"> | Date | string
    note?: StringNullableWithAggregatesFilter<"devlog"> | string | null
    account_id?: IntWithAggregatesFilter<"devlog"> | number
    project_id?: IntWithAggregatesFilter<"devlog"> | number
    task_id?: IntWithAggregatesFilter<"devlog"> | number
  }

  export type member_projectWhereInput = {
    AND?: member_projectWhereInput | member_projectWhereInput[]
    OR?: member_projectWhereInput[]
    NOT?: member_projectWhereInput | member_projectWhereInput[]
    id?: IntFilter<"member_project"> | number
    account_id?: IntFilter<"member_project"> | number
    project_id?: IntFilter<"member_project"> | number
    account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }

  export type member_projectOrderByWithRelationInput = {
    id?: SortOrder
    account_id?: SortOrder
    project_id?: SortOrder
    account?: accountOrderByWithRelationInput
    project?: projectOrderByWithRelationInput
  }

  export type member_projectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: member_projectWhereInput | member_projectWhereInput[]
    OR?: member_projectWhereInput[]
    NOT?: member_projectWhereInput | member_projectWhereInput[]
    account_id?: IntFilter<"member_project"> | number
    project_id?: IntFilter<"member_project"> | number
    account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }, "id">

  export type member_projectOrderByWithAggregationInput = {
    id?: SortOrder
    account_id?: SortOrder
    project_id?: SortOrder
    _count?: member_projectCountOrderByAggregateInput
    _avg?: member_projectAvgOrderByAggregateInput
    _max?: member_projectMaxOrderByAggregateInput
    _min?: member_projectMinOrderByAggregateInput
    _sum?: member_projectSumOrderByAggregateInput
  }

  export type member_projectScalarWhereWithAggregatesInput = {
    AND?: member_projectScalarWhereWithAggregatesInput | member_projectScalarWhereWithAggregatesInput[]
    OR?: member_projectScalarWhereWithAggregatesInput[]
    NOT?: member_projectScalarWhereWithAggregatesInput | member_projectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"member_project"> | number
    account_id?: IntWithAggregatesFilter<"member_project"> | number
    project_id?: IntWithAggregatesFilter<"member_project"> | number
  }

  export type notice_devlogWhereInput = {
    AND?: notice_devlogWhereInput | notice_devlogWhereInput[]
    OR?: notice_devlogWhereInput[]
    NOT?: notice_devlogWhereInput | notice_devlogWhereInput[]
    id?: IntFilter<"notice_devlog"> | number
    leader_id?: IntFilter<"notice_devlog"> | number
    employee_id?: IntFilter<"notice_devlog"> | number
    project_id?: IntFilter<"notice_devlog"> | number
    date?: DateTimeFilter<"notice_devlog"> | Date | string
    notice_count?: IntFilter<"notice_devlog"> | number
    account_notice_devlog_employee_idToaccount?: XOR<AccountScalarRelationFilter, accountWhereInput>
    account_notice_devlog_leader_idToaccount?: XOR<AccountScalarRelationFilter, accountWhereInput>
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }

  export type notice_devlogOrderByWithRelationInput = {
    id?: SortOrder
    leader_id?: SortOrder
    employee_id?: SortOrder
    project_id?: SortOrder
    date?: SortOrder
    notice_count?: SortOrder
    account_notice_devlog_employee_idToaccount?: accountOrderByWithRelationInput
    account_notice_devlog_leader_idToaccount?: accountOrderByWithRelationInput
    project?: projectOrderByWithRelationInput
  }

  export type notice_devlogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notice_devlogWhereInput | notice_devlogWhereInput[]
    OR?: notice_devlogWhereInput[]
    NOT?: notice_devlogWhereInput | notice_devlogWhereInput[]
    leader_id?: IntFilter<"notice_devlog"> | number
    employee_id?: IntFilter<"notice_devlog"> | number
    project_id?: IntFilter<"notice_devlog"> | number
    date?: DateTimeFilter<"notice_devlog"> | Date | string
    notice_count?: IntFilter<"notice_devlog"> | number
    account_notice_devlog_employee_idToaccount?: XOR<AccountScalarRelationFilter, accountWhereInput>
    account_notice_devlog_leader_idToaccount?: XOR<AccountScalarRelationFilter, accountWhereInput>
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }, "id">

  export type notice_devlogOrderByWithAggregationInput = {
    id?: SortOrder
    leader_id?: SortOrder
    employee_id?: SortOrder
    project_id?: SortOrder
    date?: SortOrder
    notice_count?: SortOrder
    _count?: notice_devlogCountOrderByAggregateInput
    _avg?: notice_devlogAvgOrderByAggregateInput
    _max?: notice_devlogMaxOrderByAggregateInput
    _min?: notice_devlogMinOrderByAggregateInput
    _sum?: notice_devlogSumOrderByAggregateInput
  }

  export type notice_devlogScalarWhereWithAggregatesInput = {
    AND?: notice_devlogScalarWhereWithAggregatesInput | notice_devlogScalarWhereWithAggregatesInput[]
    OR?: notice_devlogScalarWhereWithAggregatesInput[]
    NOT?: notice_devlogScalarWhereWithAggregatesInput | notice_devlogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notice_devlog"> | number
    leader_id?: IntWithAggregatesFilter<"notice_devlog"> | number
    employee_id?: IntWithAggregatesFilter<"notice_devlog"> | number
    project_id?: IntWithAggregatesFilter<"notice_devlog"> | number
    date?: DateTimeWithAggregatesFilter<"notice_devlog"> | Date | string
    notice_count?: IntWithAggregatesFilter<"notice_devlog"> | number
  }

  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    id?: IntFilter<"project"> | number
    project_name?: StringFilter<"project"> | string
    description?: StringNullableFilter<"project"> | string | null
    start_date?: DateTimeFilter<"project"> | Date | string
    end_date?: DateTimeFilter<"project"> | Date | string
    status?: BoolFilter<"project"> | boolean
    devlog?: DevlogListRelationFilter
    member_project?: Member_projectListRelationFilter
    notice_devlog?: Notice_devlogListRelationFilter
    task?: TaskListRelationFilter
  }

  export type projectOrderByWithRelationInput = {
    id?: SortOrder
    project_name?: SortOrder
    description?: SortOrderInput | SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    devlog?: devlogOrderByRelationAggregateInput
    member_project?: member_projectOrderByRelationAggregateInput
    notice_devlog?: notice_devlogOrderByRelationAggregateInput
    task?: taskOrderByRelationAggregateInput
    _relevance?: projectOrderByRelevanceInput
  }

  export type projectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    project_name?: StringFilter<"project"> | string
    description?: StringNullableFilter<"project"> | string | null
    start_date?: DateTimeFilter<"project"> | Date | string
    end_date?: DateTimeFilter<"project"> | Date | string
    status?: BoolFilter<"project"> | boolean
    devlog?: DevlogListRelationFilter
    member_project?: Member_projectListRelationFilter
    notice_devlog?: Notice_devlogListRelationFilter
    task?: TaskListRelationFilter
  }, "id">

  export type projectOrderByWithAggregationInput = {
    id?: SortOrder
    project_name?: SortOrder
    description?: SortOrderInput | SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    _count?: projectCountOrderByAggregateInput
    _avg?: projectAvgOrderByAggregateInput
    _max?: projectMaxOrderByAggregateInput
    _min?: projectMinOrderByAggregateInput
    _sum?: projectSumOrderByAggregateInput
  }

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    OR?: projectScalarWhereWithAggregatesInput[]
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"project"> | number
    project_name?: StringWithAggregatesFilter<"project"> | string
    description?: StringNullableWithAggregatesFilter<"project"> | string | null
    start_date?: DateTimeWithAggregatesFilter<"project"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"project"> | Date | string
    status?: BoolWithAggregatesFilter<"project"> | boolean
  }

  export type roleWhereInput = {
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    id?: IntFilter<"role"> | number
    role_name?: StringFilter<"role"> | string
    account?: AccountListRelationFilter
  }

  export type roleOrderByWithRelationInput = {
    id?: SortOrder
    role_name?: SortOrder
    account?: accountOrderByRelationAggregateInput
    _relevance?: roleOrderByRelevanceInput
  }

  export type roleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    role_name?: StringFilter<"role"> | string
    account?: AccountListRelationFilter
  }, "id">

  export type roleOrderByWithAggregationInput = {
    id?: SortOrder
    role_name?: SortOrder
    _count?: roleCountOrderByAggregateInput
    _avg?: roleAvgOrderByAggregateInput
    _max?: roleMaxOrderByAggregateInput
    _min?: roleMinOrderByAggregateInput
    _sum?: roleSumOrderByAggregateInput
  }

  export type roleScalarWhereWithAggregatesInput = {
    AND?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    OR?: roleScalarWhereWithAggregatesInput[]
    NOT?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"role"> | number
    role_name?: StringWithAggregatesFilter<"role"> | string
  }

  export type taskWhereInput = {
    AND?: taskWhereInput | taskWhereInput[]
    OR?: taskWhereInput[]
    NOT?: taskWhereInput | taskWhereInput[]
    id?: IntFilter<"task"> | number
    task_name?: StringFilter<"task"> | string
    task_name_index?: IntFilter<"task"> | number
    project_id?: IntFilter<"task"> | number
    devlog?: DevlogListRelationFilter
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }

  export type taskOrderByWithRelationInput = {
    id?: SortOrder
    task_name?: SortOrder
    task_name_index?: SortOrder
    project_id?: SortOrder
    devlog?: devlogOrderByRelationAggregateInput
    project?: projectOrderByWithRelationInput
    _relevance?: taskOrderByRelevanceInput
  }

  export type taskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: taskWhereInput | taskWhereInput[]
    OR?: taskWhereInput[]
    NOT?: taskWhereInput | taskWhereInput[]
    task_name?: StringFilter<"task"> | string
    task_name_index?: IntFilter<"task"> | number
    project_id?: IntFilter<"task"> | number
    devlog?: DevlogListRelationFilter
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }, "id">

  export type taskOrderByWithAggregationInput = {
    id?: SortOrder
    task_name?: SortOrder
    task_name_index?: SortOrder
    project_id?: SortOrder
    _count?: taskCountOrderByAggregateInput
    _avg?: taskAvgOrderByAggregateInput
    _max?: taskMaxOrderByAggregateInput
    _min?: taskMinOrderByAggregateInput
    _sum?: taskSumOrderByAggregateInput
  }

  export type taskScalarWhereWithAggregatesInput = {
    AND?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[]
    OR?: taskScalarWhereWithAggregatesInput[]
    NOT?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"task"> | number
    task_name?: StringWithAggregatesFilter<"task"> | string
    task_name_index?: IntWithAggregatesFilter<"task"> | number
    project_id?: IntWithAggregatesFilter<"task"> | number
  }

  export type accountCreateInput = {
    employee_name?: string | null
    employee_code?: string | null
    employee_work_email: string
    employee_work_password: string
    employee_private_email?: string | null
    employee_phone_number?: string | null
    employee_birthday?: Date | string | null
    employee_bank_account?: string | null
    employee_citizen_identification?: string | null
    employee_license_plate?: string | null
    role: roleCreateNestedOneWithoutAccountInput
    devlog?: devlogCreateNestedManyWithoutAccountInput
    member_project?: member_projectCreateNestedManyWithoutAccountInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogCreateNestedManyWithoutAccount_notice_devlog_employee_idToaccountInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogCreateNestedManyWithoutAccount_notice_devlog_leader_idToaccountInput
  }

  export type accountUncheckedCreateInput = {
    id?: number
    employee_name?: string | null
    employee_code?: string | null
    employee_work_email: string
    employee_work_password: string
    employee_private_email?: string | null
    employee_phone_number?: string | null
    employee_birthday?: Date | string | null
    employee_bank_account?: string | null
    employee_citizen_identification?: string | null
    employee_license_plate?: string | null
    role_id: number
    devlog?: devlogUncheckedCreateNestedManyWithoutAccountInput
    member_project?: member_projectUncheckedCreateNestedManyWithoutAccountInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogUncheckedCreateNestedManyWithoutAccount_notice_devlog_employee_idToaccountInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogUncheckedCreateNestedManyWithoutAccount_notice_devlog_leader_idToaccountInput
  }

  export type accountUpdateInput = {
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    employee_work_email?: StringFieldUpdateOperationsInput | string
    employee_work_password?: StringFieldUpdateOperationsInput | string
    employee_private_email?: NullableStringFieldUpdateOperationsInput | string | null
    employee_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    employee_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee_bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    employee_citizen_identification?: NullableStringFieldUpdateOperationsInput | string | null
    employee_license_plate?: NullableStringFieldUpdateOperationsInput | string | null
    role?: roleUpdateOneRequiredWithoutAccountNestedInput
    devlog?: devlogUpdateManyWithoutAccountNestedInput
    member_project?: member_projectUpdateManyWithoutAccountNestedInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogUpdateManyWithoutAccount_notice_devlog_employee_idToaccountNestedInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogUpdateManyWithoutAccount_notice_devlog_leader_idToaccountNestedInput
  }

  export type accountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    employee_work_email?: StringFieldUpdateOperationsInput | string
    employee_work_password?: StringFieldUpdateOperationsInput | string
    employee_private_email?: NullableStringFieldUpdateOperationsInput | string | null
    employee_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    employee_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee_bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    employee_citizen_identification?: NullableStringFieldUpdateOperationsInput | string | null
    employee_license_plate?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    devlog?: devlogUncheckedUpdateManyWithoutAccountNestedInput
    member_project?: member_projectUncheckedUpdateManyWithoutAccountNestedInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogUncheckedUpdateManyWithoutAccount_notice_devlog_employee_idToaccountNestedInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogUncheckedUpdateManyWithoutAccount_notice_devlog_leader_idToaccountNestedInput
  }

  export type accountCreateManyInput = {
    id?: number
    employee_name?: string | null
    employee_code?: string | null
    employee_work_email: string
    employee_work_password: string
    employee_private_email?: string | null
    employee_phone_number?: string | null
    employee_birthday?: Date | string | null
    employee_bank_account?: string | null
    employee_citizen_identification?: string | null
    employee_license_plate?: string | null
    role_id: number
  }

  export type accountUpdateManyMutationInput = {
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    employee_work_email?: StringFieldUpdateOperationsInput | string
    employee_work_password?: StringFieldUpdateOperationsInput | string
    employee_private_email?: NullableStringFieldUpdateOperationsInput | string | null
    employee_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    employee_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee_bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    employee_citizen_identification?: NullableStringFieldUpdateOperationsInput | string | null
    employee_license_plate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    employee_work_email?: StringFieldUpdateOperationsInput | string
    employee_work_password?: StringFieldUpdateOperationsInput | string
    employee_private_email?: NullableStringFieldUpdateOperationsInput | string | null
    employee_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    employee_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee_bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    employee_citizen_identification?: NullableStringFieldUpdateOperationsInput | string | null
    employee_license_plate?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type devlogCreateInput = {
    hours: number
    overtime?: boolean
    date: Date | string
    note?: string | null
    account: accountCreateNestedOneWithoutDevlogInput
    project: projectCreateNestedOneWithoutDevlogInput
    task: taskCreateNestedOneWithoutDevlogInput
  }

  export type devlogUncheckedCreateInput = {
    id?: number
    hours: number
    overtime?: boolean
    date: Date | string
    note?: string | null
    account_id: number
    project_id: number
    task_id: number
  }

  export type devlogUpdateInput = {
    hours?: IntFieldUpdateOperationsInput | number
    overtime?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    account?: accountUpdateOneRequiredWithoutDevlogNestedInput
    project?: projectUpdateOneRequiredWithoutDevlogNestedInput
    task?: taskUpdateOneRequiredWithoutDevlogNestedInput
  }

  export type devlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    overtime?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    account_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
  }

  export type devlogCreateManyInput = {
    id?: number
    hours: number
    overtime?: boolean
    date: Date | string
    note?: string | null
    account_id: number
    project_id: number
    task_id: number
  }

  export type devlogUpdateManyMutationInput = {
    hours?: IntFieldUpdateOperationsInput | number
    overtime?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type devlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    overtime?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    account_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
  }

  export type member_projectCreateInput = {
    account: accountCreateNestedOneWithoutMember_projectInput
    project: projectCreateNestedOneWithoutMember_projectInput
  }

  export type member_projectUncheckedCreateInput = {
    id?: number
    account_id: number
    project_id: number
  }

  export type member_projectUpdateInput = {
    account?: accountUpdateOneRequiredWithoutMember_projectNestedInput
    project?: projectUpdateOneRequiredWithoutMember_projectNestedInput
  }

  export type member_projectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
  }

  export type member_projectCreateManyInput = {
    id?: number
    account_id: number
    project_id: number
  }

  export type member_projectUpdateManyMutationInput = {

  }

  export type member_projectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
  }

  export type notice_devlogCreateInput = {
    date?: Date | string
    notice_count: number
    account_notice_devlog_employee_idToaccount: accountCreateNestedOneWithoutNotice_devlog_notice_devlog_employee_idToaccountInput
    account_notice_devlog_leader_idToaccount: accountCreateNestedOneWithoutNotice_devlog_notice_devlog_leader_idToaccountInput
    project: projectCreateNestedOneWithoutNotice_devlogInput
  }

  export type notice_devlogUncheckedCreateInput = {
    id?: number
    leader_id: number
    employee_id: number
    project_id: number
    date?: Date | string
    notice_count: number
  }

  export type notice_devlogUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notice_count?: IntFieldUpdateOperationsInput | number
    account_notice_devlog_employee_idToaccount?: accountUpdateOneRequiredWithoutNotice_devlog_notice_devlog_employee_idToaccountNestedInput
    account_notice_devlog_leader_idToaccount?: accountUpdateOneRequiredWithoutNotice_devlog_notice_devlog_leader_idToaccountNestedInput
    project?: projectUpdateOneRequiredWithoutNotice_devlogNestedInput
  }

  export type notice_devlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    leader_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notice_count?: IntFieldUpdateOperationsInput | number
  }

  export type notice_devlogCreateManyInput = {
    id?: number
    leader_id: number
    employee_id: number
    project_id: number
    date?: Date | string
    notice_count: number
  }

  export type notice_devlogUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notice_count?: IntFieldUpdateOperationsInput | number
  }

  export type notice_devlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    leader_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notice_count?: IntFieldUpdateOperationsInput | number
  }

  export type projectCreateInput = {
    project_name: string
    description?: string | null
    start_date: Date | string
    end_date: Date | string
    status?: boolean
    devlog?: devlogCreateNestedManyWithoutProjectInput
    member_project?: member_projectCreateNestedManyWithoutProjectInput
    notice_devlog?: notice_devlogCreateNestedManyWithoutProjectInput
    task?: taskCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateInput = {
    id?: number
    project_name: string
    description?: string | null
    start_date: Date | string
    end_date: Date | string
    status?: boolean
    devlog?: devlogUncheckedCreateNestedManyWithoutProjectInput
    member_project?: member_projectUncheckedCreateNestedManyWithoutProjectInput
    notice_devlog?: notice_devlogUncheckedCreateNestedManyWithoutProjectInput
    task?: taskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectUpdateInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    devlog?: devlogUpdateManyWithoutProjectNestedInput
    member_project?: member_projectUpdateManyWithoutProjectNestedInput
    notice_devlog?: notice_devlogUpdateManyWithoutProjectNestedInput
    task?: taskUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    devlog?: devlogUncheckedUpdateManyWithoutProjectNestedInput
    member_project?: member_projectUncheckedUpdateManyWithoutProjectNestedInput
    notice_devlog?: notice_devlogUncheckedUpdateManyWithoutProjectNestedInput
    task?: taskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectCreateManyInput = {
    id?: number
    project_name: string
    description?: string | null
    start_date: Date | string
    end_date: Date | string
    status?: boolean
  }

  export type projectUpdateManyMutationInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type projectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type roleCreateInput = {
    role_name: string
    account?: accountCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateInput = {
    id?: number
    role_name: string
    account?: accountUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleUpdateInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    account?: accountUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    account?: accountUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type roleCreateManyInput = {
    id?: number
    role_name: string
  }

  export type roleUpdateManyMutationInput = {
    role_name?: StringFieldUpdateOperationsInput | string
  }

  export type roleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
  }

  export type taskCreateInput = {
    task_name: string
    task_name_index: number
    devlog?: devlogCreateNestedManyWithoutTaskInput
    project: projectCreateNestedOneWithoutTaskInput
  }

  export type taskUncheckedCreateInput = {
    id?: number
    task_name: string
    task_name_index: number
    project_id: number
    devlog?: devlogUncheckedCreateNestedManyWithoutTaskInput
  }

  export type taskUpdateInput = {
    task_name?: StringFieldUpdateOperationsInput | string
    task_name_index?: IntFieldUpdateOperationsInput | number
    devlog?: devlogUpdateManyWithoutTaskNestedInput
    project?: projectUpdateOneRequiredWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_name?: StringFieldUpdateOperationsInput | string
    task_name_index?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    devlog?: devlogUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type taskCreateManyInput = {
    id?: number
    task_name: string
    task_name_index: number
    project_id: number
  }

  export type taskUpdateManyMutationInput = {
    task_name?: StringFieldUpdateOperationsInput | string
    task_name_index?: IntFieldUpdateOperationsInput | number
  }

  export type taskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_name?: StringFieldUpdateOperationsInput | string
    task_name_index?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RoleScalarRelationFilter = {
    is?: roleWhereInput
    isNot?: roleWhereInput
  }

  export type DevlogListRelationFilter = {
    every?: devlogWhereInput
    some?: devlogWhereInput
    none?: devlogWhereInput
  }

  export type Member_projectListRelationFilter = {
    every?: member_projectWhereInput
    some?: member_projectWhereInput
    none?: member_projectWhereInput
  }

  export type Notice_devlogListRelationFilter = {
    every?: notice_devlogWhereInput
    some?: notice_devlogWhereInput
    none?: notice_devlogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type devlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type member_projectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notice_devlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type accountOrderByRelevanceInput = {
    fields: accountOrderByRelevanceFieldEnum | accountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type accountCountOrderByAggregateInput = {
    id?: SortOrder
    employee_name?: SortOrder
    employee_code?: SortOrder
    employee_work_email?: SortOrder
    employee_work_password?: SortOrder
    employee_private_email?: SortOrder
    employee_phone_number?: SortOrder
    employee_birthday?: SortOrder
    employee_bank_account?: SortOrder
    employee_citizen_identification?: SortOrder
    employee_license_plate?: SortOrder
    role_id?: SortOrder
  }

  export type accountAvgOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type accountMaxOrderByAggregateInput = {
    id?: SortOrder
    employee_name?: SortOrder
    employee_code?: SortOrder
    employee_work_email?: SortOrder
    employee_work_password?: SortOrder
    employee_private_email?: SortOrder
    employee_phone_number?: SortOrder
    employee_birthday?: SortOrder
    employee_bank_account?: SortOrder
    employee_citizen_identification?: SortOrder
    employee_license_plate?: SortOrder
    role_id?: SortOrder
  }

  export type accountMinOrderByAggregateInput = {
    id?: SortOrder
    employee_name?: SortOrder
    employee_code?: SortOrder
    employee_work_email?: SortOrder
    employee_work_password?: SortOrder
    employee_private_email?: SortOrder
    employee_phone_number?: SortOrder
    employee_birthday?: SortOrder
    employee_bank_account?: SortOrder
    employee_citizen_identification?: SortOrder
    employee_license_plate?: SortOrder
    role_id?: SortOrder
  }

  export type accountSumOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountScalarRelationFilter = {
    is?: accountWhereInput
    isNot?: accountWhereInput
  }

  export type ProjectScalarRelationFilter = {
    is?: projectWhereInput
    isNot?: projectWhereInput
  }

  export type TaskScalarRelationFilter = {
    is?: taskWhereInput
    isNot?: taskWhereInput
  }

  export type devlogOrderByRelevanceInput = {
    fields: devlogOrderByRelevanceFieldEnum | devlogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type devlogCountOrderByAggregateInput = {
    id?: SortOrder
    hours?: SortOrder
    overtime?: SortOrder
    date?: SortOrder
    note?: SortOrder
    account_id?: SortOrder
    project_id?: SortOrder
    task_id?: SortOrder
  }

  export type devlogAvgOrderByAggregateInput = {
    id?: SortOrder
    hours?: SortOrder
    account_id?: SortOrder
    project_id?: SortOrder
    task_id?: SortOrder
  }

  export type devlogMaxOrderByAggregateInput = {
    id?: SortOrder
    hours?: SortOrder
    overtime?: SortOrder
    date?: SortOrder
    note?: SortOrder
    account_id?: SortOrder
    project_id?: SortOrder
    task_id?: SortOrder
  }

  export type devlogMinOrderByAggregateInput = {
    id?: SortOrder
    hours?: SortOrder
    overtime?: SortOrder
    date?: SortOrder
    note?: SortOrder
    account_id?: SortOrder
    project_id?: SortOrder
    task_id?: SortOrder
  }

  export type devlogSumOrderByAggregateInput = {
    id?: SortOrder
    hours?: SortOrder
    account_id?: SortOrder
    project_id?: SortOrder
    task_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type member_projectCountOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    project_id?: SortOrder
  }

  export type member_projectAvgOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    project_id?: SortOrder
  }

  export type member_projectMaxOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    project_id?: SortOrder
  }

  export type member_projectMinOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    project_id?: SortOrder
  }

  export type member_projectSumOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    project_id?: SortOrder
  }

  export type notice_devlogCountOrderByAggregateInput = {
    id?: SortOrder
    leader_id?: SortOrder
    employee_id?: SortOrder
    project_id?: SortOrder
    date?: SortOrder
    notice_count?: SortOrder
  }

  export type notice_devlogAvgOrderByAggregateInput = {
    id?: SortOrder
    leader_id?: SortOrder
    employee_id?: SortOrder
    project_id?: SortOrder
    notice_count?: SortOrder
  }

  export type notice_devlogMaxOrderByAggregateInput = {
    id?: SortOrder
    leader_id?: SortOrder
    employee_id?: SortOrder
    project_id?: SortOrder
    date?: SortOrder
    notice_count?: SortOrder
  }

  export type notice_devlogMinOrderByAggregateInput = {
    id?: SortOrder
    leader_id?: SortOrder
    employee_id?: SortOrder
    project_id?: SortOrder
    date?: SortOrder
    notice_count?: SortOrder
  }

  export type notice_devlogSumOrderByAggregateInput = {
    id?: SortOrder
    leader_id?: SortOrder
    employee_id?: SortOrder
    project_id?: SortOrder
    notice_count?: SortOrder
  }

  export type TaskListRelationFilter = {
    every?: taskWhereInput
    some?: taskWhereInput
    none?: taskWhereInput
  }

  export type taskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectOrderByRelevanceInput = {
    fields: projectOrderByRelevanceFieldEnum | projectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type projectCountOrderByAggregateInput = {
    id?: SortOrder
    project_name?: SortOrder
    description?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
  }

  export type projectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type projectMaxOrderByAggregateInput = {
    id?: SortOrder
    project_name?: SortOrder
    description?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
  }

  export type projectMinOrderByAggregateInput = {
    id?: SortOrder
    project_name?: SortOrder
    description?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
  }

  export type projectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccountListRelationFilter = {
    every?: accountWhereInput
    some?: accountWhereInput
    none?: accountWhereInput
  }

  export type accountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type roleOrderByRelevanceInput = {
    fields: roleOrderByRelevanceFieldEnum | roleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type roleCountOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
  }

  export type roleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type roleMaxOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
  }

  export type roleMinOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
  }

  export type roleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type taskOrderByRelevanceInput = {
    fields: taskOrderByRelevanceFieldEnum | taskOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type taskCountOrderByAggregateInput = {
    id?: SortOrder
    task_name?: SortOrder
    task_name_index?: SortOrder
    project_id?: SortOrder
  }

  export type taskAvgOrderByAggregateInput = {
    id?: SortOrder
    task_name_index?: SortOrder
    project_id?: SortOrder
  }

  export type taskMaxOrderByAggregateInput = {
    id?: SortOrder
    task_name?: SortOrder
    task_name_index?: SortOrder
    project_id?: SortOrder
  }

  export type taskMinOrderByAggregateInput = {
    id?: SortOrder
    task_name?: SortOrder
    task_name_index?: SortOrder
    project_id?: SortOrder
  }

  export type taskSumOrderByAggregateInput = {
    id?: SortOrder
    task_name_index?: SortOrder
    project_id?: SortOrder
  }

  export type roleCreateNestedOneWithoutAccountInput = {
    create?: XOR<roleCreateWithoutAccountInput, roleUncheckedCreateWithoutAccountInput>
    connectOrCreate?: roleCreateOrConnectWithoutAccountInput
    connect?: roleWhereUniqueInput
  }

  export type devlogCreateNestedManyWithoutAccountInput = {
    create?: XOR<devlogCreateWithoutAccountInput, devlogUncheckedCreateWithoutAccountInput> | devlogCreateWithoutAccountInput[] | devlogUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: devlogCreateOrConnectWithoutAccountInput | devlogCreateOrConnectWithoutAccountInput[]
    createMany?: devlogCreateManyAccountInputEnvelope
    connect?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
  }

  export type member_projectCreateNestedManyWithoutAccountInput = {
    create?: XOR<member_projectCreateWithoutAccountInput, member_projectUncheckedCreateWithoutAccountInput> | member_projectCreateWithoutAccountInput[] | member_projectUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: member_projectCreateOrConnectWithoutAccountInput | member_projectCreateOrConnectWithoutAccountInput[]
    createMany?: member_projectCreateManyAccountInputEnvelope
    connect?: member_projectWhereUniqueInput | member_projectWhereUniqueInput[]
  }

  export type notice_devlogCreateNestedManyWithoutAccount_notice_devlog_employee_idToaccountInput = {
    create?: XOR<notice_devlogCreateWithoutAccount_notice_devlog_employee_idToaccountInput, notice_devlogUncheckedCreateWithoutAccount_notice_devlog_employee_idToaccountInput> | notice_devlogCreateWithoutAccount_notice_devlog_employee_idToaccountInput[] | notice_devlogUncheckedCreateWithoutAccount_notice_devlog_employee_idToaccountInput[]
    connectOrCreate?: notice_devlogCreateOrConnectWithoutAccount_notice_devlog_employee_idToaccountInput | notice_devlogCreateOrConnectWithoutAccount_notice_devlog_employee_idToaccountInput[]
    createMany?: notice_devlogCreateManyAccount_notice_devlog_employee_idToaccountInputEnvelope
    connect?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
  }

  export type notice_devlogCreateNestedManyWithoutAccount_notice_devlog_leader_idToaccountInput = {
    create?: XOR<notice_devlogCreateWithoutAccount_notice_devlog_leader_idToaccountInput, notice_devlogUncheckedCreateWithoutAccount_notice_devlog_leader_idToaccountInput> | notice_devlogCreateWithoutAccount_notice_devlog_leader_idToaccountInput[] | notice_devlogUncheckedCreateWithoutAccount_notice_devlog_leader_idToaccountInput[]
    connectOrCreate?: notice_devlogCreateOrConnectWithoutAccount_notice_devlog_leader_idToaccountInput | notice_devlogCreateOrConnectWithoutAccount_notice_devlog_leader_idToaccountInput[]
    createMany?: notice_devlogCreateManyAccount_notice_devlog_leader_idToaccountInputEnvelope
    connect?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
  }

  export type devlogUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<devlogCreateWithoutAccountInput, devlogUncheckedCreateWithoutAccountInput> | devlogCreateWithoutAccountInput[] | devlogUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: devlogCreateOrConnectWithoutAccountInput | devlogCreateOrConnectWithoutAccountInput[]
    createMany?: devlogCreateManyAccountInputEnvelope
    connect?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
  }

  export type member_projectUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<member_projectCreateWithoutAccountInput, member_projectUncheckedCreateWithoutAccountInput> | member_projectCreateWithoutAccountInput[] | member_projectUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: member_projectCreateOrConnectWithoutAccountInput | member_projectCreateOrConnectWithoutAccountInput[]
    createMany?: member_projectCreateManyAccountInputEnvelope
    connect?: member_projectWhereUniqueInput | member_projectWhereUniqueInput[]
  }

  export type notice_devlogUncheckedCreateNestedManyWithoutAccount_notice_devlog_employee_idToaccountInput = {
    create?: XOR<notice_devlogCreateWithoutAccount_notice_devlog_employee_idToaccountInput, notice_devlogUncheckedCreateWithoutAccount_notice_devlog_employee_idToaccountInput> | notice_devlogCreateWithoutAccount_notice_devlog_employee_idToaccountInput[] | notice_devlogUncheckedCreateWithoutAccount_notice_devlog_employee_idToaccountInput[]
    connectOrCreate?: notice_devlogCreateOrConnectWithoutAccount_notice_devlog_employee_idToaccountInput | notice_devlogCreateOrConnectWithoutAccount_notice_devlog_employee_idToaccountInput[]
    createMany?: notice_devlogCreateManyAccount_notice_devlog_employee_idToaccountInputEnvelope
    connect?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
  }

  export type notice_devlogUncheckedCreateNestedManyWithoutAccount_notice_devlog_leader_idToaccountInput = {
    create?: XOR<notice_devlogCreateWithoutAccount_notice_devlog_leader_idToaccountInput, notice_devlogUncheckedCreateWithoutAccount_notice_devlog_leader_idToaccountInput> | notice_devlogCreateWithoutAccount_notice_devlog_leader_idToaccountInput[] | notice_devlogUncheckedCreateWithoutAccount_notice_devlog_leader_idToaccountInput[]
    connectOrCreate?: notice_devlogCreateOrConnectWithoutAccount_notice_devlog_leader_idToaccountInput | notice_devlogCreateOrConnectWithoutAccount_notice_devlog_leader_idToaccountInput[]
    createMany?: notice_devlogCreateManyAccount_notice_devlog_leader_idToaccountInputEnvelope
    connect?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type roleUpdateOneRequiredWithoutAccountNestedInput = {
    create?: XOR<roleCreateWithoutAccountInput, roleUncheckedCreateWithoutAccountInput>
    connectOrCreate?: roleCreateOrConnectWithoutAccountInput
    upsert?: roleUpsertWithoutAccountInput
    connect?: roleWhereUniqueInput
    update?: XOR<XOR<roleUpdateToOneWithWhereWithoutAccountInput, roleUpdateWithoutAccountInput>, roleUncheckedUpdateWithoutAccountInput>
  }

  export type devlogUpdateManyWithoutAccountNestedInput = {
    create?: XOR<devlogCreateWithoutAccountInput, devlogUncheckedCreateWithoutAccountInput> | devlogCreateWithoutAccountInput[] | devlogUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: devlogCreateOrConnectWithoutAccountInput | devlogCreateOrConnectWithoutAccountInput[]
    upsert?: devlogUpsertWithWhereUniqueWithoutAccountInput | devlogUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: devlogCreateManyAccountInputEnvelope
    set?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    disconnect?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    delete?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    connect?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    update?: devlogUpdateWithWhereUniqueWithoutAccountInput | devlogUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: devlogUpdateManyWithWhereWithoutAccountInput | devlogUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: devlogScalarWhereInput | devlogScalarWhereInput[]
  }

  export type member_projectUpdateManyWithoutAccountNestedInput = {
    create?: XOR<member_projectCreateWithoutAccountInput, member_projectUncheckedCreateWithoutAccountInput> | member_projectCreateWithoutAccountInput[] | member_projectUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: member_projectCreateOrConnectWithoutAccountInput | member_projectCreateOrConnectWithoutAccountInput[]
    upsert?: member_projectUpsertWithWhereUniqueWithoutAccountInput | member_projectUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: member_projectCreateManyAccountInputEnvelope
    set?: member_projectWhereUniqueInput | member_projectWhereUniqueInput[]
    disconnect?: member_projectWhereUniqueInput | member_projectWhereUniqueInput[]
    delete?: member_projectWhereUniqueInput | member_projectWhereUniqueInput[]
    connect?: member_projectWhereUniqueInput | member_projectWhereUniqueInput[]
    update?: member_projectUpdateWithWhereUniqueWithoutAccountInput | member_projectUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: member_projectUpdateManyWithWhereWithoutAccountInput | member_projectUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: member_projectScalarWhereInput | member_projectScalarWhereInput[]
  }

  export type notice_devlogUpdateManyWithoutAccount_notice_devlog_employee_idToaccountNestedInput = {
    create?: XOR<notice_devlogCreateWithoutAccount_notice_devlog_employee_idToaccountInput, notice_devlogUncheckedCreateWithoutAccount_notice_devlog_employee_idToaccountInput> | notice_devlogCreateWithoutAccount_notice_devlog_employee_idToaccountInput[] | notice_devlogUncheckedCreateWithoutAccount_notice_devlog_employee_idToaccountInput[]
    connectOrCreate?: notice_devlogCreateOrConnectWithoutAccount_notice_devlog_employee_idToaccountInput | notice_devlogCreateOrConnectWithoutAccount_notice_devlog_employee_idToaccountInput[]
    upsert?: notice_devlogUpsertWithWhereUniqueWithoutAccount_notice_devlog_employee_idToaccountInput | notice_devlogUpsertWithWhereUniqueWithoutAccount_notice_devlog_employee_idToaccountInput[]
    createMany?: notice_devlogCreateManyAccount_notice_devlog_employee_idToaccountInputEnvelope
    set?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    disconnect?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    delete?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    connect?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    update?: notice_devlogUpdateWithWhereUniqueWithoutAccount_notice_devlog_employee_idToaccountInput | notice_devlogUpdateWithWhereUniqueWithoutAccount_notice_devlog_employee_idToaccountInput[]
    updateMany?: notice_devlogUpdateManyWithWhereWithoutAccount_notice_devlog_employee_idToaccountInput | notice_devlogUpdateManyWithWhereWithoutAccount_notice_devlog_employee_idToaccountInput[]
    deleteMany?: notice_devlogScalarWhereInput | notice_devlogScalarWhereInput[]
  }

  export type notice_devlogUpdateManyWithoutAccount_notice_devlog_leader_idToaccountNestedInput = {
    create?: XOR<notice_devlogCreateWithoutAccount_notice_devlog_leader_idToaccountInput, notice_devlogUncheckedCreateWithoutAccount_notice_devlog_leader_idToaccountInput> | notice_devlogCreateWithoutAccount_notice_devlog_leader_idToaccountInput[] | notice_devlogUncheckedCreateWithoutAccount_notice_devlog_leader_idToaccountInput[]
    connectOrCreate?: notice_devlogCreateOrConnectWithoutAccount_notice_devlog_leader_idToaccountInput | notice_devlogCreateOrConnectWithoutAccount_notice_devlog_leader_idToaccountInput[]
    upsert?: notice_devlogUpsertWithWhereUniqueWithoutAccount_notice_devlog_leader_idToaccountInput | notice_devlogUpsertWithWhereUniqueWithoutAccount_notice_devlog_leader_idToaccountInput[]
    createMany?: notice_devlogCreateManyAccount_notice_devlog_leader_idToaccountInputEnvelope
    set?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    disconnect?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    delete?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    connect?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    update?: notice_devlogUpdateWithWhereUniqueWithoutAccount_notice_devlog_leader_idToaccountInput | notice_devlogUpdateWithWhereUniqueWithoutAccount_notice_devlog_leader_idToaccountInput[]
    updateMany?: notice_devlogUpdateManyWithWhereWithoutAccount_notice_devlog_leader_idToaccountInput | notice_devlogUpdateManyWithWhereWithoutAccount_notice_devlog_leader_idToaccountInput[]
    deleteMany?: notice_devlogScalarWhereInput | notice_devlogScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type devlogUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<devlogCreateWithoutAccountInput, devlogUncheckedCreateWithoutAccountInput> | devlogCreateWithoutAccountInput[] | devlogUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: devlogCreateOrConnectWithoutAccountInput | devlogCreateOrConnectWithoutAccountInput[]
    upsert?: devlogUpsertWithWhereUniqueWithoutAccountInput | devlogUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: devlogCreateManyAccountInputEnvelope
    set?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    disconnect?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    delete?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    connect?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    update?: devlogUpdateWithWhereUniqueWithoutAccountInput | devlogUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: devlogUpdateManyWithWhereWithoutAccountInput | devlogUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: devlogScalarWhereInput | devlogScalarWhereInput[]
  }

  export type member_projectUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<member_projectCreateWithoutAccountInput, member_projectUncheckedCreateWithoutAccountInput> | member_projectCreateWithoutAccountInput[] | member_projectUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: member_projectCreateOrConnectWithoutAccountInput | member_projectCreateOrConnectWithoutAccountInput[]
    upsert?: member_projectUpsertWithWhereUniqueWithoutAccountInput | member_projectUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: member_projectCreateManyAccountInputEnvelope
    set?: member_projectWhereUniqueInput | member_projectWhereUniqueInput[]
    disconnect?: member_projectWhereUniqueInput | member_projectWhereUniqueInput[]
    delete?: member_projectWhereUniqueInput | member_projectWhereUniqueInput[]
    connect?: member_projectWhereUniqueInput | member_projectWhereUniqueInput[]
    update?: member_projectUpdateWithWhereUniqueWithoutAccountInput | member_projectUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: member_projectUpdateManyWithWhereWithoutAccountInput | member_projectUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: member_projectScalarWhereInput | member_projectScalarWhereInput[]
  }

  export type notice_devlogUncheckedUpdateManyWithoutAccount_notice_devlog_employee_idToaccountNestedInput = {
    create?: XOR<notice_devlogCreateWithoutAccount_notice_devlog_employee_idToaccountInput, notice_devlogUncheckedCreateWithoutAccount_notice_devlog_employee_idToaccountInput> | notice_devlogCreateWithoutAccount_notice_devlog_employee_idToaccountInput[] | notice_devlogUncheckedCreateWithoutAccount_notice_devlog_employee_idToaccountInput[]
    connectOrCreate?: notice_devlogCreateOrConnectWithoutAccount_notice_devlog_employee_idToaccountInput | notice_devlogCreateOrConnectWithoutAccount_notice_devlog_employee_idToaccountInput[]
    upsert?: notice_devlogUpsertWithWhereUniqueWithoutAccount_notice_devlog_employee_idToaccountInput | notice_devlogUpsertWithWhereUniqueWithoutAccount_notice_devlog_employee_idToaccountInput[]
    createMany?: notice_devlogCreateManyAccount_notice_devlog_employee_idToaccountInputEnvelope
    set?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    disconnect?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    delete?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    connect?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    update?: notice_devlogUpdateWithWhereUniqueWithoutAccount_notice_devlog_employee_idToaccountInput | notice_devlogUpdateWithWhereUniqueWithoutAccount_notice_devlog_employee_idToaccountInput[]
    updateMany?: notice_devlogUpdateManyWithWhereWithoutAccount_notice_devlog_employee_idToaccountInput | notice_devlogUpdateManyWithWhereWithoutAccount_notice_devlog_employee_idToaccountInput[]
    deleteMany?: notice_devlogScalarWhereInput | notice_devlogScalarWhereInput[]
  }

  export type notice_devlogUncheckedUpdateManyWithoutAccount_notice_devlog_leader_idToaccountNestedInput = {
    create?: XOR<notice_devlogCreateWithoutAccount_notice_devlog_leader_idToaccountInput, notice_devlogUncheckedCreateWithoutAccount_notice_devlog_leader_idToaccountInput> | notice_devlogCreateWithoutAccount_notice_devlog_leader_idToaccountInput[] | notice_devlogUncheckedCreateWithoutAccount_notice_devlog_leader_idToaccountInput[]
    connectOrCreate?: notice_devlogCreateOrConnectWithoutAccount_notice_devlog_leader_idToaccountInput | notice_devlogCreateOrConnectWithoutAccount_notice_devlog_leader_idToaccountInput[]
    upsert?: notice_devlogUpsertWithWhereUniqueWithoutAccount_notice_devlog_leader_idToaccountInput | notice_devlogUpsertWithWhereUniqueWithoutAccount_notice_devlog_leader_idToaccountInput[]
    createMany?: notice_devlogCreateManyAccount_notice_devlog_leader_idToaccountInputEnvelope
    set?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    disconnect?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    delete?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    connect?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    update?: notice_devlogUpdateWithWhereUniqueWithoutAccount_notice_devlog_leader_idToaccountInput | notice_devlogUpdateWithWhereUniqueWithoutAccount_notice_devlog_leader_idToaccountInput[]
    updateMany?: notice_devlogUpdateManyWithWhereWithoutAccount_notice_devlog_leader_idToaccountInput | notice_devlogUpdateManyWithWhereWithoutAccount_notice_devlog_leader_idToaccountInput[]
    deleteMany?: notice_devlogScalarWhereInput | notice_devlogScalarWhereInput[]
  }

  export type accountCreateNestedOneWithoutDevlogInput = {
    create?: XOR<accountCreateWithoutDevlogInput, accountUncheckedCreateWithoutDevlogInput>
    connectOrCreate?: accountCreateOrConnectWithoutDevlogInput
    connect?: accountWhereUniqueInput
  }

  export type projectCreateNestedOneWithoutDevlogInput = {
    create?: XOR<projectCreateWithoutDevlogInput, projectUncheckedCreateWithoutDevlogInput>
    connectOrCreate?: projectCreateOrConnectWithoutDevlogInput
    connect?: projectWhereUniqueInput
  }

  export type taskCreateNestedOneWithoutDevlogInput = {
    create?: XOR<taskCreateWithoutDevlogInput, taskUncheckedCreateWithoutDevlogInput>
    connectOrCreate?: taskCreateOrConnectWithoutDevlogInput
    connect?: taskWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type accountUpdateOneRequiredWithoutDevlogNestedInput = {
    create?: XOR<accountCreateWithoutDevlogInput, accountUncheckedCreateWithoutDevlogInput>
    connectOrCreate?: accountCreateOrConnectWithoutDevlogInput
    upsert?: accountUpsertWithoutDevlogInput
    connect?: accountWhereUniqueInput
    update?: XOR<XOR<accountUpdateToOneWithWhereWithoutDevlogInput, accountUpdateWithoutDevlogInput>, accountUncheckedUpdateWithoutDevlogInput>
  }

  export type projectUpdateOneRequiredWithoutDevlogNestedInput = {
    create?: XOR<projectCreateWithoutDevlogInput, projectUncheckedCreateWithoutDevlogInput>
    connectOrCreate?: projectCreateOrConnectWithoutDevlogInput
    upsert?: projectUpsertWithoutDevlogInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutDevlogInput, projectUpdateWithoutDevlogInput>, projectUncheckedUpdateWithoutDevlogInput>
  }

  export type taskUpdateOneRequiredWithoutDevlogNestedInput = {
    create?: XOR<taskCreateWithoutDevlogInput, taskUncheckedCreateWithoutDevlogInput>
    connectOrCreate?: taskCreateOrConnectWithoutDevlogInput
    upsert?: taskUpsertWithoutDevlogInput
    connect?: taskWhereUniqueInput
    update?: XOR<XOR<taskUpdateToOneWithWhereWithoutDevlogInput, taskUpdateWithoutDevlogInput>, taskUncheckedUpdateWithoutDevlogInput>
  }

  export type accountCreateNestedOneWithoutMember_projectInput = {
    create?: XOR<accountCreateWithoutMember_projectInput, accountUncheckedCreateWithoutMember_projectInput>
    connectOrCreate?: accountCreateOrConnectWithoutMember_projectInput
    connect?: accountWhereUniqueInput
  }

  export type projectCreateNestedOneWithoutMember_projectInput = {
    create?: XOR<projectCreateWithoutMember_projectInput, projectUncheckedCreateWithoutMember_projectInput>
    connectOrCreate?: projectCreateOrConnectWithoutMember_projectInput
    connect?: projectWhereUniqueInput
  }

  export type accountUpdateOneRequiredWithoutMember_projectNestedInput = {
    create?: XOR<accountCreateWithoutMember_projectInput, accountUncheckedCreateWithoutMember_projectInput>
    connectOrCreate?: accountCreateOrConnectWithoutMember_projectInput
    upsert?: accountUpsertWithoutMember_projectInput
    connect?: accountWhereUniqueInput
    update?: XOR<XOR<accountUpdateToOneWithWhereWithoutMember_projectInput, accountUpdateWithoutMember_projectInput>, accountUncheckedUpdateWithoutMember_projectInput>
  }

  export type projectUpdateOneRequiredWithoutMember_projectNestedInput = {
    create?: XOR<projectCreateWithoutMember_projectInput, projectUncheckedCreateWithoutMember_projectInput>
    connectOrCreate?: projectCreateOrConnectWithoutMember_projectInput
    upsert?: projectUpsertWithoutMember_projectInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutMember_projectInput, projectUpdateWithoutMember_projectInput>, projectUncheckedUpdateWithoutMember_projectInput>
  }

  export type accountCreateNestedOneWithoutNotice_devlog_notice_devlog_employee_idToaccountInput = {
    create?: XOR<accountCreateWithoutNotice_devlog_notice_devlog_employee_idToaccountInput, accountUncheckedCreateWithoutNotice_devlog_notice_devlog_employee_idToaccountInput>
    connectOrCreate?: accountCreateOrConnectWithoutNotice_devlog_notice_devlog_employee_idToaccountInput
    connect?: accountWhereUniqueInput
  }

  export type accountCreateNestedOneWithoutNotice_devlog_notice_devlog_leader_idToaccountInput = {
    create?: XOR<accountCreateWithoutNotice_devlog_notice_devlog_leader_idToaccountInput, accountUncheckedCreateWithoutNotice_devlog_notice_devlog_leader_idToaccountInput>
    connectOrCreate?: accountCreateOrConnectWithoutNotice_devlog_notice_devlog_leader_idToaccountInput
    connect?: accountWhereUniqueInput
  }

  export type projectCreateNestedOneWithoutNotice_devlogInput = {
    create?: XOR<projectCreateWithoutNotice_devlogInput, projectUncheckedCreateWithoutNotice_devlogInput>
    connectOrCreate?: projectCreateOrConnectWithoutNotice_devlogInput
    connect?: projectWhereUniqueInput
  }

  export type accountUpdateOneRequiredWithoutNotice_devlog_notice_devlog_employee_idToaccountNestedInput = {
    create?: XOR<accountCreateWithoutNotice_devlog_notice_devlog_employee_idToaccountInput, accountUncheckedCreateWithoutNotice_devlog_notice_devlog_employee_idToaccountInput>
    connectOrCreate?: accountCreateOrConnectWithoutNotice_devlog_notice_devlog_employee_idToaccountInput
    upsert?: accountUpsertWithoutNotice_devlog_notice_devlog_employee_idToaccountInput
    connect?: accountWhereUniqueInput
    update?: XOR<XOR<accountUpdateToOneWithWhereWithoutNotice_devlog_notice_devlog_employee_idToaccountInput, accountUpdateWithoutNotice_devlog_notice_devlog_employee_idToaccountInput>, accountUncheckedUpdateWithoutNotice_devlog_notice_devlog_employee_idToaccountInput>
  }

  export type accountUpdateOneRequiredWithoutNotice_devlog_notice_devlog_leader_idToaccountNestedInput = {
    create?: XOR<accountCreateWithoutNotice_devlog_notice_devlog_leader_idToaccountInput, accountUncheckedCreateWithoutNotice_devlog_notice_devlog_leader_idToaccountInput>
    connectOrCreate?: accountCreateOrConnectWithoutNotice_devlog_notice_devlog_leader_idToaccountInput
    upsert?: accountUpsertWithoutNotice_devlog_notice_devlog_leader_idToaccountInput
    connect?: accountWhereUniqueInput
    update?: XOR<XOR<accountUpdateToOneWithWhereWithoutNotice_devlog_notice_devlog_leader_idToaccountInput, accountUpdateWithoutNotice_devlog_notice_devlog_leader_idToaccountInput>, accountUncheckedUpdateWithoutNotice_devlog_notice_devlog_leader_idToaccountInput>
  }

  export type projectUpdateOneRequiredWithoutNotice_devlogNestedInput = {
    create?: XOR<projectCreateWithoutNotice_devlogInput, projectUncheckedCreateWithoutNotice_devlogInput>
    connectOrCreate?: projectCreateOrConnectWithoutNotice_devlogInput
    upsert?: projectUpsertWithoutNotice_devlogInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutNotice_devlogInput, projectUpdateWithoutNotice_devlogInput>, projectUncheckedUpdateWithoutNotice_devlogInput>
  }

  export type devlogCreateNestedManyWithoutProjectInput = {
    create?: XOR<devlogCreateWithoutProjectInput, devlogUncheckedCreateWithoutProjectInput> | devlogCreateWithoutProjectInput[] | devlogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: devlogCreateOrConnectWithoutProjectInput | devlogCreateOrConnectWithoutProjectInput[]
    createMany?: devlogCreateManyProjectInputEnvelope
    connect?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
  }

  export type member_projectCreateNestedManyWithoutProjectInput = {
    create?: XOR<member_projectCreateWithoutProjectInput, member_projectUncheckedCreateWithoutProjectInput> | member_projectCreateWithoutProjectInput[] | member_projectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: member_projectCreateOrConnectWithoutProjectInput | member_projectCreateOrConnectWithoutProjectInput[]
    createMany?: member_projectCreateManyProjectInputEnvelope
    connect?: member_projectWhereUniqueInput | member_projectWhereUniqueInput[]
  }

  export type notice_devlogCreateNestedManyWithoutProjectInput = {
    create?: XOR<notice_devlogCreateWithoutProjectInput, notice_devlogUncheckedCreateWithoutProjectInput> | notice_devlogCreateWithoutProjectInput[] | notice_devlogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: notice_devlogCreateOrConnectWithoutProjectInput | notice_devlogCreateOrConnectWithoutProjectInput[]
    createMany?: notice_devlogCreateManyProjectInputEnvelope
    connect?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
  }

  export type taskCreateNestedManyWithoutProjectInput = {
    create?: XOR<taskCreateWithoutProjectInput, taskUncheckedCreateWithoutProjectInput> | taskCreateWithoutProjectInput[] | taskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: taskCreateOrConnectWithoutProjectInput | taskCreateOrConnectWithoutProjectInput[]
    createMany?: taskCreateManyProjectInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type devlogUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<devlogCreateWithoutProjectInput, devlogUncheckedCreateWithoutProjectInput> | devlogCreateWithoutProjectInput[] | devlogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: devlogCreateOrConnectWithoutProjectInput | devlogCreateOrConnectWithoutProjectInput[]
    createMany?: devlogCreateManyProjectInputEnvelope
    connect?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
  }

  export type member_projectUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<member_projectCreateWithoutProjectInput, member_projectUncheckedCreateWithoutProjectInput> | member_projectCreateWithoutProjectInput[] | member_projectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: member_projectCreateOrConnectWithoutProjectInput | member_projectCreateOrConnectWithoutProjectInput[]
    createMany?: member_projectCreateManyProjectInputEnvelope
    connect?: member_projectWhereUniqueInput | member_projectWhereUniqueInput[]
  }

  export type notice_devlogUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<notice_devlogCreateWithoutProjectInput, notice_devlogUncheckedCreateWithoutProjectInput> | notice_devlogCreateWithoutProjectInput[] | notice_devlogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: notice_devlogCreateOrConnectWithoutProjectInput | notice_devlogCreateOrConnectWithoutProjectInput[]
    createMany?: notice_devlogCreateManyProjectInputEnvelope
    connect?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
  }

  export type taskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<taskCreateWithoutProjectInput, taskUncheckedCreateWithoutProjectInput> | taskCreateWithoutProjectInput[] | taskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: taskCreateOrConnectWithoutProjectInput | taskCreateOrConnectWithoutProjectInput[]
    createMany?: taskCreateManyProjectInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type devlogUpdateManyWithoutProjectNestedInput = {
    create?: XOR<devlogCreateWithoutProjectInput, devlogUncheckedCreateWithoutProjectInput> | devlogCreateWithoutProjectInput[] | devlogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: devlogCreateOrConnectWithoutProjectInput | devlogCreateOrConnectWithoutProjectInput[]
    upsert?: devlogUpsertWithWhereUniqueWithoutProjectInput | devlogUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: devlogCreateManyProjectInputEnvelope
    set?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    disconnect?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    delete?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    connect?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    update?: devlogUpdateWithWhereUniqueWithoutProjectInput | devlogUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: devlogUpdateManyWithWhereWithoutProjectInput | devlogUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: devlogScalarWhereInput | devlogScalarWhereInput[]
  }

  export type member_projectUpdateManyWithoutProjectNestedInput = {
    create?: XOR<member_projectCreateWithoutProjectInput, member_projectUncheckedCreateWithoutProjectInput> | member_projectCreateWithoutProjectInput[] | member_projectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: member_projectCreateOrConnectWithoutProjectInput | member_projectCreateOrConnectWithoutProjectInput[]
    upsert?: member_projectUpsertWithWhereUniqueWithoutProjectInput | member_projectUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: member_projectCreateManyProjectInputEnvelope
    set?: member_projectWhereUniqueInput | member_projectWhereUniqueInput[]
    disconnect?: member_projectWhereUniqueInput | member_projectWhereUniqueInput[]
    delete?: member_projectWhereUniqueInput | member_projectWhereUniqueInput[]
    connect?: member_projectWhereUniqueInput | member_projectWhereUniqueInput[]
    update?: member_projectUpdateWithWhereUniqueWithoutProjectInput | member_projectUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: member_projectUpdateManyWithWhereWithoutProjectInput | member_projectUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: member_projectScalarWhereInput | member_projectScalarWhereInput[]
  }

  export type notice_devlogUpdateManyWithoutProjectNestedInput = {
    create?: XOR<notice_devlogCreateWithoutProjectInput, notice_devlogUncheckedCreateWithoutProjectInput> | notice_devlogCreateWithoutProjectInput[] | notice_devlogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: notice_devlogCreateOrConnectWithoutProjectInput | notice_devlogCreateOrConnectWithoutProjectInput[]
    upsert?: notice_devlogUpsertWithWhereUniqueWithoutProjectInput | notice_devlogUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: notice_devlogCreateManyProjectInputEnvelope
    set?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    disconnect?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    delete?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    connect?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    update?: notice_devlogUpdateWithWhereUniqueWithoutProjectInput | notice_devlogUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: notice_devlogUpdateManyWithWhereWithoutProjectInput | notice_devlogUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: notice_devlogScalarWhereInput | notice_devlogScalarWhereInput[]
  }

  export type taskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<taskCreateWithoutProjectInput, taskUncheckedCreateWithoutProjectInput> | taskCreateWithoutProjectInput[] | taskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: taskCreateOrConnectWithoutProjectInput | taskCreateOrConnectWithoutProjectInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutProjectInput | taskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: taskCreateManyProjectInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutProjectInput | taskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: taskUpdateManyWithWhereWithoutProjectInput | taskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type devlogUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<devlogCreateWithoutProjectInput, devlogUncheckedCreateWithoutProjectInput> | devlogCreateWithoutProjectInput[] | devlogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: devlogCreateOrConnectWithoutProjectInput | devlogCreateOrConnectWithoutProjectInput[]
    upsert?: devlogUpsertWithWhereUniqueWithoutProjectInput | devlogUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: devlogCreateManyProjectInputEnvelope
    set?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    disconnect?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    delete?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    connect?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    update?: devlogUpdateWithWhereUniqueWithoutProjectInput | devlogUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: devlogUpdateManyWithWhereWithoutProjectInput | devlogUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: devlogScalarWhereInput | devlogScalarWhereInput[]
  }

  export type member_projectUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<member_projectCreateWithoutProjectInput, member_projectUncheckedCreateWithoutProjectInput> | member_projectCreateWithoutProjectInput[] | member_projectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: member_projectCreateOrConnectWithoutProjectInput | member_projectCreateOrConnectWithoutProjectInput[]
    upsert?: member_projectUpsertWithWhereUniqueWithoutProjectInput | member_projectUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: member_projectCreateManyProjectInputEnvelope
    set?: member_projectWhereUniqueInput | member_projectWhereUniqueInput[]
    disconnect?: member_projectWhereUniqueInput | member_projectWhereUniqueInput[]
    delete?: member_projectWhereUniqueInput | member_projectWhereUniqueInput[]
    connect?: member_projectWhereUniqueInput | member_projectWhereUniqueInput[]
    update?: member_projectUpdateWithWhereUniqueWithoutProjectInput | member_projectUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: member_projectUpdateManyWithWhereWithoutProjectInput | member_projectUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: member_projectScalarWhereInput | member_projectScalarWhereInput[]
  }

  export type notice_devlogUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<notice_devlogCreateWithoutProjectInput, notice_devlogUncheckedCreateWithoutProjectInput> | notice_devlogCreateWithoutProjectInput[] | notice_devlogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: notice_devlogCreateOrConnectWithoutProjectInput | notice_devlogCreateOrConnectWithoutProjectInput[]
    upsert?: notice_devlogUpsertWithWhereUniqueWithoutProjectInput | notice_devlogUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: notice_devlogCreateManyProjectInputEnvelope
    set?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    disconnect?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    delete?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    connect?: notice_devlogWhereUniqueInput | notice_devlogWhereUniqueInput[]
    update?: notice_devlogUpdateWithWhereUniqueWithoutProjectInput | notice_devlogUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: notice_devlogUpdateManyWithWhereWithoutProjectInput | notice_devlogUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: notice_devlogScalarWhereInput | notice_devlogScalarWhereInput[]
  }

  export type taskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<taskCreateWithoutProjectInput, taskUncheckedCreateWithoutProjectInput> | taskCreateWithoutProjectInput[] | taskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: taskCreateOrConnectWithoutProjectInput | taskCreateOrConnectWithoutProjectInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutProjectInput | taskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: taskCreateManyProjectInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutProjectInput | taskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: taskUpdateManyWithWhereWithoutProjectInput | taskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type accountCreateNestedManyWithoutRoleInput = {
    create?: XOR<accountCreateWithoutRoleInput, accountUncheckedCreateWithoutRoleInput> | accountCreateWithoutRoleInput[] | accountUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: accountCreateOrConnectWithoutRoleInput | accountCreateOrConnectWithoutRoleInput[]
    createMany?: accountCreateManyRoleInputEnvelope
    connect?: accountWhereUniqueInput | accountWhereUniqueInput[]
  }

  export type accountUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<accountCreateWithoutRoleInput, accountUncheckedCreateWithoutRoleInput> | accountCreateWithoutRoleInput[] | accountUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: accountCreateOrConnectWithoutRoleInput | accountCreateOrConnectWithoutRoleInput[]
    createMany?: accountCreateManyRoleInputEnvelope
    connect?: accountWhereUniqueInput | accountWhereUniqueInput[]
  }

  export type accountUpdateManyWithoutRoleNestedInput = {
    create?: XOR<accountCreateWithoutRoleInput, accountUncheckedCreateWithoutRoleInput> | accountCreateWithoutRoleInput[] | accountUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: accountCreateOrConnectWithoutRoleInput | accountCreateOrConnectWithoutRoleInput[]
    upsert?: accountUpsertWithWhereUniqueWithoutRoleInput | accountUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: accountCreateManyRoleInputEnvelope
    set?: accountWhereUniqueInput | accountWhereUniqueInput[]
    disconnect?: accountWhereUniqueInput | accountWhereUniqueInput[]
    delete?: accountWhereUniqueInput | accountWhereUniqueInput[]
    connect?: accountWhereUniqueInput | accountWhereUniqueInput[]
    update?: accountUpdateWithWhereUniqueWithoutRoleInput | accountUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: accountUpdateManyWithWhereWithoutRoleInput | accountUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: accountScalarWhereInput | accountScalarWhereInput[]
  }

  export type accountUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<accountCreateWithoutRoleInput, accountUncheckedCreateWithoutRoleInput> | accountCreateWithoutRoleInput[] | accountUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: accountCreateOrConnectWithoutRoleInput | accountCreateOrConnectWithoutRoleInput[]
    upsert?: accountUpsertWithWhereUniqueWithoutRoleInput | accountUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: accountCreateManyRoleInputEnvelope
    set?: accountWhereUniqueInput | accountWhereUniqueInput[]
    disconnect?: accountWhereUniqueInput | accountWhereUniqueInput[]
    delete?: accountWhereUniqueInput | accountWhereUniqueInput[]
    connect?: accountWhereUniqueInput | accountWhereUniqueInput[]
    update?: accountUpdateWithWhereUniqueWithoutRoleInput | accountUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: accountUpdateManyWithWhereWithoutRoleInput | accountUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: accountScalarWhereInput | accountScalarWhereInput[]
  }

  export type devlogCreateNestedManyWithoutTaskInput = {
    create?: XOR<devlogCreateWithoutTaskInput, devlogUncheckedCreateWithoutTaskInput> | devlogCreateWithoutTaskInput[] | devlogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: devlogCreateOrConnectWithoutTaskInput | devlogCreateOrConnectWithoutTaskInput[]
    createMany?: devlogCreateManyTaskInputEnvelope
    connect?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
  }

  export type projectCreateNestedOneWithoutTaskInput = {
    create?: XOR<projectCreateWithoutTaskInput, projectUncheckedCreateWithoutTaskInput>
    connectOrCreate?: projectCreateOrConnectWithoutTaskInput
    connect?: projectWhereUniqueInput
  }

  export type devlogUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<devlogCreateWithoutTaskInput, devlogUncheckedCreateWithoutTaskInput> | devlogCreateWithoutTaskInput[] | devlogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: devlogCreateOrConnectWithoutTaskInput | devlogCreateOrConnectWithoutTaskInput[]
    createMany?: devlogCreateManyTaskInputEnvelope
    connect?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
  }

  export type devlogUpdateManyWithoutTaskNestedInput = {
    create?: XOR<devlogCreateWithoutTaskInput, devlogUncheckedCreateWithoutTaskInput> | devlogCreateWithoutTaskInput[] | devlogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: devlogCreateOrConnectWithoutTaskInput | devlogCreateOrConnectWithoutTaskInput[]
    upsert?: devlogUpsertWithWhereUniqueWithoutTaskInput | devlogUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: devlogCreateManyTaskInputEnvelope
    set?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    disconnect?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    delete?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    connect?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    update?: devlogUpdateWithWhereUniqueWithoutTaskInput | devlogUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: devlogUpdateManyWithWhereWithoutTaskInput | devlogUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: devlogScalarWhereInput | devlogScalarWhereInput[]
  }

  export type projectUpdateOneRequiredWithoutTaskNestedInput = {
    create?: XOR<projectCreateWithoutTaskInput, projectUncheckedCreateWithoutTaskInput>
    connectOrCreate?: projectCreateOrConnectWithoutTaskInput
    upsert?: projectUpsertWithoutTaskInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutTaskInput, projectUpdateWithoutTaskInput>, projectUncheckedUpdateWithoutTaskInput>
  }

  export type devlogUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<devlogCreateWithoutTaskInput, devlogUncheckedCreateWithoutTaskInput> | devlogCreateWithoutTaskInput[] | devlogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: devlogCreateOrConnectWithoutTaskInput | devlogCreateOrConnectWithoutTaskInput[]
    upsert?: devlogUpsertWithWhereUniqueWithoutTaskInput | devlogUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: devlogCreateManyTaskInputEnvelope
    set?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    disconnect?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    delete?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    connect?: devlogWhereUniqueInput | devlogWhereUniqueInput[]
    update?: devlogUpdateWithWhereUniqueWithoutTaskInput | devlogUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: devlogUpdateManyWithWhereWithoutTaskInput | devlogUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: devlogScalarWhereInput | devlogScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type roleCreateWithoutAccountInput = {
    role_name: string
  }

  export type roleUncheckedCreateWithoutAccountInput = {
    id?: number
    role_name: string
  }

  export type roleCreateOrConnectWithoutAccountInput = {
    where: roleWhereUniqueInput
    create: XOR<roleCreateWithoutAccountInput, roleUncheckedCreateWithoutAccountInput>
  }

  export type devlogCreateWithoutAccountInput = {
    hours: number
    overtime?: boolean
    date: Date | string
    note?: string | null
    project: projectCreateNestedOneWithoutDevlogInput
    task: taskCreateNestedOneWithoutDevlogInput
  }

  export type devlogUncheckedCreateWithoutAccountInput = {
    id?: number
    hours: number
    overtime?: boolean
    date: Date | string
    note?: string | null
    project_id: number
    task_id: number
  }

  export type devlogCreateOrConnectWithoutAccountInput = {
    where: devlogWhereUniqueInput
    create: XOR<devlogCreateWithoutAccountInput, devlogUncheckedCreateWithoutAccountInput>
  }

  export type devlogCreateManyAccountInputEnvelope = {
    data: devlogCreateManyAccountInput | devlogCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type member_projectCreateWithoutAccountInput = {
    project: projectCreateNestedOneWithoutMember_projectInput
  }

  export type member_projectUncheckedCreateWithoutAccountInput = {
    id?: number
    project_id: number
  }

  export type member_projectCreateOrConnectWithoutAccountInput = {
    where: member_projectWhereUniqueInput
    create: XOR<member_projectCreateWithoutAccountInput, member_projectUncheckedCreateWithoutAccountInput>
  }

  export type member_projectCreateManyAccountInputEnvelope = {
    data: member_projectCreateManyAccountInput | member_projectCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type notice_devlogCreateWithoutAccount_notice_devlog_employee_idToaccountInput = {
    date?: Date | string
    notice_count: number
    account_notice_devlog_leader_idToaccount: accountCreateNestedOneWithoutNotice_devlog_notice_devlog_leader_idToaccountInput
    project: projectCreateNestedOneWithoutNotice_devlogInput
  }

  export type notice_devlogUncheckedCreateWithoutAccount_notice_devlog_employee_idToaccountInput = {
    id?: number
    leader_id: number
    project_id: number
    date?: Date | string
    notice_count: number
  }

  export type notice_devlogCreateOrConnectWithoutAccount_notice_devlog_employee_idToaccountInput = {
    where: notice_devlogWhereUniqueInput
    create: XOR<notice_devlogCreateWithoutAccount_notice_devlog_employee_idToaccountInput, notice_devlogUncheckedCreateWithoutAccount_notice_devlog_employee_idToaccountInput>
  }

  export type notice_devlogCreateManyAccount_notice_devlog_employee_idToaccountInputEnvelope = {
    data: notice_devlogCreateManyAccount_notice_devlog_employee_idToaccountInput | notice_devlogCreateManyAccount_notice_devlog_employee_idToaccountInput[]
    skipDuplicates?: boolean
  }

  export type notice_devlogCreateWithoutAccount_notice_devlog_leader_idToaccountInput = {
    date?: Date | string
    notice_count: number
    account_notice_devlog_employee_idToaccount: accountCreateNestedOneWithoutNotice_devlog_notice_devlog_employee_idToaccountInput
    project: projectCreateNestedOneWithoutNotice_devlogInput
  }

  export type notice_devlogUncheckedCreateWithoutAccount_notice_devlog_leader_idToaccountInput = {
    id?: number
    employee_id: number
    project_id: number
    date?: Date | string
    notice_count: number
  }

  export type notice_devlogCreateOrConnectWithoutAccount_notice_devlog_leader_idToaccountInput = {
    where: notice_devlogWhereUniqueInput
    create: XOR<notice_devlogCreateWithoutAccount_notice_devlog_leader_idToaccountInput, notice_devlogUncheckedCreateWithoutAccount_notice_devlog_leader_idToaccountInput>
  }

  export type notice_devlogCreateManyAccount_notice_devlog_leader_idToaccountInputEnvelope = {
    data: notice_devlogCreateManyAccount_notice_devlog_leader_idToaccountInput | notice_devlogCreateManyAccount_notice_devlog_leader_idToaccountInput[]
    skipDuplicates?: boolean
  }

  export type roleUpsertWithoutAccountInput = {
    update: XOR<roleUpdateWithoutAccountInput, roleUncheckedUpdateWithoutAccountInput>
    create: XOR<roleCreateWithoutAccountInput, roleUncheckedCreateWithoutAccountInput>
    where?: roleWhereInput
  }

  export type roleUpdateToOneWithWhereWithoutAccountInput = {
    where?: roleWhereInput
    data: XOR<roleUpdateWithoutAccountInput, roleUncheckedUpdateWithoutAccountInput>
  }

  export type roleUpdateWithoutAccountInput = {
    role_name?: StringFieldUpdateOperationsInput | string
  }

  export type roleUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
  }

  export type devlogUpsertWithWhereUniqueWithoutAccountInput = {
    where: devlogWhereUniqueInput
    update: XOR<devlogUpdateWithoutAccountInput, devlogUncheckedUpdateWithoutAccountInput>
    create: XOR<devlogCreateWithoutAccountInput, devlogUncheckedCreateWithoutAccountInput>
  }

  export type devlogUpdateWithWhereUniqueWithoutAccountInput = {
    where: devlogWhereUniqueInput
    data: XOR<devlogUpdateWithoutAccountInput, devlogUncheckedUpdateWithoutAccountInput>
  }

  export type devlogUpdateManyWithWhereWithoutAccountInput = {
    where: devlogScalarWhereInput
    data: XOR<devlogUpdateManyMutationInput, devlogUncheckedUpdateManyWithoutAccountInput>
  }

  export type devlogScalarWhereInput = {
    AND?: devlogScalarWhereInput | devlogScalarWhereInput[]
    OR?: devlogScalarWhereInput[]
    NOT?: devlogScalarWhereInput | devlogScalarWhereInput[]
    id?: IntFilter<"devlog"> | number
    hours?: IntFilter<"devlog"> | number
    overtime?: BoolFilter<"devlog"> | boolean
    date?: DateTimeFilter<"devlog"> | Date | string
    note?: StringNullableFilter<"devlog"> | string | null
    account_id?: IntFilter<"devlog"> | number
    project_id?: IntFilter<"devlog"> | number
    task_id?: IntFilter<"devlog"> | number
  }

  export type member_projectUpsertWithWhereUniqueWithoutAccountInput = {
    where: member_projectWhereUniqueInput
    update: XOR<member_projectUpdateWithoutAccountInput, member_projectUncheckedUpdateWithoutAccountInput>
    create: XOR<member_projectCreateWithoutAccountInput, member_projectUncheckedCreateWithoutAccountInput>
  }

  export type member_projectUpdateWithWhereUniqueWithoutAccountInput = {
    where: member_projectWhereUniqueInput
    data: XOR<member_projectUpdateWithoutAccountInput, member_projectUncheckedUpdateWithoutAccountInput>
  }

  export type member_projectUpdateManyWithWhereWithoutAccountInput = {
    where: member_projectScalarWhereInput
    data: XOR<member_projectUpdateManyMutationInput, member_projectUncheckedUpdateManyWithoutAccountInput>
  }

  export type member_projectScalarWhereInput = {
    AND?: member_projectScalarWhereInput | member_projectScalarWhereInput[]
    OR?: member_projectScalarWhereInput[]
    NOT?: member_projectScalarWhereInput | member_projectScalarWhereInput[]
    id?: IntFilter<"member_project"> | number
    account_id?: IntFilter<"member_project"> | number
    project_id?: IntFilter<"member_project"> | number
  }

  export type notice_devlogUpsertWithWhereUniqueWithoutAccount_notice_devlog_employee_idToaccountInput = {
    where: notice_devlogWhereUniqueInput
    update: XOR<notice_devlogUpdateWithoutAccount_notice_devlog_employee_idToaccountInput, notice_devlogUncheckedUpdateWithoutAccount_notice_devlog_employee_idToaccountInput>
    create: XOR<notice_devlogCreateWithoutAccount_notice_devlog_employee_idToaccountInput, notice_devlogUncheckedCreateWithoutAccount_notice_devlog_employee_idToaccountInput>
  }

  export type notice_devlogUpdateWithWhereUniqueWithoutAccount_notice_devlog_employee_idToaccountInput = {
    where: notice_devlogWhereUniqueInput
    data: XOR<notice_devlogUpdateWithoutAccount_notice_devlog_employee_idToaccountInput, notice_devlogUncheckedUpdateWithoutAccount_notice_devlog_employee_idToaccountInput>
  }

  export type notice_devlogUpdateManyWithWhereWithoutAccount_notice_devlog_employee_idToaccountInput = {
    where: notice_devlogScalarWhereInput
    data: XOR<notice_devlogUpdateManyMutationInput, notice_devlogUncheckedUpdateManyWithoutAccount_notice_devlog_employee_idToaccountInput>
  }

  export type notice_devlogScalarWhereInput = {
    AND?: notice_devlogScalarWhereInput | notice_devlogScalarWhereInput[]
    OR?: notice_devlogScalarWhereInput[]
    NOT?: notice_devlogScalarWhereInput | notice_devlogScalarWhereInput[]
    id?: IntFilter<"notice_devlog"> | number
    leader_id?: IntFilter<"notice_devlog"> | number
    employee_id?: IntFilter<"notice_devlog"> | number
    project_id?: IntFilter<"notice_devlog"> | number
    date?: DateTimeFilter<"notice_devlog"> | Date | string
    notice_count?: IntFilter<"notice_devlog"> | number
  }

  export type notice_devlogUpsertWithWhereUniqueWithoutAccount_notice_devlog_leader_idToaccountInput = {
    where: notice_devlogWhereUniqueInput
    update: XOR<notice_devlogUpdateWithoutAccount_notice_devlog_leader_idToaccountInput, notice_devlogUncheckedUpdateWithoutAccount_notice_devlog_leader_idToaccountInput>
    create: XOR<notice_devlogCreateWithoutAccount_notice_devlog_leader_idToaccountInput, notice_devlogUncheckedCreateWithoutAccount_notice_devlog_leader_idToaccountInput>
  }

  export type notice_devlogUpdateWithWhereUniqueWithoutAccount_notice_devlog_leader_idToaccountInput = {
    where: notice_devlogWhereUniqueInput
    data: XOR<notice_devlogUpdateWithoutAccount_notice_devlog_leader_idToaccountInput, notice_devlogUncheckedUpdateWithoutAccount_notice_devlog_leader_idToaccountInput>
  }

  export type notice_devlogUpdateManyWithWhereWithoutAccount_notice_devlog_leader_idToaccountInput = {
    where: notice_devlogScalarWhereInput
    data: XOR<notice_devlogUpdateManyMutationInput, notice_devlogUncheckedUpdateManyWithoutAccount_notice_devlog_leader_idToaccountInput>
  }

  export type accountCreateWithoutDevlogInput = {
    employee_name?: string | null
    employee_code?: string | null
    employee_work_email: string
    employee_work_password: string
    employee_private_email?: string | null
    employee_phone_number?: string | null
    employee_birthday?: Date | string | null
    employee_bank_account?: string | null
    employee_citizen_identification?: string | null
    employee_license_plate?: string | null
    role: roleCreateNestedOneWithoutAccountInput
    member_project?: member_projectCreateNestedManyWithoutAccountInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogCreateNestedManyWithoutAccount_notice_devlog_employee_idToaccountInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogCreateNestedManyWithoutAccount_notice_devlog_leader_idToaccountInput
  }

  export type accountUncheckedCreateWithoutDevlogInput = {
    id?: number
    employee_name?: string | null
    employee_code?: string | null
    employee_work_email: string
    employee_work_password: string
    employee_private_email?: string | null
    employee_phone_number?: string | null
    employee_birthday?: Date | string | null
    employee_bank_account?: string | null
    employee_citizen_identification?: string | null
    employee_license_plate?: string | null
    role_id: number
    member_project?: member_projectUncheckedCreateNestedManyWithoutAccountInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogUncheckedCreateNestedManyWithoutAccount_notice_devlog_employee_idToaccountInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogUncheckedCreateNestedManyWithoutAccount_notice_devlog_leader_idToaccountInput
  }

  export type accountCreateOrConnectWithoutDevlogInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutDevlogInput, accountUncheckedCreateWithoutDevlogInput>
  }

  export type projectCreateWithoutDevlogInput = {
    project_name: string
    description?: string | null
    start_date: Date | string
    end_date: Date | string
    status?: boolean
    member_project?: member_projectCreateNestedManyWithoutProjectInput
    notice_devlog?: notice_devlogCreateNestedManyWithoutProjectInput
    task?: taskCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutDevlogInput = {
    id?: number
    project_name: string
    description?: string | null
    start_date: Date | string
    end_date: Date | string
    status?: boolean
    member_project?: member_projectUncheckedCreateNestedManyWithoutProjectInput
    notice_devlog?: notice_devlogUncheckedCreateNestedManyWithoutProjectInput
    task?: taskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutDevlogInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutDevlogInput, projectUncheckedCreateWithoutDevlogInput>
  }

  export type taskCreateWithoutDevlogInput = {
    task_name: string
    task_name_index: number
    project: projectCreateNestedOneWithoutTaskInput
  }

  export type taskUncheckedCreateWithoutDevlogInput = {
    id?: number
    task_name: string
    task_name_index: number
    project_id: number
  }

  export type taskCreateOrConnectWithoutDevlogInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutDevlogInput, taskUncheckedCreateWithoutDevlogInput>
  }

  export type accountUpsertWithoutDevlogInput = {
    update: XOR<accountUpdateWithoutDevlogInput, accountUncheckedUpdateWithoutDevlogInput>
    create: XOR<accountCreateWithoutDevlogInput, accountUncheckedCreateWithoutDevlogInput>
    where?: accountWhereInput
  }

  export type accountUpdateToOneWithWhereWithoutDevlogInput = {
    where?: accountWhereInput
    data: XOR<accountUpdateWithoutDevlogInput, accountUncheckedUpdateWithoutDevlogInput>
  }

  export type accountUpdateWithoutDevlogInput = {
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    employee_work_email?: StringFieldUpdateOperationsInput | string
    employee_work_password?: StringFieldUpdateOperationsInput | string
    employee_private_email?: NullableStringFieldUpdateOperationsInput | string | null
    employee_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    employee_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee_bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    employee_citizen_identification?: NullableStringFieldUpdateOperationsInput | string | null
    employee_license_plate?: NullableStringFieldUpdateOperationsInput | string | null
    role?: roleUpdateOneRequiredWithoutAccountNestedInput
    member_project?: member_projectUpdateManyWithoutAccountNestedInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogUpdateManyWithoutAccount_notice_devlog_employee_idToaccountNestedInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogUpdateManyWithoutAccount_notice_devlog_leader_idToaccountNestedInput
  }

  export type accountUncheckedUpdateWithoutDevlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    employee_work_email?: StringFieldUpdateOperationsInput | string
    employee_work_password?: StringFieldUpdateOperationsInput | string
    employee_private_email?: NullableStringFieldUpdateOperationsInput | string | null
    employee_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    employee_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee_bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    employee_citizen_identification?: NullableStringFieldUpdateOperationsInput | string | null
    employee_license_plate?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    member_project?: member_projectUncheckedUpdateManyWithoutAccountNestedInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogUncheckedUpdateManyWithoutAccount_notice_devlog_employee_idToaccountNestedInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogUncheckedUpdateManyWithoutAccount_notice_devlog_leader_idToaccountNestedInput
  }

  export type projectUpsertWithoutDevlogInput = {
    update: XOR<projectUpdateWithoutDevlogInput, projectUncheckedUpdateWithoutDevlogInput>
    create: XOR<projectCreateWithoutDevlogInput, projectUncheckedCreateWithoutDevlogInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutDevlogInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutDevlogInput, projectUncheckedUpdateWithoutDevlogInput>
  }

  export type projectUpdateWithoutDevlogInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    member_project?: member_projectUpdateManyWithoutProjectNestedInput
    notice_devlog?: notice_devlogUpdateManyWithoutProjectNestedInput
    task?: taskUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutDevlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    member_project?: member_projectUncheckedUpdateManyWithoutProjectNestedInput
    notice_devlog?: notice_devlogUncheckedUpdateManyWithoutProjectNestedInput
    task?: taskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type taskUpsertWithoutDevlogInput = {
    update: XOR<taskUpdateWithoutDevlogInput, taskUncheckedUpdateWithoutDevlogInput>
    create: XOR<taskCreateWithoutDevlogInput, taskUncheckedCreateWithoutDevlogInput>
    where?: taskWhereInput
  }

  export type taskUpdateToOneWithWhereWithoutDevlogInput = {
    where?: taskWhereInput
    data: XOR<taskUpdateWithoutDevlogInput, taskUncheckedUpdateWithoutDevlogInput>
  }

  export type taskUpdateWithoutDevlogInput = {
    task_name?: StringFieldUpdateOperationsInput | string
    task_name_index?: IntFieldUpdateOperationsInput | number
    project?: projectUpdateOneRequiredWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateWithoutDevlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_name?: StringFieldUpdateOperationsInput | string
    task_name_index?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
  }

  export type accountCreateWithoutMember_projectInput = {
    employee_name?: string | null
    employee_code?: string | null
    employee_work_email: string
    employee_work_password: string
    employee_private_email?: string | null
    employee_phone_number?: string | null
    employee_birthday?: Date | string | null
    employee_bank_account?: string | null
    employee_citizen_identification?: string | null
    employee_license_plate?: string | null
    role: roleCreateNestedOneWithoutAccountInput
    devlog?: devlogCreateNestedManyWithoutAccountInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogCreateNestedManyWithoutAccount_notice_devlog_employee_idToaccountInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogCreateNestedManyWithoutAccount_notice_devlog_leader_idToaccountInput
  }

  export type accountUncheckedCreateWithoutMember_projectInput = {
    id?: number
    employee_name?: string | null
    employee_code?: string | null
    employee_work_email: string
    employee_work_password: string
    employee_private_email?: string | null
    employee_phone_number?: string | null
    employee_birthday?: Date | string | null
    employee_bank_account?: string | null
    employee_citizen_identification?: string | null
    employee_license_plate?: string | null
    role_id: number
    devlog?: devlogUncheckedCreateNestedManyWithoutAccountInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogUncheckedCreateNestedManyWithoutAccount_notice_devlog_employee_idToaccountInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogUncheckedCreateNestedManyWithoutAccount_notice_devlog_leader_idToaccountInput
  }

  export type accountCreateOrConnectWithoutMember_projectInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutMember_projectInput, accountUncheckedCreateWithoutMember_projectInput>
  }

  export type projectCreateWithoutMember_projectInput = {
    project_name: string
    description?: string | null
    start_date: Date | string
    end_date: Date | string
    status?: boolean
    devlog?: devlogCreateNestedManyWithoutProjectInput
    notice_devlog?: notice_devlogCreateNestedManyWithoutProjectInput
    task?: taskCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutMember_projectInput = {
    id?: number
    project_name: string
    description?: string | null
    start_date: Date | string
    end_date: Date | string
    status?: boolean
    devlog?: devlogUncheckedCreateNestedManyWithoutProjectInput
    notice_devlog?: notice_devlogUncheckedCreateNestedManyWithoutProjectInput
    task?: taskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutMember_projectInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutMember_projectInput, projectUncheckedCreateWithoutMember_projectInput>
  }

  export type accountUpsertWithoutMember_projectInput = {
    update: XOR<accountUpdateWithoutMember_projectInput, accountUncheckedUpdateWithoutMember_projectInput>
    create: XOR<accountCreateWithoutMember_projectInput, accountUncheckedCreateWithoutMember_projectInput>
    where?: accountWhereInput
  }

  export type accountUpdateToOneWithWhereWithoutMember_projectInput = {
    where?: accountWhereInput
    data: XOR<accountUpdateWithoutMember_projectInput, accountUncheckedUpdateWithoutMember_projectInput>
  }

  export type accountUpdateWithoutMember_projectInput = {
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    employee_work_email?: StringFieldUpdateOperationsInput | string
    employee_work_password?: StringFieldUpdateOperationsInput | string
    employee_private_email?: NullableStringFieldUpdateOperationsInput | string | null
    employee_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    employee_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee_bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    employee_citizen_identification?: NullableStringFieldUpdateOperationsInput | string | null
    employee_license_plate?: NullableStringFieldUpdateOperationsInput | string | null
    role?: roleUpdateOneRequiredWithoutAccountNestedInput
    devlog?: devlogUpdateManyWithoutAccountNestedInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogUpdateManyWithoutAccount_notice_devlog_employee_idToaccountNestedInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogUpdateManyWithoutAccount_notice_devlog_leader_idToaccountNestedInput
  }

  export type accountUncheckedUpdateWithoutMember_projectInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    employee_work_email?: StringFieldUpdateOperationsInput | string
    employee_work_password?: StringFieldUpdateOperationsInput | string
    employee_private_email?: NullableStringFieldUpdateOperationsInput | string | null
    employee_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    employee_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee_bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    employee_citizen_identification?: NullableStringFieldUpdateOperationsInput | string | null
    employee_license_plate?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    devlog?: devlogUncheckedUpdateManyWithoutAccountNestedInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogUncheckedUpdateManyWithoutAccount_notice_devlog_employee_idToaccountNestedInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogUncheckedUpdateManyWithoutAccount_notice_devlog_leader_idToaccountNestedInput
  }

  export type projectUpsertWithoutMember_projectInput = {
    update: XOR<projectUpdateWithoutMember_projectInput, projectUncheckedUpdateWithoutMember_projectInput>
    create: XOR<projectCreateWithoutMember_projectInput, projectUncheckedCreateWithoutMember_projectInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutMember_projectInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutMember_projectInput, projectUncheckedUpdateWithoutMember_projectInput>
  }

  export type projectUpdateWithoutMember_projectInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    devlog?: devlogUpdateManyWithoutProjectNestedInput
    notice_devlog?: notice_devlogUpdateManyWithoutProjectNestedInput
    task?: taskUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutMember_projectInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    devlog?: devlogUncheckedUpdateManyWithoutProjectNestedInput
    notice_devlog?: notice_devlogUncheckedUpdateManyWithoutProjectNestedInput
    task?: taskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type accountCreateWithoutNotice_devlog_notice_devlog_employee_idToaccountInput = {
    employee_name?: string | null
    employee_code?: string | null
    employee_work_email: string
    employee_work_password: string
    employee_private_email?: string | null
    employee_phone_number?: string | null
    employee_birthday?: Date | string | null
    employee_bank_account?: string | null
    employee_citizen_identification?: string | null
    employee_license_plate?: string | null
    role: roleCreateNestedOneWithoutAccountInput
    devlog?: devlogCreateNestedManyWithoutAccountInput
    member_project?: member_projectCreateNestedManyWithoutAccountInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogCreateNestedManyWithoutAccount_notice_devlog_leader_idToaccountInput
  }

  export type accountUncheckedCreateWithoutNotice_devlog_notice_devlog_employee_idToaccountInput = {
    id?: number
    employee_name?: string | null
    employee_code?: string | null
    employee_work_email: string
    employee_work_password: string
    employee_private_email?: string | null
    employee_phone_number?: string | null
    employee_birthday?: Date | string | null
    employee_bank_account?: string | null
    employee_citizen_identification?: string | null
    employee_license_plate?: string | null
    role_id: number
    devlog?: devlogUncheckedCreateNestedManyWithoutAccountInput
    member_project?: member_projectUncheckedCreateNestedManyWithoutAccountInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogUncheckedCreateNestedManyWithoutAccount_notice_devlog_leader_idToaccountInput
  }

  export type accountCreateOrConnectWithoutNotice_devlog_notice_devlog_employee_idToaccountInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutNotice_devlog_notice_devlog_employee_idToaccountInput, accountUncheckedCreateWithoutNotice_devlog_notice_devlog_employee_idToaccountInput>
  }

  export type accountCreateWithoutNotice_devlog_notice_devlog_leader_idToaccountInput = {
    employee_name?: string | null
    employee_code?: string | null
    employee_work_email: string
    employee_work_password: string
    employee_private_email?: string | null
    employee_phone_number?: string | null
    employee_birthday?: Date | string | null
    employee_bank_account?: string | null
    employee_citizen_identification?: string | null
    employee_license_plate?: string | null
    role: roleCreateNestedOneWithoutAccountInput
    devlog?: devlogCreateNestedManyWithoutAccountInput
    member_project?: member_projectCreateNestedManyWithoutAccountInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogCreateNestedManyWithoutAccount_notice_devlog_employee_idToaccountInput
  }

  export type accountUncheckedCreateWithoutNotice_devlog_notice_devlog_leader_idToaccountInput = {
    id?: number
    employee_name?: string | null
    employee_code?: string | null
    employee_work_email: string
    employee_work_password: string
    employee_private_email?: string | null
    employee_phone_number?: string | null
    employee_birthday?: Date | string | null
    employee_bank_account?: string | null
    employee_citizen_identification?: string | null
    employee_license_plate?: string | null
    role_id: number
    devlog?: devlogUncheckedCreateNestedManyWithoutAccountInput
    member_project?: member_projectUncheckedCreateNestedManyWithoutAccountInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogUncheckedCreateNestedManyWithoutAccount_notice_devlog_employee_idToaccountInput
  }

  export type accountCreateOrConnectWithoutNotice_devlog_notice_devlog_leader_idToaccountInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutNotice_devlog_notice_devlog_leader_idToaccountInput, accountUncheckedCreateWithoutNotice_devlog_notice_devlog_leader_idToaccountInput>
  }

  export type projectCreateWithoutNotice_devlogInput = {
    project_name: string
    description?: string | null
    start_date: Date | string
    end_date: Date | string
    status?: boolean
    devlog?: devlogCreateNestedManyWithoutProjectInput
    member_project?: member_projectCreateNestedManyWithoutProjectInput
    task?: taskCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutNotice_devlogInput = {
    id?: number
    project_name: string
    description?: string | null
    start_date: Date | string
    end_date: Date | string
    status?: boolean
    devlog?: devlogUncheckedCreateNestedManyWithoutProjectInput
    member_project?: member_projectUncheckedCreateNestedManyWithoutProjectInput
    task?: taskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutNotice_devlogInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutNotice_devlogInput, projectUncheckedCreateWithoutNotice_devlogInput>
  }

  export type accountUpsertWithoutNotice_devlog_notice_devlog_employee_idToaccountInput = {
    update: XOR<accountUpdateWithoutNotice_devlog_notice_devlog_employee_idToaccountInput, accountUncheckedUpdateWithoutNotice_devlog_notice_devlog_employee_idToaccountInput>
    create: XOR<accountCreateWithoutNotice_devlog_notice_devlog_employee_idToaccountInput, accountUncheckedCreateWithoutNotice_devlog_notice_devlog_employee_idToaccountInput>
    where?: accountWhereInput
  }

  export type accountUpdateToOneWithWhereWithoutNotice_devlog_notice_devlog_employee_idToaccountInput = {
    where?: accountWhereInput
    data: XOR<accountUpdateWithoutNotice_devlog_notice_devlog_employee_idToaccountInput, accountUncheckedUpdateWithoutNotice_devlog_notice_devlog_employee_idToaccountInput>
  }

  export type accountUpdateWithoutNotice_devlog_notice_devlog_employee_idToaccountInput = {
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    employee_work_email?: StringFieldUpdateOperationsInput | string
    employee_work_password?: StringFieldUpdateOperationsInput | string
    employee_private_email?: NullableStringFieldUpdateOperationsInput | string | null
    employee_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    employee_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee_bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    employee_citizen_identification?: NullableStringFieldUpdateOperationsInput | string | null
    employee_license_plate?: NullableStringFieldUpdateOperationsInput | string | null
    role?: roleUpdateOneRequiredWithoutAccountNestedInput
    devlog?: devlogUpdateManyWithoutAccountNestedInput
    member_project?: member_projectUpdateManyWithoutAccountNestedInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogUpdateManyWithoutAccount_notice_devlog_leader_idToaccountNestedInput
  }

  export type accountUncheckedUpdateWithoutNotice_devlog_notice_devlog_employee_idToaccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    employee_work_email?: StringFieldUpdateOperationsInput | string
    employee_work_password?: StringFieldUpdateOperationsInput | string
    employee_private_email?: NullableStringFieldUpdateOperationsInput | string | null
    employee_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    employee_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee_bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    employee_citizen_identification?: NullableStringFieldUpdateOperationsInput | string | null
    employee_license_plate?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    devlog?: devlogUncheckedUpdateManyWithoutAccountNestedInput
    member_project?: member_projectUncheckedUpdateManyWithoutAccountNestedInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogUncheckedUpdateManyWithoutAccount_notice_devlog_leader_idToaccountNestedInput
  }

  export type accountUpsertWithoutNotice_devlog_notice_devlog_leader_idToaccountInput = {
    update: XOR<accountUpdateWithoutNotice_devlog_notice_devlog_leader_idToaccountInput, accountUncheckedUpdateWithoutNotice_devlog_notice_devlog_leader_idToaccountInput>
    create: XOR<accountCreateWithoutNotice_devlog_notice_devlog_leader_idToaccountInput, accountUncheckedCreateWithoutNotice_devlog_notice_devlog_leader_idToaccountInput>
    where?: accountWhereInput
  }

  export type accountUpdateToOneWithWhereWithoutNotice_devlog_notice_devlog_leader_idToaccountInput = {
    where?: accountWhereInput
    data: XOR<accountUpdateWithoutNotice_devlog_notice_devlog_leader_idToaccountInput, accountUncheckedUpdateWithoutNotice_devlog_notice_devlog_leader_idToaccountInput>
  }

  export type accountUpdateWithoutNotice_devlog_notice_devlog_leader_idToaccountInput = {
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    employee_work_email?: StringFieldUpdateOperationsInput | string
    employee_work_password?: StringFieldUpdateOperationsInput | string
    employee_private_email?: NullableStringFieldUpdateOperationsInput | string | null
    employee_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    employee_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee_bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    employee_citizen_identification?: NullableStringFieldUpdateOperationsInput | string | null
    employee_license_plate?: NullableStringFieldUpdateOperationsInput | string | null
    role?: roleUpdateOneRequiredWithoutAccountNestedInput
    devlog?: devlogUpdateManyWithoutAccountNestedInput
    member_project?: member_projectUpdateManyWithoutAccountNestedInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogUpdateManyWithoutAccount_notice_devlog_employee_idToaccountNestedInput
  }

  export type accountUncheckedUpdateWithoutNotice_devlog_notice_devlog_leader_idToaccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    employee_work_email?: StringFieldUpdateOperationsInput | string
    employee_work_password?: StringFieldUpdateOperationsInput | string
    employee_private_email?: NullableStringFieldUpdateOperationsInput | string | null
    employee_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    employee_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee_bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    employee_citizen_identification?: NullableStringFieldUpdateOperationsInput | string | null
    employee_license_plate?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    devlog?: devlogUncheckedUpdateManyWithoutAccountNestedInput
    member_project?: member_projectUncheckedUpdateManyWithoutAccountNestedInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogUncheckedUpdateManyWithoutAccount_notice_devlog_employee_idToaccountNestedInput
  }

  export type projectUpsertWithoutNotice_devlogInput = {
    update: XOR<projectUpdateWithoutNotice_devlogInput, projectUncheckedUpdateWithoutNotice_devlogInput>
    create: XOR<projectCreateWithoutNotice_devlogInput, projectUncheckedCreateWithoutNotice_devlogInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutNotice_devlogInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutNotice_devlogInput, projectUncheckedUpdateWithoutNotice_devlogInput>
  }

  export type projectUpdateWithoutNotice_devlogInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    devlog?: devlogUpdateManyWithoutProjectNestedInput
    member_project?: member_projectUpdateManyWithoutProjectNestedInput
    task?: taskUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutNotice_devlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    devlog?: devlogUncheckedUpdateManyWithoutProjectNestedInput
    member_project?: member_projectUncheckedUpdateManyWithoutProjectNestedInput
    task?: taskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type devlogCreateWithoutProjectInput = {
    hours: number
    overtime?: boolean
    date: Date | string
    note?: string | null
    account: accountCreateNestedOneWithoutDevlogInput
    task: taskCreateNestedOneWithoutDevlogInput
  }

  export type devlogUncheckedCreateWithoutProjectInput = {
    id?: number
    hours: number
    overtime?: boolean
    date: Date | string
    note?: string | null
    account_id: number
    task_id: number
  }

  export type devlogCreateOrConnectWithoutProjectInput = {
    where: devlogWhereUniqueInput
    create: XOR<devlogCreateWithoutProjectInput, devlogUncheckedCreateWithoutProjectInput>
  }

  export type devlogCreateManyProjectInputEnvelope = {
    data: devlogCreateManyProjectInput | devlogCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type member_projectCreateWithoutProjectInput = {
    account: accountCreateNestedOneWithoutMember_projectInput
  }

  export type member_projectUncheckedCreateWithoutProjectInput = {
    id?: number
    account_id: number
  }

  export type member_projectCreateOrConnectWithoutProjectInput = {
    where: member_projectWhereUniqueInput
    create: XOR<member_projectCreateWithoutProjectInput, member_projectUncheckedCreateWithoutProjectInput>
  }

  export type member_projectCreateManyProjectInputEnvelope = {
    data: member_projectCreateManyProjectInput | member_projectCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type notice_devlogCreateWithoutProjectInput = {
    date?: Date | string
    notice_count: number
    account_notice_devlog_employee_idToaccount: accountCreateNestedOneWithoutNotice_devlog_notice_devlog_employee_idToaccountInput
    account_notice_devlog_leader_idToaccount: accountCreateNestedOneWithoutNotice_devlog_notice_devlog_leader_idToaccountInput
  }

  export type notice_devlogUncheckedCreateWithoutProjectInput = {
    id?: number
    leader_id: number
    employee_id: number
    date?: Date | string
    notice_count: number
  }

  export type notice_devlogCreateOrConnectWithoutProjectInput = {
    where: notice_devlogWhereUniqueInput
    create: XOR<notice_devlogCreateWithoutProjectInput, notice_devlogUncheckedCreateWithoutProjectInput>
  }

  export type notice_devlogCreateManyProjectInputEnvelope = {
    data: notice_devlogCreateManyProjectInput | notice_devlogCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type taskCreateWithoutProjectInput = {
    task_name: string
    task_name_index: number
    devlog?: devlogCreateNestedManyWithoutTaskInput
  }

  export type taskUncheckedCreateWithoutProjectInput = {
    id?: number
    task_name: string
    task_name_index: number
    devlog?: devlogUncheckedCreateNestedManyWithoutTaskInput
  }

  export type taskCreateOrConnectWithoutProjectInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutProjectInput, taskUncheckedCreateWithoutProjectInput>
  }

  export type taskCreateManyProjectInputEnvelope = {
    data: taskCreateManyProjectInput | taskCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type devlogUpsertWithWhereUniqueWithoutProjectInput = {
    where: devlogWhereUniqueInput
    update: XOR<devlogUpdateWithoutProjectInput, devlogUncheckedUpdateWithoutProjectInput>
    create: XOR<devlogCreateWithoutProjectInput, devlogUncheckedCreateWithoutProjectInput>
  }

  export type devlogUpdateWithWhereUniqueWithoutProjectInput = {
    where: devlogWhereUniqueInput
    data: XOR<devlogUpdateWithoutProjectInput, devlogUncheckedUpdateWithoutProjectInput>
  }

  export type devlogUpdateManyWithWhereWithoutProjectInput = {
    where: devlogScalarWhereInput
    data: XOR<devlogUpdateManyMutationInput, devlogUncheckedUpdateManyWithoutProjectInput>
  }

  export type member_projectUpsertWithWhereUniqueWithoutProjectInput = {
    where: member_projectWhereUniqueInput
    update: XOR<member_projectUpdateWithoutProjectInput, member_projectUncheckedUpdateWithoutProjectInput>
    create: XOR<member_projectCreateWithoutProjectInput, member_projectUncheckedCreateWithoutProjectInput>
  }

  export type member_projectUpdateWithWhereUniqueWithoutProjectInput = {
    where: member_projectWhereUniqueInput
    data: XOR<member_projectUpdateWithoutProjectInput, member_projectUncheckedUpdateWithoutProjectInput>
  }

  export type member_projectUpdateManyWithWhereWithoutProjectInput = {
    where: member_projectScalarWhereInput
    data: XOR<member_projectUpdateManyMutationInput, member_projectUncheckedUpdateManyWithoutProjectInput>
  }

  export type notice_devlogUpsertWithWhereUniqueWithoutProjectInput = {
    where: notice_devlogWhereUniqueInput
    update: XOR<notice_devlogUpdateWithoutProjectInput, notice_devlogUncheckedUpdateWithoutProjectInput>
    create: XOR<notice_devlogCreateWithoutProjectInput, notice_devlogUncheckedCreateWithoutProjectInput>
  }

  export type notice_devlogUpdateWithWhereUniqueWithoutProjectInput = {
    where: notice_devlogWhereUniqueInput
    data: XOR<notice_devlogUpdateWithoutProjectInput, notice_devlogUncheckedUpdateWithoutProjectInput>
  }

  export type notice_devlogUpdateManyWithWhereWithoutProjectInput = {
    where: notice_devlogScalarWhereInput
    data: XOR<notice_devlogUpdateManyMutationInput, notice_devlogUncheckedUpdateManyWithoutProjectInput>
  }

  export type taskUpsertWithWhereUniqueWithoutProjectInput = {
    where: taskWhereUniqueInput
    update: XOR<taskUpdateWithoutProjectInput, taskUncheckedUpdateWithoutProjectInput>
    create: XOR<taskCreateWithoutProjectInput, taskUncheckedCreateWithoutProjectInput>
  }

  export type taskUpdateWithWhereUniqueWithoutProjectInput = {
    where: taskWhereUniqueInput
    data: XOR<taskUpdateWithoutProjectInput, taskUncheckedUpdateWithoutProjectInput>
  }

  export type taskUpdateManyWithWhereWithoutProjectInput = {
    where: taskScalarWhereInput
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyWithoutProjectInput>
  }

  export type taskScalarWhereInput = {
    AND?: taskScalarWhereInput | taskScalarWhereInput[]
    OR?: taskScalarWhereInput[]
    NOT?: taskScalarWhereInput | taskScalarWhereInput[]
    id?: IntFilter<"task"> | number
    task_name?: StringFilter<"task"> | string
    task_name_index?: IntFilter<"task"> | number
    project_id?: IntFilter<"task"> | number
  }

  export type accountCreateWithoutRoleInput = {
    employee_name?: string | null
    employee_code?: string | null
    employee_work_email: string
    employee_work_password: string
    employee_private_email?: string | null
    employee_phone_number?: string | null
    employee_birthday?: Date | string | null
    employee_bank_account?: string | null
    employee_citizen_identification?: string | null
    employee_license_plate?: string | null
    devlog?: devlogCreateNestedManyWithoutAccountInput
    member_project?: member_projectCreateNestedManyWithoutAccountInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogCreateNestedManyWithoutAccount_notice_devlog_employee_idToaccountInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogCreateNestedManyWithoutAccount_notice_devlog_leader_idToaccountInput
  }

  export type accountUncheckedCreateWithoutRoleInput = {
    id?: number
    employee_name?: string | null
    employee_code?: string | null
    employee_work_email: string
    employee_work_password: string
    employee_private_email?: string | null
    employee_phone_number?: string | null
    employee_birthday?: Date | string | null
    employee_bank_account?: string | null
    employee_citizen_identification?: string | null
    employee_license_plate?: string | null
    devlog?: devlogUncheckedCreateNestedManyWithoutAccountInput
    member_project?: member_projectUncheckedCreateNestedManyWithoutAccountInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogUncheckedCreateNestedManyWithoutAccount_notice_devlog_employee_idToaccountInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogUncheckedCreateNestedManyWithoutAccount_notice_devlog_leader_idToaccountInput
  }

  export type accountCreateOrConnectWithoutRoleInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutRoleInput, accountUncheckedCreateWithoutRoleInput>
  }

  export type accountCreateManyRoleInputEnvelope = {
    data: accountCreateManyRoleInput | accountCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type accountUpsertWithWhereUniqueWithoutRoleInput = {
    where: accountWhereUniqueInput
    update: XOR<accountUpdateWithoutRoleInput, accountUncheckedUpdateWithoutRoleInput>
    create: XOR<accountCreateWithoutRoleInput, accountUncheckedCreateWithoutRoleInput>
  }

  export type accountUpdateWithWhereUniqueWithoutRoleInput = {
    where: accountWhereUniqueInput
    data: XOR<accountUpdateWithoutRoleInput, accountUncheckedUpdateWithoutRoleInput>
  }

  export type accountUpdateManyWithWhereWithoutRoleInput = {
    where: accountScalarWhereInput
    data: XOR<accountUpdateManyMutationInput, accountUncheckedUpdateManyWithoutRoleInput>
  }

  export type accountScalarWhereInput = {
    AND?: accountScalarWhereInput | accountScalarWhereInput[]
    OR?: accountScalarWhereInput[]
    NOT?: accountScalarWhereInput | accountScalarWhereInput[]
    id?: IntFilter<"account"> | number
    employee_name?: StringNullableFilter<"account"> | string | null
    employee_code?: StringNullableFilter<"account"> | string | null
    employee_work_email?: StringFilter<"account"> | string
    employee_work_password?: StringFilter<"account"> | string
    employee_private_email?: StringNullableFilter<"account"> | string | null
    employee_phone_number?: StringNullableFilter<"account"> | string | null
    employee_birthday?: DateTimeNullableFilter<"account"> | Date | string | null
    employee_bank_account?: StringNullableFilter<"account"> | string | null
    employee_citizen_identification?: StringNullableFilter<"account"> | string | null
    employee_license_plate?: StringNullableFilter<"account"> | string | null
    role_id?: IntFilter<"account"> | number
  }

  export type devlogCreateWithoutTaskInput = {
    hours: number
    overtime?: boolean
    date: Date | string
    note?: string | null
    account: accountCreateNestedOneWithoutDevlogInput
    project: projectCreateNestedOneWithoutDevlogInput
  }

  export type devlogUncheckedCreateWithoutTaskInput = {
    id?: number
    hours: number
    overtime?: boolean
    date: Date | string
    note?: string | null
    account_id: number
    project_id: number
  }

  export type devlogCreateOrConnectWithoutTaskInput = {
    where: devlogWhereUniqueInput
    create: XOR<devlogCreateWithoutTaskInput, devlogUncheckedCreateWithoutTaskInput>
  }

  export type devlogCreateManyTaskInputEnvelope = {
    data: devlogCreateManyTaskInput | devlogCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type projectCreateWithoutTaskInput = {
    project_name: string
    description?: string | null
    start_date: Date | string
    end_date: Date | string
    status?: boolean
    devlog?: devlogCreateNestedManyWithoutProjectInput
    member_project?: member_projectCreateNestedManyWithoutProjectInput
    notice_devlog?: notice_devlogCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutTaskInput = {
    id?: number
    project_name: string
    description?: string | null
    start_date: Date | string
    end_date: Date | string
    status?: boolean
    devlog?: devlogUncheckedCreateNestedManyWithoutProjectInput
    member_project?: member_projectUncheckedCreateNestedManyWithoutProjectInput
    notice_devlog?: notice_devlogUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutTaskInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutTaskInput, projectUncheckedCreateWithoutTaskInput>
  }

  export type devlogUpsertWithWhereUniqueWithoutTaskInput = {
    where: devlogWhereUniqueInput
    update: XOR<devlogUpdateWithoutTaskInput, devlogUncheckedUpdateWithoutTaskInput>
    create: XOR<devlogCreateWithoutTaskInput, devlogUncheckedCreateWithoutTaskInput>
  }

  export type devlogUpdateWithWhereUniqueWithoutTaskInput = {
    where: devlogWhereUniqueInput
    data: XOR<devlogUpdateWithoutTaskInput, devlogUncheckedUpdateWithoutTaskInput>
  }

  export type devlogUpdateManyWithWhereWithoutTaskInput = {
    where: devlogScalarWhereInput
    data: XOR<devlogUpdateManyMutationInput, devlogUncheckedUpdateManyWithoutTaskInput>
  }

  export type projectUpsertWithoutTaskInput = {
    update: XOR<projectUpdateWithoutTaskInput, projectUncheckedUpdateWithoutTaskInput>
    create: XOR<projectCreateWithoutTaskInput, projectUncheckedCreateWithoutTaskInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutTaskInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutTaskInput, projectUncheckedUpdateWithoutTaskInput>
  }

  export type projectUpdateWithoutTaskInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    devlog?: devlogUpdateManyWithoutProjectNestedInput
    member_project?: member_projectUpdateManyWithoutProjectNestedInput
    notice_devlog?: notice_devlogUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    devlog?: devlogUncheckedUpdateManyWithoutProjectNestedInput
    member_project?: member_projectUncheckedUpdateManyWithoutProjectNestedInput
    notice_devlog?: notice_devlogUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type devlogCreateManyAccountInput = {
    id?: number
    hours: number
    overtime?: boolean
    date: Date | string
    note?: string | null
    project_id: number
    task_id: number
  }

  export type member_projectCreateManyAccountInput = {
    id?: number
    project_id: number
  }

  export type notice_devlogCreateManyAccount_notice_devlog_employee_idToaccountInput = {
    id?: number
    leader_id: number
    project_id: number
    date?: Date | string
    notice_count: number
  }

  export type notice_devlogCreateManyAccount_notice_devlog_leader_idToaccountInput = {
    id?: number
    employee_id: number
    project_id: number
    date?: Date | string
    notice_count: number
  }

  export type devlogUpdateWithoutAccountInput = {
    hours?: IntFieldUpdateOperationsInput | number
    overtime?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    project?: projectUpdateOneRequiredWithoutDevlogNestedInput
    task?: taskUpdateOneRequiredWithoutDevlogNestedInput
  }

  export type devlogUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    overtime?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
  }

  export type devlogUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    overtime?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
  }

  export type member_projectUpdateWithoutAccountInput = {
    project?: projectUpdateOneRequiredWithoutMember_projectNestedInput
  }

  export type member_projectUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
  }

  export type member_projectUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
  }

  export type notice_devlogUpdateWithoutAccount_notice_devlog_employee_idToaccountInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notice_count?: IntFieldUpdateOperationsInput | number
    account_notice_devlog_leader_idToaccount?: accountUpdateOneRequiredWithoutNotice_devlog_notice_devlog_leader_idToaccountNestedInput
    project?: projectUpdateOneRequiredWithoutNotice_devlogNestedInput
  }

  export type notice_devlogUncheckedUpdateWithoutAccount_notice_devlog_employee_idToaccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    leader_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notice_count?: IntFieldUpdateOperationsInput | number
  }

  export type notice_devlogUncheckedUpdateManyWithoutAccount_notice_devlog_employee_idToaccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    leader_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notice_count?: IntFieldUpdateOperationsInput | number
  }

  export type notice_devlogUpdateWithoutAccount_notice_devlog_leader_idToaccountInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notice_count?: IntFieldUpdateOperationsInput | number
    account_notice_devlog_employee_idToaccount?: accountUpdateOneRequiredWithoutNotice_devlog_notice_devlog_employee_idToaccountNestedInput
    project?: projectUpdateOneRequiredWithoutNotice_devlogNestedInput
  }

  export type notice_devlogUncheckedUpdateWithoutAccount_notice_devlog_leader_idToaccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notice_count?: IntFieldUpdateOperationsInput | number
  }

  export type notice_devlogUncheckedUpdateManyWithoutAccount_notice_devlog_leader_idToaccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notice_count?: IntFieldUpdateOperationsInput | number
  }

  export type devlogCreateManyProjectInput = {
    id?: number
    hours: number
    overtime?: boolean
    date: Date | string
    note?: string | null
    account_id: number
    task_id: number
  }

  export type member_projectCreateManyProjectInput = {
    id?: number
    account_id: number
  }

  export type notice_devlogCreateManyProjectInput = {
    id?: number
    leader_id: number
    employee_id: number
    date?: Date | string
    notice_count: number
  }

  export type taskCreateManyProjectInput = {
    id?: number
    task_name: string
    task_name_index: number
  }

  export type devlogUpdateWithoutProjectInput = {
    hours?: IntFieldUpdateOperationsInput | number
    overtime?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    account?: accountUpdateOneRequiredWithoutDevlogNestedInput
    task?: taskUpdateOneRequiredWithoutDevlogNestedInput
  }

  export type devlogUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    overtime?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    account_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
  }

  export type devlogUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    overtime?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    account_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
  }

  export type member_projectUpdateWithoutProjectInput = {
    account?: accountUpdateOneRequiredWithoutMember_projectNestedInput
  }

  export type member_projectUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
  }

  export type member_projectUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
  }

  export type notice_devlogUpdateWithoutProjectInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notice_count?: IntFieldUpdateOperationsInput | number
    account_notice_devlog_employee_idToaccount?: accountUpdateOneRequiredWithoutNotice_devlog_notice_devlog_employee_idToaccountNestedInput
    account_notice_devlog_leader_idToaccount?: accountUpdateOneRequiredWithoutNotice_devlog_notice_devlog_leader_idToaccountNestedInput
  }

  export type notice_devlogUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    leader_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notice_count?: IntFieldUpdateOperationsInput | number
  }

  export type notice_devlogUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    leader_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notice_count?: IntFieldUpdateOperationsInput | number
  }

  export type taskUpdateWithoutProjectInput = {
    task_name?: StringFieldUpdateOperationsInput | string
    task_name_index?: IntFieldUpdateOperationsInput | number
    devlog?: devlogUpdateManyWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_name?: StringFieldUpdateOperationsInput | string
    task_name_index?: IntFieldUpdateOperationsInput | number
    devlog?: devlogUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_name?: StringFieldUpdateOperationsInput | string
    task_name_index?: IntFieldUpdateOperationsInput | number
  }

  export type accountCreateManyRoleInput = {
    id?: number
    employee_name?: string | null
    employee_code?: string | null
    employee_work_email: string
    employee_work_password: string
    employee_private_email?: string | null
    employee_phone_number?: string | null
    employee_birthday?: Date | string | null
    employee_bank_account?: string | null
    employee_citizen_identification?: string | null
    employee_license_plate?: string | null
  }

  export type accountUpdateWithoutRoleInput = {
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    employee_work_email?: StringFieldUpdateOperationsInput | string
    employee_work_password?: StringFieldUpdateOperationsInput | string
    employee_private_email?: NullableStringFieldUpdateOperationsInput | string | null
    employee_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    employee_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee_bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    employee_citizen_identification?: NullableStringFieldUpdateOperationsInput | string | null
    employee_license_plate?: NullableStringFieldUpdateOperationsInput | string | null
    devlog?: devlogUpdateManyWithoutAccountNestedInput
    member_project?: member_projectUpdateManyWithoutAccountNestedInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogUpdateManyWithoutAccount_notice_devlog_employee_idToaccountNestedInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogUpdateManyWithoutAccount_notice_devlog_leader_idToaccountNestedInput
  }

  export type accountUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    employee_work_email?: StringFieldUpdateOperationsInput | string
    employee_work_password?: StringFieldUpdateOperationsInput | string
    employee_private_email?: NullableStringFieldUpdateOperationsInput | string | null
    employee_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    employee_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee_bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    employee_citizen_identification?: NullableStringFieldUpdateOperationsInput | string | null
    employee_license_plate?: NullableStringFieldUpdateOperationsInput | string | null
    devlog?: devlogUncheckedUpdateManyWithoutAccountNestedInput
    member_project?: member_projectUncheckedUpdateManyWithoutAccountNestedInput
    notice_devlog_notice_devlog_employee_idToaccount?: notice_devlogUncheckedUpdateManyWithoutAccount_notice_devlog_employee_idToaccountNestedInput
    notice_devlog_notice_devlog_leader_idToaccount?: notice_devlogUncheckedUpdateManyWithoutAccount_notice_devlog_leader_idToaccountNestedInput
  }

  export type accountUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    employee_work_email?: StringFieldUpdateOperationsInput | string
    employee_work_password?: StringFieldUpdateOperationsInput | string
    employee_private_email?: NullableStringFieldUpdateOperationsInput | string | null
    employee_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    employee_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee_bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    employee_citizen_identification?: NullableStringFieldUpdateOperationsInput | string | null
    employee_license_plate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type devlogCreateManyTaskInput = {
    id?: number
    hours: number
    overtime?: boolean
    date: Date | string
    note?: string | null
    account_id: number
    project_id: number
  }

  export type devlogUpdateWithoutTaskInput = {
    hours?: IntFieldUpdateOperationsInput | number
    overtime?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    account?: accountUpdateOneRequiredWithoutDevlogNestedInput
    project?: projectUpdateOneRequiredWithoutDevlogNestedInput
  }

  export type devlogUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    overtime?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    account_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
  }

  export type devlogUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    overtime?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    account_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}