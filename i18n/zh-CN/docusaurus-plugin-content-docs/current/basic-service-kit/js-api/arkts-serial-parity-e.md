# Parity

```TypeScript
enum Parity
```

串口通信中的校验位

**起始版本：** 26.0.0

**系统能力：** SystemCapability.BusManager.Serial

## NONE

```TypeScript
NONE = 'none'
```

无校验位

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BusManager.Serial

## EVEN

```TypeScript
EVEN = 'even'
```

偶校验

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BusManager.Serial

## ODD

```TypeScript
ODD = 'odd'
```

奇校验

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BusManager.Serial

## MARK

```TypeScript
MARK = 'mark'
```

Mark校验，校验位始终为1

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BusManager.Serial

## SPACE

```TypeScript
SPACE = 'space'
```

Space parity. 校验位始终为0

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BusManager.Serial

