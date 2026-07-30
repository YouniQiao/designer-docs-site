# AutoFillExtensionAbility (System API)

The AutoFillExtensionAbility module provides APIs for automatically filling in and saving accounts and passwords. It inherits from [ExtensionAbility](arkts-ability-app-ability-extensionability-extensionability-c.md).

**Inheritance/Implementation:** AutoFillExtensionAbility extends [ExtensionAbility](arkts-ability-app-ability-extensionability-extensionability-c.md)

**Since:** 11

<!--Device-unnamed-declare class AutoFillExtensionAbility extends ExtensionAbility--><!--Device-unnamed-declare class AutoFillExtensionAbility extends ExtensionAbility-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { AutoFillExtensionAbility } from '@kit.AbilityKit';
```

## onBackground

```TypeScript
onBackground(): void
```

Called when this AutoFillExtensionAbility is switched from the foreground to the background.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

<!--Device-AutoFillExtensionAbility-onBackground(): void--><!--Device-AutoFillExtensionAbility-onBackground(): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Example**

```TypeScript
import { AutoFillExtensionAbility } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyAutoFillExtensionAbility extends AutoFillExtensionAbility {
  onBackground() {
    hilog.info(0x0000, 'testTag', '%{public}s', 'onBackground');
  }
}

```

## onCreate

```TypeScript
onCreate(): void
```

Called when an AutoFillExtensionAbility is created.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

<!--Device-AutoFillExtensionAbility-onCreate(): void--><!--Device-AutoFillExtensionAbility-onCreate(): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Example**

```TypeScript
import { AutoFillExtensionAbility } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyAutoFillExtensionAbility extends AutoFillExtensionAbility {
  onCreate() {
    hilog.info(0x0000, 'testTag', '%{public}s', 'onCreate');
  }
}

```

## onDestroy

```TypeScript
onDestroy(): void | Promise<void>
```

Called to clear resources when this AutoFillExtensionAbility is destroyed. This API either returns the result directly or uses a promise to return the result.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

<!--Device-AutoFillExtensionAbility-onDestroy(): void | Promise<void>--><!--Device-AutoFillExtensionAbility-onDestroy(): void | Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Example**

```TypeScript
import { AutoFillExtensionAbility } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyAutoFillExtensionAbility extends AutoFillExtensionAbility {
  onDestroy() {
    hilog.info(0x0000, 'testTag', '%{public}s', 'onDestroy');
  }
}

```

## onFillRequest

```TypeScript
onFillRequest(session: UIExtensionContentSession, request: FillRequest, callback: FillRequestCallback): void
```

Called when an auto-fill request is initiated or a password is generated.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

<!--Device-AutoFillExtensionAbility-onFillRequest(session: UIExtensionContentSession, request: FillRequest, callback: FillRequestCallback): void--><!--Device-AutoFillExtensionAbility-onFillRequest(session: UIExtensionContentSession, request: FillRequest, callback: FillRequestCallback): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| session | [UIExtensionContentSession](arkts-ability-app-ability-uiextensioncontentsession-uiextensioncontentsession-c-sys.md) | Yes | UI content information related to the AutoFillExtensionAbility. |
| request | [FillRequest](arkts-ability-autofillrequest-fillrequest-i-sys.md) | Yes | Data to be automatically filled in. |
| callback | [FillRequestCallback](arkts-ability-autofillrequest-fillrequestcallback-i-sys.md) | Yes | Callback used for the auto-fill request. |

**Example**

```TypeScript
import { AutoFillExtensionAbility, UIExtensionContentSession, autoFillManager, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyAutoFillExtensionAbility extends AutoFillExtensionAbility {
  onFillRequest(session: UIExtensionContentSession,
                request: autoFillManager.FillRequest,
                callback: autoFillManager.FillRequestCallback) {
    hilog.info(0x0000, 'testTag', '%{public}s', 'autofill onFillRequest');
    hilog.info(0x0000, 'testTag', 'fill requestCallback: %{public}s', JSON.stringify(callback));
    hilog.info(0x0000, 'testTag', 'get request viewData: %{public}s', JSON.stringify(request.viewData));
    try {
      let localStorageData: Record<string, UIExtensionContentSession | string | autoFillManager.FillRequestCallback |
      autoFillManager.ViewData | common.AutoFillExtensionContext> = {
        'session': session,
        'message': 'AutoFill Page',
        'fillCallback': callback,
        'viewData': request.viewData,
        'context': this.context
      };
      let storage_fill = new LocalStorage(localStorageData);
      if (session) {
        session.loadContent('pages/SelectorList', storage_fill);
      } else {
        hilog.error(0x0000, 'testTag', '%{public}s', 'session is null');
      }
    } catch (err) {
      hilog.error(0x0000, 'testTag', '%{public}s', 'failed to load content');
    }
  }
}

```

## onForeground

```TypeScript
onForeground(): void
```

Called when this AutoFillExtensionAbility is switched from the background to the foreground.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

<!--Device-AutoFillExtensionAbility-onForeground(): void--><!--Device-AutoFillExtensionAbility-onForeground(): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Example**

```TypeScript
import { AutoFillExtensionAbility } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyAutoFillExtensionAbility extends AutoFillExtensionAbility {
  onForeground() {
    hilog.info(0x0000, 'testTag', '%{public}s', 'onForeground');
  }
}

```

## onSaveRequest

```TypeScript
onSaveRequest(session: UIExtensionContentSession, request: SaveRequest, callback: SaveRequestCallback): void
```

Called when automatic or manual saving is initiated.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

<!--Device-AutoFillExtensionAbility-onSaveRequest(session: UIExtensionContentSession, request: SaveRequest, callback: SaveRequestCallback): void--><!--Device-AutoFillExtensionAbility-onSaveRequest(session: UIExtensionContentSession, request: SaveRequest, callback: SaveRequestCallback): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| session | [UIExtensionContentSession](arkts-ability-app-ability-uiextensioncontentsession-uiextensioncontentsession-c-sys.md) | Yes | UI content information related to the AutoFillExtensionAbility. |
| request | [SaveRequest](arkts-ability-autofillrequest-saverequest-i-sys.md) | Yes | Data to be saved. |
| callback | [SaveRequestCallback](arkts-ability-autofillmanager-saverequestcallback-t-sys.md) | Yes | Callback used for the saving request. |

**Example**

```TypeScript
import { AutoFillExtensionAbility, UIExtensionContentSession, autoFillManager, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyAutoFillExtensionAbility extends AutoFillExtensionAbility {
  onSaveRequest(session : UIExtensionContentSession,
                request : autoFillManager.SaveRequest,
                callback : autoFillManager.SaveRequestCallback) {
    hilog.info(0x0000, 'testTag', '%{public}s', 'onSaveRequest');
    try {
      let localStorageData: Record<string, UIExtensionContentSession | string | autoFillManager.SaveRequestCallback |
      autoFillManager.ViewData | common.AutoFillExtensionContext> = {
        'session': session,
        'message': 'AutoFill Page',
        'fillCallback': callback,
        'viewData': request.viewData,
        'context': this.context,
      };
      let storage_save = new LocalStorage(localStorageData);
      if (session) {
        session.loadContent('pages/SavePage', storage_save);
      } else {
        hilog.error(0x0000, 'testTag', '%{public}s', 'session is null');
      }
    } catch (err) {
      hilog.error(0x0000, 'testTag', '%{public}s', 'failed to load content');
    }
  }
}

```

## onSessionDestroy

```TypeScript
onSessionDestroy(session: UIExtensionContentSession): void
```

Called when a UIExtensionContentSession instance is destroyed for this AutoFillExtensionAbility.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

<!--Device-AutoFillExtensionAbility-onSessionDestroy(session: UIExtensionContentSession): void--><!--Device-AutoFillExtensionAbility-onSessionDestroy(session: UIExtensionContentSession): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| session | [UIExtensionContentSession](arkts-ability-app-ability-uiextensioncontentsession-uiextensioncontentsession-c-sys.md) | Yes | UI content information related to the AutoFillExtensionAbility. |

**Example**

```TypeScript
import { AutoFillExtensionAbility, UIExtensionContentSession } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyAutoFillExtensionAbility extends AutoFillExtensionAbility {
  onSessionDestroy(session : UIExtensionContentSession) {
    hilog.info(0x0000, 'testTag', '%{public}s', 'onSessionDestroy');
  }
}

```

## onUpdateRequest

```TypeScript
onUpdateRequest(request: UpdateRequest): void
```

Called when an update request is received.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-AutoFillExtensionAbility-onUpdateRequest(request: UpdateRequest): void--><!--Device-AutoFillExtensionAbility-onUpdateRequest(request: UpdateRequest): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | [UpdateRequest](arkts-ability-autofillrequest-updaterequest-i-sys.md) | Yes | Update request. |

**Example**

```TypeScript
import { AutoFillExtensionAbility, autoFillManager } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyAutoFillExtensionAbility extends AutoFillExtensionAbility {
  onUpdateRequest(request: autoFillManager.UpdateRequest) {
    hilog.info(0x0000, 'testTag', '%{public}s', 'on update request, view data is: %{public}s',
      JSON.stringify(request.viewData));
  }
}

```

## context

```TypeScript
context: AutoFillExtensionContext
```

Context of the AutoFillExtensionAbility. This context inherits from **ExtensionContext**.

**Type:** AutoFillExtensionContext

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

<!--Device-AutoFillExtensionAbility-context: AutoFillExtensionContext--><!--Device-AutoFillExtensionAbility-context: AutoFillExtensionContext-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

