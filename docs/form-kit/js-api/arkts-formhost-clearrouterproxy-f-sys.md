# clearRouterProxy

## clearRouterProxy

```TypeScript
function clearRouterProxy(formIds: Array<string>, callback: AsyncCallback<void>): void
```

Clears the router proxy set for widgets. This API uses an asynchronous callback to return the result.

**Since:** 11

**Required permissions:** 

 ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | Array&lt;string> | Yes | Array of widget IDs. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the router proxy is cleared,  error is undefined; otherwise, an exception is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16501000 | An internal functional error occurred. |
| 16501003 | The form cannot be operated by the current application. |

## clearRouterProxy

```TypeScript
function clearRouterProxy(formIds: Array<string>): Promise<void>
```

Clears the router proxy set for widgets. This API uses a promise to return the result.

**Since:** 11

**Required permissions:** 

 ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | Array&lt;string> | Yes | Array of widget IDs. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16501000 | An internal functional error occurred. |
| 16501003 | The form cannot be operated by the current application. |

