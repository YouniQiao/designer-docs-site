# CommonState

```TypeScript
enum CommonState
```

自定义弹窗的状态。

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## UNINITIALIZED

```TypeScript
UNINITIALIZED = 0
```

未初始化，控制器未与dialog绑定时。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## INITIALIZED

```TypeScript
INITIALIZED = 1
```

已初始化，控制器与dialog绑定后。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## APPEARING

```TypeScript
APPEARING = 2
```

显示中，dialog显示动画过程中。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## APPEARED

```TypeScript
APPEARED = 3
```

已显示，dialog显示动画结束。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## DISAPPEARING

```TypeScript
DISAPPEARING = 4
```

消失中，dialog消失动画过程中。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## DISAPPEARED

```TypeScript
DISAPPEARED = 5
```

已消失，dialog消失动画结束后。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

