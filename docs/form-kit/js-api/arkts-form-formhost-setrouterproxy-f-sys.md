# setRouterProxy (System API)

## Modules to Import

```TypeScript
import { formHost } from '@kit.FormKit';
```

## setRouterProxy

```TypeScript
function setRouterProxy(formIds: Array<string>, proxy: Callback<Want>, callback: AsyncCallback<void>): void
```

Sets a router proxy for widgets and obtains the Want information required for redirection. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> Generally, for a widget added to the home screen, in the case of router-based redirection, the widget framework  
> checks whether the destination is proper and whether the widget has the redirection permission, and then  
> triggers redirection accordingly. For a widget that is added to a widget host and has a router proxy configured,  
> in the case of router-based redirection, the widget framework does not trigger redirection for the widget.  
> - Only one router proxy can be set for a widget. If multiple proxies are set, only the last proxy takes effect.

**Since:** 11

**Required permissions:** ohos.permission.REQUIRE_FORM

<!--Device-formHost-function setRouterProxy(formIds: Array<string>, proxy: Callback<Want>, callback: AsyncCallback<void>): void--><!--Device-formHost-function setRouterProxy(formIds: Array<string>, proxy: Callback<Want>, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | Array of widget IDs. |
| proxy | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<Want> | Yes | Callback used to return the Want information required for redirection. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the router proxy is set, **error** is **undefined**; otherwise, an exception is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permissions denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [16500050](../errorcode-form.md#16500050-ipc-failure) | IPC connection error. |
| [16500060](../errorcode-form.md#16500060-service-connection-failure) | Service connection error. |
| [16501000](../errorcode-form.md#16501000-internal-function-error) | An internal functional error occurred. |
| [16501003](../errorcode-form.md#16501003-widget-not-operatable) | The form cannot be operated by the current application. |


## setRouterProxy

```TypeScript
function setRouterProxy(formIds: Array<string>, proxy: Callback<Want>): Promise<void>
```

Sets a router proxy for widgets and obtains the Want information required for redirection. This API uses a promise to return the result. This API uses a promise to return the result.

> **NOTE**  
>  
> - Generally, for a widget added to the home screen, in the case of router-based redirection, the widget framework  
> checks whether the destination is proper and whether the widget has the redirection permission, and then  
> triggers redirection accordingly. For a widget that is added to a widget host and has a router proxy configured,  
> in the case of router-based redirection, the widget framework does not trigger redirection for the widget.  
>  
> - Only one router proxy can be set for a widget. If multiple proxies are set, only the last proxy takes effect.

**Since:** 11

**Required permissions:** ohos.permission.REQUIRE_FORM

<!--Device-formHost-function setRouterProxy(formIds: Array<string>, proxy: Callback<Want>): Promise<void>--><!--Device-formHost-function setRouterProxy(formIds: Array<string>, proxy: Callback<Want>): Promise<void>-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | Array of widget IDs. |
| proxy | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<Want> | Yes | Callback used to return the Want information required for redirection. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permissions denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [16500050](../errorcode-form.md#16500050-ipc-failure) | IPC connection error. |
| [16500060](../errorcode-form.md#16500060-service-connection-failure) | Service connection error. |
| [16501000](../errorcode-form.md#16501000-internal-function-error) | An internal functional error occurred. |
| [16501003](../errorcode-form.md#16501003-widget-not-operatable) | The form cannot be operated by the current application. |

