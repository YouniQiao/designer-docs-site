# ApplicationContext

ApplicationContext inherits from [Context](arkts-ability-context-depr-i.md) and provides application-level management
capabilities, such as application lifecycle listening, process management, and application environment setting.

> **NOTE**
>
> The APIs of this module can be used only in the stage model.

**Inheritance/Implementation:** ApplicationContext extends [Context](arkts-ability-context-t.md)

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## clearUpApplicationData

```TypeScript
clearUpApplicationData(): Promise<void>
```

Clears up all data in the application file path and revokes the permissions that the application has requested from
users. This API uses a promise to return the result. It can be called only on the main thread.

> **NOTE**
>
> For details about the application file path, see
> [Application File Directory and Application File Path](../../../../file-management/app-sandbox-directory.md#application-file-directory-and-application-file-path)
> . The figure shows only the application file paths in the EL1 and EL2 directories. For the application file paths
> in other directories, refer to EL1.
>
> This API stops the application process. After the application process is stopped, all subsequent callbacks will
> not be triggered.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

## clearUpApplicationData

```TypeScript
clearUpApplicationData(callback: AsyncCallback<void>): void
```

Clears up all data in the application file path and revokes the permissions that the application has requested from
users. This API uses an asynchronous callback to return the result. It can be called only on the main thread.

> **NOTE**
>
> For details about the application file path, see
> [Application File Directory and Application File Path](../../../../file-management/app-sandbox-directory.md#application-file-directory-and-application-file-path)
> . The figure shows only the application file paths in the EL1 and EL2 directories. For the application file paths
> in other directories, refer to EL1.
>
> This API stops the application process. After the application process is stopped, all subsequent callbacks will
> not be triggered.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the application data is clearedup, <code>error</code> is <code>undefined</code>; otherwise, <code>error</code> is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

## disableDelayedProcessExit

```TypeScript
disableDelayedProcessExit(): Promise<void>
```

Disables delayed process exit for the current process.

<p><b>NOTE</b>:
<br>This API can be called only by the main thread.
<br>Calling this API cancels the effect of {@link enableDelayedProcessExit}.</p>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. Possible causes: Fail to connect system service. |
| 16000150 | The current process has no UIAbility, and this API cannot be called. |

## enableDelayedProcessExit

```TypeScript
enableDelayedProcessExit(): Promise<void>
```

Enable delayed exit for the current process.
<p>**NOTE**:
<br>It can be called only by the main thread.
<br>Under normal circumstances, the process exits after the last UIAbility within the application process
has exited. After calling this interface, the process will delay its exit for 10 seconds after the last
UIAbility exits. If a new Ability is started within the 10 seconds in the current process, the process
no longer exits.</p>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. Possible causes: Fail to connect system service. |
| 16000150 | The current process has no UIAbility, and this API cannot be called. |

## getAllRunningInstanceKeys

```TypeScript
getAllRunningInstanceKeys(): Promise<Array<string>>
```

Obtains the unique instance IDs of all multi-instances of this application. This API uses a promise to return the
result. It can be called only on the main thread.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string&gt;&gt; | Promise used to return the unique instance IDs of all multi-instances of theapplication. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000078](../errorcode-ability.md#16000078-multiinstance-mode-is-not-supported) | The multi-instance is not supported. |

## getAllWindowStages

```TypeScript
getAllWindowStages(): Promise<Array<window.WindowStage>>
```

Obtains all WindowStage objects in the current application process. This API uses a promise to return the result.
It can be called only on the main thread.

This API is used to manage multiple windows in an application that contains several UIAbility components, for
example, managing the states of different WindowStage objects, or synchronizing state or data between multiple
windows within the same application.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;window.WindowStage&gt;&gt; | Promise used to return all WindowStage objects in the currentapplication process. |

## getCurrentAppCloneIndex

```TypeScript
getCurrentAppCloneIndex(): number
```

Obtains the index of the current application clone.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Index of the current application clone. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000071](../errorcode-ability.md#16000071-application-clone-is-not-supported) | The MultiAppMode is not {@link App_CLONE}. |

## getCurrentInstanceKey

```TypeScript
getCurrentInstanceKey(): string
```

Obtains the unique instance ID of this application. This API can be called only on the main thread.

This API can be properly called only on 2-in-1 devices. If it is called on other device types, error code 16000078
is returned.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Unique instance ID of the application. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000078](../errorcode-ability.md#16000078-multiinstance-mode-is-not-supported) | The multi-instance is not supported. |

## getRunningProcessInformation

```TypeScript
getRunningProcessInformation(): Promise<Array<ProcessInformation>>
```

Obtains the information about running processes. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ProcessInformation&gt;&gt; | Promise used to return the API call result and the process runninginformation. You can perform error handling or custom processing in this callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

## getRunningProcessInformation

```TypeScript
getRunningProcessInformation(callback: AsyncCallback<Array<ProcessInformation>>): void
```

Obtains the information about running processes. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;ProcessInformation&gt;&gt; | Yes | Callback used to return the information about therunning processes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

## getUIAbilityByInstanceId

```TypeScript
getUIAbilityByInstanceId(instanceId: string): UIAbility
```

Get the UIAbility instance by the instance Id.

<p>**NOTE**:
<br>It can be called only by the main thread.
</p>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| instanceId | string | Yes | The instanceId of the UIAbility. |

**Return value:**

| Type | Description |
| --- | --- |
| UIAbility | The UIAbility instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000003](../errorcode-ability.md#16000003-id-does-not-exist) | The id does not exist. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error.System service failed to communicate with dependency module. |

## killAllProcesses

```TypeScript
killAllProcesses(): Promise<void>
```

Kills all processes of this application. The application will not execute the normal lifecycle when exiting. This
API uses a promise to return the result. It can be called only on the main thread.

> **NOTE**
>
> This API is used to forcibly exit an application in abnormal scenarios. To exit an application properly, call
> [terminateSelf()](arkts-ability-uiabilitycontext-c.md#terminateself-2).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |

## killAllProcesses

```TypeScript
killAllProcesses(clearPageStack: boolean): Promise<void>
```

Kills all processes of this application. The application will not execute the normal lifecycle when exiting. This
API uses a promise to return the result. It can be called only on the main thread.

> **NOTE**
>
> This API is used to forcibly exit an application in abnormal scenarios. To exit an application properly, call
> [terminateSelf()](arkts-ability-uiabilitycontext-c.md#terminateself-2).

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| clearPageStack | boolean | Yes | Whether to clear the page stack. **true** to clear, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | If the input parameter is not valid parameter. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |

## killAllProcesses

```TypeScript
killAllProcesses(callback: AsyncCallback<void>): void
```

Kills all processes of this application. The application will not execute the normal lifecycle when exiting. This
API uses an asynchronous callback to return the result. It can be called only on the main thread.

> **NOTE**
>
> This API is used to forcibly exit an application in abnormal scenarios. To exit an application properly, call
> [terminateSelf()](arkts-ability-uiabilitycontext-c.md#terminateself-2).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If all the processes are killed,**err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |

## off('abilityLifecycle')

```TypeScript
off(type: 'abilityLifecycle', callbackId: number, callback: AsyncCallback<void>): void
```

Unregisters a listener for the lifecycle of a UIAbility within the application. This API uses an asynchronous
callback to return the result. It can be called only on the main thread.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'abilityLifecycle' | Yes | Lifecycle of the UIAbility within the application. The value is fixed at**'abilityLifecycle'**. |
| callbackId | number | Yes | ID returned when the[ApplicationContext.on('abilityLifecycle')](arkts-ability-applicationcontext-c.md#on-1)API is called to register a listener for the lifecycle of a UIAbility within the application. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the deregistration is successful,**err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |

## off('abilityLifecycle')

```TypeScript
off(type: 'abilityLifecycle', callbackId: number): Promise<void>
```

Unregisters a listener for the lifecycle of a UIAbility within the application. This API uses a promise to return
the result. It can be called only on the main thread.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'abilityLifecycle' | Yes | Lifecycle of the UIAbility within the application. The value is fixed at**'abilityLifecycle'**. |
| callbackId | number | Yes | ID returned when the[ApplicationContext.on('abilityLifecycle')](arkts-ability-applicationcontext-c.md#on-1)API is called to register a listener for the lifecycle of a UIAbility within the application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |

## off('environment')

```TypeScript
off(type: 'environment', callbackId: number, callback: AsyncCallback<void>): void
```

Unregisters the listener for system environment changes. This API uses an asynchronous callback to return the
result. It can be called only on the main thread.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'environment' | Yes | System environment change, for example, system dark/light color mode change. Thevalue is fixed at **'environment'**. |
| callbackId | number | Yes | ID returned when the[ApplicationContext.on('environment')](arkts-ability-applicationcontext-c.md#on-2)API is called to register a listener for system environment changes. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the deregistration is successful,**err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. |

## off('environment')

```TypeScript
off(type: 'environment', callbackId: number): Promise<void>
```

Unregisters the listener for system environment changes. This API uses a promise to return the result. It can be
called only on the main thread.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'environment' | Yes | System environment change, for example, system dark/light color mode change. Thevalue is fixed at **'environment'**. |
| callbackId | number | Yes | ID returned when the[ApplicationContext.on('environment')](arkts-ability-applicationcontext-c.md#on-2)API is called to register a listener for system environment changes. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. |

## off('applicationStateChange')

```TypeScript
off(type: 'applicationStateChange', callback?: ApplicationStateChangeCallback): void
```

Unregisters the listener for application process state changes. This API uses an asynchronous callback to return
the result. It can be called only on the main thread.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'applicationStateChange' | Yes | Application process state change. The value is fixed at**'applicationStateChange'**. |
| callback | ApplicationStateChangeCallback | No | Callback used to return the result. The value can be acallback defined by[ApplicationContext.on('applicationStateChange')](arkts-ability-applicationcontext-c.md#on-3)or empty.<br>- If a defined callback is passed in, the listener for that callback is unregistered.<br>- If novalue is passed in, all the listeners for the corresponding event are unregistered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |

## offSystemConfigurationUpdated

```TypeScript
offSystemConfigurationUpdated(callback?: systemConfiguration.UpdatedCallback): void
```

unregisters a listener for system configuration updated.

<p>**NOTE**:
<br>It can be called only by the main thread.
</p>

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | systemConfiguration.UpdatedCallback | No | The system configuration updated callback.If a defined callback is passed in, the listener for that callback is unregistered.If no value is passed in, all the listeners for the corresponding event are unregistered. |

## on('abilityLifecycle')

```TypeScript
on(type: 'abilityLifecycle', callback: AbilityLifecycleCallback): number
```

Registers a listener for the lifecycle of a UIAbility within the application. This API uses an asynchronous
callback to return the result. It can be called only on the main thread.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'abilityLifecycle' | Yes | Lifecycle of the UIAbility within the application. The value is fixed at**'abilityLifecycle'**. |
| callback | AbilityLifecycleCallback | Yes | Callback triggered when the UIAbility lifecycle changes. |

**Return value:**

| Type | Description |
| --- | --- |
| number | ID of the callback registered. This ID is used to unregister the corresponding callback in[ApplicationContext.off('abilityLifecycle')](arkts-ability-applicationcontext-c.md#off-1). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |

## on('environment')

```TypeScript
on(type: 'environment', callback: EnvironmentCallback): number
```

Registers a listener for system environment changes. This API uses an asynchronous callback to return the result.
It can be called only on the main thread.

> **NOTE**
>
> - You can also use [onConfigurationUpdate](arkts-ability-ability-c.md#onconfigurationupdate-1) to
> listen for system environment changes. Unlike
> [onConfigurationUpdate](arkts-ability-ability-c.md#onconfigurationupdate-1) of **Ability**, this
> API offers greater flexibility. It can be used both within application components and pages. However, the
> environment variables that can be subscribed to are different from those of
> [onConfigurationUpdate](arkts-ability-ability-c.md#onconfigurationupdate-1). For example, this
> API cannot be used to subscribe to direction, screen density, and display ID changes. For details, see the
> description of each environment variable in
> [Configuration](arkts-ability-configuration-i.md).
>
> - There are certain restrictions when this API is triggered. For example, if you set the application language by
> calling [setLanguage](arkts-ability-applicationcontext-c.md#setlanguage-1), the system does not trigger the
> callback for the current API even if the system language changes. For details, see
> [When to Use](../../../../application-models/subscribe-system-environment-variable-changes.md#when-to-use).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'environment' | Yes | System environment change, for example, system dark/light color mode change. Thevalue is fixed at **'environment'**. |
| callback | EnvironmentCallback | Yes | Callback triggered when the system environment changes. |

**Return value:**

| Type | Description |
| --- | --- |
| number | ID of the callback registered. This ID is used to unregister the corresponding callback in[ApplicationContext.off('environment')](arkts-ability-applicationcontext-c.md#off-3). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. |

## on('applicationStateChange')

```TypeScript
on(type: 'applicationStateChange', callback: ApplicationStateChangeCallback): void
```

Registers a listener for application process state changes. This API uses an asynchronous callback to return the
result. It can be called only on the main thread.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'applicationStateChange' | Yes | Application process state change. The value is fixed at**'applicationStateChange'**. |
| callback | ApplicationStateChangeCallback | Yes | Callback triggered when the application process state ischanged. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |

## onSystemConfigurationUpdated

```TypeScript
onSystemConfigurationUpdated(callback: systemConfiguration.UpdatedCallback): void
```

Registers a listener for system configuration updated.

<p>**NOTE**:
<br>It can be called only by the main thread.
</p>

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | systemConfiguration.UpdatedCallback | Yes | The system configuration updated callback. |

## restartApp

```TypeScript
restartApp(want: Want): void
```

Restarts the application and starts the specified UIAbility. This API can be called only by the main thread, and
the application to restart must be active.

> **NOTE**
>
> When this API is called to restart the application, the **onDestroy** lifecycle callback of the ability in the
> application is not triggered.
>
> If an atomic service calls this API,
> [restartSelfAtomicService()](arkts-ability-restartselfatomicservice-f.md#restartselfatomicservice-1)
> , or [UIAbilityContext.restartApp()](arkts-ability-uiabilitycontext-c.md#restartapp-1) within 3 seconds after a
> successful call to this API, the system returns error code 16000064.
>
> If an application calls this API or
> [UIAbilityContext.restartApp()](arkts-ability-uiabilitycontext-c.md#restartapp-1) within 3 seconds after a
> successful call to this API, the system returns error code 16000064.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want information about the UIAbility to start. No verification is performed on the bundlename passed in. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000063](../errorcode-ability.md#16000063-invalid-ability-during-application-restart) | The target to restart does not belong to the current application or is not aUIAbility. |
| [16000064](../errorcode-ability.md#16000064-frequent-application-restart) | Restart too frequently. Try again at least 3s later. |

## setColorMode

```TypeScript
setColorMode(colorMode: ConfigurationConstant.ColorMode): void
```

Sets the dark/light color mode for the application. This API can be called only on the main thread.

> **NOTE**
>
> Before calling this API, ensure that the window has been created and the page corresponding to the UIAbility has
> been loaded (using the
> [loadContent](../../../../reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9) API in the
> [onWindowStageCreate()](arkts-ability-uiability-c.md#onwindowstagecreate-1) lifecycle).

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorMode | ConfigurationConstant.ColorMode | Yes | Dark/light color mode, which can be dark mode, light mode,or follow-system mode (default). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |

## setFont

```TypeScript
setFont(font: string): void
```

Sets the font for this application. This API can be called only on the main thread.

> **NOTE**
>
> Before calling this API, ensure that the window has been created and the page corresponding to the UIAbility has
> been loaded (using the
> [loadContent](../../../../reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9) API in the
> [onWindowStageCreate()](arkts-ability-uiability-c.md#onwindowstagecreate-1) lifecycle).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| font | string | Yes | Font, which can be registered by calling[UIContext.registerFont](../../../../reference/apis-arkui/arkts-apis-uicontext-font.md#registerfont). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

## setFontSizeScale

```TypeScript
setFontSizeScale(fontSizeScale: number): void
```

Sets the scale ratio for the font size of this application. This API can be called only on the main thread.

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fontSizeScale | number | Yes | Font scale ratio. The value is a non-negative number. When the application's[fontSizeScale](../../../../quick-start/app-configuration-file.md#configuration) is set to **followSystem** andthe value set here exceeds the value of[fontSizeMaxScale](../../../../quick-start/app-configuration-file.md#configuration), the value of[fontSizeMaxScale](../../../../quick-start/app-configuration-file.md#configuration) takes effect. |

## setLanguage

```TypeScript
setLanguage(language: string): void
```

Sets the language for the application. This API can be called only on the main thread.

> **NOTE**
>
> Before calling this API, ensure that the window has been created and the page corresponding to the UIAbility has
> been loaded (using the
> [loadContent](../../../../reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9) API in the
> [onWindowStageCreate()](arkts-ability-uiability-c.md#onwindowstagecreate-1) lifecycle).

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| language | string | Yes | Target language. The list of supported languages can be obtained by calling[getSystemLanguages()](../../apis-localization-kit/arkts-apis/arkts-localization-system-c.md#getsystemlanguages-1). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |

## setSupportedProcessCache

```TypeScript
setSupportedProcessCache(isSupported : boolean): void
```

Sets whether the current application's process supports resource caching, so that the cached process resources can
be reused when the application is started again. This API can be called only on the main thread.

This setting applies only to the current process instance and does not affect others. If the application process
instance is terminated, the previously set state will not be preserved and must be reset.

This API can be properly called only on phones and 2-in-1 devices. If it is called on other device types, error
code 801 is returned.

> **NOTE**
>
> - This API only sets the application to be ready for quick startup after caching. It does not mean that quick
> startup will be triggered. Other conditions must be considered to determine whether to trigger quick startup.
>
> - To ensure that this API is effective before the process exits, it should be called as soon as possible. You are
> advised to call this API within the **onCreate()** callback of the
> [AbilityStage](arkts-ability-abilitystage-c.md).
>
> - If this API is called multiple times within the same process, the outcome of the final call is used. In cases
> where there are multiple AbilityStage instances, to achieve the desired result, this API must be called and
> configured with the same value in each AbilityStage.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isSupported | boolean | Yes | Whether process cache is supported. The value <code>true</code> means thatprocess cache is supported, and <code>false</code> means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

## startSelfUIAbility

```TypeScript
startSelfUIAbility(want: Want): Promise<void>
```

Starts a UIAbility of the current application during the delayed-exit window.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates the UIAbility to start. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. Possible causes: Fail to connect system service. |
| [16000122](../errorcode-ability.md#16000122-target-component-is-intercepted-by-the-system-control-module) | The target component is blocked by the system module and does not support startup. |
| [16000123](../errorcode-ability.md#16000123-implicit-startup-is-not-supported) | Implicit startup is not supported. |
| [16000124](../errorcode-ability.md#16000124-starting-a-distributed-uiability-is-not-supported) | Starting a remote UIAbility is not supported. |
| [16000125](../errorcode-ability.md#16000125-starting-a-plugin-is-not-supported) | Starting a plugin UIAbility is not supported. |
| [16000130](../errorcode-ability.md#16000130-uiability-does-not-belong-to-the-caller) | The UIAbility does not belong to the caller. |
| 16000161 | Delayed process exit is not pending in the current process, and this API cannot be called. |
| 16000162 | The current process still has another UIAbility, and this API cannot be called. |

