# ServiceExtensionContext (System API)

The ServiceExtensionContext module provides the context environment for the ServiceExtensionAbility. It inherits from ExtensionContext.

You can use the APIs of this module to start, terminate, connect, and disconnect an ability.
> **NOTE**  
>  
> - The APIs of this module must be used on the main thread, but not in child threads such as Worker and TaskPool.

**Inheritance/Implementation:** ServiceExtensionContext extends [ExtensionContext](arkts-ability-extensioncontext-c.md)

**Since:** 9

<!--Device-unnamed-declare class ServiceExtensionContext extends ExtensionContext--><!--Device-unnamed-declare class ServiceExtensionContext extends ExtensionContext-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## connectServiceExtensionAbility

```TypeScript
connectServiceExtensionAbility(want: Want, options: ConnectOptions): number
```

Connects this ability to a ServiceExtensionAbility. This API can be called only on the main thread.
> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-connectServiceExtensionAbility(want: Want, options: ConnectOptions): long--><!--Device-ServiceExtensionContext-connectServiceExtensionAbility(want: Want, options: ConnectOptions): long-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability, such as the ability name and bundle name. |
| options | [ConnectOptions](arkts-ability-ability-connectoptions-t.md) | Yes | Callback used to return the information indicating that the connection is successful, interrupted, or failed. |

**Return value:**

| Type | Description |
| --- | --- |
| number | A number, based on which the connection will be interrupted. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type.<br>**Applicable version:** 10 and later |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component.<br>**Applicable version:** 10 and later |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed.<br>**Applicable version:** 10 and later |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires.<br>**Applicable version:** 10 and later |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled.<br>**Applicable version:** 10 and later |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM.<br>**Applicable version:** 10 and later |
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI.<br>**Applicable version:** 10 and later |
| [16000055](../errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out.<br>**Applicable version:** 10 and later |

## connectServiceExtensionAbilityWithAccount

```TypeScript
connectServiceExtensionAbilityWithAccount(want: Want, accountId: number, options: ConnectOptions): number
```

Connects this ability to a ServiceExtensionAbility of a given account. This API can be called only on the main thread.

This API can be properly called on phones and tablets. If it is called on other devices, error code 16000006 is returned.
> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).  
> > Permission verification is not required when **accountId** specifies the current user.

**Since:** 9

**Required permissions:** ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-connectServiceExtensionAbilityWithAccount(want: Want, accountId: int, options: ConnectOptions): long--><!--Device-ServiceExtensionContext-connectServiceExtensionAbilityWithAccount(want: Want, accountId: int, options: ConnectOptions): long-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |
| accountId | number | Yes | ID of the target system account. |
| options | [ConnectOptions](arkts-ability-ability-connectoptions-t.md) | Yes | Remote object instance. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Result code of the connection. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type.<br>**Applicable version:** 10 and later |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component.<br>**Applicable version:** 10 and later |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed.<br>**Applicable version:** 10 and later |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires.<br>**Applicable version:** 10 and later |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled.<br>**Applicable version:** 10 and later |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM.<br>**Applicable version:** 10 and later |
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI.<br>**Applicable version:** 10 and later |
| [16000055](../errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out.<br>**Applicable version:** 10 and later |

## disconnectServiceExtensionAbility

```TypeScript
disconnectServiceExtensionAbility(connection: number, callback: AsyncCallback<void>): void
```

Disconnects this ability from a ServiceExtensionAbility and after the successful disconnection, sets the remote object returned upon the connection to void. This API can be called only on the main thread. It uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-disconnectServiceExtensionAbility(connection: long, callback: AsyncCallback<void>): void--><!--Device-ServiceExtensionContext-disconnectServiceExtensionAbility(connection: long, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connection | number | Yes | Number returned after **connectServiceExtensionAbility** is called. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the ability is disconnected,**err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

## disconnectServiceExtensionAbility

```TypeScript
disconnectServiceExtensionAbility(connection: number): Promise<void>
```

Disconnects this ability from a ServiceExtensionAbility and after the successful disconnection, sets the remote object returned upon the connection to void. This API can be called only on the main thread. It uses a promise to return the result asynchronously.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-disconnectServiceExtensionAbility(connection: long): Promise<void>--><!--Device-ServiceExtensionContext-disconnectServiceExtensionAbility(connection: long): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connection | number | Yes | Number returned after **connectServiceExtensionAbility** is called. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

## openAtomicService

```TypeScript
openAtomicService(appId: string, options?: AtomicServiceOptions): Promise<void>
```

Starts an atomic service based on an application ID. This API uses a promise to return the result asynchronously.
> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-openAtomicService(appId: string, options?: AtomicServiceOptions): Promise<void>--><!--Device-ServiceExtensionContext-openAtomicService(appId: string, options?: AtomicServiceOptions): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appId | string | Yes | Unique ID of the application, which is allocated by the cloud. |
| options | [AtomicServiceOptions](arkts-ability-app-ability-atomicserviceoptions-atomicserviceoptions-c.md) | No | Parameter carried in the request for starting the atomic service in jump-out mode. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |

## openLink

```TypeScript
openLink(link: string, options?: OpenLinkOptions): Promise<void>
```

Starts a UIAbility through App Linking. This API can be called only on the main thread. It uses a promise to return the result asynchronously.

A URL in the standard format is passed in to the **link** field to start the target UIAbility based on the implicit Want matching rules. The target UIAbility must have the following filter characteristics to process links of App Linking:

- The **actions** field must contain **ohos.want.action.viewData**.  
- The **entities** field must contain **entity.system.browsable**.  
- The **uris** field must contain elements whose **scheme** is **https** and **domainVerify** is **true**.

If an input parameter is invalid, for example, a mandatory parameter is not set or the URL set in **link** is not in the standard format, an exception is thrown. If the parameter verification is successful but an error occurs when starting the target UIAbility, the error information is returned through promise.
> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-openLink(link: string, options?: OpenLinkOptions): Promise<void>--><!--Device-ServiceExtensionContext-openLink(link: string, options?: OpenLinkOptions): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| link | string | Yes | URL to open, which must be in the standard format. |
| options | [OpenLinkOptions](arkts-ability-app-ability-openlinkoptions-openlinkoptions-i.md) | No | Options of the URL. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Failed to start the invisible ability. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000010](../errorcode-ability.md#16000010-continuation-flag-is-forbidden) | The call with the continuation flag is forbidden. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled. |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM. |
| [16000019](../errorcode-ability.md#16000019-no-matching-ability-is-found-during-implicit-startup) | No matching ability is found. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [16000136](../errorcode-ability.md#16000136-prohibited-from-launching-the-applications-own-uiability-via-app-linking) | The UIAbility is prohibited from launching itself via App Linking.<br>**Applicable version:** 23 and later |

## preStartMission

```TypeScript
preStartMission(bundleName: string, moduleName: string, abilityName: string, startTime: string): Promise<void>
```

Starts an atomic service and pre-opens the window, with the loading box skipped. This API uses a promise to return the result.

If parameter verification is successful but the atomic service fails to start, you need to implement an exception mechanism to capture the error.

**Since:** 12

**Required permissions:** ohos.permission.PRE_START_ATOMIC_SERVICE

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-preStartMission(bundleName: string, moduleName: string, abilityName: string, startTime: string): Promise<void>--><!--Device-ServiceExtensionContext-preStartMission(bundleName: string, moduleName: string, abilityName: string, startTime: string): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the atomic service. |
| moduleName | string | Yes | Module name of the atomic service. |
| abilityName | string | Yes | Ability name of the atomic service. |
| startTime | string | Yes | Start time to open the atomic service, in milliseconds. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16300007](../errorcode-ability.md#16300007-download-and-installation-task-information-of-the-atomic-service-does-not-exist) | The target free-installation task does not exist. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

## requestModalUIExtension

```TypeScript
requestModalUIExtension(pickerWant: Want, callback: AsyncCallback<void>): void
```

Requests the specified focused application to start the UIExtensionAbility of the corresponding type. The focused application is specified by **bundleName** in **want.parameters**. If **bundleName** is left unspecified, or if the specified application does not gain focus, the UIExtensionAbility is directly started on the system UI. The UIExtensionAbility to start is determined by the combination of the **bundleName**, **abilityName**, and **moduleName** fields in **Want**, and its type is determined by the **ability.want.params.uiExtensionType** field in **want.parameters**. This API can be called only on the main thread. It uses an asynchronous callback to return the result.

Before starting the UIExtensionAbility, ensure that the focused application has finished page initialization.Otherwise, the UIExtensionAbility fails to start. The application can determine the time to start the UIExtensionAbility by listening for the page loading status.
> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-requestModalUIExtension(pickerWant: Want, callback: AsyncCallback<void>): void--><!--Device-ServiceExtensionContext-requestModalUIExtension(pickerWant: Want, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pickerWant | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information used to start the UIExtensionAbility. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the UIExtensionAbility is started,**err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface.<br>**Applicable version:** 11 and later |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist.<br>**Applicable version:** 11 and later |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type.<br>**Applicable version:** 11 and later |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component.<br>**Applicable version:** 11 and later |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released.<br>**Applicable version:** 11 and later |

## requestModalUIExtension

```TypeScript
requestModalUIExtension(pickerWant: Want): Promise<void>
```

Requests the specified focused application to start the UIExtensionAbility of the corresponding type. The focused application is specified by **bundleName** in **want.parameters**. If **bundleName** is left unspecified, or if the specified application does not gain focus, the UIExtensionAbility is directly started on the system UI. The UIExtensionAbility to start is determined by the combination of the **bundleName**, **abilityName**, and **moduleName** fields in **Want**, and its type is determined by the **ability.want.params.uiExtensionType** field in **want.parameters**. This API can be called only on the main thread. It uses a promise to return the result asynchronously.

Before starting the UIExtensionAbility, ensure that the focused application has finished page initialization.Otherwise, the UIExtensionAbility fails to start. The application can determine the time to start the UIExtensionAbility by listening for the page loading status.
> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-requestModalUIExtension(pickerWant: Want): Promise<void>--><!--Device-ServiceExtensionContext-requestModalUIExtension(pickerWant: Want): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pickerWant | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information used to start the UIExtensionAbility. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface.<br>**Applicable version:** 11 and later |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist.<br>**Applicable version:** 11 and later |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type.<br>**Applicable version:** 11 and later |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component.<br>**Applicable version:** 11 and later |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released.<br>**Applicable version:** 11 and later |

## requestModalUIExtensionWithAccount

```TypeScript
requestModalUIExtensionWithAccount(pickerWant: Want, accountId: number): Promise<void>
```

Requests the specified focused application to start the UIExtensionAbility of the corresponding type for the specified user. The focused application is specified by **bundleName** in **want.parameters**. If **bundleName** is left unspecified, or if the specified application does not gain focus, the UIExtensionAbility is directly started on the system UI. The UIExtensionAbility to start is determined by the combination of the **bundleName**,**abilityName**, and **moduleName** fields in **Want**, and its type is determined by the **ability.want.params.uiExtensionType** field in **want.parameters**. This API can be called only on the main thread.It uses a promise to return the result asynchronously.

Before starting the UIExtensionAbility, ensure that the focused application has finished page initialization.Otherwise, the UIExtensionAbility fails to start. The application can determine the time to start the UIExtensionAbility by listening for the page loading status.
> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).

**Since:** 26.0.0

**Required permissions:** ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-requestModalUIExtensionWithAccount(pickerWant: Want, accountId: int): Promise<void>--><!--Device-ServiceExtensionContext-requestModalUIExtensionWithAccount(pickerWant: Want, accountId: int): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pickerWant | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information used to start the UIExtensionAbility. |
| accountId | number | Yes | The account to request. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. Possible causes: 1.Connect to system service failed;2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.4.The logical screen corresponding to the specified accountId is not in the foreground. |

## startAbility

```TypeScript
startAbility(want: Want, callback: AsyncCallback<void>): void
```

Starts an ability. This API can be called only on the main thread. It uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-startAbility(want: Want, callback: AsyncCallback<void>): void--><!--Device-ServiceExtensionContext-startAbility(want: Want, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability, such as the ability name and bundle name. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the ability is started, **err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000010](../errorcode-ability.md#16000010-continuation-flag-is-forbidden) | The call with the continuation and prepare continuation flag is forbidden. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000055](../errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface.<br>**Applicable version:** 10 and later |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled.<br>**Applicable version:** 10 and later |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM.<br>**Applicable version:** 10 and later |
| [16000019](../errorcode-ability.md#16000019-no-matching-ability-is-found-during-implicit-startup) | No matching ability is found.<br>**Applicable version:** 12 and later |
| [16000073](../errorcode-ability.md#16000073-appcloneindex-is-invalid) | The app clone index is invalid.<br>**Applicable version:** 12 and later |
| [16000071](../errorcode-ability.md#16000071-application-clone-is-not-supported) | App clone is not supported.<br>**Applicable version:** 14 and later |
| [16000072](../errorcode-ability.md#16000072-multiapp-mode-is-not-supported) | App clone or multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000076](../errorcode-ability.md#16000076-appinstancekey-does-not-exist) | The app instance key is invalid.<br>**Applicable version:** 14 and later |
| [16000077](../errorcode-ability.md#16000077-number-of-application-instances-reaches-the-upper-limit) | The number of app instances reaches the limit.<br>**Applicable version:** 14 and later |
| [16000078](../errorcode-ability.md#16000078-multiinstance-mode-is-not-supported) | The multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000079](../errorcode-ability.md#16000079-appinstancekey-cannot-be-specified) | The APP_INSTANCE_KEY cannot be specified.<br>**Applicable version:** 14 and later |
| [16000080](../errorcode-ability.md#16000080-new-instances-cannot-be-created) | Creating a new instance is not supported.<br>**Applicable version:** 14 and later |

## startAbility

```TypeScript
startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void
```

Starts an ability. This API can be called only on the main thread. It uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void--><!--Device-ServiceExtensionContext-startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |
| options | [StartOptions](arkts-ability-app-ability-startoptions-startoptions-c-sys.md) | Yes | Parameters used for starting the ability. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the ability is started, **err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000010](../errorcode-ability.md#16000010-continuation-flag-is-forbidden) | The call with the continuation and prepare continuation flag is forbidden. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000055](../errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface.<br>**Applicable version:** 10 and later |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled.<br>**Applicable version:** 10 and later |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM.<br>**Applicable version:** 10 and later |
| [16000019](../errorcode-ability.md#16000019-no-matching-ability-is-found-during-implicit-startup) | No matching ability is found.<br>**Applicable version:** 12 and later |
| [16000073](../errorcode-ability.md#16000073-appcloneindex-is-invalid) | The app clone index is invalid.<br>**Applicable version:** 12 and later |
| [16000071](../errorcode-ability.md#16000071-application-clone-is-not-supported) | App clone is not supported.<br>**Applicable version:** 14 and later |
| [16000072](../errorcode-ability.md#16000072-multiapp-mode-is-not-supported) | App clone or multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000076](../errorcode-ability.md#16000076-appinstancekey-does-not-exist) | The app instance key is invalid.<br>**Applicable version:** 14 and later |
| [16000077](../errorcode-ability.md#16000077-number-of-application-instances-reaches-the-upper-limit) | The number of app instances reaches the limit.<br>**Applicable version:** 14 and later |
| [16000078](../errorcode-ability.md#16000078-multiinstance-mode-is-not-supported) | The multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000079](../errorcode-ability.md#16000079-appinstancekey-cannot-be-specified) | The APP_INSTANCE_KEY cannot be specified.<br>**Applicable version:** 14 and later |
| [16000080](../errorcode-ability.md#16000080-new-instances-cannot-be-created) | Creating a new instance is not supported.<br>**Applicable version:** 14 and later |

## startAbility

```TypeScript
startAbility(want: Want, options?: StartOptions): Promise<void>
```

Starts an ability. This API can be called only on the main thread. It uses a promise to return the result asynchronously.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-startAbility(want: Want, options?: StartOptions): Promise<void>--><!--Device-ServiceExtensionContext-startAbility(want: Want, options?: StartOptions): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability, such as the ability name and bundle name. |
| options | [StartOptions](arkts-ability-app-ability-startoptions-startoptions-c-sys.md) | No | Parameters used for starting the ability. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000010](../errorcode-ability.md#16000010-continuation-flag-is-forbidden) | The call with the continuation and prepare continuation flag is forbidden. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000055](../errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface.<br>**Applicable version:** 10 and later |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled.<br>**Applicable version:** 10 and later |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM.<br>**Applicable version:** 10 and later |
| [16000019](../errorcode-ability.md#16000019-no-matching-ability-is-found-during-implicit-startup) | No matching ability is found.<br>**Applicable version:** 12 and later |
| [16000073](../errorcode-ability.md#16000073-appcloneindex-is-invalid) | The app clone index is invalid.<br>**Applicable version:** 12 and later |
| [16000071](../errorcode-ability.md#16000071-application-clone-is-not-supported) | App clone is not supported.<br>**Applicable version:** 14 and later |
| [16000072](../errorcode-ability.md#16000072-multiapp-mode-is-not-supported) | App clone or multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000076](../errorcode-ability.md#16000076-appinstancekey-does-not-exist) | The app instance key is invalid.<br>**Applicable version:** 14 and later |
| [16000077](../errorcode-ability.md#16000077-number-of-application-instances-reaches-the-upper-limit) | The number of app instances reaches the limit.<br>**Applicable version:** 14 and later |
| [16000078](../errorcode-ability.md#16000078-multiinstance-mode-is-not-supported) | The multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000079](../errorcode-ability.md#16000079-appinstancekey-cannot-be-specified) | The APP_INSTANCE_KEY cannot be specified.<br>**Applicable version:** 14 and later |
| [16000080](../errorcode-ability.md#16000080-new-instances-cannot-be-created) | Creating a new instance is not supported.<br>**Applicable version:** 14 and later |

## startAbilityAsCaller

```TypeScript
startAbilityAsCaller(want: Want, callback: AsyncCallback<void>): void
```

Starts an ability with the caller information specified. The caller information is carried in **Want** and identified at the system service layer. The ability can obtain the caller information from the **Want** parameter in the **onCreate** lifecycle callback. When this API is used to start an ability, the caller information carried in **Want** is not overwritten by the current application information. The system service layer can obtain the initial caller information. This API can be called only on the main thread. It uses an asynchronous callback to return the result.
> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-startAbilityAsCaller(want: Want, callback: AsyncCallback<void>): void--><!--Device-ServiceExtensionContext-startAbilityAsCaller(want: Want, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the ability is started, **err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000010](../errorcode-ability.md#16000010-continuation-flag-is-forbidden) | The call with the continuation and prepare continuation flag is forbidden. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled. |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000055](../errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [16000073](../errorcode-ability.md#16000073-appcloneindex-is-invalid) | The app clone index is invalid.<br>**Applicable version:** 12 and later |
| [16000071](../errorcode-ability.md#16000071-application-clone-is-not-supported) | App clone is not supported.<br>**Applicable version:** 14 and later |
| [16000072](../errorcode-ability.md#16000072-multiapp-mode-is-not-supported) | App clone or multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000076](../errorcode-ability.md#16000076-appinstancekey-does-not-exist) | The app instance key is invalid.<br>**Applicable version:** 14 and later |
| [16000077](../errorcode-ability.md#16000077-number-of-application-instances-reaches-the-upper-limit) | The number of app instances reaches the limit.<br>**Applicable version:** 14 and later |
| [16000078](../errorcode-ability.md#16000078-multiinstance-mode-is-not-supported) | The multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000079](../errorcode-ability.md#16000079-appinstancekey-cannot-be-specified) | The APP_INSTANCE_KEY cannot be specified.<br>**Applicable version:** 14 and later |
| [16000080](../errorcode-ability.md#16000080-new-instances-cannot-be-created) | Creating a new instance is not supported.<br>**Applicable version:** 14 and later |

## startAbilityAsCaller

```TypeScript
startAbilityAsCaller(want: Want, options: StartOptions, callback: AsyncCallback<void>): void
```

Starts an ability with the caller information and start options specified. The caller information is carried in **Want** and identified at the system service layer. The ability can obtain the caller information from the **Want** parameter in the **onCreate** lifecycle callback. When this API is used to start an ability, the caller information carried in **Want** is not overwritten by the current application information. The system service layer can obtain the initial caller information. This API can be called only on the main thread. It uses an asynchronous callback to return the result.
> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-startAbilityAsCaller(want: Want, options: StartOptions, callback: AsyncCallback<void>): void--><!--Device-ServiceExtensionContext-startAbilityAsCaller(want: Want, options: StartOptions, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |
| options | [StartOptions](arkts-ability-app-ability-startoptions-startoptions-c-sys.md) | Yes | Parameters used for starting the ability. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the ability is started, **err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled. |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000055](../errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [16000073](../errorcode-ability.md#16000073-appcloneindex-is-invalid) | The app clone index is invalid.<br>**Applicable version:** 12 and later |
| [16000071](../errorcode-ability.md#16000071-application-clone-is-not-supported) | App clone is not supported.<br>**Applicable version:** 14 and later |
| [16000072](../errorcode-ability.md#16000072-multiapp-mode-is-not-supported) | App clone or multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000076](../errorcode-ability.md#16000076-appinstancekey-does-not-exist) | The app instance key is invalid.<br>**Applicable version:** 14 and later |
| [16000077](../errorcode-ability.md#16000077-number-of-application-instances-reaches-the-upper-limit) | The number of app instances reaches the limit.<br>**Applicable version:** 14 and later |
| [16000078](../errorcode-ability.md#16000078-multiinstance-mode-is-not-supported) | The multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000079](../errorcode-ability.md#16000079-appinstancekey-cannot-be-specified) | The APP_INSTANCE_KEY cannot be specified.<br>**Applicable version:** 14 and later |
| [16000080](../errorcode-ability.md#16000080-new-instances-cannot-be-created) | Creating a new instance is not supported.<br>**Applicable version:** 14 and later |

## startAbilityAsCaller

```TypeScript
startAbilityAsCaller(want: Want, options?: StartOptions): Promise<void>
```

Starts an ability with the start options specified. The caller information is carried in **Want** and identified at the system service layer. The ability can obtain the caller information from the **Want** parameter in the **onCreate** lifecycle callback. When this API is used to start an ability, the caller information carried in **Want** is not overwritten by the current application information. The system service layer can obtain the initial caller information. This API can be called only on the main thread. It uses a promise to return the result asynchronously.
> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-startAbilityAsCaller(want: Want, options?: StartOptions): Promise<void>--><!--Device-ServiceExtensionContext-startAbilityAsCaller(want: Want, options?: StartOptions): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |
| options | [StartOptions](arkts-ability-app-ability-startoptions-startoptions-c-sys.md) | No | Parameters used for starting the ability. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000010](../errorcode-ability.md#16000010-continuation-flag-is-forbidden) | The call with the continuation and prepare continuation flag is forbidden. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled. |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000055](../errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [16000073](../errorcode-ability.md#16000073-appcloneindex-is-invalid) | The app clone index is invalid.<br>**Applicable version:** 12 and later |
| [16000071](../errorcode-ability.md#16000071-application-clone-is-not-supported) | App clone is not supported.<br>**Applicable version:** 14 and later |
| [16000072](../errorcode-ability.md#16000072-multiapp-mode-is-not-supported) | App clone or multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000076](../errorcode-ability.md#16000076-appinstancekey-does-not-exist) | The app instance key is invalid.<br>**Applicable version:** 14 and later |
| [16000077](../errorcode-ability.md#16000077-number-of-application-instances-reaches-the-upper-limit) | The number of app instances reaches the limit.<br>**Applicable version:** 14 and later |
| [16000078](../errorcode-ability.md#16000078-multiinstance-mode-is-not-supported) | The multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000079](../errorcode-ability.md#16000079-appinstancekey-cannot-be-specified) | The APP_INSTANCE_KEY cannot be specified.<br>**Applicable version:** 14 and later |
| [16000080](../errorcode-ability.md#16000080-new-instances-cannot-be-created) | Creating a new instance is not supported.<br>**Applicable version:** 14 and later |

## startAbilityByCall

```TypeScript
startAbilityByCall(want: Want): Promise<Caller>
```

Starts an ability in the foreground or background and obtains the caller object for communicating with the ability.This API can be called only on the main thread. It uses a promise to return the result asynchronously.

This API cannot be used to start the UIAbility with the launch type set to [specified](../../../application-models/uiability-launch-type.md#specified).

Observe the following when using this API:

- If an application running in the background needs to call this API to start an ability, it must have the ohos.permission.START_ABILITIES_FROM_BACKGROUND permission.  
- If **exported** of the target ability is **false** in cross-application scenarios, the caller must have the ohos.permission.START_INVISIBLE_ABILITY permission.  
- The rules for using this API in the same-device and cross-device scenarios are different. For details, see [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).

**Since:** 9

**Required permissions:** ohos.permission.ABILITY_BACKGROUND_COMMUNICATION

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-startAbilityByCall(want: Want): Promise<Caller>--><!--Device-ServiceExtensionContext-startAbilityByCall(want: Want): Promise<Caller>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Information about the ability to start, including **abilityName**, **moduleName**,**bundleName**, **deviceId**, and **parameters** (optional). If **parameters** is left blank or null, the ability is started in the background. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Caller&gt; | Promise used to return the caller object to communicate with. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission.<br>**Applicable version:** 9 and later |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released.<br>**Applicable version:** 9 and later |

## startAbilityByCallWithAccount

```TypeScript
startAbilityByCallWithAccount(want: Want, accountId: number): Promise<Caller>
```

Starts an ability with the account ID specified and obtains the caller object for communicating with the ability.This API can be called only on the main thread. It uses a promise to return the result asynchronously.

This API cannot be used to start the UIAbility with the launch type set to [specified](../../../application-models/uiability-launch-type.md#specified).

Observe the following when using this API:

- If an application needs to call this API to start an ability that belongs to another user, it must have the ohos.permission.ABILITY_BACKGROUND_COMMUNICATION and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permissions.  
- If an application running in the background needs to call this API to start an ability, it must have the ohos.permission.START_ABILITIES_FROM_BACKGROUND permission.  
- If **exported** of the target ability is **false** in cross-application scenarios, the caller must have the ohos.permission.START_INVISIBLE_ABILITY permission.  
- The rules for using this API in the same-device and cross-device scenarios are different. For details, see [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).

**Since:** 10

**Required permissions:** ohos.permission.ABILITY_BACKGROUND_COMMUNICATION and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-startAbilityByCallWithAccount(want: Want, accountId: int): Promise<Caller>--><!--Device-ServiceExtensionContext-startAbilityByCallWithAccount(want: Want, accountId: int): Promise<Caller>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Information about the ability to start, including **abilityName**, **moduleName**,**bundleName**, **deviceId** (optional), and **parameters** (optional). If **deviceId** is left blank or null,the local ability is started. If **parameters** is left blank or null, the ability is started in the background. |
| accountId | number | Yes | ID of the target system account. The value **-1** indicates the current user. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Caller&gt; | Promise used to return the caller object to communicate with. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled. |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |

## startAbilityWithAccount

```TypeScript
startAbilityWithAccount(want: Want, accountId: number, callback: AsyncCallback<void>): void
```

Starts an ability with the account ID specified. This API can be called only on the main thread. It uses an asynchronous callback to return the result.
> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).

**Since:** 9

**Required permissions:** ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-startAbilityWithAccount(want: Want, accountId: int, callback: AsyncCallback<void>): void--><!--Device-ServiceExtensionContext-startAbilityWithAccount(want: Want, accountId: int, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |
| accountId | number | Yes | ID of the target system account. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the ability is started, **err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000010](../errorcode-ability.md#16000010-continuation-flag-is-forbidden) | The call with the continuation and prepare continuation flag is forbidden. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled. |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000055](../errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [16000019](../errorcode-ability.md#16000019-no-matching-ability-is-found-during-implicit-startup) | No matching ability is found.<br>**Applicable version:** 12 and later |
| [16000073](../errorcode-ability.md#16000073-appcloneindex-is-invalid) | The app clone index is invalid.<br>**Applicable version:** 12 and later |
| [16000071](../errorcode-ability.md#16000071-application-clone-is-not-supported) | App clone is not supported.<br>**Applicable version:** 14 and later |
| [16000072](../errorcode-ability.md#16000072-multiapp-mode-is-not-supported) | App clone or multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000076](../errorcode-ability.md#16000076-appinstancekey-does-not-exist) | The app instance key is invalid.<br>**Applicable version:** 14 and later |
| [16000077](../errorcode-ability.md#16000077-number-of-application-instances-reaches-the-upper-limit) | The number of app instances reaches the limit.<br>**Applicable version:** 14 and later |
| [16000078](../errorcode-ability.md#16000078-multiinstance-mode-is-not-supported) | The multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000079](../errorcode-ability.md#16000079-appinstancekey-cannot-be-specified) | The APP_INSTANCE_KEY cannot be specified.<br>**Applicable version:** 14 and later |
| [16000080](../errorcode-ability.md#16000080-new-instances-cannot-be-created) | Creating a new instance is not supported.<br>**Applicable version:** 14 and later |

## startAbilityWithAccount

```TypeScript
startAbilityWithAccount(want: Want, accountId: number, options: StartOptions, callback: AsyncCallback<void>): void
```

Starts an ability with the account ID and start options specified. This API can be called only on the main thread.It uses an asynchronous callback to return the result.
> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).

**Since:** 9

**Required permissions:** ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-startAbilityWithAccount(want: Want, accountId: int, options: StartOptions, callback: AsyncCallback<void>): void--><!--Device-ServiceExtensionContext-startAbilityWithAccount(want: Want, accountId: int, options: StartOptions, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |
| accountId | number | Yes | ID of the target system account. |
| options | [StartOptions](arkts-ability-app-ability-startoptions-startoptions-c-sys.md) | Yes | Parameters used for starting the ability. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the ability is started, **err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type.<br>**Applicable version:** 9 and later |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000010](../errorcode-ability.md#16000010-continuation-flag-is-forbidden) | The call with the continuation and prepare continuation flag is forbidden.<br>**Applicable version:** 9 and later |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000055](../errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled.<br>**Applicable version:** 10 and later |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM.<br>**Applicable version:** 10 and later |
| [16000019](../errorcode-ability.md#16000019-no-matching-ability-is-found-during-implicit-startup) | No matching ability is found.<br>**Applicable version:** 12 and later |
| [16000073](../errorcode-ability.md#16000073-appcloneindex-is-invalid) | The app clone index is invalid.<br>**Applicable version:** 12 and later |
| [16000071](../errorcode-ability.md#16000071-application-clone-is-not-supported) | App clone is not supported.<br>**Applicable version:** 14 and later |
| [16000072](../errorcode-ability.md#16000072-multiapp-mode-is-not-supported) | App clone or multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000076](../errorcode-ability.md#16000076-appinstancekey-does-not-exist) | The app instance key is invalid.<br>**Applicable version:** 14 and later |
| [16000077](../errorcode-ability.md#16000077-number-of-application-instances-reaches-the-upper-limit) | The number of app instances reaches the limit.<br>**Applicable version:** 14 and later |
| [16000078](../errorcode-ability.md#16000078-multiinstance-mode-is-not-supported) | The multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000079](../errorcode-ability.md#16000079-appinstancekey-cannot-be-specified) | The APP_INSTANCE_KEY cannot be specified.<br>**Applicable version:** 14 and later |
| [16000080](../errorcode-ability.md#16000080-new-instances-cannot-be-created) | Creating a new instance is not supported.<br>**Applicable version:** 14 and later |

## startAbilityWithAccount

```TypeScript
startAbilityWithAccount(want: Want, accountId: number, options?: StartOptions): Promise<void>
```

Starts an ability with the account ID specified. This API can be called only on the main thread. It uses a promise to return the result asynchronously.
> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).

**Since:** 9

**Required permissions:** ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-startAbilityWithAccount(want: Want, accountId: int, options?: StartOptions): Promise<void>--><!--Device-ServiceExtensionContext-startAbilityWithAccount(want: Want, accountId: int, options?: StartOptions): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |
| accountId | number | Yes | ID of the target system account. |
| options | [StartOptions](arkts-ability-app-ability-startoptions-startoptions-c-sys.md) | No | Parameters used for starting the ability. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000010](../errorcode-ability.md#16000010-continuation-flag-is-forbidden) | The call with the continuation and prepare continuation flag is forbidden. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled. |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000055](../errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [16000019](../errorcode-ability.md#16000019-no-matching-ability-is-found-during-implicit-startup) | No matching ability is found.<br>**Applicable version:** 12 and later |
| [16000073](../errorcode-ability.md#16000073-appcloneindex-is-invalid) | The app clone index is invalid.<br>**Applicable version:** 12 and later |
| [16000071](../errorcode-ability.md#16000071-application-clone-is-not-supported) | App clone is not supported.<br>**Applicable version:** 14 and later |
| [16000072](../errorcode-ability.md#16000072-multiapp-mode-is-not-supported) | App clone or multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000076](../errorcode-ability.md#16000076-appinstancekey-does-not-exist) | The app instance key is invalid.<br>**Applicable version:** 14 and later |
| [16000077](../errorcode-ability.md#16000077-number-of-application-instances-reaches-the-upper-limit) | The number of app instances reaches the limit.<br>**Applicable version:** 14 and later |
| [16000078](../errorcode-ability.md#16000078-multiinstance-mode-is-not-supported) | The multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000079](../errorcode-ability.md#16000079-appinstancekey-cannot-be-specified) | The APP_INSTANCE_KEY cannot be specified.<br>**Applicable version:** 14 and later |
| [16000080](../errorcode-ability.md#16000080-new-instances-cannot-be-created) | Creating a new instance is not supported.<br>**Applicable version:** 14 and later |

## startRecentAbility

```TypeScript
startRecentAbility(want: Want, callback: AsyncCallback<void>): void
```

Starts an ability. If the ability has multiple instances, the latest instance is started. This API can be called only on the main thread. It uses an asynchronous callback to return the result.
> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-startRecentAbility(want: Want, callback: AsyncCallback<void>): void--><!--Device-ServiceExtensionContext-startRecentAbility(want: Want, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the ability is started, **err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000010](../errorcode-ability.md#16000010-continuation-flag-is-forbidden) | The call with the continuation and prepare continuation flag is forbidden. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000055](../errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface.<br>**Applicable version:** 10 and later |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api.<br>**Applicable version:** 14 and later |
| [16000071](../errorcode-ability.md#16000071-application-clone-is-not-supported) | App clone is not supported.<br>**Applicable version:** 14 and later |
| [16000072](../errorcode-ability.md#16000072-multiapp-mode-is-not-supported) | App clone or multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000073](../errorcode-ability.md#16000073-appcloneindex-is-invalid) | The app clone index is invalid.<br>**Applicable version:** 14 and later |
| [16000076](../errorcode-ability.md#16000076-appinstancekey-does-not-exist) | The app instance key is invalid.<br>**Applicable version:** 14 and later |
| [16000077](../errorcode-ability.md#16000077-number-of-application-instances-reaches-the-upper-limit) | The number of app instances reaches the limit.<br>**Applicable version:** 14 and later |
| [16000078](../errorcode-ability.md#16000078-multiinstance-mode-is-not-supported) | The multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000079](../errorcode-ability.md#16000079-appinstancekey-cannot-be-specified) | The APP_INSTANCE_KEY cannot be specified.<br>**Applicable version:** 14 and later |
| [16000080](../errorcode-ability.md#16000080-new-instances-cannot-be-created) | Creating a new instance is not supported.<br>**Applicable version:** 14 and later |

## startRecentAbility

```TypeScript
startRecentAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void
```

Starts an ability. If the ability has multiple instances, the latest instance is started. This API can be called only on the main thread. It uses an asynchronous callback to return the result.

You can use this API to carry start options.
> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-startRecentAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void--><!--Device-ServiceExtensionContext-startRecentAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |
| options | [StartOptions](arkts-ability-app-ability-startoptions-startoptions-c-sys.md) | Yes | Parameters used for starting the ability. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the ability is started, **err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type.<br>**Applicable version:** 9 and later |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000010](../errorcode-ability.md#16000010-continuation-flag-is-forbidden) | The call with the continuation and prepare continuation flag is forbidden.<br>**Applicable version:** 9 and later |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000055](../errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface.<br>**Applicable version:** 10 and later |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api.<br>**Applicable version:** 14 and later |
| [16000071](../errorcode-ability.md#16000071-application-clone-is-not-supported) | App clone is not supported.<br>**Applicable version:** 14 and later |
| [16000072](../errorcode-ability.md#16000072-multiapp-mode-is-not-supported) | App clone or multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000073](../errorcode-ability.md#16000073-appcloneindex-is-invalid) | The app clone index is invalid.<br>**Applicable version:** 14 and later |
| [16000076](../errorcode-ability.md#16000076-appinstancekey-does-not-exist) | The app instance key is invalid.<br>**Applicable version:** 14 and later |
| [16000077](../errorcode-ability.md#16000077-number-of-application-instances-reaches-the-upper-limit) | The number of app instances reaches the limit.<br>**Applicable version:** 14 and later |
| [16000078](../errorcode-ability.md#16000078-multiinstance-mode-is-not-supported) | The multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000079](../errorcode-ability.md#16000079-appinstancekey-cannot-be-specified) | The APP_INSTANCE_KEY cannot be specified.<br>**Applicable version:** 14 and later |
| [16000080](../errorcode-ability.md#16000080-new-instances-cannot-be-created) | Creating a new instance is not supported.<br>**Applicable version:** 14 and later |

## startRecentAbility

```TypeScript
startRecentAbility(want: Want, options?: StartOptions): Promise<void>
```

Starts an ability. If the ability has multiple instances, the latest instance is started. This API uses a promise to return the result asynchronously. It can be called only on the main thread.
> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-startRecentAbility(want: Want, options?: StartOptions): Promise<void>--><!--Device-ServiceExtensionContext-startRecentAbility(want: Want, options?: StartOptions): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |
| options | [StartOptions](arkts-ability-app-ability-startoptions-startoptions-c-sys.md) | No | Parameters used for starting the ability. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000010](../errorcode-ability.md#16000010-continuation-flag-is-forbidden) | The call with the continuation and prepare continuation flag is forbidden. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000055](../errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface.<br>**Applicable version:** 10 and later |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api.<br>**Applicable version:** 14 and later |
| [16000071](../errorcode-ability.md#16000071-application-clone-is-not-supported) | App clone is not supported.<br>**Applicable version:** 14 and later |
| [16000072](../errorcode-ability.md#16000072-multiapp-mode-is-not-supported) | App clone or multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000073](../errorcode-ability.md#16000073-appcloneindex-is-invalid) | The app clone index is invalid.<br>**Applicable version:** 14 and later |
| [16000076](../errorcode-ability.md#16000076-appinstancekey-does-not-exist) | The app instance key is invalid.<br>**Applicable version:** 14 and later |
| [16000077](../errorcode-ability.md#16000077-number-of-application-instances-reaches-the-upper-limit) | The number of app instances reaches the limit.<br>**Applicable version:** 14 and later |
| [16000078](../errorcode-ability.md#16000078-multiinstance-mode-is-not-supported) | The multi-instance is not supported.<br>**Applicable version:** 14 and later |
| [16000079](../errorcode-ability.md#16000079-appinstancekey-cannot-be-specified) | The APP_INSTANCE_KEY cannot be specified.<br>**Applicable version:** 14 and later |
| [16000080](../errorcode-ability.md#16000080-new-instances-cannot-be-created) | Creating a new instance is not supported.<br>**Applicable version:** 14 and later |

## startServiceExtensionAbility

```TypeScript
startServiceExtensionAbility(want: Want, callback: AsyncCallback<void>): void
```

Starts a ServiceExtensionAbility. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-startServiceExtensionAbility(want: Want, callback: AsyncCallback<void>): void--><!--Device-ServiceExtensionContext-startServiceExtensionAbility(want: Want, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the ServiceExtensionAbility is started, **err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component.<br>**Applicable version:** 10 and later |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled.<br>**Applicable version:** 10 and later |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM.<br>**Applicable version:** 10 and later |
| [16000019](../errorcode-ability.md#16000019-no-matching-ability-is-found-during-implicit-startup) | No matching ability is found.<br>**Applicable version:** 12 and later |

## startServiceExtensionAbility

```TypeScript
startServiceExtensionAbility(want: Want): Promise<void>
```

Starts a ServiceExtensionAbility. This API uses a promise to return the result asynchronously.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-startServiceExtensionAbility(want: Want): Promise<void>--><!--Device-ServiceExtensionContext-startServiceExtensionAbility(want: Want): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component.<br>**Applicable version:** 10 and later |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled.<br>**Applicable version:** 10 and later |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM.<br>**Applicable version:** 10 and later |
| [16000019](../errorcode-ability.md#16000019-no-matching-ability-is-found-during-implicit-startup) | No matching ability is found.<br>**Applicable version:** 12 and later |

## startServiceExtensionAbilityWithAccount

```TypeScript
startServiceExtensionAbilityWithAccount(want: Want, accountId: number, callback: AsyncCallback<void>): void
```

Starts a ServiceExtensionAbility with the account ID specified. This API uses an asynchronous callback to return the result.
> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).  
> > Permission verification is not required when **accountId** specifies the current user.

**Since:** 9

**Required permissions:** ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-startServiceExtensionAbilityWithAccount(want: Want, accountId: int, callback: AsyncCallback<void>): void--><!--Device-ServiceExtensionContext-startServiceExtensionAbilityWithAccount(want: Want, accountId: int, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |
| accountId | number | Yes | ID of the target system account. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the ServiceExtensionAbility is started, **err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component.<br>**Applicable version:** 10 and later |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled.<br>**Applicable version:** 10 and later |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM.<br>**Applicable version:** 10 and later |
| [16000019](../errorcode-ability.md#16000019-no-matching-ability-is-found-during-implicit-startup) | No matching ability is found.<br>**Applicable version:** 12 and later |

## startServiceExtensionAbilityWithAccount

```TypeScript
startServiceExtensionAbilityWithAccount(want: Want, accountId: number): Promise<void>
```

Starts a ServiceExtensionAbility with the account ID specified. This API uses a promise to return the result asynchronously.
> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).  
> > Permission verification is not required when **accountId** specifies the current user.

**Since:** 9

**Required permissions:** ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-startServiceExtensionAbilityWithAccount(want: Want, accountId: int): Promise<void>--><!--Device-ServiceExtensionContext-startServiceExtensionAbilityWithAccount(want: Want, accountId: int): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |
| accountId | number | Yes | ID of the target system account. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component.<br>**Applicable version:** 10 and later |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled.<br>**Applicable version:** 10 and later |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM.<br>**Applicable version:** 10 and later |
| [16000019](../errorcode-ability.md#16000019-no-matching-ability-is-found-during-implicit-startup) | No matching ability is found.<br>**Applicable version:** 12 and later |

## startUIAbilities

```TypeScript
startUIAbilities(wantList: Array<Want>): Promise<void>
```

Starts multiple UIAbility components simultaneously. This API uses a promise to return the result asynchronously.

You can pass the Want information of multiple UIAbility instances, which can point to one or more applications. If all the UIAbility instances can be started successfully, the system displays these UIAbility instances in multiple windows simultaneously. Depending on the window handling, different devices may have varying display effects (including window shape, quantity, and layout).

This API can be properly called on phones and tablets. If it is called on other devices, error code 801 is returned.
> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-startUIAbilities(wantList: Array<Want>): Promise<void>--><!--Device-ServiceExtensionContext-startUIAbilities(wantList: Array<Want>): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wantList | Array&lt;Want&gt; | Yes | List of launch parameters for multiple UIAbility components to be started simultaneously. A maximum of four Want objects can be passed. The **Want** parameter does not support implicit launch, cross-user launch, distributed launch, instant installation, or on-demand loading. By default, the main application is launched unless specified otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [16000073](../errorcode-ability.md#16000073-appcloneindex-is-invalid) | The app clone index is invalid. |
| [16000076](../errorcode-ability.md#16000076-appinstancekey-does-not-exist) | The app instance key is invalid. |
| [16000080](../errorcode-ability.md#16000080-new-instances-cannot-be-created) | Creating a new instance is not supported. |
| [16000120](../errorcode-ability.md#16000120-number-of-elements-in-wantlist-exceeds-4-or-is-less-than-1) | A maximum of four UIAbility instances can be started simultaneously.The current parameter exceeds the maximum number or is less than 1. |
| [16000121](../errorcode-ability.md#16000121-target-component-is-not-a-uiability) | The target component type is not a UIAbility. |
| [16000122](../errorcode-ability.md#16000122-target-component-is-intercepted-by-the-system-control-module) | The target component is blocked by the system module and does not support startup. |
| [16000123](../errorcode-ability.md#16000123-implicit-startup-is-not-supported) | Implicit startup is not supported. |
| [16000124](../errorcode-ability.md#16000124-starting-a-distributed-uiability-is-not-supported) | Starting a remote UIAbility is not supported. |
| [16000125](../errorcode-ability.md#16000125-starting-a-plugin-is-not-supported) | Starting a plugin UIAbility is not supported. |
| [16000126](../errorcode-ability.md#16000126-dlp-files-cannot-be-started) | Starting DLP files is not supported. |

## startUIServiceExtensionAbility

```TypeScript
startUIServiceExtensionAbility(want: Want): Promise<void>
```

Starts a new [UIServiceExtensionAbility](arkts-ability-app-ability-uiserviceextensionability-uiserviceextensionability-c-sys.md). This API uses a promise to return the result asynchronously.
> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](../../../application-models/component-startup-rules.md).

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-startUIServiceExtensionAbility(want: Want): Promise<void>--><!--Device-ServiceExtensionContext-startUIServiceExtensionAbility(want: Want): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Indicates the want info to start. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled. |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM. |
| [16000019](../errorcode-ability.md#16000019-no-matching-ability-is-found-during-implicit-startup) | No matching ability is found. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |

## stopServiceExtensionAbility

```TypeScript
stopServiceExtensionAbility(want: Want, callback: AsyncCallback<void>): void
```

Stops a ServiceExtensionAbility. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-stopServiceExtensionAbility(want: Want, callback: AsyncCallback<void>): void--><!--Device-ServiceExtensionContext-stopServiceExtensionAbility(want: Want, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the ServiceExtensionAbility is stopped, **err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface.<br>**Applicable version:** 10 and later |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component.<br>**Applicable version:** 10 and later |

## stopServiceExtensionAbility

```TypeScript
stopServiceExtensionAbility(want: Want): Promise<void>
```

Stops a ServiceExtensionAbility. This API uses a promise to return the result asynchronously.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-stopServiceExtensionAbility(want: Want): Promise<void>--><!--Device-ServiceExtensionContext-stopServiceExtensionAbility(want: Want): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface.<br>**Applicable version:** 10 and later |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component.<br>**Applicable version:** 10 and later |

## stopServiceExtensionAbilityWithAccount

```TypeScript
stopServiceExtensionAbilityWithAccount(want: Want, accountId: number, callback: AsyncCallback<void>): void
```

Stops a ServiceExtensionAbility with the specified account. This API uses an asynchronous callback to return the result.
> **NOTE**  
>  
> Permission verification is not required when **accountId** specifies the current user.

**Since:** 9

**Required permissions:** ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-stopServiceExtensionAbilityWithAccount(want: Want, accountId: int, callback: AsyncCallback<void>): void--><!--Device-ServiceExtensionContext-stopServiceExtensionAbilityWithAccount(want: Want, accountId: int, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |
| accountId | number | Yes | ID of the target system account. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the ServiceExtensionAbility is stopped, **err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component.<br>**Applicable version:** 10 and later |

## stopServiceExtensionAbilityWithAccount

```TypeScript
stopServiceExtensionAbilityWithAccount(want: Want, accountId: number): Promise<void>
```

Stops a ServiceExtensionAbility with the specified account. This API uses a promise to return the result asynchronously.
> **NOTE**  
>  
> Permission verification is not required when **accountId** specifies the current user.

**Since:** 9

**Required permissions:** ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-stopServiceExtensionAbilityWithAccount(want: Want, accountId: int): Promise<void>--><!--Device-ServiceExtensionContext-stopServiceExtensionAbilityWithAccount(want: Want, accountId: int): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |
| accountId | number | Yes | ID of the target system account. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component.<br>**Applicable version:** 10 and later |

## terminateSelf

```TypeScript
terminateSelf(callback: AsyncCallback<void>): void
```

Terminates this ability. This API can be called only on the main thread. It uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-terminateSelf(callback: AsyncCallback<void>): void--><!--Device-ServiceExtensionContext-terminateSelf(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the ability is terminated, **err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist.<br>**Applicable version:** 9 and later |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component.<br>**Applicable version:** 9 and later |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission.<br>**Applicable version:** 9 and later |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

## terminateSelf

```TypeScript
terminateSelf(): Promise<void>
```

Terminates this ability. This API can be called only on the main thread. It uses a promise to return the result asynchronously.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-ServiceExtensionContext-terminateSelf(): Promise<void>--><!--Device-ServiceExtensionContext-terminateSelf(): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist.<br>**Applicable version:** 9 and later |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component.<br>**Applicable version:** 9 and later |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission.<br>**Applicable version:** 9 and later |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

