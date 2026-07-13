# wantAgent

The WantAgent module encapsulates a [Want](arkts-ability-want-c.md) object, enabling an application to
trigger a WantAgent object to perform specified operations (such as starting an ability or publishing a common event)
at a future time.

The module provides the APIs for creating a WantAgent object, obtaining the bundle name and UID of the application to
which a WantAgent object belongs, proactively triggering a WantAgent object, and checking whether two WantAgent
objects are the same. A typical use scenario of WantAgent is notification processing. For example, when a user
touches a notification, the [trigger](arkts-ability-trigger-f.md#trigger-1) API of WantAgent is triggered and the target application is
started. For details, see [Notification](../../../../notification/notification-with-wantagent.md).

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { WantAgent } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getBundleName](arkts-ability-getbundlename-f.md#getbundlename-1) | Obtains the bundle name of a WantAgent object.This API uses an asynchronous callback to return the result. |
| [getBundleName](arkts-ability-getbundlename-f.md#getbundlename-2) | Obtains the bundle name of a WantAgent object.This API uses a promise to return the result. |
| [getUid](arkts-ability-getuid-f.md#getuid-1) | Obtains the user ID of a WantAgent object.This API uses an asynchronous callback to return the result. |
| [getUid](arkts-ability-getuid-f.md#getuid-2) | Obtains the user ID of a WantAgent object.This API uses a promise to return the result. |
| [cancel](arkts-ability-cancel-f.md#cancel-1) | Cancels a WantAgent object.This API uses an asynchronous callback to return the result. |
| [cancel](arkts-ability-cancel-f.md#cancel-2) | Cancels a WantAgent object.This API uses a promise to return the result. |
| [trigger](arkts-ability-trigger-f.md#trigger-1) | Proactively triggers a WantAgent object.This API uses an asynchronous callback to return the result. |
| [equal](arkts-ability-equal-f.md#equal-1) | Checks whether two WantAgent objects are equal, so as to determine whether the same operation is from thesame application.This API uses an asynchronous callback to return the result. |
| [equal](arkts-ability-equal-f.md#equal-2) | Checks whether two WantAgent objects are equal, so as to determine whether the same operation is from thesame application.This API uses a promise to return the result. |
| [getWantAgent](arkts-ability-getwantagent-f.md#getwantagent-1) | Obtains a WantAgent object.This API uses an asynchronous callback to return the result.If the creation fails, a null WantAgent object is returned.&lt;p&gt;**NOTE**:<br>Third-party applications can set only their own abilities.&lt;/p&gt; |
| [getWantAgent](arkts-ability-getwantagent-f.md#getwantagent-2) | Obtains a WantAgent object.This API uses a promise to return the result.If the creation fails, a null WantAgent object is returned.&lt;p&gt;**NOTE**:<br>Third-party applications can set only their own abilities.&lt;/p&gt; |
| [getOperationType](arkts-ability-getoperationtype-f.md#getoperationtype-1) | Obtains the operation type of a WantAgent object.This API uses an asynchronous callback to return the result. |
| [getOperationType](arkts-ability-getoperationtype-f.md#getoperationtype-2) | Obtains the operation type of a WantAgent object.This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getWant](arkts-ability-getwant-f-sys.md#getwant-1) | Obtains the Want in a WantAgent object.This API uses an asynchronous callback to return the result. |
| [getWant](arkts-ability-getwant-f-sys.md#getwant-2) | Obtains the Want in a WantAgent object.This API uses a promise to return the result. |
| [triggerAsync](arkts-ability-triggerasync-f-sys.md#triggerasync-1) | Asynchronously triggers a predefined operation encration encapsulated in a Wantagent with specified triggerinformation.If the specified wantAgent is local, you need to apply for permission:ohos.permission.TRIGGER_LOCAL_WANTAGENT permission. |
| [setWantAgentMultithreading](arkts-ability-setwantagentmultithreading-f-sys.md#setwantagentmultithreading-1) | Enables or disables the WantAgent multithreading feature. |
| [createLocalWantAgent](arkts-ability-createlocalwantagent-f-sys.md#createlocalwantagent-1) | Create a local WantAgent object.The WantAgent created by this interface stores data on the client sideand is not managed by the WantAgent servcer.If this WantAgent object is passed across processes,its contained data will be serialized and transmitted to the target process. |
| [isLocalWantAgent](arkts-ability-islocalwantagent-f-sys.md#islocalwantagent-1) | Checks whether the specified WantAgent is local. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [CompleteData](arkts-ability-completedata-i.md) | Describes the data returned by the operation of proactive triggering a WantAgent object. |

### Enums

| Name | Description |
| --- | --- |
| [WantAgentFlags](arkts-ability-wantagentflags-e.md) | Enumerates the flags used by the WantAgent objects. |
| [OperationType](arkts-ability-operationtype-e.md) | Enumerates the operation types of the WantAgent objects. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [OperationType](arkts-ability-operationtype-e-sys.md) | Enumerates the operation types of the WantAgent objects. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [TriggerInfo](arkts-ability-triggerinfo-t.md) | Defines the TriggerInfo object. |
| [WantAgentInfo](arkts-ability-wantagentinfo-t.md) | Defines the WantAgentInfo object. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [LocalWantAgentInfo](arkts-ability-localwantagentinfo-t-sys.md) | Provides the information required to create a local WantAgent. |
<!--DelEnd-->

