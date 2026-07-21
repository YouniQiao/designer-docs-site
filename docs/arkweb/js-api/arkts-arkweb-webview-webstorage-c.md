# WebStorage

Implements a **WebStorage** object to manage the Web SQL database and HTML5 Web Storage APIs. All **Web** components in an application share a **WebStorage** object.

> **NOTE**  
>  
> - The sample effect is subject to the actual device.  
>  
> - You must load the **Web** component before calling the APIs in **WebStorage**.  
>  
> - After the ArkWeb kernel is upgraded to M132, the Web SQL database management becomes invalid because the kernel  
> discards Web SQL. For details about the ArkWeb kernel version, see  
> [Constraints](docroot://web/web-component-overview.md#constraints).

**Since:** 9

<!--Device-webview-class WebStorage--><!--Device-webview-class WebStorage-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

<a id="deletealldata"></a>
## deleteAllData

```TypeScript
static deleteAllData(incognito?: boolean): void
```

Deletes all storage data used by JavaScript storage APIs, including the Web SQL Database and HTML5-supported Web storage APIs.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebStorage-static deleteAllData(incognito?: boolean): void--><!--Device-WebStorage-static deleteAllData(incognito?: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| incognito | boolean | No | Whether to delete all data in the Web SQL Database in incognito mode. The value **true** means to delete all data in the Web SQL Database in incognito mode, and **false** means the opposite.<br>Default value: **false**.<br>If **undefined** or **null** is passed, the value is **false**.<br>**Since:** 11 |

<a id="deleteorigin"></a>
## deleteOrigin

```TypeScript
static deleteOrigin(origin: string): void
```

Deletes all data in the specified origin.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebStorage-static deleteOrigin(origin: string): void--><!--Device-WebStorage-static deleteOrigin(origin: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| origin | string | Yes | Index of the origin, which is obtained through [getOrigins](webview.WebStorage.static getOrigins(callback: AsyncCallback<Array<WebStorageOrigin>>)). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types.<br>3.Parameter verification failed. |
| [17100011](../errorcode-webview.md#17100011-invalid-origin) | Invalid origin. |

<a id="getoriginquota"></a>
## getOriginQuota

```TypeScript
static getOriginQuota(origin: string): Promise<number>
```

Obtains the storage quota of an origin in the Web SQL Database and HTML5-supported Web Storage APIs, in bytes.This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebStorage-static getOriginQuota(origin: string): Promise<number>--><!--Device-WebStorage-static getOriginQuota(origin: string): Promise<number>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| origin | string | Yes | Index of the origin. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the storage quota of the origin. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100011](../errorcode-webview.md#17100011-invalid-origin) | Invalid origin. |

<a id="getoriginquota-1"></a>
## getOriginQuota

```TypeScript
static getOriginQuota(origin: string, callback: AsyncCallback<number>): void
```

Obtains the storage quota of an origin in Web SQL Database and HTML5-supported Web Storage APIs, in bytes. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebStorage-static getOriginQuota(origin: string, callback: AsyncCallback<number>): void--><!--Device-WebStorage-static getOriginQuota(origin: string, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| origin | string | Yes | Index of the origin. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Storage quota of the origin.<br>**number** is a long integer ranging from -2,147,483,648 to 2,147,483,647. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100011](../errorcode-webview.md#17100011-invalid-origin) | Invalid origin. |

<a id="getoriginusage"></a>
## getOriginUsage

```TypeScript
static getOriginUsage(origin: string): Promise<number>
```

Obtains the storage usage of an origin in the Web SQL Database and HTML5-supported Web Storage APIs, in bytes.This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebStorage-static getOriginUsage(origin: string): Promise<number>--><!--Device-WebStorage-static getOriginUsage(origin: string): Promise<number>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| origin | string | Yes | Index of the origin. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the storage usage of the origin. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100011](../errorcode-webview.md#17100011-invalid-origin) | Invalid origin. |

<a id="getoriginusage-1"></a>
## getOriginUsage

```TypeScript
static getOriginUsage(origin: string, callback: AsyncCallback<number>): void
```

Obtains the storage usage of an origin in the Web SQL Database and HTML5-supported Web Storage APIs, in bytes.This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebStorage-static getOriginUsage(origin: string, callback: AsyncCallback<number>): void--><!--Device-WebStorage-static getOriginUsage(origin: string, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| origin | string | Yes | Index of the origin. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Storage usage of the origin. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100011](../errorcode-webview.md#17100011-invalid-origin) | Invalid origin. |

<a id="getorigins"></a>
## getOrigins

```TypeScript
static getOrigins(): Promise<Array<WebStorageOrigin>>
```

Obtains information about origins that are currently using the Web SQL Database and HTML5-supported Web Storage APIs. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebStorage-static getOrigins(): Promise<Array<WebStorageOrigin>>--><!--Device-WebStorage-static getOrigins(): Promise<Array<WebStorageOrigin>>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;WebStorageOrigin&gt;&gt; | Promise used to return the information about the origins. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100012](../errorcode-webview.md#17100012-no-web-storage-origin) | Invalid web storage origin. |

<a id="getorigins-1"></a>
## getOrigins

```TypeScript
static getOrigins(callback: AsyncCallback<Array<WebStorageOrigin>>): void
```

Obtains information about origins that are currently using the Web SQL Database and HTML5-supported Web Storage APIs. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebStorage-static getOrigins(callback: AsyncCallback<Array<WebStorageOrigin>>): void--><!--Device-WebStorage-static getOrigins(callback: AsyncCallback<Array<WebStorageOrigin>>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;WebStorageOrigin&gt;&gt; | Yes | Callback used to return the information about the origins. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100012](../errorcode-webview.md#17100012-no-web-storage-origin) | Invalid web storage origin. |

