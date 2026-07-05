# WebStorage

通过WebStorage可管理Web SQL数据库接口和HTML5 Web存储接口，每个应用中的所有Web组件共享一个WebStorage。 > **说明：** > > - 本Class首批接口从API version 9开始支持。 > > - 示例效果请以真机运行为准。 > > - 目前调用WebStorage下的方法，都需要先加载Web组件。 > > - 本Class下的接口在ArkWeb内核升级到M132版本后因内核废弃Web SQL，对Web SQL数据库的管理失效。ArkWeb内核版本参考ArkWeb简介 > [约束与限制](docroot://web/web-component-overview.md#约束与限制)。

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## deleteAllData

```TypeScript
static deleteAllData(incognito?: boolean): void
```

清除被JavaScript存储API使用的所有存储数据，这包括Web SQL数据库和HTML5支持的Web存储API。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| incognito | boolean | No | true表示删除所有隐私模式下内存中的web数据，false表示删除正常非隐私模式下Web的SQL数据库当前使用的所有存储。 默认值：false。 传入  undefined或null时为false。 [since 11] |

## deleteOrigin

```TypeScript
static deleteOrigin(origin: string): void
```

清除指定源所使用的存储。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| origin | string | Yes | 指定源的字符串索引，来自于  [getOrigins]webview.WebStorage.static getOrigins(callback: AsyncCallback>)。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3.Parameter verification failed. |
| 17100011 | Invalid origin. |

## getOriginQuota

```TypeScript
static getOriginQuota(origin: string): Promise<number>
```

以Promise方式异步获取指定源的Web SQL数据库和HTML5支持的Web存储API的存储配额，配额以字节为单位。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| origin | string | Yes | 指定源的字符串索引 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise实例，用于获取指定源的存储配额。  单位：byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 17100011 | Invalid origin. |

## getOriginQuota

```TypeScript
static getOriginQuota(origin: string, callback: AsyncCallback<number>): void
```

使用callback回调异步获取指定源的Web SQL数据库和HTML5支持的Web存储API的存储配额，配额以字节为单位。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| origin | string | Yes | 指定源的字符串索引。 |
| callback | AsyncCallback&lt;number> | Yes | 指定源的存储配额。 number是long型整数，范围为[-2147483648, 2147483647]。 单位：byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 17100011 | Invalid origin. |

## getOrigins

```TypeScript
static getOrigins(): Promise<Array<WebStorageOrigin>>
```

以Promise方式异步获取当前使用Web SQL数据库和HTML5支持的Web存储API的所有源的信息。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;WebStorageOrigin>> | Promise used to return the information about the origins. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 17100012 | Invalid web storage origin. |

## getOrigins

```TypeScript
static getOrigins(callback: AsyncCallback<Array<WebStorageOrigin>>): void
```

以回调方式异步获取当前使用Web SQL数据库和HTML5支持的Web存储API的所有源的信息。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;WebStorageOrigin>> | Yes | 以数组方式返回源的信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 17100012 | Invalid web storage origin. |

## getOriginUsage

```TypeScript
static getOriginUsage(origin: string): Promise<number>
```

以Promise方式异步获取指定源的Web SQL数据库和HTML5支持的Web存储API的存储量，存储量以字节为单位。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| origin | string | Yes | 指定源的字符串索引 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise实例，用于获取指定源的存储量。  单位：byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 17100011 | Invalid origin. |

## getOriginUsage

```TypeScript
static getOriginUsage(origin: string, callback: AsyncCallback<number>): void
```

以回调方式异步获取指定源的Web SQL数据库和HTML5支持的Web存储API的存储量，存储量以字节为单位。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| origin | string | Yes | 指定源的字符串索引 |
| callback | AsyncCallback&lt;number> | Yes | 指定源的存储量。 单位：byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 17100011 | Invalid origin. |

