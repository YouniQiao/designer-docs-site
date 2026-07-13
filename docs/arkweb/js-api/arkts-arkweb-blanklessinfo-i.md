# BlanklessInfo

Describes the prediction information about blankless loading, including the first screen similarity, first screen
loading duration, and error code. The application determines whether to enable the blankless loading solution based
on the prediction information.

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## errCode

```TypeScript
errCode: WebBlanklessErrorCode
```

Error code of blankless loading. For details, see
[WebBlanklessErrorCode](arkts-arkweb-webblanklesserrorcode-e.md).

**Type:** WebBlanklessErrorCode

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

## loadingTime

```TypeScript
loadingTime: number
```

Loading duration estimated based on the historical first screen loading durations, in milliseconds. The value
must be greater than 0.

**Type:** number

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

## similarity

```TypeScript
similarity: number
```

First screen similarity, which is calculated based on the historical first screen content. The value ranges from
0 to 1.0. 1.0 indicates that the content is the same. A value closer to 1 indicates a higher similarity. This
value is lagging, and the similarity of local loading is displayed in the next loading. You are advised not to
enable the blankless loading solution when the similarity is low.

**Type:** number

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

