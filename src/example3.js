/**
 * 异步加载图片
 */

function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    const image = new Image();

    image.onload = function() {
      resolve(image);
    };

    image.onerror = function() {
      reject(new Error('Could not load image at ' + url));
    }

    image.src = url;
  });
};

// const url = 'http://b.hiphotos.baidu.com/image/pic/item/32fa828ba61ea8d3fcd2e9ce9e0a304e241f5803.jpg';
const url = '';
loadImageAsync(url).then(() => {
  console.log('图片加载成功');
});
