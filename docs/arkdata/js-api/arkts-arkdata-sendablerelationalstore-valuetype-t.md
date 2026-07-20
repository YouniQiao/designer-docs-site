# ValueType

```TypeScript
type ValueType = null | number | string | boolean | collections.Uint8Array | Asset | Assets |
    collections.Float32Array | bigint
```

Defines the types of the value in a KV pair. The type varies with the parameter function.

**Since:** 12

<!--Device-sendableRelationalStore-type ValueType = null | number | string | boolean | collections.Uint8Array | Asset | Assets |
    collections.Float32Array | bigint--><!--Device-sendableRelationalStore-type ValueType = null | number | string | boolean | collections.Uint8Array | Asset | Assets |
    collections.Float32Array | bigint-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

| Type | Description |
| --- | --- |
| null | The value is null. |
| number | The value is a number. |
| string | The value is a string. |
| boolean | The value is **true** or **false**. |
| collections.Uint8Array | The value is a Uint8 array. |
| Asset | The value is an asset.<br>If the value type is **Asset**, the type in the SQL statement for creating a table must be **ASSET**. |
| Assets | The value is an array of assets.<br>If the value type is **Assets**, the type in the SQL statement for creating a table must be **ASSETS**. |
| collections.Float32Array | The value is an array of 32-bit floating-point numbers.<br>If the field type is **collections.Float32Array**, the type in the SQL statement for creating a table mustbe **floatvector(128)**. |
| bigint | The value is an integer of any length.<br>If the value type is bigint, the type in the SQL statement for creating a table must be **UNLIMITED INT**.For details, see [Persisting RDB Store Data](../../../../database/data-persistence-by-rdb-store.md).<br>**NOTE**<br>The bigint type does not support value comparison and cannot be used with the following predicates:**between**, **notBetween**, **greaterThan**, **lessThan**, **greaterThanOrEqualTo**, **lessThanOrEqualTo**,**orderByAsc**, and **orderByDesc**<br>To write a value of bigint type, use **BigInt()** or add **n** to the end of the value, for example,'let data = BigInt(1234)' or 'let data = 1234n'.<br>If data of the number type is written to a bigint field, the type of the return value obtained (queried) isnumber but not bigint. |

