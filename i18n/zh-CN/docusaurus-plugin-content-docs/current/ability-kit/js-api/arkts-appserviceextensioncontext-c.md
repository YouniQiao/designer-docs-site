# AppServiceExtensionContext

The AppServiceExtensionContext module provides the context environment for the [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md). It inherits from [ExtensionContext](arkts-extensioncontext-c.md#ExtensionContext). AppServiceExtensionContext provides APIs to connect to and disconnect from a ServiceExtensionAbility (an ExtensionAbility for system application background services), as well as to terminate an AppServiceExtensionAbility. Note that a ServiceExtensionAbility can only be developed by system applications and supports connections from third- party applications. > **NOTE** > > - The APIs of this module must be used in the main thread, but not in child threads such as Worker and TaskPool.

**继承实现关系：** AppServiceExtensionContext继承自：ExtensionContext。

**起始版本：** 20

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## connectServiceExtensionAbility

```TypeScript
connectServiceExtensionAbility(want: Want, callback: ConnectOptions): long
```

Connects this AppServiceExtensionAbility to a ServiceExtensionAbility. It enables communication with the ServiceExtensionAbility via a proxy, allowing access to the capabilities exposed by the ServiceExtensionAbility. This API can be called only by the main thread.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Want information about the target ability, such as the ability name and bundle name. |
| callback | ConnectOptions | 是 | Callback used to return the information indicating that the connection is  successful, failed, or interrupted. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Connection ID. The client can call  [disconnectServiceExtensionAbility](arkts-appserviceextensioncontext-c.md#disconnectServiceExtensionAbility) with  this ID for disconnection. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

## disconnectServiceExtensionAbility

```TypeScript
disconnectServiceExtensionAbility(connection: long): Promise<void>
```

Disconnects this AppServiceExtensionAbility from a ServiceExtensionAbility. This API can be called only by the main thread. It uses a promise to return the result.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| connection | long | 是 | Connection ID returned by  [connectServiceExtensionAbility](arkts-appserviceextensioncontext-c.md#connectServiceExtensionAbility). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

## startAbility

```TypeScript
startAbility(want: Want, options?: StartOptions): Promise<void>
```

Starts the UIAbility. This API can be called only by the main thread. It uses a promise to return the result.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

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
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000019 | No matching ability is found. |
| 16000050 | Internal error. |
| 16000055 | Installation-free timed out. |
| 16000071 | App clone is not supported. |
| 16000072 | App clone or multi-instance is not supported. |
| 16000073 | The app clone index is invalid. |
| 16000076 | The app instance key is invalid. |
| 16000077 | The number of app instances reaches the limit. |
| 16000078 | The multi-instance is not supported. |
| 16000079 | The APP_INSTANCE_KEY cannot be specified. |
| 16000080 | Creating a new instance is not supported. |

## terminateSelf

```TypeScript
terminateSelf(): Promise<void>
```

Terminates this AppServiceExtensionAbility. This API can be called only by the main thread. It uses a promise to return the result.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

