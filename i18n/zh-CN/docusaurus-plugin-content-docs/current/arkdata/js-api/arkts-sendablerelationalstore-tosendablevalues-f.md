# toSendableValues

## toSendableValues

```TypeScript
function toSendableValues(values: NonSendableValues): collections.Array<ValueType>
```

Converts the array data that cannot be passed across threads into the data that can be passed across threads.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| values | NonSendableValues | 是 | Array data that cannot be passed across threads. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| collections.Array&lt;ValueType> | Array data that can be passed across threads. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800000 | Inner error. |

