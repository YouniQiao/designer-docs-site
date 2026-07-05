# SpringLoadingContext

定义回调上下文信息的类，用于在悬停检测回调中传递给应用程序，使其能访问拖拽状态、动态刷新UI效果以及访问拖拽数据以确定是否处理拖拽操作。

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { dragController } from '@kit.ArkUI';
```

## abort

```TypeScript
abort(): void
```

终止后续的悬停检测。本方法不会触发CANCEL状态通知，应用程序需要在执行本方法时进行状态清理。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## updateConfiguration

```TypeScript
updateConfiguration(config: DragSpringLoadingConfiguration): void
```

更新悬停检测的配置，仅在悬停检测状态为BEGIN时生效。应用程序通常在绑定[onDragSpringLoading]CommonMethod#onDragSpringLoading时设置悬停检测配置或使用默认配 置。该方法不会修改绑定时的原始配置，而是在后续悬停检测中更新动态的配置信息。请谨慎使用本方法，因为不同的拖拽数据类型可能需要不同的UX时间。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | DragSpringLoadingConfiguration | Yes | 悬停检测配置。 |

## dragInfos

```TypeScript
dragInfos?: SpringLoadingDragInfos
```

拖拽信息，当悬停检测状态为CANCEL时缺失，为undefined时取[SpringLoadingDragInfos]dragController.SpringLoadingDragInfos默认值。

**Type:** SpringLoadingDragInfos

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## currentConfig

```TypeScript
currentConfig?: DragSpringLoadingConfiguration
```

当前回调中的配置信息，当悬停检测状态为CANCEL时缺失，为undefined时取 [DragSpringLoadingConfiguration]dragController.DragSpringLoadingConfiguration默认值。

**Type:** DragSpringLoadingConfiguration

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## currentNotifySequence

```TypeScript
currentNotifySequence: number
```

在一次悬停检测流转中的回调通知次数，从0开始。

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## state

```TypeScript
state: DragSpringLoadingState
```

当前悬停检测的状态。

**Type:** DragSpringLoadingState

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

