# Constants

## USER_LOGIN

```TypeScript
const USER_LOGIN: string
```

User login event. This is a reserved application event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 11.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## USER_LOGOUT

```TypeScript
const USER_LOGOUT: string
```

User logout event. This is a reserved application event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 11.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## DISTRIBUTED_SERVICE_START

```TypeScript
const DISTRIBUTED_SERVICE_START: string
```

Distributed service startup event. This is a reserved application event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 11.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## APP_CRASH

```TypeScript
const APP_CRASH: string
```

Application crash event. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 11.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## APP_FREEZE

```TypeScript
const APP_FREEZE: string
```

Application freeze event. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 11.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## APP_LAUNCH

```TypeScript
const APP_LAUNCH: string
```

Event indicating the application launch duration. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 12.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## SCROLL_JANK

```TypeScript
const SCROLL_JANK: string
```

Event indicating frame loss during swiping. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 12.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## CPU_USAGE_HIGH

```TypeScript
const CPU_USAGE_HIGH: string
```

Event indicating a high CPU usage. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 12.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## BATTERY_USAGE

```TypeScript
const BATTERY_USAGE: string
```

Event indicating battery usage statistics. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 12.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## RESOURCE_OVERLIMIT

```TypeScript
const RESOURCE_OVERLIMIT: string
```

Application resource leak event. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 12.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## ADDRESS_SANITIZER

```TypeScript
const ADDRESS_SANITIZER: string
```

Application address sanitizer event. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 12.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## MAIN_THREAD_JANK

```TypeScript
const MAIN_THREAD_JANK: string
```

Main thread jank event. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 12.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## APP_KILLED

```TypeScript
const APP_KILLED: string
```

Application killed event. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 20.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## APP_HICOLLIE

```TypeScript
const APP_HICOLLIE: string
```

Application task execution timeout event. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 21.

**起始版本：** 21

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## AUDIO_JANK_FRAME

```TypeScript
const AUDIO_JANK_FRAME: string
```

Audio jank event. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 21.

**起始版本：** 21

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## SCROLL_ARKWEB_FLING_JANK

```TypeScript
const SCROLL_ARKWEB_FLING_JANK: string
```

ArkWeb fling jank event. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 23.

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## appFreezeWarning

```TypeScript
const appFreezeWarning: string
```

App encounter a longer hang and trigger an system warning, such as THREAD_BLOCK_3S or LIFECYCLE_HALF_TIMEOUT. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 26.0.0.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

