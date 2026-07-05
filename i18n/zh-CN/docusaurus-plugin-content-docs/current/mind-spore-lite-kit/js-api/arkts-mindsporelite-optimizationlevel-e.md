# OptimizationLevel

```TypeScript
export enum OptimizationLevel
```

Enum for optimization level

**起始版本：** 12

**系统能力：** SystemCapability.AI.MindSporeLite

## O0

```TypeScript
O0 = 0
```

Do not change

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

## O2

```TypeScript
O2 = 2
```

Cast network to float16, keep batch norm and loss in float32

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

## O3

```TypeScript
O3 = 3
```

Cast network to float16, including batch norm

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

## AUTO

```TypeScript
AUTO = 4
```

Choose optimization based on device

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

