# PlayForSearchEvent

```TypeScript
type PlayForSearchEvent = (command: SearchPlayInfoType, args: SearchPlayInfo) => Promise<OperResult>
```

The play for search event.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| command | SearchPlayInfoType | 是 | command |
| args | SearchPlayInfo | 是 | args |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;OperResult> | (OperResult) returned through promise |

