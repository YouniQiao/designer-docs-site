# isRequestPublishFormSupported

## isRequestPublishFormSupported

```TypeScript
function isRequestPublishFormSupported(callback: AsyncCallback<boolean>): void
```

Checks whether a widget can be added to the widget host. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | Callback function that returns the query result. true: The widget  can be added to the widget host. false: The widget cannot be added to the widget host. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16501000 | An internal functional error occurred. |

## isRequestPublishFormSupported

```TypeScript
function isRequestPublishFormSupported(): Promise<boolean>
```

Checks whether a widget can be added to the widget host. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise that returns whether a widget can be added to the widget host.   true: The widget can be added to the widget host.   false: The widget cannot be added to the widget host. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not a system application. |
| 16500050 | IPC connection error. |
| 16501000 | An internal functional error occurred. |

