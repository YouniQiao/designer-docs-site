# WebGL2RenderingContextOverloads

WebGL 2.0

**Since:** 7

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

## bufferData

```TypeScript
bufferData(target: webgl.GLenum, size: webgl.GLsizeiptr, usage: webgl.GLenum): void
```

Sets buffer data

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | webgl.GLenum | Yes | Buffer target |
| size | webgl.GLsizeiptr | Yes | Buffer size |
| usage | webgl.GLenum | Yes | Buffer usage |

## bufferData

```TypeScript
bufferData(target: webgl.GLenum, srcData: BufferSource | null, usage: webgl.GLenum): void
```

Sets buffer data from BufferSource

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | webgl.GLenum | Yes | Buffer target |
| srcData | BufferSource \| null | Yes | Buffer data |
| usage | webgl.GLenum | Yes | Buffer usage |

## bufferData

```TypeScript
bufferData(
      target: webgl.GLenum,
      srcData: ArrayBufferView,
      usage: webgl.GLenum,
      srcOffset: webgl.GLuint,
      length?: webgl.GLuint,
    ): void
```

Sets buffer data from ArrayBufferView with offset

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | webgl.GLenum | Yes | Buffer target |
| srcData | ArrayBufferView | Yes | Source data |
| usage | webgl.GLenum | Yes | Buffer usage |
| srcOffset | webgl.GLuint | Yes | Source offset |
| length | webgl.GLuint | No | Length |

## bufferSubData

```TypeScript
bufferSubData(target: webgl.GLenum, dstByteOffset: webgl.GLintptr, srcData: BufferSource): void
```

Sets buffer sub data

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | webgl.GLenum | Yes | Buffer target |
| dstByteOffset | webgl.GLintptr | Yes | Destination byte offset |
| srcData | BufferSource | Yes | Source data |

## bufferSubData

```TypeScript
bufferSubData(
      target: webgl.GLenum,
      dstByteOffset: webgl.GLintptr,
      srcData: ArrayBufferView,
      srcOffset: webgl.GLuint,
      length?: webgl.GLuint,
    ): void
```

Sets buffer sub data with offset

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | webgl.GLenum | Yes | Buffer target |
| dstByteOffset | webgl.GLintptr | Yes | Destination byte offset |
| srcData | ArrayBufferView | Yes | Source data |
| srcOffset | webgl.GLuint | Yes | Source offset |
| length | webgl.GLuint | No | Length |

## compressedTexImage2D

```TypeScript
compressedTexImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLenum,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      border: webgl.GLint,
      imageSize: webgl.GLsizei,
      offset: webgl.GLintptr,
    ): void
```

Compressed texture image 2D from PBO offset

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | webgl.GLenum | Yes | Texture target |
| level | webgl.GLint | Yes | Mipmap level |
| internalformat | webgl.GLenum | Yes | Internal format |
| width | webgl.GLsizei | Yes | Width |
| height | webgl.GLsizei | Yes | Height |
| border | webgl.GLint | Yes | Border |
| imageSize | webgl.GLsizei | Yes | Image size |
| offset | webgl.GLintptr | Yes | Offset |

## compressedTexImage2D

```TypeScript
compressedTexImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLenum,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      border: webgl.GLint,
      srcData: ArrayBufferView,
      srcOffset?: webgl.GLuint,
      srcLengthOverride?: webgl.GLuint,
    ): void
```

Compressed texture image 2D from ArrayBufferView

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | webgl.GLenum | Yes | Texture target |
| level | webgl.GLint | Yes | Mipmap level |
| internalformat | webgl.GLenum | Yes | Internal format |
| width | webgl.GLsizei | Yes | Width |
| height | webgl.GLsizei | Yes | Height |
| border | webgl.GLint | Yes | Border |
| srcData | ArrayBufferView | Yes | Source data |
| srcOffset | webgl.GLuint | No | Source offset |
| srcLengthOverride | webgl.GLuint | No | Source length override |

## compressedTexSubImage2D

```TypeScript
compressedTexSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      imageSize: webgl.GLsizei,
      offset: webgl.GLintptr,
    ): void
```

Compressed texture sub image 2D from PBO offset

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | webgl.GLenum | Yes | Texture target |
| level | webgl.GLint | Yes | Mipmap level |
| xoffset | webgl.GLint | Yes | X offset |
| yoffset | webgl.GLint | Yes | Y offset |
| width | webgl.GLsizei | Yes | Width |
| height | webgl.GLsizei | Yes | Height |
| format | webgl.GLenum | Yes | Format |
| imageSize | webgl.GLsizei | Yes | Image size |
| offset | webgl.GLintptr | Yes | Offset |

## compressedTexSubImage2D

```TypeScript
compressedTexSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      srcData: ArrayBufferView,
      srcOffset?: webgl.GLuint,
      srcLengthOverride?: webgl.GLuint,
    ): void
```

Compressed texture sub image 2D from ArrayBufferView

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | webgl.GLenum | Yes | Texture target |
| level | webgl.GLint | Yes | Mipmap level |
| xoffset | webgl.GLint | Yes | X offset |
| yoffset | webgl.GLint | Yes | Y offset |
| width | webgl.GLsizei | Yes | Width |
| height | webgl.GLsizei | Yes | Height |
| format | webgl.GLenum | Yes | Format |
| srcData | ArrayBufferView | Yes | Source data |
| srcOffset | webgl.GLuint | No | Source offset |
| srcLengthOverride | webgl.GLuint | No | Source length override |

## readPixels

```TypeScript
readPixels(
      x: webgl.GLint,
      y: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      dstData: ArrayBufferView | null,
    ): void
```

Reads pixels from the framebuffer to ArrayBufferView

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | webgl.GLint | Yes | X coordinate |
| y | webgl.GLint | Yes | Y coordinate |
| width | webgl.GLsizei | Yes | Width |
| height | webgl.GLsizei | Yes | Height |
| format | webgl.GLenum | Yes | Pixel format |
| type | webgl.GLenum | Yes | Pixel type |
| dstData | ArrayBufferView \| null | Yes | Destination data |

## readPixels

```TypeScript
readPixels(
      x: webgl.GLint,
      y: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      offset: webgl.GLintptr,
    ): void
```

Reads pixels from the framebuffer to PBO offset

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | webgl.GLint | Yes | X coordinate |
| y | webgl.GLint | Yes | Y coordinate |
| width | webgl.GLsizei | Yes | Width |
| height | webgl.GLsizei | Yes | Height |
| format | webgl.GLenum | Yes | Pixel format |
| type | webgl.GLenum | Yes | Pixel type |
| offset | webgl.GLintptr | Yes | Offset |

## readPixels

```TypeScript
readPixels(
      x: webgl.GLint,
      y: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      dstData: ArrayBufferView,
      dstOffset: webgl.GLuint,
    ): void
```

Reads pixels from the framebuffer to ArrayBufferView with offset

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | webgl.GLint | Yes | X coordinate |
| y | webgl.GLint | Yes | Y coordinate |
| width | webgl.GLsizei | Yes | Width |
| height | webgl.GLsizei | Yes | Height |
| format | webgl.GLenum | Yes | Pixel format |
| type | webgl.GLenum | Yes | Pixel type |
| dstData | ArrayBufferView | Yes | Destination data |
| dstOffset | webgl.GLuint | Yes | Destination offset |

## texImage2D

```TypeScript
texImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      border: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      pixels: ArrayBufferView | null,
    ): void
```

Sets texture image 2D from pixels

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | webgl.GLenum | Yes | Texture target |
| level | webgl.GLint | Yes | Mipmap level |
| internalformat | webgl.GLint | Yes | Internal format |
| width | webgl.GLsizei | Yes | Width |
| height | webgl.GLsizei | Yes | Height |
| border | webgl.GLint | Yes | Border |
| format | webgl.GLenum | Yes | Pixel format |
| type | webgl.GLenum | Yes | Pixel type |
| pixels | ArrayBufferView \| null | Yes | Pixel data |

## texImage2D

```TypeScript
texImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      source: webgl.TexImageSource,
    ): void
```

Sets texture image 2D from TexImageSource

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | webgl.GLenum | Yes | Texture target |
| level | webgl.GLint | Yes | Mipmap level |
| internalformat | webgl.GLint | Yes | Internal format |
| format | webgl.GLenum | Yes | Pixel format |
| type | webgl.GLenum | Yes | Pixel type |
| source | webgl.TexImageSource | Yes | Image source |

## texImage2D

```TypeScript
texImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      border: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      pboOffset: webgl.GLintptr,
    ): void
```

Sets texture image 2D from PBO offset

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | webgl.GLenum | Yes | Texture target |
| level | webgl.GLint | Yes | Mipmap level |
| internalformat | webgl.GLint | Yes | Internal format |
| width | webgl.GLsizei | Yes | Width |
| height | webgl.GLsizei | Yes | Height |
| border | webgl.GLint | Yes | Border |
| format | webgl.GLenum | Yes | Pixel format |
| type | webgl.GLenum | Yes | Pixel type |
| pboOffset | webgl.GLintptr | Yes | PBO offset |

## texImage2D

```TypeScript
texImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      border: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      source: webgl.TexImageSource,
    ): void
```

Sets texture image 2D from TexImageSource

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | webgl.GLenum | Yes | Texture target |
| level | webgl.GLint | Yes | Mipmap level |
| internalformat | webgl.GLint | Yes | Internal format |
| width | webgl.GLsizei | Yes | Width |
| height | webgl.GLsizei | Yes | Height |
| border | webgl.GLint | Yes | Border |
| format | webgl.GLenum | Yes | Pixel format |
| type | webgl.GLenum | Yes | Pixel type |
| source | webgl.TexImageSource | Yes | Image source |

## texImage2D

```TypeScript
texImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      border: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      srcData: ArrayBufferView,
      srcOffset: webgl.GLuint,
    ): void
```

Sets texture image 2D from ArrayBufferView with offset

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | webgl.GLenum | Yes | Texture target |
| level | webgl.GLint | Yes | Mipmap level |
| internalformat | webgl.GLint | Yes | Internal format |
| width | webgl.GLsizei | Yes | Width |
| height | webgl.GLsizei | Yes | Height |
| border | webgl.GLint | Yes | Border |
| format | webgl.GLenum | Yes | Pixel format |
| type | webgl.GLenum | Yes | Pixel type |
| srcData | ArrayBufferView | Yes | Source data |
| srcOffset | webgl.GLuint | Yes | Source offset |

## texSubImage2D

```TypeScript
texSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      pixels: ArrayBufferView | null,
    ): void
```

Sets texture sub image 2D from pixels

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | webgl.GLenum | Yes | Texture target |
| level | webgl.GLint | Yes | Mipmap level |
| xoffset | webgl.GLint | Yes | X offset |
| yoffset | webgl.GLint | Yes | Y offset |
| width | webgl.GLsizei | Yes | Width |
| height | webgl.GLsizei | Yes | Height |
| format | webgl.GLenum | Yes | Pixel format |
| type | webgl.GLenum | Yes | Pixel type |
| pixels | ArrayBufferView \| null | Yes | Pixel data |

## texSubImage2D

```TypeScript
texSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      source: webgl.TexImageSource,
    ): void
```

Sets texture sub image 2D from TexImageSource

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | webgl.GLenum | Yes | Texture target |
| level | webgl.GLint | Yes | Mipmap level |
| xoffset | webgl.GLint | Yes | X offset |
| yoffset | webgl.GLint | Yes | Y offset |
| format | webgl.GLenum | Yes | Pixel format |
| type | webgl.GLenum | Yes | Pixel type |
| source | webgl.TexImageSource | Yes | Image source |

## texSubImage2D

```TypeScript
texSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      pboOffset: webgl.GLintptr,
    ): void
```

Sets texture sub image 2D from PBO offset

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | webgl.GLenum | Yes | Texture target |
| level | webgl.GLint | Yes | Mipmap level |
| xoffset | webgl.GLint | Yes | X offset |
| yoffset | webgl.GLint | Yes | Y offset |
| width | webgl.GLsizei | Yes | Width |
| height | webgl.GLsizei | Yes | Height |
| format | webgl.GLenum | Yes | Pixel format |
| type | webgl.GLenum | Yes | Pixel type |
| pboOffset | webgl.GLintptr | Yes | PBO offset |

## texSubImage2D

```TypeScript
texSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      source: webgl.TexImageSource,
    ): void
```

Sets texture sub image 2D from TexImageSource

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | webgl.GLenum | Yes | Texture target |
| level | webgl.GLint | Yes | Mipmap level |
| xoffset | webgl.GLint | Yes | X offset |
| yoffset | webgl.GLint | Yes | Y offset |
| width | webgl.GLsizei | Yes | Width |
| height | webgl.GLsizei | Yes | Height |
| format | webgl.GLenum | Yes | Pixel format |
| type | webgl.GLenum | Yes | Pixel type |
| source | webgl.TexImageSource | Yes | Image source |

## texSubImage2D

```TypeScript
texSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      srcData: ArrayBufferView,
      srcOffset: webgl.GLuint,
    ): void
```

Sets texture sub image 2D from ArrayBufferView with offset

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | webgl.GLenum | Yes | Texture target |
| level | webgl.GLint | Yes | Mipmap level |
| xoffset | webgl.GLint | Yes | X offset |
| yoffset | webgl.GLint | Yes | Y offset |
| width | webgl.GLsizei | Yes | Width |
| height | webgl.GLsizei | Yes | Height |
| format | webgl.GLenum | Yes | Pixel format |
| type | webgl.GLenum | Yes | Pixel type |
| srcData | ArrayBufferView | Yes | Source data |
| srcOffset | webgl.GLuint | Yes | Source offset |

## uniform1fv

```TypeScript
uniform1fv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniform1fv value

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | Yes | Uniform location |
| data | webgl.Float32List | Yes | Data |
| srcOffset | webgl.GLuint | No | Source offset |
| srcLength | webgl.GLuint | No | Source length |

## uniform1iv

```TypeScript
uniform1iv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Int32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniform1iv value

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | Yes | Uniform location |
| data | webgl.Int32List | Yes | Data |
| srcOffset | webgl.GLuint | No | Source offset |
| srcLength | webgl.GLuint | No | Source length |

## uniform2fv

```TypeScript
uniform2fv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniform2fv value

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | Yes | Uniform location |
| data | webgl.Float32List | Yes | Data |
| srcOffset | webgl.GLuint | No | Source offset |
| srcLength | webgl.GLuint | No | Source length |

## uniform2iv

```TypeScript
uniform2iv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Int32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniform2iv value

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | Yes | Uniform location |
| data | webgl.Int32List | Yes | Data |
| srcOffset | webgl.GLuint | No | Source offset |
| srcLength | webgl.GLuint | No | Source length |

## uniform3fv

```TypeScript
uniform3fv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniform3fv value

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | Yes | Uniform location |
| data | webgl.Float32List | Yes | Data |
| srcOffset | webgl.GLuint | No | Source offset |
| srcLength | webgl.GLuint | No | Source length |

## uniform3iv

```TypeScript
uniform3iv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Int32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniform3iv value

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | Yes | Uniform location |
| data | webgl.Int32List | Yes | Data |
| srcOffset | webgl.GLuint | No | Source offset |
| srcLength | webgl.GLuint | No | Source length |

## uniform4fv

```TypeScript
uniform4fv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniform4fv value

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | Yes | Uniform location |
| data | webgl.Float32List | Yes | Data |
| srcOffset | webgl.GLuint | No | Source offset |
| srcLength | webgl.GLuint | No | Source length |

## uniform4iv

```TypeScript
uniform4iv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Int32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniform4iv value

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | Yes | Uniform location |
| data | webgl.Int32List | Yes | Data |
| srcOffset | webgl.GLuint | No | Source offset |
| srcLength | webgl.GLuint | No | Source length |

## uniformMatrix2fv

```TypeScript
uniformMatrix2fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniformMatrix2fv value

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | Yes | Uniform location |
| transpose | webgl.GLboolean | Yes | Transpose |
| data | webgl.Float32List | Yes | Data |
| srcOffset | webgl.GLuint | No | Source offset |
| srcLength | webgl.GLuint | No | Source length |

## uniformMatrix3fv

```TypeScript
uniformMatrix3fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniformMatrix3fv value

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | Yes | Uniform location |
| transpose | webgl.GLboolean | Yes | Transpose |
| data | webgl.Float32List | Yes | Data |
| srcOffset | webgl.GLuint | No | Source offset |
| srcLength | webgl.GLuint | No | Source length |

## uniformMatrix4fv

```TypeScript
uniformMatrix4fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniformMatrix4fv value

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Graphic.Graphic2D.WebGL2

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | Yes | Uniform location |
| transpose | webgl.GLboolean | Yes | Transpose |
| data | webgl.Float32List | Yes | Data |
| srcOffset | webgl.GLuint | No | Source offset |
| srcLength | webgl.GLuint | No | Source length |

