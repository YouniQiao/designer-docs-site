# DragSpringLoadingConfiguration

定义拖拽的悬停检测配置参数的接口。默认的配置参数通常已能满足需求。可以通过在绑定[onDragSpringLoading]CommonMethod#onDragSpringLoading时指定配置，或者通过在 BEGIN状态期间使用[updateConfiguration]dragController.SpringLoadingContext#updateConfiguration方法动态修改的方式以自定义该配置参数。

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { dragController } from '@kit.ArkUI';
```

## updateInterval

```TypeScript
updateInterval?: number
```

进入悬停检测UPDATE状态后，更新通知的时间间隔，单位：ms。取值范围为[0, 2<sup>31</sup>-1]的整数。输入浮点数时只取整数部分。输入非法值（负数、null、undefined、NaN）时取默认值100。

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## stillTimeLimit

```TypeScript
stillTimeLimit?: number
```

进入悬停检测BEGIN状态所需保持静止的时间，单位：ms。取值范围为[0, 2<sup>31</sup>-1]的整数。输入浮点数时只取整数部分。输入非法值（负数、null、undefined、NaN）时取默认值500。

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## updateToFinishInterval

```TypeScript
updateToFinishInterval?: number
```

从UPDATE状态到END状态的最长等待时间，单位：ms。取值范围为[0, 2<sup>31</sup>-1]的整数。输入浮点数时只取整数部分。输入非法值（负数、null、undefined、NaN）时取默认值100。

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## updateNotifyCount

```TypeScript
updateNotifyCount?: number
```

进入悬停检测UPDATE状态后，更新通知的最大次数。取值范围为[0, 2<sup>31</sup>-1]的整数。输入浮点数时只取整数部分。输入非法值（负数、null、undefined、NaN）时取默认值3。

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

