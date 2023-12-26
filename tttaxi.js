const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// ;Số km ≤ 1 giá 15000đ
// 1 < số km ≤ 5 giá 13500đ
// Số km > 5 giá 11000đ
// Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền.

function tinhtienTaxi(soKm) {
  let gia = 0;
  if (soKm <= 1) {
    gia = 15000;
  } else if (soKm <= 5) {
    gia = 13500;
  } else {
    gia = 11000;
  }

  let tongTien = soKm * gia;
  if (soKm > 120) {
    tongTien = tongTien * 0.9;
  }
  return tongTien;
}
function main() {
  rl.question(
    "Nhập vào số kilometer đã đi hoặc 'exit' để kết thúc: ",
    (soKm) => {
      const giaTien = tinhtienTaxi(Number(soKm));
      console.log(`Bạn phải trả ${giaTien} đ cho ${soKm} km `);
      main();
    },
  );
}
main();
