# UIServiceExtensionContext

The UIServiceExtensionContext module provides the context environment for a [UIServiceExtensionAbility]./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility. It inherits from [ExtensionContext](arkts-extensioncontext-c.md#ExtensionContext). UIServiceExtensionContext provides access to a [UIServiceExtensionAbility]./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility and APIs for operating the ability, for example, starting, terminating, connecting, and disconnecting ability. > **NOTE** > > - The APIs of this module must be used on the main thread, but not on child threads such as Worker and TaskPool.

**继承实现关系：** UIServiceExtensionContext继承自：ExtensionContext。

**起始版本：** 14

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

## connectServiceExtensionAbility

```TypeScript
connectServiceExtensionAbility(want: Want, options: ConnectOptions): long
```

Connects to a [UIExtensionAbility]./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility and returns the connection ID. > **NOTE** > > For details about the startup rules for the components in the stage model, see > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Want parameter. |
| options | ConnectOptions | 是 | Connection options. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Connection ID. |

**错误码：**

| 错误码ID | 错误信息 |
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

Disconnects from a [UIExtensionAbility]./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility. This API is opposite to [connectServiceExtensionAbility](arkts-uiserviceextensioncontext-c-sys.md#connectServiceExtensionAbility) . This API uses a promise to return the result.

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| connectionId | long | 是 | Connection ID returned by  [connectServiceExtensionAbility](arkts-uiserviceextensioncontext-c-sys.md#connectServiceExtensionAbility). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

## startAbility

```TypeScript
startAbility(want: Want, options?: StartOptions): Promise<void>
```

Starts an ability. This API uses a promise to return the result. > **NOTE** > > For details about the startup rules for the components in the stage model, see > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Want information about the target ability, such as the ability name and bundle name. |
| options | StartOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
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

Starts a [UIAbility]./../@ohos.app.ability.UIAbility or [UIExtensionAbility]./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility based on the type of the target ability. This API can be called only by applications running in the foreground. This API uses a promise to return the result. > **NOTE** > > For details about the startup rules for the components in the stage model, see > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | Type of the target ability. |
| wantParam | Record&lt;string, Object> | 是 | Want parameter. |
| abilityStartCallback | AbilityStartCallback | 是 | Callback invoked to return the UIExtensionAbility startup  result. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  . Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

## startAbilityByType

```TypeScript
startAbilityByType(type: string, wantParam: Record<string, RecordData>,
    abilityStartCallback: AbilityStartCallback): Promise<void>
```

Starts a [UIAbility]./../@ohos.app.ability.UIAbility or [UIExtensionAbility]./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility based on the type of the target ability. This API can be called only by applications running in the foreground. This API uses a promise to return the result. > **NOTE** > > For details about the startup rules for the components in the stage model, see > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | Type of the target ability. |
| wantParam | Record&lt;string, RecordData> | 是 | Want parameter. |
| abilityStartCallback | AbilityStartCallback | 是 | Callback invoked to return the UIExtensionAbility startup  result. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. Interface caller is not a system app. |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed;  2.Send restart message to system service failed; 3.System service failed to communicate with dependency module. |

## terminateSelf

```TypeScript
terminateSelf(): Promise<void>
```

Terminates this [UIServiceExtensionAbility]./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility. This API uses a promise to return the result.

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

