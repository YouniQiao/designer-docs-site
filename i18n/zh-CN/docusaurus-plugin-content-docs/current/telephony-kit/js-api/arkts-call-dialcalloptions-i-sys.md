# DialCallOptions

Indicates the options for initiating a call.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## accountId

```TypeScript
accountId?: int
```

Indicates the card slot index number, ranging from 0 to the maximum card slot index number supported by the device.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## dialScene

```TypeScript
dialScene?: DialScene
```

Indicates the scenario of the call.

**类型：** DialScene

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## xCallType

```TypeScript
xCallType?: XCallType
```

Indicates the type of the xcall.

**类型：** XCallType

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## dialType

```TypeScript
dialType?: DialType
```

Indicates the type of the call.

**类型：** DialType

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## extraParams

```TypeScript
extraParams?: Record<string, Object>
```

Indicates the extra call parameters.

**类型：** Record<string, Object>

**起始版本：** 14

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## videoState

```TypeScript
videoState?: VideoStateType
```

Indicates the type of Video state.

**类型：** VideoStateType

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

