function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  const n = customers.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (customers[j] > customers[j + 1]) {
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
      }
    }
  }
  return customers;
}
const customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
console.log(sortCustomerName(customers));

// ตอบคำถามตรงนี้จ้า
//buble sort มี Big O เป็น n^2 เพราะมีการใช้ nested loop ซึ่ง loop แต่ละชั้นมี Big O เป็น n ตามจำนวน input เมื่อนำมาซ้อนกัน 2 ครั้วเลยเป็น n^2
