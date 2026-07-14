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
| [create](arkts-arkdata-create-f.md#create-1) | Creates a distributed data object. The object properties support basic types (number, Boolean, and string) and complex types (array and nested basic types). |
| [createDistributedObject](arkts-arkdata-createdistributedobject-f.md#createdistributedobject-1) | Creates a distributed data object. |
| [genSessionId](arkts-arkdata-gensessionid-f.md#gensessionid-1) | Creates a random session ID. |

### Interfaces

| Name | Description |
| --- | --- |
| [BindInfo](arkts-arkdata-bindinfo-i.md) | Represents the information about the joint asset in the RDB store to bind. Currently, only the RDB stores are supported. |
| [DataObject](arkts-arkdata-dataobject-i.md) | Provides APIs for managing a distributed data object. Before using any API of this class, use create() to create a DataObject object. |
| [DistributedObject](arkts-arkdata-distributedobject-i.md) | Provides APIs for managing a distributed data object. Before using any API of this class, use createDistributedObject() to create a DistributedObject object. |
| [RevokeSaveSuccessResponse](arkts-arkdata-revokesavesuccessresponse-i.md) | Represents the information returned by the callback of revokeSave. |
| [SaveSuccessResponse](arkts-arkdata-savesuccessresponse-i.md) | Represents the information returned by the callback of save. . |

### Types

| Name | Description |
| --- | --- |
| [DataObserver](arkts-arkdata-dataobserver-t.md) | Defines an observer for obtaining the data change of a distributed object. |
| [ProgressObserver](arkts-arkdata-progressobserver-t.md) | Defines an observer for obtaining the transfer progress. |
| [StatusObserver](arkts-arkdata-statusobserver-t.md) | Defines an observer for obtaining the status change of a distributed object. |

