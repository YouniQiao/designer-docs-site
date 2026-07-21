# off (System API)

## Modules to Import

```TypeScript
import { formObserver } from '@kit.FormKit';
```

<a id="off"></a>
## off('formAdd')

```TypeScript
function off(type: 'formAdd', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void
```

Cancels listening to the event of add form.<p>You can use this method to cancel listening to the event of add form.</p>

**Since:** 10

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

<!--Device-formObserver-function off(type: 'formAdd', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void--><!--Device-formObserver-function off(type: 'formAdd', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'formAdd' | Yes | Indicates event type. |
| hostBundleName | string | No | Indicates the bundle name of the form host application. |
| observerCallback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;formInfo.RunningFormInfo&gt; | No | The callback is used to return the running form info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


<a id="off-1"></a>
## off('formRemove')

```TypeScript
function off(type: 'formRemove', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void
```

Cancels listening to the event of remove form.<p>You can use this method to cancel listening to the event of remove form.</p>

**Since:** 10

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

<!--Device-formObserver-function off(type: 'formRemove', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void--><!--Device-formObserver-function off(type: 'formRemove', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'formRemove' | Yes | Indicates event type. |
| hostBundleName | string | No | Indicates the bundle name of the form host application. |
| observerCallback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;formInfo.RunningFormInfo&gt; | No | The callback is used to return the running form info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


<a id="off-2"></a>
## off('notifyVisible')

```TypeScript
function off(
    type: 'notifyVisible',
    hostBundleName?: string,
    observerCallback?: Callback<Array<formInfo.RunningFormInfo>>
  ): void
```

Cancels listening to the event of notifyVisible type change.<p>You can use this method to cancel listening to the event of notifyVisible type change.</p>

**Since:** 10

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

<!--Device-formObserver-function off(
    type: 'notifyVisible',
    hostBundleName?: string,
    observerCallback?: Callback<Array<formInfo.RunningFormInfo>>
  ): void--><!--Device-formObserver-function off(
    type: 'notifyVisible',
    hostBundleName?: string,
    observerCallback?: Callback<Array<formInfo.RunningFormInfo>>
  ): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'notifyVisible' | Yes | Indicates event type. |
| hostBundleName | string | No | Indicates the bundle name of the form host application. |
| observerCallback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;Array&lt;formInfo.RunningFormInfo&gt;&gt; | No | The callback is used to return the running form info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


<a id="off-3"></a>
## off('notifyInvisible')

```TypeScript
function off(
    type: 'notifyInvisible',
    hostBundleName?: string,
    observerCallback?: Callback<Array<formInfo.RunningFormInfo>>
  ): void
```

Cancels listening to the event of notifyInvisible type change.<p>You can use this method to cancel listening to the event of notifyInvisible type change.</p>

**Since:** 10

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

<!--Device-formObserver-function off(
    type: 'notifyInvisible',
    hostBundleName?: string,
    observerCallback?: Callback<Array<formInfo.RunningFormInfo>>
  ): void--><!--Device-formObserver-function off(
    type: 'notifyInvisible',
    hostBundleName?: string,
    observerCallback?: Callback<Array<formInfo.RunningFormInfo>>
  ): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'notifyInvisible' | Yes | Indicates event type. |
| hostBundleName | string | No | Indicates the bundle name of the form host application. |
| observerCallback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;Array&lt;formInfo.RunningFormInfo&gt;&gt; | No | The callback is used to return the running form info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


<a id="off-4"></a>
## off('router')

```TypeScript
function off(type: 'router', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void
```

Unregister form router event Listening.

**Since:** 11

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

<!--Device-formObserver-function off(type: 'router', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void--><!--Device-formObserver-function off(type: 'router', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'router' | Yes | Indicates event type. |
| hostBundleName | string | No | Indicates the bundle name of the form host application. |
| observerCallback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;formInfo.RunningFormInfo&gt; | No | The callback is used to return the running form info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


<a id="off-5"></a>
## off('message')

```TypeScript
function off(type: 'message', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void
```

Unregister form message event Listening.

**Since:** 11

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

<!--Device-formObserver-function off(type: 'message', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void--><!--Device-formObserver-function off(type: 'message', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'message' | Yes | Indicates event type. |
| hostBundleName | string | No | Indicates the bundle name of the form host application. |
| observerCallback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;formInfo.RunningFormInfo&gt; | No | The callback is used to return the running form info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


<a id="off-6"></a>
## off('call')

```TypeScript
function off(type: 'call', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void
```

Unregister form call event Listening.

**Since:** 11

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

<!--Device-formObserver-function off(type: 'call', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void--><!--Device-formObserver-function off(type: 'call', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'call' | Yes | Indicates event type. |
| hostBundleName | string | No | Indicates the bundle name of the form host application. |
| observerCallback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;formInfo.RunningFormInfo&gt; | No | The callback is used to return the running form info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

