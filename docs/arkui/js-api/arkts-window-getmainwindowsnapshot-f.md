# getMainWindowSnapshot

## getMainWindowSnapshot

```TypeScript
function getMainWindowSnapshot(windowId: Array<int>, config: WindowSnapshotConfiguration):
    Promise<Array<image.PixelMap | undefined>>
```

获取一个或多个指定windowId的主窗口截图，使用Promise异步回调。

**Since:** 21

**Required permissions:** 

 ohos.permission.CUSTOM_SCREEN_CAPTURE

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowId | Array&lt;int> | Yes | 需要获取截图的主窗口ID列表。可通过  [window.getAllMainWindowInfo()]window.getAllMainWindowInfo获取到主窗口windowId。当windowId为null、undefined、小于0、存  在重复值或数量超过512个时，返回错误码401；当windowId大于0但不存在对应窗口时，返回undefined。 |
| config | WindowSnapshotConfiguration | Yes | 获取窗口截图时的配置信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;image.PixelMap \| undefined>> | Promise used to return an array of PixelMap objects of the  screenshots, representing the screenshots, in the order of the provided window ID array. If a window ID is  valid but the corresponding main window cannot be found, undefined is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300003 | This window manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { abilityAccessCtrl, UIAbility, common, Permissions } from '@kit.AbilityKit';
import { image } from '@kit.ImageKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage): void {
    console.info('Ability onWindowStageCreate');
    windowStage.loadContent('pages/Index', (err) => {
      if (err.code) {
        console.error(`Failed to load the content. Cause: JSON.stringify(err)`);
      }
      reqPermissionsFromUser(permissions, this.context);
      console.info('Success in loading the content');
    });
    try {
      let windowIds: number[] = [];
      let configs: window.WindowSnapshotConfiguration = {
        useCache: false
      }
      let windowInfoPromise = window.getAllMainWindowInfo();
      windowInfoPromise.then((mainWindowInfoList: Array<window.MainWindowInfo>) => {
        for (let i = 0; i < mainWindowInfoList.length; i++) {
          windowIds[i] = mainWindowInfoList[i].windowId;
        }
        let promise = window.getMainWindowSnapshot(windowIds, configs);
        promise.then((list: Array<image.PixelMap | undefined>) => {
          for (let i = 0; i < list.length; i++) {
            console.info(`Get main window snapshot, getBytesNumberPerRow: ${list[i]?.getBytesNumberPerRow()}`);
          }
        }).catch((err: BusinessError) => {
          console.error(`Get main window snapshot failed. Error info: ${JSON.stringify(err)}`);
        });
      }).catch((err: BusinessError) => {
        console.error(`Get all main window info failed. Error info: ${JSON.stringify(err)}`);
      });
    } catch (err) {
      console.error(`Get all main window info failed. Cause info: ${JSON.stringify(err)}`);
    }
  }
}

const permissions: Array<Permissions> = ['ohos.permission.CUSTOM_SCREEN_CAPTURE'];
function reqPermissionsFromUser(permissions: Array<Permissions>, context: common.UIAbilityContext): void {
  let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
  atManager.requestPermissionsFromUser(context, permissions).then((data) => {
    console.info('requestPermissionsFromUser');
    let grantStatus: Array<number> = data.authResults;
    let length: number = grantStatus.length;
    for (let i = 0; i < length; i++) {
      if (grantStatus[i] === 0) {
        // User granted permission.
      } else {
        // User denied permission.
        return;
      }
    }
  }).catch((err: BusinessError) => {
    console.error(`Failed to request permission from user. Code is ${err.code}, message is ${err.message}`);
  })
}

```

