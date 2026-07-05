# LiveFormExtensionContext

LiveFormExtensionContext**, inherited from [ExtensionContext]./application/ExtensionContext:ExtensionContext, is the context of [LiveFormExtensionAbility]@ohos.app.form.LiveFormExtensionAbility.

**Inheritance:** LiveFormExtensionContextextends: ExtensionContext.

**Since:** 20

**System capability:** SystemCapability.Ability.Form

## connectServiceExtensionAbility

```TypeScript
public connectServiceExtensionAbility(want: Want, connection: ConnectOptions): long
```

Connect a service extension ability.The destination of the connection must be a service extension. You must implement the {@link ConnectOptions} interface to obtain the proxy of the target service extension when the Service extension is connected.

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates the service extension to connect. |
| connection | ConnectOptions | Yes | Indicates the callback of connection. |

**Return value:**

| Type | Description |
| --- | --- |
| long | Returns the connection id. |

**Error codes:**

| Error Code ID | Error Message |
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

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connectionId | long | Yes | the connection id returned from connectServiceExtensionAbility api. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 16501000 | An internal functional error occurred. |
| 16501011 | The form can not support this operation |

## startAbilityByLiveForm

```TypeScript
startAbilityByLiveForm(want: Want): Promise<void>
```

Starts the widget provider (application) page. This API uses a promise to return the result. <br>This API can only be used to start the page of the interactive widget provider (application). If this API is used to start the page of another application, error code 16501011 will be reported. <br>You are advised to call this API in click event callbacks. Calling it in callbacks of other gesture events is not recommended, and direct calls in non-gesture events are not allowed. Otherwise, the error code 16501011 will be reported. <br>In addition, this API can be directly called in the click event callback but cannot be called after a delay. Otherwise, the error code 16501011 will be reported.

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Information about the application page to be started.  [Only explicit Want is supported](docroot://application-models/ability-startup-with-explicit-want.md). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported due to limited device capabilities. |
| 16500050 | An IPC connection error happened. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |
| 16501011 | The form can not support this operation |

