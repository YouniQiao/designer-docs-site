# hasCall

## hasCall

```TypeScript
function hasCall(callback: AsyncCallback<boolean>): void
```

Checks whether a call is ongoing.

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.CallManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | The callback of hasCall. Returns {@code true} if at least one call is  not in the {@link CallState#CALL_STATE_IDLE} state; returns {@code false} otherwise. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.hasCall((err: BusinessError, data: boolean) => {
    if (err) {
        console.error(`hasCall fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`hasCall success, data->${JSON.stringify(data)}`);
    }
});

```

## hasCall

```TypeScript
function hasCall(): Promise<boolean>
```

Checks whether a call is ongoing.

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.CallManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Returns {@code true} if at least one call is not  in the {@link CallState#CALL_STATE_IDLE} state; returns {@code false} otherwise. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.hasCall().then(() => {
    console.info(`hasCall success`);
}).catch((err: BusinessError) => {
    console.error(`hasCall fail, promise: err->${JSON.stringify(err)}`);
});

```

