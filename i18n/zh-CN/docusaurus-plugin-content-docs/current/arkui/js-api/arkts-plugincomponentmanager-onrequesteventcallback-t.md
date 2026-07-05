# OnRequestEventCallback

```TypeScript
type OnRequestEventCallback = (source: Want, name: string, data: KVObject) => RequestEventResult
```

Plugin component request event callback.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| source | Want | 是 |  |
| name | string | 是 |  |
| data | KVObject | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RequestEventResult | Returns the request event result. |

