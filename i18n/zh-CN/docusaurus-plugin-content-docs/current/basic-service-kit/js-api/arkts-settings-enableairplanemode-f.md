# enableAirplaneMode

## enableAirplaneMode

```TypeScript
function enableAirplaneMode(enable: boolean, callback: AsyncCallback<void>): void
```

Enables or disables airplane mode.

**起始版本：** 7

**废弃版本：** 26.0.0

**系统能力：** SystemCapability.Applications.Settings.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | Specifies whether to enable airplane mode. The value {@code true} means to enable  airplane mode, and {@code false} means to disable airplane mode. |
| callback | AsyncCallback&lt;void> | 是 |  |

**示例：**

```TypeScript
let isEnabled :boolean = true;
settings.enableAirplaneMode(isEnabled, (err:Error) => {
    if (err) {
        console.error('Failed to enable AirplaneMode.');
        return;
    }
    console.info('Return true if enable.');
})

```

## enableAirplaneMode

```TypeScript
function enableAirplaneMode(enable: boolean): Promise<void>
```

Enables or disables airplane mode.

**起始版本：** 7

**废弃版本：** 26.0.0

**系统能力：** SystemCapability.Applications.Settings.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | Specifies whether to enable airplane mode. The value {@code true} means to enable  airplane mode, and {@code false} means to disable airplane mode. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - Return Promise. |

**示例：**

```TypeScript
let isEnabled :boolean = true;
settings.enableAirplaneMode(isEnabled).then(() => {
  console.info('Succeeded in enabling AirplaneMode.');
}).catch((err:Error) => {
  console.error(`Failed to enable AirplaneMode. Cause: ${err}`);
})

```

