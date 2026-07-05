# OnLoadInterceptCallback

```TypeScript
export type OnLoadInterceptCallback = (event: OnLoadInterceptEvent) => boolean
```

Callback for OnLoadIntercept

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | OnLoadInterceptEvent | 是 | the load intercept event when the resources loading is intercepted. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | True if the load is intercepted else false. |

