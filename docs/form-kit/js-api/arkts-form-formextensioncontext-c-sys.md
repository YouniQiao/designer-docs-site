# FormExtensionContext

The FormExtensionContext module, inherited from [ExtensionContext](../../apis-ability-kit/arkts-apis/arkts-ability-extensioncontext-c.md#extensioncontext), provides the context environment for the [FormExtensionAbility](arkts-app-form-formextensionability.md). You can use the APIs of this module to start a FormExtensionAbility. > **NOTE** > - The APIs of this module can be used only in the stage model.

**Inheritance/Implementation:** FormExtensionContext extends [ExtensionContext](../../apis-ability-kit/arkts-apis/arkts-ability-extensioncontext-c.md#extensioncontext)

**Since:** 9

**System capability:** SystemCapability.Ability.Form

## connectServiceExtensionAbility

```TypeScript
connectServiceExtensionAbility(want: Want, options: ConnectOptions): number
```

Connects this ability to a ServiceExtensionAbility.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want information about the target ability, such as the ability name and bundle name. |
| options | ConnectOptions | Yes | Callback used to return the information indicating that the connection is successful, interrupted, or failed. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns a connect ID, which will be used for the disconnection. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [16000001](../../apis-ability-kit/errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../../apis-ability-kit/errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../../apis-ability-kit/errorcode-ability.md#16000004-visibility-verification-failure) | Can not start invisible component. |
| [16000005](../../apis-ability-kit/errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../../apis-ability-kit/errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../../apis-ability-kit/errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000011](../../apis-ability-kit/errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../../apis-ability-kit/errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000053](../../apis-ability-kit/errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000055](../../apis-ability-kit/errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |

## disconnectServiceExtensionAbility

```TypeScript
disconnectServiceExtensionAbility(connection: number, callback: AsyncCallback<void>): void
```

Disconnects this ability from a **ServiceExtensionAbility** and after the successful disconnection, sets the **remote** object returned upon the connection to void. This API uses an asynchronous callback to return the result.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connection | number | Yes | Number returned after[connectServiceExtensionAbility](arkts-form-formextensioncontext-c-sys.md#connectserviceextensionability-1) is called. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the ability is disconnected, **err** is**undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [16000011](../../apis-ability-kit/errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../../apis-ability-kit/errorcode-ability.md#16000050-internal-error) | Internal error. |

## disconnectServiceExtensionAbility

```TypeScript
disconnectServiceExtensionAbility(connection: number): Promise<void>
```

Disconnects this ability from a ServiceExtensionAbility and after the successful disconnection, sets the remote object returned upon the connection to void. This API uses a promise to return the result.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connection | number | Yes | Number returned after[connectServiceExtensionAbility](arkts-form-formextensioncontext-c-sys.md#connectserviceextensionability-1) is called. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [16000011](../../apis-ability-kit/errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../../apis-ability-kit/errorcode-ability.md#16000050-internal-error) | Internal error. |

## startAbility

```TypeScript
startAbility(want: Want, callback: AsyncCallback<void>): void
```

Starts an ability. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Information about the ability to start, such as the bundle name, ability name, and customparameters. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the ability is started, **err** isundefined; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [16500050](../errorcode-form.md#16500050-ipc-failure) | An IPC connection error happened. |
| [16500100](../errorcode-form.md#16500100-failed-to-obtain-widget-configuration-information) | Failed to obtain the configuration information. |
| 16500101 | The application is not a system application.<br>**Applicable version:** 9 - 11 |
| [16501000](../errorcode-form.md#16501000-internal-function-error) | An internal functional error occurred. |

## startAbility

```TypeScript
startAbility(want: Want): Promise<void>
```

Starts an ability. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Information about the ability to start, such as the bundle name, ability name, and customparameters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [16500050](../errorcode-form.md#16500050-ipc-failure) | An IPC connection error happened. |
| [16500100](../errorcode-form.md#16500100-failed-to-obtain-widget-configuration-information) | Failed to obtain the configuration information. |
| 16500101 | The application is not a system application.<br>**Applicable version:** 9 - 11 |
| [16501000](../errorcode-form.md#16501000-internal-function-error) | An internal functional error occurred. |

