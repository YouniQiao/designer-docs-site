# getPreferencesSync

## Modules to Import

```TypeScript
import { sendablePreferences } from '@kit.ArkData';
```

## getPreferencesSync

```TypeScript
function getPreferencesSync(context: Context, options: Options): Preferences
```

Obtains a **Preferences** instance. This API returns the result synchronously.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-sendablePreferences-function getPreferencesSync(context: Context, options: Options): Preferences--><!--Device-sendablePreferences-function getPreferencesSync(context: Context, options: Options): Preferences-End-->

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Application context. |
| options | [Options](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-zlib-options-i.md) | Yes | Configuration options of the **Preferences** instance. |

**Return value:**

| Type | Description |
| --- | --- |
| [Preferences](arkts-arkdata-preferences-preferences-i.md) | **Preferences** instance obtained.* This instance inherits from [ISendable](../../arkts-utils/arkts-sendable.md#isendable) and can be passed between concurrent ArkTS instances (including the main thread and the TaskPool or Worker threads)by reference. For details, see [Using Sendable Objects](../../arkts-utils/sendable-guide.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [15500000](../errorcode-preferences.md#15500000-internal-error) | Inner error. |
| [15501001](../errorcode-preferences.md#15501001-stage-model-required) | The operations is supported in stage mode only. |
| [15501002](../errorcode-preferences.md#15501002-invalid-datagroupid-parameter-in-options) | Invalid dataGroupId. |

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';

let preferences: sendablePreferences.Preferences;

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    let options: sendablePreferences.Options = { name: 'myStore' };
    preferences = sendablePreferences.getPreferencesSync(this.context, options);
  }
}

```

