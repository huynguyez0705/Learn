// Bài tập 1
// *
// * *
// * * *
// * * * *
// * * * * *
for (let i = 1; i <= 5; i++) {
  let row1 = "";
  for (let j = 1; j <= i; j++) row1 = row1 + "*";
  console.log("Bài tập 1 " + row1);
}
console.log("\n");
// Bài tập 2
// * * * * *
// * * * *
// * * *
// * *
// *
for (let i = 5; i >= 1; i--) {
  let row2 = "";
  for (let j = 1; j <= i; j++) row2 += "*";
  console.log("Bài tập 2 " + row2);
}
console.log("\n");
// Bài tập 3
//            *
//          * *
//       * * *
//    * * * *
// * * * * *
for (let i = 1; i <= 5; i++) {
  let row3 = "";

  // Tạo khoảng trắng trước dấu '*' để dịch chuyển chúng về phía phải.
  for (let k = 1; k <= 5 - i; k++) {
    row3 += " ";
  }

  // Tạo dấu '*' trong từng hàng.
  for (let j = 1; j <= i; j++) {
    row3 += "*";
  }

  console.log("Bài tập số 3: " + row3);
}
console.log("\n");
// Bài tập 4
// * * * * *
//    * * * *
//       * * *
//          * *
//             *
for (let i = 1; i <= 5; i++) {
  let row4 = "";

  // Tạo khoảng trắng phía trước.
  for (let k = 1; k < i; k++) {
    row4 += " ";
  }

  // Tạo dấu '*' trong từng hàng.
  for (let j = i; j <= 5; j++) {
    row4 += "*";
  }

  console.log("Bài tập số 4: " + row4);
}
console.log("\n");
// 5. Hình dạng 5:
//            *
//          * * *
//       * * * * *
//    * * * * * * *
// * * * * * * * * *
for (let i = 1; i <= 5; i++) {
  let row5 = "";

  // Tạo khoảng trắng trước dấu '*' để dịch chuyển chúng về phía phải.
  for (let k = 1; k <= 5 - i; k++) {
    row5 += " ";
  }

  // Tạo dấu '*' trong từng hàng.
  for (let j = 1; j <= 2 * i - 1; j++) {
    row5 += "*";
  }

  console.log("Bài tập số 5: " + row5);
}
console.log("\n");
// 6. Hình dạng 6:
// * * * * * * * * *
//    * * * * * * *
//       * * * * *
//          * * *
//            *
for (let i = 5; i >= 1; i--) {
  let row6 = "";
  for (let k = 5; k > i; k--) {
    row6 += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    row6 += "*";
  }
  console.log("Bài tập số 6: " + row6);
}
// Hình dạng 7
// * * * * * * * * *
//    * * * * * * *
//       * * * * *
//          * * *
//            *
//         * * *
//      * * * * *
//   * * * * * * *
// * * * * * * * *
console.log("\n");
for (let i = 1; i <= 5; i++) {
  let row7 = "";

  // Tạo khoảng trắng phía trước.
  for (let k = 1; k < i; k++) {
    row7 += " "; // Sử dụng hai dấu cách để tạo ra khoảng trắng
  }

  // Tạo dấu '*' trong từng hàng.
  for (let j = 1; j <= 2 * (5 - i) + 1; j++) {
    row7 += "*";
  }

  console.log("Bài tập số 7: " + row7);
}

for (let i = 1; i <= 4; i++) {
  let row7 = "";

  // Tạo khoảng trắng phía trước.
  for (let k = 1; k <= 4 - i; k++) {
    row7 += " "; // Sử dụng hai dấu cách để tạo ra khoảng trắng
  }

  // Tạo dấu '*' trong từng hàng.
  for (let j = 1; j <= 2 * i + 1; j++) {
    row7 += "*";
  }

  console.log("Bài tập số 7: " + row7);
}
console.log("\n");
// Hình dạng 8
// * * * * * * * * * * *
// *                             *
// *                             *
// *                             *
// *                             *
// * * * * * * * * * * *

for (let i = 1; i <= 6; i++) {
  let row8 = "";

  // Kiểm tra nếu đang ở hàng đầu hoặc hàng cuối.
  if (i === 1 || i === 6) {
    for (let j = 1; j <= 20; j++) {
      row8 += "*";
    }
  } else {
    row8 += "*";
    for (let k = 2; k <= 19; k++) {
      row8 += "@";
    }
    row8 += "*";
  }

  console.log("Bài tập số 8: " + row8);
}
