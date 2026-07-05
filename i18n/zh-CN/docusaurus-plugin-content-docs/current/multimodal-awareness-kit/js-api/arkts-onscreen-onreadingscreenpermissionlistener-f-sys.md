# onReadingScreenPermissionListener

## onReadingScreenPermissionListener

```TypeScript
function onReadingScreenPermissionListener(callback: Callback<ReadingScreenPermissionStatus>): void
```

Enables the screen content access permission monitoring and returns the permission status in real time.

**起始版本：** 23

**需要权限：** 

 ohos.permission.GET_SCREEN_CONTENT

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ReadingScreenPermissionStatus> | 是 | Callback used to return the status of the permission  for reading screen information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. An attempt was made to get page content forbidden by  permission: ohos.permission.GET_SCREEN_CONTENT. |
| 202 | Permission check failed. A non-system application uses the system API. |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 34000001 | Service exception. |

**示例：**

```TypeScript
import onScreen from "@ohos.multimodalAwareness.onScreen";
try {
   onScreen.onReadingScreenPermissionListener((info: onScreen.ReadingScreenPermissionStatus) => {
      console.info(`onReadingScreenPermissionListener succeeded, readingState: ${info.readingState}`);
   });
} catch (err) {
   console.error('onReadingScreenPermissionListener failed, errCode = ' + err.code);
}

```

