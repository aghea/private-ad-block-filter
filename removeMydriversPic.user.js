// ==UserScript==
// @name         移除mydrivers重复图片
// @homepageURL       https://github.com/aghea/private-ad-block-filter
// @homepage          https://github.com/aghea/private-ad-block-filter
// @website           https://github.com/aghea/private-ad-block-filter
// @version      7.0.0.0
// @description  移除mydrivers重复图片
// @author       ageha
// @license           BSD 3-clause Clear License
// @match        https://news.mydrivers.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/removeMydriversPic.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/removeMydriversPic.user.js
// @installURL        https://github.com/aghea/private-ad-block-filter/raw/master/removeMydriversPic.user.js
// @require           https://cdn.bootcdn.net/ajax/libs/jquery/1.4.1/jquery.min.js
// @require           https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js
// @require           https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.10.0/js/md5.js

// ==/UserScript==
var debug = false;
var divs = document.getElementsByClassName("news_info");
var div = divs[0];
let imgCountLimit = 5;
// 本地存储已处理的图片哈希集合
    let processedHashes = {};
    const savedImageCount = localStorage.getItem('processedImages');
    if (savedImageCount){
        processedHashes = JSON.parse(savedImageCount);
    };
// 初始化统计对象，存储每个哈希值的出现次数
    let hashUrlCount = {};
    // 从 localStorage 中加载之前的统计数据
    const savedHashes = localStorage.getItem('imagehashUrlCounts');
    if (savedHashes) {
        hashUrlCount = JSON.parse(savedHashes);
    }
    function loadImage(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.setAttribute("crossOrigin",'anonymous')
            img.src = url;
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error('Failed to load image'));
        });
    }

function getURLBase64(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open('get', url, true)
    xhr.responseType = 'blob'
    xhr.onload = function() {
      if (this.status === 200) {
        var blob = this.response
        var fileReader = new FileReader()
        fileReader.onloadend = function(e) {
          var result = e.target.result
          resolve(result)
        }
        fileReader.readAsDataURL(blob)
      }
    }
    xhr.onerror = function() {
      reject()
    }
    xhr.send()
  })
}
    async function getImageHash(url) {
        try {
            const img = await loadImage(url);
            // 使用 canvas 获取图片数据
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            // 将 canvas 转换为_blob_
            const blob = canvas.toBlob();
            if (blob) {
                return await md5.blob(blob); // 使用 blueimp-md5 库计算 MD5 哈希
            }
        } catch (error) {
            console.error('获取图片哈希失败:', error);
            return getURLBase64(url);
        }
    }

    function removeDuplicateImage(imgElement, hash) {
        if (processedHashes.includes(hash)) {
            imgElement.remove();
            return true;
        }
        return false;
    }

(function() {
   /* globals jQuery, $, waitForKeyElements */
        // 创建右上角浮动的div
        const floatingDiv = document.createElement('div');
        floatingDiv.setAttribute('id', 'floatingDiv');
        floatingDiv.setAttribute('style', 'position: fixed; top: 1px; right: 1px; background-color: #f1f1f1; padding: 1px;');
        document.body.appendChild(floatingDiv);

        // 创建链接
        const openPopup = document.createElement('button');
        openPopup.setAttribute('id', 'openPopup');
        openPopup.textContent = '设定';
        floatingDiv.appendChild(openPopup);

        // 创建遮罩层
        const overlay = document.createElement('div');
        overlay.setAttribute('id', 'overlay');
        overlay.setAttribute('style', 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 999;');
        document.body.appendChild(overlay);

        // 创建弹出窗口
        const popup = document.createElement('div');
        popup.setAttribute('id', 'popup');
        popup.setAttribute('style', 'display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #fff; padding: 20px; border: 1px solid #ccc; z-index: 1000;overflow: hidden;');
        document.body.appendChild(popup);

        // 弹出窗口内容
        const popupTitle = document.createElement('h2');
        popupTitle.textContent = '重置图片统计数据？';
        popup.appendChild(popupTitle);
        popup.appendChild(document.createElement("BR"));
        const saveBtn = document.createElement('button');
        saveBtn.setAttribute('id', 'saveBtn');
        saveBtn.textContent = '重置';
        popup.appendChild(saveBtn);
        popup.appendChild(document.createTextNode(" "));
        const cancelBtn = document.createElement('button');
        cancelBtn.setAttribute('id', 'cancelBtn');
        cancelBtn.textContent = '取消';
        popup.appendChild(cancelBtn);

        // 打开弹窗
        openPopup.addEventListener('click', function() {
            popup.style.display = 'block';
            overlay.style.display = 'block';
        });

        // 关闭弹窗
        function closePopup() {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }

        // 保存按钮点击事件
        saveBtn.addEventListener('click', function() {
            localStorage.removeItem('processedImages');
            localStorage.removeItem('imageHashCounts');
            closePopup();
        });

        // 取消按钮点击事件
        cancelBtn.addEventListener('click', function() {
            closePopup();
        });
   // 获取所有图片元素
    const images = $('img');
    // 处理每个图片
    images.each(async function() {
        const $img = $(this);
        const src = $img.attr('src');
        if (!src) return;
        const hash = await getImageHash(src);
        // 计算当前图片的 MD5 哈希值
        const hashUrl = md5(src);

        // 更新哈希值的计数
        if (hashUrlCount[hashUrl]) {
            hashUrlCount[hashUrl]++;
        } else {
            hashUrlCount[hashUrl] = 1;
        }
        if(processedHashes[hash]){
            processedHashes[hash]++;
        } else {
            processedHashes[hash] = 1;
        }
        // 立即保存最新的统计到 localStorage
        localStorage.setItem('imagehashUrlCounts', JSON.stringify(hashUrlCount));
        localStorage.setItem('processedImages', JSON.stringify(processedHashes));
        if (hashUrlCount[hash] > imgCountLimit) {
            // 移除当前图片
            $img.remove();
            console.log(`移除了重复的图片：${src}`);
        }else if (hash && processedHashes[hash] > imgCountLimit) {
            $img.remove();
            console.log(`已移除重复图片: ${src}`);
        } 
    });
})();




