# UIServiceExtensionContext (System API)

The UIServiceExtensionContext module provides the context environment for a [UIServiceExtensionAbility](arkts-ability-app-ability-uiserviceextensionability-uiserviceextensionability-c-sys.md). It inherits from [ExtensionContext](arkts-ability-extensioncontext-c.md).

UIServiceExtensionContext provides access to a [UIServiceExtensionAbility](arkts-ability-app-ability-uiserviceextensionability-uiserviceextensionability-c-sys.md) and APIs for operating the ability, for example, starting, terminating, connecting, and disconnecting ability.

> **NOTE**  
>  
> - The APIs of this module must be used on the main thread, but not on child threads such as Worker and TaskPool.

**Inheritance/Implementation:** UIServiceExtensionContext extends [ExtensionContext](arkts-ability-extensioncontext-c.md)

**Since:** 14

<!--Device-unnamed-declare class UIServiceExtensionContext extends ExtensionContext--><!--Device-unnamed-declare class UIServiceExtensionContext extends ExtensionContext-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

<a id="connectserviceextensionability"></a>
## connectServiceExtensionAbility

```TypeScript
connectServiceExtensionAbility(want: Want, options: ConnectOptions): number
```

Connects to a [UIExtensionAbility](arkts-ability-app-ability-uiextensionability-uiextensionability-c.md) and returns the connection ID.

> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-UIServiceExtensionContext-connectServiceExtensionAbility(want: Want, options: ConnectOptions): long--><!--Device-UIServiceExtensionContext-connectServiceExtensionAbility(want: Want, options: ConnectOptions): long-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want parameter. |
| options | [ConnectOptions](arkts-ability-ability-connectoptions-t.md) | Yes | Connection options. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Connection ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
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
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000055](../errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |

<a id="disconnectserviceextensionability"></a>
## disconnectServiceExtensionAbility

```TypeScript
disconnectServiceExtensionAbility(connectionId: number): Promise<void>
```

Disconnects from a [UIExtensionAbility](arkts-ability-app-ability-uiextensionability-uiextensionability-c.md). This API is opposite to [connectServiceExtensionAbility](arkts-ability-uiserviceextensioncontext-c-sys.md#connectserviceextensionability-1). This API uses a promise to return the result.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-UIServiceExtensionContext-disconnectServiceExtensionAbility(connectionId: long): Promise<void>--><!--Device-UIServiceExtensionContext-disconnectServiceExtensionAbility(connectionId: long): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connectionId | number | Yes | Connection ID returned by [connectServiceExtensionAbility](arkts-ability-uiserviceextensioncontext-c-sys.md#connectserviceextensionability-1). |

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

<a id="startability"></a>
## startAbility

```TypeScript
startAbility(want: Want, options?: StartOptions): Promise<void>
```

Starts an ability. This API uses a promise to return the result.

> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-UIServiceExtensionContext-startAbility(want: Want, options?: StartOptions): Promise<void>--><!--Device-UIServiceExtensionContext-startAbility(want: Want, options?: StartOptions): Promise<void>-End-->

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
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
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
| [16000019](../errorcode-ability.md#16000019-no-matching-ability-is-found-during-implicit-startup) | No matching ability is found. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000055](../errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |

<a id="startabilitybytype"></a>
## startAbilityByType

```TypeScript
startAbilityByType(type: string, wantParam: Record<string, Object>,
    abilityStartCallback: AbilityStartCallback): Promise<void>
```

Starts a [UIAbility](arkts-app-ability-uiability.md) or [UIExtensionAbility](arkts-ability-app-ability-uiextensionability-uiextensionability-c.md) based on the type of the target ability. This API can be called only by applications running in the foreground. This API uses a promise to return the result.

> **NOTE**  
>  
> For details about the startup rules for the components in the stage model, see  
> [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-UIServiceExtensionContext-startAbilityByType(type: string, wantParam: Record<string, Object>,
    abilityStartCallback: AbilityStartCallback): Promise<void>--><!--Device-UIServiceExtensionContext-startAbilityByType(type: string, wantParam: Record<string, Object>,
    abilityStartCallback: AbilityStartCallback): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | Type of the target ability. |
| wantParam | [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)&lt;string, Object&gt; | Yes | Want parameter. |
| abilityStartCallback | [AbilityStartCallback](arkts-ability-abilitystartcallback-c.md) | Yes | Callback invoked to return the UIExtensionAbility startup result. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;. Incorrect parameter types; 3. Parameter verification failed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

<a id="terminateself"></a>
## terminateSelf

```TypeScript
terminateSelf(): Promise<void>
```

Terminates this [UIServiceExtensionAbility](arkts-ability-app-ability-uiserviceextensionability-uiserviceextensionability-c-sys.md). This API uses a promise to return the result.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-UIServiceExtensionContext-terminateSelf(): Promise<void>--><!--Device-UIServiceExtensionContext-terminateSelf(): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

