# fromSendableValues

## fromSendableValues

```TypeScript
function fromSendableValues(values: collections.Array<ValueType>): NonSendableValues
```

Converts the array data that can be passed across threads into the data that cannot be passed across threads.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| values | collections.Array&lt;ValueType> | 是 | Array data that can be passed across threads. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| NonSendableValues | Array data that cannot be passed across threads. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800000 | Inner error. |

