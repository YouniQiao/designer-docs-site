# ExceptionMessage

Represents an exception message about the SQL statement executed by the database.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## 导入模块

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

## code

```TypeScript
code: int
```

Error code returned by the executed SQL statement. For details about the values and meanings, see [SQLite Error Codes](https://www.sqlite.org/rescode.html).

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## message

```TypeScript
message: string
```

Exception message returned by the executed SQL statement.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## sql

```TypeScript
sql: string
```

SQL statement that reports the error.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

