# FormExtensionContext

The FormExtensionContext module, inherited from [ExtensionContext]./application/ExtensionContext:ExtensionContext, provides the context environment for the [FormExtensionAbility]@ohos.app.form.FormExtensionAbility. You can use the APIs of this module to start a FormExtensionAbility. > **NOTE** > - The APIs of this module can be used only in the stage model.

**Inheritance:** FormExtensionContextextends: ExtensionContext.

**Since:** 9

**System capability:** SystemCapability.Ability.Form

## connectServiceExtensionAbility

```TypeScript
connectServiceExtensionAbility(want: Want, options: ConnectOptions): long
```

Connects this ability to a ServiceExtensionAbility.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want information about the target ability, such as the ability name and bundle name. |
| options | ConnectOptions | Yes | Callback used to return the information indicating that the connection is successful  , interrupted, or failed. |

**Return value:**

| Type | Description |
| --- | --- |
| long | Returns a connect ID, which will be used for the disconnection. |

**Error codes:**

| Error Code ID | Error Message |
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

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connection | long | Yes | Number returned after  [connectServiceExtensionAbility](arkts-formextensioncontext-c.md#connectServiceExtensionAbility) is called. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the ability is disconnected, err is  undefined; otherwise, err is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

## disconnectServiceExtensionAbility

```TypeScript
disconnectServiceExtensionAbility(connection: long): Promise<void>
```

Disconnects this ability from a ServiceExtensionAbility and after the successful disconnection, sets the remote object returned upon the connection to void. This API uses a promise to return the result.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connection | long | Yes | Number returned after  [connectServiceExtensionAbility](arkts-formextensioncontext-c.md#connectServiceExtensionAbility) is called. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

## startAbility

```TypeScript
startAbility(want: Want, callback: AsyncCallback<void>): void
```

Starts an ability. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Information about the ability to start, such as the bundle name, ability name, and custom  parameters. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the ability is started, err is  undefined; otherwise, err is an error object. |

**Error codes:**

| Error Code ID | Error Message |
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

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Information about the ability to start, such as the bundle name, ability name, and custom  parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | An IPC connection error happened. |
| 16500100 | Failed to obtain the configuration information. |
| 16500101 | The application is not a system application. [since 9 - 11] |
| 16501000 | An internal functional error occurred. |

