# UrlCbFn

```TypeScript
type UrlCbFn = (value: string, key: string, searchParams: URLParams) => void
```

[forEach]url.URLParams#forEach(callbackFn: UrlCbFn)函数所需的回调函数。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | 当前遍历到的键值。 |
| key | string | Yes | 当前遍历到的键名。 |
| searchParams | URLParams | Yes | 当前调用[forEach]url.URLParams#forEach(callbackFn: UrlCbFn)方法的实例对象。 |

