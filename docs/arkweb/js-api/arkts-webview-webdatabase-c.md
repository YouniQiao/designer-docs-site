# WebDataBase

Web组件数据库管理对象。 > **说明：** > > - 本Class首批接口从API version 9开始支持。 > > - 示例效果请以真机运行为准。 > > - 目前调用WebDataBase下的方法，都需要先加载Web组件。

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## deleteHttpAuthCredentials

```TypeScript
static deleteHttpAuthCredentials(): void
```

清除所有已保存的HTTP身份验证凭据，该方法为同步方法。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## existHttpAuthCredentials

```TypeScript
static existHttpAuthCredentials(): boolean
```

判断是否存在任何已保存的HTTP身份验证凭据，该方法为同步方法。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 是否存在任何已保存的HTTP身份验证凭据。  存在返回true，不存在返回false。 |

## getHttpAuthCredentials

```TypeScript
static getHttpAuthCredentials(host: string, realm: string): Array<string>
```

检索给定主机和域的HTTP身份验证凭据，该方法为同步方法。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| host | string | Yes | HTTP身份验证凭据应用的主机。 |
| realm | string | Yes | HTTP身份验证凭据应用的域。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 包含用户名和密码的数组，检索失败返回空数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |

## saveHttpAuthCredentials

```TypeScript
static saveHttpAuthCredentials(host: string, realm: string, username: string, password: string): void
```

保存给定主机和域的HTTP身份验证凭据，该方法为同步方法。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| host | string | Yes | HTTP身份验证凭据应用的主机。 |
| realm | string | Yes | HTTP身份验证凭据应用的域。 |
| username | string | Yes | 用户名。 |
| password | string | Yes | 密码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |

