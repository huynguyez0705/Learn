const a = 2;
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function kiemTraSoNguyenTo(soCanKiemTra) {
  soCanKiemTra = parseInt(soCanKiemTra);

  let soNguyenTo = true;

  if (soCanKiemTra <= 1) {
    soNguyenTo = false;
  } else {
    for (let i = 2; i <= Math.sqrt(soCanKiemTra); i++) {
      if (soCanKiemTra % i === 0) {
        soNguyenTo = false;
        break;
      }
    }
  }

  return soNguyenTo;
}

function nhapVaKiemTra() {
  rl.question("Nhập một số: ", (soCanKiemTra) => {
    const ketQua = kiemTraSoNguyenTo(soCanKiemTra);

    if (ketQua) {
      console.log(`Số ${soCanKiemTra} là số nguyên tố.`);
    } else {
      console.log(`Số ${soCanKiemTra} không phải là số nguyên tố.`);
    }

    // Tiếp tục vòng lặp để nhập tiếp
    nhapVaKiemTra();
  });
}

// Bắt đầu vòng lặp bằng cách gọi hàm nhapVaKiemTra lần đầu tiên
nhapVaKiemTra();