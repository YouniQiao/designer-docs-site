# apperceive

## apperceive

```TypeScript
function apperceive(capability: OnscreenAwarenessCap, 
                   options?: OnscreenAwarenessOptions): Promise<OnscreenAwarenessInfo[]>
```

Proactively triggers screen content awareness to obtain the screen content for snapshot analysis.

**起始版本：** 23

**需要权限：** 

 ohos.permission.GET_SCREEN_CONTENT

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| capability | OnscreenAwarenessCap | 是 | Onscreen awareness capability list. For details, see the following  supported capability list. |
| options | OnscreenAwarenessOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;OnscreenAwarenessInfo[]> | Promise used to return the onscreen awareness result. The returned  onscreen awareness information list OnscreenAwarenessInfo[] contains a maximum of two awareness  information items. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. An attempt was made to get page content forbidden by  permission: ohos.permission.GET_SCREEN_CONTENT. |
| 202 | Permission check failed. A non-system application uses the system API. |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 34000001 | Service exception. |
| 34000002 | The application or page is not supported. |

**示例：**

```TypeScript
import onScreen from "@ohos.multimodalAwareness.onScreen";
let onscreenAwarenessCap: onScreen.OnscreenAwarenessCap = {
  groupId: 'SmartEdge'
}
try {
  let info: onScreen.OnscreenAwarenessInfo[] = await onScreen.apperceive(onscreenAwarenessCap);
  console.error(`apperceive resultCode: ${info[0].resultCode}`);
} catch (err) {
  console.info(`apperceive failed, error: ${err}`);
}

```

