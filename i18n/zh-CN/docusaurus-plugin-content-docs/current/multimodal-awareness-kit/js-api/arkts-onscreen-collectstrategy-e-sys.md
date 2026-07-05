# CollectStrategy

```TypeScript
export enum CollectStrategy
```

Defines a page information collection policy.

**起始版本：** 23

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## ALLOW

```TypeScript
ALLOW = 1 << 0
```

Collection is supported.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## SPLIT_SCREEN

```TypeScript
SPLIT_SCREEN = 1 << 1
```

Collection policy of the split-screen window on the application.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## UNSUPPORTED_APP

```TypeScript
UNSUPPORTED_APP = 1 << 2
```

Automatic collection is not supported.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## PRIVATE_WINDOW

```TypeScript
PRIVATE_WINDOW = 1 << 3
```

Privacy window of the application.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## ANCO_APP

```TypeScript
ANCO_APP = 1 << 4
```

VM application, which is a non-HarmonyOS application.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## ALLOW_USER_CHANGE

```TypeScript
ALLOW_USER_CHANGE = 1 << 5
```

Collection policies can be configured.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## BUSINESS_APP

```TypeScript
BUSINESS_APP = 1 << 6
```

Application data can be collected.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## FLOAT_SCREEN

```TypeScript
FLOAT_SCREEN = 1 << 7
```

Floating window.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## PIP_SCREEN

```TypeScript
PIP_SCREEN = 1 << 8
```

Picture-in-picture mode.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## LAUNCHER

```TypeScript
LAUNCHER = 1 << 9
```

Desktop application.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

