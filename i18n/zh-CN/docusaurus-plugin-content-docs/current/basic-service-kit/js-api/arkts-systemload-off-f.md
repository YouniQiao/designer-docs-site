# off

## off('systemLoadChange')

```TypeScript
function off(type: 'systemLoadChange', callback?: Callback<SystemLoadLevel>): void
```

Unregister system load callback for perception system load change

**起始版本：** 12

**系统能力：** SystemCapability.ResourceSchedule.SystemLoad

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'systemLoadChange' | 是 | system load change type. |
| callback | Callback&lt;SystemLoadLevel> | 否 | Asynchronous callback interface. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Callback parameter error;  2. Unregister type has not register; 3. Parameter verification failed. |

**示例：**

```TypeScript
import { systemLoad } from '@kit.BasicServicesKit';

function onSystemLoadChange(res: systemLoad.SystemLoadLevel) {
    console.info(`system load changed, current level ` + res);
}

try {
    systemLoad.off('systemLoadChange', onSystemLoadChange);
    console.info(`unregister systemload callback succeeded:. `);
} catch (err) {
    console.error(`unregister systemload callback failed: ` + JSON.stringify(err));
}

```

