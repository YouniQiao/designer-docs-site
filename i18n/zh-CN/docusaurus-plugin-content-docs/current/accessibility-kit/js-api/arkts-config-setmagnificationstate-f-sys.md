# setMagnificationState

## setMagnificationState

```TypeScript
function setMagnificationState(state: boolean): void
```

Sets the magnification state. Ensure that magnification is enabled before calling this API.

**起始版本：** 20

**需要权限：** 

 ohos.permission.WRITE_ACCESSIBILITY_CONFIG

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| state | boolean | 是 | Whether to trigger or disable the magnification feature. - true: to trigger the  magnification feature. - false: to disable the magnification feature. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 9300007 | Trigger magnification failed. |

**示例：**

```TypeScript
import { config } from '@kit.AccessibilityKit';

try {
  config.setMagnificationState(true);
} catch (e) {
  console.error(`Set magnification failed,  error code: ${e?.code}, error msg: ${e?.message}`);
}

```

