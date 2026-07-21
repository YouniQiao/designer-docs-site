# getPreferences

## Modules to Import

```TypeScript
import { preferences } from '@kit.ArkData';
```

<a id="getpreferences"></a>
## getPreferences

```TypeScript
function getPreferences(context: Context, name: string, callback: AsyncCallback<Preferences>): void
```

Obtains a **Preferences** instance. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-preferences-function getPreferences(context: Context, name: string, callback: AsyncCallback<Preferences>): void--><!--Device-preferences-function getPreferences(context: Context, name: string, callback: AsyncCallback<Preferences>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Application context.<br>For details about the application context of the FA model, see [Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-context-depr-i.md).<br>For details about the application context of the stage model, see [Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-c.md). |
| name | string | Yes | Name of the **Preferences** instance. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Preferences&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and the **Preferences** instance obtained is returned. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [15500000](../errorcode-preferences.md#15500000-internal-error) | Inner error.<br>**Applicable version:** 11 and later |

**Example**

FA model:

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let context = featureAbility.getContext();
let dataPreferences: preferences.Preferences | null = null;

preferences.getPreferences(context, 'myStore', (err: BusinessError, val: preferences.Preferences) => {
  if (err) {
    console.error("Failed to get preferences. code =" + err.code + ", message =" + err.message);
    return;
  }
  dataPreferences = val;
  console.info("Succeeded in getting preferences.");
})

```

Stage model:

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

let dataPreferences: preferences.Preferences | null = null;

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    preferences.getPreferences(this.context, 'myStore', (err: BusinessError, val: preferences.Preferences) => {
      if (err) {
        console.error("Failed to get preferences. code =" + err.code + ", message =" + err.message);
        return;
      }
      dataPreferences = val;
      console.info("Succeeded in getting preferences.");
    })
  }
}

```


<a id="getpreferences-1"></a>
## getPreferences

```TypeScript
function getPreferences(context: Context, options: Options, callback: AsyncCallback<Preferences>): void
```

Obtains a **Preferences** instance. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-preferences-function getPreferences(context: Context, options: Options, callback: AsyncCallback<Preferences>): void--><!--Device-preferences-function getPreferences(context: Context, options: Options, callback: AsyncCallback<Preferences>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Application context.<br>For details about the application context of the FA model, see [Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-context-depr-i.md).<br>For details about the application context of the stage model, see [Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-c.md). |
| options | [Options](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-zlib-options-i.md) | Yes | Configuration options of the **Preferences** instance. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Preferences&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and the **Preferences** instance obtained is returned. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [15501001](../errorcode-preferences.md#15501001-stage-model-required) | The operations is supported in stage mode only. |
| [15501002](../errorcode-preferences.md#15501002-invalid-datagroupid-parameter-in-options) | Invalid dataGroupId. |
| [15500000](../errorcode-preferences.md#15500000-internal-error) | Inner error.<br>**Applicable version:** 11 and later |

**Example**

FA model:

```TypeScript
// Obtain the context.
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let context = featureAbility.getContext();
let dataPreferences: preferences.Preferences | null = null;

let options: preferences.Options = { name: 'myStore' };
preferences.getPreferences(context, options, (err: BusinessError, val: preferences.Preferences) => {
  if (err) {
    console.error("Failed to get preferences. code =" + err.code + ", message =" + err.message);
    return;
  }
  dataPreferences = val;
  console.info("Succeeded in getting preferences.");
})

```

Stage model:

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

let dataPreferences: preferences.Preferences | null = null;

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    let options: preferences.Options = { name: 'myStore' };
    preferences.getPreferences(this.context, options, (err: BusinessError, val: preferences.Preferences) => {
      if (err) {
        console.error("Failed to get preferences. code =" + err.code + ", message =" + err.message);
        return;
      }
      dataPreferences = val;
      console.info("Succeeded in getting preferences.");
    })
  }
}

```


<a id="getpreferences-2"></a>
## getPreferences

```TypeScript
function getPreferences(context: Context, name: string): Promise<Preferences>
```

Obtains a **Preferences** instance. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-preferences-function getPreferences(context: Context, name: string): Promise<Preferences>--><!--Device-preferences-function getPreferences(context: Context, name: string): Promise<Preferences>-End-->

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Application context.<br>For details about the application context of the FA model, see [Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-context-depr-i.md).<br>For details about the application context of the stage model, see [Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-c.md). |
| name | string | Yes | Name of the **Preferences** instance. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Preferences&gt; | Promise used to return the **Preferences** instance obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [15500000](../errorcode-preferences.md#15500000-internal-error) | Inner error.<br>**Applicable version:** 11 and later |

**Example**

FA model:

```TypeScript
// Obtain the context.
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let context = featureAbility.getContext();

let dataPreferences: preferences.Preferences | null = null;
let promise = preferences.getPreferences(context, 'myStore');
promise.then((object: preferences.Preferences) => {
  dataPreferences = object;
  console.info("Succeeded in getting preferences.");
}).catch((err: BusinessError) => {
  console.error("Failed to get preferences. code =" + err.code + ", message =" + err.message);
})

```

Stage model:

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

let dataPreferences: preferences.Preferences | null = null;

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    let promise = preferences.getPreferences(this.context, 'myStore');
    promise.then((object: preferences.Preferences) => {
      dataPreferences = object;
      console.info("Succeeded in getting preferences.");
    }).catch((err: BusinessError) => {
      console.error("Failed to get preferences. code =" + err.code + ", message =" + err.message);
    })
  }
}

```


<a id="getpreferences-3"></a>
## getPreferences

```TypeScript
function getPreferences(context: Context, options: Options): Promise<Preferences>
```

Obtains a **Preferences** instance. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-preferences-function getPreferences(context: Context, options: Options): Promise<Preferences>--><!--Device-preferences-function getPreferences(context: Context, options: Options): Promise<Preferences>-End-->

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Application context.<br>For details about the application context of the FA model, see [Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-context-depr-i.md).<br>For details about the application context of the stage model, see [Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-c.md). |
| options | [Options](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-zlib-options-i.md) | Yes | Configuration options of the **Preferences** instance. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Preferences&gt; | Promise used to return the **Preferences** instance obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [15501001](../errorcode-preferences.md#15501001-stage-model-required) | The operations is supported in stage mode only. |
| [15501002](../errorcode-preferences.md#15501002-invalid-datagroupid-parameter-in-options) | Invalid dataGroupId. |
| [15500000](../errorcode-preferences.md#15500000-internal-error) | Inner error.<br>**Applicable version:** 11 and later |

**Example**

FA model:

```TypeScript
// Obtain the context.
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let context = featureAbility.getContext();

let dataPreferences: preferences.Preferences | null = null;
let options: preferences.Options = { name: 'myStore' };
let promise = preferences.getPreferences(context, options);
promise.then((object: preferences.Preferences) => {
  dataPreferences = object;
  console.info("Succeeded in getting preferences.");
}).catch((err: BusinessError) => {
  console.error("Failed to get preferences. code =" + err.code + ", message =" + err.message);
})

```

Stage model:

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

let dataPreferences: preferences.Preferences | null = null;

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    let options: preferences.Options = { name: 'myStore' };
    let promise = preferences.getPreferences(this.context, options);
    promise.then((object: preferences.Preferences) => {
      dataPreferences = object;
      console.info("Succeeded in getting preferences.");
    }).catch((err: BusinessError) => {
      console.error("Failed to get preferences. code =" + err.code + ", message =" + err.message);
    })
  }
}

```

