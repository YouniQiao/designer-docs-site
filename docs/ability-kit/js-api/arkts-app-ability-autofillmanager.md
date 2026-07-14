# @ohos.app.ability.autoFillManager

The autoFillManager module provides APIs for saving accounts and passwords. Unlike the system's auto-save feature that triggers during page transitions, this feature requires manual activation by the user. For example, the user must input their account and password on a website and click the **Save** button to initiate the saving process.

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

## Modules to Import

```TypeScript
import { autoFillManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [requestAutoFill](arkts-ability-requestautofill-f.md#requestautofill-1) | Trigger an auto fill request. |
| [requestAutoSave](arkts-ability-requestautosave-f.md#requestautosave-1) | Requests to automatically save the widget data. This API uses an asynchronous callback to return the result. If the current widget does not support widget switching, you can call this API to save historical widget input data. The callback is triggered when the auto-save request is complete. |
| [requestAutoSave](arkts-ability-requestautosave-f.md#requestautosave-2) | Trigger an auto save request. |

### Interfaces

| Name | Description |
| --- | --- |
| [AutoFillCallback](arkts-ability-autofillcallback-i.md) | Auto fill callback. |
| [AutoSaveCallback](arkts-ability-autosavecallback-i.md) | Implements callbacks triggered when auto-save is complete. |

### Types

| Name | Description |
| --- | --- |
| [FillFailureResult](arkts-ability-fillfailureresult-t.md) | The interface of filling failure result. |
| [OnFillFailureFn](arkts-ability-onfillfailurefn-t.md) | Called when auto fill request is failed to be handled. |
| [OnFillSuccessFn](arkts-ability-onfillsuccessfn-t.md) | Called when auto fill request is successfully handled. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [AutoFillPopupConfig](arkts-ability-autofillpopupconfig-t-sys.md) | Defines the size and position information of an auto-fill pop-up. |
| [AutoFillRect](arkts-ability-autofillrect-t-sys.md) | Defines the rectangle used for auto-fill. |
| [CustomData](arkts-ability-customdata-t-sys.md) | Defines the custom data. |
| [FillRequest](arkts-ability-fillrequest-t-sys.md) | Defines the information about an auto-fill request. |
| [FillRequestCallback](arkts-ability-fillrequestcallback-t-sys.md) | Defines the callback for an auto-fill request, which is used to automatically fill in or generate a password. The callback can be used to notify the client of the success or failure of the request. |
| [FillResponse](arkts-ability-fillresponse-t-sys.md) | Defines the information about the response to an auto-fill request. |
| [PageNodeInfo](arkts-ability-pagenodeinfo-t-sys.md) | Defines the page node information used for auto-fill. |
| [PopupSize](arkts-ability-popupsize-t-sys.md) | Defines the width and height of an auto-fill pop-up. |
| [SaveRequest](arkts-ability-saverequest-t-sys.md) | Defines the information about an auto-save request. |
| [SaveRequestCallback](arkts-ability-saverequestcallback-t-sys.md) | Defines the callback for an automatic or a manual saving request. |
| [UpdateRequest](arkts-ability-updaterequest-t-sys.md) | Defines the information about an auto-update request. |
| [ViewData](arkts-ability-viewdata-t-sys.md) | Defines the view data used for auto-fill. |
<!--DelEnd-->

