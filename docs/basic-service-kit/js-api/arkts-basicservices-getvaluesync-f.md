# getValueSync

## Modules to Import

```TypeScript
import { settings } from '@ohos.settings';
```

## getValueSync

```TypeScript
function getValueSync(dataAbilityHelper: DataAbilityHelper, name: string, defValue: string): string
```

Get value from settingsdata(synchronous method)

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getValueSync

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Applications.Settings.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataAbilityHelper | DataAbilityHelper | Yes | Indicates dataAbilityHelper instance. |
| name | string | Yes | Indicates the name of the character string. |
| defValue | string | Yes | Indicates the default value of the character string. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns settingsdata value. |

**Example**

```TypeScript
import featureAbility from '@ohos.ability.featureAbility';

// Obtain the value of SCREEN_BRIGHTNESS_STATUS (this data item already exists in the database).
let uri:string = settings.getUriSync(settings.display.SCREEN_BRIGHTNESS_STATUS);
let helper = featureAbility.acquireDataAbilityHelper(uri);
let value:string = settings.getValueSync(helper, settings.display.SCREEN_BRIGHTNESS_STATUS, '10');

```


## getValueSync

```TypeScript
function getValueSync(context: Context, name: string, defValue: string): string
```

Get value from settingsdata(synchronous method)

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Applications.Settings.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context. Only UIAbilityContext and ExtensionContext are supported. |
| name | string | Yes | Indicates the name of the character string. |
| defValue | string | Yes | Indicates the default value of the character string. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns settingsdata value. |

**Example**

```TypeScript
import { settings } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the value of SCREEN_BRIGHTNESS_STATUS (this data item already exists in the database).
// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let value = settings.getValueSync(context, settings.display.SCREEN_BRIGHTNESS_STATUS, '10');

```


## getValueSync

```TypeScript
function getValueSync(context: Context, name: string, defValue: string, domainName: string): string
```

Get value from settingsdata(synchronous method). [USER_SECURE] domain need ohos.permission.MANAGE_SECURE_SETTINGS permission.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Applications.Settings.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context. Only UIAbilityContext and ExtensionContext are supported. |
| name | string | Yes | Indicates the name of the character string. |
| defValue | string | Yes | Indicates the default value of the character string. |
| domainName | string | Yes | Indicates the name of the domain name to set. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns settingsdata value. |

**Example**

```TypeScript
import { settings } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Update the value of SCREEN_BRIGHTNESS_STATUS (this data item already exists in the database).
// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let value = settings.getValueSync(context, settings.display.SCREEN_BRIGHTNESS_STATUS, '100',  settings.domainName.DEVICE_SHARED);

```

