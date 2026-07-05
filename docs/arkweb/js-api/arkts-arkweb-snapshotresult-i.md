# SnapshotResult

Represents a full drawing result.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@ohos.web.webview';
```

## id

```TypeScript
id?: string
```

Snapshot ID.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## imagePixelMap

```TypeScript
imagePixelMap?: image.PixelMap
```

The image in PixelMap format.

**Type:** image.PixelMap

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## size

```TypeScript
size?: SizeOptions
```

Size for web rendering. The maximum size is 16000 px × 16000 px. The length unit can be px, vp, or %. The length unit must be the consistent across parameters. The default unit is vp. If the size exceeds the specifications, the maximum size is returned. Example: **width: '100px', height: '200px'** or **width: '20%', height'30%'**. If only digits are written, the unit is vp.

**Type:** SizeOptions

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## status

```TypeScript
status?: boolean
```

The status of the snapshot.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

