# getRunningFormInfos

## getRunningFormInfos

```TypeScript
function getRunningFormInfos(callback: AsyncCallback<Array<formInfo.RunningFormInfo>>, hostBundleName?: string): void
```

Obtains the RunningFormInfo objects provided by a specific card host application on the device.

**Since:** 10

**Required permissions:** 

 ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;formInfo.RunningFormInfo>> | Yes | The callback is used to return the  RunningFormInfo. |
| hostBundleName | string | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |

## getRunningFormInfos

```TypeScript
function getRunningFormInfos(
    callback: AsyncCallback<Array<formInfo.RunningFormInfo>>,
    isUnusedIncluded: boolean,
    hostBundleName?: string
  ): void
```

Obtains the RunningFormInfo objects provided by a specific card host application on the device.

**Since:** 11

**Required permissions:** 

 ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;formInfo.RunningFormInfo>> | Yes | The callback is used to return the  RunningFormInfo. |
| isUnusedIncluded | boolean | Yes | Indicates whether to include unused form. |
| hostBundleName | string | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |

## getRunningFormInfos

```TypeScript
function getRunningFormInfos(hostBundleName?: string): Promise<Array<formInfo.RunningFormInfo>>
```

Obtains the RunningFormInfo objects provided by a specific card host application on the device.

**Since:** 10

**Required permissions:** 

 ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hostBundleName | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;formInfo.RunningFormInfo>> | Returns the RunningFormInfo. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |

## getRunningFormInfos

```TypeScript
function getRunningFormInfos(
    isUnusedIncluded: boolean,
    hostBundleName?: string
  ): Promise<Array<formInfo.RunningFormInfo>>
```

Obtains the RunningFormInfo objects provided by a specific card host application on the device.

**Since:** 11

**Required permissions:** 

 ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isUnusedIncluded | boolean | Yes | Indicates whether to include unused form. |
| hostBundleName | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;formInfo.RunningFormInfo>> | Returns the RunningFormInfo. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |

