# UrlCbFn

```TypeScript
type UrlCbFn = (value: string, key: string, searchParams: URLParams) => void
```

[forEach]url.URLParams#forEach(callbackFn: UrlCbFn)函数所需的回调函数。

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | string | 是 | 当前遍历到的键值。 |
| key | string | 是 | 当前遍历到的键名。 |
| searchParams | URLParams | 是 | 当前调用[forEach]url.URLParams#forEach(callbackFn: UrlCbFn)方法的实例对象。 |

