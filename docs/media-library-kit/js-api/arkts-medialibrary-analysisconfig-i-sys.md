# AnalysisConfig (System API)

Asset analysis config.

**Since:** 24

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## extraInfos

```TypeScript
extraInfos?: string
```

Extra info in JSON string format.
<br>Length range:(0,500].

**Type:** string

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## types

```TypeScript
types: AnalysisType[]
```

Array of analysis types, limited in size to the number of defined members in the AnalysisType enumeration.

**Type:** AnalysisType[]

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## uris

```TypeScript
uris: string[]
```

Array of asset URIs.
<br>Length range:[0, 100].

**Type:** string[]

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

