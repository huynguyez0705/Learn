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
    studentsArray.forEach(function render(student, index) {
      let studenID = index;
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
      if (actionCell) {
        actionCell.outerHTML = `<td><a href="javascript:void(0)" id="delInfo" onclick="deleteStudent(${studenID})">Xóa</a> |<a href="javascript:void(o)" id="editInfo"onclick="editStunden(${studenID})">Edit</a></td>`;
      }
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

  updateTable();
}

// Hàm chỉnh sửa học sinh khỏi mảng và cập nhật LocalStorage
function editStunden(index) {
  const studentsArray = JSON.parse(localStorage.getItem("students"));
  const studentToEdit = studentsArray[index];
  showEditstudent(studentToEdit);
}
function showEditstudent(student) {
  document.getElementById("name").value = student.name;
  document.getElementById("mail").value = student.email;
  document.getElementById("phone").value = student.phone;
  const genderInputs = document.getElementsByName("gioiTinh");
  for (let i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].value === student.gender) {
      genderInputs[i].checked = true;
      break;
    }
  }
}

// Hàm cập nhật lại bảng sau khi xóa học sinh
function updateTable() {
  // Làm mới trang để cập nhật lại bảng
  window.location.href = window.location.href;
}
function updateList() {
  //làm mới trang hoàn toàn và tải lại toàn bộ nội dung từ máy chủ
  location.reload();
  //làm mới" trang mà không làm mất toàn bộ trạng thái và dữ liệu hiện tại trên trang
  // window.location.href = window.location.href;
}
