# SubWindowOptions

子窗口创建参数。

**Since:** 11

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## modalityType

```TypeScript
modalityType?: ModalityType
```

子窗口模态类型，仅当子窗口启用模态属性时生效。不设置，则默认为WINDOW_MODALITY。

**Type:** ModalityType

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## outlineEnabled

```TypeScript
outlineEnabled?: boolean
```

子窗口是否显示描边。true表示子窗口显示描边，false表示子窗口不显示描边。不设置，则默认为false。 该参数在2in1设备、其他设备的电脑模式中可正常调用，在其他设备和其他模式中作为入参使用时，对应接口不生效不报错。

**Type:** boolean

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## isTopmost

```TypeScript
isTopmost?: boolean
```

子窗口是否启用置顶属性。true表示子窗口置顶，false表示子窗口不置顶。不设置，则默认为false。

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## zLevel

```TypeScript
zLevel?: int
```

子窗口层级级别，仅当子窗口未启用模态属性，即未设置isModal时生效。该参数是整数，取值范围为[-10000, 10000]，浮点数输入将向下取整。不设置，则默认为0。

**Type:** int

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## windowRect

```TypeScript
windowRect?: Rect
```

子窗口矩形区域，其中子窗口存在大小限制，具体参考 [resize()](arkts-window-window-i.md#resize)方法。不设置 且未调用[showWindow()](arkts-window-window-i.md#showWindow)显示前，则默认为{left: 0, top: 0, width: 0, height: 0}。具体参考[设置应用子窗口](docroot://windowmanager/application-window-stage.md#设置应用子窗口)开发指南。

**Type:** Rect

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## maximizeSupported

```TypeScript
maximizeSupported?: boolean
```

子窗口是否支持最大化特性。true表示子窗口支持最大化，false表示子窗口不支持最大化。不设置，则默认为false。 该参数在支持并处于[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的设备上可正常调用；在不支持 [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的设备上，作为入参使用时，对应接口不生效不报错；在支持但不处于 [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的设备上，作为入参使用时，对应接口不生效不报错，切换到 [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态后生效。

**Type:** boolean

**Since:** 19

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## zLevelAboveParentLoosened

```TypeScript
zLevelAboveParentLoosened?: boolean
```

标识解除子窗在父窗口的层级限制

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## decorEnabled

```TypeScript
decorEnabled: boolean
```

子窗口是否显示装饰。true表示子窗口显示装饰，false表示子窗口不显示装饰。

**Type:** boolean

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## title

```TypeScript
title: string
```

子窗口标题。标题显示区域最右端不超过系统三键区域最左端，超过部分以省略号表示。

**Type:** string

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## isModal

```TypeScript
isModal?: boolean
```

子窗口是否启用模态属性。true表示子窗口启用模态属性，false表示子窗口禁用模态属性。不设置，则默认为false。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

