# off

## off('formAdd')

```TypeScript
function off(type: 'formAdd', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void
```

Cancels listening to the event of add form. <p>You can use this method to cancel listening to the event of add form.</p>

**Since:** 10

**Required permissions:** 

 ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'formAdd' | Yes | Indicates event type. |
| hostBundleName | string | No |  |
| observerCallback | Callback&lt;formInfo.RunningFormInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## off('formRemove')

```TypeScript
function off(type: 'formRemove', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void
```

Cancels listening to the event of remove form. <p>You can use this method to cancel listening to the event of remove form.</p>

**Since:** 10

**Required permissions:** 

 ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'formRemove' | Yes | Indicates event type. |
| hostBundleName | string | No |  |
| observerCallback | Callback&lt;formInfo.RunningFormInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## off('notifyVisible')

```TypeScript
function off(
    type: 'notifyVisible',
    hostBundleName?: string,
    observerCallback?: Callback<Array<formInfo.RunningFormInfo>>
  ): void
```

Cancels listening to the event of notifyVisible type change. <p>You can use this method to cancel listening to the event of notifyVisible type change.</p>

**Since:** 10

**Required permissions:** 

 ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'notifyVisible' | Yes | Indicates event type. |
| hostBundleName | string | No |  |
| observerCallback | Callback&lt;Array&lt;formInfo.RunningFormInfo>> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## off('notifyInvisible')

```TypeScript
function off(
    type: 'notifyInvisible',
    hostBundleName?: string,
    observerCallback?: Callback<Array<formInfo.RunningFormInfo>>
  ): void
```

Cancels listening to the event of notifyInvisible type change. <p>You can use this method to cancel listening to the event of notifyInvisible type change.</p>

**Since:** 10

**Required permissions:** 

 ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'notifyInvisible' | Yes | Indicates event type. |
| hostBundleName | string | No | Indicates the bundle name of the form host application. |
| observerCallback | Callback&lt;Array&lt;formInfo.RunningFormInfo>> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## off('router')

```TypeScript
function off(type: 'router', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void
```

Unregister form router event Listening.

**Since:** 11

**Required permissions:** 

 ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'router' | Yes | Indicates event type. |
| hostBundleName | string | No |  |
| observerCallback | Callback&lt;formInfo.RunningFormInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## off('message')

```TypeScript
function off(type: 'message', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void
```

Unregister form message event Listening.

**Since:** 11

**Required permissions:** 

 ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'message' | Yes | Indicates event type. |
| hostBundleName | string | No |  |
| observerCallback | Callback&lt;formInfo.RunningFormInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## off('call')

```TypeScript
function off(type: 'call', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void
```

Unregister form call event Listening.

**Since:** 11

**Required permissions:** 

 ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'call' | Yes | Indicates event type. |
| hostBundleName | string | No |  |
| observerCallback | Callback&lt;formInfo.RunningFormInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

