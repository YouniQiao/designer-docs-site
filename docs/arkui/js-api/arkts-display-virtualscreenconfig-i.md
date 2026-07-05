# VirtualScreenConfig

创建虚拟屏幕的参数。

**Since:** 16

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { display } from '@kit.ArkUI';
```

## density

```TypeScript
density: double
```

指定虚拟屏幕的密度，单位为px，该参数为浮点数。

**Type:** double

**Since:** 16

**System capability:** SystemCapability.Window.SessionManager

## supportsFocus

```TypeScript
supportsFocus?: boolean
```

指定虚拟屏幕是否可获得焦点。true表示可获焦，false表示不可获焦，默认值为true。

**Type:** boolean

**Since:** 22

**System capability:** SystemCapability.Window.SessionManager

## width

```TypeScript
width: long
```

指定虚拟屏幕的宽度，单位为px，该参数应为正整数。

**Type:** long

**Since:** 16

**System capability:** SystemCapability.Window.SessionManager

## name

```TypeScript
name: string
```

指定虚拟屏幕的名称，用户可自行定义。

**Type:** string

**Since:** 16

**System capability:** SystemCapability.Window.SessionManager

## surfaceId

```TypeScript
surfaceId: string
```

指定虚拟屏幕的surfaceId，用户可自行定义，该参数最大长度为4096个字节，超出最大长度时则取前4096个字节。

**Type:** string

**Since:** 16

**System capability:** SystemCapability.Window.SessionManager

## height

```TypeScript
height: long
```

指定虚拟屏幕的高度，单位为px，该参数应为正整数。

**Type:** long

**Since:** 16

**System capability:** SystemCapability.Window.SessionManager

