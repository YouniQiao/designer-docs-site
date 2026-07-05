# NavContentInfo

跳转Destination信息。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## mode

```TypeScript
mode?: NavDestinationMode
```

NavDestination的模式，如果是根视图(NavBar)，则返回值为undefined。

**Type:** NavDestinationMode

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## param

```TypeScript
param?: Object
```

NavDestination页面加载的参数。

**Type:** Object

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## navDestinationId

```TypeScript
navDestinationId?: string
```

NavDestination的唯一标识符。

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## name

```TypeScript
name?: string
```

NavDestination名称，如果为根视图(NavBar)，则返回值为undefined。

**Type:** string

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## index

```TypeScript
index: number
```

NavDestination在NavPathStack中的序号， 如果为根视图(NavBar)，则返回值为 -1。 取值范围：[-1, +∞)。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

