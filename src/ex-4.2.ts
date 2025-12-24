function processData(data: unknown): string {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else {
    return "Not a string"
  }
  
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ ส่ง value ที่เป็น number เข้าไปใน function ที่ถูกกำหนดว่าต้อง return ผลลัพธ์ออกมาเป็น string 
//วิธีแก้ไขคือ สร้าง if-else ขึ้นมา
