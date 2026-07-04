# TouchOptions

触摸操作的通用选项。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Test.UiTest

## duration

```TypeScript
duration?: number
```

操作的持续时间，单位为毫秒。 <br>取值范围：值应 >= 1500 <br>单位：ms <br>默认值：1500

**类型：** number

**起始版本：** 26.0.0

**元服务API：** 从API版本26.0.0开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

## pressure

```TypeScript
pressure?: number
```

触摸压力值。 <br>取值范围：[0.0, 1.0] <br>默认值：1.0

**类型：** number

**起始版本：** 26.0.0

**元服务API：** 从API版本26.0.0开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

## speed

```TypeScript
speed?: number
```

触摸动作的速度。 <br>取值范围：[200, 40000] <br>单位：px/s。 <br>如果为负数则抛出错误码17000007。 <br>默认值：600

**类型：** number

**起始版本：** 26.0.0

**元服务API：** 从API版本26.0.0开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

