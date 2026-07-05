# FormExtensionContext

The FormExtensionContext module, inherited from [ExtensionContext]./application/ExtensionContext:ExtensionContext, provides the context environment for the [FormExtensionAbility]@ohos.app.form.FormExtensionAbility. You can use the APIs of this module to start a FormExtensionAbility. > **NOTE** > - The APIs of this module can be used only in the stage model.

**继承实现关系：** FormExtensionContext继承自：ExtensionContext。

**起始版本：** 9

**系统能力：** SystemCapability.Ability.Form

## connectServiceExtensionAbility

```TypeScript
connectServiceExtensionAbility(want: Want, options: ConnectOptions): long
```

Connects this ability to a ServiceExtensionAbility.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Want information about the target ability, such as the ability name and bundle name. |
| options | ConnectOptions | 是 | Callback used to return the information indicating that the connection is successful  , interrupted, or failed. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Returns a connect ID, which will be used for the disconnection. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Can not start invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |

## disconnectServiceExtensionAbility

```TypeScript
disconnectServiceExtensionAbility(connection: long, callback: AsyncCallback<void>): void
```

Disconnects this ability from a **ServiceExtensionAbility** and after the successful disconnection, sets the **remote** object returned upon the connection to void. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| connection | long | 是 | Number returned after  [connectServiceExtensionAbility](arkts-formextensioncontext-c.md#connectServiceExtensionAbility) is called. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the ability is disconnected, err is  undefined; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

## disconnectServiceExtensionAbility

```TypeScript
disconnectServiceExtensionAbility(connection: long): Promise<void>
```

Disconnects this ability from a ServiceExtensionAbility and after the successful disconnection, sets the remote object returned upon the connection to void. This API uses a promise to return the result.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| connection | long | 是 | Number returned after  [connectServiceExtensionAbility](arkts-formextensioncontext-c.md#connectServiceExtensionAbility) is called. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

## startAbility

```TypeScript
startAbility(want: Want, callback: AsyncCallback<void>): void
```

Starts an ability. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Information about the ability to start, such as the bundle name, ability name, and custom  parameters. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the ability is started, err is  undefined; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | An IPC connection error happened. |
| 16500100 | Failed to obtain the configuration information. |
| 16500101 | The application is not a system application. [since 9 - 11] |
| 16501000 | An internal functional error occurred. |

## startAbility

```TypeScript
startAbility(want: Want): Promise<void>
```

Starts an ability. This API uses a promise to return the result.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Information about the ability to start, such as the bundle name, ability name, and custom  parameters. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | An IPC connection error happened. |
| 16500100 | Failed to obtain the configuration information. |
| 16500101 | The application is not a system application. [since 9 - 11] |
| 16501000 | An internal functional error occurred. |

