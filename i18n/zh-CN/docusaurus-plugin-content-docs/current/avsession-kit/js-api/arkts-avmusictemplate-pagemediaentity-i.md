# PageMediaEntity

The definition of pagination object.

**继承实现关系：** PageMediaEntity继承自：OperResult。

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## 导入模块

```TypeScript
import { avMusicTemplate } from '@kit.AVSessionKit';
```

## totalSize

```TypeScript
totalSize: int
```

Total size of data.

**类型：** int

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## pageIndex

```TypeScript
pageIndex: int
```

Pagination query page number.

**类型：** int

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## elements

```TypeScript
elements: MediaEntity[]
```

Query data content (pass corresponding structure data according to the type).

**类型：** MediaEntity[]

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## memberMediaType

```TypeScript
memberMediaType: EntityType
```

Media type.

**类型：** EntityType

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## hasMoreData

```TypeScript
hasMoreData: boolean
```

Have next page data.

**类型：** boolean

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## pageSize

```TypeScript
pageSize: int
```

Size of per page.

**类型：** int

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## sort

```TypeScript
sort?: Sort
```

Data Sorting

**类型：** Sort

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## episodeRange

```TypeScript
episodeRange?: EpisodeRange
```

Episode Range

**类型：** EpisodeRange

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

