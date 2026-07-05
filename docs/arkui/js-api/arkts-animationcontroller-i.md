# AnimationController

动画控制器对象。包含控制动画播放、停止、恢复、暂停和状态查询等方法。

**Since:** 21

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { DrawableDescriptor,AnimatedDrawableDescriptor,AnimationStopMode,AnimationOptions,AnimationController,DrawableDescriptorLoadedResult,LayeredDrawableDescriptor,PictureDrawableDescriptor,PixelMapDrawableDescriptor,HdrCompositionConfig } from '@kit.ArkUI';
```

## getStatus

```TypeScript
getStatus(): AnimationStatus
```

获取当前动图播放的状态。

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| AnimationStatus | 动图的播放状态。包含4种状态：初始态、播放态、暂停态、停止态。 |

**Example**

```TypeScript
import { AnimationOptions, AnimatedDrawableDescriptor } from '@kit.ArkUI';

@Entry
@Component
struct Example {
  options: AnimationOptions = { duration: 1000, iterations: -1 };
  // Replace $r('app.media.gif') with the image resource file you use.
  @State animated: AnimatedDrawableDescriptor = new AnimatedDrawableDescriptor($r('app.media.gif'), this.options);

  statusToString(status: AnimationStatus): string {
    switch (status) {
      case AnimationStatus.Initial:
        return "Initial"
      case AnimationStatus.Running:
        return "Running"
      case AnimationStatus.Paused:
        return "Paused"
      case AnimationStatus.Stopped:
        return "Stopped"
      default:
        return "Error"
    }
  }

  build() {
    Column() {
      Image(this.animated)
        .width(100)
        .height(100)
        .onClick(() => {
          let controller = this.animated.getAnimationController()
          // Obtain the current animation playback status.
          let status = controller?.getStatus()
          console.info(`animation status = ${this.statusToString(status)}`)
        })
    }
  }
}

```

## pause

```TypeScript
pause(): void
```

暂停动图的播放，保持在当前帧。

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Example**

```TypeScript
import { AnimationOptions, AnimatedDrawableDescriptor } from '@kit.ArkUI';

@Entry
@Component
struct Example {
  options: AnimationOptions = { duration: 1000, iterations: -1 };
  // Replace $r('app.media.gif') with the image resource file you use.
  @State animated: AnimatedDrawableDescriptor = new AnimatedDrawableDescriptor($r('app.media.gif'), this.options);

  build() {
    Column() {
      Image(this.animated)
        .width(100)
        .height(100)
        .onClick(() => {
          let controller = this.animated.getAnimationController()
          // Pause playback on the current frame.
          controller?.pause()
        })
    }
  }
}

```

## resume

```TypeScript
resume(): void
```

在当前帧恢复播放动图。

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Example**

```TypeScript
import { AnimationOptions, AnimatedDrawableDescriptor } from '@kit.ArkUI';

@Entry
@Component
struct Example {
  options: AnimationOptions = { duration: 1000, iterations: -1 };
  // Replace $r('app.media.gif') with the image resource file you use.
  @State animated: AnimatedDrawableDescriptor = new AnimatedDrawableDescriptor($r('app.media.gif'), this.options);

  build() {
    Column() {
      Image(this.animated)
        .width(100)
        .height(100)
        .onClick(() => {
          let controller = this.animated.getAnimationController()
          // Start playback from the current frame when the animated image is paused or stopped.
          controller?.resume()
        })
    }
  }
}

```

## start

```TypeScript
start(): void
```

从首帧开始播放。

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Example**

```TypeScript
import { AnimationOptions, AnimatedDrawableDescriptor } from '@kit.ArkUI';

@Entry
@Component
struct Example {
  options: AnimationOptions = { duration: 1000, iterations: -1, autoPlay: false };
  // Replace $r('app.media.gif') with the image resource file you use.
  @State animated: AnimatedDrawableDescriptor = new AnimatedDrawableDescriptor($r('app.media.gif'), this.options);

  build() {
    Column() {
      Image(this.animated)
        .width(100)
        .height(100)
        .onClick(() => {
          let controller = this.animated.getAnimationController()
          // Start playback.
          controller?.start()
        })
    }
  }
}

```

## stop

```TypeScript
stop(): void
```

停止动图的播放并回到首帧。

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Example**

```TypeScript
import { AnimationOptions, AnimatedDrawableDescriptor } from '@kit.ArkUI';

@Entry
@Component
struct Example {
  options: AnimationOptions = { duration: 1000, iterations: -1 };
  // Replace $r('app.media.gif') with the image resource file you use.
  @State animated: AnimatedDrawableDescriptor = new AnimatedDrawableDescriptor($r('app.media.gif'), this.options);

  build() {
    Column() {
      Image(this.animated)
        .width(100)
        .height(100)
        .onClick(() => {
          let controller = this.animated.getAnimationController()
          // Stop playback and reset to the first frame.
          controller?.stop()
        })
    }
  }
}

```

