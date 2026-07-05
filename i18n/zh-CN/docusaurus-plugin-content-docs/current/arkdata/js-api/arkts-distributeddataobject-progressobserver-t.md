# ProgressObserver

```TypeScript
type ProgressObserver = (sessionId: string, progress: int) => void
```

Defines an observer for obtaining the transfer progress.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sessionId | string | 是 | Session ID of the distributed data object, with a maximum length of 128 bytes. The  value can contain only letters, digits, and underscores (_). |
| progress | int | 是 | Asset transfer progress. The value is an integer ranging from -1 to 100. The value  -1 indicates that the progress fails to be obtained, and the value 100 indicates that the transfer is  complete. |

