# QueryPlaylistEvent

```TypeScript
type QueryPlaylistEvent = (pageIndex: int, sort: Sort) => Promise<PageMediaEntity>
```

The query play list event.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pageIndex | int | 是 | page index |
| sort | Sort | 是 | sort |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PageMediaEntity> | (PageMediaEntity) returned through promise |

