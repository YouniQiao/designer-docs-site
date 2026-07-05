# @ohos.app.ability.dialogRequest

The dialogRequest module provides APIs related to modal dialog box processing, including obtaining the request information (used to bind a modal dialog box) and request callback (used to set the request result). A modal dialog box is a system-level dialog box that blocks interactions such as mouse clicks, keyboard input, and touch events on the underlying page. The page can only be interacted with after the modal dialog box is closed. > **NOTE** > > - The APIs provided by this module are used in ServiceExtensionAbilities. For a ServiceExtensionAbility that > implements modal dialog boxes, you can use the APIs to obtain the request information and request callback and > return the request result.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { dialogRequest } from '@ohos.app.ability.dialogRequest';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getRequestCallback](arkts-ability-getrequestcallback-f.md#getrequestcallback-1) | Obtains the request callback from Want. &gt; **NOTE** &gt; &gt; This API can be used by a ServiceExtensionAbility. If the ServiceExtensionAbility implements modal dialog boxes, &gt; the request callback can be obtained from Want. If this API is used in other scenarios, no return value is &gt; obtained. |
| [getRequestInfo](arkts-ability-getrequestinfo-f.md#getrequestinfo-1) | &gt; **NOTE** &gt; &gt; This API can be used by a ServiceExtensionAbility. If the ServiceExtensionAbility implements modal dialog boxes, &gt; the request information can be obtained from Want. If this API is used in other scenarios, no return value is &gt; obtained. Obtains the request information from Want. |

### Interfaces

| Name | Description |
| --- | --- |
| [RequestCallback](arkts-ability-requestcallback-i.md) | Provides a callback for setting the modal dialog box request result. |
| [RequestInfo](arkts-ability-requestinfo-i.md) | Defines the request information, which is used as an input parameter for binding the modal dialog box. |
| [RequestResult](arkts-ability-requestresult-i.md) | Defines the result of the request for the modal dialog box. It contains **ResultCode** and **ResultWant**. |
| [WindowRect](arkts-ability-windowrect-i.md) | Defines the location attributes of a modal dialog box. |

### Enums

| Name | Description |
| --- | --- |
| [ResultCode](arkts-ability-resultcode-e.md) | Enumerates the result codes of the request for the modal dialog box. |

