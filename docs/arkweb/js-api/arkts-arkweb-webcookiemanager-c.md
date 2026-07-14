# WebCookieManager

Provides methods for managing the web cookies.

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## clearAllCookies

```TypeScript
static clearAllCookies(): Promise<void>
```

Remove all cookies Asynchronously.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - A promise resolved after the cookies have been deleted. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. |

## clearAllCookies

```TypeScript
static clearAllCookies(callback: AsyncCallback<void>): void
```

Remove all cookies Asynchronously.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Called after the cookies have been deleted. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |

## clearAllCookiesSync

```TypeScript
static clearAllCookiesSync(incognito?: boolean): void
```

Remove all cookies.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| incognito | boolean | No | {@code true} remove all cookies in incognito mode;{@code false} otherwise. |

## clearSessionCookie

```TypeScript
static clearSessionCookie(): Promise<void>
```

Delete the session cookies Asynchronously.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - A promise resolved after the cookies have been deleted. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. |

## clearSessionCookie

```TypeScript
static clearSessionCookie(callback: AsyncCallback<void>): void
```

Delete the session cookies Asynchronously.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Called after the cookies have been deleted. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |

## clearSessionCookieSync

```TypeScript
static clearSessionCookieSync(): void
```

Delete the session cookies.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## configCookie

```TypeScript
static configCookie(url: string, value: string): Promise<void>
```

Set a single cookie (key-value pair) for the given URL Asynchronously.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | The URL for which the cookie is to be set. |
| value | string | Yes | The cookie as a string, using the format of the 'Set-Cookie' HTTP response header. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - A promise resolved after the cookies of given URL have been set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. No valid cookie found for the specified URL. |
| [17100005](../errorcode-webview.md#17100005-invalid-cookie-value) | The provided cookie value is invalid. It must follow the format specified<br>in RFC 6265. |

## configCookie

```TypeScript
static configCookie(url: string, value: string, incognito: boolean, includeHttpOnly: boolean): Promise<void>
```

Set a single cookie (key-value pair) for the given URL Asynchronously.

**Since:** 14

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | The URL for which the cookie is to be set. |
| value | string | Yes | The cookie as a string, using the format of the 'Set-Cookie' HTTP response header. |
| incognito | boolean | Yes | {@code true} set a single cookie (key-value pair) for the given URLin incognito mode; {@code false} otherwise. |
| includeHttpOnly | boolean | Yes | {@code true} HTTP-only cookies can also be overwritten;{@code false} otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - A promise resolved after the cookies of given URL have been set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. No valid cookie found for the specified URL. |
| [17100005](../errorcode-webview.md#17100005-invalid-cookie-value) | The provided cookie value is invalid. It must follow the format specified<br>in RFC 6265. |

## configCookie

```TypeScript
static configCookie(url: string, value: string, callback: AsyncCallback<void>): void
```

Set a single cookie (key-value pair) for the given URL Asynchronously.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | The URL for which the cookie is to be set. |
| value | string | Yes | The cookie as a string, using the format of the 'Set-Cookie' HTTP response header. |
| callback | AsyncCallback&lt;void&gt; | Yes | Called after the cookies have been set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. No valid cookie found for the specified URL. |
| [17100005](../errorcode-webview.md#17100005-invalid-cookie-value) | The provided cookie value is invalid. It must follow the format specified<br>in RFC 6265. |

## configCookieSync

```TypeScript
static configCookieSync(url: string, value: string, incognito?: boolean): void
```

Set a single cookie (key-value pair) for the given URL. > **NOTE** > > You can set **url** in **configCookieSync** to a domain name so that the cookie is attached to the requests on > the page. > > Cookies are periodically saved to the disk every 30s. You can also use the > **saveCookieAsync** API to forcibly save cookies to the disk. > > The **value** parameter must comply with the format of the Set-Cookie HTTP response header. The value is in the > format of "key=value", followed by a list of cookie attributes separated by semicolons, for example, > **"key=value;Max-Age=100"**. > > If a cookie with the same host, path, and name exists, it will be replaced by the new cookie. If the cookie has > expired, it will not be stored. To set multiple cookies, call this method multiple times. > > If **configCookieSync()** is used to set cookies for two or more times, the cookies set each time are separated > by semicolons. > > If the specified value contains the **Secure** attribute, the URL must use the **https://** protocol. > > To override HttpOnly cookies, the HttpOnly attribute must be specified in the value.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | The URL for which the cookie is to be set. |
| value | string | Yes | The cookie as a string, using the format of the 'Set-Cookie' HTTP response header. |
| incognito | boolean | No | {@code true} set a single cookie (key-value pair) for the given URLin incognito mode; {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. No valid cookie found for the specified URL. |
| [17100005](../errorcode-webview.md#17100005-invalid-cookie-value) | The provided cookie value is invalid. It must follow the format specified<br>in RFC 6265. |

## configCookieSync

```TypeScript
static configCookieSync(url: string, value: string, incognito: boolean, includeHttpOnly: boolean): void
```

Set a single cookie (key-value pair) for the given URL. > **NOTE** > > You can set **url** in **configCookieSync** to a domain name so that the cookie is attached to the requests on > the page. > > It is recommended that cookie syncing be completed before the **Web** component is loaded. > > Cookies are periodically saved to the disk every 30s. You can also use the > **saveCookieAsync** API to forcibly save cookies to the disk. > > The **value** parameter must comply with the format of the Set-Cookie HTTP response header. The value is in the > format of "key=value", followed by a list of cookie attributes separated by semicolons, for example, > **"key=value;Max-Age=100"**. > > If a cookie with the same host, path, and name exists, it will be replaced by the new cookie. If the cookie has > expired, it will not be stored. To set multiple cookies, call this method multiple times. > > If **configCookieSync()** is used to set cookies for two or more times, the cookies set each time are separated > by semicolons. > > If the specified value contains the **Secure** attribute, the URL must use the **https://** protocol.

**Since:** 14

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | The URL for which the cookie is to be set. |
| value | string | Yes | The cookie as a string, using the format of the 'Set-Cookie' HTTP response header. |
| incognito | boolean | Yes | {@code true} set a single cookie (key-value pair) for the given URLin incognito mode; {@code false} otherwise. |
| includeHttpOnly | boolean | Yes | {@code true} HTTP-only cookies can also be overwritten;{@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. No valid cookie found for the specified URL. |
| [17100005](../errorcode-webview.md#17100005-invalid-cookie-value) | The provided cookie value is invalid. It must follow the format specified<br>in RFC 6265. |

## deleteEntireCookie

```TypeScript
static deleteEntireCookie(): void
```

Remove all cookies.

**Since:** 9

**Deprecated since:** 11

**Substitutes:** clearAllCookiesSync

**System capability:** SystemCapability.Web.Webview.Core

## deleteSessionCookie

```TypeScript
static deleteSessionCookie(): void
```

Delete the session cookies.

**Since:** 9

**Deprecated since:** 11

**Substitutes:** clearSessionCookieSync

**System capability:** SystemCapability.Web.Webview.Core

## existCookie

```TypeScript
static existCookie(incognito?: boolean): boolean
```

Check whether exists any cookies.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| incognito | boolean | No | {@code true} check whether exists any cookies.in incognito mode; {@code false} otherwise.<br>**Since:** 11 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if exists more than one cookie else false; |

## fetchAllCookies

```TypeScript
static fetchAllCookies(incognito: boolean): Promise<Array<WebHttpCookie>>
```

Fetches all stored cookies asynchronously.

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| incognito | boolean | Yes | {@code true} Gets all cookies in incognito context; {@code false} otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;WebHttpCookie&gt;&gt; | - A promise resolved after the cookies gotten. |

## fetchCookie

```TypeScript
static fetchCookie(url: string): Promise<string>
```

Gets all cookies for the given URL Asynchronously.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | The URL for which the cookies are requested. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | - A promise resolved after the cookies of given URL have been gotten. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. No valid cookie found for the specified URL. |

## fetchCookie

```TypeScript
static fetchCookie(url: string, incognito: boolean): Promise<string>
```

Gets all cookies for the given URL Asynchronously.

**Since:** 14

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | The URL for which the cookies are requested. |
| incognito | boolean | Yes | {@code true} gets all cookies for the given URLin incognito mode; {@code false} otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | - A promise resolved after the cookies of given URL have been gotten. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. No valid cookie found for the specified URL. |

## fetchCookie

```TypeScript
static fetchCookie(url: string, callback: AsyncCallback<string>): void
```

Gets all cookies for the given URL Asynchronously.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | The URL for which the cookies are requested. |
| callback | AsyncCallback&lt;string&gt; | Yes | Called after the cookies of given URL have been gotten. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. No valid cookie found for the specified URL. |

## fetchCookie

```TypeScript
static fetchCookie(url: string, incognito: boolean, includePartitionedCookies: boolean): Promise<string>
```

Gets all cookies for the given URL Asynchronously.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | The URL for which to fetch cookies. |
| incognito | boolean | Yes | Whether to fetch cookies in incognito mode. |
| includePartitionedCookies | boolean | Yes | If true, allows fetching first-party partitioned cookies. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | A promise resolved with the cookie string. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. No valid cookie found for the specified URL. |

## fetchCookieSync

```TypeScript
static fetchCookieSync(url: string, incognito?: boolean): string
```

Gets all cookies for the given URL. <p><strong>API Note</strong>:<br> **fetchCookieSync()** is used to obtain all cookie values. Cookie values are separated by semicolons. However, a specific cookie value cannot be obtained separately. </p>

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | The URL for which the cookies are requested. |
| incognito | boolean | No | {@code true} gets all cookies for the given URLin incognito mode; {@code false} otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| string | - The cookie value for the given URL. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. No valid cookie found for the specified URL. |

## fetchCookieSync

```TypeScript
static fetchCookieSync(url: string, incognito?: boolean, includePartitionedCookies?: boolean): string
```

Gets all cookies for the given URL. <strong>API Note</strong>:<br> **fetchCookieSync()** is used to obtain all cookie values. Cookie values are separated by semicolons. However, a specific cookie value cannot be obtained separately.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | The URL for which the cookies are requested. |
| incognito | boolean | No | {@code true} gets all cookies for the given URLin incognito mode; {@code false} otherwise. Default is false. |
| includePartitionedCookies | boolean | No | If true, allows fetching first-party partitioned cookies.Default is false. |

**Return value:**

| Type | Description |
| --- | --- |
| string | - The cookie value for the given URL. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. No valid cookie found for the specified URL. |

## getCookie

```TypeScript
static getCookie(url: string): string
```

Gets all cookies for the given URL.

**Since:** 9

**Deprecated since:** 11

**Substitutes:** fetchCookieSync

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | The URL for which the cookies are requested. |

**Return value:**

| Type | Description |
| --- | --- |
| string | - The cookie value for the given URL. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. No valid cookie found for the specified URL. |

## isCookieAllowed

```TypeScript
static isCookieAllowed(): boolean
```

Get whether the instance can send and accept cookies.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if the instance can send and accept cookies else false. |

## isThirdPartyCookieAllowed

```TypeScript
static isThirdPartyCookieAllowed(): boolean
```

Get whether the instance can send and accept thirdparty cookies.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if the instance can send and accept thirdparty cookies else false. |

## putAcceptCookieEnabled

```TypeScript
static putAcceptCookieEnabled(accept: boolean): void
```

Set whether the instance should send and accept cookies. By default this is set to be true.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accept | boolean | Yes | Whether the instance should send and accept cookies. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |

## putAcceptThirdPartyCookieEnabled

```TypeScript
static putAcceptThirdPartyCookieEnabled(accept: boolean): void
```

Set whether the instance should send and accept thirdparty cookies. By default this is set to be false.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accept | boolean | Yes | Whether the instance should send and accept thirdparty cookies. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |

## saveCookieAsync

```TypeScript
static saveCookieAsync(): Promise<void>
```

Save the cookies Asynchronously.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - A promise resolved after the cookies have been saved. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |

## saveCookieAsync

```TypeScript
static saveCookieAsync(callback: AsyncCallback<void>): void
```

Save the cookies Asynchronously.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Called after the cookies have been saved. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |

## saveCookieSync

```TypeScript
static saveCookieSync(): void
```

Save the cookies synchronously. <p><strong>API Note</strong>:<br> **saveCookieSync** is used to forcibly write cookies that need to be persisted to disks. Session cookies are not persisted on PCs, 2-in-1 devices, or tablets, even if **saveCookieSync** is invoked. **saveCookieSync** blocks the caller until the operation is complete. During this period, I/O operations may be performed. </p>

**Since:** 15

**System capability:** SystemCapability.Web.Webview.Core

## setCookie

```TypeScript
static setCookie(url: string, value: string): void
```

Set a single cookie (key-value pair) for the given URL.

**Since:** 9

**Deprecated since:** 11

**Substitutes:** configCookieSync

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | The URL for which the cookie is to be set. |
| value | string | Yes | The cookie as a string, using the format of the 'Set-Cookie' HTTP response header. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. No valid cookie found for the specified URL. |
| [17100005](../errorcode-webview.md#17100005-invalid-cookie-value) | The provided cookie value is invalid. It must follow the format specified<br>in RFC 6265. |

## setLazyInitializeWebEngine

```TypeScript
static setLazyInitializeWebEngine(lazy: boolean): void
```

Delays the initialization of the web engine. By default, the web engine is initialized when the CookieManager interface is called. By setting the 'lazy' parameter to true, the web engine will not be initialized when the CookieManager interface is called. Instead, the web engine will be initialized either when the web component is created or when initializeWebEngine is called.

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lazy | boolean | Yes | Controls whether to delay the initialization of the web engine. |

