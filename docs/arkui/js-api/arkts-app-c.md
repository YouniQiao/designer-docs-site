# App

定义App类的静态函数

**Since:** 3

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

## Modules to Import

```TypeScript
import { AppResponse,ScreenOnVisibleOptions,RequestFullWindowOptions } from '@kit.ArkUI';
```

## getInfo

```TypeScript
static getInfo(): AppResponse
```

获取当前应用配置文件中声明的信息。在Stage模型下接口返回值为null。 从API version9开始，推荐使用 [bundleManager.getBundleInfoForSelf](../../apis-ability-kit/arkts-apis/arkts-bundlemanager-getbundleinfoforself-f.md#getBundleInfoForSelf-1) 。

**Since:** 3

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

**Return value:**

| Type | Description |
| --- | --- |
| AppResponse | 定义AppResponse信息。 |

**Example**

```TypeScript
import app, { AppResponse } from '@system.app';
export default class Info {
  getInfo() {
    let info:AppResponse = app.getInfo();
    console.info(JSON.stringify(info));
  }
}


<!-- xxx.hml -->
<div class="container">
    <text class="title" style="font-size: {{fontSize}}; color: {{fontColor}};">
        app.getInfo example
    </text>
    <div class="info-item">
        <text class="label">appName:</text>
        <text class="value">{{appName}}</text>
    </div>
    <div class="info-item">
        <text class="label">versionName:</text>
        <text class="value">{{versionName}}</text>
    </div>
    <div class="info-item">
        <text class="label">versionCode:</text>
        <text class="value">{{versionCode}}</text>
    </div>
    <input type="button" value="getAppInfo" style="width: 240px; height: 50px; margin: 5px;" onclick="getAppInfo"></input>
</div>


/* xxx.css */
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 0px;
    top: 0px;
    width: 454px;
    height: 454px;
    background-color: #000000;
}
.title {
    font-size: 32px;
    text-align: center;
    width: 400px;
    height: 80px;
    margin-top: 20px;
    color: #ffffff;
}
.info-item {
    width: 400px;
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #1a1a1a;
    border-radius: 10px;
}
.label {
    font-size: 24px;
    color: #aaaaaa;
}
.value {
    font-size: 24px;
    color: #ffffff;
}


// xxx.js
import app from '@system.app';

export default {
    data: {
        fontSize: '32px',
        fontColor: '#ffffff',
        appName: '',
        versionName: '',
        versionCode: ''
    },
    onInit() {
        this.getAppInfo();
    },
    getAppInfo() {
        try {
            const info = app.getInfo();
            console.info('app.getInfo success');
            console.info('appName: ' + info.appName);
            console.info('versionName: ' + info.versionName);
            console.info('versionCode: ' + info.versionCode);
            this.appName = info.appName || 'Unknown';
            this.versionName = info.versionName || 'Unknown';
            this.versionCode = String(info.versionCode) || 'Unknown';
        } catch (error) {
            console.error('app.getInfo failed: ' + error.message);
            this.appName = 'Failed';
            this.versionName = 'Failed';
            this.versionCode = 'Failed';
        }
    }
}

```

## requestFullWindow

```TypeScript
static requestFullWindow(options?: RequestFullWindowOptions): void
```

Requests the application to run in full window. In some scenarios, such as semi-modal FA, the FA runs in non-full window. In this case, you can call this API. This API is invalid for an application already in full-window mode.

**Since:** 3

**Deprecated since:** 8

**Substitute:** startAbility

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RequestFullWindowOptions | No | Transition time from non-full window to full window, in milliseconds.  By default, the value is in direct proportion to the distance between the non-full window and the full window. |

**Example**

```TypeScript
import app, { AppResponse } from '@system.app';
export default class Req {
  requestFullWindow() {
    app.requestFullWindow({
      duration: 200
    });
  }
} 

```

## screenOnVisible

```TypeScript
static screenOnVisible(options?: ScreenOnVisibleOptions): void
```

定义屏幕唤醒时是否保持应用可见。 该接口从API version 8 开始废弃。

**Since:** 3

**Deprecated since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ScreenOnVisibleOptions | No | 当启动保活时，锁屏时将阻止系统返回桌面显示，以保持屏幕唤醒时应用可见。 |

## setImageCacheCount

```TypeScript
static setImageCacheCount(value: number): void
```

Set image cache capacity of decoded image count. if not set, the application will not cache any decoded image.

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | capacity of decoded image count. |

**Example**

```TypeScript
// xxx.ets
import app, { AppResponse } from '@system.app';

@Entry
@Component
struct Index {
  onPageShow() {
    // Set the maximum number of decoded images that can be cached in the memory to 100.
    app.setImageCacheCount(100);
    console.info('Application onPageShow');
  }
  onDestroy() {
    console.info('Application onDestroy');
  }

  build() {
    Row(){
      // xxxxxxxxxxxxx indicates the image address.
      Image('xxxxxxxxxxxxx')
        .width(200)
        .height(50)
    }.width('100%')
  }
}

```

## setImageFileCacheSize

```TypeScript
static setImageFileCacheSize(value: number): void
```

设置图像文件在解码前在磁盘上的缓存大小（字节）。 如果未设置，应用程序将在磁盘上缓存 100MB 的图像文件。

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 原始图像数据大小的容量，单位为字节。 |

**Example**

```TypeScript
// app.ets
import app, { AppResponse } from '@system.app';

export default class OnC {
  onCreate() {
    app.setImageFileCacheSize(209715200);
    // Set the upper limit of the image file cache to 200 MB. (200 × 1024 × 1024 B= 209715200 B = 200 MB).
    console.info('Application onCreate');
  }
  onDestroy() {
    console.info('Application onDestroy');
  }
}

```

## setImageRawDataCacheSize

```TypeScript
static setImageRawDataCacheSize(value: number): void
```

Set image cache capacity of raw image data size in bytes before decode. if not set, the application will not cache any raw image data.

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | capacity of raw image data size in bytes. |

**Example**

```TypeScript
// xxx.ets
import app, { AppResponse } from '@system.app';

@Entry
@Component
struct Index {
  onPageShow() {
    // Set the upper limit of the memory for caching image data before decoding to 100 MB. (100 × 1024 × 1024 B =104857600 B = 100 MB).
    app.setImageRawDataCacheSize(104857600); 
    console.info('Application onPageShow');
  }
  onDestroy() {
    console.info('Application onDestroy');
  }

  build() {
    Row(){
      // xxxxxxxxxxxxx indicates the image address.
      Image('xxxxxxxxxxxxx')
        .width(200)
        .height(50)
    }.width('100%')
  }
}

```

## terminate

```TypeScript
static terminate(): void
```

退出当前Ability。在Stage模型下接口功能不生效。 从API version 7开始，推荐使用[`@ohos.ability.featureAbility`](../../apis-ability-kit/arkts-apis/arkts-ability-featureability.md#featureAbility)。

**Since:** 3

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

**Example**

```TypeScript
import app, { AppResponse } from '@system.app';
export default class TerM {
  terminate() {
    app.terminate();
  }
}


<!-- xxx.hml -->
<div class="container">
    <text class="title" style="font-size: {{fontSize}}; color: {{fontColor}};">
        app.terminate example
    </text>
    <text class="desc">
        Click the button below to exit the app
    </text>
    <input type="button" value="exit app" style="width: 240px; height: 50px; margin: 5px;" onclick="terminateApp"></input>
</div>


/* xxx.css */
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 0px;
    top: 0px;
    width: 454px;
    height: 454px;
    background-color: #000000;
}
.title {
    font-size: 32px;
    text-align: center;
    width: 400px;
    height: 80px;
    margin-top: 60px;
    color: #ffffff;
}
.desc {
    font-size: 24px;
    text-align: center;
    width: 290px;
    height: 120px;
    margin-top: 20px;
    color: #aaaaaa;
}


// xxx.js
import app from '@system.app';

export default {
    data: {
        fontSize: '32px',
        fontColor: '#ffffff'
    },
    terminateApp() {
        console.info('Calling app.terminate...');
        try {
            app.terminate();
            console.info('app.terminate called');
        } catch (error) {
            console.error('app.terminate failed: ' + error.message);
        }
    }
}

```

