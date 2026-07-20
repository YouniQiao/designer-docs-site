# getValue

## Modules to Import

```TypeScript
import { settings } from '@kit.BasicServicesKit';
```

## getValue

```TypeScript
function getValue(dataAbilityHelper: DataAbilityHelper, name: string, callback: AsyncCallback<object>): void
```

Obtains the value of a specified character string in the database.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getValue

**Model restriction:** This API can be used only in the FA model.

<!--Device-settings-function getValue(dataAbilityHelper: DataAbilityHelper, name: string, callback: AsyncCallback<object>): void--><!--Device-settings-function getValue(dataAbilityHelper: DataAbilityHelper, name: string, callback: AsyncCallback<object>): void-End-->

**System capability:** SystemCapability.Applications.Settings.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataAbilityHelper | [DataAbilityHelper](../../apis-ability-kit/arkts-apis/arkts-ability-dataabilityhelper-dataabilityhelper-i.md) | Yes | Indicates the {@link ohos.aafwk.ability.DataAbilityHelper} used to access the database. |
| name | string | Yes | Indicates the name of the character string. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<object> | Yes | The callback of getValue result. |

**Example**

```TypeScript
import featureAbility from '@ohos.ability.featureAbility';

let uri:string = settings.getUriSync(settings.display.SCREEN_BRIGHTNESS_STATUS);
let helper = featureAbility.acquireDataAbilityHelper(uri);
settings.getValue(helper, settings.display.SCREEN_BRIGHTNESS_STATUS, (err:Error, value:string) => {
    if (err) {
        console.error(`Failed to get the setting. ${err.message} `);
        return;
    }
    console.info(`callback:value -> ${JSON.stringify(value)}`)
});

```


## getValue

```TypeScript
function getValue(dataAbilityHelper: DataAbilityHelper, name: string): Promise<object>
```

Obtains the value of a specified character string in the database.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getValue

**Model restriction:** This API can be used only in the FA model.

<!--Device-settings-function getValue(dataAbilityHelper: DataAbilityHelper, name: string): Promise<object>--><!--Device-settings-function getValue(dataAbilityHelper: DataAbilityHelper, name: string): Promise<object>-End-->

**System capability:** SystemCapability.Applications.Settings.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataAbilityHelper | [DataAbilityHelper](../../apis-ability-kit/arkts-apis/arkts-ability-dataabilityhelper-dataabilityhelper-i.md) | Yes | Indicates the {@link ohos.aafwk.ability.DataAbilityHelper} used to access the database. |
| name | string | Yes | Indicates the name of the character string. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<object> | Returns the value of the character string in the domain if any is found; returns {@code null} otherwise. |

**Example**

```TypeScript
import featureAbility from '@ohos.ability.featureAbility';

let uri:string = settings.getUriSync(settings.display.SCREEN_BRIGHTNESS_STATUS);
let helper = featureAbility.acquireDataAbilityHelper(uri);
settings.getValue(helper, settings.display.SCREEN_BRIGHTNESS_STATUS).then((value:string) => {
    console.info(`promise:value -> ${JSON.stringify(value)}`)
});

```


## getValue

```TypeScript
function getValue(context: Context, name: string, callback: AsyncCallback<string>): void
```

Get value from settingsdata

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

<!--Device-settings-function getValue(context: Context, name: string, callback: AsyncCallback<string>): void--><!--Device-settings-function getValue(context: Context, name: string, callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Applications.Settings.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Application context. Only UIAbilityContext and ExtensionContext are supported. |
| name | string | Yes | Indicates the name of the character string. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<string> | Yes | The callback of getValue result. |

**Example**

```TypeScript
import { settings } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
settings.getValue(context, settings.display.SCREEN_BRIGHTNESS_STATUS, (err, value) => {
  if (err) {
    console.error(`Failed to get the setting. ${err.message} `);
    return;
  }
  console.info(`callback:value -> ${value}`)
});

```


## getValue

```TypeScript
function getValue(context: Context, name: string): Promise<string>
```

Get value from settingsdata

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

<!--Device-settings-function getValue(context: Context, name: string): Promise<string>--><!--Device-settings-function getValue(context: Context, name: string): Promise<string>-End-->

**System capability:** SystemCapability.Applications.Settings.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Application context. Only UIAbilityContext and ExtensionContext are supported. |
| name | string | Yes | Indicates the name of the character string. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Returns the value of the character string in the domain if any is found; returns {@code null} otherwise. |

**Example**

```TypeScript
import { settings } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
settings.getValue(context, settings.display.SCREEN_BRIGHTNESS_STATUS).then((value) => {
  console.info(`promise:value -> ${value}`)
});

```


## getValue

```TypeScript
function getValue(context: Context, name: string, domainName: string): Promise<string>
```

Get value from settingsdata [USER_SECURE] domain need ohos.permission.MANAGE_SECURE_SETTINGS permission.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

<!--Device-settings-function getValue(context: Context, name: string, domainName: string): Promise<string>--><!--Device-settings-function getValue(context: Context, name: string, domainName: string): Promise<string>-End-->

**System capability:** SystemCapability.Applications.Settings.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Application context. Only UIAbilityContext and ExtensionContext are supported. |
| name | string | Yes | Indicates the name of the character string. |
| domainName | string | Yes | Indicates the name of the domain name to set. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Returns the value of the character string in the domain if any is found; returns {@code null} otherwise. |

**Example**

```TypeScript
import { settings } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Update the value of SCREEN_BRIGHTNESS_STATUS. (As this data item exists in the database, the getValue API will update its value.)
// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
settings.getValue(context, settings.display.SCREEN_BRIGHTNESS_STATUS, settings.domainName.DEVICE_SHARED).then((value) => {
  console.info(`Promise:value -> ${value}`);
});

```

