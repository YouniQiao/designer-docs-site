# PageMediaEntity

The definition of pagination object.

**Inheritance:** PageMediaEntityextends: OperResult.

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## Modules to Import

```TypeScript
import { avMusicTemplate } from '@kit.AVSessionKit';
```

## totalSize

```TypeScript
totalSize: int
```

Total size of data.

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## pageIndex

```TypeScript
pageIndex: int
```

Pagination query page number.

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## elements

```TypeScript
elements: MediaEntity[]
```

Query data content (pass corresponding structure data according to the type).

**Type:** MediaEntity[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## memberMediaType

```TypeScript
memberMediaType: EntityType
```

Media type.

**Type:** EntityType

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## hasMoreData

```TypeScript
hasMoreData: boolean
```

Have next page data.

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## pageSize

```TypeScript
pageSize: int
```

Size of per page.

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## sort

```TypeScript
sort?: Sort
```

Data Sorting

**Type:** Sort

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## episodeRange

```TypeScript
episodeRange?: EpisodeRange
```

Episode Range

**Type:** EpisodeRange

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

