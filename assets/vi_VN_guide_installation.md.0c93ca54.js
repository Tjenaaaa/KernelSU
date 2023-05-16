import{_ as t,o as a,c as o,O as n}from"./chunks/framework.43781440.js";const m=JSON.parse('{"title":"Cách cài đặt","description":"","frontmatter":{},"headers":[],"relativePath":"vi_VN/guide/installation.md","filePath":"vi_VN/guide/installation.md"}'),e={name:"vi_VN/guide/installation.md"},i=n('<h1 id="cach-cai-đat" tabindex="-1">Cách cài đặt <a class="header-anchor" href="#cach-cai-đat" aria-label="Permalink to &quot;Cách cài đặt&quot;">​</a></h1><h2 id="kiem-tra-xem-thiet-bi-co-ho-tro-khong" tabindex="-1">Kiểm tra xem thiết bị có hỗ trợ không <a class="header-anchor" href="#kiem-tra-xem-thiet-bi-co-ho-tro-khong" aria-label="Permalink to &quot;Kiểm tra xem thiết bị có hỗ trợ không&quot;">​</a></h2><p>Tải KernelSU Manager từ <a href="https://github.com/tiann/KernelSU/releases" target="_blank" rel="noreferrer">trang Releases trên Github</a> hoặc <a href="https://github.com/tiann/KernelSU/actions/workflows/build-manager.yml" target="_blank" rel="noreferrer">Github Actions</a></p><ul><li>Nếu ứng dụng hiện <code>Unsupported</code>, nghĩa là <strong>Bạn phải tự compile kernel</strong>, KernelSU sẽ không và không bao giờ cung cấp cho bạn một boot image dành riêng cho bạn để flash.</li><li>Nếu ứng dụng hiện <code>Not installed</code>, thì thiết bị của bạn đã chính thức hỗ trợ bởi KernelSU.</li></ul><h2 id="tim-mot-boot-img" tabindex="-1">Tìm một boot.img <a class="header-anchor" href="#tim-mot-boot-img" aria-label="Permalink to &quot;Tìm một boot.img&quot;">​</a></h2><p>KernelSU cung cấp một boot.img chung cho các thiết bị GKI, bạn nên flash boot.img này vào trong phân vùng boot của bạn.</p><p>Bạn có thể tải boot.img từ <a href="https://github.com/tiann/KernelSU/actions/workflows/build-kernel.yml" target="_blank" rel="noreferrer">Github Actions cho Kernel</a>, lưu ý là hãy dùng đúng phiên bản boot.img. Ví dụ, nếu phiên bản kernel bạn dùng là <code>5.10.101</code>, thì bạn nên sử dụng <code>5.10.101-xxxx.boot.xxxx</code>.</p><p>Và tiện thể hãy kiểm tra định dạng gốc của boot.img trong máy bạn, bạn nên sử dụng đúng định dạng như là <code>lz4</code> hoặc <code>gz</code>.</p><h2 id="flash-boot-img-nay-vao-thiet-bi" tabindex="-1">Flash boot.img này vào thiết bị <a class="header-anchor" href="#flash-boot-img-nay-vao-thiet-bi" aria-label="Permalink to &quot;Flash boot.img này vào thiết bị&quot;">​</a></h2><p>Kết nối thiết bị với <code>adb</code> và chạy <code>adb reboot bootloader</code> để vào chế độ fastboot, và rồi dùng câu lệnh này để flash KernelSU:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">fastboot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">flash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">boot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">boot.img</span></span></code></pre></div><h2 id="khoi-đong-lai" tabindex="-1">Khởi động lại <a class="header-anchor" href="#khoi-đong-lai" aria-label="Permalink to &quot;Khởi động lại&quot;">​</a></h2><p>Khi flash xong, hãy khởi động lại thiết bị :</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">fastboot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reboot</span></span></code></pre></div>',14),l=[i];function s(h,r,c,b,d,g){return a(),o("div",null,l)}const u=t(e,[["render",s]]);export{m as __pageData,u as default};
