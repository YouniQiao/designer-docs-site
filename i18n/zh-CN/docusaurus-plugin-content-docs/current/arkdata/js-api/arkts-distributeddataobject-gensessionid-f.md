# genSessionId

## genSessionId

```TypeScript
function genSessionId(): string
```

Creates a random session ID.

**起始版本：** 8

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Session ID created. |

**示例：**

```TypeScript
let sessionId: string = distributedDataObject.genSessionId();

```

