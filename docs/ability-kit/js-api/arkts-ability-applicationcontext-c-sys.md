# ApplicationContext

ApplicationContext inherits from [Context](arkts-ability-context-depr-i.md) and provides application-level management
capabilities, such as application lifecycle listening, process management, and application environment setting.

> **NOTE**
>
> The APIs of this module can be used only in the stage model.

**Inheritance/Implementation:** ApplicationContext extends [Context](arkts-ability-context-t.md)

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## getProcessRunningInformation

```TypeScript
getProcessRunningInformation(): Promise<Array<ProcessInformation>>
```

Obtains information about the running processes.
This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** [getRunningProcessInformation](arkts-ability-applicationcontext-c.md#getrunningprocessinformation-1)

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ProcessInformation&gt;&gt; | Promise used to return the API call result and the process runninginformation. You can perform error handling or custom processing in this callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

## getProcessRunningInformation

```TypeScript
getProcessRunningInformation(callback: AsyncCallback<Array<ProcessInformation>>): void
```

Obtains information about the running processes.
This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** [getRunningProcessInformation](arkts-ability-applicationcontext-c.md#getrunningprocessinformation-1)

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;ProcessInformation&gt;&gt; | Yes | Callback used to return the information about therunning processes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

## preloadUIExtensionAbility

```TypeScript
preloadUIExtensionAbility(want: Want): Promise<void>
```

Preloads a UIExtensionAbility instance. This API uses a promise to return the result.

The preloaded UIExtensionAbility instance is sent to the **onCreate** lifecycle of the UIExtensionAbility and waits
to be loaded by the current application.

A UIExtensionAbility instance can be preloaded for multiple times. Each time a preloaded UIExtensionAbility
instance is loaded, the next preloaded UIExtensionAbility instance is sent to the **onCreate** lifecycle of the
UIExtensionAbility.

| Name| Type| Mandatory| Description|
| -------- | -------- | -------- | -------- |
| want | [Want](arkts-ability-want-c.md) | Yes| Want information of the UIExtensionAbility.|

**Since:** 12

**Required permissions:** ohos.permission.PRELOAD_UI_EXTENSION_ABILITY

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want information of the UIExtensionAbility. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

## registerAbilityLifecycleCallback

```TypeScript
registerAbilityLifecycleCallback(abilityLifecycleCallback: AbilityLifecycleCallback): number
```

Registers a listener to monitor the ability lifecycle of the application.
This API uses an asynchronous callback to return the result.

<p>**NOTE**:
<br>It can be called only by the main thread.
</p>

**Since:** 9

**Deprecated since:** 10

**Substitutes:** on(type:

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| abilityLifecycleCallback | AbilityLifecycleCallback | Yes | Callback used to return the ID of the registered listener. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the number code of the callbackId. |

## registerEnvironmentCallback

```TypeScript
registerEnvironmentCallback(environmentCallback: EnvironmentCallback): number
```

Register environment callback.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** on(type:

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| environmentCallback | EnvironmentCallback | Yes | Callback used to return the ID of the registered listener. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the number code of the callbackId. |

## unregisterAbilityLifecycleCallback

```TypeScript
unregisterAbilityLifecycleCallback(callbackId: number, callback: AsyncCallback<void>): void
```

Unregisters the listener that monitors the ability lifecycle of the application.
This API uses an asynchronous callback to return the result.

<p>**NOTE**:
<br>It can be called only by the main thread.
</p>

**Since:** 9

**Deprecated since:** 10

**Substitutes:** off(type:

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackId | number | Yes | Event type. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the ID of the registered listener. |

## unregisterAbilityLifecycleCallback

```TypeScript
unregisterAbilityLifecycleCallback(callbackId: number): Promise<void>
```

Unregisters a listener for the lifecycle of a UIAbility within the application. This API uses a promise to return
the result. It can be called only on the main thread.

<p>**NOTE**:
<br>It can be called only by the main thread.
</p>

**Since:** 9

**Deprecated since:** 10

**Substitutes:** off(type:

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackId | number | Yes | Event type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |

## unregisterEnvironmentCallback

```TypeScript
unregisterEnvironmentCallback(callbackId: number, envcallback: AsyncCallback<void>): void
```

Unregisters the listener for system environment changes. This API uses an asynchronous callback to return the
result. It can be called only on the main thread.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** off(type:

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackId | number | Yes | Event type. |
| envcallback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the ID of the registered listener. |

## unregisterEnvironmentCallback

```TypeScript
unregisterEnvironmentCallback(callbackId: number): Promise<void>
```

Unregisters the listener for system environment changes. This API uses a promise to return the result. It can be
called only on the main thread.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** off(type:

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackId | number | Yes | Event type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |

