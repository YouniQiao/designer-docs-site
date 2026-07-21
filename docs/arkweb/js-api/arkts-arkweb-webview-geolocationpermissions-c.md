# GeolocationPermissions

Implements a **GeolocationPermissions** object.

> **NOTE**  
>  
> - The sample effect is subject to the actual device.  
>  
> - You must load the **Web** component before calling the APIs in **GeolocationPermissions**.  
>  
> - Required Permissions  
> **ohos.permission.LOCATION**, **ohos.permission.APPROXIMATELY_LOCATION**, and  
> **ohos.permission.LOCATION_IN_BACKGROUND**, which are required for accessing the location information. For details  
> about the permissions, see  
> [@ohos.geolocation (Geolocation)](docroot://reference/apis-location-kit/js-apis-geolocation.md).

**Since:** 9

<!--Device-webview-class GeolocationPermissions--><!--Device-webview-class GeolocationPermissions-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

<a id="allowgeolocation"></a>
## allowGeolocation

```TypeScript
static allowGeolocation(origin: string, incognito?: boolean): void
```

Allows the specified origin to use the geolocation information.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GeolocationPermissions-static allowGeolocation(origin: string, incognito?: boolean): void--><!--Device-GeolocationPermissions-static allowGeolocation(origin: string, incognito?: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| origin | string | Yes | Index of the origin. |
| incognito | boolean | No | Whether to allow the specified origin to use the geolocation information in incognito mode. The value **true** means to allow the specified origin to use the geolocation information in incognito mode, and **false** means the opposite.<br>Default value: **false**.<br>If **null** or **undefined** is passed in, the value is **false**.<br>**Since:** 11 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100011](../errorcode-webview.md#17100011-invalid-origin) | Invalid origin. The origin format must follow defined in RFC 6454. |

<a id="deleteallgeolocation"></a>
## deleteAllGeolocation

```TypeScript
static deleteAllGeolocation(incognito?: boolean): void
```

Clears the geolocation permission status of all sources.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GeolocationPermissions-static deleteAllGeolocation(incognito?: boolean): void--><!--Device-GeolocationPermissions-static deleteAllGeolocation(incognito?: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| incognito | boolean | No | Whether to clear the geolocation permission status of all sources in incognito mode. The value **true** means to clear the geolocation permission status of all sources in incognito mode,and **false** means the opposite.<br>Default value: **false**.<br>If **null** or **undefined** is passed in,the value is **false**.<br>**Since:** 11 |

<a id="deletegeolocation"></a>
## deleteGeolocation

```TypeScript
static deleteGeolocation(origin: string, incognito?: boolean): void
```

Clears the geolocation permission status of a specified origin.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GeolocationPermissions-static deleteGeolocation(origin: string, incognito?: boolean): void--><!--Device-GeolocationPermissions-static deleteGeolocation(origin: string, incognito?: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| origin | string | Yes | Index of the origin. |
| incognito | boolean | No | Whether to clear the geolocation permission status of a specified origin in incognito mode. The value **true** means to clear the geolocation permission status of a specified origin in incognito mode, and **false** means the opposite.<br>Default value: **false**.<br>If **null** or **undefined** is passed in, the value is **false**.<br>**Since:** 11 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100011](../errorcode-webview.md#17100011-invalid-origin) | Invalid origin. The origin format must follow defined in RFC 6454. |

<a id="getaccessiblegeolocation"></a>
## getAccessibleGeolocation

```TypeScript
static getAccessibleGeolocation(origin: string, incognito?: boolean): Promise<boolean>
```

Obtains the geolocation permission status of the specified origin. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GeolocationPermissions-static getAccessibleGeolocation(origin: string, incognito?: boolean): Promise<boolean>--><!--Device-GeolocationPermissions-static getAccessibleGeolocation(origin: string, incognito?: boolean): Promise<boolean>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| origin | string | Yes | Index of the origin. |
| incognito | boolean | No | Whether to obtain the geolocation permission status of the specified origin in incognito mode. The value **true** means to obtain the geolocation permission status of the specified origin in incognito mode, and **false** means the opposite.<br>Default value: **false**.<br>If **null** or **undefined** is passed, error code **401** is thrown.<br>**Since:** 11 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the geolocation permission status of the specified origin.<br>If the operation is successful, the value **true** means that the geolocation permission is granted, and **false** means the opposite.<br>If the operation fails, the geolocation permission status of the specified origin is not found. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100011](../errorcode-webview.md#17100011-invalid-origin) | Invalid origin. The origin format must follow defined in RFC 6454. |

<a id="getaccessiblegeolocation-1"></a>
## getAccessibleGeolocation

```TypeScript
static getAccessibleGeolocation(origin: string, callback: AsyncCallback<boolean>, incognito?: boolean): void
```

Obtains the geolocation permission status of the specified origin. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GeolocationPermissions-static getAccessibleGeolocation(origin: string, callback: AsyncCallback<boolean>, incognito?: boolean): void--><!--Device-GeolocationPermissions-static getAccessibleGeolocation(origin: string, callback: AsyncCallback<boolean>, incognito?: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| origin | string | Yes | Index of the origin. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;boolean&gt; | Yes | Callback used to return the geolocation permission status of the specified origin.<br>If the operation is successful, the value **true** means that the geolocation permission is granted, and **false** means the opposite.<br>If the operation fails, the geolocation permission status of the specified origin is not found. |
| incognito | boolean | No | Whether to obtain the geolocation permission status of the specified origin in incognito mode. The value **true** means to obtain the geolocation permission status of the specified origin in incognito mode, and **false** means the opposite.<br>Default value: **false**.<br>If **null** or **undefined** is passed, error code **401** is thrown.<br>**Since:** 11 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100011](../errorcode-webview.md#17100011-invalid-origin) | Invalid origin. The origin format must follow defined in RFC 6454. |

<a id="getstoredgeolocation"></a>
## getStoredGeolocation

```TypeScript
static getStoredGeolocation(incognito?: boolean): Promise<Array<string>>
```

Obtains the geolocation permission status of all origins. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GeolocationPermissions-static getStoredGeolocation(incognito?: boolean): Promise<Array<string>>--><!--Device-GeolocationPermissions-static getStoredGeolocation(incognito?: boolean): Promise<Array<string>>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| incognito | boolean | No | Whether to obtain the geolocation permission status of all origins in incognito mode. The value **true** means to obtain the geolocation permission status of all origins in incognito mode,and **false** means the opposite.<br>Default value: **false**.<br>If **null** or **undefined** is passed,error code **401** is thrown.<br>**Since:** 11 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string&gt;&gt; | Promise used to return the geolocation permission status of all origins. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |

<a id="getstoredgeolocation-1"></a>
## getStoredGeolocation

```TypeScript
static getStoredGeolocation(callback: AsyncCallback<Array<string>>, incognito?: boolean): void
```

Obtains the geolocation permission status of all origins. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GeolocationPermissions-static getStoredGeolocation(callback: AsyncCallback<Array<string>>, incognito?: boolean): void--><!--Device-GeolocationPermissions-static getStoredGeolocation(callback: AsyncCallback<Array<string>>, incognito?: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;string&gt;&gt; | Yes | Callback used to return the geolocation permission status of all origins. |
| incognito | boolean | No | Whether to obtain the geolocation permission status of all origins in incognito mode. The value **true** means to obtain the geolocation permission status of all origins in incognito mode,and **false** means the opposite.<br>Default value: **false**.<br>If **null** or **undefined** is passed,error code **401** is thrown.<br>**Since:** 11 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |

