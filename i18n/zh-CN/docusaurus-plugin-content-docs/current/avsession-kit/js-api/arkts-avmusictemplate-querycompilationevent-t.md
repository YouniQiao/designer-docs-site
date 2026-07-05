# QueryCompilationEvent

```TypeScript
type QueryCompilationEvent = (compilationId: string, pageIndex: int) => Promise<PageMediaEntity>
```

The query compilation event.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| compilationId | string | 是 | compilation id |
| pageIndex | int | 是 | page index |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PageMediaEntity> | (PageMediaEntity) returned through promise |

