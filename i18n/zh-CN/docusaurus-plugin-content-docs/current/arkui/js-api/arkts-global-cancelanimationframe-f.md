# cancelAnimationFrame

## cancelAnimationFrame

```TypeScript
export declare function cancelAnimationFrame(requestId: number): void
```

Cancels the vsync callback set by "requestAnimationFrame()".

**起始版本：** 11

**模型约束：** 此接口仅可在FA模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| requestId | number | 是 | Indicates the vsync callback ID returned by "requestAnimationFrame()". |

