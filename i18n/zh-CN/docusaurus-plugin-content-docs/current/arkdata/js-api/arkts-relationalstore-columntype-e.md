# ColumnType

```TypeScript
enum ColumnType
```

Enumerates the types of the column data. Use the enum name rather than the enum value.

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## NULL

```TypeScript
NULL = 0
```

The value in the column is null.

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## INTEGER

```TypeScript
INTEGER = 1
```

64-bit integer. The column can hold 8-bit (including Boolean values), 16-bit, 32-bit, and 64-bit integers. If the 64-bit integer is greater than 2^53 or less than -2^53, use [getString](arkts-relationalstore-resultset-i.md#getString) to convert the 64-bit integer to a string.

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## REAL

```TypeScript
REAL = 2
```

The value in the column is a floating point number.

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## TEXT

```TypeScript
TEXT = 3
```

The value in the column is a string.

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## BLOB

```TypeScript
BLOB = 4
```

The value in the column is a Uint8Array.

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## ASSET

```TypeScript
ASSET = 5
```

The value in the column is an asset.

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## ASSETS

```TypeScript
ASSETS = 6
```

The value in the column is an array of assets.

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## FLOAT_VECTOR

```TypeScript
FLOAT_VECTOR = 7
```

The value in the column is a Float32Array.

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## UNLIMITED_INT

```TypeScript
UNLIMITED_INT = 8
```

The value in the column is a bigint.

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

