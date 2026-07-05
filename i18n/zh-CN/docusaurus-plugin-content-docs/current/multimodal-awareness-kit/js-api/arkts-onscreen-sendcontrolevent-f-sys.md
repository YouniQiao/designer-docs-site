# sendControlEvent

## sendControlEvent

```TypeScript
function sendControlEvent(event: ControlEvent): Promise<void>
```

If the target window is displayed on the screen, you can use this API to send screen control events based on the paragraph information obtained via [onScreen.getPageContent]onScreen.getPageContent.

**起始版本：** 20

**需要权限：** 

 ohos.permission.SIMULATE_USER_INPUT

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | ControlEvent | 是 | Onscreen control event. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. An attempt was made to get page content forbidden by  permission: ohos.permission.SIMULATE_USER_INPUT. |
| 202 | Permission check failed. A non-system application uses the system API. |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 34000001 | Service exception. |
| 34000005 | The target is not found. |

