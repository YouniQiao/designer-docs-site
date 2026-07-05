# SnapshotResult

全量绘制回调结果。

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## size

```TypeScript
size?: SizeOptions
```

web绘制的尺寸，最多支持16000px * 16000px，长度单位支持px、vp、%，需保持不同参数传入长度单位一致，默认单位vp，超过规格时返回最大规格。（示例：width:'100px'，height:'200px'。 或者 width:'20%'，height:'30%'。只写数字时单位为vp。）

**Type:** SizeOptions

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## imagePixelMap

```TypeScript
imagePixelMap?: image.PixelMap
```

全量绘制结果为image.PixelMap格式。

**Type:** image.PixelMap

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## id

```TypeScript
id?: string
```

snapshot的id。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## status

```TypeScript
status?: boolean
```

snapshot的状态，正常为true，失败为false，获取全量绘制结果失败，返回size的长宽都为0，map为空。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

