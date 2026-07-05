# AutoFillExtensionAbility

AutoFillExtensionAbility模块支持账号、密码、地址等多种数据类型的自动填充与保存，继承自 [ExtensionAbility](arkts-extensionability-c.md#ExtensionAbility)。

**Inheritance:** AutoFillExtensionAbilityextends: ExtensionAbility.

**Since:** 11

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

当AutoFillExtensionAbility从前台转到后台时触发。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

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

AutoFillExtensionAbility创建时触发回调函数。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

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

在AutoFillExtensionAbility销毁时回调，执行资源清理等操作。回调结束直接返回，或者使用Promise异步回调。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

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

## onDestroy

```TypeScript
onDestroy(): Promise<void> | undefined
```

在AutoFillExtensionAbility销毁时回调，执行资源清理等操作。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

## onFillRequest

```TypeScript
onFillRequest(session: UIExtensionContentSession, request: FillRequest, callback: FillRequestCallback): void
```

当发起自动填充请求或者生成密码时触发此回调函数。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| session | UIExtensionContentSession | Yes | AutoFillExtensionAbility界面内容相关信息。 |
| request | FillRequest | Yes | 自动填充数据。 |
| callback | FillRequestCallback | Yes | 自动填充请求回调。 |

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

当AutoFillExtensionAbility从后台转到前台时触发。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

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

当发起自动保存或者手动保存时触发此回调函数。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| session | UIExtensionContentSession | Yes | AutoFillExtensionAbility界面内容相关信息。 |
| request | SaveRequest | Yes | 保存请求数据。 |
| callback | SaveRequestCallback | Yes | 保存请求回调。 |

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

当AutoFillExtensionAbility界面内容对象销毁后调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| session | UIExtensionContentSession | Yes | AutoFillExtensionAbility界面内容相关信息。 |

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

当收到更新请求时触发此回调函数。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | UpdateRequest | Yes | 更新请求。 |

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

AutoFillExtension的上下文环境，继承自ExtensionContext。

**Type:** AutoFillExtensionContext

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

