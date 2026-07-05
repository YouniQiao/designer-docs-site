# FavoriteMediaEntityEvent

```TypeScript
type FavoriteMediaEntityEvent = (actionType: MediaFavoriteType, mediaEntity: MediaEntity) => Promise<OperResult>
```

The favorite media entity event.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| actionType | MediaFavoriteType | 是 | action type |
| mediaEntity | MediaEntity | 是 | media entity |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;OperResult> | (OperResult) returned through promise |

