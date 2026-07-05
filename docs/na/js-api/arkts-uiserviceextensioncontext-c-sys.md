# UIServiceExtensionContext

UIServiceExtensionContext模块是 [UIServiceExtension]./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility的上下文环境，继承自 [ExtensionContext](../../apis-ability-kit/arkts-apis/arkts-extensioncontext-c.md#ExtensionContext)。 UIServiceExtensionContext模块提供访问 [UIServiceExtension]./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility特定资源以及具有的能力，包括启 动、停止、绑定、解绑Ability。 > **说明：** > > - 本模块接口需要在主线程中使用，不要在Worker、TaskPool等子线程中使用。

**Inheritance:** UIServiceExtensionContextextends: ExtensionContext.

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## connectServiceExtensionAbility

```TypeScript
connectServiceExtensionAbility(want: Want, options: ConnectOptions): long
```

连接到[UIExtensionAbility]./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility，返回连接id。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want parameter. |
| options | ConnectOptions | Yes | Connection options. |

**Return value:**

| Type | Description |
| --- | --- |
| long | Connection ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |

## disconnectServiceExtensionAbility

```TypeScript
disconnectServiceExtensionAbility(connectionId: long): Promise<void>
```

断开与[UIExtensionAbility]./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility的连接，与 [connectServiceExtensionAbility](../../apis-ability-kit/arkts-apis/arkts-uiserviceextensioncontext-c-sys.md#connectServiceExtensionAbility)功能相反。使用Promise异步回调。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connectionId | long | Yes | 从  [connectServiceExtensionAbility](../../apis-ability-kit/arkts-apis/arkts-uiserviceextensioncontext-c-sys.md#connectServiceExtensionAbility)接口返回的连接Id。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

## startAbility

```TypeScript
startAbility(want: Want, options?: StartOptions): Promise<void>
```

启动Ability。使用Promise异步回调。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want类型参数，传入需要启动的ability的信息，如Ability名称，Bundle名称等。 |
| options | StartOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
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
| 16000019 | No matching ability is found. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |

## startAbilityByType

```TypeScript
startAbilityByType(type: string, wantParam: Record<string, Object>,
    abilityStartCallback: AbilityStartCallback): Promise<void>
```

按目标ability的类型启动[UIAbility]./../@ohos.app.ability.UIAbility或 [UIExtensionAbility]./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility。仅支持处于前台的应用调用。使用Promise异步回调 。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 目标ability类型。 |
| wantParam | Record&lt;string, Object> | Yes | Want参数。 |
| abilityStartCallback | AbilityStartCallback | Yes | 拉起UIExtensionAbility执行结果的回调。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  . Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

## startAbilityByType

```TypeScript
startAbilityByType(type: string, wantParam: Record<string, RecordData>,
    abilityStartCallback: AbilityStartCallback): Promise<void>
```

按目标ability的类型启动[UIAbility]./../@ohos.app.ability.UIAbility或 [UIExtensionAbility]./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility。仅支持处于前台的应用调用。使用Promise异步回调 。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 目标ability类型。 |
| wantParam | Record&lt;string, RecordData> | Yes | Want参数。 |
| abilityStartCallback | AbilityStartCallback | Yes | 拉起UIExtensionAbility执行结果的回调。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. Interface caller is not a system app. |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed;  2.Send restart message to system service failed; 3.System service failed to communicate with dependency module. |

## terminateSelf

```TypeScript
terminateSelf(): Promise<void>
```

销毁[UIServiceExtension]./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility。使用Promise异 步回调。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

