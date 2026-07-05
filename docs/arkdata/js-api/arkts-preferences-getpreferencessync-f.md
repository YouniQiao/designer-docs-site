# getPreferencesSync

## getPreferencesSync

```TypeScript
function getPreferencesSync(context: Context, options: Options): Preferences
```

Obtains a **Preferences** instance. This API returns the result synchronously.

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context. For details about the application context of the FA model, see  [Context]./app/context. For details about the application context of the stage model, see  [Context]./application/Context:Context. |
| options | Options | Yes | Configuration options of the Preferences instance. |

**Return value:**

| Type | Description |
| --- | --- |
| Preferences | Preferences instance obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 15501001 | The operations is supported in stage mode only. |
| 15501002 | Invalid dataGroupId. |
| 15500000 | Inner error. [since 11] |

**Example**

```TypeScript
// Obtain the context.
import { featureAbility } from '@kit.AbilityKit';

let context = featureAbility.getContext();
let dataPreferences: preferences.Preferences | null = null;

let options: preferences.Options = { name: 'myStore' };
dataPreferences = preferences.getPreferencesSync(context, options);


import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';

let dataPreferences: preferences.Preferences | null = null;

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    let options: preferences.Options = { name: 'myStore' };
    dataPreferences = preferences.getPreferencesSync(this.context, options);
  }
}

```

