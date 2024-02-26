// Lấy tất cả các thẻ tiêu đề từ h1 đến h6
var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
for (var i = 1; i < headings.length; i++) {
    var heading = headings[i];
    var tagName = heading.tagName;
    var content = heading.innerText;
    fileContent += '<' + tagName + '>' + ' ' + content + '\n';
}

// Tạo một đối tượng Blob từ nội dung tệp tin
var blob = new Blob([fileContent], {
    type: "text/plain"
});

// Tạo đường dẫn URL cho tệp tin Blob
var urlBlob = URL.createObjectURL(blob);

// Tạo liên kết tải về động
var downloadLink = document.createElement("a");
downloadLink.href = urlBlob;
downloadLink.download = "heading_content.txt";
downloadLink.style.display = "none";
document.body.appendChild(downloadLink);

// Kích hoạt sự kiện click trên liên kết tải về động
downloadLink.click();

// Xóa đối tượng và liên kết sau khi tải về
document.body.removeChild(downloadLink);
// URL của trang web
var url = window.location.href;
console.log("URL:", url);
// Đếm số từ
let text = document.body.innerText;
let wordCount = text.split(/\s+/).length;
console.log("Word count:", wordCount);
var fileContent = "URL: " + url + "\n";
fileContent += "Word count: " + wordCount + "\n";