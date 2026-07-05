# VisibilityChangeReason

```TypeScript
declare enum VisibilityChangeReason
```

NavDestination可见性发生变化的原因。

**Since:** 21

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## TRANSITION

```TypeScript
TRANSITION = 0
```

通过页面跳转的方式使NavDestination可见性发生变化。

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## CONTENT_COVER

```TypeScript
CONTENT_COVER = 1
```

通过全模态的开启和关闭使NavDestination可见性发生变化。

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## APP_STATE

```TypeScript
APP_STATE = 2
```

通过前后台切换使NavDestination可见性发生变化。

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

