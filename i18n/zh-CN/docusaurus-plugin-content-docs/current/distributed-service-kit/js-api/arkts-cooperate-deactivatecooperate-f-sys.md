# deactivateCooperate

## deactivateCooperate

```TypeScript
function deactivateCooperate(isUnchained: boolean, callback: AsyncCallback<void>): void
```

停止键鼠穿越，使用Callback异步回调。

**起始版本：** 11

**需要权限：** 

 ohos.permission.COOPERATE_MANAGER

**系统能力：** SystemCapability.Msdp.DeviceStatus.Cooperate

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isUnchained | boolean | 是 | 是否关闭跨设备链路。 true表示关闭跨设备链路，false表示不关闭。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数，键鼠穿越停止成功时，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. [dynamiconly] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  cooperate.deactivateCooperate(false, (error: BusinessError) => {
    if (error) {
      console.error(`Stop Keyboard mouse crossing failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
      return;
    }
    console.info(`Stop Keyboard mouse crossing success.`);
  });
} catch (error) {
  console.error(`Stop Keyboard mouse crossing failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
}

```

## deactivateCooperate

```TypeScript
function deactivateCooperate(isUnchained: boolean): Promise<void>
```

停止键鼠穿越，使用Promise异步回调。

**起始版本：** 11

**需要权限：** 

 ohos.permission.COOPERATE_MANAGER

**系统能力：** SystemCapability.Msdp.DeviceStatus.Cooperate

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isUnchained | boolean | 是 | 是否关闭跨设备链路。 true表示关闭跨设备链路，false表示不关闭。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  cooperate.deactivateCooperate(false).then(() => {
    console.info(`Stop Keyboard mouse crossing success.`);
  }, (error: BusinessError) => {
    console.error(`Stop Keyboard mouse crossing failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
  });
} catch (error) {
  console.error(`Stop Keyboard mouse crossing failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
}

```

