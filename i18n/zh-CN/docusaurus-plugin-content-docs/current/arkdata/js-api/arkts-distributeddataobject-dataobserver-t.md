# DataObserver

```TypeScript
type DataObserver = (sessionId: string, fields: Array<string>) => void
```

Defines an observer for obtaining the data change of a distributed object.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sessionId | string | 是 | Session ID of the distributed data object, with a maximum length of 128 bytes. The  value can contain only letters, digits, and underscores (_). |
| fields | Array&lt;string> | 是 | Changed properties of the distributed data object, with a maximum length of 128  bytes. The value can be customized and must be a non-empty string. |

