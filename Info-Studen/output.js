function update() {
  //làm mới trang hoàn toàn và tải lại toàn bộ nội dung từ máy chủ
  location.reload();
  //làm mới" trang mà không làm mất toàn bộ trạng thái và dữ liệu hiện tại trên trang
  // window.location.href = window.location.href;
}
document.addEventListener("DOMContentLoaded", function () {
  // Lấy dữ liệu từ LocalStorage
  const storedData = localStorage.getItem("students");

  // Chuyển dữ liệu từ chuỗi JSON sang mảng
  const studentsArray = JSON.parse(storedData) || [];

  // Lấy phần tử table trong DOM
  const table = document.querySelector(".list-student table tbody");

  // Đảm bảo có dữ liệu để hiển thị
  if (studentsArray.length > 0) {
    // Duyệt qua mảng học sinh và thêm dữ liệu vào bảng
    studentsArray.forEach(function (student, index) {
      // Tạo một dòng mới trong bảng
      const row = table.insertRow();

      // Thêm các ô dữ liệu vào dòng
      row.insertCell(0).textContent = index + 1; // STT
      row.insertCell(1).textContent = student.name; // Tên học sinh
      row.insertCell(2).textContent = student.email; // Email học sinh
      row.insertCell(3).textContent = student.phone; // Số điện thoại
      row.insertCell(4).textContent = student.gender; // Giới tính

      // Tạo một ô nút cho hành động (ví dụ: Xóa)
      const actionCell = row.insertCell(5);
      const deleteButton = document.createElement("button");
      deleteButton.addClassName = "btn btn-danger";
      deleteButton.textContent = "Xóa";
      deleteButton.addEventListener("click", function () {
        // Gọi hàm xóa học sinh và cập nhật lại bảng
        deleteStudent(index);
        updateTable();
      });
      actionCell.appendChild(deleteButton);
    });
  } else {
    // Nếu không có dữ liệu, hiển thị thông báo hoặc thực hiện hành động khác
    // Ví dụ: Hiển thị thông báo "Không có học sinh."
    const noDataMessage = document.getElementById("noData");
    noDataMessage.style.display = "";
  }
});

// Hàm xóa học sinh khỏi mảng và cập nhật LocalStorage
function deleteStudent(index) {
  const studentsArray = JSON.parse(localStorage.getItem("students")) || [];
  studentsArray.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(studentsArray));
}

// Hàm cập nhật lại bảng sau khi xóa học sinh
function updateTable() {
  // Làm mới trang để cập nhật lại bảng
  location.reload();
}
