# InputMethodExtensionContext

The **InputMethodExtensionContext** module, inherited from **ExtensionContext**, provides context for **InputMethodExtension** abilities. You can use the APIs of this module to start, terminate, connect, and disconnect abilities. > **NOTE** > > - The APIs of this module can be used only in the stage model.

**Inheritance:** InputMethodExtensionContextextends: ExtensionContext.

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { InputMethodExtensionContext } from '@kit.IMEKit';
```

## connectAbility

```TypeScript
connectAbility(want: Want, options: ConnectOptions): number
```

Connects this ability to a ServiceExtensionAbility.

**Since:** 9

**Deprecated since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want information about the target ability, such as the ability name and bundle name. |
| options | ConnectOptions | Yes | Callback used to return the information indicating that the connection is  successful, interrupted, or failed. |

**Return value:**

| Type | Description |
| --- | --- |
| number | A number, based on which the connection will be interrupted. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000005 | The specified process does not have the permission. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed.  2. System service failed to communicate with dependency module. |
| 16000002 | Incorrect ability type. [since 10] |
| 16000004 | Cannot start an invisible component. [since 10] |
| 16000006 | Cross-user operations are not allowed. [since 10] |
| 16000008 | The crowdtesting application expires. [since 10] |
| 16000053 | The ability is not on the top of the UI. [since 10] |
| 16000055 | Installation-free timed out. [since 10] |

## connectAbilityWithAccount

```TypeScript
connectAbilityWithAccount(want: Want, accountId: number): number
```

Connects to a ServiceExtensionAbility with a specified account.

**Since:** 9

**Deprecated since:** 10

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want information about the target ability. |
| accountId | number | Yes | ID of the target system account. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Result code of the connection. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000005 | The specified process does not have the permission. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed.  2. System service failed to communicate with dependency module. |
| 16000002 | Incorrect ability type. [since 10] |
| 16000004 | Cannot start an invisible component. [since 10] |
| 16000006 | Cross-user operations are not allowed. [since 10] |
| 16000008 | The crowdtesting application expires. [since 10] |
| 16000053 | The ability is not on the top of the UI. [since 10] |
| 16000055 | Installation-free timed out. [since 10] |

## connectServiceExtensionAbility

```TypeScript
connectServiceExtensionAbility(want: Want, options: ConnectOptions): number
```

Connects this ability to a ServiceExtensionAbility.

**Since:** 9

**Deprecated since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want information about the target ability, such as the ability name and bundle name. |
| options | ConnectOptions | Yes | Callback used to return the information indicating that the connection is  successful, interrupted, or failed. |

**Return value:**

| Type | Description |
| --- | --- |
| number | A number, based on which the connection will be interrupted. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000005 | The specified process does not have the permission. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed.  2. System service failed to communicate with dependency module. |
| 16000002 | Incorrect ability type. [since 10] |
| 16000004 | Cannot start an invisible component. [since 10] |
| 16000006 | Cross-user operations are not allowed. [since 10] |
| 16000008 | The crowdtesting application expires. [since 10] |
| 16000053 | The ability is not on the top of the UI. [since 10] |
| 16000055 | Installation-free timed out. [since 10] |

## destroy

```TypeScript
destroy(callback: AsyncCallback<void>): void
```

Destroys this input method. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**Example**

```TypeScript
import { InputMethodExtensionAbility, InputMethodExtensionContext } from '@kit.IMEKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

class InputMethodExtAbility extends InputMethodExtensionAbility {
  onCreate(want: Want): void {
    console.info('onCreate, want:' + want.abilityName);
  }

  onDestroy() {
    this.context.destroy((err: BusinessError) => {
      if (err) {
        console.error(`Failed to destroy context, err code = ${err.code}`);
        return;
      }
      console.info('Succeeded in destroying context.');
    });
  }
}

```

## destroy

```TypeScript
destroy(): Promise<void>
```

Destroys this input method. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Example**

```TypeScript
import { InputMethodExtensionAbility, InputMethodExtensionContext } from '@kit.IMEKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

class InputMethodExtAbility extends InputMethodExtensionAbility {
  onCreate(want: Want): void {
    console.info('onCreate, want:' + want.abilityName);
  }

  onDestroy() {
    this.context.destroy().then(() => {
      console.info('Succeed in destroying context.');
    }).catch((err: BusinessError)=>{
      console.error(`Failed to destroy context, err code = ${err.code}`);
    });
  }
}

```

## disconnectAbility

```TypeScript
disconnectAbility(connection: number, callback: AsyncCallback<void>): void
```

Disconnects this ability from a ServiceExtensionAbility and after the successful disconnection, sets the remote object returned upon the connection to void. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connection | number | Yes | Number returned after connectServiceExtensionAbility is called. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If disconnection is successful,  err is undefined. Otherwise, err is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed.  2. System service failed to communicate with dependency module. |

## disconnectAbility

```TypeScript
disconnectAbility(connection: number): Promise<void>
```

Disconnects this ability from a ServiceExtensionAbility and after the successful disconnection, sets the remote object returned upon the connection to void. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connection | number | Yes | Number returned after connectServiceExtensionAbility is called. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed.  2. System service failed to communicate with dependency module. |

## disconnectServiceExtensionAbility

```TypeScript
disconnectServiceExtensionAbility(connection: number, callback: AsyncCallback<void>): void
```

Disconnects this ability from a ServiceExtensionAbility and after the successful disconnection, sets the remote object returned upon the connection to void. This API can be called only on the main thread. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connection | number | Yes | Number returned after connectServiceExtensionAbility is called. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If disconnection is successful,  err is undefined. Otherwise, err is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed.  2. System service failed to communicate with dependency module. |

## disconnectServiceExtensionAbility

```TypeScript
disconnectServiceExtensionAbility(connection: number): Promise<void>
```

Disconnects this ability from a ServiceExtensionAbility and after the successful disconnection, sets the remote object returned upon the connection to void. This API can be called only on the main thread. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connection | number | Yes | Number returned after connectServiceExtensionAbility is called. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed.  2. System service failed to communicate with dependency module. |

## startAbility

```TypeScript
startAbility(want: Want): Promise<void>
```

Starts an ability. This API uses a promise to return the result.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want information, including the ability name and bundle name of the target application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000019 | No matching ability is found. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16000061 | Operation not supported. |
| 16000069 | The extension cannot start the third party application. |
| 16000070 | The extension cannot start the service. |
| 16200001 | The caller has been released. |

**Example**

```TypeScript
import { InputMethodExtensionAbility, InputMethodExtensionContext } from '@kit.IMEKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

class InputMethodExtAbility extends InputMethodExtensionAbility {
  onCreate(want: Want): void {
    const context: InputMethodExtensionContext = this.context;
    const targetWant: Want = {
      bundleName: "com.example.aafwk.test",
      abilityName: "com.example.aafwk.test.TwoAbility"
    };

    context.startAbility(targetWant)
      .then(() => console.info('startAbility success'))
      .catch((err: BusinessError) => {
        console.error(`StartAbility failed. Code: ${err.code}, Message: ${err.message}`);
      });
  }

  onDestroy() {
    this.context.destroy().then(() => {
      console.info('Succeed in destroying context.');
    }).catch((err: BusinessError) => {
      console.error(`Failed to destroy context, err code = ${err.code}`);
    });
  }
}

```

## startAbilityWithAccount

```TypeScript
startAbilityWithAccount(want: Want, accountId: number, callback: AsyncCallback<void>): void
```

Starts an ability with a specified account. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 10

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want information about the target ability. |
| accountId | number | Yes | ID of the target system account. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the starting is successful,  err is undefined. Otherwise, err is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed.  2. System service failed to communicate with dependency module. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |

## startAbilityWithAccount

```TypeScript
startAbilityWithAccount(want: Want, accountId: number): Promise<void>
```

Starts an ability with a specified account. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 10

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want information about the target ability. |
| accountId | number | Yes | ID of the target system account. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed.  2. System service failed to communicate with dependency module. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |

## terminateSelf

```TypeScript
terminateSelf(callback: AsyncCallback<void>): void
```

Destroys this input method extension. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 10

**Substitute:** InputMethodExtensionContext.destroy(callback:

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

## terminateSelf

```TypeScript
terminateSelf(): Promise<void>
```

Destroys this input method extension. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 10

**Substitute:** InputMethodExtensionContext.destroy()

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

