# StatusObserver

```TypeScript
type StatusObserver = (sessionId: string, networkId: string, status: string) => void
```

Defines an observer for obtaining the status change of a distributed object.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sessionId | string | 是 | Session ID of the distributed data object, with a maximum length of 128 bytes. The  value can contain only letters, digits, and underscores (_). |
| networkId | string | 是 | Network ID of the peer device, with a maximum of 255 bytes. The value must be a non-  empty string. |
| status | string | 是 | Status of the distributed object. The value can be online, offline, or  restore. |

