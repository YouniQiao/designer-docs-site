# GeolocationPermissions

Provides a method for managing web geographic location permissions.

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## allowGeolocation

```TypeScript
static allowGeolocation(origin: string, incognito?: boolean): void
```

Allow geolocation permissions for specifies source.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| origin | string | Yes | Index of the origin. |
| incognito | boolean | No | Whether to allow the specified origin to use the geolocation information in  incognito mode. The value true means to allow the specified origin to use the geolocation information in  incognito mode, and false means the opposite. Default value: false. If null or  undefined is passed in, the value is false. [since 11] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 17100011 | Invalid origin. The origin format must follow defined in RFC 6454. |

## deleteAllGeolocation

```TypeScript
static deleteAllGeolocation(incognito?: boolean): void
```

Delete all geolocation permissions.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| incognito | boolean | No | Whether to clear the geolocation permission status of all sources in incognito  mode. The value true means to clear the geolocation permission status of all sources in incognito mode,  and false means the opposite. Default value: false. If null or undefined is passed in,  the value is false. [since 11] |

## deleteGeolocation

```TypeScript
static deleteGeolocation(origin: string, incognito?: boolean): void
```

Delete geolocation permissions for specifies source.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| origin | string | Yes | Index of the origin. |
| incognito | boolean | No | Whether to clear the geolocation permission status of a specified origin in  incognito mode. The value true means to clear the geolocation permission status of a specified origin in  incognito mode, and false means the opposite. Default value: false. If null or  undefined is passed in, the value is false. [since 11] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 17100011 | Invalid origin. The origin format must follow defined in RFC 6454. |

## getAccessibleGeolocation

```TypeScript
static getAccessibleGeolocation(origin: string, incognito?: boolean): Promise<boolean>
```

Gets the geolocation permission status of the specified source.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| origin | string | Yes | Index of the origin. |
| incognito | boolean | No | Whether to obtain the geolocation permission status of the specified origin in  incognito mode. The value true means to obtain the geolocation permission status of the specified origin  in incognito mode, and false means the opposite. Default value: false. If null or  undefined is passed, error code 401 is thrown. [since 11] |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the geolocation permission status of the specified origin.  If the operation is successful, the value true means that the geolocation permission is granted, and  false means the opposite.  If the operation fails, the geolocation permission status of the specified origin is not found. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 17100011 | Invalid origin. The origin format must follow defined in RFC 6454. |

## getAccessibleGeolocation

```TypeScript
static getAccessibleGeolocation(origin: string, callback: AsyncCallback<boolean>, incognito?: boolean): void
```

Gets the geolocation permission status of the specified source.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| origin | string | Yes | Index of the origin. |
| callback | AsyncCallback&lt;boolean> | Yes | Callback used to return the geolocation permission status of the  specified origin. If the operation is successful, the value true means that the geolocation permission  is granted, and false means the opposite. If the operation fails, the geolocation permission status of  the specified origin is not found. |
| incognito | boolean | No | Whether to obtain the geolocation permission status of the specified origin in  incognito mode. The value true means to obtain the geolocation permission status of the specified origin  in incognito mode, and false means the opposite. Default value: false. If null or  undefined is passed, error code 401 is thrown. [since 11] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 17100011 | Invalid origin. The origin format must follow defined in RFC 6454. |

## getStoredGeolocation

```TypeScript
static getStoredGeolocation(incognito?: boolean): Promise<Array<string>>
```

Get all stored geolocation permission url source.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| incognito | boolean | No | Whether to obtain the geolocation permission status of all origins in incognito  mode. The value true means to obtain the geolocation permission status of all origins in incognito mode,  and false means the opposite. Default value: false. If null or undefined is passed,  error code 401 is thrown. [since 11] |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise used to return the geolocation permission status of all origins. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |

## getStoredGeolocation

```TypeScript
static getStoredGeolocation(callback: AsyncCallback<Array<string>>, incognito?: boolean): void
```

Get all stored geolocation permission url source.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | Callback used to return the geolocation permission status of  all origins. |
| incognito | boolean | No | Whether to obtain the geolocation permission status of all origins in incognito  mode. The value true means to obtain the geolocation permission status of all origins in incognito mode,  and false means the opposite. Default value: false. If null or undefined is passed,  error code 401 is thrown. [since 11] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |

