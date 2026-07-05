# ValueType

```TypeScript
type ValueType = long | double | string | boolean | Array<long> | Array<double> | Array<string> | Array<boolean>
    | Uint8Array | RecordData | bigint
```

Indicates possible value types

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

| 类型 | 说明 |
| --- | --- |
| long | The value is a 64-bit integer. |
| double | The value is a 64-bit floating-point number. |
| string | The value is a string. |
| boolean | The value is true or false. |
| Array&lt;long> |  |
| Array&lt;double> |  |
| Array&lt;string> |  |
| Array&lt;boolean> |  |
| Uint8Array | The value is an array of 8-bit unsigned integers. |
| RecordData | The value is a nested record structure. |
| bigint | The value is an arbitrary-precision integer. |

