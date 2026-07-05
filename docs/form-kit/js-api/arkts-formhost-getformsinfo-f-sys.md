# getFormsInfo

## getFormsInfo

```TypeScript
function getFormsInfo(bundleName: string, callback: AsyncCallback<Array<formInfo.FormInfo>>): void
```

Obtains the widget information provided by a specified application on the device (excluding template widgets). This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the application. |
| callback | AsyncCallback&lt;Array&lt;formInfo.FormInfo>> | Yes | Callback used to return the result. If the widget  information is obtained, error is undefined and data is the information obtained; otherwise, error  is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |

## getFormsInfo

```TypeScript
function getFormsInfo(
    bundleName: string,
    moduleName: string,
    callback: AsyncCallback<Array<formInfo.FormInfo>>
  ): void
```

Obtains the widget information provided by a specified application on the device (excluding template widgets). This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the application. |
| moduleName | string | Yes | Module name. |
| callback | AsyncCallback&lt;Array&lt;formInfo.FormInfo>> | Yes | Callback used to return the result. If the widget  information is obtained, error is undefined and data is the information obtained; otherwise, error  is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |

## getFormsInfo

```TypeScript
function getFormsInfo(bundleName: string, moduleName?: string): Promise<Array<formInfo.FormInfo>>
```

Obtains the widget information provided by a specified application on the device (excluding template widgets). This API uses a promise to return the result.

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the application. |
| moduleName | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;formInfo.FormInfo>> | Promise used to return the information obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |

## getFormsInfo

```TypeScript
function getFormsInfo(filter: formInfo.FormInfoFilter): Promise<Array<formInfo.FormInfo>>
```

Obtains the widget information provided by a specified application on the device (excluding template widgets). This API uses a promise to return the result.

**Since:** 12

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | formInfo.FormInfoFilter | Yes | Filter criterion. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;formInfo.FormInfo>> | Promise used to return the information obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |

