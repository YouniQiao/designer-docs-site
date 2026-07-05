# SpringLoadingDragInfos

定义触发悬停检测时拖拽事件信息的接口。该接口提供了拖拽数据摘要和拖拽事件额外信息，应用程序可以据此决定是否响应悬停检测回调。

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { dragController } from '@kit.ArkUI';
```

## dataSummary

```TypeScript
dataSummary?: unifiedDataChannel.Summary
```

拖拽数据的摘要，默认为null。

**Type:** unifiedDataChannel.Summary

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## extraInfos

```TypeScript
extraInfos?: string
```

拖拽事件额外信息，默认为空字符串。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

