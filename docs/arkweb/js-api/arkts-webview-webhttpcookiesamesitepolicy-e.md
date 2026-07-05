# WebHttpCookieSameSitePolicy

```TypeScript
enum WebHttpCookieSameSitePolicy
```

指示是否将 cookie 限制为仅创建它的同一站点的请求可以携带。指示是否将 cookie 限制为仅创建它的同一站点的请求可以携带。

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

## NONE

```TypeScript
NONE = 0
```

允许在跨站请求中携带cookie，但必须同时设置secure属性。

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

## LAX

```TypeScript
LAX = 1
```

允许特定的跨站请求携带cookie。

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

## STRICT

```TypeScript
STRICT = 2
```

禁止在跨站请求中携带cookie。

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

