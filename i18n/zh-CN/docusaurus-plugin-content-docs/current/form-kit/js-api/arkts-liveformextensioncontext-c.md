# LiveFormExtensionContext

LiveFormExtensionContext**, inherited from [ExtensionContext]./application/ExtensionContext:ExtensionContext, is the context of [LiveFormExtensionAbility]@ohos.app.form.LiveFormExtensionAbility.

**继承实现关系：** LiveFormExtensionContext继承自：ExtensionContext。

**起始版本：** 20

**系统能力：** SystemCapability.Ability.Form

## connectServiceExtensionAbility

```TypeScript
public connectServiceExtensionAbility(want: Want, connection: ConnectOptions): long
```

Connect a service extension ability.The destination of the connection must be a service extension. You must implement the {@link ConnectOptions} interface to obtain the proxy of the target service extension when the Service extension is connected.

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Indicates the service extension to connect. |
| connection | ConnectOptions | 是 | Indicates the callback of connection. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Returns the connection id. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |
| 16501011 | The form can not support this operation |

## disconnectServiceExtensionAbility

```TypeScript
public disconnectServiceExtensionAbility(connectionId: long): Promise<void>
```

Disconnect an ability to a service extension, in contrast to {@link connectServiceExtensionAbility}.

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| connectionId | long | 是 | the connection id returned from connectServiceExtensionAbility api. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 16501000 | An internal functional error occurred. |
| 16501011 | The form can not support this operation |

## startAbilityByLiveForm

```TypeScript
startAbilityByLiveForm(want: Want): Promise<void>
```

Starts the widget provider (application) page. This API uses a promise to return the result. <br>This API can only be used to start the page of the interactive widget provider (application). If this API is used to start the page of another application, error code 16501011 will be reported. <br>You are advised to call this API in click event callbacks. Calling it in callbacks of other gesture events is not recommended, and direct calls in non-gesture events are not allowed. Otherwise, the error code 16501011 will be reported. <br>In addition, this API can be directly called in the click event callback but cannot be called after a delay. Otherwise, the error code 16501011 will be reported.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Information about the application page to be started.  [Only explicit Want is supported](docroot://application-models/ability-startup-with-explicit-want.md). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported due to limited device capabilities. |
| 16500050 | An IPC connection error happened. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |
| 16501011 | The form can not support this operation |

