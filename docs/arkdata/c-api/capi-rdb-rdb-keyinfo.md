# Rdb_KeyInfo

```c
typedef struct Rdb_KeyInfo {...} Rdb_KeyInfo
```

## Overview

Describes the primary keys or row-ids of changed rows.

**Since**: 11

**Related module**: [RDB](capi-rdb.md)

**Header file**: [relational_store.h](capi-relational-store-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| int count | Indicates the count of the primary keys or row-ids. |
| int type | Indicates data type [OH_ColumnType](capi-oh-data-value-h.md#oh_columntype) of the key. |
| union Rdb_KeyData | Indicates the data of the key info. |


