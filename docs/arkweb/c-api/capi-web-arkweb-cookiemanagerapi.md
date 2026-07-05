# ArkWeb_CookieManagerAPI

```c
typedef struct ArkWeb_CookieManagerAPI {...} ArkWeb_CookieManagerAPI
```

## Overview

Defines the native CookieManager API for ArkWeb.Before invoking an API, you are advised to use ARKWEB_MEMBER_MISSING to checkwhether the function structure has a corresponding function pointer to avoid crashcaused by mismatch between the SDK and the device ROM.Use OH_ArkWeb_GetNativeAPI in the UI thread to obtain the CookieManager-related interface cluster.

**Since**: 12

**Related module**: [Web](capi-web.md)

**Header file**: [arkweb_type.h](capi-arkweb-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| size_t size | The ArkWeb_CookieManagerAPI struct size. |


### Member functions

| Name | Description |
| -- | -- |
| [ArkWeb_ErrorCode (\*fetchCookieSync)(const char* url, bool incognito, bool includeHttpOnly, char** cookieValue)](#fetchcookiesync) | Obtains the cookie value corresponding to a specified URL. |
| [ArkWeb_ErrorCode (\*configCookieSync)(const char* url,const char* cookieValue, bool incognito, bool includeHttpOnly)](#configcookiesync) | Sets the cookie value for a specified URL. |
| [bool (\*existCookies)(bool incognito)](#existcookies) | Check whether cookies exist. |
| [void (\*clearAllCookiesSync)(bool incognito)](#clearallcookiessync) | Clear all cookies. |
| [void (\*clearSessionCookiesSync)()](#clearsessioncookiessync) | Clear all session cookies. |

## Member function description

### fetchCookieSync()

```c
ArkWeb_ErrorCode (*fetchCookieSync)(const char* url, bool incognito, bool includeHttpOnly, char** cookieValue)
```

**Description**

Obtains the cookie value corresponding to a specified URL.

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* url | URL to which the cookie to be obtained belongs. A complete URL is recommended. |
|  bool incognito | True indicates that the memory cookies of the webview in privacy mode are obtained,and false indicates that cookies in non-privacy mode are obtained. |
|  bool includeHttpOnly | If true HTTP-only cookies will also be included in the cookieValue. |
|  char** cookieValue | Get the cookie value corresponding to the URL. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkWeb_ErrorCode | Fetch cookie result code.<br>             {@link ARKWEB_SUCCESS} fetch cookie success.<br>             {@link ARKWEB_INVALID_URL} invalid url.<br>             {@link ARKWEB_INVALID_PARAM} cookieValue is nullptr. |

### configCookieSync()

```c
ArkWeb_ErrorCode (*configCookieSync)(const char* url,const char* cookieValue, bool incognito, bool includeHttpOnly)
```

**Description**

Sets the cookie value for a specified URL.

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* url | Specifies the URL to which the cookie belongs. A complete URL is recommended. |
| const char* cookieValue | The value of the cookie to be set. |
|  bool incognito | True indicates that cookies of the corresponding URL are set in privacy mode,and false indicates that cookies of the corresponding URL are set in non-privacy mode. |
|  bool includeHttpOnly | If true, HTTP-only cookies can also be overwritten. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkWeb_ErrorCode | Config cookie result code.<br>             {@link ARKWEB_SUCCESS} config cookie success.<br>             {@link ARKWEB_INVALID_URL} invalid url.<br>             {@link ARKWEB_INVALID_COOKIE_VALUE} invalid cookie value. |

### existCookies()

```c
bool (*existCookies)(bool incognito)
```

**Description**

Check whether cookies exist.

**Parameters**:

| Parameter | Description |
| -- | -- |
| bool incognito | True indicates whether cookies exist in privacy mode,and false indicates whether cookies exist in non-privacy mode. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | True indicates that the cookie exists, and false indicates that the cookie does not exist. |

### clearAllCookiesSync()

```c
void (*clearAllCookiesSync)(bool incognito)
```

**Description**

Clear all cookies.

### clearSessionCookiesSync()

```c
void (*clearSessionCookiesSync)()
```

**Description**

Clear all session cookies.


