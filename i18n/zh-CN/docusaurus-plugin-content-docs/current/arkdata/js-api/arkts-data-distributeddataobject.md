# @ohos.data.distributedDataObject

The distributedDataObject module provides basic data object management, including creating, querying, deleting, modifying, and subscribing to data objects, and distributed data object collaboration for the same application among multiple devices. Although this module does not parse user data, you are advised not to transfer sensitive personal data or privacy data due to low-level security of storage path.

**起始版本：** 8

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

## 导入模块

```TypeScript
import { distributedDataObject } from '@kit.ArkData';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [create](arkts-distributeddataobject-create-f.md#create-1) | Creates a distributed data object. The object properties support basic types (number, Boolean, and string) and complex types (array and nested basic types). |
| [createDistributedObject](arkts-distributeddataobject-createdistributedobject-f.md#createDistributedObject-1) | Creates a distributed data object. |
| [genSessionId](arkts-distributeddataobject-gensessionid-f.md#genSessionId-1) | Creates a random session ID. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [BindInfo](arkts-distributeddataobject-bindinfo-i.md) | Represents the information about the joint asset in the RDB store to bind. Currently, only the RDB stores are supported. |
| [DataObject](arkts-distributeddataobject-dataobject-i.md) | Provides APIs for managing a distributed data object. Before using any API of this class, use create() to create a DataObject object. |
| [DistributedObject](arkts-distributeddataobject-distributedobject-i.md) | Provides APIs for managing a distributed data object. Before using any API of this class, use createDistributedObject() to create a DistributedObject object. |
| [RevokeSaveSuccessResponse](arkts-distributeddataobject-revokesavesuccessresponse-i.md) | Represents the information returned by the callback of revokeSave. |
| [SaveSuccessResponse](arkts-distributeddataobject-savesuccessresponse-i.md) | Represents the information returned by the callback of save. . |

### 类型

| 名称 | 描述 |
| --- | --- |
| [DataObserver](arkts-distributeddataobject-dataobserver-t.md) | Defines an observer for obtaining the data change of a distributed object. |
| [ProgressObserver](arkts-distributeddataobject-progressobserver-t.md) | Defines an observer for obtaining the transfer progress. |
| [StatusObserver](arkts-distributeddataobject-statusobserver-t.md) | Defines an observer for obtaining the status change of a distributed object. |

