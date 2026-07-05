# on (System API)

## Modules to Import

```TypeScript
import { formObserver } from '@ohos.app.form.formObserver';
```

## on('formAdd')

```TypeScript
function on(type: 'formAdd', observerCallback: Callback<formInfo.RunningFormInfo>): void
```

Listens to the event of add form. <p>You can use this method to listen to the event of add form.</p>

**Since:** 10

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'formAdd' | Yes | Indicates event type. |
| observerCallback | Callback&lt;formInfo.RunningFormInfo&gt; | Yes | The callback is used to return the runningform info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


## on('formAdd')

```TypeScript
function on(type: 'formAdd', hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void
```

Listens to the event of add form. <p>You can use this method to listen to the event of add form for a particular card host.</p>

**Since:** 10

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'formAdd' | Yes | Indicates event type. |
| hostBundleName | string | Yes | Indicates the bundle name of the form host application. |
| observerCallback | Callback&lt;formInfo.RunningFormInfo&gt; | Yes | The callback is used to return the runningform info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


## on('formRemove')

```TypeScript
function on(type: 'formRemove', observerCallback: Callback<formInfo.RunningFormInfo>): void
```

Listens to the event of remove form. <p>You can use this method to listen to the event of remove form.</p>

**Since:** 10

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'formRemove' | Yes | Indicates event type. |
| observerCallback | Callback&lt;formInfo.RunningFormInfo&gt; | Yes | The callback is used to return the runningform info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


## on('formRemove')

```TypeScript
function on(type: 'formRemove', hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void
```

Listens to the event of remove form. <p>You can use this method to listen to the event of remove form for a particular card host.</p>

**Since:** 10

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'formRemove' | Yes | Indicates event type. |
| hostBundleName | string | Yes | Indicates the bundle name of the form host application. |
| observerCallback | Callback&lt;formInfo.RunningFormInfo&gt; | Yes | The callback is used to return the runningform info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


## on('notifyVisible')

```TypeScript
function on(type: 'notifyVisible', observerCallback: Callback<Array<formInfo.RunningFormInfo>>): void
```

Listens to the event of notifyVisible type change. <p>You can use this method to listen to the event of notifyVisible type change.</p>

**Since:** 10

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'notifyVisible' | Yes | Indicates event type. |
| observerCallback | Callback&lt;Array&lt;formInfo.RunningFormInfo&gt;&gt; | Yes | The callback is used to returnthe running form info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


## on('notifyVisible')

```TypeScript
function on(
    type: 'notifyVisible',
    hostBundleName: string,
    observerCallback: Callback<Array<formInfo.RunningFormInfo>>
  ): void
```

Listens to the event of notifyVisible type change. <p>You can use this method to listen to the event of notifyVisible type change for a particular card host.</p>

**Since:** 10

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'notifyVisible' | Yes | Indicates event type. |
| hostBundleName | string | Yes | Indicates the bundle name of the form host application. |
| observerCallback | Callback&lt;Array&lt;formInfo.RunningFormInfo&gt;&gt; | Yes | The callback is used to returnthe running form info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


## on('notifyInvisible')

```TypeScript
function on(type: 'notifyInvisible', observerCallback: Callback<Array<formInfo.RunningFormInfo>>): void
```

Listens to the event of notifyInvisible type change. <p>You can use this method to listen to the event of notifyInvisible type change.</p>

**Since:** 10

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'notifyInvisible' | Yes | Indicates event type. |
| observerCallback | Callback&lt;Array&lt;formInfo.RunningFormInfo&gt;&gt; | Yes | The callback is used to returnthe running form info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


## on('notifyInvisible')

```TypeScript
function on(
    type: 'notifyInvisible',
    hostBundleName: string,
    observerCallback: Callback<Array<formInfo.RunningFormInfo>>,
  ): void
```

Listens to the event of notifyInvisible type change. <p>You can use this method to listen to the event of notifyInvisible type change for a particular card host.</p>

**Since:** 10

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'notifyInvisible' | Yes | Indicates event type. |
| hostBundleName | string | Yes | Indicates the bundle name of the form host application. |
| observerCallback | Callback&lt;Array&lt;formInfo.RunningFormInfo&gt;&gt; | Yes | The callback is used to returnthe running form info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


## on('router')

```TypeScript
function on(type: 'router', observerCallback: Callback<formInfo.RunningFormInfo>): void
```

Router event listening in registered form. <p>This interface requires permission to receive callback.</p>

**Since:** 11

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'router' | Yes | Indicates event type. |
| observerCallback | Callback&lt;formInfo.RunningFormInfo&gt; | Yes | The callback is used to return the runningform info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


## on('router')

```TypeScript
function on(type: 'router', hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void
```

Router event listening in registered form. <p>This interface requires permission to receive callback.</p>

**Since:** 11

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'router' | Yes | Indicates event type. |
| hostBundleName | string | Yes | Indicates the bundle name of the form host application. |
| observerCallback | Callback&lt;formInfo.RunningFormInfo&gt; | Yes | The callback is used to return the runningform info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


## on('message')

```TypeScript
function on(type: 'message', observerCallback: Callback<formInfo.RunningFormInfo>): void
```

Message event listening in registered form. <p>This interface requires permission to receive callback.</p>

**Since:** 11

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'message' | Yes | Indicates event type. |
| observerCallback | Callback&lt;formInfo.RunningFormInfo&gt; | Yes | The callback is used to return the runningform info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


## on('message')

```TypeScript
function on(type: 'message', hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void
```

Message event listening in registered form. <p>This interface requires permission to receive callback.</p>

**Since:** 11

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'message' | Yes | Indicates event type. |
| hostBundleName | string | Yes | Indicates the bundle name of the form host application. |
| observerCallback | Callback&lt;formInfo.RunningFormInfo&gt; | Yes | The callback is used to return the runningform info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


## on('call')

```TypeScript
function on(type: 'call', observerCallback: Callback<formInfo.RunningFormInfo>): void
```

Call event listening in registered form. <p>This interface requires permission to receive callback.</p>

**Since:** 11

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'call' | Yes | Indicates event type. |
| observerCallback | Callback&lt;formInfo.RunningFormInfo&gt; | Yes | The callback is used to return the runningform info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


## on('call')

```TypeScript
function on(type: 'call', hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void
```

Call event listening in registered form. <p>This interface requires permission to receive callback.</p>

**Since:** 11

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'call' | Yes | Indicates event type. |
| hostBundleName | string | Yes | Indicates the bundle name of the form host application. |
| observerCallback | Callback&lt;formInfo.RunningFormInfo&gt; | Yes | The callback is used to return the runningform info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

