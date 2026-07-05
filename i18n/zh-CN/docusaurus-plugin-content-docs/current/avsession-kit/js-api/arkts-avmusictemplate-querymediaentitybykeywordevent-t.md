# QueryMediaEntityByKeywordEvent

```TypeScript
type QueryMediaEntityByKeywordEvent = (keyword: string, searchType: EntityType,
    pageIndex: int) => Promise<PageMediaEntity>
```

The query media entity by keyword event.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyword | string | 是 | keyword |
| searchType | EntityType | 是 | search type |
| pageIndex | int | 是 | page index |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PageMediaEntity> | (PageMediaEntity) returned through promise |

