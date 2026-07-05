# @ohos.data.distributedDataObject

The distributedDataObject module provides basic data object management, including creating, querying, deleting, modifying, and subscribing to data objects, and distributed data object collaboration for the same application among multiple devices. Although this module does not parse user data, you are advised not to transfer sensitive personal data or privacy data due to low-level security of storage path.

**Since:** 8

**System capability:** SystemCapability.DistributedDataManager.DataObject.DistributedObject

## Modules to Import

```TypeScript
import { distributedDataObject } from '@kit.ArkData';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [create](arkts-distributeddataobject-create-f.md#create-1) | Creates a distributed data object. The object properties support basic types (number, Boolean, and string) and complex types (array and nested basic types). |
| [createDistributedObject](arkts-distributeddataobject-createdistributedobject-f.md#createDistributedObject-1) | Creates a distributed data object. |
| [genSessionId](arkts-distributeddataobject-gensessionid-f.md#genSessionId-1) | Creates a random session ID. |

### Interfaces

| Name | Description |
| --- | --- |
| [BindInfo](arkts-distributeddataobject-bindinfo-i.md) | Represents the information about the joint asset in the RDB store to bind. Currently, only the RDB stores are supported. |
| [DataObject](arkts-distributeddataobject-dataobject-i.md) | Provides APIs for managing a distributed data object. Before using any API of this class, use create() to create a DataObject object. |
| [DistributedObject](arkts-distributeddataobject-distributedobject-i.md) | Provides APIs for managing a distributed data object. Before using any API of this class, use createDistributedObject() to create a DistributedObject object. |
| [RevokeSaveSuccessResponse](arkts-distributeddataobject-revokesavesuccessresponse-i.md) | Represents the information returned by the callback of revokeSave. |
| [SaveSuccessResponse](arkts-distributeddataobject-savesuccessresponse-i.md) | Represents the information returned by the callback of save. . |

### Types

| Name | Description |
| --- | --- |
| [DataObserver](arkts-distributeddataobject-dataobserver-t.md) | Defines an observer for obtaining the data change of a distributed object. |
| [ProgressObserver](arkts-distributeddataobject-progressobserver-t.md) | Defines an observer for obtaining the transfer progress. |
| [StatusObserver](arkts-distributeddataobject-statusobserver-t.md) | Defines an observer for obtaining the status change of a distributed object. |

