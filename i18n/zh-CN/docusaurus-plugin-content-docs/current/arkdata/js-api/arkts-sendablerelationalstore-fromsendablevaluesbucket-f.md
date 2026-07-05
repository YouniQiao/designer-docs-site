# fromSendableValuesBucket

## fromSendableValuesBucket

```TypeScript
function fromSendableValuesBucket(valuesBucket: ValuesBucket): NonSendableBucket
```

Converts a KV pair that can be passed across threads into the data that cannot be passed across threads.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| valuesBucket | ValuesBucket | 是 | Data that can be passed across threads. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| NonSendableBucket | Data that cannot be passed across threads. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 14800000 | Inner error. |

