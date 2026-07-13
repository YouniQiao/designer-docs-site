# wantAgent

The WantAgent module provides APIs for creating and comparing WantAgent objects, and obtaining the user ID and bundle
name of a WantAgent object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** wantAgent/wantAgent

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getBundleName](arkts-ability-getbundlename-depr-f.md#getbundlename-1) | Obtains the bundle name of a WantAgent. |
| [getBundleName](arkts-ability-getbundlename-depr-f.md#getbundlename-2) | Obtains the bundle name of a WantAgent. |
| [getUid](arkts-ability-getuid-depr-f.md#getuid-1) | Obtains the UID of a WantAgent. |
| [getUid](arkts-ability-getuid-depr-f.md#getuid-2) | Obtains the UID of a WantAgent. |
| [cancel](arkts-ability-cancel-depr-f.md#cancel-1) | Cancel a WantAgent. Only the application that creates the WantAgent can cancel it. |
| [cancel](arkts-ability-cancel-depr-f.md#cancel-2) | Cancel a WantAgent. Only the application that creates the WantAgent can cancel it. |
| [trigger](arkts-ability-trigger-depr-f.md#trigger-1) | Triggers a WantAgent. |
| [equal](arkts-ability-equal-depr-f.md#equal-1) | Checks whether two WantAgent objects are equal. |
| [equal](arkts-ability-equal-depr-f.md#equal-2) | Checks whether two WantAgent objects are equal. |
| [getWantAgent](arkts-ability-getwantagent-depr-f.md#getwantagent-1) | Obtains a WantAgent object. |
| [getWantAgent](arkts-ability-getwantagent-depr-f.md#getwantagent-2) | Obtains a WantAgent object. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getWant](arkts-ability-getwant-depr-f-sys.md#getwant-1) | Obtains the {@link Want} of an {@link WantAgent}. |
| [getWant](arkts-ability-getwant-depr-f-sys.md#getwant-2) | Obtains the {@link Want} of an {@link WantAgent}. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [CompleteData](arkts-ability-completedata-depr-i.md) | Describes the data returned by after wantAgent.trigger is called. |

### Enums

| Name | Description |
| --- | --- |
| [WantAgentFlags](arkts-ability-wantagentflags-depr-e.md) | Enumerates flags for using a WantAgent. |
| [OperationType](arkts-ability-operationtype-depr-e.md) | Identifies the operation for using a WantAgent, such as starting an ability or sending a common event. |

